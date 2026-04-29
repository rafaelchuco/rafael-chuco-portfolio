# 🎯 INICIO RÁPIDO - Portfolio Rafael Chuco

## ⚡ 3 pasos para ver tu portfolio

```bash
# 1. Instalar dependencias (2-3 min)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

¡Listo! Tu portfolio está corriendo.

---

## 📁 ¿Qué hay en este proyecto?

### ✅ Ya implementado

#### Estructura completa
- ✅ Next.js 14 con App Router
- ✅ TypeScript configurado
- ✅ Tailwind CSS + configuración custom
- ✅ Framer Motion para animaciones

#### Secciones del portfolio
- ✅ **Hero** - Presentación impactante con CTAs
- ✅ **Stats** - 4 métricas clave con iconos
- ✅ **About** - Tu historia + skills destacados
- ✅ **Projects** - 3 proyectos con hover effects
- ✅ **Tech Stack** - 12 tecnologías con iconos
- ✅ **Contact** - Formulario + info de contacto
- ✅ **Navbar** - Navegación sticky con glass effect
- ✅ **Footer** - Links + redes sociales

#### Diseño
- ✅ Dark UI (#0D1117) estilo GitHub
- ✅ Colores: Purple #7C3AED + Blue #2563EB
- ✅ Glassmorphism en cards
- ✅ Glow effects en botones
- ✅ Tipografía Inter (Google Fonts)
- ✅ 100% responsive (mobile-first)

#### Animaciones (Framer Motion)
- ✅ Hero fade + slide entrada
- ✅ Stagger en todos los elementos
- ✅ Scroll reveal en secciones
- ✅ Hover micro-interactions
- ✅ Floating dragon mascot (sutil)
- ✅ Smooth page transitions

#### Extras
- ✅ SEO metadata configurado
- ✅ Custom scrollbar
- ✅ Smooth scroll behavior
- ✅ Agente AI personalizado (@Portfolio UX Expert)
- ✅ Documentación completa

---

## 🚨 Próximos pasos CRÍTICOS (antes de deploy)

### 1. Agregar tu foto profesional
**📍 Ubicación**: `components/Hero.tsx` línea ~105
**Formato**: 400x400px, JPG/PNG
**Action**:
```typescript
// Reemplazar esto:
<div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
  <span className="text-6xl">RC</span>
</div>

// Por esto:
<Image 
  src="/images/rafael-photo.jpg" 
  alt="Rafael Chuco"
  fill
  className="object-cover"
/>
```

### 2. Agregar screenshots de proyectos
**📍 Ubicación**: Crear carpeta `public/projects/`
**Archivos**:
- `restafest.jpg` (800x600px)
- `animapets.jpg` (800x600px)
- `taskflow.jpg` (800x600px)

**Tip**: Captura la UI principal de cada proyecto, no solo código.

### 3. Subir tu CV
**📍 Ubicación**: `public/cv-rafael-chuco.pdf`
**Formato**: PDF optimizado (<1MB)

### 4. Configurar formulario de contacto
**📍 Ubicación**: `components/Contact.tsx` línea ~20

**Opción más fácil - EmailJS** (gratis, 200 emails/mes):
```bash
npm install @emailjs/browser
```

Ver instrucciones completas en **MEJORAS.md**

### 5. Actualizar links de GitHub
**📍 Ubicación**: 
- `components/Hero.tsx` línea ~95
- `components/Footer.tsx` línea ~40

Reemplazar:
```typescript
href="https://github.com/rafael-chuco"  // Tu username real
```

---

## 📝 Editar contenido

### Cambiar textos del Hero
**Archivo**: `components/Hero.tsx`
```typescript
// Línea 30: Badge
<span>Desarrollador Full Stack</span>

// Línea 42: Título
Hola, soy Rafael Chuco

// Línea 53: Descripción
Desarrollador Full Stack enfocado en...

// Línea 64: Highlight
✨ Transformo ideas en productos reales
```

### Agregar/editar proyectos
**Archivo**: `components/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción con impacto medible',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/tu-usuario/proyecto',
    demo: 'https://proyecto-live.com',
    color: 'purple' // o 'blue'
  },
  // ...
];
```

### Cambiar tecnologías
**Archivo**: `components/TechStack.tsx`
```typescript
const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend', color: 'text-cyan-400' },
  // Agregar/editar las que uses
];
```

---

## 🎨 Personalizar diseño

### Cambiar colores
**Archivo**: `tailwind.config.ts` línea 8
```typescript
colors: {
  primary: {
    purple: '#TU_COLOR_AQUI',
    blue: '#TU_COLOR_AQUI',
  }
}
```

### Ajustar animaciones
Ver **ANIMACIONES.md** para detalles completos.

**Quick edit**: Hacer animaciones más lentas/rápidas
```typescript
transition={{ duration: 0.6 }} // Cambiar a 0.3 (rápido) o 1.0 (lento)
```

---

## 🚀 Deploy a producción

### Vercel (recomendado - GRATIS)

```bash
# 1. Push a GitHub
git init
git add .
git commit -m "Portfolio inicial"
git remote add origin https://github.com/rafael-chuco/portfolio.git
git push -u origin main

# 2. Ir a vercel.com
# 3. "Import Project" → Seleccionar tu repo
# 4. Deploy (1 click)
```

Tu portfolio estará en: `https://tu-proyecto.vercel.app`

**Bonus**: Dominio custom gratis (.vercel.app) o conectar tu propio dominio.

---

## 📊 Checklist pre-deploy

```
[ ] npm install ejecutado
[ ] npm run dev funciona sin errores
[ ] Foto profesional agregada
[ ] Screenshots de proyectos agregados
[ ] CV descargable agregado
[ ] Formulario de contacto configurado
[ ] Links de GitHub/LinkedIn actualizados
[ ] Textos personalizados (About, Projects)
[ ] npm run build exitoso
[ ] Testeado en mobile (Chrome DevTools)
```

---

## 🆘 ¿Problemas?

### Error al instalar
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001
```

### Más ayuda
- Ver **COMANDOS.md** para troubleshooting
- Usar agente `@Portfolio UX Expert` para feedback
- Ver **MEJORAS.md** para optimizaciones

---

## 📚 Documentación incluida

- **README.md** - Visión general del proyecto
- **MEJORAS.md** - Ideas para mejorar el portfolio
- **ANIMACIONES.md** - Guía completa de animaciones
- **COMANDOS.md** - Comandos útiles y troubleshooting
- **Este archivo** - Quick start

---

## 🎯 Objetivo

Crear un portfolio **top 10%** que:
1. ✅ Comunique valor en <5 segundos
2. ✅ Destaque visualmente sin ser excesivo
3. ✅ Muestre habilidades técnicas reales
4. ✅ Facilite el contacto
5. ✅ Sea memorable

---

## 💡 Siguiente paso AHORA

```bash
npm install && npm run dev
```

Abre http://localhost:3000 y empieza a personalizar.

**¡Éxito con tu portfolio!** 🚀
