import Image from "next/image";
import { brand } from "@/data/course";

interface LogoProps {
  tone?: "dark" | "light";
  showTagline?: boolean;
}

export function Logo({ tone = "dark", showTagline = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src={brand.logo} alt="" width={36} height={36} priority />
      <span className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight ${
            tone === "dark" ? "text-navy" : "text-white"
          }`}
        >
          {brand.name}
        </span>
        {showTagline && (
          <span className="mt-1 text-[10px] font-medium text-white/70">
            {brand.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
