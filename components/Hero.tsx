'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Background gradient effects - subtle */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-start group order-2 lg:order-1"
        >
          <div className="relative w-[600px] h-[600px] lg:w-[900px] lg:h-[900px]">
            {/* Image container */}
            <div className="relative w-full h-full">
              <Image
                src="/images/rafael.png"
                alt="Foto de perfil de Rafael Chuco"
                fill
                sizes="(max-width: 1024px) 600px, 900px"
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-500 ease-in-out"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-2"
        >
          <div className="max-w-2xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-primary-purple/20 bg-gradient-to-r from-primary-purple/12 to-primary-blue/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary-blue shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
              Full Stack Developer
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="space-y-5"
            >
              <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Rafael Chuco
              </h1>
              <div className="h-px w-32 bg-gradient-to-r from-primary-purple via-primary-blue to-transparent" />
              <p className="max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
                Desarrollo productos web modernos, claros y escalables que convierten necesidades reales en experiencias digitales bien ejecutadas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="grid gap-3 sm:grid-cols-3"
            >
              <div className="rounded-2xl border border-primary-purple/14 bg-gradient-to-br from-primary-purple/[0.08] to-white/[0.02] px-4 py-4">
                <p className="text-2xl font-semibold text-primary-purple">15+</p>
                <p className="mt-1 text-sm text-gray-400">proyectos entregados</p>
              </div>
              <div className="rounded-2xl border border-primary-blue/14 bg-gradient-to-br from-primary-blue/[0.08] to-white/[0.02] px-4 py-4">
                <p className="text-2xl font-semibold text-primary-blue">Full stack</p>
                <p className="mt-1 text-sm text-gray-400">frontend y backend</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-2xl font-semibold bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">Enfoque</p>
                <p className="mt-1 text-sm text-gray-400">producto, claridad y resultado</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-purple to-primary-blue px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(124,58,237,0.28)]"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-xl border border-primary-blue/20 bg-primary-blue/[0.05] px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-primary-blue/35 hover:bg-primary-blue/[0.10]"
              >
                Contáctame
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="flex items-center gap-5 pt-1 text-gray-500"
            >
              <a
                href="https://github.com/rafael-chuco"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-primary-purple"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-chuco/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-primary-blue"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rafael.chuco1908@gmail.com"
                className="transition-colors duration-300 hover:text-primary-purple"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
