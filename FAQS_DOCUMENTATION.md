# ❓ Documentación de FAQs Database - PodoClinic

## 🎯 Estructura y Mantenimiento de FAQs

Esta documentación explica cómo mantener y expandir la base de datos de FAQs para optimizar la conversión y resolver objeciones específicas.

---

## 🏗️ **Estructura de FAQ**

### **Modelo de Datos**
```javascript
const faqSchema = {
  id: 'string',           // Identificador único
  question: 'string',     // Pregunta del usuario
  answer: 'string',       // Respuesta detallada
  category: 'string',     // Categoría para filtrado
  hasAction: boolean,     // ¿Incluye mini-CTA?
  actionText: 'string',   // Texto del mini-CTA
  relatedTerms: array,    // Términos para búsqueda
  priority: number,       // Orden de aparición (1-10)
  lastUpdated: date       // Fecha de última actualización
};
```

### **Categorías Disponibles**
- **`general`**: Información sobre la clínica, horarios, ubicación
- **`uneros`**: Uñas enterradas, tratamientos láser
- **`hongos`**: Infecciones fúngicas, onicomicosis
- **`diabetes`**: Cuidado especializado pie diabético

---

## 📋 **FAQs Actuales por Categoría**

### **GENERAL (8 FAQs)**
```javascript
// Información básica de la clínica
'horarios-atencion' => Horarios de atención
'ubicacion-clinica' => Ubicación y cómo llegar
'costo-consulta' => Precios y formas de pago
'seguros-medicos' => Cobertura de seguros
'primera-vez' => Qué esperar en primera consulta
'emergencias' => Atención de emergencias
'tecnologia-equipos' => Equipos y tecnología disponible
'especialista-experiencia' => Experiencia del especialista
```

### **UÑEROS (6 FAQs)**
```javascript
// Uñas enterradas - problema más común
'que-son-uneros' => Definición y causas
'tratamiento-laser-uneros' => Proceso del tratamiento láser
'dolor-tratamiento-uneros' => Nivel de dolor y anestesia
'recuperacion-uneros' => Tiempo de recuperación
'precio-tratamiento-uneros' => Costo específico
'prevencion-uneros' => Cómo prevenir recurrencia
```

### **HONGOS (4 FAQs)**
```javascript
// Infecciones fúngicas
'tipos-hongos-pies' => Tipos comunes de hongos
'tratamiento-hongos' => Opciones de tratamiento
'tiempo-curacion-hongos' => Duración del tratamiento
'prevencion-hongos' => Medidas preventivas
```

### **DIABETES (4 FAQs)**
```javascript
// Cuidado especializado
'cuidado-pies-diabeticos' => Importancia del cuidado
'frecuencia-revision-diabeticos' => Frecuencia de consultas
'riesgos-pies-diabeticos' => Complicaciones comunes
'calzado-diabeticos' => Recomendaciones de calzado
```

---

## 🔍 **Sistema de Búsqueda**

### **Términos de Búsqueda Optimizados**
```javascript
// Mapping de sinónimos y términos relacionados
const searchTerms = {
  'uñeros': ['uñas enterradas', 'uña encarnada', 'onicocriptosis'],
  'hongos': ['micosis', 'onicomicosis', 'pie de atleta', 'infección'],
  'diabetes': ['diabético', 'pie diabético', 'neuropatía'],
  'dolor': ['duele', 'molestia', 'painful', 'lastimadomicina']
};
```

### **Algoritmo de Búsqueda**
1. **Búsqueda exacta** en pregunta y respuesta
2. **Búsqueda en relatedTerms** array
3. **Búsqueda parcial** en palabras clave
4. **Scoring por relevancia** y categoría

---

## 📊 **Análisis de Búsquedas**

### **Términos Más Buscados (Ejemplo)**
1. **"uñeros"** - 45% de búsquedas
2. **"precio"** - 23% de búsquedas
3. **"dolor"** - 18% de búsquedas
4. **"hongos"** - 12% de búsquedas
5. **"diabetes"** - 8% de búsquedas

### **Búsquedas Sin Resultados (Para agregar FAQs)**
- **"garantía"** - 15 búsquedas sin resultado
- **"anestesia"** - 12 búsquedas sin resultado
- **"cicatrices"** - 9 búsquedas sin resultado

---

## ➕ **Cómo Agregar Nuevas FAQs**

### **1. Identificar Necesidad**
- Revisar búsquedas sin resultados en analytics
- Preguntas recurrentes en WhatsApp
- Objeciones comunes en consultas presenciales

### **2. Crear FAQ Optimizada**
```javascript
// Template para nueva FAQ
const nuevaFaq = {
  id: 'categoria-descripcion-corta',
  question: '¿[Pregunta exacta como la haría el usuario]?',
  answer: `
    [Párrafo 1: Respuesta directa y clara]
    
    [Párrafo 2: Información adicional relevante]
    
    [Párrafo 3: Beneficios o detalles técnicos si aplica]
  `,
  category: 'categoria-apropiada',
  hasAction: true, // Si es tema de conversión alta
  actionText: 'CTA específico relacionado',
  relatedTerms: ['término1', 'término2', 'sinónimo1'],
  priority: 5 // 1-10, mayor número = más arriba
};
```

