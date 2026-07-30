import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { products, whatsappLink } from "@/data/content";

export default function Shop() {
  return (
    <section
      id="tienda"
      className="bg-white px-4 py-16 sm:py-20 md:px-6 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Productos"
          title="Tienda"
          description="Línea profesional disponible en el local. Precios y disponibilidad, por WhatsApp."
        />

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 90}>
              <article className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  {product.brand && (
                    <p className="eyebrow text-[0.65rem] text-black/40">
                      {product.brand}
                    </p>
                  )}
                  <h3 className="mt-1 text-sm font-semibold leading-snug">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="mt-1 text-xs leading-relaxed text-black/45">
                      {product.description}
                    </p>
                  )}
                  <a
                    href={whatsappLink(
                      `Hola, quisiera consultar precio y disponibilidad de ${product.name}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-black underline decoration-black/30 underline-offset-2 transition-colors duration-300 ease-in-out hover:decoration-black"
                  >
                    Consultar precio y disponibilidad →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={whatsappLink("Hola, quisiera consultar por un producto")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/20 px-8 py-3.5 font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
          >
            Consultar disponibilidad y precios
          </a>
        </div>
      </div>
    </section>
  );
}
