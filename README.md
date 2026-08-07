# 🏥 PodoClinic Landing Page - Sistema Híbrido Premium

## 🎯 Descripción del Proyecto

Landing page de alta conversión para clínica podológica especializada con **sistema híbrido de blog** que combina contenido estático hardcodeado con contenido dinámico del CMS headless. Diseñada con enfoque en user experience, segmentación inteligente de leads y múltiples puntos de conversión optimizados.

## 🚀 NUEVA FUNCIONALIDAD: Sistema Híbrido de Blog

### ✨ Características del Sistema Híbrido
- **Contenido Mixto**: Posts estáticos + posts dinámicos del CMS
- **Renderizado Visual Rico**: Componentes React para contenido CMS
- **Identificación Visual**: Badge "🔴 EN VIVO" para posts del CMS
- **Fallback Resiliente**: Funciona sin conexión al CMS
- **TypeScript Completo**: Type safety en toda la integración
- **SEO Optimizado**: Metadata dinámica para ambos tipos de contenido

### 🚀 Re### **Confi### **Eventos Trackeados**
- `click_blog_cta` - Clicks en CTAs del blog
- `click_whatsapp` - Interacciones WhatsApp
- `emergency_contact` - Clicks en botón de emergencia
- `page_view` - Vistas de página
- **Mapas de Calor** - Comportamiento visual de usuarios (Clarity)ión Actual**
- **Google Analytics:** G-MQB913L72F
- **Facebook Pixel:** 827077656519595  
- **TikTok Pixel:** D3FD2NBC77U7D8VS5C00
- **Google Tag Manager:** GTM-WXW86JFH
- **Microsoft Clarity:** o4qcj2k9pm (Mapas de Calor)dos Obtenidos
- **Diseño cohesivo premium** con gradientes elegantes
- **Flujo de conversión optimizado** en 7 secciones estratégicas  
- **Segmentación inteligente** de leads mediante quiz interactivo
- **12+ puntos de conversión** distribuidos estratégicamente
- **Tracking completo** con Google Analytics, Facebook Pixel y TikTok Pixel

---

## 🔄 Sistema Híbrido de Blog - Documentación Técnica

### 🎯 Arquitectura del Sistema Híbrido

```
Frontend (Next.js :3001) ←→ Sistema Híbrido ←→ CMS Headless (:3000)
                                    ↓
                        ┌─────────────────────┐
                        │   Proxy API Layer   │
                        │  (/api/cms-proxy)   │
                        └─────────────────────┘
                                    ↓
                    ┌─────────────────┬─────────────────┐
                    │  Posts Estáticos │  Posts del CMS  │
                    │   (hardcoded)   │   (dinámicos)   │
                    │                 │                 │
                    │ • SEO optimized │ • Badge "EN VIVO"│
                    │ • Contenido     │ • Renderizado    │
                    │   específico    │   automático     │
                    │ • Fallback      │ • Type-safe      │
                    │   garantizado   │ • Categorizado   │
                    └─────────────────┴─────────────────┘
```

### 🧩 Componentes Clave

#### 1. **Sistema Híbrido Core** (`src/data/hybrid-blog-posts.ts`)
- Combina contenido estático y dinámico seamlessly
- Fallback automático a contenido estático si CMS falla
- Ordenamiento inteligente por fecha de publicación
- Filtrado por categorías y límites

#### 2. **Cliente CMS Especializado** (`src/lib/podoclinic-cms-client.ts`)
- Mapeo de categorías CMS a categorías PodoclinicLandingPage
- Conversión de formato CMS a formato local
- Manejo de URLs absolutas para SSR
- Cache inteligente con revalidación

#### 3. **Renderizador Dinámico** (`src/components/CMSContentRenderer.tsx`)
- Genera contenido visual rico para posts del CMS
- Componentes reutilizables (AlertBox, FeatureGrid, etc.)
- Contenido específico por categoría podológica
- CTAs personalizados por especialidad

