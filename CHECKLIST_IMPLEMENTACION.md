# 📋 Checklist de Implementación - Sistema Híbrido CMS

## 🎯 Guía Rápida para Nuevos Proyectos

Este checklist te guiará paso a paso para implementar el sistema híbrido de blog en cualquier proyecto nuevo basado en la experiencia exitosa de PodoclinicLandingPage.

---

## ✅ Fase 1: Configuración Inicial

### 📋 Pre-requisitos
- [ ] Node.js 18+ instalado
- [ ] Proyecto Next.js 16+ configurado
- [ ] CMS Headless disponible y configurado
- [ ] Tenant ID del CMS obtenido
- [ ] Variables de entorno definidas

### 🔧 Setup Básico
- [ ] Crear `.env.local` con variables CMS
- [ ] Instalar dependencias necesarias (`lucide-react`, etc.)
- [ ] Configurar estructura de carpetas híbrida
- [ ] Definir interfaces TypeScript base

```bash
# Variables requeridas en .env.local
NEXT_PUBLIC_CMS_URL=http://localhost:3000
NEXT_PUBLIC_CMS_TENANT_ID=tu_tenant_id_aqui
```

---

## ✅ Fase 2: Componentes Core

### 🔌 Cliente CMS
- [ ] Crear `src/lib/[proyecto]-cms-client.ts`
- [ ] Implementar clase cliente personalizada
- [ ] Configurar mapeo de categorías específico del proyecto
- [ ] Implementar función de conversión de formato
- [ ] Configurar URLs absolutas para SSR
- [ ] Agregar manejo de errores

**Template**:
```typescript
// src/lib/[proyecto]-cms-client.ts
class ProyectoCMSClient {
  private mapCMSCategoryToProyecto(cmsCategory: string): string {
    const categoryMap: Record<string, string> = {
      // Personalizar según tu proyecto
      'categoria_cms': 'categoria_local',
    };
    return categoryMap[cmsCategory] || cmsCategory;
  }
}
```

### 🔄 Sistema Híbrido
- [ ] Crear `src/data/hybrid-blog-posts.ts`
- [ ] Implementar función `getAllPosts()` híbrida
- [ ] Configurar sistema de fallback a contenido estático
- [ ] Implementar funciones auxiliares (getBySlug, getByCategory, etc.)
- [ ] Agregar logging para debug
- [ ] Configurar ordenamiento por fecha

### 🎨 Renderizador de Contenido
- [ ] Crear `src/components/CMSContentRenderer.tsx`
- [ ] Definir componentes visuales base (AlertBox, Lists, etc.)
- [ ] Implementar contenido específico por categoría del proyecto
- [ ] Configurar CTAs personalizados
- [ ] Agregar estilos específicos del proyecto

---

## ✅ Fase 3: API y Routing

### 🌐 Proxy API
- [ ] Crear `src/app/api/cms-proxy/route.ts`
- [ ] Implementar handler GET para lista de posts
- [ ] Implementar handler GET para post individual
- [ ] Configurar manejo de parámetros (limit, id)
- [ ] Agregar manejo robusto de errores
- [ ] Configurar headers apropiados

### 🛣️ Routing Dinámico
- [ ] Actualizar `src/app/blog/page.tsx` (página principal)
- [ ] Actualizar `src/app/blog/[category]/page.tsx` (categorías)
- [ ] Actualizar `src/app/blog/[category]/[slug]/page.tsx` (posts individuales)
- [ ] Implementar detección automática de origen (estático vs CMS)
- [ ] Configurar renderizado condicional
- [ ] Actualizar generateStaticParams para funciones híbridas

---

## ✅ Fase 4: Componentes UI

### 📱 Componente Principal del Blog
- [ ] Actualizar/crear componente principal del blog
- [ ] Implementar loading states
- [ ] Configurar estadísticas híbridas (X estáticos + Y CMS)
- [ ] Agregar badges de identificación ("EN VIVO" para CMS)
- [ ] Implementar manejo de errores en UI

### 🏷️ Sistema de Identificación
- [ ] Implementar badge "🔴 EN VIVO" para posts CMS
- [ ] Configurar estilos diferenciados
- [ ] Agregar indicadores en listados
- [ ] Configurar tooltips informativos

---

## ✅ Fase 5: TypeScript y Types

### 📝 Definición de Interfaces
- [ ] Actualizar interface `BlogPost` con campo `isCMSPost?`
- [ ] Definir interfaces para respuestas CMS
- [ ] Configurar types para componentes de renderizado
- [ ] Agregar types para funciones híbridas

**Interfaces base requeridas**:
```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  // ... otros campos
  isCMSPost?: boolean; // ¡Importante!
}
```

### 🔍 Validación de Types
- [ ] Verificar que no hay errores TypeScript
- [ ] Probar compilación exitosa
- [ ] Validar todos los componentes híbridos
- [ ] Verificar imports correctos

---

## ✅ Fase 6: Testing y Validación

