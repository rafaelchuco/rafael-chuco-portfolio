'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend', color: 'text-cyan-400' },
  { name: 'Next.js', icon: '▲', category: 'Frontend', color: 'text-white' },
  { name: 'TypeScript', icon: '📘', category: 'Language', color: 'text-blue-400' },
  { name: 'Python', icon: '🐍', category: 'Backend', color: 'text-yellow-400' },
  { name: 'Django', icon: '🎸', category: 'Backend', color: 'text-green-500' },
  { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'text-green-400' },
  { name: 'Laravel', icon: '🔺', category: 'Backend', color: 'text-red-400' },
  { name: 'Vue.js', icon: '💚', category: 'Frontend', color: 'text-emerald-400' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', color: 'text-cyan-300' },
  { name: 'MySQL', icon: '🐬', category: 'Database', color: 'text-blue-300' },
  { name: 'MongoDB', icon: '🍃', category: 'Database', color: 'text-green-400' },
  { name: 'Git', icon: '🔀', category: 'Tools', color: 'text-orange-400' },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-wider">
            Mis habilidades
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tecnologías con las que{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              trabajo
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass rounded-xl p-6 text-center group hover:border-primary-purple/50 transition-all duration-300"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className={`font-bold text-lg mb-1 ${tech.color}`}>
                {tech.name}
              </h3>
              <p className="text-xs text-gray-500">{tech.category}</p>
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
          <p className="text-gray-400 text-lg">
            Siempre aprendiendo y explorando nuevas tecnologías para crear mejores soluciones 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
