// Página de detalle de producto (producto.html?id=...)

const RELATED_CATEGORIES = {
  "apple-audio": ["otros-audio", "jbl", "wearables"],
  "jbl": ["otros-audio", "apple-audio", "alexa"],
  "otros-audio": ["apple-audio", "jbl"],
  "wearables": ["lentes", "apple-audio", "gaming-tech"],
  "lentes": ["wearables", "gaming-tech"],
  "gaming-tech": ["wearables", "lentes", "alexa"],
  "alexa": ["jbl", "gaming-tech"],
  "accesorios": ["apple-audio", "wearables"],
  "streaming": ["gaming-tech", "premium"],
  "premium": ["lentes", "wearables", "apple-audio"],
};

const SIM_CAROUSEL_COUNT = 12;
const SIM_MORE_STEP = 8;

function primaryCategory(p) {
  return p.categoria.find(c => c !== "destacados") || p.categoria[0];
}

function similarProducts(p) {
  const pc = primaryCategory(p);
  const others = PRODUCTS.filter(x => x.id !== p.id);
  const same = others.filter(x => x.categoria.includes(pc));
  const related = (RELATED_CATEGORIES[pc] || []).flatMap(c => others.filter(x => x.categoria.includes(c)));
  const seen = new Set();
  return [...same, ...related, ...others].filter(x => (seen.has(x.id) ? false : seen.add(x.id))).slice(0, 36);
}

function fmtMoney(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function renderProductPage(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) {
    root.innerHTML = `
      <section class="pd-missing">
        <h2 class="section-title">Producto no encontrado</h2>
        <p class="section-sub">Puede que el enlace esté desactualizado.</p>
        <p style="text-align:center"><a class="btn btn-whatsapp" href="catalogo.html">Ver el catálogo</a></p>
      </section>`;
    return;
  }

  document.title = `${p.name} — AIROX`;
  const d = getProductDetails(p);
  const cat = CATEGORIES.find(c => c.id === primaryCategory(p));
  const isLogo = p.categoria.includes("streaming");

  const thumbs = d.imagenes.length > 1
    ? `<div class="pd-thumbs">${d.imagenes.map((img, i) => `
        <button type="button" class="pd-thumb${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Foto ${i + 1}">
          <img src="images/products/${img}" alt="${p.name} - foto ${i + 1}" loading="lazy">
        </button>`).join("")}</div>`
    : "";

  const arrows = d.imagenes.length > 1
    ? `<button type="button" class="pd-arrow prev" aria-label="Foto anterior">&#10094;</button>
       <button type="button" class="pd-arrow next" aria-label="Foto siguiente">&#10095;</button>
       <span class="pd-counter" id="pd-counter">1 / ${d.imagenes.length}</span>`
    : "";

  const mainImg = d.imagenes.length
    ? `<img id="pd-main" src="images/products/${d.imagenes[0]}" alt="${p.name}">`
    : `<div class="pd-noimg">Foto próximamente</div>`;

  const features = d.caracteristicas.length
    ? `<h3>Características</h3><ul class="pd-features">${d.caracteristicas.map(c => `<li>${c}</li>`).join("")}</ul>`
    : "";

  root.innerHTML = `
    <div class="wrap pd-wrap">
      <nav class="crumbs">
        <a href="index.html">Inicio</a> <span>/</span>
        <a href="catalogo.html">Catálogo</a> <span>/</span>
        ${cat ? `<a href="catalogo.html?cat=${cat.id}">${cat.name}</a> <span>/</span>` : ""}
        <strong>${p.name}</strong>
      </nav>

      <div class="pd-main">
        <div class="pd-gallery">
          ${thumbs}
          <div class="pd-stage${isLogo ? " logo" : ""}" id="pd-stage">
            ${mainImg}
            ${arrows}
          </div>
        </div>

        <div class="pd-info">
          <h1>${p.name}</h1>
          <div class="pd-price" id="pd-price">${p.precio != null ? `S/ ${fmtMoney(p.precio)}` : `<span class="consultar">Consultar precio</span>`}</div>
          ${features}
          <p class="pd-desc">${d.descripcion}</p>

          <div class="pd-qty-row">
            <span>Cantidad</span>
            <div class="pd-qty">
              <button type="button" id="qty-minus" aria-label="Restar">−</button>
              <input type="number" id="qty-input" value="1" min="1" max="99" inputmode="numeric" aria-label="Cantidad">
              <button type="button" id="qty-plus" aria-label="Sumar">+</button>
            </div>
            <span class="pd-subtotal" id="pd-subtotal"></span>
          </div>

          <div class="pd-actions">
            <button type="button" class="btn-add-cart" id="pd-add">Agregar al carrito</button>
            <a class="btn btn-whatsapp" id="pd-buy" target="_blank" rel="noopener" href="#">Comprar</a>
          </div>
          <p class="pd-note">Precio y disponibilidad sujetos a confirmación por WhatsApp. Envíos a todo el Perú vía Shalom o recojo en Moyobamba.</p>
        </div>
      </div>
    </div>

    <section class="similar" id="similar">
      <div class="wrap">
        <h2>Productos similares</h2>
        <div class="sim-carousel">
          <button type="button" class="sim-arrow prev" aria-label="Anterior">&#10094;</button>
          <div class="sim-track" id="sim-track"></div>
          <button type="button" class="sim-arrow next" aria-label="Siguiente">&#10095;</button>
        </div>
        <div class="product-grid sim-more" id="sim-more"></div>
        <div class="sim-more-wrap"><button type="button" class="btn-more" id="sim-more-btn">Mostrar más</button></div>
      </div>
    </section>
  `;

  initGallery(d.imagenes);
  initBuyBox(p);
  initSimilar(p);
}

