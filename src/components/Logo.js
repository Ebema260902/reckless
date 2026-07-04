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
      src="/logo/reckless-logo.svg"
      alt="Reckless Studio"
      width={width}
      height={Math.round((width * 130) / 560)}
      unoptimized
      priority
      className={`${className} h-auto`}
      style={{ width }}
    />
  );
}
