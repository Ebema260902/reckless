import Logo from "./Logo";
import { business } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Logo size="sm" />
        <div className="flex gap-6 text-sm text-black/60">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            {business.instagramHandle}
          </a>
          <a
            href={`https://wa.me/${business.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            {business.whatsappDisplay}
          </a>
        </div>
        <p className="text-xs text-black/40">
          © {new Date().getFullYear()} {business.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