#### 4. **Proxy API** (`src/app/api/cms-proxy/route.ts`)
- Resuelve problemas de CORS
- Habilita Server-Side Rendering (SSR)
- Manejo de errores robusto
- Compatibilidad con Next.js App Router

### 📊 Flujo de Datos

1. **Página Principal del Blog** (`/blog`)
   - `HybridBlogContent.tsx` carga datos híbridos
   - Muestra estadísticas: X posts estáticos + Y posts CMS
   - Posts CMS identificados con badge "🔴 EN VIVO"

2. **Posts Individuales** (`/blog/[category]/[slug]`)
   - Auto-detección de origen (estático vs CMS)
   - Posts CMS: renderizado dinámico con `CMSContentRenderer`
   - Posts estáticos: contenido hardcodeado específico

3. **Listado por Categorías** (`/blog/[category]`)
   - Filtrado híbrido por categoría
   - Mixing de posts estáticos y CMS de la misma categoría

### 🔧 Configuración del Sistema

#### Variables de Entorno
```bash
# .env.local
NEXT_PUBLIC_CMS_URL=http://localhost:3000
NEXT_PUBLIC_CMS_TENANT_ID=zCXAU8FLaGX4UHgnrPfI
```

#### Estructura de Archivos del Sistema Híbrido
```
src/
├── app/
│   ├── api/cms-proxy/           # Proxy API
│   └── blog/                    # Blog híbrido
├── components/
│   ├── HybridBlogContent.tsx    # Componente principal
│   └── CMSContentRenderer.tsx   # Renderizador dinámico
├── data/
│   ├── blog/posts.ts           # Posts estáticos
│   └── hybrid-blog-posts.ts    # Sistema híbrido
└── lib/
    └── podoclinic-cms-client.ts # Cliente CMS
```

### 🚀 Funcionalidades Avanzadas

- **Identificación Visual**: Posts del CMS tienen badge "🔴 EN VIVO"
- **Fallback Resiliente**: Si CMS falla, muestra solo contenido estático
- **SEO Dinámico**: Metadata generada automáticamente para ambos tipos
- **Performance Optimizada**: Caching con revalidación cada 5 minutos
- **Type Safety**: TypeScript completo en toda la integración
- **Content Categorization**: Mapeo inteligente de categorías CMS

---

## 🏗️ Arquitectura del Proyecto

### **Stack Tecnológico**
- **Framework**: Next.js 16.0.0 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons, Heroicons
- **CMS Integration**: Sistema híbrido con CMS headless multi-tenant
- **API Layer**: Proxy pattern para CORS y SSR
- **Content Rendering**: Sistema de componentes dinámicos React
- **Analytics**: Google Analytics (GA4), Facebook Pixel, TikTok Pixel, Google Tag Manager
- **Deployment**: Netlify

### **Estructura de Archivos**
```
src/
├── app/
│   ├── layout.js                 # Layout principal con tracking
│   ├── page.js                   # Página principal
│   ├── globals.css               # Estilos globales
│   └── servicios/
│       └── uneros/
│           └── page.js           # Landing page específica
├── components/
│   ├── Hero.js                   # Sección hero optimizada
│   ├── AboutDoctor.js            # Credibilidad profesional
│   ├── SmartQuiz.js              # Quiz de segmentación
│   ├── Servicios.js              # Servicios premium
│   ├── Testimonials.js           # Validación social
│   ├── FAQAccordion.js           # FAQs inteligentes
│   ├── LocationHub.js            # Contacto unificado
│   ├── ContactModal.js           # Modal de conversión
│   ├── LiveChat.js               # Chat proactivo
│   ├── WhatsAppButton.js         # Botón flotante
│   ├── Navbar.js                 # Navegación con contacto
│   └── LayoutClient.js           # Layout cliente
└── data/
    ├── faqs.js                   # Base de datos de FAQs
    └── tests.js                  # Datos de quiz (legacy)
```

---

## 🎨 Sistema de Diseño

