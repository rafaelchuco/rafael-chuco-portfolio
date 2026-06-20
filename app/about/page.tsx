import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Code2, ExternalLink } from "lucide-react";
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

const skills = [
  { label: "React / Next.js", level: 85, color: "from-primary-purple to-violet-400" },
  { label: "Python / Django", level: 90, color: "from-primary-blue to-cyan-400" },
  { label: "SAP BTP / ABAP", level: 75, color: "from-amber-500 to-orange-400" },
  { label: "SAP Fiori / UI5", level: 72, color: "from-green-500 to-emerald-400" },
  { label: "TypeScript", level: 78, color: "from-primary-purple to-primary-blue" },
  { label: "Laravel / Vue.js", level: 80, color: "from-red-500 to-orange-400" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className="min-h-screen bg-[#0D1117]">
        <Navbar />

        <div className="mx-auto max-w-5xl px-6 pb-24 pt-32">
          {/* Hero section */}
          <div className="mb-20 grid items-center gap-14 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue">
                Acerca de mí
              </span>
              <h1 className="mb-6 text-5xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
                  Rafael Chuco
                </span>
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-gray-400">
                Desarrollador Full Stack y consultor SAP en formación, estudiante de{" "}
                <strong className="text-white">Diseño y Desarrollo de Software en TECSUP</strong>.
                Combino desarrollo web moderno con soluciones SAP empresariales para crear
                productos digitales útiles, escalables y bien ejecutados.
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary-purple" aria-hidden="true" />
                  Lima, Perú
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary-blue" aria-hidden="true" />
                  2+ años de experiencia
                </span>
                <span className="flex items-center gap-1.5">
                  <Code2 className="h-4 w-4 text-violet-400" aria-hidden="true" />
                  Full Stack · SAP
                </span>
              </div>
            </div>

            {/* Profile image */}
            <div className="relative mx-auto h-56 w-56 shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-primary-purple/20 to-primary-blue/10 shadow-[0_24px_80px_rgba(124,58,237,0.2)] lg:h-64 lg:w-64">
              <Image
                src="/images/rafael.png"
                alt="Foto de perfil de Rafael Chuco"
                fill
                priority
                sizes="256px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Skills */}
          <section aria-labelledby="skills-heading" className="mb-20">
            <h2
              id="skills-heading"
              className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-white"
            >
              Habilidades principales
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-300">{skill.label}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Nivel de ${skill.label}: ${skill.level}%`}
                  >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience summary */}
          <section aria-labelledby="exp-heading" className="mb-20">
            <h2
              id="exp-heading"
              className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-white"
            >
              Experiencia reciente
            </h2>
            <div className="space-y-4">
              {[
                {
                  org: "NTT DATA Europe & Latam",
                  role: "Consultor SAP ABAP",
                  period: "Mar 2026 – Actualidad",
                  type: "Prácticas · SAP Fiori y SAPUI5",
                },
                {
                  org: "Chiru MarketPlace",
                  role: "Desarrollador de Aplicaciones Móviles",
                  period: "Dic 2025 – Mar 2026",
                  type: "React Native",
                },
                {
                  org: "LEAD TECSUP",
                  role: "Presidente",
                  period: "Dic 2025 – Actualidad",
                  type: "Liderazgo estudiantil",
                },
              ].map((exp) => (
                <div
                  key={exp.role}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-purple">
                      {exp.org}
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">{exp.role}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{exp.type}</p>
                  </div>
                  <span className="shrink-0 text-xs text-gray-500">{exp.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(124,58,237,0.25)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.38)]"
            >
              Ver mis proyectos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Contáctame
            </Link>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-blue/30"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
