import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  /** Si es true muestra descripción larga y botón de detalle */
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const accentFrom =
    project.color === "purple" ? "from-primary-purple/30" : "from-primary-blue/30";
  const accentTo =
    project.color === "purple" ? "to-primary-blue/30" : "to-primary-purple/30";
  const tagBg =
    project.color === "purple"
      ? "bg-primary-purple/10 text-primary-purple border-primary-purple/30"
      : "bg-primary-blue/10 text-primary-blue border-primary-blue/30";

  return (
    <article className="group flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] transition-all duration-300 hover:border-primary-purple/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)] hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#141922] to-[#0f141b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_40%)]" />

        {/* Imagen del proyecto con next/image */}
        <Image
          src={project.image}
          alt={`Captura de pantalla del proyecto ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={undefined}
        />

        {/* Fallback icon cuando no hay imagen real */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 group-has-[img[src]]:opacity-0">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-[22px] bg-gradient-to-br ${accentFrom} ${accentTo} border border-white/10`}
          >
            <span className="text-4xl" aria-hidden="true">💼</span>
          </div>
        </div>

        {/* Impact badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            {project.impact}
          </span>
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm text-gray-300">Ver proyecto</span>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${project.title} en GitHub`}
              className="rounded-lg bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo de ${project.title}`}
                className="rounded-lg bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            {project.category} · {project.date}
          </p>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-primary-purple">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            {featured ? project.longDescription : project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-0.5 text-xs font-medium ${tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-sm font-medium text-primary-purple hover:underline"
          >
            Ver detalle
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${project.title}`}
            className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
