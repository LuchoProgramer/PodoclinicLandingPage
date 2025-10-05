# ⚙️ Configuración Centralizada - PodoClinic Landing Page

## 🎯 Variables de Configuración Global

Este archivo documenta todas las configuraciones centralizadas del proyecto para facilitar la customización para futuras landing pages médicas.

---

## 📞 **Información de Contacto**

```javascript
// src/config/contact.js
export const contactConfig = {
  // Información principal
  clinicName: "PodoClinic Ecuador",
  doctorName: "Dra. [Nombre]",
  
  // Contacto directo
  phone: "+593 995 832 788",
  email: "info@podoclinic.ec",
  whatsappNumber: "593995832788", // Sin símbolos para URLs
  
  // Ubicación
  address: {
    full: "Manuel Jordan y Av La Florida, Quito",
    street: "Manuel Jordan y Av La Florida",
    city: "Quito",
    country: "Ecuador",
    coordinates: {
      lat: -0.1865, // Coordenadas para Google Maps
      lng: -78.4305
    }
  },
  
  // Horarios
  hours: {
    weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    saturday: "Sábados: 9:00 AM - 3:00 PM", 
    sunday: "Domingos: Cerrado",
    emergency: "Emergencias: 24/7 por WhatsApp"
  },
  
  // Redes sociales
  socialMedia: {
    facebook: "https://facebook.com/podoclinic",
    instagram: "https://instagram.com/podoclinic",
    tiktok: "https://tiktok.com/@podoclinic",
    whatsapp: "https://wa.me/593995832788"
  }
};
```

---

## 🎨 **Configuración de Diseño**

```javascript
// src/config/theme.js
export const themeConfig = {
  // Colores principales
  colors: {
    primary: "#60BEC3",      // Teal principal
    primaryHover: "#4A9DB8", // Teal hover
    secondary: "#79A373",    // Verde secundario
    accent: "#F59E0B",       // Amarillo para badges
    
    // Grises
    gray800: "#1f2937",
    gray700: "#374151", 
    gray600: "#4b5563",
    gray100: "#f3f4f6",
    
    // Estados
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6"
  },
  
  // Gradientes
  gradients: {
    background: "bg-gradient-to-br from-blue-50 to-green-50",
    hero: "bg-gradient-to-r from-blue-600 to-teal-600",
    card: "bg-white",
    premium: "bg-gradient-to-br from-gray-900 to-gray-800"
  },
  
  // Sombras
  shadows: {
    card: "shadow-xl",
    button: "shadow-lg hover:shadow-xl",
    modal: "shadow-2xl"
  },
  
  // Border radius
  borderRadius: {
    button: "rounded-xl",
    card: "rounded-2xl", 
    input: "rounded-lg",
    badge: "rounded-full"
  },
  
  // Transiciones
  transitions: {
    default: "transition-all duration-300",
    fast: "transition-all duration-150",
    slow: "transition-all duration-500"
  }
};
```

---

## 📊 **Configuración de Analytics**

```javascript
// src/config/analytics.js
export const analyticsConfig = {
  // Google Analytics
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX",
    events: {
      // Conversión principal
      reserva_cita: "click_reserva_cita",
      whatsapp_click: "click_whatsapp",
      phone_click: "click_phone",
      
      // Engagement
      quiz_started: "quiz_started",
      quiz_completed: "quiz_completed", 
      service_interest: "service_interest",
      faq_searched: "faq_searched",
      
      // Secciones
      hero_engagement: "hero_scroll",
      about_doctor_view: "about_doctor_view",
      services_view: "services_view",
      testimonials_view: "testimonials_view"
    }
  },
  
  // Facebook Pixel
  facebookPixel: {
    pixelId: "XXXXXXXXXXXXXXXXX",
    events: {
      pageView: "PageView",
      contact: "Contact", 
      lead: "Lead",
      viewContent: "ViewContent"
    }
  },
  
  // TikTok Pixel
  tiktokPixel: {
    pixelId: "XXXXXXXXXXXXXXXXX",
    events: {
      pageView: "PageView",
      contact: "Contact",
      completeRegistration: "CompleteRegistration"
    }
  },
  
  // Hotjar (opcional)
  hotjar: {
    hjid: "XXXXXXX",
    hjsv: "6"
  }
};
```

