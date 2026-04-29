'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">Rafael Chuco</p>
            <h3 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-white">
              Rafael Chuco
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-gray-400">
              Desarrollo experiencias web modernas con enfoque en claridad, ejecución y calidad visual. Este portfolio está diseñado para mostrar trabajo real y criterio técnico.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="text-gray-400 transition-colors hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-gray-400 transition-colors hover:text-white">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-400 transition-colors hover:text-white">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 transition-colors hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">Conecta</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/rafael-chuco"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all duration-300 hover:border-primary-purple/40 hover:bg-primary-purple/[0.08]"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rafael-chuco/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all duration-300 hover:border-primary-blue/40 hover:bg-primary-blue/[0.08]"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:rafael.chuco1908@gmail.com"
                whileHover={{ scale: 1.1, y: -3 }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-all duration-300 hover:border-primary-purple/40 hover:bg-primary-purple/[0.08]"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Rafael Chuco. Hecho con{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> y mucho código
          </p>
        </div>
      </div>
    </footer>
  );
}
