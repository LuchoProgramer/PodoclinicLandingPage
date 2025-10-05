# PodoClinic Landing Page - Documentación

## 📋 Información General

**Proyecto:** Landing Page para PodoClinic  
**Doctora:** Dra. Cristina Muñoz  
**Framework:** Next.js 15.5.3 con App Router  
**Última actualización:** 5 de octubre de 2025  

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
- **Sistema de Blog completo**

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

## 🚀 SEO y Optimización

### Configuración SEO
- **Sitemap automático** - Generado con next-sitemap
- **Meta tags dinámicos** - Por artículo y categoría
- **Open Graph** - Optimización para redes sociales
- **URLs amigables** - Estructura semántica
- **Breadcrumbs** - Navegación estructurada

### Tracking y Analytics
- **Google Analytics 4** - Eventos personalizados
- **Facebook Pixel** - Conversiones y remarketing
- **TikTok Pixel** - Tracking de audiencia
- **Google Tag Manager** - Gestión centralizada

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

## 📱 Funcionalidades de Conversión

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

### Próximas Mejoras
- [ ] Más artículos de blog (contenido médico)
- [ ] Sistema de comentarios
- [ ] Newsletter subscription
- [ ] Búsqueda en el blog
- [ ] WhatsApp Business API con IA
- [ ] Testimonios dinámicos
- [ ] Sistema de citas online

### Mantenimiento Regular
- [ ] Actualizar contenido médico
- [ ] Revisar métricas mensuales
- [ ] Optimizar velocidad de carga
- [ ] Actualizar dependencias
- [ ] Backup de datos

---

**Contacto de Desarrollo:**  
Para dudas técnicas o modificaciones, contactar al equipo de desarrollo.

**Última revisión:** 5 de octubre de 2025