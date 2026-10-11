const defaultSiteUrl = "https://www.rafaelchuco.me";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "Rafael Diego Chuco Yantas",
  title: "Rafael Diego Chuco Yantas | Software Developer · AI & Automation · SAP",
  titleTemplate: "%s | Rafael Chuco",
  description:
    "Portafolio de Rafael Diego Chuco Yantas, estudiante de Diseño y Desarrollo de Software en TECSUP. Inteligencia artificial, automatización, desarrollo de software y soluciones SAP en Lima, Perú.",
  shortDescription: "Software Developer · AI & Automation · SAP",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
  cv: "/cv-rafael-chuco.pdf",
  email: "rafael.chuco1908@gmail.com",
  phone: "+51927395280",
  location: "Lima, Perú",
  jobTitle: "Desarrollador Full Stack",
  keywords: [
    "Rafael Chuco",
    "Desarrollador Full Stack",
    "Desarrollador Web Peru",
    "React Next.js Developer",
    "SAP BTP Developer",
    "SAP ABAP Consultant",
    "SAP Fiori SAPUI5",
    "Django Python Developer",
    "Laravel Vue.js",
    "Portfolio desarrollador Lima",
    "Full Stack Developer Lima",
    "Joule AI SAP",
    "GitHub Copilot",
    "Freelance developer Peru",
  ],
  social: {
    github: "https://github.com/rafaelchuco",
    linkedin: "https://www.linkedin.com/in/rafael-chuco/",
    twitter: "@rafaelchuco",
  },
  organization: "Rafael Chuco Dev",
  locale: "es_PE",
  language: "es",
};

export function getSiteUrl() {
  return new URL(siteConfig.siteUrl);
}
