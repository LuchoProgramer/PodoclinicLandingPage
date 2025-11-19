# 🐛 Troubleshooting Guide - Sistema Híbrido CMS

Guía de solución de problemas comunes y debugging del sistema híbrido.

---

## 🔍 Problemas Comunes

### 1. **CMS No Disponible / 503 Error**

**Síntomas:**
- Banner muestra "Solo contenido local"
- Console: `CMS Proxy Error: fetch failed`
- Status 503 en `/api/cms-proxy`

**Soluciones:**

```bash
# Verificar variables de entorno
echo $NEXT_PUBLIC_CMS_URL
echo $NEXT_PUBLIC_CMS_TENANT_ID

# Test manual del CMS
curl -H "Accept: application/json" "https://tu-cms.com/api/posts?tenant=tu-tenant"
```

**Debugging steps:**
1. Verificar que las variables estén en `.env.local` Y en Netlify
2. Probar el endpoint del CMS directamente
3. Revisar logs del CMS Proxy en consola de Netlify

### 2. **Build Failures / Static Export Conflicts**

**Síntomas:**
- Error: `Page "/api/cms-proxy" is incompatible with "output: export"`
- Build falla en Netlify

**Solución:**
```javascript
// next.config.mjs - NO usar output: 'export' con APIs
const nextConfig = {
  // ❌ NO esto: output: 'export',
  images: {
    remotePatterns: [/* ... */],
  },
};
```

### 3. **Imágenes No Cargan**

**Síntomas:**
- Imágenes rotas del CMS
- Error: `Invalid src prop`

**Solución:**
```javascript
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Tu CDN
      },
      {
        protocol: 'https',
        hostname: 'tu-cms-domain.com', // Dominio del CMS
      }
    ],
  },
};
```

### 4. **Hydration Mismatch**

**Síntomas:**
- Warning: `Hydration failed`
- Contenido diferente entre server y client

**Solución:**
```typescript
// Asegurar que el componente sea client-side
'use client';

// O usar dynamic import con ssr: false
import dynamic from 'next/dynamic';

const HybridBlogContent = dynamic(
  () => import('@/components/HybridBlogContent'),
  { ssr: false }
);
```

### 5. **Sitemap No Incluye Posts CMS**

**Síntomas:**
- Sitemap solo muestra posts locales
- Error en generación de sitemap

**Debugging:**
```typescript
// app/sitemap.ts - Agregar logging
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const posts = await getAllPosts();
    console.log('Sitemap posts:', posts.length); // Debug
    
    // ... resto del código
  } catch (error) {
    console.error('Sitemap error:', error);
    // Fallback
  }
}
```

---

## 🔧 Debugging Tools

### **1. CMS Status Checker**

```typescript
// utils/cms-debugger.ts
export async function debugCMSConnection() {
  console.log('🔍 Debugging CMS Connection...');
  
  // 1. Verificar variables
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const tenantId = process.env.NEXT_PUBLIC_CMS_TENANT_ID;
  
  console.log('📋 Environment:', {
    cmsUrl: cmsUrl ? '✅ Set' : '❌ Missing',
    tenantId: tenantId ? '✅ Set' : '❌ Missing',
    nodeEnv: process.env.NODE_ENV
  });
  
  if (!cmsUrl || !tenantId) {
    console.error('❌ Missing required environment variables');
    return;
  }
  
  // 2. Test directo al CMS
  try {
    const directResponse = await fetch(`${cmsUrl}/posts?tenant=${tenantId}`);
    console.log('🌐 Direct CMS:', {
      status: directResponse.status,
      ok: directResponse.ok
    });
  } catch (error) {
    console.error('❌ Direct CMS failed:', error);
  }
  
  // 3. Test del proxy
  try {
    const proxyResponse = await fetch('/api/cms-proxy');
    const data = await proxyResponse.json();
    console.log('🔄 CMS Proxy:', {
      status: proxyResponse.status,
      postsCount: Array.isArray(data) ? data.length : 'No array',
      hasError: !!data.error
    });
  } catch (error) {
    console.error('❌ CMS Proxy failed:', error);
  }
}

// Usar en componente
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    debugCMSConnection();
  }
}, []);
```

### **2. Posts Inspector**

```typescript
// utils/posts-inspector.ts
export async function inspectPosts() {
  const { getAllPosts, getPostStats } = await import('@/data/hybrid-blog-posts');
  
  try {
    const posts = await getAllPosts();
    const stats = await getPostStats();
    
    console.table({
      'Total Posts': stats.totalPosts,
      'Local Posts': stats.localPosts,
      'CMS Posts': stats.cmsPosts,
      'Status': stats.status
    });
    
    console.log('📝 Posts by source:');
    posts.forEach(post => {
      console.log(`${post.source === 'cms' ? '🌐' : '📄'} ${post.title} (${post.source})`);
    });
    
  } catch (error) {
    console.error('Posts inspection failed:', error);
  }
}
```

