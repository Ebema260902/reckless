# Reckless Studio — sitio web

Sitio de una sola página para la barbería Reckless Studio (Palmares, Alajuela). Hecho con Next.js + Tailwind CSS.

## Cómo editar el contenido

Casi todo el texto del sitio (servicios, precios, horarios, equipo, productos, testimonios, WhatsApp, Instagram, dirección) está en un solo archivo:

```
src/data/content.js
```

Editá ese archivo y guardá — no hace falta tocar nada más para cambiar textos o precios.

## Logo

El wordmark del nav (`src/components/Logo.js`) usa el archivo real `public/logo/reckless-wordmark.jpeg`. El favicon (`src/app/icon.png`) es ese mismo logo recortado en círculo — generado con `sharp` a partir de `public/images/gallery/logo.jpeg`. Si en algún momento subís una versión distinta del logo, reemplazá el archivo correspondiente con el mismo nombre y ancho/alto proporcional.

## Cómo reemplazar las fotos de la galería

Las imágenes de `src/data/content.js` → `gallery` ya son fotos reales del local y del equipo. Para agregar o cambiar alguna:

1. Subí la foto a `public/images/gallery/`.
2. En `src/data/content.js`, en el arreglo `gallery`, agregá o editá el `src`/`alt` correspondiente.

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
