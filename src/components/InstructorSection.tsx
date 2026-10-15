import Image from "next/image";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { instructor } from "@/data/course";

export function InstructorSection() {
  return (
    <Section id="instructor" className="bg-soft">
      <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-primary-700 sm:text-3xl">
        {instructor.title}
      </h2>
      <div className="flex flex-col items-center gap-8 rounded-2xl border border-line bg-surface p-6 shadow-card sm:flex-row sm:p-8">
        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full ring-4 ring-tint">
          <Image
            src={instructor.photo}
            alt={`Retrato de ${instructor.name}`}
            fill
            sizes="176px"
            className="object-cover"
          />
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold text-navy sm:text-xl">
            {instructor.name}
          </h3>
          <ul className="mt-4 space-y-3">
            {instructor.highlights.map((text) => (
              <li key={text} className="flex items-start gap-3 text-sm text-ink">
                <Icon
                  name="check-circle"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
