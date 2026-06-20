import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const base = siteConfig.siteUrl;

const routes: MetadataRoute.Sitemap = [
  {
    url: base,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${base}/#sobre-mi`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${base}/#experiencias`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${base}/#proyectos`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${base}/#tecnologias`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${base}/contacto`,
    lastModified: new Date("2026-06-20"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
