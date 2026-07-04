import SectionHeading from "./SectionHeading";
import { services, servicesNote, whatsappLink } from "@/data/content";

const formatColones = (value) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

export default function Services() {
  return (
    <section id="servicios" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Servicios"
          description="Cortes, barba y afeitado con atención personalizada."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition hover:border-black/25"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <span className="whitespace-nowrap text-lg font-bold">
                    {formatColones(service.price)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-black/60">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-black/40">
          {servicesNote}
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:bg-black/80"
          >
            Reservar turno
          </a>
        </div>
      </div>
    </section>
  );
}
