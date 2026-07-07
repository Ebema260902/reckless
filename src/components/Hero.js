import Image from "next/image";
import { business, whatsappLink } from "@/data/content";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-6 lg:grid lg:min-h-[80vh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-20">
        {/* Columna de texto -- alineada a la izquierda (editorial, asimétrico) */}
        <div className="max-w-full text-left">
          <p
            className="animate-rise eyebrow text-xs text-black/50 sm:text-sm"
            style={{ "--rise-delay": "0ms" }}
          >
            {business.tagline} · {business.city}
          </p>

          <h1
            className="animate-rise mt-5 break-words text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:mt-6 lg:text-8xl"
            style={{ "--rise-delay": "120ms" }}
          >
            {business.name.replace(" Studio", "")}
            <span className="align-top text-black">.</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-md text-base leading-relaxed text-black/60 sm:text-lg lg:mt-7"
            style={{ "--rise-delay": "260ms" }}
          >
            Cortes precisos, ambiente cuidado y atención de barbería en{" "}
            {business.city}.
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-4 sm:flex-row lg:mt-10"
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

          {/* Cierre visual sutil en mobile/tablet -- foto baja y compacta,
              justo debajo de los botones. En desktop se oculta: ahí la misma
              imagen aparece como columna alta a la derecha. */}
          <div
            className="animate-rise mt-8 lg:hidden"
            style={{ "--rise-delay": "500ms" }}
          >
            <div className="grain relative h-[220px] overflow-hidden rounded-2xl border border-black/10 sm:h-[280px]">
              <Image
                src="/images/gallery/g2.jpg"
                alt="Interior de barbería con sillones clásicos, blanco y negro"
                fill
                unoptimized
                className="cinematic object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        {/* Ancla visual -- imagen cinematográfica en blanco y negro con grano.
            Solo desktop: en mobile la misma foto ya aparece arriba, compacta. */}
        <div
          className="animate-rise hidden lg:block"
          style={{ "--rise-delay": "200ms" }}
        >
          <div className="grain relative overflow-hidden rounded-2xl border border-black/10 lg:h-[72vh] lg:max-h-[600px]">
            <Image
              src="/images/gallery/g2.jpg"
              alt="Interior de barbería con sillones clásicos, blanco y negro"
              fill
              priority
              unoptimized
              className="cinematic object-cover"
              sizes="45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
