function InstagramGlyph({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Etiqueta estilo Instagram (como cuando se "taggea" a alguien en una foto):
// un punto sobre la persona que, al pasar el cursor, revela su @usuario.
// `dir` controla hacia qué lado se despliega para no salirse del marco.
export default function PhotoTag({ x, y, dir = "right", instagram }) {
  const growLeft = dir === "left";

  return (
    <div
      className="group/tag absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Zona de hover ampliada (invisible) para que sea fácil de activar */}
      <div className="absolute -inset-5 sm:-inset-6" />

      {/* Punto -- pulsa suavemente para invitar a pasar el cursor */}
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute h-full w-full animate-ping rounded-full bg-white opacity-70 [animation-duration:2.2s] group-hover/tag:opacity-0" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_3px_rgba(0,0,0,0.15)]" />
      </span>

      {/* Etiqueta con el @usuario -- se despliega al hacer hover */}
      <a
        href={`https://www.instagram.com/${instagram}/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`pointer-events-none absolute top-1/2 flex -translate-y-1/2 scale-90 items-center opacity-0 transition-all duration-300 ease-out group-hover/tag:pointer-events-auto group-hover/tag:scale-100 group-hover/tag:opacity-100 ${
          growLeft ? "right-full origin-right flex-row-reverse" : "left-full origin-left"
        }`}
      >
        <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 ring-2 ring-white">
          <InstagramGlyph className="h-3.5 w-3.5 text-white" />
        </span>
        <span
          className={`whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black shadow-lg ${
            growLeft ? "-mr-3" : "-ml-3"
          }`}
        >
          @{instagram}
        </span>
      </a>
    </div>
  );
}
