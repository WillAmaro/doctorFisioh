import Link from "next/link";
import { Logo } from "@/components/Logo";
import { brand, navLinks } from "@/data/course";

export function Footer() {
  return (
    <footer className="bg-navy-900 pb-28 text-white md:pb-0">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Logo tone="light" showTagline />
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-[11px] text-white/60">
          {brand.copyright}
        </p>
      </div>
    </footer>
  );
}