### **Paleta de Colores**
```css
/* Colores Principales */
--primary-teal: #60BEC3        /* Color de marca principal */
--primary-green: #79A373       /* Color secundario */
--hover-teal: #4A9DB8          /* Estado hover */

/* Gradientes de Fondo */
--gradient-bg: linear-gradient(to bottom right, #dbeafe, #dcfce7)  /* from-blue-50 to-green-50 */

/* Grises */
--gray-800: #1f2937           /* Títulos principales */
--gray-700: #374151           /* Texto secundario */
--gray-600: #4b5563           /* Texto terciario */
```

### **Tipografía**
- **Títulos H1**: 4xl-6xl, font-bold, gray-800
- **Títulos H2**: 3xl-4xl, font-bold, gray-800 + accent color
- **Títulos H3**: xl-2xl, font-semibold, gray-800
- **Párrafos**: lg-xl, gray-600/gray-700
- **CTAs**: lg, font-semibold, white

### **Componentes Base**
```css
/* Cards Premium */
.card-premium {
  @apply bg-white rounded-2xl shadow-xl border border-gray-100;
}

/* Botones Principales */
.btn-primary {
  @apply bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02];
}

/* Badges */
.badge {
  @apply bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium;
}
```

---

## 🔄 Flujo de Usuario Optimizado

### **1. Hero Section** 
**Objetivo**: Captura inmediata de atención
- Headlines con propuesta de valor clara
- 2 CTAs principales (Modal + WhatsApp urgente)
- Badges de urgencia y promoción
- Elementos decorativos médicos sutiles

### **2. About Doctor**
**Objetivo**: Establecer credibilidad profesional
- Estadísticas de confianza (500+ pacientes, 98% satisfacción)
- Certificaciones y experiencia
- Mensaje personal de la doctora
- CTA para consulta directa

### **3. Smart Quiz**
**Objetivo**: Engagement + segmentación inteligente
- 5 preguntas estratégicas sobre síntomas
- Sistema de puntuación que evalúa riesgo
- 3 niveles de resultado con recomendaciones personalizadas
- CTAs específicos según nivel de urgencia

### **4. Servicios Premium**
**Objetivo**: Presentar soluciones disponibles
- 4 servicios principales con iconografía médica
- Beneficios claros y calls-to-action específicos
- Links a landing pages especializadas
- Tracking de interés por servicio

### **5. Testimonials**
**Objetivo**: Validación social y credibilidad
- Carousel interactivo de 4 testimonios reales
- Estadísticas de resultados
- Casos verificados con badges
- CTA de refuerzo

### **6. FAQs Premium**
**Objetivo**: Resolución de objeciones finales
- Búsqueda en tiempo real
- Categorización automática por problema
- Mini-CTAs contextuales en respuestas relevantes
- Fallback para consultas personalizadas

### **7. Location Hub**
**Objetivo**: Facilitar conversión final
- Mapa interactivo con información completa
- Múltiples canales de contacto
- Redes sociales integradas (incluye TikTok)
- CTAs de refuerzo finales

---

## 📊 Tracking y Analytics

### **Eventos Configurados**
```javascript
// Google Analytics (GA4)
gtag('event', 'click_reserva_cita', {
  event_category: 'engagement',
  event_label: 'Botón Hero Reserva tu cita'
});

// TikTok Pixel
ttq.track('Contact', {
  content_type: 'cita_reserva',
  content_name: 'Reservar Cita Hero'
});

// Facebook Pixel
fbq('track', 'Contact', {
  content_name: 'Reservar Cita Hero'
});
```

### **Métricas Clave a Monitorear**
- **Engagement**: Tiempo en página, quiz completion rate, FAQ interactions
- **Conversión**: Click-to-WhatsApp rate, modal completions, phone calls
- **Segmentación**: Distribución de resultados de quiz, interés por servicio

---

# 🦶 PodoClinic Landing Page

> Landing page profesional para servicios de podología de **Dra. Cristina Muñoz** en Quito, Ecuador.