---

## 🏥 **Configuración de Servicios**

```javascript
// src/config/services.js
export const servicesConfig = [
  {
    id: "uneros",
    icon: "Scissors", // Lucide React icon name
    title: "Tratamiento de Uñeros",
    shortDescription: "Solución definitiva para uñas enterradas con técnica láser sin dolor",
    fullDescription: `Tratamiento especializado para uñas enterradas utilizando tecnología láser de última generación. 
                     Procedimiento ambulatorio sin dolor que elimina definitivamente el problema.`,
    benefits: [
      "Técnica láser sin dolor",
      "Recuperación rápida (24-48h)", 
      "98% de efectividad",
      "Sin recurrencia del problema"
    ],
    process: [
      "Evaluación y diagnóstico",
      "Aplicación de técnica láser",
      "Cuidados post-tratamiento",
      "Seguimiento especializado"
    ],
    duration: "30-45 minutos",
    recovery: "24-48 horas",
    price: "Desde $XX",
    ctaText: "Consulta Uñeros",
    landingPage: "/servicios/uneros",
    badge: "Más Solicitado",
    urgencyKeywords: ["dolor", "uñero", "uña enterrada", "infección"],
    faqCategory: "uneros"
  },
  {
    id: "hongos",
    icon: "Shield",
    title: "Tratamiento de Hongos",
    shortDescription: "Eliminación completa de hongos en uñas y pies con tratamientos avanzados",
    // ... resto de configuración similar
  },
  {
    id: "diabetes",
    icon: "Heart", 
    title: "Cuidado Pie Diabético",
    shortDescription: "Cuidado especializado y preventivo para pacientes diabéticos",
    // ... resto de configuración similar
  },
  {
    id: "general",
    icon: "Stethoscope",
    title: "Consulta General",
    shortDescription: "Evaluación completa de la salud de tus pies",
    // ... resto de configuración similar
  }
];
```

---

## 🧠 **Configuración del Smart Quiz**

```javascript
// src/config/quiz.js
export const quizConfig = {
  title: "Evaluación Rápida de Síntomas",
  subtitle: "Descubre qué tratamiento necesitas en 2 minutos",
  
  questions: [
    {
      id: 1,
      question: "¿Hace cuánto tiempo presenta estos síntomas?",
      type: "single",
      options: [
        { text: "Menos de 1 semana", score: 1 },
        { text: "1-4 semanas", score: 3 },
        { text: "1-3 meses", score: 4 },
        { text: "Más de 3 meses", score: 5 }
      ]
    },
    {
      id: 2, 
      question: "¿Cuál es el nivel de dolor que experimenta?",
      type: "single",
      options: [
        { text: "Sin dolor", score: 0 },
        { text: "Molestia leve", score: 2 },
        { text: "Dolor moderado", score: 4 },
        { text: "Dolor intenso", score: 5 }
      ]
    },
    {
      id: 3,
      question: "¿Ha intentado algún tratamiento casero?",
      type: "single", 
      options: [
        { text: "No he intentado nada", score: 1 },
        { text: "Remedios caseros sin éxito", score: 3 },
        { text: "Medicamentos sin receta", score: 4 },
        { text: "Varios tratamientos fallidos", score: 5 }
      ]
    },
    {
      id: 4,
      question: "¿El problema afecta sus actividades diarias?",
      type: "single",
      options: [
        { text: "No me afecta", score: 0 },
        { text: "Molestia ocasional", score: 2 },
        { text: "Dificulta caminar", score: 4 },
        { text: "Impide actividades normales", score: 5 }
      ]
    },
    {
      id: 5,
      question: "¿Ha notado empeoramiento recientemente?",
      type: "single",
      options: [
        { text: "Se mantiene igual", score: 1 },
        { text: "Empeora lentamente", score: 3 },
        { text: "Empeora rápidamente", score: 4 },
        { text: "Empeora cada día", score: 5 }
      ]
    }
  ],
  
  // Configuración de resultados
  results: {
    low: {
      range: [0, 8],
      title: "Riesgo Bajo",
      description: "Sus síntomas sugieren un problema leve que puede manejarse con cuidados apropiados.",
      recommendation: "Recomendamos una consulta preventiva para evitar complicaciones futuras.",
      ctaText: "Consulta Preventiva",
      urgency: "low",
      whatsappMessage: "Hola, completé el cuestionario y obtuve resultado de RIESGO BAJO. Me gustaría agendar una consulta preventiva."
    },
    moderate: {
      range: [9, 16], 
      title: "Riesgo Moderado",
      description: "Sus síntomas indican un problema que requiere atención médica especializada pronto.",
      recommendation: "Es importante una evaluación profesional para determinar el mejor tratamiento.",
      ctaText: "Agenda tu Evaluación",
      urgency: "moderate",
      whatsappMessage: "Hola, completé el cuestionario y obtuve resultado de RIESGO MODERADO. Necesito agendar una evaluación."
    },
    high: {
      range: [17, 25],
      title: "Riesgo Alto", 
      description: "Sus síntomas sugieren un problema que necesita atención médica urgente.",
      recommendation: "Recomendamos encarecidamente una consulta inmediata para evitar complicaciones.",
      ctaText: "Consulta URGENTE",
      urgency: "high",
      whatsappMessage: "Hola, completé el cuestionario y obtuve resultado de RIESGO ALTO. Necesito una consulta URGENTE."
    }
  }
};
```

