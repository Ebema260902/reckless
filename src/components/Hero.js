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
        <div className="animate-rise mb-10">
          <Logo size="lg" />
        </div>
        <h1 className="sr-only">{business.name}</h1>

        <p
          className="animate-rise mt-3 text-lg uppercase tracking-[0.3em] text-black/50"
          style={{ "--rise-delay": "150ms" }}
        >
          {business.tagline}
        </p>
        <p
          className="animate-rise mt-6 max-w-md text-black/70"
          style={{ "--rise-delay": "300ms" }}
        >
          Cortes precisos, ambiente cuidado y atención de barbería en{" "}
          {business.city}.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ "--rise-delay": "450ms" }}
        >
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:bg-black/80 hover:-translate-y-0.5"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-black/20 px-8 py-3 font-semibold text-black transition hover:bg-black/5 hover:-translate-y-0.5"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
