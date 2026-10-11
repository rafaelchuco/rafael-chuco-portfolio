import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
const communities = [
  { title: 'LEAD TECSUP', role: 'Presidente · Liderazgo estudiantil', image: '/images/LEAD-tecsup.png', text: 'Coordinación de iniciativas académicas, tecnológicas y de integración.' },
  { title: 'IEEE Computer Society TECSUP', role: 'Director de RR.HH. · Comunidad tecnológica', image: '/images/computer.png', text: 'Gestión de talento y colaboración dentro de la comunidad estudiantil.' },
  { title: 'IEEE ComSoc TECSUP', role: 'Voluntario de Alianzas Estratégicas', image: '/images/ComSoc.jpeg', text: 'Relaciones institucionales e intercambio con la comunidad tecnológica.' },
];
export default function Networking() {
  return <section id="networking" className="px-6 py-24 bg-dark-card/30"><div className="mx-auto max-w-7xl">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-purple">Mi red profesional</p><h2 className="mt-4 mb-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">Conectando tecnología, <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">aprendizaje y comunidad</span></h2><p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-400">Participo activamente en comunidades académicas y tecnológicas que me permiten intercambiar conocimientos, colaborar en proyectos y fortalecer mi desarrollo profesional.</p>
    <SocialLinks />
    <div className="mt-10 grid gap-6 md:grid-cols-3">{communities.map((item) => <article key={item.title} className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7"><Image src={item.image} alt={item.title} width={64} height={64} className="mb-5 h-16 w-16 rounded-2xl object-cover" /><h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3><p className="mb-4 text-xs text-violet-300">{item.role}</p><p className="text-sm leading-relaxed text-gray-400">{item.text}</p></article>)}</div>
  </div></section>;
}
