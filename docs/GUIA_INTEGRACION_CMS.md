# 📚 Guía Completa: Integración CMS Headless con Next.js

## 🎯 Objetivo
Integrar cualquier sitio web Next.js con nuestro CMS Headless multi-tenant, permitiendo gestionar contenido de forma dinámica sin perder el contenido estático existente.

---

## 🚀 Paso 1: Preparación del CMS Headless

### 1.1 Levantar el CMS
```bash
cd /Users/luisviteri/Proyectos/CMSheadless/cms-headless
npm run dev
```
**Verificar:** CMS corriendo en `http://localhost:3000`

### 1.2 Ejecutar Migración para crear Tenant
```bash
# En el CMS
npm run migration
```
**Resultado:** Se genera un nuevo `tenant ID` único (ej: `zCXAU8FLaGX4UHgnrPfI`)

### 1.3 Configurar Tenant en Firebase Console
1. Ir a Firebase Console → Firestore Database
2. Navegar a colección `tenants`
3. Encontrar el documento con el ID generado
4. Configurar campos:
   ```json
   {
     "name": "Nombre del Sitio Web (ej: PodoclinicLandingPage)",
     "domain": "dominio.com (ej: podoclinic.com)",
     "createdAt": "timestamp actual",
     "description": "Descripción opcional",
     "status": "active"
   }
   ```

---

## 🔧 Paso 2: Configuración del Sitio Web

### 2.1 Variables de Entorno
Crear/actualizar `.env.local` en el sitio web:
```bash
# Configuración del CMS Headless
NEXT_PUBLIC_CMS_URL=http://localhost:3000
NEXT_PUBLIC_CMS_TENANT_ID=zCXAU8FLaGX4UHgnrPfI

# Para producción:
# NEXT_PUBLIC_CMS_URL=https://cmsheadless.vercel.app
# NEXT_PUBLIC_CMS_TENANT_ID=tu-tenant-id-real
```

### 2.2 Estructura de Puertos
- **CMS Headless**: Puerto 3000
- **Sitio Web**: Puerto 3001 (o diferente al 3000)

```bash
# Terminal 1: CMS
cd /path/to/cms-headless
npm run dev  # Puerto 3000

# Terminal 2: Sitio Web  
cd /path/to/sitio-web
PORT=3001 npm run dev  # Puerto 3001
```

---

## 🛡️ Paso 3: Solución de Problemas CORS/CSP

### 3.1 Problema Común: Content Security Policy
**Error típico:**
```
Connecting to 'http://localhost:3000/api/blogs' violates CSP directive
```

**Solución A:** Deshabilitar CSP temporalmente (desarrollo)
```javascript
// next.config.mjs
const nextConfig = {
    // CSP temporalmente deshabilitado para desarrollo con CMS
    // async headers() { ... },
};
```

**Solución B:** Configurar CSP correctamente
```javascript
// next.config.mjs
async headers() {
    return [
        {
            source: '/(.*)',
            headers: [
                {
                    key: 'Content-Security-Policy',
                    value: `
                        connect-src 'self' http://localhost:* https://cmsheadless.vercel.app;
                    `.replace(/\s{2,}/g, ' ').trim()
                },
            ],
        },
    ]
},
```

### 3.2 Solución Recomendada: API Proxy
Crear proxy interno para evitar problemas CORS:

```typescript
// src/app/api/cms-proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    
    const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
    const TENANT_ID = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'tu-tenant-id';
    
    const response = await fetch(`${CMS_URL}/api/blogs?tenant=${TENANT_ID}&limit=${limit}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`CMS API Error: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Error connecting to CMS', details: error.message },
      { status: 500 }
    );
  }
}
```

---

## 🧪 Paso 4: Verificación de Conexión

### 4.1 Test Manual con cURL
```bash
# Verificar que CMS responde
curl "http://localhost:3000/api/blogs?tenant=TU_TENANT_ID&limit=5"
```

**Respuesta esperada:**
```json
{
  "blogs": [...],
  "total": 1,
  "tenant": "zCXAU8FLaGX4UHgnrPfI"
}
```

### 4.2 Página de Debug
Crear página de verificación:

```typescript
// src/app/blogs-cms/page.tsx
'use client';
export default function BlogsCMSPage() {
  // Código para mostrar blogs del CMS directamente
  // Útil para debugging y verificación
}
```

**Acceder:** `http://localhost:3001/blogs-cms`

---

## 📋 Checklist de Verificación

- [ ] **CMS corriendo** en puerto 3000
- [ ] **Tenant creado** y configurado en Firebase
- [ ] **Variables de entorno** configuradas
- [ ] **Sitio web corriendo** en puerto diferente (3001)
- [ ] **Proxy API** creado y funcionando
- [ ] **Test cURL** exitoso
- [ ] **Página debug** muestra blogs del CMS

---

## 🐛 Troubleshooting Común

### Error: "Failed to fetch"
1. Verificar que CMS esté corriendo: `lsof -i :3000`
2. Verificar tenant ID en Firebase Console
3. Usar proxy API en lugar de fetch directo

### Error: CSP Violations
1. Deshabilitar CSP temporalmente
2. O configurar `connect-src` correctamente
3. O usar API proxy (recomendado)

### Error: 404 Not Found
1. Verificar endpoint: `/api/blogs?tenant=TENANT_ID`
2. Verificar que tenant existe en Firebase
3. Verificar logs del CMS

---

## 🎯 Próximos Pasos

Una vez verificada la conexión básica:

1. **Crear sistema híbrido** (posts estáticos + CMS)
2. **Integrar en página principal** `/blog`
3. **Configurar routing dinámico** para posts individuales
4. **Deploy a producción** con variables de entorno correctas

---

## 📝 Notas Importantes

- **Desarrollo**: Usar `localhost:3000` para CMS
- **Producción**: Usar `https://cmsheadless.vercel.app`
- **Seguridad**: Nunca exponer tenant IDs públicamente
- **Performance**: Implementar cache en producción
- **SEO**: Posts del CMS son completamente indexables

---

*Documentación creada: 18 de noviembre de 2025*
*Actualizar según nuevas integraciones y mejoras*