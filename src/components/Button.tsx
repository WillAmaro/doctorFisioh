import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-600",
  white: "bg-white text-navy hover:bg-white/90",
  accent: "bg-accent text-navy-900 hover:brightness-95",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
} as const;

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-sm transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow-right" className="h-4 w-4" />}
    </Link>
  );
}
