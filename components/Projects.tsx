'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'RestaFest',
    description: 'Sistema de delivery de comida con gestión completa de usuarios, restaurantes y repartidores. Incluye seguimiento de pedidos en tiempo real.',
    tags: ['Oracle DB', 'Figma', 'API REST', 'Gestión de pedidos'],
    image: '/projects/restafest.jpg',
    github: '#',
    demo: '#',
    color: 'purple'
  },
  {
    title: 'AnimaPets',
    description: 'Sistema veterinario integral con gestión de clientes, mascotas, citas y tratamientos. Backend en Laravel y frontend en Vue.js.',
    tags: ['Laravel', 'Vue.js', 'API REST', 'MySQL'],
    image: '/projects/animapets.jpg',
    github: '#',
    demo: '#',
    color: 'blue'
  },
  {
    title: 'TaskFlow',
    description: 'Aplicación de gestión de tareas con kanban, equipos y notificaciones en tiempo real. Aumenta la productividad del equipo.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    image: '/projects/taskflow.jpg',
    github: '#',
    demo: '#',
    color: 'purple'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-blue font-semibold text-sm uppercase tracking-wider">
            Proyectos Destacados
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Algunos proyectos{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              recientes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones reales que generan impacto. Cada proyecto está construido con las mejores prácticas y tecnologías modernas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group"
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">💼</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.color === 'purple'
                          ? 'bg-primary-purple/10 text-primary-purple border border-primary-purple/30'
                          : 'bg-primary-blue/10 text-primary-blue border border-primary-blue/30'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-primary-purple text-gray-300 hover:text-white transition-all duration-300 group"
          >
            Ver todos los proyectos
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
