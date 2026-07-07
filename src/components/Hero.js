import Image from "next/image";
import { business, whatsappLink } from "@/data/content";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-4 py-24 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Columna de texto -- alineada a la izquierda (editorial, asimétrico) */}
        <div className="order-2 text-left lg:order-1">
          <p
            className="animate-rise eyebrow text-sm text-black/50"
            style={{ "--rise-delay": "0ms" }}
          >
            {business.tagline} · {business.city}
          </p>

          <h1
            className="animate-rise mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
            style={{ "--rise-delay": "120ms" }}
          >
            {business.name.replace(" Studio", "")}
            <span className="align-top text-black">.</span>
          </h1>

          <p
            className="animate-rise mt-7 max-w-md text-lg leading-relaxed text-black/60"
            style={{ "--rise-delay": "260ms" }}
          >
            Cortes precisos, ambiente cuidado y atención de barbería en{" "}
            {business.city}.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ "--rise-delay": "400ms" }}
          >
            <a
              href={whatsappLink("Hola, quisiera reservar un turno")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-8 py-3.5 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-black/80"
            >
              Reservar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-black/20 px-8 py-3.5 text-center font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Ancla visual -- imagen cinematográfica en blanco y negro con grano */}
        <div
          className="animate-rise order-1 lg:order-2"
          style={{ "--rise-delay": "200ms" }}
        >
          <div className="grain relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 lg:aspect-[3/4]">
            <Image
              src="/images/gallery/local-recepcion.jpg"
              alt="Interior de Reckless Studio en blanco y negro"
              fill
              priority
              unoptimized
              className="cinematic object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
