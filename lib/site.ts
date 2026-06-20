const defaultSiteUrl = "https://rafael-chuco-portfolio.vercel.app";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "Rafael Chuco",
  title: "Rafael Chuco | Desarrollador Full Stack",
  description:
    "Portfolio de Rafael Chuco - Desarrollador Full Stack especializado en crear soluciones digitales modernas, escalables y centradas en resultados.",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl),
  email: "rafael.chuco1908@gmail.com",
};

export function getSiteUrl() {
  return new URL(siteConfig.siteUrl);
}
