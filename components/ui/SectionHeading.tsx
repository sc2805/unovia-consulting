// =============================================================================
// SectionHeading — Consistent section titles with eyebrow + heading + subtitle
// =============================================================================

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
            dark ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight mb-4 ${
          dark ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
