/**
 * Tokens del tema. Los valores reales viven como variables CSS en
 * `src/app/globals.css` (:root = tema claro, [data-theme="dark"] = oscuro).
 * Tailwind solo referencia esas variables, así que cambiar la paleta
 * se hace en un único lugar.
 */
export const themeTokenNames = [
  "primary",
  "primary-600",
  "primary-700",
  "navy",
  "navy-900",
  "accent",
  "ink",
  "muted",
  "line",
  "soft",
  "tint",
  "surface",
] as const;

export type ThemeToken = (typeof themeTokenNames)[number];

export const tailwindColors = Object.fromEntries(
  themeTokenNames.map((name) => [
    name,
    `rgb(var(--color-${name}) / <alpha-value>)`,
  ]),
) as Record<ThemeToken, string>;