## 🚀 Características Principales

- ✅ **Sistema de Blog SEO-optimizado** - Artículos especializados en podología
- ✅ **WhatsApp Business Integration** - Contacto directo optimizado
- ✅ **Tracking Analytics Completo** - GA4, Facebook Pixel, TikTok Pixel
- ✅ **Diseño Responsive** - Optimizado para móviles y desktop
- ✅ **Next.js 15 App Router** - Tecnología moderna y rápida
- ✅ **Exportación Estática** - Deploy en cualquier CDN

## 🏗️ Tecnologías

- **Framework:** Next.js 15.5.3
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Analytics:** Google Analytics 4, Facebook Pixel, TikTok Pixel
- **SEO:** Next-sitemap
- **Deploy:** Exportación estática

## 📋 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Exportar sitio estático
npm run export
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo (puerto 3000)
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter de código
npm run export       # Exportación estática
```

## 📝 Sistema de Blog

### Agregar Nuevo Artículo

1. **Editar base de datos de posts:**
   ```javascript
   // src/data/blog/posts.js
   export const blogPosts = [
     {
       id: "nuevo-articulo",
       title: "Título del Artículo", 
       slug: "titulo-del-articulo",
       category: "uneros", // uneros, pie-diabetico, hongos
       excerpt: "Descripción breve del artículo...",
       content: "Contenido completo en markdown...",
       image: "/images/articulo.jpg",
       date: "15 de enero de 2025",
       author: "Dra. Cristina Muñoz",
       featured: false,
       tags: ["uñeros", "tratamiento", "prevención"]
     }
   ];
   ```

2. **Build y deploy:**
   ```bash
   npm run build
   ```

### Categorías Disponibles
- **uneros** - Tratamiento y prevención de uñas encarnadas
- **pie-diabetico** - Cuidados especializados para diabéticos  
- **hongos** - Tratamiento de infecciones fúngicas

## 🎨 Personalización

### Colores Principales
```css
--primary-blue: #60BEC3;    /* Color principal del brand */
--emergency-red: #DC2626;   /* Botones de emergencia */
--success-green: #059669;   /* WhatsApp y éxito */
```

### Información de Contacto
```javascript
// Ubicaciones de contacto a actualizar:
// src/components/Navbar.js - Teléfono header
// src/components/WhatsAppButton.js - Botón flotante
// src/components/Contacto.js - Información completa
// src/components/BlogButtons.js - CTAs del blog

const contactInfo = {
  phone: "099 583 2788",
  whatsapp: "593995832788", 
  schedule: "Lun-Vie 8:00-18:00 | Sáb 8:00-14:00",
  doctor: "Dra. Cristina Muñoz"
};
```

## 📊 Analytics y Tracking

### Configuración Actual
- **Google Analytics:** G-MQB913L72F
- **Facebook Pixel:** 827077656519595  
- **TikTok Pixel:** D3FD2NBC77U7D8VS5C00
- **Google Tag Manager:** GTM-WXW86JFH

### Eventos Trackeados
- `click_blog_cta` - Clicks en CTAs del blog
- `click_whatsapp` - Interacciones WhatsApp
- `emergency_contact` - Clicks en botón de emergencia
- `page_view` - Vistas de página

## 🔧 Componentes Importantes

### BlogButtons.js
Componentes cliente para botones con tracking:
```jsx
import { WhatsAppButton, CTAButton } from '@/components/BlogButtons';

// Botón WhatsApp con tracking
<WhatsAppButton 
  href="https://wa.me/593995832788?text=Mensaje"
  trackingLabel="blog_whatsapp_cta"
>
  Contactar por WhatsApp
</WhatsAppButton>

// Botón CTA genérico
<CTAButton 
  href="/contacto"
  trackingLabel="blog_contact_cta"
  isExternal={false}
>
  Agendar Cita
</CTAButton>
```

## 🚀 Deploy

### Netlify (Recomendado)
```bash
# Build command
npm run build

# Publish directory  
out

