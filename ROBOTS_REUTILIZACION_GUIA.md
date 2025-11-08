# 🤖 Robots-Examples.js - Guía de Reutilización

**Archivo**: `examples/robots-examples.js`  
**Propósito**: Template reutilizable para validar robots.txt en cualquier proyecto

---

## 🎯 **Cómo Usar en Otros Proyectos**

### **1. Copiar Archivos Necesarios**
```bash
# Copiar a tu nuevo proyecto
cp scripts/validate-robots.js /ruta/nuevo-proyecto/scripts/
cp examples/robots-examples.js /ruta/nuevo-proyecto/examples/
```

### **2. Adaptar las URLs de Prueba**
```javascript
// En robots-examples.js, modificar línea ~23
const testCases = [
  // URLs específicas de TU proyecto
  { url: '/', description: 'Página principal', expected: true },
  { url: '/productos', description: 'Catálogo productos', expected: true },
  { url: '/contacto', description: 'Página contacto', expected: true },
  
  // APIs o rutas técnicas de TU proyecto
  { url: '/api/orders', description: 'API pedidos', expected: false },
  { url: '/admin', description: 'Panel admin', expected: false },
];
```

### **3. Personalizar Mejores Prácticas**
```javascript
// Línea ~95 - Adaptar a tu industria/negocio
const bestPractices = [
  '✅ Comentarios descriptivos para [TU NEGOCIO]',
  '✅ Permisos explícitos para contenido [TU INDUSTRIA]',
  '✅ Bloqueos específicos para [TUS APIs]',
  // ... resto personalizado
];
```

---

## 📋 **Plantillas por Tipo de Proyecto**

### **E-commerce**
```javascript
const ecommerceTestCases = [
  { url: '/', description: 'Home', expected: true },
  { url: '/productos', description: 'Catálogo', expected: true },
  { url: '/categoria/ropa', description: 'Categorías', expected: true },
  { url: '/carrito', description: 'Carrito', expected: true },
  { url: '/checkout', description: 'Checkout', expected: false }, // Privado
  { url: '/api/payments', description: 'API pagos', expected: false },
  { url: '/admin', description: 'Admin panel', expected: false },
];
```

### **Blog/Contenido**
```javascript
const blogTestCases = [
  { url: '/', description: 'Home', expected: true },
  { url: '/blog', description: 'Blog principal', expected: true },
  { url: '/blog/categoria/tech', description: 'Categorías', expected: true },
  { url: '/autor/juan', description: 'Perfiles autor', expected: true },
  { url: '/api/comments', description: 'API comentarios', expected: false },
  { url: '/wp-admin', description: 'WordPress admin', expected: false },
];
```

### **SaaS/App Web**
```javascript
const saasTestCases = [
  { url: '/', description: 'Landing page', expected: true },
  { url: '/features', description: 'Características', expected: true },
  { url: '/pricing', description: 'Precios', expected: true },
  { url: '/docs', description: 'Documentación', expected: true },
  { url: '/app', description: 'Aplicación', expected: false }, // Requiere login
  { url: '/api/v1/users', description: 'API usuarios', expected: false },
  { url: '/admin/dashboard', description: 'Dashboard admin', expected: false },
];
```

### **Servicios Locales (como Podoclinicec)**
```javascript
const localServiceTestCases = [
  { url: '/', description: 'Home', expected: true },
  { url: '/servicios', description: 'Servicios', expected: true },
  { url: '/servicios/especialidad-x', description: 'Servicios específicos', expected: true },
  { url: '/blog', description: 'Blog informativo', expected: true },
  { url: '/contacto', description: 'Contacto', expected: true },
  { url: '/citas-online', description: 'Sistema citas', expected: false }, // Privado
  { url: '/api/appointments', description: 'API citas', expected: false },
];
```

---

## 🔧 **Personalización Completa**

