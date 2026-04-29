import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Chuco | Desarrollador Full Stack",
  description: "Portfolio de Rafael Chuco - Desarrollador Full Stack especializado en crear soluciones digitales modernas, escalables y centradas en resultados.",
  keywords: ["desarrollador", "full stack", "react", "next.js", "django", "portfolio"],
  authors: [{ name: "Rafael Chuco" }],
  openGraph: {
    title: "Rafael Chuco | Desarrollador Full Stack",
    description: "Portfolio profesional de Rafael Chuco",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
