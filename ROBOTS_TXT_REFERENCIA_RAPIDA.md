# 🤖 Robots.txt - Guía Rápida de Referencia

**Archivo**: `/public/robots.txt` | **Validador**: `/scripts/validate-robots.js`

---

## ⚡ **Comandos Esenciales**

```bash
# Validar robots.txt completo
node scripts/validate-robots.js

# Probar URL específica
node scripts/validate-robots.js "/ruta/a/probar"

# Ver robots.txt actual  
cat public/robots.txt

# Verificar en producción
curl https://podoclinicec.com/robots.txt
```

---

## 📝 **Estructura del Archivo Actual**

```plaintext
# Comentarios descriptivos
User-agent: *           # Todos los crawlers
Allow: /               # Permite todo por defecto

# Bloqueos específicos
Disallow: /api/        # APIs (no indexar)
Disallow: /_next/      # Archivos Next.js  
Disallow: /scripts/    # Scripts técnicos

# Permisos explícitos SEO
Allow: /blog/          # Blog (prioritario)
Allow: /servicios/     # Servicios (prioritario)
Allow: /faq           # FAQ (prioritario)
Allow: /tips/         # Tips (prioritario)

# Crawlers específicos
User-agent: Googlebot  # Google
Allow: /

User-agent: Bingbot    # Bing/Microsoft
Allow: /

# Sitemap
Sitemap: https://podoclinicec.com/sitemap.xml
```

---

## 🎯 **Testing Rápido**

### **URLs que DEBEN estar permitidas**:
```bash
node scripts/validate-robots.js "/"                          # ✅ Home
node scripts/validate-robots.js "/blog/uneros"              # ✅ Blog  
node scripts/validate-robots.js "/servicios/pie-diabetico"  # ✅ Servicios
node scripts/validate-robots.js "/faq"                      # ✅ FAQ
node scripts/validate-robots.js "/tips/uneros"              # ✅ Tips
```

### **URLs que DEBEN estar bloqueadas**:
```bash
node scripts/validate-robots.js "/api/chat"                 # ❌ API
node scripts/validate-robots.js "/_next/static/css/app.css" # ❌ Next.js
node scripts/validate-robots.js "/scripts/validate-robots.js" # ❌ Scripts
```

---

## 🔧 **Modificaciones Comunes**

### **Agregar nuevo bloqueo**:
```plaintext
Disallow: /nueva-ruta/
```

### **Permitir explícitamente nueva sección**:
```plaintext
Allow: /nueva-seccion/
```

### **Agregar crawler específico**:
```plaintext
User-agent: NombreCrawler
Allow: /
```

### **Cambiar sitemap**:
```plaintext
Sitemap: https://podoclinicec.com/nuevo-sitemap.xml
```

---

## ⚠️ **Errores Comunes a Evitar**

| ❌ Error | ✅ Correcto |
|----------|-------------|
| `Disallow /admin` | `Disallow: /admin` |
| `User-agent *` | `User-agent: *` |
| `http://sitemap.xml` | `https://domain.com/sitemap.xml` |
| `# *` (comentario mal) | `# Comentario descriptivo` |
| `Host: domain.com` | No usar (deprecado) |

---

## 📊 **Validación Exitosa**

**Output esperado del validador**:
```
✅ ¡Robots.txt es válido y está bien optimizado!
📈 RESUMEN:
   • Errores: 0
   • Advertencias: 0
   • Sugerencias: 0
   • Estado: ✅ Válido para producción
```

---

## 🚨 **Checklist Antes de Cambios**

- [ ] Backup del robots.txt actual
- [ ] Probar en desarrollo primero  
- [ ] Ejecutar validador
- [ ] Probar URLs críticas
- [ ] Verificar sintaxis

## 📤 **Checklist Después de Cambios**

- [ ] Validar con script
- [ ] Reenviar a Google Search Console
- [ ] Actualizar en Bing Webmaster Tools
- [ ] Monitorear indexación (1-2 semanas)
- [ ] Verificar en producción

---

**🎯 Resultado**: Robots.txt optimizado para máximo SEO con 0 errores