# 🎬 Guía de Animaciones - Portfolio Rafael Chuco

Este documento explica todas las animaciones implementadas con **Framer Motion**.

---

## 📋 Tabla de contenidos

1. [Hero Section](#hero-section)
2. [Stats Section](#stats-section)
3. [About Section](#about-section)
4. [Projects Section](#projects-section)
5. [Tech Stack Section](#tech-stack-section)
6. [Contact Section](#contact-section)
7. [Navbar](#navbar)
8. [Footer](#footer)
9. [Personalizar animaciones](#personalizar-animaciones)

---

## Hero Section

### 1. Entrada del contenido (Fade + Slide)
```typescript
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```
- **Efecto**: Aparece desde la izquierda con fade
- **Duración**: 0.8s
- **Cuándo**: Al cargar la página

### 2. Stagger en elementos (Badge, título, subtitle)
```typescript
transition={{ delay: 0.2, duration: 0.6 }}  // Badge
transition={{ delay: 0.3, duration: 0.6 }}  // Título
transition={{ delay: 0.4, duration: 0.6 }}  // Subtitle
```
- **Efecto**: Elementos aparecen uno tras otro
- **Delay incremental**: 0.1s-0.2s entre cada uno

### 3. Hover en botones
```css
hover:shadow-purple-500/50 transition-all duration-300
```
- **Efecto**: Shadow glow al pasar el mouse
- **Duración**: 0.3s

### 4. Floating dragon (mascota)
```typescript
animate={{ 
  y: [0, -15, 0],
  rotate: [0, 5, 0]
}}
transition={{ 
  duration: 6, 
  repeat: Infinity,
  ease: "easeInOut"
}}
```
- **Efecto**: Flota suavemente arriba/abajo con ligera rotación
- **Duración**: 6s loop infinito
- **Sutil**: Movimiento de -15px, rotación de 5°

### 5. Scroll indicator
```typescript
animate={{ opacity: 1, y: 0 }}
transition={{ 
  delay: 1, 
  duration: 0.6, 
  repeat: Infinity, 
  repeatType: "reverse" 
}}
```
- **Efecto**: Bounce infinito para indicar scroll
- **Aparece**: Después de 1s

---

## Stats Section

### 1. Scroll reveal del contenedor
```typescript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```
- **Efecto**: Aparece al hacer scroll
- **Trigger**: Cuando entra en viewport
- **Once**: Solo anima la primera vez

### 2. Stagger en cards
```typescript
transition={{ delay: index * 0.1, duration: 0.5 }}
```
- **Efecto**: Cada card aparece 0.1s después de la anterior
- **Escalado**: Desde 0.8 a 1.0

### 3. Hover en stats cards
```typescript
whileHover={{ y: -5 }}
```
- **Efecto**: Levanta 5px al hover
- **Instantáneo**: Sin delay

---

## About Section

### 1. Scroll reveal de título
```typescript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

### 2. Slide lateral (imagen)
```typescript
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.7 }}
```
- **Desde**: Izquierda
- **Duración**: 0.7s

### 3. Slide lateral (texto)
```typescript
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.7 }}
```
- **Desde**: Derecha
- **Efecto**: Contraste con la imagen (simetría)

### 4. Features grid stagger
```typescript
transition={{ delay: index * 0.1, duration: 0.5 }}
```

---

## Projects Section

### 1. Cards stagger
```typescript
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1, duration: 0.6 }}
```
- **Efecto**: Aparecen desde abajo con delay
- **Y distance**: 50px (más dramático que stats)

### 2. Hover elevation
```typescript
whileHover={{ y: -10 }}
```
- **Efecto**: Levanta más que stats (10px vs 5px)
- **Por qué**: Los proyectos son el contenido más importante

### 3. Overlay con hover
```css
opacity-0 group-hover:opacity-100 transition-opacity duration-300
```
- **Efecto**: Links de GitHub/Demo aparecen al hover
- **Contexto**: Solo visible cuando se necesita

---

## Tech Stack Section

### 1. Cards aparecen con escala
```typescript
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.05, duration: 0.5 }}
```
- **Delay más corto**: 0.05s (son muchos items)
- **Scale**: Efecto "pop" al aparecer

### 2. Hover: scale + elevate
```typescript
whileHover={{ y: -5, scale: 1.05 }}
```
- **Efecto combinado**: Sube Y escala ligeramente
- **Sutil**: 1.05 = 5% más grande

### 3. Icon scale on hover
```css
group-hover:scale-110 transition-transform duration-300
```
- **Efecto**: El emoji crece 10% independiente del card
- **CSS puro**: No necesita Framer Motion

---

## Contact Section

### 1. Dos columnas entran desde lados opuestos
```typescript
// Info (izquierda)
initial={{ opacity: 0, x: -50 }}

// Form (derecha)
initial={{ opacity: 0, x: 50 }}
```
- **Simetría**: Efecto espejo
- **Duración**: 0.7s

### 2. Form inputs focus animation
```css
focus:border-primary-purple transition-colors
```
- **Feedback visual**: Border cambia a purple al enfocarse

---

## Navbar

### 1. Slide down on mount
```typescript
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.5 }}
```
- **Efecto**: Baja desde arriba al cargar

### 2. Links stagger
```typescript
transition={{ delay: index * 0.1, duration: 0.5 }}
```

### 3. Underline hover effect
```css
w-0 h-0.5 bg-gradient group-hover:w-full transition-all duration-300
```
- **Efecto**: Línea crece de 0 a 100% ancho
- **Gradient**: Purple to blue

### 4. Glass effect on scroll
```typescript
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
}, []);
```
- **Efecto**: Navbar se vuelve glass al scrollear >50px
- **Performance**: Solo re-render cuando cambia estado

---

## Footer

### 1. Social icons hover
```typescript
whileHover={{ scale: 1.1, y: -3 }}
```
- **Efecto**: Crece y levanta
- **Feedback claro**: "Esto es clickeable"

---

## 🎨 Personalizar animaciones

### Cambiar velocidad global
En cada componente, busca `duration`:
```typescript
transition={{ duration: 0.6 }} // Más lento: 1.0, Más rápido: 0.3
```

### Desactivar una animación
Comentar las props `initial` y `whileInView`:
```typescript
// initial={{ opacity: 0, y: 30 }}
// whileInView={{ opacity: 1, y: 0 }}
```

### Cambiar easing
```typescript
transition={{ ease: "easeInOut" }}
// Opciones: "easeIn", "easeOut", "linear", "anticipate"
```

### Añadir bounce
```typescript
transition={{ 
  type: "spring", 
  stiffness: 300, 
  damping: 20 
}}
```

### Delay más largo
```typescript
transition={{ delay: 0.5, duration: 0.6 }}
```

---

## ⚡ Performance Tips

1. **viewport={{ once: true }}** - Solo anima la primera vez (mejor performance)
2. **transform y opacity** - Propiedades más rápidas de animar
3. **No animes width/height** - Usa scale en su lugar
4. **Evita animate múltiples elementos pesados** - Usa CSS animations para loops simples

---

## 🚀 Añadir nuevas animaciones

### Ejemplo: Typing effect
```bash
npm install react-type-animation
```

```typescript
import { TypeAnimation } from 'react-type-animation';

<TypeAnimation
  sequence={[
    'Desarrollador Full Stack',
    2000,
    'Creador de soluciones',
    2000,
  ]}
  repeat={Infinity}
/>
```

### Ejemplo: Parallax simple
```typescript
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);

<motion.div style={{ y }}>
  {/* Contenido */}
</motion.div>
```

---

## 📚 Recursos

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Easing Functions](https://easings.net/)
- [Animation Principles](https://www.interaction-design.org/literature/article/understand-the-12-principles-of-animation)

---

¿Necesitas ayuda? Pregúntale a `@Portfolio UX Expert` sobre animaciones específicas.
