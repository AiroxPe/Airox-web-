const WHATSAPP_NUMBER = "51991648399"; // Airox — 991 648 399

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPrice(p) {
  if (p.precio == null) return `<span class="product-price consultar">Consultar precio</span>`;
  return `<span class="product-price">S/ ${p.precio}</span>`;
}

function productCardHTML(p) {
  const img = p.imagen
    ? `<div class="product-img"><img src="images/products/${p.imagen}" alt="${p.name}" loading="lazy"></div>`
    : `<div class="product-img placeholder">Foto próximamente</div>`;
  const nota = p.nota ? `<p class="product-nota">${p.nota}</p>` : "";
  return `
    <div class="product-card" data-cats="${p.categoria.join(",")}" data-name="${p.name.toLowerCase()}">
      ${img}
      <div class="product-body">
        <h4>${p.name}</h4>
        ${nota}
        ${formatPrice(p)}
        <div class="product-actions">
          <button type="button" class="btn-add-cart" onclick="handleAddToCart(this, '${p.id}')">Agregar al carrito</button>
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

function renderCatalog({ gridId, filterId, searchId, initialCategory, initialSearch }) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(productCardHTML).join("");

  const filterBar = document.getElementById(filterId);
  if (filterBar) {
    const allBtn = `<button class="filter-btn" data-cat="all">Todos</button>`;
    const catBtns = CATEGORIES.map(c => `<button class="filter-btn" data-cat="${c.id}">${c.name}</button>`).join("");
    filterBar.innerHTML = allBtn + catBtns;

    const buttons = filterBar.querySelectorAll(".filter-btn");
    function setActive(cat) {
      buttons.forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
      applyFilters(cat, searchId ? document.getElementById(searchId).value : "");
    }
    buttons.forEach(b => b.addEventListener("click", () => setActive(b.dataset.cat)));
    setActive(initialCategory || "all");
  } else {
    applyFilters("all", initialSearch || "");
  }

  const search = searchId ? document.getElementById(searchId) : null;
  if (search) {
    if (initialSearch) search.value = initialSearch;
    search.addEventListener("input", () => {
      const activeBtn = filterBar ? filterBar.querySelector(".filter-btn.active") : null;
      applyFilters(activeBtn ? activeBtn.dataset.cat : "all", search.value);
    });
  }

  function applyFilters(cat, term) {
    const cards = grid.querySelectorAll(".product-card");
    const t = term.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const cats = card.dataset.cats.split(",");
      const matchesCat = cat === "all" || cats.includes(cat);
      const matchesTerm = !t || card.dataset.name.includes(t);
      const show = matchesCat && matchesTerm;
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });
    let noResults = grid.querySelector(".no-results");
    if (visible === 0) {
      if (!noResults) {
        noResults = document.createElement("div");
        noResults.className = "no-results";
        noResults.textContent = "No encontramos productos con ese filtro. Escríbenos por WhatsApp, seguro lo tenemos.";
        grid.appendChild(noResults);
      }
    } else if (noResults) {
      noResults.remove();
    }
  }
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
