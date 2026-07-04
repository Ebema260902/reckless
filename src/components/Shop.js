"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
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
    <section id="tienda" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Productos"
          title="Tienda"
          description="Línea profesional Salerm, Suavecito, Kenra y más, disponible en el local."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {shopCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                active === cat
                  ? "border-black bg-black text-white"
                  : "border-black/20 text-black/60 hover:border-black/50 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="flex items-start gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/10 text-lg font-bold">
                {product.name[0]}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold leading-snug">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <span className="rounded-full border border-black/20 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-black/60">
                      {product.badge}
                    </span>
                  )}
                </div>
                {product.description && (
                  <p className="mt-1 text-xs text-black/50">
                    {product.description}
                  </p>
                )}
                {product.price && (
                  <p className="mt-2 text-sm font-bold">
                    {formatColones(product.price)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink("Hola, quisiera consultar por un producto")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/20 px-8 py-3 font-semibold text-black transition hover:bg-black/5"
          >
            Consultar disponibilidad y precios
          </a>
        </div>
      </div>
    </section>
  );
}
