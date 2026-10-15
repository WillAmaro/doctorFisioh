import type {
  AudienceItem,
  Cta,
  EquipmentItem,
  FeatureItem,
  NavLink,
  SectionIntro,
} from "@/types";

export const brand = {
  name: "DoctorFisioH",
  tagline: "Formación en fisioterapia",
  logo: "/images/logo.svg",
  copyright: "© 2024 DoctorFisioH. Todos los derechos reservados.",
};

/** Cambia aquí el enlace real de compra (Hotmart, etc.) */
export const purchase: Cta = { label: "Inscríbete ahora", href: "#inscripcion" };

export const navLinks: NavLink[] = [
  { label: "El curso", href: "#curso" },
  { label: "¿Qué aprenderás?", href: "#aprenderas" },
  { label: "Sobre mí", href: "#instructor" },
  { label: "Modalidad", href: "#modalidad" },
];

export const navCta: Cta = { label: "Comprar ahora", href: "#inscripcion" };

export const hero = {
  badge: "CURSO 100% VIRTUAL",
  titleLines: ["Fisiopatología Clínica y", "Agentes Físicos en"],
  highlight: "Fisioterapia",
  description:
    "Aprende a elegir y dosificar los agentes físicos según el dolor, la inflamación y la reparación tisular, para un tratamiento más efectivo y seguro.",
  image: "/images/hero.svg",
  price: { amount: "US$ 35", note: "Descuento exclusivo de la web" },
};

export const learn: SectionIntro & { items: FeatureItem[] } = {
  title: "¿Qué aprenderás?",
  subtitle:
    "Domina los conceptos clave y aplica el conocimiento en la práctica clínica.",
  items: [
    {
      icon: "zap",
      tone: "solid",
      title: "Tratar el dolor y la inflamación",
      description:
        "Comprende los mecanismos y efectos de los agentes físicos en el manejo del dolor y la inflamación.",
    },
    {
      icon: "settings",
      tone: "soft",
      title: "Elegir parámetros y dosis según la lesión",
      description:
        "Aprende a seleccionar los parámetros adecuados y ajustar la dosis según el tipo de lesión y el objetivo terapéutico.",
    },
    {
      icon: "tablet",
      tone: "soft",
      title: "Mejorar el manejo de equipos",
      description:
        "Conoce el funcionamiento y uso seguro de los principales equipos de agentes físicos en fisioterapia.",
    },
  ],
};

export const equipment: SectionIntro & {
  image: string;
  items: EquipmentItem[];
} = {
  title: "Equipos que aprenderás a utilizar",
  subtitle:
    "Conoce y domina los principales equipos de agentes físicos en fisioterapia.",
  image: "/images/equipment.svg",
  items: [
    { icon: "activity", label: "Electroterapia" },
    { icon: "waves", label: "Ultrasonido" },
    { icon: "sun", label: "Láser terapéutico" },
    { icon: "magnet", label: "Magnetoterapia" },
    { icon: "radio", label: "Ondas de choque" },
    { icon: "target", label: "Tecarterapia" },
    { icon: "sparkles", label: "Fotobiomodulación" },
  ],
};

export const audience: SectionIntro & { items: AudienceItem[] } = {
  title: "¿A quiénes está dirigido?",
  subtitle:
    "Este curso es ideal para profesionales y estudiantes que buscan fortalecer sus conocimientos en fisioterapia y el uso de agentes físicos.",
  items: [
    {
      icon: "user",
      title: "Fisioterapeutas",
      description:
        "que desean actualizar y fortalecer sus conocimientos en fisiopatología clínica y agentes físicos.",
    },
    {
      icon: "graduation-cap",
      title: "Estudiantes de fisioterapia",
      description:
        "que quieren complementar su formación con conocimientos especializados.",
    },
    {
      icon: "trending-up",
      title: "Profesionales de la salud",
      description:
        "que buscan mejorar sus decisiones de dosificación y manejo de equipos en la práctica clínica.",
    },
  ],
};

export const instructor = {
  title: "Sobre el instructor",
  name: "Lic. Enrique Zamora Gonzales",
  photo: "/images/instructor.svg",
  highlights: [
    "Fisioterapeuta licenciado por la Universidad Peruana de Ciencias Aplicadas.",
    "Estudiante de Medicina Humana - Universidad Peruana Cayetano Heredia.",
    "Especialista en equipos médicos - ENOVIS LATAM.",
  ],
};

export const modality: { eyebrow: string } & SectionIntro & {
    items: FeatureItem[];
  } = {
  eyebrow: "Modalidad de enseñanza",
  title: "Clases en vivo y grabadas",
  subtitle: "Aprende a tu ritmo, con el acompañamiento que necesitas.",
  items: [
    {
      icon: "video",
      tone: "soft",
      title: "Clases en vivo por Zoom",
      description: "Participa en sesiones en tiempo real y resuelve tus dudas.",
    },
    {
      icon: "monitor",
      tone: "soft",
      title: "Uso de equipos de manera remota",
      description: "Aprende con demostraciones y práctica guiada.",
    },
    {
      icon: "play-circle",
      tone: "teal",
      title: "Clases grabadas en Hotmart",
      description: "Accede a todo el contenido desde cualquier momento.",
    },
    {
      icon: "clipboard-check",
      tone: "soft",
      title: "Guías de dosificación",
      description:
        "Aplica los parámetros y dosis correctas en cada tratamiento.",
    },
    {
      icon: "badge-check",
      tone: "teal",
      title: "Asesoramiento personalizado",
      description: "Recibe orientación directa del instructor.",
    },
    {
      icon: "file-text",
      tone: "soft",
      title: "Archivos PDF en Drive",
      description:
        "Descarga material complementario para reforzar lo aprendido.",
    },
  ],
};

export const finalCta = {
  id: "inscripcion",
  tag: "TU FORMACIÓN, A UN PASO",
  title: "¡No esperes más!",
  description:
    "Fortalece tus conocimientos y mejora tu práctica clínica con este curso 100% virtual.",
  image: "/images/cta.svg",
  primary: { label: "Descarga el temario", href: "#" } satisfies Cta,
  secondary: { label: "Guía de dosificación gratuita", href: "#" } satisfies Cta,
};

export const mobileBar = {
  price: "US$ 35",
  note: "Descuento exclusivo de la web",
};
