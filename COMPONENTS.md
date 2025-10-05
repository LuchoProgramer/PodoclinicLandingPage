# 🧩 Guía de Componentes Reutilizables - PodoClinic

## 📚 Biblioteca de Componentes

Esta guía documenta todos los componentes desarrollados para la landing page, con ejemplos de uso y mejores prácticas para futuros proyectos de landing pages médicas.

---

## 🎯 **SmartQuiz.js** - Quiz de Segmentación Inteligente

### **Propósito**
Componente de engagement que segmenta leads según nivel de urgencia médica y personaliza el journey del usuario.

### **Funcionalidades Clave**
- ✅ Sistema de puntuación ponderada (0-25 puntos)
- ✅ 3 niveles de resultado (Bajo, Moderado, Alto riesgo)
- ✅ CTAs personalizados según resultado
- ✅ Tracking de completión y resultados
- ✅ Progreso visual con barra animada

### **Configuración de Preguntas**
```javascript
const questions = [
  {
    id: 1,
    question: "¿Hace cuánto tiempo presenta estos síntomas?",
    options: [
      { text: "Menos de 1 semana", score: 1 },
      { text: "1-4 semanas", score: 3 },
      { text: "1-3 meses", score: 4 },
      { text: "Más de 3 meses", score: 5 }
    ]
  }
  // ... más preguntas
];
```

### **Sistema de Scoring**
```javascript
const getResultLevel = (score) => {
  if (score <= 8) return 'low';        // Riesgo Bajo (0-8 puntos)
  if (score <= 16) return 'moderate';  // Riesgo Moderado (9-16 puntos)
  return 'high';                       // Riesgo Alto (17-25 puntos)
};
```

### **Implementación**
```jsx
import SmartQuiz from '@/components/SmartQuiz';

// En tu página principal
<SmartQuiz />
```

### **Tracking Events**
- `quiz_started`: Usuario inicia el quiz
- `quiz_completed`: Usuario completa quiz con resultado
- `quiz_cta_clicked`: Click en CTA según resultado

---

## 🏥 **AboutDoctor.js** - Credibilidad Profesional

### **Propósito**
Establece autoridad y confianza mediante credenciales, estadísticas y mensaje personal del profesional.

### **Elementos Clave**
- ✅ Estadísticas de confianza con animación
- ✅ Lista de certificaciones médicas
- ✅ Mensaje personal humanizado
- ✅ CTA directo para consulta

### **Configuración de Estadísticas**
```javascript
const stats = [
  { number: "500+", label: "Pacientes Atendidos", icon: Users },
  { number: "98%", label: "Satisfacción", icon: Heart },
  { number: "15+", label: "Años de Experiencia", icon: Award },
  { number: "24/7", label: "Disponibilidad", icon: Clock }
];
```

### **Implementación**
```jsx
import AboutDoctor from '@/components/AboutDoctor';

<AboutDoctor />
```

### **Personalización para otros médicos**
1. Actualizar estadísticas en el array `stats`
2. Cambiar certificaciones en el array `certifications`
3. Personalizar mensaje en `personalMessage`
4. Actualizar foto del profesional

---

## 💼 **Servicios.js** - Showcase Premium de Servicios

### **Propósito**
Presenta servicios médicos con diseño premium, iconografía profesional y CTAs específicos.

### **Estructura de Servicio**
```javascript
const services = [
  {
    id: 'uneros',
    icon: Scissors,           // Icono de Lucide React
    title: 'Tratamiento de Uñeros',
    description: 'Solución definitiva para uñas enterradas...',
    benefits: [
      'Técnica láser sin dolor',
      'Recuperación rápida (24-48h)',
      '98% de efectividad'
    ],
    cta: 'Consulta Uñeros',
    link: '/servicios/uneros',  // Landing page específica
    badge: 'Más Solicitado'     // Badge opcional
  }
];
```

### **Iconografía Médica Utilizada**
- **Scissors**: Cirugías y tratamientos de precisión
- **Shield**: Prevención y protección
- **Zap**: Tratamientos láser
- **Heart**: Cuidado general y bienestar

### **Implementación**
```jsx
import Servicios from '@/components/Servicios';

<Servicios />
```

### **Customización**
1. Agregar nuevos servicios al array `services`
2. Crear landing pages específicas en `/servicios/[servicio]`
3. Configurar tracking por servicio
4. Personalizar badges según demanda

---

## ❓ **FAQAccordion.js** - FAQs Inteligentes

### **Propósito**
Sistema avanzado de FAQs con búsqueda, categorización y CTAs contextuales para resolución de objeciones finales.

### **Funcionalidades Avanzadas**
- ✅ Búsqueda en tiempo real
- ✅ Filtrado por categorías
- ✅ Mini-CTAs contextuales
- ✅ Contadores por categoría
- ✅ Estado persistente de acordeones

### **Estructura de FAQ**
```javascript
const faq = {
  id: 'unique-id',
  question: '¿Cuánto tiempo dura el tratamiento de uñeros?',
  answer: 'El tratamiento láser tiene una duración de 15-30 minutos...',
  category: 'uneros',        // Categoría para filtrado
  hasAction: true,           // ¿Incluir mini-CTA?
  actionText: 'Consultar mi caso específico',
  relatedTerms: ['uneros', 'laser', 'duracion'] // Para búsqueda
};
```