### **Archivo Template Genérico**
```javascript
#!/usr/bin/env node

/**
 * Validador robots.txt - Template Universal
 * Personalizar para tu proyecto específico
 */

import { RobotsValidator } from '../scripts/validate-robots.js';
import fs from 'fs';

console.log('🤖 Validador robots.txt - [NOMBRE_PROYECTO]\n');
console.log('=' .repeat(60));

// PERSONALIZAR: URLs específicas de tu proyecto
const testCases = [
  // SECCIÓN PÚBLICA (expected: true)
  { url: '/', description: 'Página principal', expected: true },
  { url: '/about', description: 'Acerca de', expected: true },
  // ... agregar tus rutas públicas
  
  // SECCIÓN PRIVADA/TÉCNICA (expected: false)  
  { url: '/api/', description: 'APIs', expected: false },
  { url: '/admin', description: 'Panel admin', expected: false },
  // ... agregar tus rutas privadas
];

// PERSONALIZAR: Crawlers relevantes para tu industria
const crawlers = ['*', 'Googlebot', 'Bingbot'];

// PERSONALIZAR: Mejores prácticas de tu industria
const bestPractices = [
  '✅ Comentarios descriptivos del proyecto',
  '✅ Permite contenido público importante',
  '✅ Bloquea APIs y contenido sensible',
  // ... agregar prácticas específicas
];

// El resto del código se mantiene igual
const validator = new RobotsValidator();
validator.validateFile('public/robots.txt');
// ... resto de validaciones
```

---

## 📁 **Estructura Recomendada para Otros Proyectos**

```
nuevo-proyecto/
├── public/
│   └── robots.txt                 # Archivo robots.txt del proyecto
├── scripts/
│   └── validate-robots.js         # Validador (copiado)
├── examples/
│   └── robots-examples.js         # Ejemplos (adaptado)
└── docs/
    ├── ROBOTS_SETUP.md           # Guía específica del proyecto
    └── SEO_GUIDELINES.md         # Guidelines SEO del proyecto
```

---

## ⚡ **Adaptación Rápida (5 minutos)**

### **Paso 1**: Copiar archivos
```bash
cp scripts/validate-robots.js tu-proyecto/scripts/
cp examples/robots-examples.js tu-proyecto/examples/
```

### **Paso 2**: Editar URLs de prueba
```javascript
// Cambiar en robots-examples.js líneas 23-35
const testCases = [
  // TUS URLs AQUÍ
  { url: '/tu-ruta-1', description: 'Tu descripción', expected: true },
  { url: '/tu-api', description: 'Tu API', expected: false },
];
```

### **Paso 3**: Ejecutar
```bash
node examples/robots-examples.js
```

### **Paso 4**: Ajustar robots.txt según resultados
```plaintext
# En public/robots.txt
User-agent: *
Allow: /

Disallow: /tu-api/
Disallow: /tu-admin/

Allow: /tu-contenido-importante/
```

---

## 🎯 **Casos de Uso Reales**

### **Para Clientes/Proyectos Freelance**
- Copiar template y adaptar URLs del cliente
- Personalizar comentarios con nombre del negocio
- Ajustar bloqueos según arquitectura del proyecto
- Entregar con documentación específica

### **Para Productos SaaS**
- Validar que área pública esté accesible
- Bloquear correctamente dashboard de usuarios
- Permitir landing pages y documentación
- Testing automático en CI/CD

### **Para Sitios Corporativos**
- Permitir todo el contenido de marketing
- Bloquear sistemas internos y APIs
- Optimizar para términos de la industria específica
- Monitoreo continuo de indexación

---

## 💡 **Tips Avanzados de Reutilización**

### **1. Variables de Entorno**
```javascript
// Usar .env para diferentes ambientes
const SITE_NAME = process.env.SITE_NAME || 'Mi Proyecto';
const BASE_URL = process.env.BASE_URL || 'https://mi-dominio.com';

console.log(`🤖 Validador robots.txt - ${SITE_NAME}\n`);
```

### **2. Configuración JSON**
```javascript
// robots-config.json
{
  "siteName": "Mi Proyecto",
  "publicRoutes": ["/", "/about", "/contact"],
  "privateRoutes": ["/admin", "/api"],
  "crawlers": ["Googlebot", "Bingbot"]
}
```

### **3. Testing Automatizado**
```javascript
// Agregar al package.json
"scripts": {
  "test:robots": "node examples/robots-examples.js",
  "validate:seo": "npm run test:robots && node scripts/validate-sitemap.js"
}
```

---

## 🚀 **Beneficios de la Reutilización**

1. **Ahorro de tiempo** - Setup en 5 minutos vs horas de desarrollo
2. **Mejores prácticas** - Template ya optimizado para SEO
3. **Testing automático** - Validación sin errores manuales
4. **Escalabilidad** - Fácil adaptación a cualquier proyecto
5. **Mantenimiento** - Updates centralizados en el template

**El sistema está diseñado para ser tu "kit de herramientas SEO" reutilizable** 🎯

---

*Template creado para reutilización universal - Noviembre 2025*