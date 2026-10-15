import Image from "next/image";
import { Button } from "@/components/Button";
import { finalCta } from "@/data/course";

export function FinalCta() {
  return (
    <section id={finalCta.id} className="pb-14 sm:pb-16">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-12 sm:py-16">
          <Image
            src={finalCta.image}
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="-z-20 object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"
          />

          <span className="inline-block rounded-md bg-primary/40 px-2.5 py-1 text-[10px] font-bold tracking-wide text-accent">
            {finalCta.tag}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            {finalCta.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={finalCta.primary.href} variant="white" size="sm">
              {finalCta.primary.label}
            </Button>
            <Button href={finalCta.secondary.href} variant="accent" size="sm">
              {finalCta.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
