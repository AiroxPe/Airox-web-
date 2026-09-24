const WHATSAPP_NUMBER = "51991648399"; // Airox — 991 648 399

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPrice(p) {
  if (p.precio == null) return `<span class="product-price consultar">Consultar precio</span>`;
  return `<span class="product-price">S/ ${p.precio}</span>`;
}

function productWaLink(p) {
  const precioTxt = p.precio != null ? `(S/${p.precio})` : "(precio a consultar)";
  return waLink(`Hola Airox! Quiero pedir: ${p.name} ${precioTxt}`);
}

function productUrl(p) {
  return `producto.html?id=${encodeURIComponent(p.id)}`;
}

function productCardHTML(p) {
  const img = p.imagen
    ? `<a class="product-img${p.categoria.includes("streaming") ? " logo" : ""}" href="${productUrl(p)}" aria-label="Ver ${p.name}"><img src="images/products/${p.imagen}" alt="${p.name}" loading="lazy"></a>`
    : `<a class="product-img placeholder" href="${productUrl(p)}">Foto próximamente</a>`;
  const nota = p.nota ? `<p class="product-nota">${p.nota}</p>` : "";
  return `
    <div class="product-card" data-id="${p.id}" data-cats="${p.categoria.join(",")}" data-name="${p.name.toLowerCase()}">
      ${img}
      <div class="product-body">
        <h4><a href="${productUrl(p)}">${p.name}</a></h4>
        ${nota}
        ${formatPrice(p)}
        <div class="product-actions">
          <button type="button" class="btn-add-cart" onclick="handleAddToCart(this, '${p.id}')">Agregar al carrito</button>
          <a class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener" href="${productWaLink(p)}">Comprar</a>
        </div>
      </div>
    </div>
  `;
}

function handleAddToCart(btn, id) {
  addToCart(id, 1);
  const original = btn.textContent;
  btn.textContent = "Agregado ✓";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove("added");
  }, 1200);
}

