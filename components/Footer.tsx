'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent mb-3">
              Rafael Chuco
            </h3>
            <p className="text-gray-400 text-sm">
              Desarrollador Full Stack creando soluciones digitales modernas y escalables.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-primary-purple transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-gray-400 hover:text-primary-purple transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-400 hover:text-primary-purple transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-primary-purple transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/rafael-chuco"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-3 rounded-lg bg-dark-card hover:bg-gray-700 border border-dark-border hover:border-primary-purple transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rafael-chuco/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-3 rounded-lg bg-dark-card hover:bg-gray-700 border border-dark-border hover:border-primary-blue transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:rafael.chuco1908@gmail.com"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-3 rounded-lg bg-dark-card hover:bg-gray-700 border border-dark-border hover:border-primary-purple transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-border text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Rafael Chuco. Hecho con{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> y mucho código
          </p>
        </div>
      </div>
    </footer>
  );
}
