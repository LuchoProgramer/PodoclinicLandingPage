# PodoClinic Landing Page - Documentación

## 📋 Información General

**Proyecto:** Landing Page para PodoClinic  
**Doctora:** Dra. Cristina Muñoz  
**Framework:** Next.js 15.5.3 con App Router  
**Última actualización:** 5 de octubre de 2025

## 🎉 Nuevas Características Implementadas (Octubre 2025)

### 📱 Sistema de Navegación Móvil Moderno
- **BottomNavigation.js** - Navegación inferior optimizada para móviles
- **Smooth scroll** - Transiciones suaves entre secciones
- **Responsive design** - Adapta automáticamente a dispositivos
- **WhatsApp integrado** - Botón flotante en navegación móvil

### 🚀 SEO Avanzado para Páginas Dinámicas
- **Schema.org completo** - Datos estructurados en todas las páginas
- **Canonical URLs** - Prevención de contenido duplicado
- **Open Graph avanzado** - Metadatos ricos para redes sociales
- **Breadcrumbs estructurados** - Navegación y SEO mejorado
- **Metadata específico por categoría** - Títulos y descripciones optimizados

### 🎯 Mejoras de UX y Conversión
- **Z-index jerarquía corregida** - Sin superposición de elementos
- **Navegación consistente** - Mismo layout en blog y página principal
- **Analytics tracking mejorado** - Seguimiento detallado de interacciones
- **Mobile-first approach** - Diseño optimizado para dispositivos móviles  

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
src/
├── app/                    # App Router de Next.js
│   ├── blog/              # Sistema de blog (NUEVO)
│   ├── faq/               # Página de preguntas frecuentes
│   ├── tips/              # Consejos de cuidado
│   ├── servicios/         # Páginas de servicios
│   └── api/               # API routes
├── components/            # Componentes reutilizables
├── data/                  # Datos estáticos y configuraciones
└── styles/               # Estilos globales
```

## 🎯 Componentes Principales

### Eliminados ❌
- **BrIANLogo.js** - Componente del chatbot eliminado
- **Chatbot/** - Sistema completo de chatbot BrIAN eliminado
- **LiveChat** - Componente de chat en tiempo real eliminado

### Optimizados ✅
- **WhatsAppButton.js** - Botón flotante optimizado (único chat)
- **Navbar.js** - Incluye navegación al blog
- **Testimonios** - CTA buttons corregidos

### Nuevos 🆕
- **BlogButtons.js** - Componentes cliente para tracking
- **BottomNavigation.js** - Navegación móvil moderna (Octubre 2025)
- **Sistema de Blog completo**
- **SEO avanzado con Schema.org** - Datos estructurados automáticos

## 📝 Sistema de Blog

### Características Implementadas

#### 🗂️ Estructura del Blog
```
/blog/                           # Página principal del blog
├── [category]/                  # Páginas de categorías dinámicas
│   ├── uneros/                 # Categoría: Uñeros
│   ├── pie-diabetico/          # Categoría: Diabetes
│   └── hongos/                 # Categoría: Hongos
└── [category]/[slug]/          # Artículos individuales
```

#### 📊 Base de Datos de Posts
**Archivo:** `/src/data/blog/posts.js`

**Funciones disponibles:**
- `getAllPosts()` - Obtiene todos los posts
- `getPostBySlug(slug)` - Obtiene post por slug
- `getPostsByCategory(category)` - Filtra por categoría
- `getAllCategories()` - Lista todas las categorías
- `getFeaturedPosts()` - Posts destacados
- `getRecentPosts(limit)` - Posts recientes

#### 📰 Artículos Creados
1. **Señales de Uñero Urgente** - Artículo completo con guía de emergencia
2. **Mitos sobre Remedios Caseros** - Desmintiendo tratamientos peligrosos
3. **Cuidado de Pies Diabéticos** - Guía preventiva especializada
4. **Tratamiento de Hongos** - Opciones de tratamiento efectivo

### 🎨 Características de Diseño

#### Página Principal del Blog (`/blog/`)
- **Posts Destacados** - Carrusel con artículos principales
- **Navegación por Categorías** - Filtrado intuitivo
- **Artículos Recientes** - Grid con últimas publicaciones
- **Estadísticas Profesionales** - Credibilidad y experiencia
- **CTAs de Conversión** - Botones para agendar citas

#### Páginas de Artículos (`/blog/[category]/[slug]/`)
- **Breadcrumbs** - Navegación contextual
- **Metadata SEO** - Optimización automática
- **Artículos Relacionados** - Sugerencias por categoría
- **CTAs Inteligentes** - Botones con tracking analytics
- **Compartir en RRSS** - Iconos de redes sociales

## 🔧 Componentes Técnicos

### BlogButtons.js - Componentes Cliente

#### WhatsAppButton
```jsx
<WhatsAppButton 
  href="enlace_whatsapp"
  trackingLabel="etiqueta_para_analytics"
  className="estilos_css"
