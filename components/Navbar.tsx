'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#contacto', label: 'Contacto' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-[#0D1117]/72 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 py-4 lg:px-16 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">Rafael Chuco</span>
              <span className="hidden text-[11px] uppercase tracking-[0.22em] text-gray-500 sm:block">Full Stack Developer</span>
            </div>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-primary-purple to-primary-blue transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-purple/30 hover:bg-white/[0.07] lg:inline-flex"
          >
            Contáctame
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2 transition-colors hover:bg-white/[0.08] md:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-4 rounded-3xl border border-white/10 bg-[#11161d]/94 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-2 py-2 text-gray-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-xl border border-primary-purple/20 bg-gradient-to-r from-primary-purple/90 to-primary-blue/90 px-6 py-3 text-center font-semibold text-white"
            >
              Contáctame
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
