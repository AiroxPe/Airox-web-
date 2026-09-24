// Detalles de cada producto (página producto.html): fotos extra, características y descripción.
// Editar aquí. Si un producto no aparece, se usan las fotos/valores por defecto de su categoría.
// Solo escribir datos confirmados (catálogo del proveedor, fotos o lo que AIROX confirme).

const DETAILS = {
  // ---------- Audio Apple ----------
  "airpods-pro-2": {
    imagenes: ["airpods-pro-2.webp", "airpods-pro-2-b.webp", "airpods-pro-2-c.webp", "airpods-pro-2-real.jpg"],
    caracteristicas: [
      "Cancelación activa de ruido (ANC)",
      "Estuche de carga con conexión USB-C (Type-C)",
      "Incluye cable de carga trenzado, cordón y almohadillas de repuesto",
    ],
    descripcion: "Nuestro producto estrella: audífonos inalámbricos con cancelación activa de ruido y estuche de carga USB-C, listos para usar desde la caja.",
  },
  "airpods-4": {
    caracteristicas: ["Cancelación activa de ruido (ANC)", "Estuche de carga incluido"],
    descripcion: "Audífonos inalámbricos de 4ta generación con cancelación activa de ruido.",
  },
  "airpods-pro-3": {
    caracteristicas: [
      "Traducción de voz en tiempo real (vía Apple Intelligence)",
      "Cancelación activa de ruido (ANC) de nivel profesional",
      "Cuatro modos de sonido mejorado",
      "Audio espacial personalizado con seguimiento dinámico de la cabeza",
      "Control por gestos (presión y deslizamiento)",
      "Búsqueda de precisión para auriculares y estuche",
      "Carga inalámbrica mediante MagSafe o USB-C",
    ],
    descripcion: "Audífonos inalámbricos de 3ra generación con cancelación activa de ruido y funciones avanzadas de audio.",
  },
  "airpods-max-a1": {
    caracteristicas: [
      "Conexión automática con el iPhone",
      "Almohadillas magnéticas intercambiables (fáciles de reemplazar o personalizar)",
      "Cancelación activa de ruido (ANC) de nivel profesional",
      "Digital Crown para control de volumen y reproducción",
      "Malla tejida transpirable en la diadema para reducir la presión",
      "Estructura de acero inoxidable con brazos telescópicos",
    ],
    descripcion: "Audífonos de diadema inalámbricos, versión de mayor calidad de nuestra línea AirPods Max.",
  },
  "airpods-max-a2": {
    caracteristicas: [
      "Conexión automática con el iPhone",
      "Almohadillas magnéticas",
      "Digital Crown para control de volumen y reproducción",
      "Malla tejida transpirable en la diadema para reducir la presión",
      "Estructura de acero inoxidable con brazos telescópicos",
      "Colores: rosado, negro, gris, beige y azul",
    ],
    descripcion: "Audífonos de diadema inalámbricos, versión intermedia de nuestra línea AirPods Max.",
  },
  "airpods-max-a3": {
    caracteristicas: [
      "Conexión automática con el iPhone",
      "Digital Crown para control de volumen y reproducción",
      "Vincha con almohadilla",
      "Estructura de acero inoxidable con brazos telescópicos",
      "Colores: rosado, negro, gris, verde y azul",
    ],
    descripcion: "Audífonos de diadema inalámbricos, versión económica de nuestra línea AirPods Max.",
  },
  "earpods-c": {
    caracteristicas: ["Audífonos con cable", "Conector USB-C (entrada C)"],
    descripcion: "Audífonos con cable de diseño clásico, para dispositivos con entrada USB-C.",
  },

  // ---------- JBL ----------
  "boombox4": {
    caracteristicas: ["Potencia: 60 W", "Autonomía: de 6 a 8 horas", "Con refuerzo de graves (Bass)"],
    descripcion: "Parlante portátil de gran potencia, ideal para reuniones y fiestas.",
  },
  "boombox3": {
    caracteristicas: ["Parlante portátil Bluetooth de gran formato"],
    descripcion: "Parlante portátil de la línea Boombox.",
  },
  "boombox4-mini": {
    caracteristicas: ["Potencia: 30 W", "Colores: verde camuflado, negro, azul y rojo"],
    descripcion: "Versión compacta del Boombox 4, portátil y potente.",
  },
  "flip7": {
    imagenes: ["flip7.png", "flip7-2.jpg"],
    caracteristicas: ["Potencia: 25 W"],
    descripcion: "Parlante portátil cilíndrico, fácil de llevar a todas partes.",
  },
  "grip": {
    caracteristicas: ["Potencia: 25 W", "Colores: negro, azul, rojo, morado y verde camuflado"],
    descripcion: "Parlante portátil de la línea JBL con varias opciones de color.",
  },
  "go4": {
    caracteristicas: ["Potencia: 5 W", "Colores: negro, azul y morado"],
    descripcion: "Parlante ultraportátil, pequeño y práctico para el día a día.",
  },
  "go4-pro": {
    caracteristicas: ["Colores: negro, verde camuflado, verde agua, rojo y azul"],
    descripcion: "Parlante ultraportátil versión Pro, con varias opciones de color.",
  },
  "charge6": {
    caracteristicas: ["Colores disponibles: negro, rojo, morado y azul"],
    descripcion: "Parlante portátil de la línea Charge.",
  },
  "case-charge6": {
    caracteristicas: ["Estuche de transporte para parlante Charge 6"],
    descripcion: "Estuche para guardar y transportar tu parlante JBL Charge 6.",
  },
  "xtreme4": {
    caracteristicas: ["Potencia: 30 W", "Colores: verde camuflado, negro, azul y rojo"],
    descripcion: "Parlante portátil de la línea Xtreme, con sonido potente.",
  },
  "xtreme4-mini": {
    caracteristicas: ["Versión compacta del parlante Xtreme 4"],
    descripcion: "Parlante portátil compacto de la línea Xtreme.",
  },
  "clip5": {
    caracteristicas: ["Potencia: 5 W", "Colores: negro, blanco, camuflado, azul y morado"],
    descripcion: "Parlante mini portátil, para llevar a donde quieras.",
  },
  "tour-pro2": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos JBL Tour Pro 2." },
  "tour-pro3": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos JBL Tour Pro 3." },
  "tour-pro4": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos JBL Tour Pro 4." },
  "tour-pro5": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos JBL Tour Pro 5." },
  "tour-pro6": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos Tour Pro 6." },
  "case-tour-pro": {
    caracteristicas: ["Estuche protector para JBL Tour Pro"],
    descripcion: "Protege el estuche de carga de tus audífonos Tour Pro.",
  },
  "tune760": { caracteristicas: ["Audífonos inalámbricos JBL Tune 760BT"], descripcion: "Audífonos inalámbricos JBL Tune 760BT." },

  // ---------- Otros audífonos ----------
  "galaxy-buds2-pro": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos estilo Galaxy Buds 2 Pro." },
  "galaxy-buds3-pro": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos estilo Galaxy Buds 3 Pro." },
  "galaxy-buds10-pro": { caracteristicas: ["Audífonos inalámbricos con estuche de carga"], descripcion: "Audífonos inalámbricos estilo Galaxy Buds Pro." },
  "audifonos-p9": { caracteristicas: ["Audífonos inalámbricos"], descripcion: "Audífonos inalámbricos P9, opción práctica y económica." },
  "m62-traductor": {
    caracteristicas: ["Traducción en tiempo real", "Más de 130 idiomas"],
    descripcion: "Audífonos traductores para conversar en distintos idiomas en tiempo real.",
  },

  // ---------- Smartwatches ----------
  "apple-watch": { caracteristicas: ["Smartwatch estilo Apple Watch"], descripcion: "Reloj inteligente estilo Apple Watch." },
  "apple-watch-airpods-combo": {
    caracteristicas: ["Incluye smartwatch estilo Apple Watch", "Incluye AirPods 2da generación con cancelación activa de ruido (ANC)"],
    descripcion: "Combo de reloj inteligente y audífonos inalámbricos en un solo pedido.",
  },
  "hi-watch-pro": { caracteristicas: ["Smartwatch HiWatch Pro (modelo TX10 Promax)"], descripcion: "Reloj inteligente HiWatch Pro." },
  "ultra3": { caracteristicas: ["Smartwatch modelo Ultra 3"], descripcion: "Reloj inteligente modelo Ultra 3." },
  "case-smartwatch": { caracteristicas: ["Case protector para smartwatch"], descripcion: "Case para proteger tu reloj inteligente." },

  // ---------- Lentes inteligentes ----------
  "s3-ultra": {
    caracteristicas: [
      "Cámara e inteligencia artificial Full HD",
      "Bluetooth: música y llamadas",
      "Wi-Fi para traspaso de imágenes y videos",
      "Batería: 8 horas",
    ],
    descripcion: "Lentes inteligentes con cámara e IA, con reconocimiento de imagen, video y traducción multilingüe.",
  },
  "lentes-inteligentes": { caracteristicas: ["Lentes inteligentes con cámara"], descripcion: "Lentes inteligentes con cámara. Consulta por WhatsApp el detalle del modelo." },
  "rayban-meta": {
    imagenes: ["rayban-meta.png", "rayban-meta-2.jpg", "rayban-meta-3.jpg", "rayban-meta-4.jpg"],
    caracteristicas: ["Modelo Ray-Ban Meta Gen 1", "Lentes con cámara"],
    descripcion: "Lentes con cámara modelo Ray-Ban Meta Gen 1. Consulta por WhatsApp disponibilidad, garantía y detalles antes de comprar.",
  },
  "oaklay-g5-max": {
    imagenes: ["oaklay-g5-max.jpg", "oaklay-g5-max-2.jpg", "oaklay-g5-max-3.jpg"],
    caracteristicas: ["Lentes con cámara (AI Glasses)", "Diseño deportivo con luna espejada"],
    descripcion: "Lentes inteligentes con cámara y diseño deportivo.",
  },
  "rayban-meta-mt5": {
    imagenes: ["rayban-meta-mt5.jpg", "rayban-meta-mt5-2.jpg"],
    caracteristicas: [
      "Lentes con cámara Full HD",
      "Diseño inspirado en Ray-Ban Meta (no es producto oficial de la marca)",
      "Estuche disponible en color marrón o negro",
    ],
    descripcion: "Lentes inteligentes con cámara Full HD y estuche, con diseño inspirado en Ray-Ban Meta.",
  },
  "cy01-lentes": { caracteristicas: ["Lentes con cámara"], descripcion: "Lentes inteligentes CY01 con cámara." },

  // ---------- Gaming y tecnología ----------
  "pry012-proyector": { caracteristicas: ["Proyector modelo PRY-012"], descripcion: "Proyector para ver películas, series y videos en pantalla grande." },
  "game-projector": { caracteristicas: ["Proyector tipo Game Projector"], descripcion: "Proyector modelo Game Projector." },
  "consola-m4": {
    caracteristicas: [
      "Incluye consola + 2 mandos",
      "Más de 15 mil videojuegos clásicos",
      "Conexión inalámbrica 2.4G (juega sin cables)",
      "Fácil de conectar: solo enchúfala a tu TV por HDMI",
      "Controles ergonómicos y antideslizantes",
      "Compatible con cualquier TV",
    ],
    descripcion: "Revive la diversión clásica: consola verde con miles de juegos, lista para conectar a tu TV.",
  },
  "x2-plus-64gb": { caracteristicas: ["Almacenamiento: 64 GB"], descripcion: "Consola X2 Plus con 64 GB de almacenamiento." },
  "e88-drone": { caracteristicas: ["Drone modelo E88"], descripcion: "Drone modelo E88." },
  "walkie-talkie": {
    caracteristicas: ["Alcance de hasta 2.5 km de distancia"],
    descripcion: "Radios de comunicación para hablar a distancia sin depender de la señal del celular.",
  },

  // ---------- Alexa ----------
  "alaxe-pantalla": { caracteristicas: ["Parlante inteligente con pantalla"], descripcion: "Parlante inteligente con pantalla." },
  "alaxe-sin-pantalla": {
    caracteristicas: ["Potencia: 15 W", "Colores: negro, rojo, blanco y azul"],
    descripcion: "Parlante inteligente sin pantalla.",
  },
  "alaxe-pro-max": {
    caracteristicas: ["Potencia: 20 W", "Colores: morado, azul, blanco, rojo y negro"],
    descripcion: "Parlante inteligente versión Pro Max, con varias opciones de color.",
  },

  // ---------- Accesorios y cargadores ----------
  "cubo-20w-c": { caracteristicas: ["Potencia: 20 W", "Entrada tipo C"], descripcion: "Cubo de carga rápida de 20 W para iPhone." },
  "cubo-40w-c": { caracteristicas: ["Potencia: 40 W", "Entrada tipo C"], descripcion: "Cubo de carga de 40 W para iPhone." },
  "cable-cc-1m": { caracteristicas: ["Cable trenzado", "USB-C a USB-C", "Longitud: 1 metro"], descripcion: "Cable trenzado C a C para iPhone." },
  "cable-c-lightning-1m": { caracteristicas: ["USB-C a Lightning", "Longitud: 1 metro"], descripcion: "Cable C a Lightning para iPhone." },
  "cable-c-lightning-2m": { caracteristicas: ["USB-C a Lightning", "Longitud: 2 metros"], descripcion: "Cable C a Lightning de 2 metros para iPhone." },
  "cable-cubo-cc": { caracteristicas: ["Incluye cable trenzado C a C y cubo"], descripcion: "Combo de cable y cubo de carga para iPhone." },
  "cable-cubo-lightning": { caracteristicas: ["Incluye cable C a Lightning y cubo"], descripcion: "Combo de cable y cubo de carga para iPhone." },
  "cable-cubo-40w": { caracteristicas: ["Incluye cable C a C y cubo de 40 W"], descripcion: "Combo de cable y cubo de 40 W para iPhone." },
  "magsafe-20000": { caracteristicas: ["Capacidad: 20 000 mAh", "Batería externa magnética compatible con MagSafe"], descripcion: "Batería externa magnética de gran capacidad." },
  "magsafe-5000": { caracteristicas: ["Capacidad: 5 000 mAh", "Batería externa magnética compatible con MagSafe"], descripcion: "Batería externa magnética compacta." },
  "magsafe-10000": { caracteristicas: ["Capacidad: 10 000 mAh", "Batería externa magnética compatible con MagSafe"], descripcion: "Batería externa magnética de capacidad media." },
  "magnetic-charger": { caracteristicas: ["Cargador magnético"], descripcion: "Cargador magnético para tu iPhone." },
  "case-airpods-4": { caracteristicas: ["Case protector para AirPods de 4ta generación"], descripcion: "Case para proteger tus AirPods 4ta generación." },
  "case-airpods-2": { caracteristicas: ["Case protector para AirPods de 2da generación"], descripcion: "Case para proteger tus AirPods 2da generación." },
  "cofre-reloj": { caracteristicas: ["Cofre para guardar o regalar un reloj"], descripcion: "Cofre para reloj." },
  "combo-100w-samsung": { caracteristicas: ["Potencia: 100 W", "Incluye cubo y cable"], descripcion: "Combo de carga rápida de 100 W para Samsung." },
  "cable-cc-samsung": { caracteristicas: ["USB-C a USB-C"], descripcion: "Cable C a C para Samsung." },
  "combo-45w-samsung": { caracteristicas: ["Potencia: 45 W", "Incluye cubo y cable"], descripcion: "Combo de carga rápida de 45 W para Samsung." },

  // ---------- Equipos premium (bajo cotización) ----------
  "iphone": {
    caracteristicas: ["Modelos y capacidades disponibles según stock", "Precio bajo cotización"],
    descripcion: "Cotizamos tu iPhone según modelo, capacidad y stock. Escríbenos por WhatsApp para conocer las opciones y el precio actualizado.",
  },
  "macbook": {
    caracteristicas: ["MacBook Air y MacBook Pro según stock", "Precio bajo cotización"],
    descripcion: "Cotizamos tu MacBook según modelo y stock. Escríbenos por WhatsApp para conocer las opciones y el precio actualizado.",
  },
  "ipad": {
    caracteristicas: ["Modelos y capacidades disponibles según stock", "Precio bajo cotización"],
    descripcion: "Cotizamos tu iPad según modelo y stock. Escríbenos por WhatsApp para conocer las opciones y el precio actualizado.",
  },
  "perfumes-arabes": {
    caracteristicas: ["Variedad de fragancias disponibles", "Consulta el catálogo vigente por WhatsApp"],
    descripcion: "Perfumes árabes. Escríbenos por WhatsApp y te enviamos el catálogo de fragancias disponibles con sus precios.",
  },
  "ropa-streetwear": {
    caracteristicas: ["Prendas y calzado streetwear", "Consulta el catálogo vigente por WhatsApp"],
    descripcion: "Ropa streetwear. Escríbenos por WhatsApp y te enviamos el catálogo disponible con tallas y precios.",
  },
};

// Valores por defecto para categorías sin detalle propio (streaming e IA)
const STREAMING_DETAILS = {
  caracteristicas: [
    "Servicio digital: no requiere envío físico",
    "Duración y condiciones de uso se confirman por WhatsApp antes de comprar",
    "Atención personalizada durante la activación",
  ],
  descripcion: "Suscripción digital. Coordinamos contigo por WhatsApp la duración, las condiciones de uso y la activación del servicio.",
};

function getProductDetails(p) {
  const d = DETAILS[p.id] || (p.categoria.includes("streaming") ? STREAMING_DETAILS : {});
  const imagenes = (d.imagenes && d.imagenes.length ? d.imagenes : [p.imagen]).filter(Boolean);
  const caracteristicas = [...(d.caracteristicas || [])];
  if (p.nota && !caracteristicas.some(c => c.toLowerCase() === p.nota.toLowerCase())) caracteristicas.push(p.nota);
  return {
    imagenes,
    caracteristicas,
    descripcion: d.descripcion || "Consulta por WhatsApp los detalles, colores y disponibilidad de este producto.",
  };
}
