import Image from "next/image";
import { IconBadge } from "@/components/IconBadge";
import { Section, SectionHeading } from "@/components/Section";
import { equipment } from "@/data/course";

export function EquipmentSection() {
  return (
    <Section className="bg-gradient-to-b from-soft to-surface">
      <SectionHeading title={equipment.title} subtitle={equipment.subtitle} />
      <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {equipment.items.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-start gap-2.5 rounded-xl border border-line bg-surface p-4 shadow-card"
            >
              <IconBadge name={item.icon} tone="solid" />
              <span className="text-xs font-semibold text-navy">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src={equipment.image}
            alt="Aplicador de terapia sobre la rodilla de un paciente"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
