'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users2 } from 'lucide-react';
import Image from 'next/image';

type ExperienceItem = {
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
  logoStyle?: 'white' | 'full';
};

const volunteering: ExperienceItem[] = [
  {
    org: 'LEAD TECSUP',
    role: 'Presidente',
    period: 'Diciembre 2025 - Actualidad',
    area: 'Liderazgo estudiantil',
    logo: '/images/LEAD-tecsup.png',
    logoAlt: 'LEAD TECSUP',
    logoText: 'LEAD',
    logoStyle: 'full',
    accent: 'text-primary-purple',
    chip: 'bg-primary-purple/15 text-primary-purple',
  },
  {
    org: 'IEEE ComSoc TECSUP',
    role: 'Voluntario de Alianzas Estratégicas',
    period: 'Marzo 2026 - Actualidad',
    area: 'Relaciones institucionales',
    logo: '/images/ComSoc.jpeg',
    logoAlt: 'IEEE ComSoc TECSUP',
    logoText: 'COMSOC',
    logoStyle: 'full',
    accent: 'text-primary-blue',
    chip: 'bg-primary-blue/15 text-primary-blue',
  },
  {
    org: 'IEEE Computer Society TECSUP',
    role: 'Director de RR.HH.',
    period: 'Agosto 2025 - Actualidad',
    area: 'Gestión de talento',
    logo: '/images/computer.jpg',
    logoAlt: 'IEEE Computer Society TECSUP',
    logoText: 'CS',
    logoStyle: 'full',
    accent: 'text-violet-400',
    chip: 'bg-violet-500/15 text-violet-400',
  },
];

const workExperience: ExperienceItem[] = [
  {
    org: 'NTT DATA Europe & Latam',
    role: 'Consultor SAP ABAP',
    period: 'Marzo 2026 - Actualidad',
    area: 'Lima, Perú · Híbrido',
    details: 'Contrato de prácticas · SAP Fiori y SAPUI5',
    logo: '/images/NTT.png',
    logoAlt: 'NTT DATA',
    logoText: 'NTT',
    logoStyle: 'white',
    accent: 'text-primary-blue',
    chip: 'bg-primary-blue/15 text-primary-blue',
  },
  {
    org: 'Chiru MarketPlace',
    role: 'Desarrollador de aplicaciones para móviles',
    period: 'Diciembre 2025 - Marzo 2026',
    area: 'Lima, Perú · Híbrido',
    details: 'Jornada completa · Apps móviles con React Native',
    logo: '/images/CHIRU.png',
    logoAlt: 'Chiru MarketPlace',
    logoText: 'CHIRU',
    logoStyle: 'white',
    accent: 'text-primary-purple',
    chip: 'bg-primary-purple/15 text-primary-purple',
  },
  {
    org: 'Chiru MarketPlace',
    role: 'Desarrollador Front-end',
    period: 'Abril 2025 - Diciembre 2025',
    area: 'Lima, Perú · Híbrido',
    details: 'Jornada completa · React.js y diseño web adaptable',
    logo: '/images/CHIRU.png',
    logoAlt: 'Chiru MarketPlace',
    logoText: 'CHIRU',
    logoStyle: 'white',
    accent: 'text-violet-400',
    chip: 'bg-violet-500/15 text-violet-400',
  },
];

function ExperienceCard({ item, delay }: { item: ExperienceItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5"
    >
      <div className="mb-4 flex items-start gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-[11px] font-bold tracking-[0.08em] ${
            item.logo
              ? item.logoStyle === 'full'
                ? 'overflow-hidden border-white/20 bg-white/[0.08]'
                : 'border-white/40 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
              : 'border-white/10 bg-white/[0.06] text-gray-200'
          }`}
        >
          {item.logo ? (
            <Image
              src={item.logo}
              alt={item.logoAlt ?? item.org}
              width={56}
              height={56}
              className={item.logoStyle === 'full' ? 'h-full w-full object-cover' : 'h-10 w-10 object-contain'}
            />
          ) : (
            item.logoText
          )}
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${item.accent}`}>{item.org}</p>
          <p className="mt-1 text-base font-semibold leading-tight text-white">{item.role}</p>
          {item.details && <p className="mt-1 text-xs text-gray-400">{item.details}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${item.chip}`}>{item.area}</span>
        <span className="text-xs text-gray-500">{item.period}</span>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experiencias" className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-primary-purple/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary-blue/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">Experiencias</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Trayectoria en experiencia laboral y voluntariados con enfoque en liderazgo, equipos y ejecución.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
                <Briefcase className="h-4 w-4 text-primary-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Experiencia laboral</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {workExperience.map((item, index) => (
                <ExperienceCard key={`${item.org}-${index}`} item={item} delay={0.08 * index} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
                <Users2 className="h-4 w-4 text-primary-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Voluntariados</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {volunteering.map((item, index) => (
                <ExperienceCard key={`${item.org}-${index}`} item={item} delay={0.08 * index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
