import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { services, servicesNote, whatsappLink } from "@/data/content";

const formatColones = (value) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

export default function Services() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="servicios" className="bg-white px-4 py-28 md:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Servicios"
          description="Cortes, barba y afeitado con atención personalizada."
          align="left"
        />

        <div className="border-b border-black/10">
          {/* Servicio estrella -- mayor peso visual para romper la retícula */}
          {featured && (
            <Reveal className="grid items-end gap-6 border-t border-black/15 py-10 md:grid-cols-12">
              <div className="md:col-span-9">
                <p className="eyebrow text-xs text-black/40">El más pedido</p>
                <h3 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-md text-black/55">
                  {featured.description}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="text-3xl font-bold md:text-4xl">
                  {formatColones(featured.price)}
                </span>
              </div>
            </Reveal>
          )}

          {/* Resto de servicios -- lista editorial con divisorias finas */}
          {rest.map((service, i) => (
            <Reveal
              key={service.name}
              delay={i * 70}
              className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-black/10 py-6 transition-colors duration-300 ease-in-out hover:bg-black/[0.015]"
            >
              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm text-black/45">
                  {service.description}
                </p>
              </div>
              <span className="whitespace-nowrap text-lg font-bold md:text-xl">
                {formatColones(service.price)}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-sm text-xs text-black/40">{servicesNote}</p>
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-black px-8 py-3.5 font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-black/80"
          >
            Reservar turno
          </a>
        </div>
      </div>
    </section>
  );
}
