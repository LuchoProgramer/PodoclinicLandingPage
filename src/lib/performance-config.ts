/**
 * Configuración de optimización de rendimiento para SEO
 * Incluye configuraciones para Core Web Vitals y mejoras de velocidad
 */

export const PERFORMANCE_CONFIG = {
  // Configuración de caché para el CMS
  CMS_REVALIDATE_INTERVAL: 300, // 5 minutos para posts CMS
  STATIC_REVALIDATE_INTERVAL: 86400, // 24 horas para contenido estático
  
  // Configuración de imágenes
  IMAGE_QUALITY: 85, // Calidad óptima para SEO vs tamaño
  IMAGE_FORMATS: ['webp', 'jpeg'], // Formatos modernos primero
  IMAGE_SIZES: {
    small: 320,
    medium: 640,
    large: 1024,
    xlarge: 1920
  },
  
  // Configuración de lazy loading
  LAZY_LOADING_THRESHOLD: '200px', // Cargar 200px antes de que sea visible
  
  // Configuración de preload/prefetch
  CRITICAL_RESOURCES: [
    '/fonts/inter.woff2',
    '/images/logo-podoclinic.webp'
  ],
  
  // Configuración de compresión
  COMPRESSION: {
    enabled: true,
    level: 6, // Balance entre velocidad y compresión
    threshold: 1024 // Comprimir archivos > 1KB
  },
  
  // Métricas Core Web Vitals objetivo
  WEB_VITALS_TARGETS: {
    LCP: 2.5, // Largest Contentful Paint (segundos)
    FID: 100, // First Input Delay (milisegundos) 
    CLS: 0.1,  // Cumulative Layout Shift
    FCP: 1.8,  // First Contentful Paint (segundos)
    TTFB: 600  // Time to First Byte (milisegundos)
  },
  
  // Configuración de prefetch para SEO
  PREFETCH_PRIORITY_URLS: [
    '/servicios/uneros',
    '/servicios/pie-diabetico',
    '/servicios/hongos',
    '/blog',
    '/faq'
  ]
};

/**
 * Utilidades para optimización de rendimiento
 */
export const PerformanceUtils = {
  /**
   * Genera srcSet optimizado para imágenes responsivas
   */
  generateSrcSet: (baseSrc: string, sizes: number[]) => {
    return sizes.map(size => `${baseSrc}?w=${size}&q=${PERFORMANCE_CONFIG.IMAGE_QUALITY} ${size}w`).join(', ');
  },

  /**
   * Calcula el tamaño óptimo de imagen según el viewport
   */
  getOptimalImageSize: (containerWidth: number, devicePixelRatio: number = 1) => {
    const targetWidth = containerWidth * devicePixelRatio;
    const { small, medium, large, xlarge } = PERFORMANCE_CONFIG.IMAGE_SIZES;
    
    if (targetWidth <= small) return small;
    if (targetWidth <= medium) return medium;
    if (targetWidth <= large) return large;
    return xlarge;
  },

  /**
   * Configuración de next/image optimizada para SEO
   */
  getImageProps: (src: string, alt: string, priority: boolean = false) => ({
    src,
    alt,
    quality: PERFORMANCE_CONFIG.IMAGE_QUALITY,
    priority,
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyKKa6+1TneK9kMZWlATrScltnFyslzOrE5tIRYLqJYx9A/YjKYZ8WD0KGLRGGp2NV11Hy1LVaa3vnSKsBFcraVddnyXKdKXf7v7/a5c1hLVXKuz6/9oOOxB4uEF4bjr2UvtT5JmZ7+vvO0mFX0/TlzfkzXApq6rqKmWTTMpGbnHrhhnEjBhG5SBVvJdfyHdESNk=',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    loading: priority ? 'eager' as const : 'lazy' as const
  }),

  /**
   * Configuración de caché para diferentes tipos de contenido
   */
  getCacheConfig: (contentType: 'cms' | 'static' | 'dynamic') => {
    switch (contentType) {
      case 'cms':
        return { revalidate: PERFORMANCE_CONFIG.CMS_REVALIDATE_INTERVAL };
      case 'static':
        return { revalidate: PERFORMANCE_CONFIG.STATIC_REVALIDATE_INTERVAL };
      case 'dynamic':
        return { revalidate: 60 }; // 1 minuto para contenido muy dinámico
      default:
        return { revalidate: PERFORMANCE_CONFIG.CMS_REVALIDATE_INTERVAL };
    }
  },

  /**
   * Métricas de rendimiento para monitoreo
   */
  logWebVitals: (metric: any) => {
    if (process.env.NODE_ENV === 'production') {
      // En producción, enviar métricas a servicio de analytics
      console.log(`📊 Web Vitals - ${metric.name}: ${metric.value} (${metric.rating})`);
      
      // Opcional: Enviar a Google Analytics o servicio de monitoreo
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    }
  }
};

/**
 * Configuración específica para SEO médico
 */
export const MEDICAL_SEO_CONFIG = {
  // Structured data optimizado para contenido médico
  MEDICAL_ENTITY_TYPES: {
    'uneros': 'Ingrown Toenail',
    'pie-diabetico': 'Diabetic Foot',
    'hongos': 'Onychomycosis',
    'podologia-deportiva': 'Sports Podiatry',
    'cuidado-preventivo': 'Preventive Foot Care'
  },
  
  // Keywords médicas relevantes para Ecuador
  MEDICAL_KEYWORDS: {
    primary: ['podología', 'podólogo', 'uñeros', 'pie diabético', 'hongos uñas'],
    secondary: ['Quito Norte', 'La Florida', 'domicilio', 'especialista'],
    medical: ['onicocriptosis', 'onicomicosis', 'podiatría', 'quiropodología']
  },
  
  // Configuración de autoridad médica
  MEDICAL_AUTHORITY: {
    doctor: 'Cristina Muñoz',
    specialty: 'Podología',
    clinic: 'PodoClinicec',
    location: 'Quito Norte, Ecuador',
    credentials: ['Especialista en Podología', 'Tratamientos Domicilio']
  }
};