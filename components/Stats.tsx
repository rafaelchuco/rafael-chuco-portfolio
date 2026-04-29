'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '2+',
    label: 'años desarrollando productos',
    color: 'purple'
  },
  {
    icon: Target,
    value: '15+',
    label: 'proyectos construidos',
    color: 'blue'
  },
  {
    icon: Award,
    value: 'Full',
    label: 'stack de punta a punta',
    color: 'purple'
  },
  {
    icon: MapPin,
    value: 'PE',
    label: 'base en Lima, trabajo remoto',
    color: 'blue'
  }
];

export default function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
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
                whileHover={{ y: -6 }}
                className="group rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition-all duration-300 hover:border-primary-purple/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                  stat.color === 'purple' 
                    ? 'bg-primary-purple/12 group-hover:bg-primary-purple/16' 
                    : 'bg-primary-blue/12 group-hover:bg-primary-blue/16'
                } transition-all duration-300`}>
                  <Icon className={`w-6 h-6 ${
                    stat.color === 'purple' ? 'text-primary-purple' : 'text-primary-blue'
                  }`} />
                </div>
                <h3 className="mb-2 text-3xl font-semibold tracking-[-0.03em] text-white lg:text-4xl">
                  {stat.value}
                </h3>
                <p className="max-w-[14rem] text-left text-sm leading-relaxed text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
