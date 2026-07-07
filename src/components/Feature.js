import Image from "next/image";
import Reveal from "./Reveal";
import { whatsappLink } from "@/data/content";

// Banda destacada con una foto real del local (la recepción con el logo).
// La imagen se muestra en su tamaño real (no se estira a pantalla completa),
// así se ve nítida a pesar de ser una foto vertical.
export default function Feature() {
  return (
    <section className="bg-black px-4 py-20 text-white md:px-6">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <Reveal className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/gallery/local-recepcion.jpg"
            alt="Recepción de Reckless Studio con el logo iluminado en la pared"
            width={335}
            height={597}
            unoptimized
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow text-sm text-white/45">El espacio</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight md:text-4xl">
            Un lugar pensado al detalle
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Ambiente limpio, ordenado y cómodo, con equipo profesional y
            atención personalizada en cada visita. Vení a vivir la experiencia
            Reckless Studio.
          </p>
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white/85"
          >
            Reservar tu turno
          </a>
        </Reveal>
      </div>
    </section>
  );
}
