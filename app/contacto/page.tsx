import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.name}`,
  description:
    "Ponte en contacto con Rafael Chuco para proyectos freelance, colaboraciones o nuevas oportunidades profesionales.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: `Contacto | ${siteConfig.name}`,
    description:
      "Conversemos sobre tu proyecto, colaboración o próxima oportunidad profesional.",
    url: `${siteConfig.siteUrl}/contacto`,
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
