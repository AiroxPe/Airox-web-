// Catálogo de productos AIROX
// Para actualizar precios o agregar productos, edita este archivo.
// Cada producto: id, nombre, categoria, precio (venta, en soles), imagen, destacado, nota (opcional)

const CATEGORIES = [
  { id: "destacados", name: "Destacados" },
  { id: "apple-audio", name: "Audio Apple" },
  { id: "jbl", name: "JBL" },
  { id: "otros-audio", name: "Otros Audífonos" },
  { id: "wearables", name: "Smartwatches" },
  { id: "lentes", name: "Lentes Inteligentes" },
  { id: "gaming-tech", name: "Gaming y Tecnología" },
  { id: "alexa", name: "Alexa" },
  { id: "accesorios", name: "Accesorios y Cargadores" },
  { id: "streaming", name: "Streaming y Suscripciones" },
  { id: "premium", name: "Equipos Premium" },
];

const PRODUCTS = [
  // Destacado
  { id: "airpods-pro-2", name: "AirPods Pro 2da Generación + ANC", categoria: ["destacados", "apple-audio"], precio: 80, imagen: "airpods-pro-2.png", destacado: true },

  // Audio Apple
  { id: "airpods-4", name: "AirPods 4ta Generación + ANC", categoria: ["apple-audio"], precio: 95, imagen: "airpods-4.png" },
  { id: "airpods-pro-3", name: "AirPods Pro 3ra Generación + ANC", categoria: ["apple-audio"], precio: 99, imagen: "airpods-pro-3.png" },
  { id: "airpods-max-a1", name: "AirPods Max (Calidad A1)", categoria: ["apple-audio"], precio: 115, imagen: "airpods-max-a1.png", nota: "Almohadilla intercambiable" },
  { id: "airpods-max-a2", name: "AirPods Max (Calidad A2)", categoria: ["apple-audio"], precio: 104, imagen: "airpods-max-a2.png", nota: "Almohadilla intercambiable" },
  { id: "airpods-max-a3", name: "AirPods Max (Calidad A3)", categoria: ["apple-audio"], precio: 69, imagen: "airpods-max-a3.png", nota: "Almohadilla intercambiable" },
  { id: "earpods-c", name: "EarPods Apple (cable, entrada C)", categoria: ["apple-audio"], precio: 35, imagen: "earpods-c.png" },

  // JBL
  { id: "boombox4", name: "JBL Boombox 4 c/ Bass", categoria: ["jbl"], precio: 279, imagen: "boombox4.png" },
  { id: "boombox3", name: "JBL Boombox 3", categoria: ["jbl"], precio: 95, imagen: "boombox3.png" },
  { id: "boombox4-mini", name: "JBL Boombox 4 Mini", categoria: ["jbl"], precio: 85, imagen: "boombox4-mini.png" },
  { id: "flip7", name: "JBL Flip 7", categoria: ["jbl"], precio: 85, imagen: "flip7.png" },
  { id: "grip", name: "JBL Grip", categoria: ["jbl"], precio: 87, imagen: "grip.png" },
  { id: "go4", name: "JBL Go 4", categoria: ["jbl"], precio: 59, imagen: "go4.png" },
  { id: "go4-pro", name: "JBL Go 4 Pro", categoria: ["jbl"], precio: 65, imagen: "go4-pro.png" },
  { id: "charge6", name: "JBL Charge 6", categoria: ["jbl"], precio: 89, imagen: "charge6.png", nota: "Negro, morado, rojo y azul" },
  { id: "case-charge6", name: "Case para JBL Charge 6", categoria: ["jbl", "accesorios"], precio: 55, imagen: "case-charge6.png" },
  { id: "xtreme4", name: "JBL Xtreme 4", categoria: ["jbl"], precio: 99, imagen: "xtreme4.png" },
  { id: "xtreme4-mini", name: "JBL Xtreme 4 Mini", categoria: ["jbl"], precio: 75, imagen: "xtreme4-mini.png" },
  { id: "clip5", name: "JBL Clip 5", categoria: ["jbl"], precio: 55, imagen: "clip5.png" },
  { id: "tour-pro2", name: "JBL Tour Pro 2", categoria: ["jbl"], precio: 79, imagen: "tour-pro2.png" },
  { id: "tour-pro3", name: "JBL Tour Pro 3", categoria: ["jbl"], precio: 85, imagen: "tour-pro3.png" },
  { id: "tour-pro4", name: "JBL Tour Pro 4", categoria: ["jbl"], precio: 99, imagen: "tour-pro4.png" },
  { id: "tour-pro5", name: "JBL Tour Pro 5", categoria: ["jbl"], precio: 109, imagen: "tour-pro5.png" },
  { id: "tour-pro6", name: "JBL Tour Pro 6", categoria: ["jbl"], precio: 109, imagen: "tour-pro6.png" },
  { id: "case-tour-pro", name: "Case para JBL Tour Pro", categoria: ["jbl", "accesorios"], precio: 15, imagen: "case-tour-pro.png" },
  { id: "tune760", name: "JBL Tune 760BT", categoria: ["jbl"], precio: 69, imagen: "tune760.png" },

  // Otros audífonos
  { id: "galaxy-buds2-pro", name: "Galaxy Buds 2 Pro", categoria: ["otros-audio"], precio: 74, imagen: "galaxy-buds2-pro.png" },
  { id: "galaxy-buds3-pro", name: "Galaxy Buds 3 Pro", categoria: ["otros-audio"], precio: 75, imagen: "galaxy-buds3-pro.png" },
  { id: "galaxy-buds10-pro", name: "Galaxy Buds 10 Pro", categoria: ["otros-audio"], precio: 79, imagen: "galaxy-buds10-pro.png" },
  { id: "audifonos-p9", name: "Audífonos P9", categoria: ["otros-audio"], precio: 39, imagen: "audifonos-p9.png" },
  { id: "m62-traductor", name: "M62 Traductor +130 idiomas", categoria: ["otros-audio", "gaming-tech"], precio: 99, imagen: "m62-traductor.png" },

  // Wearables
  { id: "apple-watch", name: "Apple Watch", categoria: ["wearables"], precio: 149, imagen: "apple-watch.png" },
  { id: "apple-watch-airpods-combo", name: "Apple Watch + AirPods 2da Gen con ANC", categoria: ["wearables", "destacados"], precio: 199, imagen: "apple-watch-airpods-combo.png" },
  { id: "hi-watch-pro", name: "Hi Watch Pro", categoria: ["wearables"], precio: 69, imagen: "hi-watch-pro.png" },
  { id: "ultra3", name: "Ultra 3", categoria: ["wearables"], precio: 65, imagen: "ultra3.png" },
  { id: "case-smartwatch", name: "Case para Smartwatch", categoria: ["wearables", "accesorios"], precio: 24, imagen: "case-smartwatch.png" },

  // Lentes inteligentes
  { id: "s3-ultra", name: "Lentes con Cámara S3 Ultra", categoria: ["lentes"], precio: 189, imagen: "s3-ultra.png" },
  { id: "lentes-inteligentes", name: "Lentes Inteligentes", categoria: ["lentes"], precio: 249, imagen: "lentes-inteligentes.png" },
  { id: "rayban-meta", name: "Rayban Meta", categoria: ["lentes"], precio: 1299, imagen: null },
  { id: "oaklay-g5-max", name: "Oaklay G5 Max", categoria: ["lentes"], precio: 269, imagen: null },
  { id: "rayban-meta-mt5", name: "Rayban Meta MT5 Ultra", categoria: ["lentes"], precio: 369, imagen: null },
  { id: "cy01-lentes", name: "CY01 Lentes Inteligente", categoria: ["lentes"], precio: 269, imagen: null },

  // Gaming y tecnología
  { id: "pry012-proyector", name: "Proyector PRY-012", categoria: ["gaming-tech"], precio: 369, imagen: "pry012-proyector.png" },
  { id: "game-projector", name: "Game Projector", categoria: ["gaming-tech"], precio: 199, imagen: "game-projector.png" },
  { id: "consola-m4", name: "Consola M4 (Verde) + 2 mandos", categoria: ["gaming-tech"], precio: 129, imagen: "consola-m4.png", nota: "Más de 15 mil videojuegos incluidos" },
  { id: "x2-plus-64gb", name: "X2 Plus 64GB", categoria: ["gaming-tech"], precio: 159, imagen: "x2-plus-64gb.png" },
  { id: "e88-drone", name: "Drone E88", categoria: ["gaming-tech"], precio: 89, imagen: "e88-drone.png" },
  { id: "walkie-talkie", name: "Walkie Talkie FX", categoria: ["gaming-tech"], precio: 99, imagen: "walkie-talkie.png" },

  // Alexa
  { id: "alaxe-pantalla", name: "Alexa con Pantalla", categoria: ["alexa"], precio: 65, imagen: "alaxe-pantalla.png" },
  { id: "alaxe-sin-pantalla", name: "Alexa sin Pantalla", categoria: ["alexa"], precio: 59, imagen: "alaxe-sin-pantalla.png" },
  { id: "alaxe-pro-max", name: "Alexa Pro Max", categoria: ["alexa"], precio: 79, imagen: "alaxe-pro-max.png", nota: "Morado, azul, blanco, rojo y negro" },

  // Accesorios y cargadores
  { id: "cubo-20w-c", name: "Cubo 20W iPhone (entrada C)", categoria: ["accesorios"], precio: 25, imagen: "cubo-20w-c.png" },
  { id: "cubo-40w-c", name: "Cubo 40W iPhone (entrada C)", categoria: ["accesorios"], precio: 35, imagen: "cubo-40w-c.png" },
  { id: "cable-cc-1m", name: "Cable iPhone Trenzado C a C (1m)", categoria: ["accesorios"], precio: 18, imagen: "cable-cc-1m.png" },
  { id: "cable-c-lightning-1m", name: "Cable iPhone C a Lightning (1m)", categoria: ["accesorios"], precio: 19, imagen: "cable-c-lightning-1m.png" },
  { id: "cable-c-lightning-2m", name: "Cable iPhone C a Lightning (2m)", categoria: ["accesorios"], precio: 24, imagen: "cable-c-lightning-2m.png" },
  { id: "cable-cubo-cc", name: "Cable + Cubo iPhone C a C Trenzado", categoria: ["accesorios"], precio: 35, imagen: "cable-cubo-cc.png" },
  { id: "cable-cubo-lightning", name: "Cable + Cubo iPhone C a Lightning", categoria: ["accesorios"], precio: 36, imagen: "cable-cubo-lightning.png" },
  { id: "cable-cubo-40w", name: "Cable + Cubo 40W iPhone C a C", categoria: ["accesorios"], precio: 45, imagen: "cable-cubo-40w.png" },
  { id: "magsafe-20000", name: "MagSafe 20 000 mAh", categoria: ["accesorios"], precio: 59, imagen: "magsafe-20000.png" },
  { id: "magsafe-5000", name: "MagSafe 5 000 mAh", categoria: ["accesorios"], precio: 49, imagen: "magsafe-5000.png" },
  { id: "magsafe-10000", name: "MagSafe 10 000 mAh", categoria: ["accesorios"], precio: 55, imagen: "magsafe-10000.png" },
  { id: "magnetic-charger", name: "Cargador Magnético", categoria: ["accesorios"], precio: 39, imagen: "magnetic-charger.png" },
  { id: "case-airpods-4", name: "Case AirPods 4ta Gen", categoria: ["accesorios"], precio: 10, imagen: "case-airpods-4.png" },
  { id: "case-airpods-2", name: "Case AirPods 2da Gen", categoria: ["accesorios"], precio: 10, imagen: "case-airpods-2.png" },
  { id: "cofre-reloj", name: "Cofre para Reloj", categoria: ["accesorios"], precio: 24, imagen: "cofre-reloj.png" },
  { id: "combo-100w-samsung", name: "Combo 100W Samsung", categoria: ["accesorios"], precio: 39, imagen: "combo-100w-samsung.png" },
  { id: "cable-cc-samsung", name: "Cable C a C Samsung", categoria: ["accesorios"], precio: 24, imagen: "cable-cc-samsung.png" },
  { id: "combo-45w-samsung", name: "Combo 45W Samsung", categoria: ["accesorios"], precio: 40, imagen: "combo-45w-samsung.png" },

  // Streaming y suscripciones (sin imagen — se muestran como tarjetas de precio)
  { id: "netflix", name: "Netflix (1 mes)", categoria: ["streaming"], precio: 16, imagen: null },
  { id: "netflix-premium", name: "Netflix Premium (1 mes)", categoria: ["streaming"], precio: 19.5, imagen: null },
  { id: "hbo-max", name: "HBO Max (1 mes)", categoria: ["streaming"], precio: 15, imagen: null },
  { id: "prime-video", name: "Prime Video (1 mes)", categoria: ["streaming"], precio: 15, imagen: null },
  { id: "vix-premium", name: "Vix Premium (1 mes)", categoria: ["streaming"], precio: 14, imagen: null },
  { id: "spotify-premium", name: "Spotify Premium (1 mes)", categoria: ["streaming"], precio: 12, imagen: null },
  { id: "disney-plus", name: "Disney+ (1 mes)", categoria: ["streaming"], precio: 15, imagen: null },
  { id: "paramount", name: "Paramount+ (1 mes)", categoria: ["streaming"], precio: 14, imagen: null },
  { id: "crunchyroll", name: "Crunchyroll (1 mes)", categoria: ["streaming"], precio: 10, imagen: null },
  { id: "youtube-premium", name: "YouTube Premium (1 mes)", categoria: ["streaming"], precio: 10, imagen: null },
  { id: "expressvpn", name: "ExpressVPN (1 mes)", categoria: ["streaming"], precio: 14, imagen: null },
  { id: "epic-games", name: "Epic Games (1 mes)", categoria: ["streaming"], precio: 45, imagen: null },
  { id: "filmora", name: "Filmora (2 meses)", categoria: ["streaming"], precio: 20, imagen: null },
  { id: "capcut", name: "CapCut Pro (1 mes)", categoria: ["streaming"], precio: 22, imagen: null },
  { id: "chatgpt", name: "ChatGPT Plus", categoria: ["streaming"], precio: null, imagen: null, nota: "Consultar disponibilidad y precio" },
  { id: "google-one", name: "Google One: Gemini Pro + 5TB", categoria: ["streaming"], precio: null, imagen: null, nota: "Consultar disponibilidad y precio" },
  { id: "claude-pro", name: "Claude Pro (Code + Cowork)", categoria: ["streaming"], precio: null, imagen: null, nota: "Consultar disponibilidad y precio" },

  // Equipos premium (cotizar)
  { id: "iphone", name: "iPhone", categoria: ["premium"], precio: null, imagen: null, nota: "Cotizar según stock, modelo y precio" },
  { id: "macbook", name: "MacBook (Air / Pro)", categoria: ["premium"], precio: null, imagen: null, nota: "Cotizar según stock y modelo" },
  { id: "ipad", name: "iPad", categoria: ["premium"], precio: null, imagen: null, nota: "Cotizar según stock y modelo" },
  { id: "perfumes-arabes", name: "Perfumes Árabes", categoria: ["premium"], precio: null, imagen: null, nota: "Consultar catálogo disponible" },
  { id: "ropa-streetwear", name: "Ropa Streetwear", categoria: ["premium"], precio: null, imagen: null, nota: "Consultar catálogo disponible" },
];
