import type { Metadata } from "next";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Achievements from "@/components/Achievements";
import Networking from "@/components/Networking";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acerca de",
  description:
    "Conoce a Rafael Chuco — Desarrollador Full Stack y consultor SAP estudiante de TECSUP Lima. Especializado en React, Next.js, Django, SAP BTP y ABAP.",
  keywords: [
    "Rafael Chuco desarrollador",
    "Full Stack Lima Peru",
    "TECSUP desarrollador software",
    "SAP BTP ABAP consultant junior",
    "React Next.js Django developer",
    "NTT DATA SAP trainee",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `Acerca de | ${siteConfig.name}`,
    description:
      "Desarrollador Full Stack y consultor SAP en formación, estudiante de TECSUP Lima. React, Next.js, Django, SAP BTP y ABAP.",
    url: `${siteConfig.siteUrl}/about`,
    type: "profile",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Acerca de ${siteConfig.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Acerca de | ${siteConfig.name}`,
    description: "Desarrollador Full Stack y consultor SAP en formación — Lima, Perú.",
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/images/rafael.png`,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "TECSUP",
    url: "https://www.tecsup.edu.pe/",
  },
  worksFor: {
    "@type": "Organization",
    name: "NTT DATA Europe & Latam",
  },
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  knowsAbout: [
    "React", "Next.js", "TypeScript", "Python", "Django",
    "Laravel", "Vue.js", "SAP BTP", "SAP ABAP", "SAP Fiori", "SAPUI5",
    "PostgreSQL", "MySQL", "Tailwind CSS", "REST APIs",
  ],
};

export default function AboutPage() {
  return <main className="min-h-screen bg-[#0D1117]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <Navbar /><div className="pt-20"><About /></div><Competencies /><Achievements /><Networking /><Footer />
  </main>;
}
