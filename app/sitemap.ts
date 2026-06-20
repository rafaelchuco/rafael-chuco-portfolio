import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  {
    url: siteConfig.siteUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    url: `${siteConfig.siteUrl}/contacto`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
