export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-black/60">{description}</p>
      )}
    </div>
  );
}
