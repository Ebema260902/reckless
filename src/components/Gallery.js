import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { gallery } from "@/data/content";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Nuestro espacio" title="Galería" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
