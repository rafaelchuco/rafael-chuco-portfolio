'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'RestaFest',
    description: 'Plataforma de delivery para gestionar pedidos, restaurantes y repartidores con un flujo claro para operación diaria.',
    impact: 'Pedidos y operación en tiempo real',
    tags: ['Oracle DB', 'Figma', 'API REST'],
    image: '/projects/restafest.jpg',
    github: 'https://github.com/rafaelchuco/restafest',
    demo: '#',
    color: 'purple'
  },
  {
    title: 'AnimaPets',
    description: 'Sistema veterinario para administrar clientes, mascotas, citas y tratamientos desde una interfaz práctica y ordenada.',
    impact: 'Control integral para atención clínica',
    tags: ['Laravel', 'Vue.js', 'API REST', 'MySQL'],
    image: '/projects/animapets.jpg',
    github: 'https://github.com/rafaelchuco/animapets',
    demo: '#',
    color: 'blue'
  },
  {
    title: 'Sistema de Inventario',
    description: 'Aplicación web para controlar stock, detectar faltantes y simplificar la gestión operativa con reportes claros.',
    impact: 'Menos fricción en control y seguimiento',
    tags: ['React', 'Django', 'PostgreSQL', 'Charts'],
    image: '/projects/taskflow.jpg',
    github: 'https://github.com/rafaelchuco',
    demo: '#',
    color: 'purple'
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-blue font-semibold text-sm uppercase tracking-[0.22em]">
            Proyectos Destacados
          </span>
          <h2 className="mt-4 mb-6 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
            Productos y sistemas{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              construidos para resolver
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            Cada proyecto muestra cómo abordo problemas reales con foco en estructura, claridad visual y una ejecución técnica sólida.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] transition-all duration-300 hover:border-primary-purple/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
            >
              {/* Project image */}
              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-[#141922] to-[#0f141b]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_40%)]"></div>
                
                {/* Project icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`flex h-24 w-24 items-center justify-center rounded-[26px] ${
                    project.color === 'purple' 
                      ? 'bg-gradient-to-br from-primary-purple/30 to-primary-blue/30' 
                      : 'bg-gradient-to-br from-primary-blue/30 to-primary-purple/30'
                  } border border-white/10 backdrop-blur-sm`}>
                    <span className="text-5xl">💼</span>
                  </div>
                </div>

                {/* Impact badge */}
                <div className="absolute top-4 right-4">
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs font-medium text-white/90">{project.impact}</span>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-sm text-gray-300">Ver proyecto</div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="space-y-5 p-7">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white transition-colors group-hover:text-primary-purple">
                    {project.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Qué resuelve</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">
                  {project.title}
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
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
            href="https://github.com/rafaelchuco"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 text-gray-300 transition-all duration-300 hover:border-primary-purple/30 hover:text-white"
          >
            Ver todos los proyectos
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
