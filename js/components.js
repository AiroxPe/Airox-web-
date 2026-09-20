// Header y Footer compartidos de AIROX. Se inyectan en cada página dentro de
// <div id="site-header"></div> y <div id="site-footer"></div>.

const HERO_SLIDES = [
  {
    img: "images/hero/airpods-pro-2-open.webp",
    alt: "AirPods Pro 2da Generación",
    title: "Tu sonido. Tu estilo. Tu momento.",
    subtitle: "AirPods Pro 2da Generación + ANC — desde S/ 80",
    ctaText: "Ver catálogo",
    ctaHref: "catalogo.html",
  },
  {
    img: "images/products/flip7.png",
    alt: "JBL Flip 7",
    title: "JBL para cada momento",
    subtitle: "Parlantes y audífonos JBL con envío a todo el Perú",
    ctaText: "Ver JBL",
    ctaHref: "catalogo.html?cat=jbl",
  },
  {
    img: "images/products/alaxe-pro-max.png",
    alt: "Alexa Pro Max",
    title: "Tu hogar, más inteligente",
    subtitle: "Alexa, smartwatches y gadgets para el día a día",
    ctaText: "Ver tecnología",
    ctaHref: "catalogo.html?cat=gaming-tech",
  },
  {
    img: "images/brand/logo-dark.jpg",
    alt: "AIROX",
    title: "Envíos a todo el Perú",
    subtitle: "Recojo presencial en Moyobamba o envío nacional vía Shalom",
    ctaText: "Escríbenos por WhatsApp",
    ctaHref: "https://wa.me/51991648399",
  },
];

function heroSlideHTML(slide, index) {
  return `
    <div class="hero-slide ${index === 0 ? "active" : ""}" style="background-image:url('${slide.img}')">
      <div class="hero-slide-overlay">
        <h2>${slide.title}</h2>
        <p>${slide.subtitle}</p>
        <a class="btn btn-primary" href="${slide.ctaHref}">${slide.ctaText}</a>
      </div>
    </div>
  `;
}

function categoryDrawerLinksHTML() {
  return CATEGORIES
    .filter(c => c.id !== "destacados")
    .map(c => `<a href="catalogo.html?cat=${c.id}">${c.name}</a>`)
    .join("");
}

function headerHTML(activePage) {
  const navItem = (href, label, key) =>
    `<a href="${href}" class="${activePage === key ? "active" : ""}">${label}</a>`;

  return `
    <header class="site">
      <div class="hero-carousel" id="hero-carousel">
        ${HERO_SLIDES.map(heroSlideHTML).join("")}
      </div>

      <div class="utility-bar">
        <div class="wrap utility-inner">
          <a href="index.html" class="logo-link">
            <img src="images/brand/logo-dark.jpg" alt="AIROX" class="logo-img">
          </a>
          <button class="icon-btn" id="hamburger-btn" aria-label="Categorías">
            <span></span><span></span><span></span>
          </button>
          <div class="search-wrap">
            <input type="text" id="header-search" placeholder="Buscar producto...">
            <button type="button" id="header-search-btn" aria-label="Buscar">🔍</button>
          </div>
          <button class="icon-btn cart-btn" id="cart-btn" aria-label="Carrito">
            🛒<span id="cart-count" class="cart-badge">0</span>
          </button>
          <button class="btn btn-whatsapp comprar-btn" onclick="window.open(cartWhatsAppLink(), '_blank')">Comprar</button>
        </div>
      </div>

      <nav class="tabs-bar">
        <div class="wrap tabs-inner">
          ${navItem("index.html", "Inicio", "inicio")}
          ${navItem("catalogo.html", "Catálogo", "catalogo")}
          ${navItem("sobre-nosotros.html", "Sobre nosotros", "sobre-nosotros")}
        </div>
      </nav>
    </header>

    <div class="drawer-overlay" id="drawer-overlay"></div>

    <aside class="side-drawer" id="category-drawer">
      <div class="drawer-header">
        <span>Categorías</span>
        <button class="drawer-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="drawer-body category-links">
        ${categoryDrawerLinksHTML()}
      </div>
    </aside>

    <aside class="side-drawer cart-drawer" id="cart-drawer">
      <div class="drawer-header">
        <span>Tu carrito</span>
        <button class="drawer-close" aria-label="Cerrar">✕</button>
      </div>
      <div class="drawer-body" id="cart-drawer-body"></div>
    </aside>
  `;
}

function legalAccordionHTML() {
  return LEGAL_DOCS.map(doc => `
    <div class="legal-item">
      <button type="button" class="legal-title" data-target="legal-${doc.id}">
        ${doc.title}
        <span class="legal-chevron">＋</span>
      </button>
      <div class="legal-content" id="legal-${doc.id}">
        ${doc.html}
      </div>
    </div>
  `).join("");
}

function footerHTML() {
  return `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div class="footer-col footer-legal">
          <h4>Enlaces legales</h4>
          <div class="legal-accordion">
            ${legalAccordionHTML()}
          </div>
        </div>
        <div class="footer-col footer-contact">
          <h4>Síguenos y contáctanos</h4>
          <a href="https://wa.me/51991648399" target="_blank" rel="noopener">💬 WhatsApp: 991 648 399</a>
          <a href="https://www.instagram.com/airox_pe/" target="_blank" rel="noopener">📷 Instagram: @airox_pe</a>
          <a href="https://www.facebook.com/profile.php?id=61585965487130" target="_blank" rel="noopener">📘 Facebook: Airox</a>
          <a href="mailto:airoxpe@gmail.com">✉️ airoxpe@gmail.com</a>
          <p class="footer-location">📍 Moyobamba, San Martín, Perú</p>
        </div>
      </div>
      <p class="footer-bottom">&copy; 2026 AIROX — Tecnología, audio y accesorios.</p>
    </footer>
  `;
}

function initHeroCarousel() {
  const carousel = document.getElementById("hero-carousel");
  if (!carousel) return;
  const slides = carousel.querySelectorAll(".hero-slide");
  if (slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

function initDrawers() {
  const hamburger = document.getElementById("hamburger-btn");
  const cartBtn = document.getElementById("cart-btn");
  const overlay = document.getElementById("drawer-overlay");
  const closeButtons = document.querySelectorAll(".drawer-close");

  if (hamburger) hamburger.addEventListener("click", openCategoryDrawer);
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (overlay) overlay.addEventListener("click", closeAllDrawers);
  closeButtons.forEach(btn => btn.addEventListener("click", closeAllDrawers));
}

function initHeaderSearch() {
  const input = document.getElementById("header-search");
  const btn = document.getElementById("header-search-btn");
  if (!input) return;

  const params = new URLSearchParams(window.location.search);
  const existing = params.get("search");
  if (existing) input.value = existing;

  function go() {
    const term = input.value.trim();
    window.location.href = `catalogo.html${term ? "?search=" + encodeURIComponent(term) : ""}`;
  }
  input.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  if (btn) btn.addEventListener("click", go);
}

function initLegalAccordion() {
  document.querySelectorAll(".legal-title").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const isOpen = target.classList.contains("open");
      document.querySelectorAll(".legal-content.open").forEach(el => el.classList.remove("open"));
      document.querySelectorAll(".legal-title.open").forEach(el => el.classList.remove("open"));
      if (!isOpen) {
        target.classList.add("open");
        btn.classList.add("open");
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  });
}

function renderLayout(activePage) {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = headerHTML(activePage);
  if (footerEl) footerEl.innerHTML = footerHTML();

  initHeroCarousel();
  initDrawers();
  initHeaderSearch();
  initLegalAccordion();
  renderCartUI();
}
