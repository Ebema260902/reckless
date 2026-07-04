import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Clientes" title="Testimonios" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-black/10 bg-black/[0.02] p-6"
            >
              <p className="text-black/80">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-6 text-sm font-semibold text-black/50">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