### **3. Build Analyzer**

```bash
# Analizar el build
npm run build 2>&1 | tee build-log.txt

# Buscar errores específicos
grep -i "error\|failed\|warning" build-log.txt

# Verificar tamaño de páginas
grep -A 10 "Route (app)" build-log.txt
```

---

## 📊 Monitoring en Producción

### **1. Health Check Endpoint**

```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';
import { getPostStats } from '@/data/hybrid-blog-posts';

export async function GET() {
  try {
    const stats = await getPostStats();
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      cms: {
        available: stats.status === 'cms-available',
        posts: stats.cmsPosts,
        status: stats.status
      },
      local: {
        posts: stats.localPosts
      },
      total: stats.totalPosts
    });
    
  } catch (error) {
    return NextResponse.json({
      status: 'degraded',
      timestamp: new Date().toISOString(),
      error: 'Health check failed'
    }, { status: 503 });
  }
}
```

### **2. Error Reporting**

```typescript
// utils/error-reporter.ts
interface ErrorReport {
  timestamp: string;
  component: string;
  error: string;
  context?: any;
}

export function reportError(component: string, error: any, context?: any) {
  const report: ErrorReport = {
    timestamp: new Date().toISOString(),
    component,
    error: error.message || String(error),
    context
  };
  
  // En producción, enviar a servicio de logging
  if (process.env.NODE_ENV === 'production') {
    console.error('[ERROR-REPORT]', JSON.stringify(report));
    // Aquí podrías enviar a Sentry, LogRocket, etc.
  } else {
    console.error('🚨 Error Report:', report);
  }
}

// Uso en componentes
try {
  const posts = await getAllPosts();
} catch (error) {
  reportError('HybridBlogContent', error, { action: 'loadPosts' });
}
```

---

## 🛠️ Development Tools

### **1. CMS Mock para Testing**

```typescript
// utils/cms-mock.ts
export const mockCMSResponse = [
  {
    id: 'cms-test-1',
    title: 'Mock CMS Post',
    excerpt: 'Este es un post de prueba del CMS',
    image: 'https://via.placeholder.com/800x400',
    date: '2024-01-15',
    category: 'Test',
    slug: 'mock-cms-post'
  }
];

// En desarrollo, usar mock si CMS no está disponible
export async function fetchWithMockFallback(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('CMS not available');
    return await response.json();
  } catch (error) {
    console.warn('Using mock CMS data for development');
    return mockCMSResponse;
  }
}
```

### **2. Environment Validator**

```typescript
// utils/env-validator.ts
export function validateEnvironment() {
  const required = [
    'NEXT_PUBLIC_CMS_URL',
    'NEXT_PUBLIC_CMS_TENANT_ID'
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing environment variables:', missing);
    return false;
  }
  
  console.log('✅ Environment variables validated');
  return true;
}

// Validar al inicio de la app
if (process.env.NODE_ENV === 'development') {
  validateEnvironment();
}
```

---

## 🔄 Recovery Procedures

### **1. CMS Completamente Caído**

```typescript
// Activar modo de emergencia manualmente
const FORCE_EMERGENCY_MODE = false; // Cambiar a true si necesario

export async function getPostStatsWithFallback(): Promise<PostStats> {
  if (FORCE_EMERGENCY_MODE) {
    return {
      totalPosts: EMERGENCY_DATA.posts.length,
      localPosts: 0,
      cmsPosts: 0,
      status: 'emergency',
      message: 'Sistema en modo de emergencia activado manualmente'
    };
  }
  
  // ... resto del código normal
}
```

### **2. Rollback a Solo Local**

```typescript
// Temporal: usar solo posts locales
export async function getAllPosts(): Promise<BlogPost[]> {
  // Comentar temporalmente la llamada al CMS
  // const cmsPosts = await fetchCMSPosts();
  
  return localBlogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
```

### **3. Quick Fixes**

```bash
# Re-deploy rápido
git add . && git commit -m "hotfix: emergency mode" && git push

# O usar deploy directo de Netlify
netlify deploy --prod --dir=.next

# Rollback a commit anterior
git reset --hard HEAD~1
git push --force-with-lease
```

---

## 📋 Checklist de Debugging

Cuando algo falla, seguir este orden:

- [ ] **Variables de entorno** - ¿Están configuradas?
- [ ] **CMS endpoint** - ¿Responde directamente?
- [ ] **Proxy funcionando** - ¿`/api/cms-proxy` da respuesta?
- [ ] **Posts locales** - ¿Se cargan sin CMS?
- [ ] **Build exitoso** - ¿Compila sin errores?
- [ ] **Sitemap generado** - ¿Incluye todos los posts?
- [ ] **Imágenes cargando** - ¿Dominios configurados?
- [ ] **Production deploy** - ¿Variables en Netlify?

---

**🚑 ¡Con esta guía puedes resolver cualquier problema que surja!**