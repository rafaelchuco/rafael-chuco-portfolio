'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPython, 
  SiDjango, 
  SiLaravel, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiGit 
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, category: 'Frontend', color: '#61DAFB', level: 85 },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend', color: '#FFFFFF', level: 80 },
  { name: 'TypeScript', icon: SiTypescript, category: 'Language', color: '#3178C6', level: 75 },
  { name: 'Python', icon: SiPython, category: 'Backend', color: '#3776AB', level: 90 },
  { name: 'Django', icon: SiDjango, category: 'Backend', color: '#092E20', level: 85 },
  { name: 'Laravel', icon: SiLaravel, category: 'Backend', color: '#FF2D20', level: 80 },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'Frontend', color: '#4FC08D', level: 75 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Styling', color: '#06B6D4', level: 90 },
  { name: 'MySQL', icon: SiMysql, category: 'Database', color: '#4479A1', level: 85 },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', color: '#4169E1', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', color: '#47A248', level: 75 },
  { name: 'Git', icon: SiGit, category: 'Tools', color: '#F05032', level: 90 },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-purple font-semibold text-sm uppercase tracking-[0.22em]">
            Mis habilidades
          </span>
          <h2 className="mt-4 mb-6 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
            Tecnologías con las que{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              construyo
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 text-left transition-all duration-300 hover:border-primary-purple/20"
            >
              {/* Progress bar background */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                  className={`h-full bg-gradient-to-r from-primary-purple to-primary-blue`}
                />
              </div>

              <div className="mb-5 flex justify-start transition-transform duration-300 group-hover:scale-110">
                <tech.icon className="w-12 h-12" style={{ color: tech.color }} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">
                {tech.name}
              </h3>
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-gray-500">{tech.category}</p>
              <div className="text-xs font-mono text-gray-400">Nivel {tech.level}%</div>
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
          <p className="text-lg text-gray-400">
            Stack moderno para construir productos rápidos, mantenibles y listos para escalar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