function initGallery(images) {
  if (images.length < 2) return;
  const main = document.getElementById("pd-main");
  const counter = document.getElementById("pd-counter");
  const thumbs = document.querySelectorAll(".pd-thumb");
  let current = 0;

  function show(i) {
    current = (i + images.length) % images.length;
    main.src = `images/products/${images[current]}`;
    counter.textContent = `${current + 1} / ${images.length}`;
    thumbs.forEach((t, idx) => t.classList.toggle("active", idx === current));
  }

  document.querySelector(".pd-arrow.prev").addEventListener("click", () => show(current - 1));
  document.querySelector(".pd-arrow.next").addEventListener("click", () => show(current + 1));
  thumbs.forEach(t => t.addEventListener("click", () => show(Number(t.dataset.index))));

  let startX = null;
  const stage = document.getElementById("pd-stage");
  stage.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
}

function initBuyBox(p) {
  const input = document.getElementById("qty-input");
  const subtotal = document.getElementById("pd-subtotal");
  const buy = document.getElementById("pd-buy");
  const add = document.getElementById("pd-add");

  function qty() {
    const n = parseInt(input.value, 10);
    return Number.isFinite(n) && n > 0 ? Math.min(n, 99) : 1;
  }

  function refresh() {
    const q = qty();
    input.value = q;
    if (p.precio != null) {
      const total = p.precio * q;
      subtotal.textContent = q > 1 ? `Subtotal: S/ ${fmtMoney(total)}` : "";
      buy.href = waLink(`Hola Airox! Quiero pedir: ${q} x ${p.name} (S/${fmtMoney(p.precio)} c/u). Total: S/${fmtMoney(total)}`);
    } else {
      subtotal.textContent = "";
      buy.href = waLink(`Hola Airox! Quiero consultar el precio de: ${q} x ${p.name}`);
    }
  }

  document.getElementById("qty-minus").addEventListener("click", () => { input.value = qty() - 1; refresh(); });
  document.getElementById("qty-plus").addEventListener("click", () => { input.value = qty() + 1; refresh(); });
  input.addEventListener("input", refresh);
  input.addEventListener("change", refresh);

  add.addEventListener("click", () => {
    addToCart(p.id, qty());
    const original = add.textContent;
    add.textContent = "Agregado ✓";
    add.classList.add("added");
    setTimeout(() => { add.textContent = original; add.classList.remove("added"); }, 1200);
  });

  refresh();
}

function initSimilar(p) {
  const pool = similarProducts(p);
  const track = document.getElementById("sim-track");
  const more = document.getElementById("sim-more");
  const moreBtn = document.getElementById("sim-more-btn");

  const carouselItems = pool.slice(0, SIM_CAROUSEL_COUNT);
  let remaining = pool.slice(SIM_CAROUSEL_COUNT);
  track.innerHTML = carouselItems.map(productCardHTML).join("");

  if (remaining.length === 0) moreBtn.style.display = "none";
  moreBtn.addEventListener("click", () => {
    const batch = remaining.slice(0, SIM_MORE_STEP);
    remaining = remaining.slice(SIM_MORE_STEP);
    more.insertAdjacentHTML("beforeend", batch.map(productCardHTML).join(""));
    if (remaining.length === 0) moreBtn.style.display = "none";
  });

  const wrap = track.parentElement;
  function step() {
    const card = track.querySelector(".product-card");
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
    return card.getBoundingClientRect().width + gap;
  }
  function atEnd() { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }
  function moveTo(left) {
    const before = track.scrollLeft;
    track.scrollTo({ left, behavior: "smooth" });
    setTimeout(() => {
      if (Math.abs(track.scrollLeft - before) < 2 && Math.abs(left - before) > 2) track.scrollTo({ left, behavior: "instant" });
    }, 900);
  }
  function next() { moveTo(atEnd() ? 0 : track.scrollLeft + step()); }
  function prev() { moveTo(track.scrollLeft <= 4 ? track.scrollWidth : track.scrollLeft - step()); }

  wrap.querySelector(".sim-arrow.next").addEventListener("click", () => { next(); restart(); });
  wrap.querySelector(".sim-arrow.prev").addEventListener("click", () => { prev(); restart(); });

  let timer = null;
  let paused = false;
  function start() { stop(); timer = setInterval(() => { if (!paused && !document.hidden) next(); }, 3500); }
  function stop() { if (timer) clearInterval(timer); timer = null; }
  function restart() { start(); }
  wrap.addEventListener("mouseenter", () => { paused = true; });
  wrap.addEventListener("mouseleave", () => { paused = false; });
  wrap.addEventListener("touchstart", () => { paused = true; }, { passive: true });
  wrap.addEventListener("touchend", () => { setTimeout(() => { paused = false; }, 4000); });
  start();
}
