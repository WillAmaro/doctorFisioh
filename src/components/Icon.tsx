import { icons, type IconName } from "@/lib/icons";

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth = 2 }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
