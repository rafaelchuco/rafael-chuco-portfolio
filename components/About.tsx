'use client';

import { motion, useInView, animate } from 'framer-motion';
import { Code2, Lightbulb, Users, Rocket, Calendar, MapPin, Layers3, GraduationCap, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

/* Animated number counter */
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
  { icon: Code2, title: 'Código sólido', description: 'Arquitecturas claras, mantenibles y listas para crecer', color: 'from-primary-purple/20 to-primary-purple/5', iconColor: 'text-primary-purple', border: 'hover:border-primary-purple/30' },
  { icon: Lightbulb, title: 'Pensamiento de producto', description: 'Decisiones orientadas a utilidad, claridad y experiencia', color: 'from-primary-blue/20 to-primary-blue/5', iconColor: 'text-primary-blue', border: 'hover:border-primary-blue/30' },
  { icon: Users, title: 'Trabajo colaborativo', description: 'Comunicación directa, orden y foco en el objetivo', color: 'from-violet-500/20 to-violet-500/5', iconColor: 'text-violet-400', border: 'hover:border-violet-400/30' },
  { icon: Rocket, title: 'Entrega con criterio', description: 'Velocidad sin perder consistencia ni calidad técnica', color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-400', border: 'hover:border-cyan-400/30' },
];

const strengths = [
  { text: 'Capacidad para pasar de una idea a una solución funcional con buena base técnica.', color: 'bg-primary-purple/15 text-primary-purple' },
  { text: 'Código ordenado, mantenible y fácil de escalar cuando el producto crece.', color: 'bg-primary-blue/15 text-primary-blue' },
  { text: 'Comunicación clara para colaborar con equipos, clientes o líderes técnicos.', color: 'bg-violet-500/15 text-violet-400' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary-purple/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-blue/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-purple/20 bg-primary-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-purple mb-6"
          >
            <Sparkles className="h-3 w-3" />
            Sobre mí
          </motion.span>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl leading-tight">
            Desarrollo con enfoque en
            <br />
            <span className="bg-gradient-to-r from-primary-purple via-violet-400 to-primary-blue bg-clip-text text-transparent">
              producto, claridad y ejecución
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1.15fr]">
          {/* Left - Summary panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm lg:p-10 overflow-hidden">
              {/* Animated glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-16 -right-16 w-48 h-48 bg-primary-purple/15 rounded-full blur-3xl pointer-events-none"
              />

              <div className="relative space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary-purple/20 bg-primary-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-purple">
                    Perfil profesional
                  </div>
                  <h3 className="text-2xl font-semibold leading-snug text-white lg:text-3xl">
                    Construyo interfaces y sistemas que se sienten modernos, útiles y bien pensados.
                  </h3>
                  <p className="text-base leading-relaxed text-gray-400">
                    Mi enfoque combina desarrollo full stack, criterio visual y atención al detalle para crear productos digitales que transmitan calidad desde el primer uso.
                  </p>
                </div>

                {/* Stat cards with counter */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                    className="rounded-2xl border border-primary-purple/15 bg-primary-purple/[0.06] p-5 transition-colors duration-300"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-purple/15">
                      <Calendar className="h-5 w-5 text-primary-purple" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Experiencia</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      <Counter target={2} suffix="+ años" />
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.32, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                    className="rounded-2xl border border-primary-blue/15 bg-primary-blue/[0.06] p-5 transition-colors duration-300"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/15">
                      <MapPin className="h-5 w-5 text-primary-blue" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Ubicación</p>
                    <p className="mt-2 text-xl font-semibold text-white">Ate, Perú</p>
                  </motion.div>
                </div>

                {/* Education block */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5"
                    >
                      <GraduationCap className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Educación</p>
                      <p className="text-base font-semibold text-white">Diseño y Desarrollo de Software</p>
                      <p className="text-sm text-gray-500">TECSUP · Lima, Perú</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text content */}
          <div className="space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-5"
            >
              <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Estudio{' '}
                <span className="font-semibold text-primary-purple">Diseño y Desarrollo de Software en TECSUP</span>{' '}
                y complemento esa base con práctica constante en proyectos reales, donde priorizo estructura, rendimiento y experiencia visual cuidada.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Trabajo con un enfoque{' '}
                <span className="font-semibold text-primary-blue">full stack</span>{' '}
                y construyo desde interfaces en{' '}
                <span className="font-semibold text-white">React y Next.js</span>{' '}
                hasta lógica de negocio con{' '}
                <span className="font-semibold text-white">Django y Laravel</span>. También integro soluciones{' '}
                <span className="font-semibold text-violet-400">SAP (BTP, ABAP, Fiori)</span>{' '}
                en entornos empresariales.
              </motion.p>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/12"
                >
                  <Layers3 className="h-5 w-5 text-primary-blue" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Lo que aporto a un proyecto</h3>
                  <p className="text-sm text-gray-500">Más allá de programar, me importa construir bien.</p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {strengths.map((s, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.15, type: 'spring', stiffness: 300 }}
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${s.color}`}
                    >
                      <span className="text-xs font-bold">✓</span>
                    </motion.div>
                    <p className="text-gray-300 leading-relaxed">{s.text}</p>
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
              className="grid gap-4 sm:grid-cols-2"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${feature.color} p-5 transition-all duration-300 ${feature.border} cursor-default`}
                  >
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-black/20"
                    >
                      <Icon className={`h-5 w-5 ${feature.iconColor}`} />
                    </motion.div>
                    <h4 className="mb-2 text-sm font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
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
