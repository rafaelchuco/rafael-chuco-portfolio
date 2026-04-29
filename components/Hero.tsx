'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const codeLines = [
  { tokens: [{ t: 'const ', c: 'text-primary-blue' }, { t: 'dev', c: 'text-violet-300' }, { t: ' = {', c: 'text-gray-300' }] },
  { tokens: [{ t: '  nombre', c: 'text-green-400' }, { t: ': ', c: 'text-gray-400' }, { t: '"Rafael"', c: 'text-amber-300' }, { t: ',', c: 'text-gray-400' }] },
  { tokens: [{ t: '  stack', c: 'text-green-400' }, { t: ': ', c: 'text-gray-400' }, { t: '"Full Stack"', c: 'text-amber-300' }, { t: ',', c: 'text-gray-400' }] },
  { tokens: [{ t: '  open', c: 'text-green-400' }, { t: ': ', c: 'text-gray-400' }, { t: 'true', c: 'text-primary-purple' }] },
  { tokens: [{ t: '}', c: 'text-gray-300' }] },
];

function CodeCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(interval);
    }, 320);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 10 }}
      animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
      transition={{
        opacity: { delay: 1.1, duration: 0.7 },
        x: { delay: 1.1, duration: 0.7 },
        y: { delay: 2, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="absolute right-4 bottom-[35%] z-20 min-w-[210px] rounded-2xl border border-white/[0.08] bg-[#0A0F1A]/90 p-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Header bar */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] text-gray-600 font-mono">dev.js</span>
      </div>
      {/* Code lines */}
      <div className="font-mono text-[12px] leading-6 space-y-0">
        {codeLines.map((line, li) => (
          <div
            key={li}
            className={`transition-all duration-300 ${li < visibleLines ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="select-none text-gray-600 mr-3">{li + 1}</span>
            {line.tokens.map((tok, ti) => (
              <span key={ti} className={tok.c}>{tok.t}</span>
            ))}
            {/* blinking cursor on last visible line */}
            {li === visibleLines - 1 && visibleLines < codeLines.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="inline-block w-[7px] h-[13px] bg-primary-purple/80 ml-0.5 align-middle"
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary-purple/[0.07] rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-blue/[0.07] rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary-purple/[0.04] rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 mx-auto grid h-full max-w-7xl px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left side - Image */}
        <div className="relative order-2 hidden lg:flex lg:order-1 lg:justify-start lg:items-end lg:h-full lg:pt-16">
          {/* Glow behind image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-primary-purple/20 rounded-full blur-[80px] pointer-events-none"
          />
          {/* Orbit ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[72%] aspect-square rounded-full border border-primary-purple/10 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[85%] aspect-square rounded-full border border-white/[0.04] pointer-events-none"
          />

          {/* Floating badge — years */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
            style={{ y: 0 }}
            className="absolute left-2 bottom-[30%] z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0D1117]/80 px-4 py-3 backdrop-blur-md shadow-xl"
          >
            <span className="text-2xl font-bold text-white">2+</span>
            <span className="text-xs leading-tight text-gray-400">años de<br/>experiencia</span>
          </motion.div>

          {/* Floating badge — stack code card */}
          <CodeCard />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/rafael.png"
              alt="Foto de perfil de Rafael Chuco"
              fill
              sizes="(max-width: 1280px) 620px, 720px"
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* Right side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-2 flex items-center"
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
                <span className="bg-gradient-to-br from-white via-white/90 to-primary-purple/80 bg-clip-text text-transparent">Rafael Chuco</span>
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
                href="https://github.com/rafaelchuco"
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
