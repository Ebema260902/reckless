import Logo from "./Logo";
import { business, whatsappLink } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-24 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(10,10,10,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Logo size="lg" className="mb-10" />
        <h1 className="sr-only">{business.name}</h1>

        <p className="mt-3 text-lg uppercase tracking-[0.3em] text-black/50">
          {business.tagline}
        </p>
        <p className="mt-6 max-w-md text-black/70">
          Cortes precisos, ambiente cuidado y atención de barbería en{" "}
          {business.city}.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:bg-black/80"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-black/20 px-8 py-3 font-semibold text-black transition hover:bg-black/5"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
