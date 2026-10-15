"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { navCta, navLinks } from "@/data/course";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="#curso" aria-label="Ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-navy transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button href={navCta.href} size="sm">
            {navCta.label}
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Móvil"
          className="border-t border-line bg-surface px-5 pb-5 pt-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy hover:bg-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={navCta.href} className="mt-3 w-full">
            {navCta.label}
          </Button>
        </nav>
      )}
    </header>
  );
}
