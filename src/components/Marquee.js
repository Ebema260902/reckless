const items = [
  "Cortes clásicos",
  "Barba & afeitado",
  "Estilo",
  "Reckless Studio",
];

function Group({ ariaHidden = false }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 text-sm font-semibold uppercase tracking-[0.25em] md:text-base">
            {item}
          </span>
          <span className="text-white/40" aria-hidden="true">
            •
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-black/10 bg-black py-4 text-white">
      <div className="marquee-track flex w-max flex-nowrap">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