# Redirects file
public/_redirects
```

### Vercel
```bash
# Comando automático al hacer push a main
git push origin main
```

## 📱 Funcionalidades Destacadas

### WhatsApp Business
- Mensajes pre-escritos por contexto
- Tracking de interacciones
- Preparado para IA futura

### SEO Optimizado
- Sitemap automático
- Meta tags dinámicos  
- Open Graph para redes sociales
- URLs amigables

### Blog Profesional
- 4 artículos especializados
- Sistema de categorías
- Posts relacionados
- CTAs de conversión

## 🔍 Estructura de URLs

```
/                                    # Landing principal
/blog/                              # Blog principal
/blog/uneros/                       # Categoría uñeros
/blog/pie-diabetico/               # Categoría diabetes
/blog/hongos/                      # Categoría hongos
/blog/uneros/senales-unero-urgente/ # Artículo individual
/faq/                              # Preguntas frecuentes
/tips/                             # Consejos generales
/tips/uneros/                      # Consejos específicos uñeros
/tips/verano/                      # Consejos de verano
```

## 🛠️ Instalación y Configuración del Sistema Híbrido

### **Requisitos Previos**
- Node.js 18+
- npm o yarn
- CMS Headless ejecutándose en puerto 3000

### **Instalación**

```bash
# 1. Clonar el repositorio
git clone [repository-url]
cd PodoclinicLandingPage

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local

# Editar .env.local con:
NEXT_PUBLIC_CMS_URL=http://localhost:3000
NEXT_PUBLIC_CMS_TENANT_ID=zCXAU8FLaGX4UHgnrPfI
```

### **Ejecución en Desarrollo**

```bash
# Terminal 1: Iniciar CMS Headless
cd ../CMSheadless/cms-headless
npm run dev  # Puerto 3000

# Terminal 2: Iniciar PodoclinicLandingPage
cd PodoclinicLandingPage
npm run dev  # Puerto 3001
```

### **Verificación del Sistema**

1. **Blog Principal**: http://localhost:3001/blog
   - Debe mostrar posts estáticos + posts CMS con badge "🔴 EN VIVO"
   - Verificar estadísticas: "X posts locales + Y posts CMS"

2. **Posts Individuales**: 
   - Posts estáticos: Contenido hardcodeado específico
   - Posts CMS: Contenido renderizado dinámicamente

3. **Sistema de Fallback**:
   - Detener CMS (puerto 3000)
   - Blog debe seguir funcionando solo con posts estáticos

### **Comandos Útiles**

```bash
# Verificar estado de puertos
lsof -i :3000  # CMS
lsof -i :3001  # Frontend

# Debug del sistema híbrido
# Abrir DevTools en navegador y revisar logs de consola
# Buscar logs: "🔄 getAllPosts", "📄 Posts estáticos", "🌐 Respuesta CMS"

