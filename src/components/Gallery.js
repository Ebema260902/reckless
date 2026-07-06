import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { gallery } from "@/data/content";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Nuestro espacio" title="Galería" />

        <div className="grid items-start gap-4 sm:grid-cols-2">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 2) * 120}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                unoptimized
                className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
