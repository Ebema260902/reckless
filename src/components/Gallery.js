import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { gallery } from "@/data/content";

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-white px-4 py-16 sm:py-20 md:px-6 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Nuestro espacio" title="Galería" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 100}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-black/10 bg-black/[0.02]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                className={`grayscale transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0 ${
                  item.fit === "contain"
                    ? "object-contain bg-white p-6"
                    : "object-cover"
                }`}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 30vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
