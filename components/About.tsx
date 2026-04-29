'use client';

import { motion, useInView, animate } from 'framer-motion';
import { Code2, Lightbulb, Users, Rocket, Calendar, MapPin, Layers3, Sparkles, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const features = [
  { icon: Code2, title: 'Código sólido', description: 'Arquitecturas claras, mantenibles y escalables', iconColor: 'text-primary-purple', glow: 'bg-primary-purple' },
  { icon: Lightbulb, title: 'Producto', description: 'Decisiones orientadas a utilidad y experiencia', iconColor: 'text-primary-blue', glow: 'bg-primary-blue' },
  { icon: Users, title: 'Colaboración', description: 'Comunicación directa y foco en el objetivo', iconColor: 'text-violet-400', glow: 'bg-violet-500' },
  { icon: Rocket, title: 'Entrega', description: 'Velocidad sin perder calidad técnica', iconColor: 'text-cyan-400', glow: 'bg-cyan-500' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-purple/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-blue/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-purple/25 bg-gradient-to-r from-primary-purple/15 to-primary-blue/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-purple mb-6 shadow-[0_0_20px_rgba(124,58,237,0.1)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Sobre mí
          </motion.span>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl leading-tight">
            Desarrollo con enfoque en{' '}
            <span className="bg-gradient-to-r from-primary-purple via-violet-400 to-primary-blue bg-clip-text text-transparent">
              producto, claridad y ejecución
            </span>
          </h2>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.25fr]">

          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm overflow-hidden"
          >
            <motion.div
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-16 -right-16 w-52 h-52 bg-primary-purple/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-purple/20 bg-primary-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-purple">
                Perfil profesional
              </div>
              <h3 className="text-2xl font-semibold leading-snug text-white">
                Construyo productos digitales modernos, útiles y bien pensados.
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Mi enfoque combina desarrollo full stack, criterio visual y atención al detalle para crear soluciones que transmitan calidad desde el primer uso.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-primary-purple/15 bg-primary-purple/[0.06] p-4"
                >
                  <Calendar className="h-4 w-4 text-primary-purple mb-2" />
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">Experiencia</p>
                  <p className="mt-1 text-xl font-bold text-white"><Counter target={2} suffix="+ años" /></p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-primary-blue/15 bg-primary-blue/[0.06] p-4"
                >
                  <MapPin className="h-4 w-4 text-primary-blue mb-2" />
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">Ubicación</p>
                  <p className="mt-1 text-xl font-bold text-white">Lima, Perú</p>
                </motion.div>
              </div>

              {/* Speciality chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex items-center gap-3 rounded-2xl border border-violet-500/15 bg-gradient-to-r from-primary-purple/[0.09] to-primary-blue/[0.06] px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-purple/15">
                  <svg className="h-4 w-4 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Full Stack Development</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Frontend · Backend · SAP</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content */}
          <div className="space-y-6">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-blue/10">
                  <Layers3 className="h-4 w-4 text-primary-blue" />
                </div>
                <h3 className="text-base font-semibold text-white">Lo que aporto</h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  { text: 'Pasar de una idea a una solución funcional con buena base técnica.', color: 'bg-primary-purple/15 text-primary-purple' },
                  { text: 'Código ordenado, mantenible y fácil de escalar cuando el producto crece.', color: 'bg-primary-blue/15 text-primary-blue' },
                  { text: 'Comunicación clara para colaborar con equipos o líderes técnicos.', color: 'bg-violet-500/15 text-violet-400' },
                ].map((s, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.12, type: 'spring', stiffness: 300 }}
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${s.color}`}
                    >
                      ✓
                    </motion.div>
                    <p className="text-sm text-gray-300 leading-relaxed">{s.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20 overflow-hidden"
                  >
                    <motion.div
                      className={`absolute -bottom-4 -right-4 w-16 h-16 ${f.glow}/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <Icon className={`h-5 w-5 ${f.iconColor} mb-3`} />
                    <h4 className="text-sm font-semibold text-white mb-1">{f.title}</h4>
                    <p className="text-xs leading-relaxed text-gray-500">{f.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ── Education row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-gray-600 mb-4">Formación</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* TECSUP */}
            <motion.a
              href="https://www.tecsup.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative flex items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] px-6 py-5 overflow-hidden transition-all duration-300 hover:border-primary-purple/30"
            >
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary-purple/[0.06] to-transparent pointer-events-none"
              />
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-2.5">
                <Image src="/images/tecsup-logo.jpg" alt="TECSUP" width={52} height={52} className="object-contain rounded-lg" />
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary-purple font-semibold mb-1">Educación</p>
                <p className="text-base font-semibold text-white leading-tight">Diseño y Desarrollo de Software</p>
                <p className="text-xs text-gray-500 mt-0.5">TECSUP · Lima, Perú</p>
              </div>
              <ExternalLink className="relative z-10 h-4 w-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.a>

            {/* Conversa */}
            <motion.a
              href="https://conversa.tecsup.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative flex items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] px-6 py-5 overflow-hidden transition-all duration-300 hover:border-primary-blue/30"
            >
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-blue/[0.06] to-transparent pointer-events-none"
              />
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-2.5">
                <Image src="/images/conversa-logo.svg" alt="Conversa" width={52} height={52} className="object-contain" />
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary-blue font-semibold mb-1">Inglés</p>
                <p className="text-base font-semibold text-white leading-tight">Conversa Language School</p>
                <p className="text-xs text-gray-500 mt-0.5">TECSUP · Lima, Perú</p>
              </div>
              <ExternalLink className="relative z-10 h-4 w-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