# Build para producción
npm run build
npm run start
```

### **Troubleshooting Rápido**

**Problema**: Blog aparece vacío
**Solución**: Verificar que ambos servidores estén corriendo y revisar logs de consola

**Problema**: Error "Invalid URL"
**Solución**: Verificar variables de entorno y URLs absolutas en cliente CMS

**Problema**: Posts CMS sin contenido
**Solución**: Verificar que CMSContentRenderer esté importado correctamente

---

## 📚 Documentación Adicional

### **Guías Específicas**
- 📖 [**Guía Completa de Integración CMS**](./GUIA_INTEGRACION_CMS.md) - Documentación técnica detallada
- 🔧 **Sistema Híbrido**: Ver sección anterior en este README
- 🎨 **Componentes de Renderizado**: `src/components/CMSContentRenderer.tsx`

### **Para Desarrolladores**
- **Estructura del Proyecto**: Ver `src/` para organización modular
- **API Routes**: `src/app/api/cms-proxy/` para integración CMS
- **Types**: `src/types/index.ts` para interfaces TypeScript
- **Configuración**: Archivos de configuración en raíz del proyecto

---

## 📄 Licencia

Este proyecto es propiedad de PodoClinic y Dra. Cristina Muñoz.

## 📞 Soporte

Para soporte técnico o modificaciones:
- **Teléfono:** 099 583 2788
- **WhatsApp:** [Contactar](https://wa.me/593995832788)

---

## 🏆 Historial de Versiones

### **v3.0.0 - Sistema Híbrido Completo** (18 Nov 2025)
- ✅ Sistema híbrido de blog con CMS headless
- ✅ Renderizador dinámico de contenido CMS  
- ✅ Proxy API para resolver CORS y SSR
- ✅ Componentes visuales ricos para posts CMS
- ✅ Fallback resiliente a contenido estático
- ✅ TypeScript completo en integración
- ✅ Documentación técnica completa

### **v2.0.0 - Sistema de Blog** (5 Oct 2025)
- ✅ Blog estático implementado
- ✅ Categorización por especialidades
- ✅ SEO optimizado por artículo

### **v1.0.0 - Landing Page Base** 
- ✅ Landing page de conversión
- ✅ Tracking y analytics
- ✅ Formularios de contacto

**Última actualización:** 18 de noviembre de 2025  
**Versión Actual:** 3.0.0 - Sistema Híbrido Completo

---

## 🚀 Deployment

### **Configuración de Netlify**
1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Configurar tracking IDs
4. **Redirects**: Configurados en `public/_redirects`

### **SEO Configurado**
- Meta tags optimizados por página
- Datos estructurados (Medical Clinic Schema)
- Sitemap automático con next-sitemap
- Open Graph para redes sociales

---

## 🔧 Scripts de Desarrollo

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview de build
npm run start

# Linting
npm run lint
```

---

## 📱 Responsive Design

### **Breakpoints Utilizados**
- **Mobile**: < 768px (1 columna, CTAs full-width)
- **Tablet**: 768px - 1024px (2 columnas en grid)
- **Desktop**: > 1024px (3-4 columnas según sección)
- **XL**: > 1280px (Layout máximo optimizado)

### **Optimizaciones Mobile**
- Touch-friendly buttons (min 44px)
- Scroll suave entre secciones
- Modal fullscreen en mobile
- Imágenes optimizadas con Next.js Image

---

## 🎯 Puntos de Conversión

### **12 Puntos de Conversión Identificados**
1. Hero - Botón "Reserva tu Cita GRATIS"
2. Hero - Botón "Consulta por WhatsApp"  
3. About Doctor - "Consultarme directamente"
4. Quiz - CTAs personalizados por resultado
5. Servicios - CTAs por servicio específico
6. Servicios - "Consulta Gratuita" global
7. Testimonials - "Agenda tu consulta ahora"
8. FAQs - Mini-CTAs contextuales por problema
9. FAQs - "Consulta Personalizada" final
10. LocationHub - "Agendar Cita"
11. LiveChat - Redirección inteligente a WhatsApp
12. WhatsApp Button - Siempre visible

---

## 🔄 Versionado y Mantenimiento

### **Git Workflow**
- **Main Branch**: Código de producción
- **Feature Branches**: Para nuevas funcionalidades
- **Commits**: Conventional commits para mejor tracking

### **Actualizaciones Recomendadas**
- **Mensual**: Revisar analytics y optimizar CTAs
- **Trimestral**: Actualizar testimonials y FAQs
- **Semestral**: Revisar diseño y tendencias UX

---

## 📞 Información de Contacto del Proyecto

**Cliente**: PodoClinic Ecuador
**WhatsApp**: +593 995 832 788
**Email**: info@podoclinic.ec
**Ubicación**: Manuel Jordan y Av La Florida, Quito

---

## 📄 Licencia

Este proyecto es propiedad de PodoClinic Ecuador. Desarrollado como landing page de conversión optimizada para servicios médicos podológicos.

---

*Documentación actualizada: Octubre 2025*
*Versión del proyecto: 2.0.0*
