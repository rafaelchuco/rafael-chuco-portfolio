// ─── Project ─────────────────────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  ogImage: string;
  github: string;
  demo?: string;
  color: "purple" | "blue";
  impact: string;
  date: string;
  featured: boolean;
  category: string;
}

// ─── SEO ──────────────────────────────────────────────────────────────────────
export interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedAt?: string;
  modifiedAt?: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  href: string;
  label: string;
}

// ─── Tech ─────────────────────────────────────────────────────────────────────
export interface TechItem {
  name: string;
  category: string;
  level?: number;
  color?: string;
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  area: string;
  details?: string;
  logo?: string;
  logoAlt?: string;
  logoText: string;
  accent: string;
  chip: string;
  type: "work" | "volunteer";
}
