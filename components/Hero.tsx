'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary-purple/[0.07] rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-blue/[0.07] rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary-purple/[0.04] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl px-6 lg:grid-cols-2 lg:items-end lg:gap-16">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="relative order-2 hidden lg:flex lg:order-1 lg:justify-start lg:items-end lg:h-full"
        >
          <div className="relative w-full h-full">
            {/* Image container */}
            <div className="relative w-full h-full">
              <Image
                src="/images/rafael.png"
                alt="Foto de perfil de Rafael Chuco"
                fill
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 460px, (max-width: 1280px) 620px, 720px"
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
            {/* Name + subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[6rem]">
                <span className="bg-gradient-to-r from-white via-violet-200 to-primary-blue bg-clip-text text-transparent">Rafael Chuco</span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-primary-purple to-primary-blue" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">Desarrollador Web</p>
              </div>
              <p className="max-w-lg text-lg leading-relaxed text-gray-400 lg:text-xl">
                Convierto ideas en productos digitales modernos, claros y escalables, de principio a fin.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="flex items-center gap-8 border-y border-white/[0.06] py-6"
            >
              <div>
                <p className="text-3xl font-semibold tracking-tight text-white">15+</p>
                <p className="mt-0.5 text-sm text-gray-500">proyectos</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <p className="text-3xl font-semibold tracking-tight text-white">2+</p>
                <p className="mt-0.5 text-sm text-gray-500">años de exp.</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div>
                <p className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">Full stack</p>
                <p className="mt-0.5 text-sm text-gray-500">frontend & backend</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#proyectos"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-primary-purple to-primary-blue px-8 py-4 font-semibold text-white shadow-[0_8px_32px_rgba(124,58,237,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(124,58,237,0.38)]"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                Ver proyectos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                Contáctame
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://github.com/rafael-chuco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-primary-purple/30 hover:bg-primary-purple/[0.08] hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-chuco/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-primary-blue/30 hover:bg-primary-blue/[0.08] hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:rafael.chuco1908@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-primary-purple/30 hover:bg-primary-purple/[0.08] hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
