const WHATSAPP_NUMBER = "51991648399"; // Airox — 991 648 399

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productWaLink(p) {
  const precioTxt = p.precio != null ? `(S/${p.precio})` : "(precio a consultar)";
  return waLink(`Hola Airox! Quiero pedir: ${p.name} ${precioTxt}`);
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
        <a class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener" href="${productWaLink(p)}">Pedir por WhatsApp</a>
      </div>
    </div>
  `;
}

function renderCatalog({ gridId, filterId, searchId, initialCategory }) {
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
    applyFilters("all", "");
  }

  const search = searchId ? document.getElementById(searchId) : null;
  if (search) {
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

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }
}

document.addEventListener("DOMContentLoaded", initNavToggle);
