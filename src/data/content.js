// -----------------------------------------------------------------------------
// Todo el contenido editable del sitio vive en este archivo.
// Para cambiar textos, precios, horarios, redes o el equipo, edita solo aca
// (no hace falta tocar los componentes en /src/components).
// -----------------------------------------------------------------------------

export const business = {
  name: "Reckless Studio",
  tagline: "Barbería",
  city: "Palmares, Alajuela, Costa Rica",
  address:
    "Palmares de Alajuela 200 metros sur y 25 metros este de la escuela central",
  whatsappNumber: "50687496943", // 506 + 8749 6943, sin espacios ni signos
  whatsappDisplay: "8749 6943",
  instagramUrl: "https://www.instagram.com/recklessstudiocr/",
  instagramHandle: "@recklessstudiocr",
  // Redes secundarias -- reemplazá con los perfiles reales cuando los tengas.
  facebookUrl: "https://www.facebook.com/",
  tiktokUrl: "https://www.tiktok.com/",
  description:
    "Cortes precisos, ambiente cuidado y atención premium en Palmares, Costa Rica.",
  // Mapa aproximado centrado en Palmares (OpenStreetMap, no requiere API key).
  // Si tenés la ubicación exacta del local, ajustá lat/lon abajo.
  mapsEmbedSrc:
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d998.7532910127544!2d-84.4303826!3d10.056832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa04514b32196b1%3A0xba2da730537cb864!2sReckless%20Studio%20Barber%C3%ADa!5e1!3m2!1ses-419!2scr!4v1785440168383!5m2!1ses-419!2scr",
  mapsUrl:
  "https://maps.google.com/?q=Reckless+Studio+Barbería,+Palmares,+Costa+Rica" +
    encodeURIComponent(
      "100 sur y 10 oeste del salón parroquial Centro, Palmares, Alajuela, Costa Rica"
    ),
};

