import type { Project, NavLink } from "@/types";

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "automation-manager", title: "Automation Manager",
    description: "Solución para automatizar la ejecución y validación de casos de prueba con Java, Playwright y Cucumber, incluyendo generación automática de evidencias.",
    longDescription: "Automation Manager está orientado a automatizar pruebas de aplicaciones SAP. Integra Java, Playwright y Cucumber para ejecutar y validar casos de prueba, y generar evidencias de forma automática. Este resumen presenta el enfoque técnico del proyecto sin exponer documentación ni datos corporativos.",
    impact: "Automatización de pruebas SAP", tags: ["Java", "Playwright", "Cucumber", "SAP"],
    ogImage: "/og-image.png", color: "purple", featured: true, category: "Automatización",
  },
  {
    slug: "accessible-assistant", title: "NTT DATA Accessible Assistant",
    description: "Propuesta de asistencia para aplicaciones empresariales con navegación por teclado, lectura de información y soporte accesible para procesos SAP.",
    longDescription: "NTT DATA Accessible Assistant es una propuesta de tecnología y accesibilidad para aplicaciones empresariales. Explora navegación por teclado, lectura de información y asistencia en procesos SAP Fiori con Electron y TypeScript. Se presenta como propuesta; no implica un despliegue corporativo ni publica material interno.",
    impact: "Tecnología y accesibilidad", tags: ["Electron", "TypeScript", "SAP Fiori", "Accessibility"],
    ogImage: "/og-image.png", color: "blue", featured: true, category: "Accesibilidad",
  },
  {
    slug: "lingodate", title: "LingōDate",
    description: "Proyecto académico que analiza las barreras lingüísticas en conversaciones entre personas con distintos niveles de dominio de un idioma.",
    longDescription: "LingōDate es un proyecto académico de innovación y experiencia de usuario enfocado en analizar las barreras lingüísticas presentes en conversaciones entre personas que no comparten el mismo nivel de dominio de un idioma. Su enfoque combina investigación y UX para comprender el problema y orientar una propuesta de solución.",
    impact: "Innovación y experiencia de usuario", tags: ["Innovation", "UX", "Research"],
    ogImage: "/og-image.png", color: "purple", featured: true, category: "Proyecto académico",
  },
  {
    slug: "restafest",
    title: "RestaFest",
    description:
      "Proyecto académico de modelado de datos y prototipado de una solución de compra, venta y delivery para pequeños restaurantes.",
    longDescription:
      "RestaFest es un proyecto académico del periodo 2024-I. Incluye el diseño del modelo de base de datos en Oracle Database para usuarios, restaurantes, platos, pedidos y repartidores, y el prototipado en Figma de las interfaces y del flujo de compra, preparación y entrega. Integra requerimientos funcionales en una propuesta de delivery orientada a pequeños restaurantes.",
    impact: "Modelado y prototipado de delivery",
    tags: ["Oracle Database", "Figma", "Modelado de datos"],
    ogImage: "/og/restafest.png",
    github: "https://github.com/rafaelchuco/restafest",
    demo: undefined,
    color: "purple",
    period: "2024-I",
    featured: true,
    category: "Full Stack",
  },
  {
    slug: "animapets",
    title: "AnimaPets",
    description:
      "Sistema web veterinario para gestionar clientes, mascotas y citas médicas con Laravel, Vue.js y servicios REST.",
    longDescription:
      "AnimaPets es un proyecto académico del periodo 2024-II. Desarrolla funcionalidades para gestionar clientes, mascotas y citas médicas. Su backend Laravel y frontend Vue.js se conectan mediante servicios REST, aplicando organización de datos y consumo de APIs para centralizar la información.",
    impact: "Control integral para atención clínica",
    tags: ["Laravel", "Vue.js", "API REST", "MySQL"],
    ogImage: "/og/animapets.png",
    github: "https://github.com/rafaelchuco/animapets",
    demo: undefined,
    color: "blue",
    period: "2024-II",
    featured: true,
    category: "Full Stack",
  },
  {
    slug: "sistema-inventario",
    title: "Sistema de Inventario",
    description:
      "Aplicación web para controlar stock, detectar faltantes y simplificar la gestión operativa con reportes claros.",
    longDescription:
      "Sistema de inventario construido con React en el frontend y Django + PostgreSQL en el backend. Incluye dashboard de métricas con Charts.js, alertas de stock mínimo, módulo de movimientos de entrada/salida y exportación de reportes en PDF. Diseñado para equipos operativos que necesitan visibilidad inmediata del estado del inventario.",
    impact: "Menos fricción en control y seguimiento",
    tags: ["React", "Django", "PostgreSQL", "Charts"],
    ogImage: "/og/sistema-inventario.png",
    github: "https://github.com/rafaelchuco",
    demo: undefined,
    color: "purple",
    date: "2025-03",
    featured: false,
    category: "Full Stack",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#experiencias", label: "Experiencia" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#noticias", label: "Noticias" },
  { href: "/#contacto", label: "Contacto" },
];
