'use client';

import { motion, useInView, animate } from 'framer-motion';
import { Code2, Lightbulb, Users, Rocket, Calendar, MapPin, Layers3 } from 'lucide-react';
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
  { icon: Code2, title: 'Código sólido', description: 'Arquitecturas claras, mantenibles y listas para crecer', iconColor: 'text-primary-purple' },
  { icon: Lightbulb, title: 'Pensamiento de producto', description: 'Decisiones orientadas a utilidad, claridad y experiencia', iconColor: 'text-primary-blue' },
  { icon: Users, title: 'Trabajo colaborativo', description: 'Comunicación directa, orden y foco en el objetivo', iconColor: 'text-violet-400' },
  { icon: Rocket, title: 'Entrega con criterio', description: 'Velocidad sin perder consistencia ni calidad técnica', iconColor: 'text-cyan-400' },
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
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary-purple/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-primary-purple/20 bg-primary-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-purple mb-6">
            Sobre mí
          </span>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl leading-tight">
            Desarrollo con enfoque en{' '}
            <span className="bg-gradient-to-r from-primary-purple via-violet-400 to-primary-blue bg-clip-text text-transparent">
              producto, claridad y ejecución
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm overflow-hidden"
          >
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-12 -right-12 w-40 h-40 bg-primary-purple/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-purple/20 bg-primary-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-purple">
                Perfil profesional
              </div>
              <h3 className="text-2xl font-semibold leading-snug text-white">
                Construyo productos digitales modernos, útiles y bien pensados.
              </h3>
              <p className="text-base leading-relaxed text-gray-400">
                Mi enfoque combina desarrollo full stack, criterio visual y atención al detalle para crear soluciones que transmitan calidad desde el primer uso.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="rounded-2xl border border-primary-purple/15 bg-primary-purple/[0.06] p-4"
                >
                  <Calendar className="h-4 w-4 text-primary-purple mb-2" />
                  <p className="text-xs uppercase tracking-wider text-gray-500">Experiencia</p>
                  <p className="mt-1 text-lg font-semibold text-white"><Counter target={2} suffix="+ años" /></p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="rounded-2xl border border-primary-blue/15 bg-primary-blue/[0.06] p-4"
                >
                  <MapPin className="h-4 w-4 text-primary-blue mb-2" />
                  <p className="text-xs uppercase tracking-wider text-gray-500">Ubicación</p>
                  <p className="mt-1 text-lg font-semibold text-white">Ate, Perú</p>
                </motion.div>
              </div>

              {/* Education cards */}
              <div className="space-y-2 pt-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-3">Formación</p>
                <div className="grid grid-cols-2 gap-3">
                  {/* TECSUP */}
                  <motion.a
                    href="https://www.tecsup.edu.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 text-center overflow-hidden transition-all duration-300 hover:border-primary-purple/30"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary-purple/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-2">
                      <Image src="/images/tecsup-logo.jpg" alt="TECSUP" width={48} height={48} className="object-contain rounded-xl" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs font-semibold text-white leading-tight">TECSUP</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Software</p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-purple/20 rounded-full blur-xl pointer-events-none"
                    />
                  </motion.a>

                  {/* Conversa */}
                  <motion.a
                    href="https://conversa.tecsup.edu.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 text-center overflow-hidden transition-all duration-300 hover:border-primary-blue/30"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary-blue/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-2">
                      <Image src="/images/conversa-logo.svg" alt="Conversa" width={48} height={48} className="object-contain" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs font-semibold text-white leading-tight">Conversa</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Inglés</p>
                    </div>
                    <motion.div
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                      className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-blue/20 rounded-full blur-xl pointer-events-none"
                    />
                  </motion.a>
                </div>

                {/* Speciality chip */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-2xl border border-violet-500/15 bg-gradient-to-r from-primary-purple/[0.08] to-primary-blue/[0.05] px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-purple/15">
                    <svg className="h-4 w-4 text-primary-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Full Stack Development</p>
                    <p className="text-[10px] text-gray-500">Frontend · Backend · SAP</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <div className="space-y-8">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <Layers3 className="h-5 w-5 text-primary-blue" />
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
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/20"
                  >
                    <Icon className={`h-5 w-5 ${f.iconColor} mb-3`} />
                    <h4 className="text-sm font-semibold text-white mb-1">{f.title}</h4>
                    <p className="text-xs leading-relaxed text-gray-500">{f.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
