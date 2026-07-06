"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { products, shopCategories, whatsappLink } from "@/data/content";

const formatColones = (value) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

// Textura de fondo (foto de stock en blanco y negro) para cada ficha.
// Es decorativa -- no representa el producto exacto. Se puede reemplazar por
// fotos reales de cada producto subiéndolas a /public/images/products.
const TEXTURE_COUNT = 26;
const textureFor = (name) => {
  const idx = products.findIndex((p) => p.name === name);
  return `/images/products/p${((idx < 0 ? 0 : idx) % TEXTURE_COUNT)}.jpg`;
};

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
              className={`rounded-full border px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
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
          {filtered.map((product, i) => (
            <Reveal
              key={`${active}-${product.name}`}
              delay={(i % 3) * 80}
              className="group flex items-start gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-5 transition hover:-translate-y-1 hover:border-black/25 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                {/* Foto de stock decorativa en b/n, oscurecida, con la inicial encima */}
                <Image
                  src={textureFor(product.name)}
                  alt=""
                  aria-hidden="true"
                  fill
                  unoptimized
                  sizes="56px"
                  className="object-cover grayscale transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/55" />
                <span className="relative text-lg font-bold text-white">
                  {product.name[0]}
                </span>
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
            </Reveal>
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
