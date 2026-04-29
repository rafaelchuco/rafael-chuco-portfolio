'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const codeLines = [
  { tokens: [{ t: 'const ', c: 'text-primary-blue' }, { t: 'dev', c: 'text-violet-300' }, { t: ' = {', c: 'text-gray-300' }] },
  { tokens: [{ t: '  nombre', c: 'text-green-400' }, { t: ': ', c: 'text-gray-400' }, { t: '"Rafael"', c: 'text-amber-300' }, { t: ',', c: 'text-gray-400' }] },
  { tokens: [{ t: '  sap', c: 'text-green-400' }, { t: ': ', c: 'text-gray-400' }, { t: '["BTP","ABAP","Fiori"]', c: 'text-amber-300' }, { t: ',', c: 'text-gray-400' }] },
  { tokens: [{ t: '  ai', c: 'text-green-400' }, { t: ': ', c: 'text-gray-400' }, { t: '"Joule + Copilot"', c: 'text-violet-300' }, { t: ',', c: 'text-gray-400' }] },
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
      className="absolute right-4 bottom-[32%] z-10 min-w-[215px] rounded-2xl border border-white/[0.08] bg-[#0A0F1A]/90 p-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] text-gray-600 font-mono">dev.js</span>
      </div>
      <div className="font-mono text-[12px] leading-6">
        {codeLines.map((line, li) => (
          <div key={li} className={`transition-all duration-300 ${li < visibleLines ? 'opacity-100' : 'opacity-0'}`}>
            <span className="select-none text-gray-600 mr-3">{li + 1}</span>
            {line.tokens.map((tok, ti) => (
              <span key={ti} className={tok.c}>{tok.t}</span>
            ))}
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

/* Mini activity feed */
const activities = [
  { label: 'Deploy exitoso', sub: 'hace 2h', ok: true },
  { label: 'PR merged', sub: 'hace 5h', ok: true },
  { label: 'Build en progreso', sub: 'ahora', ok: false },
];

function ActivityCard() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { i++; setVisible(i); if (i >= activities.length) clearInterval(t); }, 500);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
      transition={{
        opacity: { delay: 1.4, duration: 0.6 },
        x: { delay: 1.4, duration: 0.6 },
        y: { delay: 2.6, duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="absolute left-0 top-[22%] z-10 w-[190px] rounded-2xl border border-white/[0.07] bg-[#0A0F1A]/90 p-3.5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center gap-2 mb-2.5">
        <Zap className="h-3.5 w-3.5 text-primary-purple" />
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Actividad</span>
      </div>
      <div className="space-y-2">
        {activities.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i < visible ? 1 : 0, x: i < visible ? 0 : -10 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {a.ok
                ? <CheckCircle2 className="h-3 w-3 text-green-400 shrink-0" />
                : <motion.span animate={{ opacity: [1,0.3,1] }} transition={{ duration: 1, repeat: Infinity }} className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0" />
              }
              <span className="text-[11px] text-gray-300">{a.label}</span>
            </div>
            <span className="text-[10px] text-gray-600 ml-1">{a.sub}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* Skill progress bars */
const skills = [
  { label: 'Full Stack Web', pct: 92, color: 'from-primary-purple to-violet-400' },
  { label: 'SAP BTP / ABAP', pct: 88, color: 'from-amber-500 to-orange-400' },
  { label: 'SAP Fiori / UI5', pct: 85, color: 'from-primary-blue to-cyan-400' },
  { label: 'Joule AI / HANA', pct: 80, color: 'from-green-500 to-emerald-400' },
];

function SkillCard() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnimated(true), 1600); return () => clearTimeout(t); }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, 7, 0] }}
      transition={{
        opacity: { delay: 1.5, duration: 0.7 },
        y: { delay: 3, duration: 5, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="absolute right-2 top-[24%] z-10 w-[175px] rounded-2xl border border-white/[0.07] bg-[#0A0F1A]/90 p-3.5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Skills</p>
      <div className="space-y-2.5">
        {skills.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-[11px] text-gray-300">{s.label}</span>
              <span className="text-[11px] text-gray-500">{s.pct}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: animated ? `${s.pct}%` : 0 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
              />
            </div>
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
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.7 },
              x: { delay: 1, duration: 0.7 },
              y: { delay: 2.2, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute left-2 bottom-[28%] z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0D1117]/80 px-4 py-3 backdrop-blur-md shadow-xl"
          >
            <span className="text-2xl font-bold text-white">2+</span>
            <span className="text-xs leading-tight text-gray-400">años de<br/>experiencia</span>
          </motion.div>

          {/* Activity feed */}
          <ActivityCard />

          {/* Skill progress bars */}
          <SkillCard />

          {/* Code card */}
          <CodeCard />

          {/* Image (encima, z-20) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            className="relative w-full h-full z-20"
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
                Convierto ideas en productos digitales modernos, claros y escalables — desde web full stack hasta soluciones SAP empresariales.
              </p>
              {/* SAP tech pills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {['SAP BTP', 'ABAP', 'SAP Fiori', 'SAPUI5', 'HANA', 'Joule AI', 'GitHub Copilot'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.3 }}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-gray-400 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
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
