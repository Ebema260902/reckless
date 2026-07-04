# Reckless Studio — sitio web

Sitio de una sola página para la barbería Reckless Studio (Palmares, Alajuela). Hecho con Next.js + Tailwind CSS.

## Cómo editar el contenido

Casi todo el texto del sitio (servicios, precios, horarios, equipo, productos, testimonios, WhatsApp, Instagram, dirección) está en un solo archivo:

```
src/data/content.js
```

Editá ese archivo y guardá — no hace falta tocar nada más para cambiar textos o precios.

## Logo

El logo está en `public/logo/reckless-logo.svg` y lo usa el componente `src/components/Logo.js`. Como no tengo forma de guardar en disco la imagen que se pega directamente en el chat, este SVG es una reconstrucción vectorial del wordmark "Reckless." (no el archivo original pixel por pixel). Si tenés el archivo real (PNG/SVG exportado de Canva, Illustrator, etc.), reemplazá `public/logo/reckless-logo.svg` por ese archivo con el mismo nombre, o subí el tuyo con otro nombre y actualizá el `src` en `Logo.js`.

## Cómo reemplazar las fotos de la galería

Las imágenes de `src/data/content.js` → `gallery` son placeholders (dibujos simples en SVG) porque el sitio se armó sin las fotos originales del local. Para poner las fotos reales:

1. Subí tus fotos a `public/images/gallery/` (por ejemplo `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`).
2. En `src/data/content.js`, en el arreglo `gallery`, cambiá el `src` de cada item para que apunte a tu archivo (ej: `"/images/gallery/1.jpg"`).

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy a Vercel

1. Subí este proyecto a un repositorio de GitHub.
2. Entrá a [vercel.com/new](https://vercel.com/new), importá el repositorio y hacé click en "Deploy" (no hace falta configurar nada más, Vercel detecta Next.js automáticamente).
3. Cada vez que hagas push a la rama principal, Vercel actualiza el sitio solo.
