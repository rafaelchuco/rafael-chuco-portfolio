# Portfolio Rafael Chuco

Portfolio profesional desarrollado con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Dark UI moderno** (#0D1117) con colores purple (#7C3AED) y blue (#2563EB)
- **Animaciones profesionales** con Framer Motion
- **Glassmorphism** y efectos de glow
- **Responsive design** para todos los dispositivos
- **SEO optimizado**
- **Tipografía Inter** para máxima legibilidad

## 📦 Tecnologías

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del proyecto

```
rafael-chuco-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/
│   └── (imágenes y assets)
├── .github/
│   └── agents/
│       └── portfolio-ux-expert.agent.md
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Secciones

1. **Hero** - Presentación principal con CTA y links sociales
2. **Stats** - Estadísticas clave (experiencia, proyectos, clientes)
3. **About** - Información profesional y habilidades
4. **Projects** - Proyectos destacados con tecnologías
5. **Tech Stack** - Tecnologías y herramientas
6. **Contact** - Formulario de contacto e información

## 🎬 Animaciones

Todas las animaciones están optimizadas para performance:
- Fade in + Slide para elementos principales
- Stagger para listas
- Hover effects sutiles (0.3s)
- Floating animation para branding (6s ease-in-out)
- Scroll reveal con Framer Motion

## 📝 Personalización

### Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    purple: '#7C3AED',
    blue: '#2563EB',
  },
  dark: {
    bg: '#0D1117',
    card: '#161B22',
    border: '#30363D',
  }
}
```

### Contenido

Edita los componentes en `/components/` para cambiar textos, proyectos, tecnologías, etc.

## 🚀 Deploy

### Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta .next/
```

## 📄 Licencia

© 2026 Rafael Chuco. Todos los derechos reservados.

## 📧 Contacto

- Email: rafael.chuco1908@gmail.com
- LinkedIn: [linkedin.com/in/rafael-chuco](https://www.linkedin.com/in/rafael-chuco/)
- GitHub: [github.com/rafael-chuco](https://github.com/rafael-chuco)

## Perfil profesional y contenido del laboratorio

La portada mantiene la identidad oscura y los degradados morado/azul. Incluye perfil y objetivo profesional, formación (VI ciclo), competencias técnicas y personales, experiencia SAP, voluntariado, seis proyectos, tecnologías, logros, noticias y red profesional.

- Navegación: Inicio, Sobre mí, Experiencia, Proyectos, Noticias y Contacto.
- `lib/news.ts` reúne dos artículos en español y uno en inglés, con fuente oficial, fecha de publicación y enlace original.
- `public/cv-rafael-chuco-harvard.pdf` y `public/cv-rafael-chuco-tecsup.pdf` son los dos CV originales proporcionados por Rafael. Ambos se pueden ver y descargar desde Sobre mí; Inicio ofrece las dos descargas. La URL anterior `public/cv-rafael-chuco.pdf` conserva una copia del CV Harvard para mantener los enlaces existentes.
- El formulario prepara un email mediante `mailto:`. El visitante debe enviarlo desde su aplicación de correo; no hay un servicio de envío en el servidor.
- Los proyectos admiten imágenes, fechas y repositorios opcionales. Solo se muestran los enlaces proporcionados; las tarjetas usan un recurso visual decorativo cuando no hay capturas.
- Las comunidades y cargos proceden del perfil existente. Para aportar evidencias adicionales del laboratorio, se pueden añadir fotografías propias de eventos o enlaces públicos de participación. No se incluyeron conversaciones privadas, certificaciones no proporcionadas ni documentos corporativos.

Esta implementación sigue usando Next.js. Los requisitos específicos del editor Wix deben confirmarse con la guía del curso.

Los datos de experiencia, los cargos de voluntariado y los periodos académicos de RestaFest y AnimaPets se actualizaron con ambos CV originales.
