import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignCls =
    align === "left" ? "mr-auto text-left" : "mx-auto text-center";

  return (
    <Reveal className={`mb-10 max-w-2xl sm:mb-12 md:mb-14 ${alignCls}`}>
      {eyebrow && (
        <p className="eyebrow mb-3 text-xs text-black/45 sm:mb-4 sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm text-black/55 sm:mt-5 sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