>
  Contenido del botón
</WhatsAppButton>
```

#### CTAButton
```jsx
<CTAButton 
  href="enlace_destino"
  trackingLabel="etiqueta_para_analytics"
  isExternal={true/false}
  className="estilos_css"
>
  Contenido del botón
</CTAButton>
```

**Tracking Incluido:**
- Google Analytics (gtag)
- Facebook Pixel (fbq)
- TikTok Pixel (ttq)

## � Mapas de Calor (Microsoft Clarity)

### Configuración Actual
- **ID de Clarity:** o4qcj2k9pm
- **Herramienta:** Microsoft Clarity (Gratuita)
- **Estado:** Activo y recopilando datos

### Características Implementadas

#### 🖱️ Click Heatmaps
- **Función:** Muestra dónde hacen clic los usuarios
- **Beneficio:** Optimizar ubicación de CTAs y botones
- **Aplicación en PodoClinic:**
  - Optimizar botón de WhatsApp
  - Mejorar CTAs de emergencia
  - Analizar clicks en servicios

#### 📜 Scroll Heatmaps
- **Función:** Muestra hasta dónde bajan los usuarios
- **Beneficio:** Identificar contenido más leído
- **Aplicación en PodoClinic:**
  - Optimizar longitud de artículos del blog
  - Reposicionar información importante
  - Mejorar estructura de la landing

#### 🎯 Move Heatmaps
- **Función:** Rastrea movimiento del mouse
- **Beneficio:** Entender patrones de atención
- **Aplicación en PodoClinic:**
  - Optimizar diseño de testimonios
  - Mejorar sección "Conoce a la Doctora"
  - Analizar interacción con servicios

#### 📹 Session Recordings
- **Función:** Grabaciones reales de navegación
- **Beneficio:** Ver experiencia completa del usuario
- **Aplicación en PodoClinic:**
  - Identificar puntos de confusión
  - Optimizar proceso de contacto
  - Mejorar navegación móvil

### Acceso a los Datos

#### Dashboard de Clarity
1. **URL:** https://clarity.microsoft.com/
2. **Login:** Cuenta asociada al proyecto
3. **Proyecto:** PodoClinic (ID: o4qcj2k9pm)

#### Métricas Disponibles
- **Dead clicks** - Clicks en elementos no interactivos
- **Rage clicks** - Clicks repetidos por frustración
- **Scroll reach** - Porcentaje de página vista
- **Session duration** - Tiempo en página
- **Page views** - Páginas más visitadas

### Insights Esperados para PodoClinic

#### 📊 Optimización de Conversión
- ¿Los usuarios encuentran fácilmente el botón de emergencia?
- ¿Qué servicios generan más interés?
- ¿El formulario de contacto tiene fricción?

#### 📱 Experiencia Móvil
- ¿La navegación móvil es intuitiva?
- ¿El botón de WhatsApp está bien posicionado?
- ¿Los textos son legibles en móvil?

#### 📝 Contenido del Blog
- ¿Los usuarios leen artículos completos?
- ¿Qué artículos generan más engagement?
- ¿Los CTAs del blog son efectivos?

#### 👩‍⚕️ Información de la Doctora
- ¿Los usuarios leen la información profesional?
- ¿La foto genera confianza?
- ¿Las certificaciones son importantes?

### Implementación Técnica

#### Script de Clarity
```javascript
// Microsoft Clarity - Layout.js
<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "o4qcj2k9pm");
  `}
</Script>
```

