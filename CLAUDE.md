# AIROX — Contexto del proyecto

Sitio web de AIROX (Moyobamba, Perú), emprendimiento de dropshipping/reventa de tecnología y audio.
Dueño: usuario de este proyecto. Repo: https://github.com/AiroxPe/Airox-web- (deploy en Vercel).

## Autorización permanente

El usuario dio control total del proyecto a Claude mientras dure su suscripción Claude Pro (otorgado 2026-09-20).
Esto autoriza, sin pedir confirmación cada vez, dentro de este repositorio:
- Editar código, contenido, `js/products.js` (precios/catálogo), estilos, imágenes.
- `git add`, `git commit`, `git push` a `main` en `AiroxPe/Airox-web-`.
- Crear/actualizar archivos de configuración del proyecto (Vercel, etc.) dentro de este repo.

Excepciones — esto SIEMPRE se confirma con el usuario antes de actuar, incluso con esta autorización:
- Cualquier acción que cueste dinero (dominios, planes pagos, compras).
- Force-push, borrar el repositorio, o sobrescribir historial de forma irreversible.
- Cambios en cuentas fuera de este repo (Vercel, GitHub org, DNS) que no sean solo "conectar repo".
- Publicar información sensible del negocio (capital, datos personales del dueño) en contenido público.

## Datos de contacto/marca (no exponer capital ni horario personal real en la web pública)

- WhatsApp: 991 648 399 (+51 991648399)
- Instagram: @airox_pe
- Facebook: facebook.com/profile.php?id=61585965487130
- Envíos: recojo presencial en Moyobamba, envío nacional vía Shalom

## Notas de catálogo

- Fuente de verdad de precios/productos: `js/products.js`.
- Cada producto abre `producto.html?id=<id>` (galería con miniaturas, características, cantidad, carrusel de similares). Fotos extra, características y descripciones viven en `js/product-details.js` (solo datos confirmados: catálogo del proveedor, fotos o lo que AIROX confirme; nunca publicar precios/nombre del proveedor).
- Las imágenes de productos vienen de fotos de catálogo de proveedor (no fotos propias) salvo AirPods Pro 2da gen, lentes y equipos premium (fotos aportadas por el dueño, carpeta Descargas\Airox). Si el negocio consigue fotos propias, reemplazarlas en `images/products/`.
- Las fotos "M02X Pro Max" del dueño se asignaron al producto Rayban Meta MT5 Ultra (mismo estilo de ficha); confirmar con el dueño si es otro modelo.
- Fotos de JBL sueltas sin clasificar en `Descargas\Airox\Images productos web` (rojo con asa, parlantes pequeños en vitrina): pendientes de asignar.
