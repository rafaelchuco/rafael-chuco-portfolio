import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, getProjectSlugs, projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

// ─── Static params (SSG) ──────────────────────────────────────────────────────
export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      description: "Este proyecto no existe o fue removido.",
    };
  }

  const url = `${siteConfig.siteUrl}/projects/${project.slug}`;
  const ogImage = project.ogImage ?? "/og-image.png";

  return {
    title: project.title,
    description: project.description,
    keywords: [
      project.title,
      ...project.tags,
      `proyecto ${project.category}`,
      `${siteConfig.name} ${project.title}`,
    ],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.longDescription,
      url,
      type: "article",
      publishedTime: `${project.date}-01T00:00:00Z`,
      authors: [siteConfig.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [ogImage],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const accentColor =
    project.color === "purple" ? "text-primary-purple" : "text-primary-blue";
  const tagBg =
    project.color === "purple"
      ? "bg-primary-purple/10 text-primary-purple border-primary-purple/30"
      : "bg-primary-blue/10 text-primary-blue border-primary-blue/30";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.longDescription,
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    datePublished: `${project.date}-01`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    keywords: project.tags.join(", "),
  };

  // Related projects (same category, excluding current)
  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <main className="min-h-screen bg-[#0D1117]">
        <Navbar />

        <article className="mx-auto max-w-4xl px-6 pb-24 pt-32">
          {/* Back */}
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todos los proyectos
          </Link>

          {/* Hero image */}
          <div className="relative mb-10 h-72 w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#141922] to-[#0f141b] lg:h-96">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_40%)]" />
            <Image
              src={project.image}
              alt={`Captura de pantalla principal de ${project.title}`}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Meta row */}
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" aria-hidden="true" />
              {project.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {project.date}
            </span>
          </div>

          {/* Title */}
          <h1 className={`mb-4 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl`}>
            {project.title}
          </h1>

          {/* Impact */}
          <p className={`mb-6 text-lg font-medium ${accentColor}`}>{project.impact}</p>

          {/* Long description */}
          <p className="mb-8 text-base leading-relaxed text-gray-400">
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="mb-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border px-4 py-1 text-sm font-medium ${tagBg}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mb-16 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-purple/30 hover:bg-primary-purple/[0.08]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Ver en GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(124,58,237,0.25)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.38)]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Ver demo
              </a>
            )}
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500"
              >
                Proyectos relacionados
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/projects/${rel.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary-purple/20 hover:bg-white/[0.06]"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#141922]">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white group-hover:text-primary-purple">
                        {rel.title}
                      </p>
                      <p className="truncate text-xs text-gray-500">{rel.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <Footer />
      </main>
    </>
  );
}
