import Image from "next/image";
import { Button } from "@/components/Button";
import { hero, purchase } from "@/data/course";

export function Hero() {
  return (
    <section
      id="curso"
      className="relative isolate overflow-hidden bg-navy-900 text-white"
    >
      <Image
        src={hero.image}
        alt="Fisioterapeuta aplicando ultrasonido terapéutico en la rodilla de un paciente"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[75%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/70 to-transparent sm:via-navy-900/50"
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wide">
            {hero.badge}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block text-accent">{hero.highlight}</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={purchase.href} arrow className="hidden sm:inline-flex sm:min-w-[210px]">
              {purchase.label}
            </Button>
            <Button href={purchase.href} arrow size="sm" className="sm:hidden">
              {purchase.label}
            </Button>

            <div className="rounded-2xl bg-white px-6 py-3 text-navy shadow-float">
              <p className="text-3xl font-extrabold leading-none text-primary-700">
                {hero.price.amount}
              </p>
              <p className="mt-1 max-w-[9rem] text-[11px] leading-tight text-muted">
                {hero.price.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
