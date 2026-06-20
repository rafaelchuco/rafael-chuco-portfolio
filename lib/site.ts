const defaultSiteUrl = "https://rafaelchuco.dev";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "Rafael Chuco",
  title: "Rafael Chuco | Desarrollador Full Stack & SAP",
  titleTemplate: "%s | Rafael Chuco",
  description:
    "Portfolio de Rafael Chuco — Desarrollador Full Stack especializado en React, Next.js, Django, SAP BTP, ABAP y Fiori. Disponible para freelance y oportunidades en Lima, Perú.",
  shortDescription: "Desarrollador Full Stack · SAP BTP · React · Next.js · Django",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
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
