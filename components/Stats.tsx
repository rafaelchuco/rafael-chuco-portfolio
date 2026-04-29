'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '2+',
    label: 'Años de experiencia',
    color: 'purple'
  },
  {
    icon: Target,
    value: '15+',
    label: 'Proyectos completados',
    color: 'blue'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Clientes satisfechos',
    color: 'purple'
  },
  {
    icon: MapPin,
    value: '100%',
    label: 'Compromiso',
    color: 'blue'
  }
];

export default function Stats() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 text-center group hover:border-primary-purple/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${
                  stat.color === 'purple' 
                    ? 'bg-primary-purple/20 group-hover:bg-primary-purple/30' 
                    : 'bg-primary-blue/20 group-hover:bg-primary-blue/30'
                } flex items-center justify-center transition-all duration-300`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'purple' ? 'text-primary-purple' : 'text-primary-blue'
                  }`} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
