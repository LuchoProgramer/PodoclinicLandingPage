# Guía de Contenido Multimedia en el Blog

## 📹 Videos en el Blog

### ¿Cómo funcionan los videos?

El sistema procesa automáticamente las URLs de videos y las convierte en reproductores embebidos. No necesitas código especial, solo pega la URL.

### Plataformas Soportadas

#### 1. **YouTube**
```
URLs soportadas:
- https://www.youtube.com/watch?v=VIDEO_ID
- https://youtu.be/VIDEO_ID
- http://youtube.com/watch?v=VIDEO_ID
```

**Ejemplo en CKEditor:**
1. Escribe o pega la URL del video de YouTube
2. Puedes dejarla como texto plano o crear un enlace
3. Al renderizar, se convertirá automáticamente en un reproductor embebido

```html
<!-- En el CMS escribe: -->
<p>Mira este video sobre cuidado de pies:</p>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ver tutorial</a>

<!-- Se renderiza como: -->
<p>Mira este video sobre cuidado de pies:</p>
<div class="video-container youtube-embed">
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...></iframe>
</div>
```

#### 2. **TikTok**
```
URLs soportadas:
- https://www.tiktok.com/@usuario/video/1234567890123456789
- https://tiktok.com/@usuario/video/1234567890123456789
```

**Ejemplo:**
```html
<!-- En el CMS: -->
<p>Consejos rápidos de podología:</p>
https://www.tiktok.com/@podoclinicec/video/1234567890123456789

<!-- Se renderiza como un embed de TikTok -->
```

#### 3. **Vimeo**
```
URLs soportadas:
- https://vimeo.com/123456789
- https://www.vimeo.com/123456789
```

---

## 🎨 Estilos del Contenido

### Encabezados

Los encabezados se renderizan automáticamente con estilos profesionales:

```html
<h1>Título Principal</h1>        <!-- Grande, con borde inferior azul -->
<h2>Título de Sección</h2>        <!-- Grande, bold -->
<h3>Subtítulo</h3>                <!-- Mediano, semibold -->
<h4>Encabezado Menor</h4>         <!-- Texto más pequeño -->
```

**Vista previa:**
- **H1**: Título muy grande con línea inferior en color #60BEC3
- **H2**: Título grande, negrita
- **H3**: Título mediano
- **H4**: Título normal

### Listas

#### Listas con viñetas:
```html
<ul>
  <li>Primera opción</li>
  <li>Segunda opción</li>
  <li>Tercera opción</li>
</ul>
```

#### Listas numeradas:
```html
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
  <li>Tercer paso</li>
</ol>
```

### Texto Enfatizado

```html
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
<u>Texto subrayado</u>
<mark>Texto resaltado</mark>
```

### Citas

```html
<blockquote>
  <p>"Esta es una cita importante de un especialista médico."</p>
  <cite>- Dr. Juan Pérez</cite>
</blockquote>
```

### Enlaces

```html
<a href="https://podoclinicec.com">Visita nuestro sitio</a>
```

Los enlaces se muestran en color #60BEC3 y cambian a #4A9DB8 al pasar el mouse.

### Imágenes

Las imágenes se ajustan automáticamente con bordes redondeados y sombras:

```html
<figure>
  <img src="/images/blog/imagen.jpg" alt="Descripción de la imagen">
  <figcaption>Pie de foto opcional</figcaption>
</figure>
```

### Tablas

```html
<table>
  <thead>
    <tr>
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
</table>
```

---

## 📦 Cajas de Alerta/Información

Puedes crear cajas destacadas con clases CSS especiales:

### Información (Azul)
```html
<div class="alert alert-info">
  <p><strong>💡 Información importante:</strong></p>
  <p>Este es un dato relevante que los lectores deben conocer.</p>
</div>
```

### Advertencia (Amarillo)
```html
<div class="alert alert-warning">
  <p><strong>⚠️ Advertencia:</strong></p>
  <p>Ten cuidado con esto antes de proceder.</p>
</div>
```

### Éxito (Verde)
```html
<div class="alert alert-success">
  <p><strong>✅ ¡Excelente!</strong></p>
  <p>Has completado correctamente este paso.</p>
</div>
```