#### Content Security Policy
```javascript
// CSP actualizado para incluir Clarity
script-src 'self' 'unsafe-inline' 'unsafe-eval' ... https://www.clarity.ms
connect-src 'self' ... https://www.clarity.ms
img-src 'self' data: https: ... https://www.clarity.ms
```

### Próximos Pasos con los Datos

#### Semana 1-2: Recopilación Inicial
- Permitir acumulación de datos base
- Identificar patrones generales
- Detectar problemas evidentes

#### Semana 3-4: Análisis y Optimización
- Análizar heatmaps por sección
- Optimizar elementos con baja interacción
- Mejorar CTAs basado en datos

#### Mes 2+: Iteración Continua
- A/B testing basado en insights
- Optimización constante de conversión
- Mejoras en UX basadas en comportamiento real

### Privacidad y Compliance

#### GDPR/LOPD Compliance
- Clarity no recopila información personal
- Solo patrones de comportamiento anónimos
- Compatible con políticas de privacidad médica

#### Datos Seguros
- Microsoft Clarity es GDPR compliant
- Datos encriptados en tránsito y reposo
- No almacena información sensible

---

## 🚀 SEO y Optimización

### SEO Avanzado (Actualizado Octubre 2025)
- **Schema.org completo** - Article, Blog, CollectionPage, BreadcrumbList
- **Canonical URLs** - URLs canónicas para evitar duplicados
- **Open Graph avanzado** - Metadatos completos con imágenes
- **Twitter Cards** - Optimización para redes sociales
- **Metadata dinámico** - Títulos y descripciones únicos por página
- **Breadcrumbs estructurados** - Navegación visual y SEO
- **Robots meta** - Control de indexación por página

### Configuración SEO Tradicional
- **Sitemap automático** - Generado con next-sitemap
- **Meta tags dinámicos** - Por artículo y categoría
- **URLs amigables** - Estructura semántica

### Tracking y Analytics
- **Google Analytics 4** - Eventos personalizados
- **Facebook Pixel** - Conversiones y remarketing
- **TikTok Pixel** - Tracking de audiencia
- **Google Tag Manager** - Gestión centralizada
- **Microsoft Clarity** - Mapas de calor y grabaciones de sesiones

## 🎯 Personalizaciones

### Doctora: Dra. Cristina Muñoz
- Todas las referencias actualizadas
- Número de contacto: 099 583 2788
- WhatsApp Business integrado
- Horarios: Lun-Vie 8:00-18:00 | Sáb 8:00-14:00

### Colores y Branding
- **Color principal:** #60BEC3 (azul turquesa)
- **Color de emergencia:** #DC2626 (rojo)
- **Favicon:** Logo "P" personalizado en SVG

## 📱 Navegación y UX Móvil (Octubre 2025)

### BottomNavigation Component
```jsx
// Componente: /src/components/BottomNavigation.js
<BottomNavigation />
```

#### Características:
- **5 secciones principales:**
  - 🏠 Inicio - Scroll suave al hero
  - 🩺 Servicios - Navegación a servicios
  - 📝 Blog - Link directo al blog
  - 👩‍⚕️ Doctora - Scroll a información médica
  - 📍 Contacto - Scroll a información de contacto

- **WhatsApp flotante:** Botón verde integrado con mensaje contextual
- **Detección de sección activa:** Destaca la sección actual
- **Analytics tracking:** Monitoreo de todas las interacciones
- **Responsive:** Solo visible en dispositivos móviles
- **Z-index optimizado:** Sin conflictos con otros elementos

#### Funcionalidades Técnicas:
```javascript
// Smooth scroll implementation
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
};

// Active section detection
const [activeSection, setActiveSection] = useState('inicio');

// Analytics tracking
const trackNavClick = (section) => {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "bottom_nav_click", {
      section_name: section,
      event_category: "navigation"
    });
  }
  // Facebook & TikTok Pixel tracking
};
```

### Mejoras de UX Implementadas

#### Z-index Hierarchy:
- `z-50`: BottomNavigation (máxima prioridad en móviles)
- `z-40`: Navbar desktop
- `z-30`: WhatsApp button desktop
- `z-20`: Elementos flotantes secundarios

#### Responsive Behavior:
- **Desktop:** Navbar tradicional + WhatsApp flotante
- **Mobile:** BottomNavigation + WhatsApp integrado
- **Tablet:** Adapta según ancho de pantalla

