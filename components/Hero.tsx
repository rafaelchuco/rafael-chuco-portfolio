'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary-purple/10 border border-primary-purple/30 text-primary-purple text-sm font-medium">
              Desarrollador Full Stack
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">
                Rafael Chuco
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
          >
            Desarrollador Full Stack enfocado en crear soluciones digitales{' '}
            <span className="text-primary-purple font-semibold">modernas</span>,{' '}
            <span className="text-primary-blue font-semibold">escalables</span> y
            centradas en resultados.
          </motion.p>

          {/* Highlight text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-400 italic"
          >
            ✨ Transformo ideas en productos reales
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#proyectos"
              className="group px-8 py-4 bg-gradient-to-r from-primary-purple to-primary-blue rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
            >
              Ver proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border-2 border-gray-600 hover:border-primary-purple rounded-lg font-semibold text-white hover:bg-primary-purple/10 transition-all duration-300"
            >
              Contáctame
            </a>
            <a
              href="/cv-rafael-chuco.pdf"
              download
              className="px-6 py-4 border border-gray-700 hover:border-gray-500 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/rafael-chuco"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-card hover:bg-gray-700 border border-dark-border hover:border-primary-purple transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-chuco/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-card hover:bg-gray-700 border border-dark-border hover:border-primary-blue transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rafael.chuco1908@gmail.com"
              className="p-3 rounded-lg bg-dark-card hover:bg-gray-700 border border-dark-border hover:border-primary-purple transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Image & Dragon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main profile image container */}
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-blue opacity-30 blur-3xl rounded-full"></div>
            
            {/* Profile image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-600">RC</span>
              </div>
            </div>

            {/* Floating tech dragon - subtle and small */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -right-8 w-32 h-32 opacity-80"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-purple to-primary-blue opacity-20 blur-xl absolute"></div>
              <div className="relative z-10 text-6xl">🐉</div>
            </motion.div>

            {/* Code decoration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-8 -right-8 bg-dark-card border border-dark-border rounded-lg p-4 glass hidden lg:block"
            >
              <code className="text-primary-purple text-sm">
                {'</>'}
              </code>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-primary-purple rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
