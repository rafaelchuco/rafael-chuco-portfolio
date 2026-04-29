# 🚀 Comandos y Troubleshooting

## 📦 Instalación inicial

```bash
# Instalar dependencias
npm install

# O con yarn
yarn install

# O con pnpm (más rápido)
pnpm install
```

---

## 🏃 Comandos de desarrollo

```bash
# Modo desarrollo (auto-reload)
npm run dev

# Puerto personalizado
npm run dev -- -p 3001

# Build optimizado para producción
npm run build

# Iniciar servidor de producción
npm run start

# Lint del código
npm run lint

# Lint y fix automático
npm run lint -- --fix
```

---

## 🔧 Troubleshooting común

### Error: "Cannot find module 'next'"
**Causa**: Dependencias no instaladas
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"
**Solución 1**: Usar otro puerto
```bash
npm run dev -- -p 3001
```

**Solución 2**: Matar el proceso
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Error: Build fails con TypeScript
**Causa**: Type errors
```bash
# Ver todos los errores
npx tsc --noEmit

# Temporalmente ignorar (NO recomendado)
# En tsconfig.json: "strict": false
```

### Error: Tailwind classes no funcionan
**Causa**: Configuración incorrecta
```bash
# Verificar que globals.css está importado en layout.tsx
# Verificar paths en tailwind.config.ts
# Reiniciar dev server
```

### Animaciones laggy/lentas
**Soluciones**:
1. Agregar `will-change: transform` en CSS
2. Usar `layoutId` con cuidado
3. Reducir cantidad de elementos animados simultáneamente
4. Verificar performance con React DevTools Profiler

---

## 🎨 Personalización rápida

### Cambiar colores principales
**Archivo**: `tailwind.config.ts`
```typescript
colors: {
  primary: {
    purple: '#7C3AED', // Tu nuevo purple
    blue: '#2563EB',   // Tu nuevo blue
  }
}
```

**Archivo**: `app/globals.css`
```css
:root {
  --purple: #7C3AED;
  --blue: #2563EB;
}
```

### Cambiar fuente
**Archivo**: `app/globals.css`
```css
/* Cambiar la URL de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
```

**Archivo**: `tailwind.config.ts`
```typescript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

### Cambiar textos
Busca y reemplaza en los componentes:
- `components/Hero.tsx` - Presentación principal
- `components/About.tsx` - Bio y descripción
- `components/Projects.tsx` - Proyectos y descripciones

---

## 🚀 Deploy

### Vercel (1-click deploy)

1. **Push a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/rafael-chuco/portfolio.git
git push -u origin main
```

2. **Conectar Vercel**
- Ir a [vercel.com](https://vercel.com)
- "Import Project"
- Seleccionar tu repo
- Deploy automático ✨

### Netlify

```bash
npm run build
npx netlify deploy --prod
```

### Docker (avanzado)

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🔍 Debug

### Ver console logs en producción
```typescript
// Agregar en layout.tsx o page.tsx
console.log('Environment:', process.env.NODE_ENV);
```

### Source maps en producción
**next.config.js**
```javascript
module.exports = {
  productionBrowserSourceMaps: true,
}
```
**⚠️ No recomendado**: Expone tu código fuente

### React DevTools
- Instalar extensión de Chrome/Firefox
- Inspeccionar componentes y props
- Profiler para detectar re-renders innecesarios

---

## 📊 Performance

### Analizar bundle size
```bash
npm run build
# Verás el tamaño de cada página

# Con @next/bundle-analyzer
npm install --save-dev @next/bundle-analyzer
```

**next.config.js**
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // tu config
})
```

```bash
ANALYZE=true npm run build
```

### Lighthouse score
```bash
# Build y start primero
npm run build
npm start

# En otra terminal
npx lighthouse http://localhost:3000 --view
```

**Target scores**:
- Performance: >90
- Accessibility: >95
- Best Practices: >95
- SEO: >95

### Optimizar imágenes
```bash
# Next.js Image component (ya incluido)
import Image from 'next/image'

<Image 
  src="/photo.jpg"
  width={400}
  height={400}
  alt="Rafael Chuco"
  priority // Para hero images
/>
```

---

## 🧪 Testing (opcional)

### Setup Vitest
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Setup Playwright (E2E)
```bash
npm init playwright@latest
npx playwright test
```

---

## 🔒 Seguridad

### Variables de entorno
```bash
# .env.local (NO commitear)
NEXT_PUBLIC_API_KEY=tu_api_key
EMAIL_SERVICE_KEY=secret_key
```

Usar:
```typescript
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

### Validar formularios
```bash
npm install zod react-hook-form
```

---

## 📱 PWA (Progressive Web App)

```bash
npm install next-pwa
```

**next.config.js**
```javascript
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // tu config
})
```

---

## 🌐 i18n (Multi-idioma)

Si quieres agregar inglés además de español:

**next.config.js**
```javascript
module.exports = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
}
```

---

## 📚 Recursos útiles

### Next.js
- [Docs oficiales](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Docs](https://tailwindcss.com/docs)
- [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Framer Motion
- [API Reference](https://www.framer.com/motion/)
- [Examples](https://www.framer.com/motion/examples/)

### Design inspiration
- [Dribbble - Developer Portfolios](https://dribbble.com/tags/developer-portfolio)
- [Awwwards](https://www.awwwards.com/)
- [Vercel Templates](https://vercel.com/templates)

---

## 🆘 Obtener ayuda

1. **Errores de código**: Usa el agente `@Portfolio UX Expert`
2. **Issues de Next.js**: [GitHub Issues](https://github.com/vercel/next.js/issues)
3. **Comunidad**: [Next.js Discord](https://discord.gg/nextjs)
4. **Stack Overflow**: Tag `next.js`

---

## 🎯 Checklist pre-deploy

- [ ] Todas las imágenes optimizadas
- [ ] Links de proyectos actualizados
- [ ] CV descargable agregado
- [ ] Formulario de contacto funcional
- [ ] Meta tags configurados (SEO)
- [ ] Favicon agregado
- [ ] Google Analytics (opcional)
- [ ] Lighthouse score >90
- [ ] Tests en mobile
- [ ] Tests en diferentes navegadores
- [ ] .env.local en .gitignore

---

¿Algo no funciona? Abre un issue o pregunta a `@Portfolio UX Expert`.
