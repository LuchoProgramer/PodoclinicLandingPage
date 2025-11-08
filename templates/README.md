# 🗂️ Templates de robots.txt por Tipo de Proyecto

Esta carpeta contiene **templates optimizados** de robots.txt para diferentes tipos de proyectos.

---

## 📋 **Templates Disponibles**

### **1. 🛒 E-commerce** (`robots-ecommerce.txt`)
**Para**: Tiendas online, marketplaces, catálogos de productos
**Características**:
- ✅ Permite productos, categorías y contenido público
- ❌ Bloquea checkout, carrito, cuentas de usuario
- 🤖 Optimizado para crawlers de shopping
- 📍 Múltiples sitemaps (productos, categorías)

### **2. 📝 Blog/Contenido** (`robots-blog.txt`)  
**Para**: Blogs, revistas, sitios de noticias, WordPress
**Características**:
- ✅ Permite posts, categorías, autores, archivo
- ❌ Bloquea wp-admin, plugins, cache
- 🚫 Evita contenido duplicado (parámetros de búsqueda)
- 🤖 Bloquea bots de IA (GPTBot, CCBot)

### **3. 💻 SaaS/App Web** (`robots-saas.txt`)
**Para**: Aplicaciones web, software como servicio, startups tech  
**Características**:
- ✅ Permite landing, pricing, docs, marketing
- ❌ Bloquea app, dashboard, APIs
- ⏱️ Crawl-delay para controlar carga
- 🛡️ Bloquea bots de scraping agresivos

### **4. 🏪 Servicios Locales** (`robots-servicios-locales.txt`)
**Para**: Médicos, abogados, consultorías, servicios locales
**Características**:  
- ✅ Permite servicios, testimonios, contacto, ubicación
- ❌ Bloquea expedientes, citas privadas
- 🗺️ Optimizado para crawlers de mapas locales
- 📍 SEO local prioritario

### **5. 🤖 Validador Universal** (`robots-validator-universal.js`)
**Para**: Cualquier proyecto - template personalizable
**Características**:
- 🔧 Configuración adaptable por proyecto
- ✅ Testing automático de URLs específicas  
- 📊 Reporte completo de validación
- 💡 Mejores prácticas por industria

---

## 🚀 **Cómo Usar los Templates**

### **Paso 1**: Elegir Template
```bash
# Copiar el template adecuado a tu proyecto
cp templates/robots-[tipo].txt mi-proyecto/public/robots.txt
```

### **Paso 2**: Personalizar
```bash
# Editar el archivo copiado
# 1. Cambiar dominio en Sitemap
# 2. Ajustar rutas específicas de tu proyecto  
# 3. Agregar/quitar bloqueos según necesidades
```

### **Paso 3**: Validar
```bash
# Copiar también el validador
cp scripts/validate-robots.js mi-proyecto/scripts/
cp templates/robots-validator-universal.js mi-proyecto/examples/

# Personalizar URLs en el validador
# Ejecutar validación
node examples/robots-validator-universal.js
```

---

## 📊 **Comparación de Templates**

| Característica | E-commerce | Blog | SaaS | Local |
|----------------|------------|------|------|-------|
| **Prioridad SEO** | Productos | Contenido | Marketing | Servicios |
| **Bloqueos principales** | Checkout/Cart | wp-admin | App/Dashboard | Expedientes |
| **Crawl-delay** | No | No | Sí (1s) | No |
| **Bots bloqueados** | Scraping | IA | Scraping | Scraping |
| **Sitemaps múltiples** | Sí | Sí | No | No |

---

## 🎯 **Personalización Rápida**

### **Variables a cambiar en cualquier template**:
1. **Dominio**: `https://tu-dominio.com`
2. **Rutas específicas**: Según tu estructura de URLs
3. **APIs**: Ajustar según tus endpoints  
4. **Sitemaps**: Según tus archivos sitemap reales

### **Ejemplo de personalización**:
```diff
# Antes (template)
- Sitemap: https://tu-tienda.com/sitemap.xml
- Disallow: /checkout

# Después (personalizado)  
+ Sitemap: https://mitienda.es/sitemap.xml
+ Disallow: /finalizar-compra
```

---

## 🛠️ **Validación Automática**

Todos los templates incluyen el **validador universal** que:
- ✅ Verifica sintaxis correcta
- 🔍 Prueba URLs específicas de tu proyecto
- 📊 Genera reporte completo de optimización
- 💡 Sugiere mejoras específicas por industria

---

## 💡 **Tips por Industria**

### **E-commerce**
- Permite todas las páginas de productos
- Bloquea proceso de compra (privacidad)
- Usa múltiples sitemaps para mejor organización
- Considera crawl-delay si tienes muchos productos

### **Blog/Contenido**
- Evita parámetros de búsqueda (contenido duplicado)
- Permite uploads de WordPress si es necesario
- Bloquea bots de IA si no quieres scraping de contenido
- Organiza por categorías en sitemaps

### **SaaS/Apps**
- Separa claramente marketing de aplicación
- Bloquea APIs y rutas de usuario por seguridad
- Usa crawl-delay para controlar carga del servidor
- Permite docs y help para SEO de soporte

### **Servicios Locales**
- Prioriza contenido de servicios y ubicación
- Bloquea información sensible de pacientes/clientes
- Optimiza para crawlers de directorios locales
- Incluye páginas de emergencia/contacto urgente

---

**🎯 Resultado**: Templates listos para usar que optimizan SEO según tu tipo de negocio