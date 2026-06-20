import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/data";

const base = siteConfig.siteUrl;
const LAST_MOD = new Date("2026-06-20");

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/projects`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/contacto`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Landing section anchors (useful for search snippets)
    {
      url: `${base}/#sobre-mi`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/#experiencias`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/#tecnologias`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(`${project.date}-01`),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.85 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
