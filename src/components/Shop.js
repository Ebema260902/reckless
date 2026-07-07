"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProductIcon from "./ProductIcon";
import { products, shopCategories, whatsappLink } from "@/data/content";

const formatColones = (value) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

export default function Shop() {
  const [active, setActive] = useState(shopCategories[0]);
  const filtered = products.filter((p) => p.category === active);

  return (
    <section id="tienda" className="bg-white px-4 py-28 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Productos"
          title="Tienda"
          description="Línea profesional Salerm, Suavecito, Kenra y más, disponible en el local."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {shopCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-0.5 ${
                active === cat
                  ? "border-black bg-black text-white"
                  : "border-black/20 text-black/60 hover:border-black/50 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={`${active}-${product.name}`} delay={(i % 3) * 90}>
              <article className="group">
                {/* Contenedor de imagen de producto -- aloja el ícono ahora y
                    puede alojar una foto real (PNG transparente) más adelante. */}
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-neutral-100 transition-colors duration-300 ease-in-out group-hover:bg-neutral-200/70">
                  <ProductIcon
                    category={product.category}
                    className="h-20 w-20 text-black/30 transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-black px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-wide text-white">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold leading-snug">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="mt-1 text-xs leading-relaxed text-black/45">
                      {product.description}
                    </p>
                  )}
                  {product.price && (
                    <p className="mt-2 text-sm font-bold">
                      {formatColones(product.price)}
                    </p>
                  )}
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
