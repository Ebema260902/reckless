"use client";

import { useState } from "react";
import Image from "next/image";
import { services, servicesNote, whatsappLink } from "@/data/content";

const formatColones = (value) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

const defaultIndex = Math.max(
  services.findIndex((s) => s.featured),
  0
);

export default function Services() {
  const [active, setActive] = useState(defaultIndex);
  const selected = services[active];

  return (
    <section id="servicios" className="bg-white px-4 py-16 sm:py-20 md:px-6 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.25fr] lg:gap-16 xl:gap-24">
          {/* Columna izquierda -- fija (sticky) al hacer scroll en desktop */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="relative overflow-hidden rounded-2xl bg-black text-white">
              <div className="p-6 sm:p-8 md:p-10">
                <p className="eyebrow text-xs text-white/45 sm:text-sm">
                  Lo que hacemos
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.95] tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
                  Servicios
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60 sm:mt-5">
                  Cortes, barba y afeitado con atención personalizada. Cada
                  servicio, a su propio ritmo.
                </p>
                <a
                  href={whatsappLink("Hola, quisiera reservar un turno")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/85 sm:mt-8"
                >
                  Reservar turno
                </a>
              </div>

              {/* Escenario de imagen -- revela el servicio activo (hover en
                  desktop, tap en mobile) con cross-fade. */}
              <div className="grain relative aspect-[4/5] overflow-hidden border-t border-white/10 md:aspect-[5/4] lg:aspect-[4/5]">
                {services.map((service, i) => (
                  <Image
                    key={service.name}
                    src={service.image}
                    alt={service.name}
                    fill
                    unoptimized
                    priority={i === defaultIndex}
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className={`cinematic absolute inset-0 object-cover transition-all duration-700 ease-in-out ${
                      active === i
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="eyebrow text-xs text-white/70">
                    {selected.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha -- lista de servicios, exhibida con aire.
              Hover en desktop (mouse) y tap en mobile (onClick) hacen lo mismo:
              activan el servicio y lo muestran en la imagen de la izquierda. */}
          <div>
            <ol
              className="border-t border-black/10"
              onMouseLeave={() => setActive(defaultIndex)}
            >
              {services.map((service, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={service.name}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(i);
                      }
                    }}
                    className={`group cursor-pointer border-b border-black/10 px-3 -mx-3 rounded-xl py-7 transition-all duration-300 ease-in-out sm:py-9 md:cursor-default md:rounded-none md:px-0 md:mx-0 md:py-11 md:transition-opacity md:duration-500 ${
                      isActive
                        ? "bg-black/[0.035] opacity-100 md:bg-transparent"
                        : "opacity-100 md:opacity-40"
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5 md:gap-8">
                      <span className="numeral shrink-0 text-2xl text-black/25 sm:text-3xl md:text-4xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="min-w-0 break-words text-xl font-black tracking-tight transition-transform duration-500 ease-in-out sm:text-2xl md:text-3xl md:group-hover:translate-x-1.5">
                            {service.name}
                          </h3>
                          <span className="shrink-0 text-sm font-medium text-black/40 sm:text-base md:text-lg">
                            {formatColones(service.price)}
                          </span>
                        </div>
                        {service.featured && (
                          <span className="eyebrow mt-1 inline-block text-[0.6rem] text-black/40 sm:text-[0.65rem]">
                            El más pedido
                          </span>
                        )}
                        <p className="mt-2 max-w-md text-sm text-black/50 sm:mt-3">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="mt-6 text-xs text-black/40 sm:mt-8">
              {servicesNote}
            </p>

            {/* CTA accesible sin volver a subir -- solo mobile/tablet, ya que
                en desktop el botón del panel sticky siempre está a la vista. */}
            <a
              href={whatsappLink(`Hola, quisiera reservar ${selected.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-black px-8 py-3.5 text-center font-semibold text-white transition-all duration-300 ease-in-out hover:bg-black/80 lg:hidden"
            >
              Reservar {selected.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
