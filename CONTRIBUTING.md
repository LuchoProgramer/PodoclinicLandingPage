# 🤝 Guía de Contribución - PodoClinic

Esta guía ayuda a mantener la consistencia y calidad del proyecto PodoClinic.

## 📋 Antes de Empezar

### Conocimientos Requeridos
- Next.js 15 con App Router
- React Server Components vs Client Components
- Tailwind CSS
- Analytics (GA4, Facebook Pixel, TikTok)

### Herramientas Necesarias
- Node.js 18+
- Git
- Editor con soporte para React/Next.js

## 🎯 Estándares del Proyecto

### Estructura de Componentes

#### Server Components (por defecto)
```jsx
// src/app/pagina/page.js
import ComponenteCliente from '@/components/ComponenteCliente';

export default function PaginaServidor() {
  return (
    <div>
      <h1>Contenido estático</h1>
      <ComponenteCliente />
    </div>
  );
}
```

#### Client Components (cuando necesario)
```jsx
// src/components/ComponenteCliente.js
"use client";

import { useState } from 'react';

export default function ComponenteCliente() {
  const [estado, setEstado] = useState(false);
  
  return (
    <button onClick={() => setEstado(!estado)}>
      {estado ? 'Activo' : 'Inactivo'}
    </button>
  );
}
```

### Convenciones de Naming

#### Archivos y Carpetas
```
src/
├── app/
│   ├── blog/                    # kebab-case
│   │   ├── page.js             # page.js para rutas
│   │   └── [category]/         # [brackets] para dinámicas
│   └── mi-seccion/
├── components/
│   ├── MiComponente.js         # PascalCase
│   └── BlogButtons.js
└── data/
    ├── blog/
    │   └── posts.js            # camelCase
    └── configuracion.js
```

#### Variables y Funciones
```javascript
// camelCase para variables y funciones
const miVariable = "valor";
const miFuncion = () => {};

// PascalCase para componentes
const MiComponente = () => {};

// UPPER_CASE para constantes
const API_ENDPOINT = "https://api.ejemplo.com";
```

## 🎨 Guías de Estilo

### Colores del Brand
```javascript
// Usar variables CSS o clases de Tailwind
const colores = {
  primary: '#60BEC3',      // bg-[#60BEC3] o text-[#60BEC3]
  emergency: '#DC2626',    // bg-red-600
  success: '#059669',      // bg-green-600
  warning: '#D97706',      // bg-amber-600
};
```

### Espaciado y Layout
```jsx
// Consistencia en espaciado
<div className="py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Contenido */}
    </div>
  </div>
</div>
```

### Componentes Responsivos
```jsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">Título</h1>
</div>
```

## 📝 Agregando Contenido al Blog

### Nuevo Artículo

1. **Agregar a la base de datos:**
```javascript
// src/data/blog/posts.js
{
  id: "nuevo-articulo-001", // Único, numérico incremental
  title: "Título Descriptivo y SEO-Friendly",
  slug: "titulo-descriptivo-seo-friendly", // URL amigable
  category: "uneros", // uneros, pie-diabetico, hongos
  excerpt: "Descripción de 150-160 caracteres que aparecerá en previews y meta description.",
  content: `
    <p>Primer párrafo con información relevante...</p>
    
    <h2>Subtítulo Importante</h2>
    <p>Contenido del subtítulo...</p>
    
    <h3>Lista de Recomendaciones:</h3>
    <ul>
      <li><strong>Punto importante:</strong> Descripción detallada</li>
      <li><strong>Segundo punto:</strong> Más información</li>
    </ul>
    
    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-6">
      <p class="text-red-700">⚠️ <strong>Advertencia:</strong> Información crítica para el paciente.</p>
    </div>
  `,
  image: "/images/nuevo-articulo.jpg", // 1200x630px optimal
  date: "15 de octubre de 2025", // Formato español
  author: "Dra. Cristina Muñoz", // Siempre la doctora
  featured: false, // true solo para artículos destacados
  tags: ["uñeros", "prevención", "tratamiento"] // 3-5 tags relevantes
}
```

2. **Imágenes requeridas:**
- Tamaño óptimo: 1200x630px
- Formato: JPG o PNG
- Ubicación: `/public/images/`
- Nombrado: `slug-del-articulo.jpg`

### Nueva Categoría

1. **Agregar categoría a posts.js**
2. **Crear página de categoría:** `/src/app/blog/[category]/page.js`
3. **Actualizar navegación:** `/src/app/blog/page.js`
4. **Actualizar sitemap:** `next-sitemap.config.js`

## 🔧 Modificaciones Técnicas

### Agregando Tracking

#### Nuevo Evento de Analytics
```javascript
// En componente cliente
const trackearEvento = () => {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "nuevo_evento", {
      event_category: "categoria_evento",
      event_label: "etiqueta_descriptiva",
      value: 1
    });
  }

  // Facebook Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_category: "categoria",
      content_name: "nombre_evento"
    });
  }

  // TikTok Pixel
  if (typeof window !== "undefined" && window.ttq) {
    window.ttq.track("Contact", {
      content_category: "categoria"
    });
  }
};
```

### Nuevo Componente con Tracking
```jsx
// src/components/MiBotonPersonalizado.js
"use client";

export function MiBotonPersonalizado({ 
  href, 
  children, 
  trackingLabel = "boton_click" 
}) {
  const handleClick = () => {
    // Tracking aquí
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
```

## 🚀 Proceso de Deploy

### Desarrollo Local
```bash
# 1. Desarrollar cambios
npm run dev

# 2. Verificar que todo funcione
# Revisar en http://localhost:3000

# 3. Build de prueba
npm run build

# 4. Verificar errores
# Resolver cualquier problema de build
```

### Deploy a Producción
```bash
# 1. Commit de cambios
git add .
git commit -m "feat: descripción del cambio"

# 2. Push a repositorio
git push origin main

# 3. Deploy automático (Netlify/Vercel)
# Verificar que el deploy sea exitoso
```

## 🐛 Debugging Común

### "ArrowRight is not defined"
```javascript
// ❌ Incorrecto
import { Clock } from "lucide-react";
<ArrowRight /> // Error!

// ✅ Correcto  
import { Clock, ArrowRight } from "lucide-react";
<ArrowRight /> // Funciona
```

### "Event handlers cannot be passed"
```jsx
// ❌ Incorrecto (Server Component)
export default function Pagina() {
  return <button onClick={() => {}}>Click</button>; // Error!
}

// ✅ Correcto (Client Component)
"use client";
export default function Boton() {
  return <button onClick={() => {}}>Click</button>; // Funciona
}
```

### Build falla en generateStaticParams
```javascript
// ❌ Falta export
function getAllPosts() { return posts; }

// ✅ Correcto
export function getAllPosts() { return posts; }
```

## 📞 Contacto Técnico

Para dudas específicas del proyecto:
- **Revisar documentación:** `DOCUMENTACION.md`
- **Ver historial:** `CHANGELOG.md`
- **Issues técnicos:** Crear issue en GitHub

## ✅ Checklist de Calidad

Antes de hacer commit:

- [ ] Código funciona en desarrollo (`npm run dev`)
- [ ] Build exitoso (`npm run build`)
- [ ] No hay errores en consola
- [ ] Responsive design verificado
- [ ] Enlaces funcionan correctamente
- [ ] Tracking implementado (si aplica)
- [ ] SEO optimizado (si es contenido nuevo)
- [ ] Documentación actualizada (si es necesario)

---

**Manteniendo la calidad del proyecto PodoClinic** 🦶✨