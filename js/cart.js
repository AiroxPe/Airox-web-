// Carrito de compras AIROX (persistido en localStorage, sin backend).

const CART_KEY = "airox_cart";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    // almacenamiento no disponible (modo privado, etc.) — el carrito solo dura la sesión
  }
  renderCartUI();
}

function findProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function addToCart(id, qty = 1) {
  const product = findProduct(id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function setQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (qty <= 0) {
    saveCart(cart.filter(i => i.id !== id));
  } else {
    item.qty = qty;
    saveCart(cart);
  }
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, i) => {
    const p = findProduct(i.id);
    if (!p || p.precio == null) return sum;
    return sum + p.precio * i.qty;
  }, 0);
}

function cartHasConsultarItems() {
  return getCart().some(i => {
    const p = findProduct(i.id);
    return p && p.precio == null;
  });
}

function cartWhatsAppLink() {
  const cart = getCart();
  if (cart.length === 0) {
    return waLink("Hola Airox! Quiero hacer una consulta.");
  }
  const lines = cart.map(i => {
    const p = findProduct(i.id);
    if (!p) return "";
    const precioTxt = p.precio != null ? `S/${p.precio} c/u` : "precio a consultar";
    return `- ${p.name} x${i.qty} (${precioTxt})`;
  }).filter(Boolean);
  const total = cartTotal();
  const totalTxt = cartHasConsultarItems()
    ? `Subtotal: S/${total} + productos a consultar`
    : `Total: S/${total}`;
  const message = `Hola Airox! Quiero hacer este pedido:\n${lines.join("\n")}\n${totalTxt}`;
  return waLink(message);
}

function cartDrawerHTML() {
  const cart = getCart();
  if (cart.length === 0) {
    return `<div class="cart-empty">Tu carrito está vacío.<br>Agrega productos desde el catálogo.</div>`;
  }
  const items = cart.map(i => {
    const p = findProduct(i.id);
    if (!p) return "";
    const img = p.imagen ? `images/products/${p.imagen}` : null;
    const precioTxt = p.precio != null ? `S/ ${p.precio}` : "Consultar";
    return `
      <div class="cart-item">
        <div class="cart-item-img">${img ? `<img src="${img}" alt="${p.name}">` : ""}</div>
        <div class="cart-item-info">
          <p class="cart-item-name">${p.name}</p>
          <p class="cart-item-price">${precioTxt}</p>
          <div class="cart-item-qty">
            <button type="button" onclick="setQty('${p.id}', ${i.qty - 1})" aria-label="Restar">−</button>
            <span>${i.qty}</span>
            <button type="button" onclick="setQty('${p.id}', ${i.qty + 1})" aria-label="Sumar">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" onclick="removeFromCart('${p.id}')" aria-label="Quitar">✕</button>
      </div>
    `;
  }).join("");

  const total = cartTotal();
  const totalLine = cartHasConsultarItems()
    ? `Subtotal: S/ ${total} <span class="cart-note-inline">+ productos a consultar</span>`
    : `S/ ${total}`;

  return `
    ${items}
    <div class="cart-discount-note">
      Para compras de mayor volumen, coméntanos por WhatsApp: evaluamos contigo un descuento según la cantidad de productos.
    </div>
    <div class="cart-total-row">
      <span>Total</span>
      <span class="cart-total-amount">${totalLine}</span>
    </div>
    <a class="btn btn-whatsapp cart-checkout" target="_blank" rel="noopener" href="${cartWhatsAppLink()}">Comprar por WhatsApp</a>
  `;
}

function renderCartUI() {
  const badge = document.getElementById("cart-count");
  if (badge) {
    const count = cartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
  const drawerBody = document.getElementById("cart-drawer-body");
  if (drawerBody) {
    drawerBody.innerHTML = cartDrawerHTML();
  }
}

function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("visible");
  closeCategoryDrawer();
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) drawer.classList.remove("open");
  updateOverlay();
}

function openCategoryDrawer() {
  const drawer = document.getElementById("category-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("visible");
  closeCart();
}

function closeCategoryDrawer() {
  const drawer = document.getElementById("category-drawer");
  if (drawer) drawer.classList.remove("open");
  updateOverlay();
}

function updateOverlay() {
  const cart = document.getElementById("cart-drawer");
  const cat = document.getElementById("category-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const anyOpen = (cart && cart.classList.contains("open")) || (cat && cat.classList.contains("open"));
  if (overlay) overlay.classList.toggle("visible", !!anyOpen);
}

function closeAllDrawers() {
  const cart = document.getElementById("cart-drawer");
  const cat = document.getElementById("category-drawer");
  if (cart) cart.classList.remove("open");
  if (cat) cat.classList.remove("open");
  updateOverlay();
}

document.addEventListener("DOMContentLoaded", renderCartUI);
