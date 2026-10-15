import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoctorFisioH | Fisiopatología Clínica y Agentes Físicos en Fisioterapia",
  description:
    "Curso 100% virtual para elegir y dosificar agentes físicos según el dolor, la inflamación y la reparación tisular.",
};

export const viewport: Viewport = {
  themeColor: "#0A2A5E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
