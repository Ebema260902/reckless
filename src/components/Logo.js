import Image from "next/image";

export default function Logo({ size = "md", className = "" }) {
  const widths = {
    sm: 130,
    md: 190,
    lg: 340,
  };
  const width = widths[size];

  return (
    <Image
      src="/logo/reckless-wordmark.jpeg"
      alt="Reckless Studio"
      width={width}
      height={Math.round((width * 429) / 1600)}
      unoptimized
      priority
      className={`${className} h-auto`}
      style={{ width }}
    />
  );
}