---

## 📄 **Configuración de SEO**

```javascript
// src/config/seo.js
export const seoConfig = {
  // Meta tags principales
  defaultMeta: {
    title: "PodoClinic Ecuador - Tratamiento de Uñeros y Cuidado de Pies",
    description: "Especialistas en tratamiento de uñeros con técnica láser sin dolor. Consulta GRATIS. Recuperación en 24 horas. Agenda tu cita en Quito.",
    keywords: "podólogo Quito, uñeros, tratamiento láser, hongos uñas, pie diabético, consulta podológica",
    author: "PodoClinic Ecuador",
    robots: "index, follow"
  },
  
  // Open Graph (redes sociales)
  openGraph: {
    siteName: "PodoClinic Ecuador",
    type: "website",
    locale: "es_EC",
    image: "/images/podoclinic-og.jpg",
    imageAlt: "PodoClinic Ecuador - Especialistas en Cuidado de Pies"
  },
  
  // Schema.org
  structuredData: {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "PodoClinic Ecuador",
    "description": "Clínica especializada en podología y cuidado de pies",
    "medicalSpecialty": "Podology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manuel Jordan y Av La Florida",
      "addressLocality": "Quito", 
      "addressCountry": "EC"
    },
    "telephone": "+593995832788",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$"
  },
  
  // Meta tags por página
  pages: {
    home: {
      title: "PodoClinic - Tratamiento de Uñeros sin Dolor | Quito Ecuador",
      description: "Elimina uñeros con técnica láser sin dolor. Consulta GRATIS. 500+ pacientes satisfechos. Agenda tu cita en Quito."
    },
    servicios: {
      title: "Servicios Podológicos | PodoClinic Ecuador",
      description: "Tratamientos especializados: uñeros, hongos, pie diabético. Técnicas avanzadas sin dolor. Consulta GRATIS."
    },
    uneros: {
      title: "Tratamiento de Uñeros sin Dolor | Técnica Láser | PodoClinic",
      description: "Elimina uñeros definitivamente con técnica láser. Sin dolor, sin cirugía. Recuperación en 24h. Consulta GRATIS en Quito."
    }
  }
};
```

---

## 🚨 **Configuración de Emergencia/Urgencia**

