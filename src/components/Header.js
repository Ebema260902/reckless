"use client";

import { useState } from "react";
import Logo from "./Logo";
import { business, whatsappLink } from "@/data/content";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  { href: "#tienda", label: "Tienda" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-underline text-sm text-black/60 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-black/80"
          >
            Reservar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-black" />
            <span className="h-0.5 w-5 bg-black" />
            <span className="h-0.5 w-5 bg-black" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/10 bg-white px-4 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-black/70 hover:bg-black/5 hover:text-black"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hola, quisiera reservar un turno")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-black px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Reservar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
