import { business } from "@/data/content";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  { href: "#tienda", label: "Tienda" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
];

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.4 2.3 1.9 3.9 4.2 4.2v3c-1.6 0-3.1-.5-4.2-1.4v6.1a6.1 6.1 0 1 1-6.1-6.1c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2 2.8V3h3.1z" />
    </svg>
  );
}

const socials = [
  { name: "Instagram", url: business.instagramUrl, Icon: InstagramIcon },
  { name: "Facebook", url: business.facebookUrl, Icon: FacebookIcon },
  { name: "TikTok", url: business.tiktokUrl, Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-16 text-white md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
        {/* Columna 1 -- Marca */}
        <div>
          <p className="text-2xl font-black tracking-tight">
            {business.name.replace(" Studio", "")}
            <span>.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            {business.description}
          </p>
          <p className="mt-4 text-sm text-white/40">{business.city}</p>
        </div>

        {/* Columna 2 -- Navegación */}
        <div>
          <p className="eyebrow text-xs text-white/40">Navegación</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:inline-grid">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors duration-300 ease-in-out hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 -- Redes sociales */}
        <div className="md:justify-self-end">
          <p className="eyebrow text-xs text-white/40">Seguinos</p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <a
            href={`https://wa.me/${business.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-white/55 transition-colors duration-300 ease-in-out hover:text-white"
          >
            WhatsApp · {business.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-6">
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {business.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
