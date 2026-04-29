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
    <section id="contacto" className="py-20 px-6 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-blue font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Hablemos de tu{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estoy disponible para trabajar en nuevos proyectos y colaboraciones. ¡No dudes en contactarme!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rafael.chuco1908@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:border-primary-purple/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-purple/20 flex items-center justify-center group-hover:bg-primary-purple/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">rafael.chuco1908@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+51927395280"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:border-primary-blue/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center group-hover:bg-primary-blue/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="font-semibold">+51 927 395 280</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary-purple/20 flex items-center justify-center">
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
            <div className="glass rounded-xl p-6">
              <h4 className="font-bold mb-3">💼 Disponibilidad</h4>
              <p className="text-gray-400 text-sm mb-4">
                Actualmente disponible para proyectos freelance y oportunidades laborales a tiempo completo.
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
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border focus:border-primary-purple focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border focus:border-primary-purple focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border focus:border-primary-purple focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Enviar mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
