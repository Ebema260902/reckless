// Íconos de línea minimalistas por categoría. Actúan como marcador de posición
// elegante dentro del contenedor de imagen de cada producto. Para mostrar
// fotografías reales, reemplazá el ícono por un <Image> con la foto (PNG con
// fondo transparente idealmente) usando object-contain dentro del mismo marco.

const common = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Bottle(props) {
  return (
    <svg {...common} {...props}>
      <path d="M21 6h6v4h-6z" />
      <path d="M20 10h8l2 5v23a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V15z" />
      <path d="M18 22h12" />
      <path d="M18 33h12" />
    </svg>
  );
}

function Razor(props) {
  return (
    <svg {...common} {...props}>
      <path d="M24 6v18" />
      <rect x="18" y="24" width="12" height="4" rx="1" />
      <path d="M20 28l1.5 14h5L28 28" />
      <path d="M21 34h6" />
    </svg>
  );
}

function Jar(props) {
  return (
    <svg {...common} {...props}>
      <rect x="12" y="18" width="24" height="22" rx="3" />
      <path d="M15 18v-3a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3" />
      <path d="M12 25h24" />
    </svg>
  );
}

function Dropper(props) {
  return (
    <svg {...common} {...props}>
      <path d="M20 6h8" />
      <path d="M22 6v6" />
      <path d="M26 6v6" />
      <path d="M19 12h10l1.5 24a3 3 0 0 1-3 3.2h-7a3 3 0 0 1-3-3.2z" />
      <path d="M24 20v10" />
    </svg>
  );
}

const byCategory = {
  "Cuidado capilar": Bottle,
  "Barba y afeitado": Razor,
  "Styling y acabado": Jar,
  Crecimiento: Dropper,
};

export default function ProductIcon({ category, className }) {
  const Icon = byCategory[category] || Bottle;
  return <Icon className={className} aria-hidden="true" />;
}
