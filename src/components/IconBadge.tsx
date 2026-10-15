import { Icon } from "@/components/Icon";
import type { IconName } from "@/lib/icons";
import type { IconTone } from "@/types";

const tones: Record<IconTone, string> = {
  solid: "bg-primary text-white",
  soft: "bg-tint text-primary",
  teal: "bg-accent/20 text-accent",
};

const sizes = {
  md: "h-10 w-10 [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 [&>svg]:h-7 [&>svg]:w-7",
};

interface IconBadgeProps {
  name: IconName;
  tone?: IconTone;
  size?: keyof typeof sizes;
  className?: string;
}

export function IconBadge({
  name,
  tone = "soft",
  size = "md",
  className = "",
}: IconBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${tones[tone]} ${sizes[size]} ${className}`}
    >
      <Icon name={name} />
    </span>
  );
}
