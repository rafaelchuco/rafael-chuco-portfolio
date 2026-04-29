'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiDjango, 
  SiLaravel, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiGit,
  SiGithubcopilot
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, category: 'Frontend', color: '#61DAFB', level: 85 },
  { name: 'React Native', icon: SiReact, category: 'Mobile', color: '#61DAFB', level: 80 },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#FFFFFF', level: 80 },
  { name: 'TypeScript', icon: SiTypescript, category: 'Language', color: '#3178C6', level: 75 },
  { name: 'Python', icon: SiPython, category: 'Backend', color: '#3776AB', level: 90 },
  { name: 'Django', icon: SiDjango, category: 'Backend', color: '#092E20', level: 85 },
  { name: 'Laravel', icon: SiLaravel, category: 'Backend', color: '#FF2D20', level: 80 },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'Frontend', color: '#4FC08D', level: 75 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Styling', color: '#06B6D4', level: 90 },
  { name: 'MySQL', icon: SiMysql, category: 'Database', color: '#4479A1', level: 85 },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: '#4169E1', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47A248', level: 75 },
  { name: 'Git', icon: SiGit, category: 'Tools', color: '#F05032', level: 90 },
  { name: 'GitHub Copilot', icon: SiGithubcopilot, category: 'AI / Tools', color: '#A78BFA', level: 88 },
];

const sapTechnologies = [
  {
    name: 'SAP BTP',
    category: 'Platform',
    desc: 'Business Technology Platform',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="url(#btpGrad)" opacity="0.1"/>
        <path d="M14 32 L24 14 L34 32 Z" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <circle cx="24" cy="24" r="4" fill="#7C3AED"/>
        <defs><linearGradient id="btpGrad" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    name: 'SAP ABAP',
    category: 'Language',
    desc: 'Advanced Business App Programming',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="14" width="32" height="20" rx="4" stroke="#2563EB" strokeWidth="2" fill="none"/>
        <path d="M16 24 L20 20 L16 16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="22" y1="28" x2="32" y2="28" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'SAP Fiori',
    category: 'UX / Design',
    desc: 'Design System & Apps empresariales',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="10" width="12" height="12" rx="3" fill="#7C3AED" opacity="0.9"/>
        <rect x="26" y="10" width="12" height="12" rx="3" fill="#7C3AED" opacity="0.5"/>
        <rect x="10" y="26" width="12" height="12" rx="3" fill="#2563EB" opacity="0.5"/>
        <rect x="26" y="26" width="12" height="12" rx="3" fill="#2563EB" opacity="0.9"/>
      </svg>
    ),
  },
  {
    name: 'SAPUI5',
    category: 'Frontend',
    desc: 'UI Development Toolkit para SAP',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <polygon points="24,8 40,36 8,36" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <line x1="24" y1="18" x2="24" y2="30" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="33" r="2" fill="#7C3AED"/>
      </svg>
    ),
  },
  {
    name: 'SAP HANA',
    category: 'Database',
    desc: 'In-Memory Cloud Database',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="18" rx="14" ry="6" stroke="#2563EB" strokeWidth="2" fill="none"/>
        <path d="M10 18 C10 18 10 30 10 30 C10 33.3 16.3 36 24 36 C31.7 36 38 33.3 38 30 L38 18" stroke="#2563EB" strokeWidth="2" fill="none"/>
        <line x1="10" y1="24" x2="38" y2="24" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Joule AI',
    category: 'AI Copilot',
    desc: 'Copilot de Inteligencia Artificial SAP',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="10" stroke="#7C3AED" strokeWidth="2" fill="none"/>
        <path d="M24 10 L24 6M24 42 L24 38M38 24 L42 24M6 24 L10 24" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="#7C3AED" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: 'SAP Build',
    category: 'Low-Code',
    desc: 'Low-code automation & apps',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="22" width="8" height="16" rx="2" fill="#2563EB" opacity="0.4"/>
        <rect x="20" y="14" width="8" height="24" rx="2" fill="#2563EB" opacity="0.7"/>
        <rect x="30" y="8" width="8" height="30" rx="2" fill="#7C3AED"/>
      </svg>
    ),
  },
  {
    name: 'SAP Connector',
    category: 'Integration',
    desc: 'Automaciones e integraciones SAP',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="12" cy="24" r="6" stroke="#7C3AED" strokeWidth="2" fill="none"/>
        <circle cx="36" cy="24" r="6" stroke="#2563EB" strokeWidth="2" fill="none"/>
        <line x1="18" y1="24" x2="30" y2="24" stroke="url(#connGrad)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 20 L26 24 L22 28" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="connGrad" x1="18" y1="0" x2="30" y2="0"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#2563EB"/></linearGradient></defs>
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-[0.22em]">
            Mis habilidades
          </span>
          <h2 className="mt-4 mb-6 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
            Tecnologías con las que{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              construyo
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 text-left transition-all duration-300 hover:border-primary-purple/20"
            >
              <div className="mb-5 flex justify-start transition-transform duration-300 group-hover:scale-110">
                <tech.icon className="w-12 h-12" style={{ color: tech.color }} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">{tech.name}</h3>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        {/* SAP Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-10"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="flex items-center gap-2.5 rounded-full border border-primary-purple/20 bg-primary-purple/[0.06] px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-purple">
              <span className="h-2 w-2 rounded-full bg-primary-purple shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
              SAP Ecosystem
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <p className="text-center text-sm text-gray-500">Plataformas, lenguajes y herramientas SAP empresariales</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {sapTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-[24px] border border-white/10 bg-gradient-to-br from-primary-purple/[0.06] to-primary-blue/[0.03] p-6 text-left transition-all duration-300 hover:border-primary-purple/25 hover:shadow-[0_16px_40px_rgba(124,58,237,0.08)]"
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">{tech.name}</h3>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary-purple/60">{tech.category}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-400">
            Stack moderno para construir productos rápidos, mantenibles y listos para escalar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