#### Section IDs Implementados:
```html
<!-- IDs agregados para navegación suave -->
<section id="inicio">Hero Section</section>
<section id="servicios">Servicios Section</section>
<section id="doctora">AboutDoctor Section</section>
<section id="contacto">LocationHub Section</section>
```

## 📊 Schema.org y Datos Estructurados

### Tipos de Schema Implementados

#### 1. Article Schema (Posts del Blog)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título del artículo",
  "description": "Descripción del artículo",
  "author": {
    "@type": "Person",
    "name": "Dra. Cristina Muñoz",
    "jobTitle": "Especialista en Podología"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PodoClinicec",
    "logo": "URL_del_logo"
  },
  "datePublished": "2025-10-05",
  "mainEntityOfPage": "URL_canónica",
  "wordCount": "número_de_palabras",
  "inLanguage": "es-EC"
}
```

#### 2. CollectionPage Schema (Categorías)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Artículos sobre Uñeros",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "Article",
        "position": 1,
        "url": "URL_del_artículo",
        "headline": "Título"
      }
    ]
  }
}
```

#### 3. Blog Schema (Página Principal)
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Podológico PodoClinicec",
  "author": {
    "@type": "Person",
    "name": "Dra. Cristina Muñoz"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PodoClinicec"
  }
}
```

#### 4. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://podoclinicec.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://podoclinicec.com/blog"
    }
  ]
}
```

#### 5. MedicalClinic Schema
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "PodoClinicec",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manuel Jordan y Av La Florida",
    "addressLocality": "Quito",
    "addressRegion": "Pichincha",
    "addressCountry": "EC"
  },
  "telephone": "+593995832788",
  "medicalSpecialty": "Podiatry"
}
```

### Metadata Avanzado por Categoría

#### Uñeros
- **Title:** "Tratamiento de Uñeros en Quito | Podoclinic"
- **Description:** "Especialistas en tratamiento de uñeros en Quito..."
- **Keywords:** "uñeros Quito, tratamiento uñeros, onicocriptosis"

#### Pie Diabético
- **Title:** "Cuidado del Pie Diabético | Especialistas en Quito"
- **Description:** "Atención especializada para pie diabético..."
- **Keywords:** "pie diabético Quito, cuidado pie diabético, diabetes podología"

#### Hongos
- **Title:** "Tratamiento de Hongos en Pies | Podoclinic Quito"
- **Description:** "Eliminación efectiva de hongos en pies y uñas..."
- **Keywords:** "hongos pies Quito, onicomicosis, hongos uñas"

### Canonical URLs y Open Graph

#### Implementación Automática:
```javascript
// En cada página dinámica
const baseUrl = 'https://podoclinicec.com';
const canonicalUrl = `${baseUrl}/blog/${category}/${slug}`;

