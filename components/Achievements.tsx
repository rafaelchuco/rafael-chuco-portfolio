import { Users, Code2, Award } from 'lucide-react';
const achievements = [
  { title: 'Presidente de LEAD TECSUP', text: 'Liderazgo de comunidad estudiantil y coordinación de actividades académicas y tecnológicas.', icon: Award, href: '/#experiencias', label: 'Ver voluntariado' },
  { title: 'IEEE Computer Society TECSUP', text: 'Dirección de RR.HH. y participación en una comunidad tecnológica orientada al desarrollo profesional.', icon: Users, href: '/#experiencias', label: 'Ver participación' },
  { title: 'Proyectos de automatización SAP', text: 'Desarrollo de soluciones aplicadas a pruebas y procesos empresariales, con generación automatizada de evidencias.', icon: Code2, href: '/projects/automation-manager', label: 'Conocer el proyecto' },
];
export default function Achievements() {
  return <section id="logros" className="px-6 py-24 bg-dark-card/30"><div className="mx-auto max-w-7xl">
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-purple">Logros y reconocimientos</p>
    <h2 className="mt-4 mb-10 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">Más allá del <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">código</span></h2>
    <div className="grid gap-6 md:grid-cols-3">{achievements.map(({title,text,icon: Icon,href,label}) => <article key={title} className="flex flex-col rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7"><Icon className="mb-6 h-8 w-8 text-violet-400" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold text-white">{title}</h3><p className="mb-6 text-sm leading-relaxed text-gray-400">{text}</p><a href={href} className="mt-auto text-sm font-medium text-violet-300 hover:underline">{label} →</a></article>)}</div>
  </div></section>;
}
