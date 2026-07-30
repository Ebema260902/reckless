import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { business, hours, whatsappLink } from "@/data/content";

export default function Location() {
  return (
    <section
      id="ubicacion"
      className="bg-white px-4 py-14 sm:py-16 md:px-6 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Visitanos" title="Ubicación y horarios" />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-2xl border border-black/10">
            <iframe
              title="Ubicación Reckless Studio"
              src={business.mapsEmbedSrc}
              className="h-80 w-full lg:h-full"
              style={{ border: 0}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col justify-between rounded-2xl border border-black/10 bg-black/[0.02] p-8"
          >
            <div>
              <h3 className="text-lg font-semibold">Dirección</h3>
              <p className="mt-2 text-black/70">{business.address}</p>

              <h3 className="mt-8 text-lg font-semibold">Horarios</h3>
              <dl className="mt-3 divide-y divide-black/10 text-sm">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-2 text-black/70"
                  >
                    <dt>{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("Hola, quisiera reservar un turno")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-black px-6 py-3.5 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-black/80"
              >
                WhatsApp
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-black/20 px-6 py-3.5 text-center font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
