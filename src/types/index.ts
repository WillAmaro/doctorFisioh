import type { IconName } from "@/lib/icons";

export type IconTone = "solid" | "soft" | "teal";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
  tone?: IconTone;
}

export interface EquipmentItem {
  icon: IconName;
  label: string;
}

export interface AudienceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface SectionIntro {
  title: string;
  subtitle: string;
}

export interface Cta {
  label: string;
  href: string;
}