### Peligro (Rojo)
```html
<div class="alert alert-danger">
  <p><strong>🚨 ¡Atención urgente!</strong></p>
  <p>Busca ayuda médica inmediata si presentas estos síntomas.</p>
</div>
```

---

## 🎬 Ejemplo Completo de Artículo con Video

```html
<h1>Cómo Cuidar Tus Pies en Casa</h1>

<p>El cuidado de los pies es esencial para mantener una buena salud. En este artículo, te mostramos técnicas profesionales.</p>

<h2>Video Tutorial</h2>

<p>Primero, mira este video donde explico paso a paso el proceso:</p>

<a href="https://www.youtube.com/watch?v=EJEMPLO123">Ver tutorial completo</a>

<h2>Pasos a Seguir</h2>

<ol>
  <li><strong>Lava tus pies:</strong> Usa agua tibia y jabón suave</li>
  <li><strong>Seca completamente:</strong> Especialmente entre los dedos</li>
  <li><strong>Hidrata:</strong> Aplica crema específica para pies</li>
</ol>

<div class="alert alert-warning">
  <p><strong>⚠️ Importante:</strong></p>
  <p>Si eres diabético, consulta a un podólogo antes de cualquier procedimiento.</p>
</div>

<h2>Más Consejos en TikTok</h2>

<p>Síguenos para tips diarios:</p>
https://www.tiktok.com/@podoclinicec/video/1234567890123456789
```

---

## 📱 Diseño Responsivo

Todo el contenido se adapta automáticamente a dispositivos móviles:

- **Videos**: Se ajustan al ancho de la pantalla manteniendo proporción 16:9
- **Imágenes**: Se redimensionan sin perder calidad
- **Tablas**: Texto más pequeño en móviles
- **Encabezados**: Tamaños reducidos en pantallas pequeñas

---

## ✅ Mejores Prácticas

### Para Videos:

1. ✅ **Úsalos estratégicamente**: No sobrecargues un artículo con muchos videos
2. ✅ **Describe el contenido**: Agrega texto antes del video explicando qué verán
3. ✅ **URLs limpias**: Usa las URLs directas, sin parámetros extra
4. ✅ **Calidad**: Asegúrate de que los videos sean profesionales y relevantes

### Para Contenido:

1. ✅ **Jerarquía clara**: Usa H1 para el título principal, H2 para secciones, H3 para subsecciones
2. ✅ **Párrafos cortos**: Máximo 3-4 líneas por párrafo
3. ✅ **Listas**: Usa listas cuando tengas 3+ puntos relacionados
4. ✅ **Negritas para énfasis**: Destaca palabras clave importantes
5. ✅ **Cajas de alerta**: Usa para información crítica o destacada
6. ✅ **Imágenes con ALT**: Siempre incluye texto alternativo descriptivo

### Para SEO:

1. ✅ **H1 único**: Solo un H1 por artículo (el título)
2. ✅ **Estructura lógica**: H2 → H3 → H4, sin saltar niveles
3. ✅ **Enlaces internos**: Vincula a otros artículos relacionados
4. ✅ **URLs descriptivas**: Para enlaces a videos, usa texto descriptivo
5. ✅ **Multimedia**: Combina texto, imágenes y videos para contenido rico

---

## 🔧 Solución de Problemas

### El video no se muestra:

1. Verifica que la URL sea correcta y completa
2. Asegúrate de que el video sea público
3. Revisa que no haya espacios adicionales en la URL
4. Prueba pegando la URL directamente (sin etiqueta `<a>`)

### Los estilos no se aplican:

1. Verifica que el contenido esté dentro de un elemento con clase `cms-content`
2. Comprueba que el archivo CSS se haya importado
3. Limpia la caché del navegador

### El contenido se ve descuadrado:

1. Usa las clases CSS proporcionadas (`alert`, `video-container`, etc.)
2. Evita CSS inline personalizado
3. Usa las etiquetas HTML estándar (h1, h2, p, ul, etc.)

---

## 📞 Soporte

Si necesitas ayuda con la creación de contenido multimedia en el blog, revisa la documentación técnica o contacta al equipo de desarrollo.