### **Categorías Configuradas**
- **General**: Consultas generales sobre la clínica
- **Uñeros**: Específicas sobre uñas enterradas
- **Hongos**: Tratamientos antifúngicos
- **Diabetes**: Cuidado especializado pie diabético

### **Implementación**
```jsx
import FAQAccordion from '@/components/FAQAccordion';

<FAQAccordion />
```

### **Añadir nuevas FAQs**
1. Agregar pregunta al archivo `/src/data/faqs.js`
2. Asignar categoría apropiada
3. Configurar términos de búsqueda relevantes
4. Decidir si incluir mini-CTA contextual

---

## 📍 **LocationHub.js** - Centro de Contacto Unificado

### **Propósito**
Consolida todas las formas de contacto en una sección final optimizada para conversión.

### **Elementos Incluidos**
- ✅ Mapa interactivo de Google Maps
- ✅ Información de contacto completa
- ✅ Horarios de atención
- ✅ Redes sociales (incluye TikTok)
- ✅ Múltiples CTAs de conversión

### **Configuración de Contacto**
```javascript
const contactInfo = {
  address: "Manuel Jordan y Av La Florida, Quito",
  phone: "+593 995 832 788",
  email: "info@podoclinic.ec",
  hours: {
    weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    saturday: "Sábados: 9:00 AM - 3:00 PM",
    sunday: "Domingos: Cerrado"
  }
};
```

### **Redes Sociales Configuradas**
```javascript
const socialMedia = [
  { platform: 'WhatsApp', icon: FaWhatsapp, color: 'text-green-600' },
  { platform: 'Facebook', icon: FaFacebook, color: 'text-blue-600' },
  { platform: 'Instagram', icon: FaInstagram, color: 'text-pink-600' },
  { platform: 'TikTok', icon: FaTiktok, color: 'text-gray-800' }
];
```

---

## 💬 **ContactModal.js** - Modal de Conversión

### **Propósito**
Modal optimizado para captura de leads con validación y múltiples canales de contacto.

### **Funcionalidades**
- ✅ Formulario con validación en tiempo real
- ✅ Selección de servicio de interés
- ✅ Indicador de urgencia
- ✅ Redirección automática a WhatsApp
- ✅ Tracking de conversiones

### **Campos del Formulario**
```javascript
const formFields = [
  { name: 'nombre', label: 'Nombre completo', required: true },
  { name: 'telefono', label: 'Número de WhatsApp', required: true },
  { name: 'servicio', label: 'Servicio de interés', type: 'select' },
  { name: 'urgencia', label: 'Nivel de urgencia', type: 'select' },
  { name: 'mensaje', label: 'Describe tu situación', type: 'textarea' }
];
```

### **Integración con WhatsApp**
```javascript
const generateWhatsAppMessage = (formData) => {
  return `¡Hola! Me interesa agendar una consulta:
• Nombre: ${formData.nombre}
• Servicio: ${formData.servicio}
• Urgencia: ${formData.urgencia}
• Situación: ${formData.mensaje}`;
};
```

---

## 🎨 **Sistema de Tracking Unificado**

### **Configuración Base**
```javascript
// utils/tracking.js
export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, properties);
  }
  
  // TikTok Pixel
  if (typeof ttq !== 'undefined') {
    ttq.track(eventName, properties);
  }
};
```

### **Eventos Estándar por Componente**
```javascript
// SmartQuiz
trackEvent('quiz_completed', { score: finalScore, level: resultLevel });

// Servicios
trackEvent('service_interest', { service_name: serviceName });

// ContactModal
trackEvent('lead_generated', { source: 'contact_modal', service: selectedService });

// FAQs
trackEvent('faq_searched', { search_term: searchTerm });
```

---

## 🚀 **Mejores Prácticas para Futuros Proyectos**

### **1. Estructura de Colores**
- Siempre usar variables CSS para colores principales
- Mantener consistencia en gradientes de fondo
- Aplicar colores de hover coherentes

### **2. Responsividad**
- Mobile-first approach
- Breakpoints estándar: 768px, 1024px, 1280px
- Touch-friendly buttons (min 44px height)

### **3. Performance**
- Lazy loading para componentes no críticos
- Optimización de imágenes con Next.js Image
- Minificación de CSS y JS

### **4. SEO**
- Meta tags únicos por página
- Datos estructurados (Schema.org)
- Sitemap automático

### **5. Analytics**
- Eventos personalizados por objetivo de negocio
- Funnel tracking desde primer click hasta conversión
- Segmentación por fuente de tráfico

---

## 📦 **Librerías y Dependencias Recomendadas**

```json
{
  "dependencies": {
    "next": "^15.5.3",
    "react": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "lucide-react": "latest",
    "react-icons": "latest",
    "@heroicons/react": "latest",
    "framer-motion": "latest" // Para animaciones avanzadas
  }
}
```

---

*Documentación de componentes actualizada: Octubre 2025*