'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Rocket, Calendar, MapPin } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Código limpio, mantenible y escalable'
  },
  {
    icon: Lightbulb,
    title: 'Soluciones creativas',
    description: 'Enfoque innovador para cada problema'
  },
  {
    icon: Users,
    title: 'Trabajo en equipo',
    description: 'Comunicación efectiva y colaboración'
  },
  {
    icon: Rocket,
    title: 'Resultados rápidos',
    description: 'Entregas eficientes y de calidad'
  }
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">
            Sobre mí
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Convirtiendo ideas en{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              soluciones digitales
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-purple/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Experiencia</p>
                    <p className="font-semibold">2+ años</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="font-semibold">Ate, Perú</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-purple/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Enfoque</p>
                    <p className="font-semibold">Full Stack Development</p>
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
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy estudiante de <span className="text-primary-purple font-semibold">Diseño y Desarrollo de Software</span> en TECSUP, 
              actualmente en el 5º ciclo. Mi pasión es crear aplicaciones web y móviles eficientes, escalables 
              y centradas en el usuario.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tengo experiencia desarrollando con tecnologías modernas como <span className="text-primary-blue font-semibold">React</span>, 
              <span className="text-primary-blue font-semibold"> Next.js</span>, <span className="text-primary-purple font-semibold">Django</span> y 
              <span className="text-primary-purple font-semibold"> Laravel</span>. Me encanta aprender nuevas herramientas y aplicarlas 
              para resolver problemas reales.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-4 rounded-lg bg-dark-card border border-dark-border hover:border-primary-purple/50 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-primary-purple mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.description}</p>
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
