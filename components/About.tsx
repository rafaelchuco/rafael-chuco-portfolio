'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Code2, Sparkles, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const strengths = [
  { text: 'Convertir ideas en productos funcionales con buena base técnica y código limpio.', color: 'bg-primary-purple/15 text-primary-purple' },
  { text: 'Construir interfaces rápidas, accesibles y fáciles de mantener.', color: 'bg-primary-blue/15 text-primary-blue' },
  { text: 'Colaborar con equipos de forma clara y directa, orientado al resultado.', color: 'bg-violet-500/15 text-violet-400' },
];

const education = [
  {
    href: 'https://www.tecsup.edu.pe/',
    logo: '/images/tecsup-logo.jpg',
    alt: 'TECSUP',
    label: 'Educación',
    labelColor: 'text-primary-purple',
    title: 'Diseño y Desarrollo de Software',
    sub: 'TECSUP · Lima, Perú',
    glow: 'bg-primary-purple',
    border: 'hover:border-primary-purple/30',
    delay: 0.1,
  },
  {
    href: 'https://conversa.tecsup.edu.pe/',
    logo: '/images/conversa-logo.svg',
    alt: 'Conversa',
    label: 'Inglés',
    labelColor: 'text-primary-blue',
    title: 'Conversa Language School',
    sub: 'TECSUP · Lima, Perú',
    glow: 'bg-primary-blue',
    border: 'hover:border-primary-blue/30',
    delay: 0.22,
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-purple/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-blue/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-purple/25 bg-gradient-to-r from-primary-purple/15 to-primary-blue/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-purple mb-6 shadow-[0_0_24px_rgba(124,58,237,0.12)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Sobre mí
          </motion.span>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl leading-tight">
            Desarrollo con enfoque en{' '}
            <span className="bg-gradient-to-r from-primary-purple via-violet-400 to-primary-blue bg-clip-text text-transparent">
              producto, claridad y ejecución
            </span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr]">

          {/* Left — Bio + strengths */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative space-y-10"
          >
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold leading-snug text-white lg:text-3xl">
                Especializado en convertir ideas en productos web modernos, con código limpio y foco en experiencia.
              </h3>
              <p className="text-base leading-relaxed text-gray-400">
                Estudio <span className="text-white font-medium">Diseño y Desarrollo de Software en TECSUP</span> y combino esa base con práctica constante — desde interfaces en <span className="text-white font-medium">React y Next.js</span> hasta APIs con <span className="text-white font-medium">Django</span> y soluciones <span className="text-violet-400 font-medium">SAP empresariales</span>.
              </p>
            </div>

            {/* Strengths — sin panel wrapper */}
            <div className="space-y-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 320 }}
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${s.color}`}
                  >
                    ✓
                  </motion.div>
                  <p className="text-gray-300 leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Education cards + laptop behind */}
          <div className="relative space-y-4">
            {/* Laptop flotando — detrás de las cards (z-0) */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
              className="absolute -right-20 top-4 w-[260px] pointer-events-none z-0"
            >
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="drop-shadow-[0_20px_60px_rgba(124,58,237,0.35)] opacity-50"
              >
                <Image
                  src="/images/laptop.png"
                  alt=""
                  width={260}
                  height={190}
                  className="w-full object-contain"
                />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-36 h-6 bg-primary-purple/30 rounded-full blur-2xl"
              />
            </motion.div>

            {/* Education cards — encima del laptop (z-10) */}
            {education.map((ed) => (
              <motion.a
                key={ed.href}
                href={ed.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: ed.delay, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className={`relative z-10 group flex items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-7 py-6 overflow-hidden transition-all duration-300 ${ed.border} block`}
              >
                {/* Animated background shimmer */}
                <motion.div
                  animate={{ opacity: [0.15, 0.35, 0.15], x: ['-100%', '100%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: ed.delay * 2 }}
                  className={`absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-${ed.glow}/[0.06] to-transparent pointer-events-none`}
                />
                {/* Logo */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: ed.delay }}
                  className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_12px_48px_rgba(0,0,0,0.3)] p-3"
                >
                  <Image
                    src={ed.logo}
                    alt={ed.alt}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </motion.div>
                {/* Text */}
                <div className="relative z-10 flex-1 min-w-0">
                  <p className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${ed.labelColor} mb-1`}>{ed.label}</p>
                  <p className="text-base font-semibold text-white leading-tight">{ed.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{ed.sub}</p>
                </div>
                <ExternalLink className="relative z-10 h-4 w-4 text-gray-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] py-5 px-8"
        >
          <div className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 text-primary-purple" />
            <span className="text-sm text-gray-400">2+ años de experiencia</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-primary-blue" />
            <span className="text-sm text-gray-400">Lima, Perú</span>
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <Code2 className="h-4 w-4 text-violet-400" />
            <span className="text-sm text-gray-400">Full Stack · SAP</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