```javascript
// src/config/emergency.js
export const emergencyConfig = {
  // Indicadores de urgencia
  urgencyKeywords: [
    "dolor intenso", "sangrado", "pus", "infección",
    "fiebre", "hinchazón", "no puedo caminar",
    "urgente", "emergencia", "diabético"
  ],
  
  // Respuestas automáticas por urgencia
  autoResponses: {
    high: {
      message: "Su caso indica urgencia médica. Le contactaremos en los próximos 15 minutos.",
      priority: 1,
      notification: true
    },
    moderate: {
      message: "Hemos recibido su consulta. Le responderemos en las próximas 2 horas.",
      priority: 2, 
      notification: false
    },
    low: {
      message: "Gracias por su consulta. Le responderemos durante el día.",
      priority: 3,
      notification: false
    }
  },
  
  // Horarios de atención urgente
  emergencyHours: {
    weekdays: { start: "07:00", end: "22:00" },
    weekends: { start: "08:00", end: "20:00" },
    afterHours: "Solo emergencias reales por WhatsApp"
  }
};
```

---

## 🔄 **Configuración de A/B Testing**

```javascript
// src/config/testing.js
export const testingConfig = {
  // Elementos para testing
  variants: {
    headlines: {
      original: "Elimina el dolor de uñeros en 24 horas",
      variant_a: "Uñeros: Solución definitiva sin cirugía",
      variant_b: "Técnica láser que elimina uñeros para siempre"
    },
    
    cta_buttons: {
      original: "Reserva tu Cita GRATIS",
      variant_a: "Consulta Inmediata GRATIS", 
      variant_b: "Elimina el Dolor Hoy"
    },
    
    quiz_intro: {
      original: "Descubre qué tratamiento necesitas",
      variant_a: "Evaluación gratuita en 2 minutos",
      variant_b: "Test personalizado para tu caso"
    }
  },
  
  // Configuración de splits
  trafficSplit: {
    control: 50,    // 50% control
    variant_a: 25,  // 25% variante A
    variant_b: 25   // 25% variante B
  },
  
  // Métricas a medir
  metrics: {
    primary: "conversion_rate",
    secondary: ["click_through_rate", "quiz_completion", "time_on_page"]
  }
};
```

---

## 📋 **Checklist de Personalización**

### **Para Nueva Especialidad Médica**
```javascript
// Elementos a modificar
const customizationChecklist = {
  // Información básica
  contact: "✓ Actualizar información de contacto",
  branding: "✓ Cambiar nombre de clínica/doctor",
  location: "✓ Modificar dirección y coordenadas",
  
  // Contenido médico
  services: "✓ Definir servicios de la especialidad",
  quiz: "✓ Adaptar preguntas a síntomas específicos",
  faqs: "✓ Crear FAQs relevantes a la especialidad",
  testimonials: "✓ Recopilar testimonios reales",
  
  // Diseño
  colors: "✓ Ajustar paleta según especialidad",
  icons: "✓ Seleccionar iconografía apropiada",
  images: "✓ Conseguir imágenes profesionales",
  
  // SEO
  keywords: "✓ Research palabras clave específicas",
  meta_tags: "✓ Optimizar para búsquedas locales",
  schema: "✓ Configurar datos estructurados",
  
  // Analytics
  goals: "✓ Definir eventos de conversión",
  tracking: "✓ Configurar pixels y analytics",
  testing: "✓ Planificar A/B tests relevantes"
};
```

---

## 🔧 **Variables de Entorno**

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_TIKTOK_PIXEL_ID=XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX

# Información de contacto (para facilitar cambios)
NEXT_PUBLIC_CLINIC_NAME="PodoClinic Ecuador"
NEXT_PUBLIC_DOCTOR_NAME="Dra. [Nombre]"
NEXT_PUBLIC_PHONE="+593995832788"
NEXT_PUBLIC_EMAIL="info@podoclinic.ec"
NEXT_PUBLIC_ADDRESS="Manuel Jordan y Av La Florida, Quito"

# Colores del tema (para fácil customización)
NEXT_PUBLIC_PRIMARY_COLOR="#60BEC3"
NEXT_PUBLIC_SECONDARY_COLOR="#79A373"
```

---

*Configuración centralizada actualizada: Octubre 2025*
*Facilita la customización para nuevas especialidades médicas*