# Documentación: Mejora de Datos Estructurados para SEO (Google/SEMrush)

## Objetivo
Asegurar que todas las páginas clave del sitio web cumplan con las directrices de Google y SEMrush para datos estructurados, maximizando la visibilidad en buscadores y evitando errores de rastreabilidad.

---

## Cambios Realizados

### 1. Home (`/src/app/page.js`)
- **Schemas agregados:**
  - `MedicalClinic` (como principal)
  - `Organization` (recomendado por Google)
- **Campos clave:**
  - `name`, `description`, `url`, `logo`, `image`, `address`, `telephone`, `openingHours`, `geo`, `sameAs`, `contactPoint`, `areaServed`, `founder`, `aggregateRating`, `medicalSpecialty`, etc.
- **Motivo:** Google recomienda marcar tanto la organización como el tipo de negocio específico.

### 2. Páginas de servicios/locales (ej: `/blog/local/podologo-la-florida-quito-norte/`, `/blog/uneros/podologia-domicilio-quito-norte/`)
- **Schemas agregados/enriquecidos:**
  - `LocalBusiness` (enriquecido con todos los campos recomendados)
  - `Organization`
  - `BreadcrumbList` (en formato JSON-LD)
- **Campos clave:**
  - `image`, `geo`, `openingHours`, `url`, `sameAs`, `addressRegion`, `postalCode`, etc.
- **Motivo:** Google y SEMrush requieren estos campos para validar correctamente el negocio local y la organización.

### 3. Página de podología deportiva/runners (`/blog/podologia-deportiva/podologia-runners-quito/`)
- **Schemas agregados/enriquecidos:**
  - `LocalBusiness`
  - `Organization`
  - `BreadcrumbList`
  - Se mantiene `SportsActivityLocation` y `FAQPage`
- **Motivo:** Asegurar compatibilidad máxima y evitar advertencias de rastreabilidad.

---

## Buenas Prácticas para Futuros Proyectos
- **Siempre incluir:**
  - Un schema de tipo `Organization` en la home y páginas principales.
  - Un schema específico del negocio (`LocalBusiness`, `MedicalClinic`, etc.) con todos los campos recomendados por Google.
  - `BreadcrumbList` en formato JSON-LD en todas las páginas de categorías, servicios y posts.
  - Campos `sameAs`, `geo`, `openingHours`, `image`, `url`, `contactPoint` y `address` completos.
- **Validar:**
  - Usar herramientas como [Google Rich Results Test](https://search.google.com/test/rich-results) y SEMrush para detectar advertencias o errores.
  - Revisar la documentación oficial de [schema.org](https://schema.org/) y [Google Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro).
- **Actualizar:**
  - Si el negocio cambia de dirección, teléfono, horarios o redes sociales, actualizar todos los schemas.

---

## Ejemplo de uso (React/Next.js)
```jsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
```

---

## Referencias
- [Google: Tipos de datos estructurados admitidos](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Guía de datos estructurados de SEMrush](https://es.semrush.com/blog/datos-estructurados/)
- [Validador de schema.org](https://validator.schema.org/)

---

## Configuración de Redirecciones SEO en Netlify (`_redirects`)

Para asegurar que Google y otras herramientas rastreen e indexen solo la versión canónica de tu sitio, se recomienda agregar reglas de redirección en el archivo `public/_redirects`:

```plaintext
# Redirigir www a sin www
https://www.podoclinicec.com/*  https://podoclinicec.com/:splat  301!

# Redirigir HTTP a HTTPS
http://podoclinicec.com/*  https://podoclinicec.com/:splat  301!

# Redirigir /blog y /faq sin slash a la versión con slash
/blog     /blog/   301!
/faq      /faq/    301!

# Fallback para SPA
/*  /index.html  200
```

**¿Por qué?**
- Evita contenido duplicado y problemas de rastreabilidad.
- Asegura que solo la versión preferida (canónica) esté indexada.
- Mejora la experiencia de usuario y la autoridad SEO.

**Recomendación:**
- Verifica en Google Search Console que la versión final esté indexada y no existan advertencias de redirección.
- Si cambias de dominio o estructura, actualiza estas reglas.

---

**Última actualización:** 10 de octubre de 2025
