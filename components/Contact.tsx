'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="bg-dark-card/30 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-blue font-semibold text-sm uppercase tracking-[0.22em]">
            Contacto
          </span>
          <h2 className="mt-4 mb-6 text-4xl font-semibold tracking-[-0.04em] text-white lg:text-6xl">
            Hablemos de tu{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            Si buscas a alguien que pueda diseñar, desarrollar y ejecutar con criterio, conversemos. Estoy abierto a freelance y oportunidades profesionales.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-3xl font-semibold tracking-[-0.03em] text-white">Información de contacto</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rafael.chuco1908@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-primary-purple/25 hover:bg-primary-purple/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-purple/15 transition-colors group-hover:bg-primary-purple/20">
                    <Mail className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">rafael.chuco1908@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+51927395280"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-primary-blue/25 hover:bg-primary-blue/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/15 transition-colors group-hover:bg-primary-blue/20">
                    <Phone className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="font-semibold">+51 927 395 280</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-purple/15">
                    <MapPin className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="font-semibold">Ate, Lima - Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-primary-purple/[0.08] to-primary-blue/[0.06] p-7">
              <h4 className="mb-3 text-lg font-semibold text-white">Disponibilidad</h4>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                Disponible para proyectos freelance, colaboraciones y oportunidades donde pueda aportar criterio técnico y ejecución visual.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-green-400">Disponible ahora</span>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#121821] px-4 py-3 transition-colors focus:border-primary-purple focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#121821] px-4 py-3 transition-colors focus:border-primary-purple focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#121821] px-4 py-3 transition-colors focus:border-primary-purple focus:outline-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-purple to-primary-blue px-6 py-4 font-semibold text-white shadow-[0_18px_48px_rgba(124,58,237,0.24)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_22px_56px_rgba(124,58,237,0.30)]"
              >
                Enviar mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-4 text-center text-sm text-gray-400">
                Respondo en menos de 24 horas ⚡
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
