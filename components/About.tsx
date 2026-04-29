'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Rocket, Calendar, MapPin, Briefcase, Layers3 } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Código sólido',
    description: 'Arquitecturas claras, mantenibles y listas para crecer'
  },
  {
    icon: Lightbulb,
    title: 'Pensamiento de producto',
    description: 'Decisiones orientadas a utilidad, claridad y experiencia'
  },
  {
    icon: Users,
    title: 'Trabajo colaborativo',
    description: 'Comunicación directa, orden y foco en el objetivo'
  },
  {
    icon: Rocket,
    title: 'Entrega con criterio',
    description: 'Velocidad sin perder consistencia ni calidad técnica'
  }
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-[0.24em]">
            Sobre mí
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
            Desarrollo con enfoque en
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent"> producto, claridad y ejecución</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1.15fr]">
          {/* Left - Summary panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm lg:p-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary-purple/20 bg-primary-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-purple">
                    Perfil profesional
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight text-white lg:text-4xl">
                    Construyo interfaces y sistemas que se sienten modernos, útiles y bien pensados.
                  </h3>
                  <p className="text-base leading-relaxed text-gray-400 lg:text-lg">
                    Mi enfoque combina desarrollo full stack, criterio visual y atención al detalle para crear productos digitales que no solo funcionen, sino que transmitan calidad desde el primer uso.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-primary-purple/15 bg-primary-purple/[0.06] p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-purple/15">
                      <Calendar className="h-5 w-5 text-primary-purple" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Experiencia</p>
                    <p className="mt-2 text-xl font-semibold text-white">2+ años</p>
                  </div>
                  <div className="rounded-2xl border border-primary-blue/15 bg-primary-blue/[0.06] p-5">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/15">
                      <MapPin className="h-5 w-5 text-primary-blue" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Ubicación</p>
                    <p className="mt-2 text-xl font-semibold text-white">Ate, Perú</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Especialidad</p>
                      <p className="text-lg font-semibold text-white">Full Stack Development</p>
                      <p className="text-sm leading-relaxed text-gray-400">
                        Desarrollo frontend y backend con foco en rendimiento, legibilidad y escalabilidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Estudio <span className="font-semibold text-primary-purple">Diseño y Desarrollo de Software en TECSUP</span> y complemento esa base con práctica constante en proyectos reales, donde priorizo estructura, rendimiento y una experiencia visual cuidada.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
                Trabajo con un enfoque <span className="font-semibold text-primary-blue">full stack</span> y me siento cómodo construyendo desde interfaces en <span className="font-semibold text-white">React y Next.js</span> hasta lógica de negocio y APIs con <span className="font-semibold text-white">Django y Laravel</span>.
              </p>
            </div>

            {/* Key strengths */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/12">
                  <Layers3 className="h-5 w-5 text-primary-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Lo que aporto a un proyecto</h3>
                  <p className="text-sm text-gray-500">Más allá de programar, me importa construir bien.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-purple/15 text-primary-purple">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Capacidad para pasar de una idea a una solución funcional con buena base técnica.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-blue/15 text-primary-blue">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Código más ordenado, mantenible y fácil de escalar cuando el producto crece.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-purple/15 text-primary-purple">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Comunicación clara para colaborar mejor con equipos, clientes o líderes técnicos.</p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid gap-4 pt-1 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-purple/25"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] transition-colors duration-300 group-hover:bg-primary-purple/10">
                      <Icon className="h-5 w-5 text-primary-purple transition-transform group-hover:scale-110" />
                    </div>
                    <h4 className="mb-2 text-sm font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