// ---------- Buscador ----------
// Ignora tildes/mayúsculas/guiones, acepta palabras en cualquier orden y variantes de escritura.
function normalizeText(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Grupos de palabras equivalentes (todas apuntan a lo mismo al buscar)
const SEARCH_SYNONYMS = [
  ["alexa", "alaxe", "echo"],
  ["airpods", "airpod", "airpots", "airpot", "audifonos apple"],
  ["oaklay", "oakley"],
  ["rayban", "ray ban"],
  ["audifonos", "audifono", "auriculares", "earbuds", "buds"],
  ["parlante", "parlantes", "bocina", "bocinas", "speaker"],
  ["lentes", "lente", "gafas", "glasses"],
  ["reloj", "relojes", "smartwatch", "watch"],
  ["cargador", "cubo", "cargadores"],
  ["consola", "videojuegos", "juegos", "gamer", "gaming"],
];

let _searchIndex = null;
function searchIndex() {
  if (_searchIndex) return _searchIndex;
  _searchIndex = PRODUCTS.map((p, order) => {
    const cats = p.categoria.map(id => (CATEGORIES.find(c => c.id === id) || {}).name || "").join(" ");
    const name = normalizeText(p.name);
    const text = normalizeText(`${p.name} ${p.nota || ""} ${cats}`);
    return { p, order, name, text, compact: text.replace(/ /g, ""), nameCompact: name.replace(/ /g, "") };
  });
  return _searchIndex;
}

function tokenVariants(token) {
  const variants = new Set([token]);
  SEARCH_SYNONYMS.forEach(group => { if (group.includes(token)) group.forEach(v => variants.add(v.replace(/ /g, ""))); });
  return [...variants];
}

// Devuelve los productos que coinciden, del más al menos relevante.
function searchProducts(query, limit) {
  const q = normalizeText(query);
  if (!q) return [];
  const qCompact = q.replace(/ /g, "");
  const tokens = q.split(" ");
  const results = [];
  searchIndex().forEach(item => {
    const allMatch = tokens.every(t => tokenVariants(t).some(v => item.compact.includes(v)));
    if (!allMatch && !item.compact.includes(qCompact)) return;
    let score = 0;
    if (item.name === q) score += 100;
    if (item.name.startsWith(q)) score += 50;
    if (item.nameCompact.includes(qCompact)) score += 30;
    if (tokens.every(t => item.name.split(" ").some(w => w.startsWith(t)))) score += 15;
    tokens.forEach(t => { if (item.name.includes(t)) score += 4; });
    results.push({ p: item.p, score, order: item.order });
  });
  results.sort((a, b) => b.score - a.score || a.order - b.order);
  const list = results.map(r => r.p);
  return limit ? list.slice(0, limit) : list;
}

function renderCatalog({ gridId, filterId, searchId, initialCategory, initialSearch }) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(productCardHTML).join("");
  const cardById = {};
  grid.querySelectorAll(".product-card").forEach(card => { cardById[card.dataset.id] = card; });
  const originalOrder = PRODUCTS.map(p => p.id);

  const search = searchId ? document.getElementById(searchId) : null;
  if (search && initialSearch) search.value = initialSearch;

  const filterBar = document.getElementById(filterId);
  let currentCat = initialCategory || "all";

  function applyFilters() {
    const term = search ? search.value : "";
    const ranked = term.trim() ? searchProducts(term).map(p => p.id) : originalOrder;
    const rankedSet = new Set(ranked);
    let visible = 0;

    ranked.forEach(id => {
      const card = cardById[id];
      if (card) grid.appendChild(card);
    });
    originalOrder.forEach(id => {
      const card = cardById[id];
      if (!card) return;
      const inCat = currentCat === "all" || card.dataset.cats.split(",").includes(currentCat);
      const show = rankedSet.has(id) && inCat;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    let noResults = grid.querySelector(".no-results");
    if (visible === 0) {
      if (!noResults) {
        noResults = document.createElement("div");
        noResults.className = "no-results";
        grid.appendChild(noResults);
      }
      noResults.textContent = term.trim()
        ? `No encontramos "${term.trim()}". Prueba con otra palabra o escríbenos por WhatsApp, seguro lo tenemos.`
        : "No hay productos en esta categoría todavía.";
      grid.appendChild(noResults);
    } else if (noResults) {
      noResults.remove();
    }

    const info = document.getElementById("search-info");
    if (info) info.textContent = term.trim() ? `${visible} resultado${visible === 1 ? "" : "s"} para "${term.trim()}"` : "";
  }

  if (filterBar) {
    const allBtn = `<button class="filter-btn" data-cat="all">Todos</button>`;
    const catBtns = CATEGORIES.map(c => `<button class="filter-btn" data-cat="${c.id}">${c.name}</button>`).join("");
    filterBar.innerHTML = allBtn + catBtns;
    const buttons = filterBar.querySelectorAll(".filter-btn");
    function setActive(cat) {
      currentCat = cat;
      buttons.forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
      applyFilters();
    }
    buttons.forEach(b => b.addEventListener("click", () => setActive(b.dataset.cat)));
    setActive(currentCat);
  } else {
    applyFilters();
  }

  if (search) search.addEventListener("input", applyFilters);
}

function renderFeaturedRows(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const rows = [];
  for (let i = 0; i < FEATURED_HOME.length; i += 6) {
    rows.push(FEATURED_HOME.slice(i, i + 6));
  }
  const rowTitles = ["Audio Apple", "JBL", "Wearables, lentes y gaming", "Alexa, accesorios y streaming"];
  container.innerHTML = rows.map((ids, i) => {
    const products = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    return `
      <div class="featured-row">
        <h3>${rowTitles[i] || ""}</h3>
        <div class="product-grid">${products.map(productCardHTML).join("")}</div>
      </div>
    `;
  }).join("");
}
