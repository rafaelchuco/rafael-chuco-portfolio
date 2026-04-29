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
              className="glass rounded-xl p-6 text-center group hover:border-primary-purple/50 transition-all duration-300 relative overflow-hidden"
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

              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <tech.icon className="w-12 h-12" style={{ color: tech.color }} />
              </div>
              <h3 className="font-bold text-lg mb-1 text-white">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{tech.category}</p>
              <div className="text-xs text-gray-400 font-mono">{tech.level}%</div>
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
