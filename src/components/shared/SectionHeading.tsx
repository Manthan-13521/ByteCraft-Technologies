import { GradientText } from "./GradientText";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 sm:mb-16`}>
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
        {label}
      </span>
      <GradientText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </GradientText>
      {description && (
        <p className={`mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