### 🧪 Testing Funcional
- [ ] **Con CMS activo**:
  - [ ] Blog principal muestra posts mixtos
  - [ ] Posts CMS tienen badge "EN VIVO"
  - [ ] Estadísticas muestran conteo correcto
  - [ ] Posts CMS renderizan con contenido visual
  - [ ] Navegación funciona correctamente
- [ ] **Con CMS inactivo** (fallback):
  - [ ] Blog muestra solo posts estáticos
  - [ ] No hay errores en consola
  - [ ] Funcionalidad básica mantenida
  - [ ] Mensaje apropiado de estado CMS

### 🔧 Debug y Logging
- [ ] Verificar logs en consola del navegador
- [ ] Confirmar llamadas API exitosas
- [ ] Validar conversión de formatos
- [ ] Probar manejo de errores

### 📊 Performance
- [ ] Verificar tiempos de carga aceptables
- [ ] Confirmar caching funcionando (5min revalidation)
- [ ] Probar en modo development y production
- [ ] Validar SSR funcionando correctamente

---

## ✅ Fase 7: SEO y Metadata

### 🎯 SEO Dinámico
- [ ] Configurar generateMetadata para posts híbridos
- [ ] Implementar metadata específica para posts CMS
- [ ] Verificar canonical URLs correctas
- [ ] Configurar Open Graph para ambos tipos de contenido

### 🗺️ Sitemaps y robots.txt
- [ ] Actualizar generación de sitemap incluyendo posts CMS
- [ ] Verificar robots.txt apropiado
- [ ] Configurar structured data si aplica

---

## ✅ Fase 8: Documentación

### 📚 Documentación del Proyecto
- [ ] Actualizar README.md con información del sistema híbrido
- [ ] Documentar configuración específica del proyecto
- [ ] Crear guía de troubleshooting específica
- [ ] Documentar diferencias vs implementación base

### 👨‍💻 Documentación para Desarrolladores
- [ ] Comentar código complejo
- [ ] Documentar funciones principales
- [ ] Crear ejemplos de uso
- [ ] Documentar configuración de desarrollo

---

## ✅ Fase 9: Deployment y Producción

### 🚀 Configuración de Producción
- [ ] Configurar variables de entorno de producción
- [ ] Actualizar URLs del CMS para producción
- [ ] Configurar caching apropiado
- [ ] Verificar build exitoso

### 🔍 Testing en Producción
- [ ] Probar funcionalidad híbrida en producción
- [ ] Verificar performance en ambiente real
- [ ] Validar fallbacks en caso de problemas CMS
- [ ] Confirmar analytics y tracking funcionando

---

## ✅ Fase 10: Mantenimiento y Monitoreo

### 📈 Monitoreo
- [ ] Configurar alertas para fallos de CMS
- [ ] Implementar logging de errores
- [ ] Monitorear performance del sistema híbrido
- [ ] Configurar métricas de uso

### 🔄 Mantenimiento
- [ ] Documentar proceso de actualización
- [ ] Crear guía de troubleshooting
- [ ] Planificar actualizaciones regulares
- [ ] Documentar proceso de backup

---

## 🎯 Validación Final

### ✅ Checklist de Completitud
- [ ] ✅ Sistema híbrido funcionando 100%
- [ ] ✅ Fallback resiliente validado
- [ ] ✅ UI/UX consistente entre tipos de contenido
- [ ] ✅ Performance optimizada
- [ ] ✅ SEO configurado correctamente
- [ ] ✅ TypeScript sin errores
- [ ] ✅ Documentación completa
- [ ] ✅ Testing exhaustivo completado
- [ ] ✅ Deployment exitoso
- [ ] ✅ Monitoreo configurado

---

## 🏆 Criterios de Éxito

### KPIs Técnicos
- **Uptime**: 99.9% incluso con fallos de CMS (fallback)
- **Performance**: Tiempo de carga < 3 segundos
- **SEO**: Todas las páginas indexables
- **TypeScript**: 0 errores de compilación
- **Testing**: 100% de casos de uso cubiertos

### KPIs de Usuario
- **Experiencia Uniforme**: No diferencia perceptible entre tipos de contenido
- **Identificación Clara**: Posts CMS claramente marcados
- **Funcionalidad**: Todas las features trabajando sin problemas
- **Responsive**: Funcional en todos los dispositivos

---

## 📞 Soporte y Recursos

### 🔗 Links Útiles
- [Guía Completa de Integración](./GUIA_INTEGRACION_CMS.md)
- [Documentación PodoclinicLandingPage](./README.md)
- [Repositorio CMS Headless](../CMSheadless/)

### ❓ Troubleshooting Rápido
- **Blog vacío**: Verificar servidores activos y logs de consola
- **Error "Invalid URL"**: Revisar URLs absolutas en cliente CMS
- **Posts CMS sin contenido**: Verificar CMSContentRenderer importado
- **TypeScript errors**: Validar interfaces y imports

---

**Checklist creado**: 18 de noviembre de 2025  
**Basado en**: PodoclinicLandingPage v3.0.0  
**Para proyectos**: Sistema híbrido CMS + Next.js

> 💡 **Tip**: Guarda este checklist y márcalo paso a paso en cada nuevo proyecto para garantizar implementación exitosa del sistema híbrido.