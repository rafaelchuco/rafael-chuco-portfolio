import type { Project, NavLink } from "@/types";

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "restafest",
    title: "RestaFest",
    description:
      "Plataforma de delivery para gestionar pedidos, restaurantes y repartidores con un flujo claro para operación diaria.",
    longDescription:
      "RestaFest es una plataforma integral de delivery construida con Oracle DB y una API REST robusta. Permite gestionar en tiempo real los pedidos entrantes, asignar repartidores, administrar el menú de restaurantes y generar reportes operativos. El diseño fue prototipado en Figma con foco en flujos de uso eficientes para operadores.",
    impact: "Pedidos y operación en tiempo real",
    tags: ["Oracle DB", "Figma", "API REST"],
    image: "/projects/restafest.jpg",
    ogImage: "/og/restafest.png",
    github: "https://github.com/rafaelchuco/restafest",
    demo: undefined,
    color: "purple",
    date: "2025-09",
    featured: true,
    category: "Full Stack",
  },
  {
    slug: "animapets",
    title: "AnimaPets",
    description:
      "Sistema veterinario para administrar clientes, mascotas, citas y tratamientos desde una interfaz práctica y ordenada.",
    longDescription:
      "AnimaPets es un sistema de gestión clínica veterinaria desarrollado con Laravel y Vue.js. Permite registrar clientes y sus mascotas, agendar citas, registrar tratamientos y generar historiales médicos. La API REST conecta el frontend Vue.js con el backend Laravel sobre una base de datos MySQL.",
    impact: "Control integral para atención clínica",
    tags: ["Laravel", "Vue.js", "API REST", "MySQL"],
    image: "/projects/animapets.jpg",
    ogImage: "/og/animapets.png",
    github: "https://github.com/rafaelchuco/animapets",
    demo: undefined,
    color: "blue",
    date: "2025-06",
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
    image: "/projects/taskflow.jpg",
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
  { href: "/#experiencias", label: "Experiencias" },
  { href: "/projects", label: "Proyectos" },
  { href: "/#tecnologias", label: "Tecnologías" },
  { href: "/about", label: "Acerca de" },
  { href: "/contacto", label: "Contacto" },
];
