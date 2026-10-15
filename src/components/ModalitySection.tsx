import { IconBadge } from "@/components/IconBadge";
import { Section, SectionHeading } from "@/components/Section";
import { modality } from "@/data/course";

export function ModalitySection() {
  return (
    <Section id="modalidad">
      <SectionHeading
        eyebrow={modality.eyebrow}
        title={modality.title}
        subtitle={modality.subtitle}
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {modality.items.map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4 shadow-card"
          >
            <IconBadge name={item.icon} tone={item.tone} size="lg" />
            <div>
              <h3 className="text-sm font-bold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
