import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Rafael Chuco para proyectos freelance, colaboraciones o nuevas oportunidades profesionales en Lima, Perú.",
  keywords: [
    "contacto Rafael Chuco",
    "contratar desarrollador full stack Lima",
    "freelance SAP developer Peru",
    "proyectos web Next.js",
  ],
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: `Contacto | ${siteConfig.name}`,
    description:
      "Conversemos sobre tu proyecto, colaboración o próxima oportunidad profesional.",
    url: `${siteConfig.siteUrl}/contacto`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Contacto — ${siteConfig.name}`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0D1117] pt-24" id="contacto-page">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
