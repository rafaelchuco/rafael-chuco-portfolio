import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora los proyectos de Rafael Chuco: plataformas web, sistemas de gestión y soluciones Full Stack construidas con React, Next.js, Django, Laravel y SAP.",
  keywords: [
    "proyectos Rafael Chuco",
    "portfolio full stack",
    "RestaFest delivery",
    "AnimaPets veterinario",
    "sistema inventario Django",
    "proyectos React Next.js",
    "proyectos SAP ABAP",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Proyectos | ${siteConfig.name}`,
    description:
      "Portfolio de proyectos Full Stack: plataformas web, APIs y sistemas de gestión con React, Django, Laravel y SAP.",
    url: `${siteConfig.siteUrl}/projects`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Proyectos de Rafael Chuco" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Proyectos | ${siteConfig.name}`,
    description: "Portfolio de proyectos Full Stack construidos con React, Django, Laravel y SAP.",
    images: ["/og-image.png"],
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Proyectos de ${siteConfig.name}`,
  description: metadata.description,
  url: `${siteConfig.siteUrl}/projects`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  hasPart: projects.map((p) => ({
    "@type": "SoftwareApplication",
    name: p.title,
    description: p.description,
    url: `${siteConfig.siteUrl}/projects/${p.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
  })),
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <main className="min-h-screen bg-[#0D1117]">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
          {/* Back */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>

          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue">
              Portfolio
            </span>
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
              Proyectos{" "}
              <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
                construidos
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-400">
              Cada proyecto refleja un problema real resuelto con foco en estructura, claridad
              visual y ejecución técnica sólida.
            </p>
          </div>

          {/* Featured projects */}
          {featured.length > 0 && (
            <section aria-labelledby="featured-heading" className="mb-16">
              <h2
                id="featured-heading"
                className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500"
              >
                Destacados
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {featured.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* All other projects */}
          {rest.length > 0 && (
            <section aria-labelledby="all-heading">
              <h2
                id="all-heading"
                className="mb-8 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500"
              >
                Otros proyectos
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