export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "...",
      description: "...",
      url: canonicalUrl,
      type: 'article',
      images: [{
        url: "imagen_optimizada.jpg",
        width: 1200,
        height: 630
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: "...",
      description: "..."
    }
  };
}
```

### Botones de Contacto Inteligentes
- **Contexto automático** - Mensajes pre-escritos según la página
- **Tracking completo** - Monitoreo de todas las interacciones
- **WhatsApp Business** - Preparado para IA futura

### Llamadas a la Acción (CTAs)
- **Emergencias** - Botón rojo destacado en navbar
- **Consultas normales** - Botones azules en contenido
- **Blog engagement** - CTAs específicos por artículo

## 🔄 Flujo de Trabajo

### Agregar Nuevo Artículo

1. **Editar:** `/src/data/blog/posts.js`
   ```js
   {
     id: "nuevo-id",
     title: "Título del Artículo",
     slug: "url-amigable",
     category: "categoria-existente",
     excerpt: "Descripción breve...",
     content: "Contenido completo...",
     image: "url-de-imagen",
     date: "DD de Mes de YYYY",
     author: "Dra. Cristina Muñoz",
     featured: true/false,
     tags: ["tag1", "tag2"]
   }
   ```

2. **Crear página (opcional):** `/src/app/blog/[category]/[slug]/page.js`
   - Solo si necesitas contenido muy personalizado
   - Normalmente usa el template dinámico

3. **Build y deploy:**
   ```bash
   npm run build
   npm run export
   ```

### Actualizar Información de Contacto

**Archivos a modificar:**
- `/src/components/Navbar.js` - Teléfono en header
- `/src/components/WhatsAppButton.js` - Número flotante
- `/src/components/BlogButtons.js` - Enlaces de artículos
- `/src/components/Contacto.js` - Información de contacto

## 🐛 Resolución de Problemas Comunes

### Error: "ArrowRight is not defined"
**Causa:** Icono de Lucide React no importado  
**Solución:** Agregar al import: `import { ..., ArrowRight } from "lucide-react"`

### Error: "Event handlers cannot be passed to Client Component"
**Causa:** onClick en componente de servidor  
**Solución:** Usar componentes de `/src/components/BlogButtons.js`

### Build falla en generateStaticParams
**Causa:** Funciones del blog no exportadas  
**Solución:** Verificar exports en `/src/data/blog/posts.js`

### Favicon no aparece
**Causa:** Cache del navegador  
**Solución:** Configurado en `/src/app/layout.js` con favicon.svg

## 📊 Métricas y Monitoreo

### KPIs del Blog
- **Páginas vistas** - Google Analytics
- **Tiempo en página** - Engagement
- **CTR de CTAs** - Conversión
- **Leads generados** - WhatsApp clicks

### Eventos Trackeados
- `click_blog_cta` - Clicks en botones del blog
- `click_whatsapp` - Interacciones WhatsApp
- `page_view` - Vistas de página
- `contact_form` - Envíos de formulario

## 🔮 Roadmap Futuro

### Próximas Mejoras (Actualizadas)
- [ ] Más artículos de blog (contenido médico)
- [ ] Sistema de comentarios en blog
- [ ] Newsletter subscription
- [ ] Búsqueda en el blog
- [ ] PWA (Progressive Web App) para móviles
- [ ] WhatsApp Business API con IA
- [ ] Testimonios dinámicos
- [ ] Sistema de citas online
- [ ] Optimización de imágenes con WebP
- [ ] Lazy loading avanzado

### Mantenimiento Regular (Ampliado)
- [ ] Actualizar contenido médico mensualmente
- [ ] Revisar métricas de heatmaps (Microsoft Clarity)
- [ ] Optimizar Core Web Vitals
- [ ] Monitorear Schema.org en Google Search Console
- [ ] Actualizar dependencias de Next.js
- [ ] Backup automático de datos del blog
- [ ] Testing de navegación móvil
- [ ] Verificar canonical URLs
- [ ] Auditoría SEO trimestral

**Última revisión:** 5 de octubre de 2025

## 🎯 Resumen de Avances (Octubre 2025)

### ✅ Características Completadas
1. **Sistema de navegación móvil moderno** con BottomNavigation
2. **SEO avanzado** con Schema.org completo en todas las páginas dinámicas
3. **Optimización UX** con smooth scroll y detección de sección activa
4. **Integración consistente** de LayoutClient en todas las páginas del blog
5. **Mapas de calor** con Microsoft Clarity implementados y funcionando
6. **Analytics completo** con tracking de todas las interacciones
7. **Responsive design** optimizado para todos los dispositivos
8. **Breadcrumbs estructurados** para SEO y navegación

### 📈 Métricas SEO Mejoradas
- **Rich Snippets:** Implementados con Schema.org
- **Core Web Vitals:** Optimizados con generación estática
- **Mobile Score:** Mejorado significativamente con bottom navigation
- **Canonical URLs:** Implementados en todas las páginas dinámicas
- **Open Graph:** Metadatos completos para redes sociales

### 🔗 URLs Generadas Automáticamente
- `/blog` - Página principal del blog
- `/blog/uneros` - Categoría de uñeros  
- `/blog/pie-diabetico` - Categoría de pie diabético
- `/blog/hongos` - Categoría de hongos
- `/blog/[category]/[slug]` - Artículos individuales

Todas con SEO optimizado y Schema.org completo.

---

**Contacto de Desarrollo:**  
Para dudas técnicas o modificaciones, contactar al equipo de desarrollo.

**Estado del Proyecto:** ✅ Producción - Totalmente Optimizado  
**Próxima Revisión:** Noviembre 2025