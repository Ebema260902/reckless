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
    "100 sur y 10 oeste del salón parroquial Centro, Palmares, Alajuela, 20701",
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
    "https://www.openstreetmap.org/export/embed.html?bbox=-84.4435799%2C10.0385460%2C-84.4275799%2C10.0545460&layer=mapnik&marker=10.0465460%2C-84.4355799",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
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
    price: 10000,
    description: "Corte de cabello más diseño y perfilado de barba.",
    featured: true,
    image: "/images/gallery/g4.jpg",
  },
  {
    name: "Diseño y perfilado de barba",
    price: 5000,
    description: "Perfilado, línea y afeitado de contorno.",
    image: "/images/gallery/g5.jpg",
  },
  {
    name: "Afeitado clásico",
    price: 6000,
    description: "Afeitado con navaja, toalla caliente y after shave.",
    image: "/images/gallery/g1.jpg",
  },
  {
    name: "Corte niño",
    price: 6000,
    description: "Corte para niños hasta 12 años.",
    image: "/images/gallery/local-sillones.avif",
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

// Galería. Las dos primeras son fotos reales del local; el resto son imágenes
// de barbería de alta calidad (Unsplash, libres de licencia) para dar densidad.
// Reemplazalas por fotos reales del estudio cuando las tengas: subí la imagen a
// /public/images/gallery y actualizá el "src" aquí.
// Nota: g2.jpg no está acá -- se usa exclusivamente como imagen del Hero.
export const gallery = [
  {
    src: "/images/gallery/local-recepcion.jpg",
    alt: "Recepción y zona de lavado de Reckless Studio con el logo en la pared",
  },
  {
    src: "/images/gallery/local-sillones.avif",
    alt: "Área principal de barbería con sillones en Reckless Studio",
  },
  { src: "/images/gallery/g1.jpg", alt: "Afeitado con navaja en barbería" },
  {
    src: "/images/gallery/g4.jpg",
    alt: "Corte de cabello con navaja y detalle de degradado",
  },
  { src: "/images/gallery/g5.jpg", alt: "Afeitado clásico con toalla" },
  { src: "/images/gallery/g7.jpg", alt: "Corte texturizado con peine" },
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

// Categorías de la tienda
export const shopCategories = [
  "Cuidado capilar",
  "Barba y afeitado",
  "Styling y acabado",
  "Crecimiento",
];

// Fotos de producto por categoría (Unsplash, libres de licencia). Son imágenes
// genéricas de grooming premium para dar aspecto de tienda real. Reemplazalas
// por fotos reales de cada producto subiéndolas a /public/images/products.
export const productPhotos = {
  "Cuidado capilar": [
    "/images/products/prod-shampoo.jpg",
    "/images/products/prod-mask.jpg",
    "/images/products/prod-lotion.jpg",
    "/images/products/prod-bottle.jpg",
  ],
  "Barba y afeitado": [
    "/images/products/prod-oils.jpg",
    "/images/products/prod-serum.jpg",
    "/images/products/prod-bottle.jpg",
    "/images/products/prod-lotion.jpg",
  ],
  "Styling y acabado": [
    "/images/products/prod-serum.jpg",
    "/images/products/prod-oils.jpg",
    "/images/products/prod-mask.jpg",
    "/images/products/prod-bottle.jpg",
  ],
  Crecimiento: [
    "/images/products/prod-serum.jpg",
    "/images/products/prod-oils.jpg",
  ],
};

// Productos a la venta en el local (de catálogo Salerm, Suavecito, Kenra, etc.)
export const products = [
  // Cuidado capilar
  {
    name: "Champú y gel de baño todo en uno Salerm Homme 1000ml",
    description: "Stop to Relax barber line",
    category: "Cuidado capilar",
  },
  {
    name: "Champú control caspa HairLab de Salerm",
    description:
      "Frena progresivamente la aparición de caspa y calma los picores asociados. Formulado con péptidos.",
    category: "Cuidado capilar",
  },
  {
    name: "Arganology Biokera de Salerm",
    description:
      "Sérum de aceite de argán y algodón ideal para cabellos maltratados que necesiten un plus de hidratación.",
    category: "Cuidado capilar",
  },
  {
    name: "Mascarilla capilar al germen de trigo Salerm",
    description: "Para cabellos secos.",
    category: "Cuidado capilar",
  },
  {
    name: "Bálsamo acondicionador granada Salerm 1200ml",
    description: "Uso diario 24/7, vitaminas A, B y C.",
    category: "Cuidado capilar",
  },
  {
    name: "Champú hidratante granada Salerm 1200ml",
    description: "Uso diario 24/7.",
    category: "Cuidado capilar",
  },
  {
    name: "Salerm21 Leave-in Conditioner",
    description: "Proteínas de seda.",
    category: "Cuidado capilar",
  },
  {
    name: "Protector térmico de Salerm",
    description: "",
    category: "Cuidado capilar",
  },

  // Barba y afeitado
  {
    name: "Gel de afeitado 200ml Salerm Homme",
    description: "",
    category: "Barba y afeitado",
  },
  {
    name: "Gel exfoliante facial Salerm Homme",
    description:
      "Limpieza facial. Elimina impurezas, células muertas de la piel y el exceso de grasa.",
    category: "Barba y afeitado",
  },
  {
    name: "Aceite de barba 30ml Salerm Homme",
    description:
      "Con aceite de frambuesa orgánico y rosa mosqueta. Apto para barba, bigote y cabello.",
    category: "Barba y afeitado",
  },
  {
    name: "Gel refrescante para después del afeitado",
    description: "Previene irritación de la piel, sensación de frescura.",
    category: "Barba y afeitado",
  },

  // Styling y acabado
  {
    name: "Cera Mate Trendstarter 113g",
    description: "",
    badge: "Disponible",
    category: "Styling y acabado",
  },
  {
    name: "Polvos de peinado Salerm Homme",
    description:
      "Cera en polvo que eleva el peinado a otro nivel, sin apelmazar. Acabado mate y con volumen.",
    category: "Styling y acabado",
  },
  {
    name: "Salerm 21 Finish 120% +brillo",
    description:
      "Ilumina y da brillo con hidratación, suavidad y brillo natural sobre todo tipo de cabellos.",
    category: "Styling y acabado",
  },
  {
    name: "Kenra pasta de acabado súper brillante 56.7g",
    description: "",
    price: 10000,
    category: "Styling y acabado",
  },
  {
    name: "Gel intenso 500ml Salerm Homme",
    description: "",
    badge: "Muy recomendado",
    category: "Styling y acabado",
  },
  {
    name: "Laca Fuerte Salerm Homme 260g",
    description: "Filtro solar UV PS15, células madre de algodón y panthenol.",
    category: "Styling y acabado",
  },
  {
    name: "Cera de cabello y barba Salerm Homme 100g",
    description: "Brillo y fijación media.",
    category: "Styling y acabado",
  },
  {
    name: "Crema control mate de Salerm Homme 100g",
    description: "Fijación elástica.",
    category: "Styling y acabado",
  },
  {
    name: "Laca hi repair extra fuerte de Salerm",
    description: "Repara el cabello y lo protege del sol, además de fijar.",
    category: "Styling y acabado",
  },
  {
    name: "Matt Clay 02",
    description: "Arcilla mate de fijación media.",
    category: "Styling y acabado",
  },
  {
    name: "Pomada brillante Suavecito",
    description: "Fijación media y fuerte disponibles.",
    price: 12000,
    category: "Styling y acabado",
  },

  // Crecimiento
  {
    name: "Minoxiplus 10%",
    description: "",
    price: 18000,
    category: "Crecimiento",
  },
  {
    name: "Minoxidil líquido al 5%",
    description: "Caja de 6 unidades ₡42.000 · unidad ₡10.000",
    category: "Crecimiento",
  },
];
