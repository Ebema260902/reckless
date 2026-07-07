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
    <Reveal className={`mb-14 max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="eyebrow mb-4 text-sm text-black/45">{eyebrow}</p>
      )}
      <h2 className="text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base text-black/55">{description}</p>
      )}
    </Reveal>
  );
}