### **3. Proceso de Implementación**
1. **Agregar al archivo** `/src/data/faqs.js`
2. **Testear búsqueda** con términos relacionados
3. **Verificar categorización** automática
4. **Validar mini-CTA** si corresponde
5. **Deploy y monitorear** engagement

---

## 🎯 **Mini-CTAs Contextuales**

### **Cuándo Incluir Mini-CTAs**
- ✅ Preguntas sobre **tratamientos específicos**
- ✅ Consultas sobre **precios** o **financiamiento**
- ✅ Dudas sobre **urgencia** médica
- ✅ Información sobre **tecnología** o **técnicas**

### **Ejemplos de Mini-CTAs Efectivos**
```javascript
// Por categoría de problema
const miniCtas = {
  urgencia_alta: "Consulta URGENTE tu caso específico",
  precio_tratamiento: "Solicita cotización personalizada",
  tecnologia_laser: "Conoce más sobre nuestra técnica láser",
  primera_consulta: "Agenda tu evaluación GRATIS",
  caso_complejo: "Consulta tu caso específico"
};
```

---

## 🔄 **Mantenimiento y Optimización**

### **Revisión Mensual**
1. **Analizar búsquedas sin resultados** (agregar FAQs faltantes)
2. **Revisar FAQs con bajo engagement** (mejorar respuestas)
3. **Actualizar información** (precios, horarios, técnicas)
4. **Optimizar términos de búsqueda** (agregar sinónimos)

### **Revisión Trimestral**
1. **A/B testing de respuestas** (versiones más claras vs técnicas)
2. **Reorganizar prioridades** según analytics
3. **Evaluar nuevas categorías** (si surgen temas recurrentes)
4. **Actualizar mini-CTAs** según performance

### **Métricas de Éxito**
```javascript
const faqMetrics = {
  search_success_rate: 85, // % de búsquedas con resultados
  engagement_rate: 60,     // % que lee respuesta completa
  cta_click_rate: 15,      // % que hace click en mini-CTA
  no_results_rate: 15      // % de búsquedas sin resultados
};
```

---

## 📝 **Templates de FAQs por Tipo**

### **FAQ de Información General**
```
Pregunta: ¿[Información específica que buscan]?

Respuesta:
[Información directa y clara]

[Detalles adicionales relevantes]

[Información de contacto o horarios si aplica]
```

### **FAQ de Tratamiento Médico**
```
Pregunta: ¿[Pregunta sobre procedimiento/tratamiento]?

Respuesta:
[Explicación del tratamiento en términos simples]

[Beneficios clave del tratamiento]

[Información sobre duración, recuperación, etc.]

Mini-CTA: "Consulta tu caso específico"
```

### **FAQ de Urgencia/Emergencia**
```
Pregunta: ¿[Situación de urgencia o dolor]?

Respuesta:
[Validación de la preocupación]

[Cuándo es realmente urgente]

[Primeros auxilios o medidas temporales]

[Cuándo contactar inmediatamente]

Mini-CTA: "Consulta URGENTE por WhatsApp"
```

### **FAQ de Precios/Costos**
```
Pregunta: ¿[Pregunta sobre precios]?

Respuesta:
[Explicación de que precios varían según caso]

[Rango aproximado o factores que influyen]

[Información sobre consulta gratuita]

[Formas de pago disponibles]

Mini-CTA: "Solicita cotización personalizada"
```

---

## 🚀 **Mejores Prácticas**

### **Writing Guidelines**
- **Tono empático**: Reconocer la preocupación del paciente
- **Lenguaje simple**: Evitar terminología médica compleja
- **Estructura clara**: Párrafos cortos, información organizada
- **Call-to-action sutil**: No pushy, sino útil

### **SEO Optimization**
- **Keywords naturales**: Incluir términos que buscarían en Google
- **Long-tail keywords**: Frases completas como las escribirían
- **Sinónimos**: Múltiples formas de referirse al mismo problema
- **Localización**: Incluir términos locales cuando sea relevante

### **Conversion Optimization**
- **Resolver objeciones**: Anticipar dudas que frenan la conversión
- **Crear urgencia apropiada**: Sin alarmar innecesariamente
- **Facilitar siguiente paso**: Mini-CTA como transición natural
- **Builds trust**: Información transparente y honesta

---

## 📊 **Ejemplo de Tracking de FAQs**

```javascript
// Events para analytics
const faqEvents = {
  faq_searched: {
    search_term: string,
    results_found: number,
    category_filtered: string
  },
  faq_opened: {
    faq_id: string,
    category: string,
    search_source: boolean
  },
  faq_cta_clicked: {
    faq_id: string,
    cta_text: string,
    category: string
  },
  faq_no_results: {
    search_term: string,
    timestamp: date
  }
};
```

---

*Documentación de FAQs actualizada: Octubre 2025*  
*Próxima revisión: [Fecha + 1 mes]*