import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Clientes" title="Testimonios" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 100}
              className="flex flex-col justify-between rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition hover:-translate-y-1 hover:border-black/25 hover:shadow-lg hover:shadow-black/5"
            >
              <p className="text-2xl font-black leading-none text-black/15">
                &ldquo;
              </p>
              <p className="-mt-3 text-black/80">{t.text}</p>
              <p className="mt-6 text-sm font-semibold text-black/50">
                — {t.name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
