# AIROX — Web

Sitio web estático (HTML/CSS/JS puro, sin frameworks ni build) para la tienda AIROX.

## Estructura

- `index.html` — Página de inicio (hero, producto destacado, categorías, sobre nosotros, contacto)
- `catalogo.html` — Catálogo completo con filtros por categoría y buscador
- `css/style.css` — Estilos del sitio
- `js/products.js` — **Aquí están todos los productos, precios e imágenes.** Editar este archivo para agregar/quitar productos o cambiar precios.
- `js/main.js` — Lógica de filtros, buscador y botones de WhatsApp
- `images/products/` — Fotos de productos

## Cómo editar un precio o agregar un producto

Abre `js/products.js` y busca el producto. Cada uno es un bloque así:

```js
{ id: "airpods-pro-2", name: "AirPods Pro 2da Generación + ANC", categoria: ["destacados", "apple-audio"], precio: 80, imagen: "airpods-pro-2.png", destacado: true },
```

- `precio`: número en soles (o `null` si es "Consultar precio")
- `imagen`: nombre del archivo dentro de `images/products/` (o `null` si no hay foto todavía)
- `categoria`: una o más categorías (ver lista en la parte de arriba del mismo archivo)

Después de editar, sube el cambio a GitHub y Vercel/Netlify lo publica solo (deploy automático).

## Publicar gratis (sin necesidad de Node.js ni servidor)

Al ser un sitio estático, no necesita "build" ni instalar nada. Opciones gratuitas:

1. **Vercel** (recomendado, ya en uso): conecta el repo de GitHub, framework "Other", sin build command, directorio raíz `/`. Deploy automático en cada push.
2. **Netlify**: mismo flujo, conectar repo de GitHub.
3. **Cloudflare Pages**: mismo flujo.
4. **GitHub Pages**: en el repo, ir a Settings → Pages → Deploy from branch → `main` / `/ (root)`.

## Probar localmente

No requiere Node ni Python. Simplemente abre `index.html` en el navegador, o usa cualquier servidor estático simple.
