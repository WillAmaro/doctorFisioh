import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <header className="mb-8 max-w-2xl">
      {eyebrow && (
        <p className="mb-1 text-sm font-medium text-primary">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm text-muted sm:text-base">{subtitle}</p>}
    </header>
  );
}