export function whatsappLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Horarios (orden natural de semana)
export const hours = [
  { day: "Lunes", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Martes", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Miércoles", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Jueves", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Viernes", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Sábado", time: "8:00 a.m. – 7:00 p.m." },
  { day: "Domingo", time: "9:00 a.m. – 3:00 p.m." },
];

// Servicios. El precio de "Corte de cabello" es el real (₡7.000);
// el resto son precios de referencia -- ajustalos cuando tengas la lista final.
// "image" es la foto que aparece al pasar el cursor sobre el servicio (sección
// Servicios). Usa las mismas fotos de /public/images/gallery -- reemplazalas
// por fotos reales de cada servicio cuando las tengas.
export const services = [
  {
    name: "Corte de cabello",
    price: 7000,
    description: "Corte a tijera y/o máquina, incluye lavado.",
    image: "/images/gallery/g7.jpg",
  },
  {
    name: "Corte + Barba",
    price: 13000,
    description: "Corte de cabello más diseño y perfilado de barba.",
    featured: true,
    image: "/images/gallery/g4.jpg",
  },
  {
    name: "Diseño y perfilado de barba",
    price: 6000,
    description: "Perfilado, línea y afeitado de contorno.",
    image: "/images/gallery/g5.jpg",
  },
  {
    name: "Afeitado clásico",
    price: 7000,
    description: "Afeitado con navaja, toalla caliente y after shave.",
    image: "/images/gallery/g1.jpg",
  },
  {
    name: "Corte niño",
    price: 7000,
    description: "Corte para niños hasta 12 años.",
    image: "/images/gallery/corte-nino.jpeg",
  },
  {
    name: "Perfilado de cejas",
    image: "/images/gallery/local-recepcion.jpg",
    price: 3000,
    description: "Diseño y limpieza de cejas.",
  },
];
export const servicesNote =
  "Precios de referencia en colones (₡), sujetos a cambio. Consultá disponibilidad y precio final por WhatsApp.";

// Equipo. Completá "name" cuando tengas el nombre real de cada barbero/a.
export const team = [
  {
    name: "Rotcel John Arias Martins",
    role: "Barbero",
    instagram: "recklesssbarber",
  },
  {
    name: "Key Rodríguez Lobo",
    role: "Barbero estilista",
    instagram: "bee_barberchic._reckless",
  },
  {
    name: "Nis Beauty",
    role: "Equipo Reckless Studio",
    instagram: "nis_beauty_reckless",
  },
];

// Galería. Todas fotos reales del local y del equipo. El logo va en el medio
// de la primera fila (posición 2 de 3 en desktop/tablet). Para agregar más,
// subí la imagen a /public/images/gallery y añadí un objeto acá.
export const gallery = [
  {
    src: "/images/gallery/studio1.jpeg",
    alt: "Estación de barbero con espejo iluminado en Reckless Studio",
  },
  {
    src: "/images/gallery/logo.jpeg",
    alt: "Logo de Reckless Studio",
    fit: "contain",
  },
  {
    src: "/images/gallery/studio2.jpeg",
    alt: "Recepción y zona de lavado de Reckless Studio con el logo en la pared",
  },
  {
    src: "/images/gallery/nino.jpeg",
    alt: "Corte a niño",
  },
  {
    src: "/images/gallery/estudio-reckless.jpeg",
    alt: "Área principal de barbería con sillones en Reckless Studio",
  },
  {
    src: "/images/gallery/equiporeckless.jpeg",
    alt: "Equipo de Reckless Studio frente al logo del local",
  },
];

// Testimonios de ejemplo -- reemplazalos por reseñas reales de clientes.
export const testimonials = [
  {
    name: "Cliente Reckless",
    text: "Excelente atención y el mejor detalle en cada corte. El local es súper limpio y ordenado.",
  },
  {
    name: "Cliente Reckless",
    text: "Los barberos son muy profesionales, siempre salgo conforme con el resultado.",
  },
  {
    name: "Cliente Reckless",
    text: "Ambiente cómodo, buena música y puntualidad. Totalmente recomendado.",
  },
];

// Productos reales a la venta en el local. Cada uno con su foto real tomada
// en el estudio. Sin precios fijos -- se consultan por WhatsApp porque
// cambian según disponibilidad. Para agregar uno nuevo: subí la foto a
// /public/images/products y agregá un objeto acá.
export const products = [
  {
    name: "Minoxidil Kirkland Signature 5%",
    brand: "Kirkland Signature",
    description:
      "Tratamiento tópico para el crecimiento de cabello, extra fuerte. Caja para 6 meses (6 frascos x 60ml).",
    image: "/images/products/1producto-real-minoxidil.jpeg",
  },
  {
    name: "MinoxiPlus 12% Premium",
    brand: "Jevama",
    description:
      "Minoxidil premium al 12%. Fortalece y da grosor al cabello, cuida el cuero cabelludo. 60ml.",
    image: "/images/products/2producto-real.jpeg",
  },
  {
    name: "OSiS+ Mess Up",
    brand: "Schwarzkopf Professional",
    description:
      "Pasta mate texturizante para un acabado despeinado natural, sobre cabello seco. 100ml.",
    image: "/images/products/3producto-real.jpeg",
  },
  {
    name: "OSiS+ Mighty Matte",
    brand: "Schwarzkopf Professional",
    description:
      "Crema mate de fijación fuerte, acabado ultra mate sobre cabello seco. 100ml.",
    image: "/images/products/31producto-real.jpeg",
  },
  {
    name: "Free.Hold",
    brand: "Kevin.Murphy",
    description: "Pasta de peinado con fijación media y acabado natural. 100g.",
    image: "/images/products/4producto-real.jpeg",
  },
  {
    name: "Fiber",
    brand: "American Crew",
    description:
      "Fijación fuerte y brillo bajo, ideal para peinados con textura definida. 85g.",
    image: "/images/products/5producto-real.jpeg",
  },
];
