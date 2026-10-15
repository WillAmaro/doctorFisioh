import { IconBadge } from "@/components/IconBadge";
import { Section, SectionHeading } from "@/components/Section";
import { learn } from "@/data/course";

export function LearnSection() {
  return (
    <Section id="aprenderas">
      <SectionHeading title={learn.title} subtitle={learn.subtitle} />
      <ul className="grid gap-4 md:grid-cols-3">
        {learn.items.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card md:flex-col md:p-6"
          >
            <IconBadge name={item.icon} tone={item.tone} size="lg" />
            <div>
              <h3 className="text-base font-bold leading-snug text-navy sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
