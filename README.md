# DoctorFisioH — Landing del curso (Next.js + TypeScript + Tailwind)

Landing page responsive replicando el boceto: Navbar, Hero con precio, ¿Qué aprenderás?,
Equipos, ¿A quiénes está dirigido?, Instructor, Modalidad, CTA final, Footer y barra de compra móvil.

## Inicio rápido

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Requiere Node.js 18.18 o superior.

## Estructura

```
src/
  app/            layout.tsx, page.tsx, globals.css (tema), icon.svg (favicon)
  components/     una pieza por sección + Button, Icon, IconBadge, Logo, Section
  data/course.ts  TODO el contenido (textos, precios, iconos, rutas de imágenes)
  lib/icons.ts    registro de iconos (lucide-react) por nombre
  lib/theme.ts    tokens del tema que consume Tailwind
  types/index.ts  tipos compartidos
public/images/    logo, hero, equipment, instructor, cta (SVG)
```

## Cómo personalizar

- **Textos, precio, enlaces de compra:** edita `src/data/course.ts`
  (`purchase.href` y `navCta.href` apuntan a `#inscripcion`; cámbialos por tu enlace de Hotmart).
- **Colores / tema:** variables CSS en `src/app/globals.css`.
  Ya incluye un tema oscuro: agrega `data-theme="dark"` al `<html>` para probarlo.
- **Iconos:** agrega el icono de `lucide-react` en `src/lib/icons.ts` y úsalo por nombre en los datos.
- **Imágenes:** las de `public/images/` son ilustraciones SVG generadas para el proyecto.
  Para usar fotos reales, súbelas a `public/images/` (jpg/png/webp) y actualiza las rutas en `src/data/course.ts`.
  Cambia `hero.svg` → `hero.jpg`, etc.
