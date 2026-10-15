import { IconBadge } from "@/components/IconBadge";
import { Section, SectionHeading } from "@/components/Section";
import { audience } from "@/data/course";

export function AudienceSection() {
  return (
    <Section>
      <SectionHeading title={audience.title} subtitle={audience.subtitle} />
      <ul className="grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
        {audience.items.map((item) => (
          <li key={item.title} className="flex gap-4 md:px-6 md:first:pl-0 md:last:pr-0">
            <IconBadge name={item.icon} tone="soft" size="lg" />
            <div>
              <h3 className="text-sm font-bold text-navy">{item.title}</h3>
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
