// 🎯 Template Configuration System
// Configuración central para personalizar el template según la industria/cliente

export interface TemplateConfig {
  // Información básica de la empresa
  business: {
    name: string;
    tagline: string;
    description: string;
    logo: string;
    favicon: string;
    industry: 'medical' | 'business' | 'creative' | 'local-services' | 'e-commerce';
  };

  // Branding y diseño
  branding: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    theme: 'medical' | 'business' | 'creative' | 'tech' | 'local';
    fontFamily: string;
  };

  // Información de contacto
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
    address: {
      street: string;
      city: string;
      country: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    hours: {
      weekdays: string;
      saturday: string;
      sunday?: string;
    };
  };

  // Servicios principales
  services: ServiceConfig[];

  // Configuración del Hero
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage?: string;
    ctaPrimary: {
      text: string;
      action: 'contact' | 'phone' | 'whatsapp' | 'modal' | 'services';
    };
    ctaSecondary?: {
      text: string;
      action: 'services' | 'about' | 'blog' | 'contact';
    };
    badges: string[];
    quickLinks: QuickLink[];
  };

  // Configuración SEO
  seo: {
    siteName: string;
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    socialImage: string;
  };

  // CMS Configuration
  cms?: {
    enabled: boolean;
    provider: 'custom' | 'strapi' | 'contentful' | 'sanity';
    apiUrl?: string;
    tenantId?: string;
  };

  // Features habilitadas
  features: {
    blog: boolean;
    testimonials: boolean;
    faq: boolean;
    quiz: boolean;
    locationHub: boolean;
    appointments: boolean;
    multiLanguage: boolean;
  };

  // Analytics y tracking
  analytics?: {
    googleAnalytics?: string;
    facebookPixel?: string;
    tiktokPixel?: string;
  };
}

export interface ServiceConfig {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji o nombre de icono de Lucide
  features: string[];
  price?: string;
  link: string;
  badge?: string;
  urgent?: boolean;
  category: string;
}

export interface QuickLink {
  title: string;
  emoji: string;
  link: string;
  description: string;
}

// 🏥 CONFIGURACIÓN MÉDICA (EJEMPLO: PODOLOGÍA)
export const MEDICAL_TEMPLATE_CONFIG: TemplateConfig = {
  business: {
    name: "PodoClinic",
    tagline: "Especialistas en Cuidado Podal",
    description: "Tratamientos podológicos profesionales con técnicas avanzadas y atención personalizada",
    logo: "/logo.png",
    favicon: "/favicon.ico",
    industry: "medical"
  },

  branding: {
    primaryColor: "#60BEC3", // Verde médico
    secondaryColor: "#059669", // Verde más oscuro
    accentColor: "#0891b2", // Azul complementario
    theme: "medical",
    fontFamily: "Inter, sans-serif"
  },

  contact: {
    phone: "+593995832788",
    email: "contacto@podoclinic.com",
    whatsapp: "593995832788",
    address: {
      street: "Manuel Jordan y Av La Florida",
      city: "Quito Norte",
      country: "Ecuador",
      coordinates: {
        lat: -0.1807,
        lng: -78.4678
      }
    },
    hours: {
      weekdays: "Lun-Vie 8:00-18:00",
      saturday: "Sáb 8:00-14:00",
      sunday: "Cerrado"
    }
  },

  services: [
    {
      id: "uneros",
      title: "Tratamiento de Uñeros",
      description: "Tratamiento profesional de uñas encarnadas sin dolor. Técnica especializada con recuperación en 24-48 horas.",
      icon: "🦶",
      features: ["Sin dolor", "Técnica especializada", "Recuperación rápida", "Prevención de recaídas"],
      price: "Desde $35",
      link: "/servicios/uneros",
      badge: "Más Solicitado",
      urgent: true,
      category: "urgente"
    },
    {
      id: "pie-diabetico",
      title: "Cuidado Pie Diabético",
      description: "Atención especializada para prevenir complicaciones en pacientes diabéticos.",
      icon: "🩺",
      features: ["Evaluación integral", "Cuidados preventivos", "Seguimiento personalizado", "Educación en autocuidado"],
      price: "Consulta WhatsApp",
      link: "/servicios/pie-diabetico",
      urgent: false,
      category: "preventivo"
    },
    {
      id: "profilaxis",
      title: "Profilaxis Podal",
      description: "Limpieza profunda, corte de uñas, eliminación de callosidades e hidratación.",
      icon: "✨",
      features: ["Limpieza profunda", "Corte anatómico", "Eliminación callosidades", "Hidratación profesional"],
      price: "Desde $35",
      link: "/servicios/profilaxis",
      category: "mantenimiento"
    },
    {
      id: "hongos",
      title: "Tratamiento de Hongos",
      description: "Eliminación efectiva de hongos en uñas y pies con tecnología avanzada.",
      icon: "🔬",
      features: ["Diagnóstico preciso", "Tratamiento avanzado", "Seguimiento continuo", "Prevención recaídas"],
      price: "Desde $45",
      link: "/servicios/hongos",
      category: "tratamiento"
    }
  ],

  hero: {
    title: "Cuidado Profesional de tus Pies",
    subtitle: "Especialistas en Podología",
    description: "Tratamientos especializados con técnicas avanzadas. Agenda tu cita y experimenta la diferencia de un cuidado profesional.",
    ctaPrimary: {
      text: "Reserva tu Cita",
      action: "modal"
    },
    ctaSecondary: {
      text: "Ver Servicios",
      action: "services"
    },
    badges: [
      "⭐ 13+ Reseñas 5 Estrellas",
      "🏥 5+ Años Experiencia",
      "🦶 +500 Pacientes Atendidos"
    ],
    quickLinks: [
      {
        title: "Uñeros Especializado",
        emoji: "🩹",
        link: "/servicios/uneros",
        description: "Servicio #1"
      },
      {
        title: "Atención Domicilio",
        emoji: "🏠",
        link: "/servicios/domicilio",
        description: "Comodidad total"
      },
      {
        title: "Pie Diabético",
        emoji: "🩺",
        link: "/servicios/pie-diabetico",
        description: "Cuidado especializado"
      }
    ]
  },

  seo: {
    siteName: "PodoClinic",
    siteUrl: "https://podoclinic.com",
    defaultTitle: "PodoClinic - Especialistas en Cuidado Podal | Quito Norte",
    defaultDescription: "Tratamientos podológicos profesionales en Quito Norte. Especialistas en uñeros, pie diabético, hongos y profilaxis podal. ⭐ 13+ reseñas 5 estrellas.",
    keywords: ["podología", "uñeros", "pie diabético", "hongos", "quito norte", "podólogo"],
    socialImage: "/social-image.jpg"
  },

  cms: {
    enabled: true,
    provider: "custom",
    apiUrl: process.env.NEXT_PUBLIC_CMS_URL,
    tenantId: process.env.NEXT_PUBLIC_CMS_TENANT_ID
  },

  features: {
    blog: true,
    testimonials: true,
    faq: true,
    quiz: true,
    locationHub: true,
    appointments: true,
    multiLanguage: false
  },

  analytics: {
    googleAnalytics: "G-XXXXXXXXXX",
    facebookPixel: "XXXXXXXXXXXX",
    tiktokPixel: "XXXXXXXXXXXX"
  }
};

// 💼 CONFIGURACIÓN BUSINESS (EJEMPLO: CONSULTORÍA)
export const BUSINESS_TEMPLATE_CONFIG: TemplateConfig = {
  business: {
    name: "BusinessHub",
    tagline: "Soluciones Empresariales Inteligentes",
    description: "Consultoría estratégica y soluciones tecnológicas para impulsar tu negocio",
    logo: "/logo-business.png",
    favicon: "/favicon-business.ico",
    industry: "business"
  },

  branding: {
    primaryColor: "#3730a3", // Azul corporativo
    secondaryColor: "#1e40af", // Azul más oscuro
    accentColor: "#059669", // Verde complementario
    theme: "business",
    fontFamily: "Inter, sans-serif"
  },

  contact: {
    phone: "+1234567890",
    email: "info@businesshub.com",
    whatsapp: "1234567890",
    address: {
      street: "123 Business St",
      city: "Business City",
      country: "USA"
    },
    hours: {
      weekdays: "Mon-Fri 9:00-18:00",
      saturday: "Sat 9:00-15:00"
    }
  },

  services: [
    {
      id: "strategy",
      title: "Consultoría Estratégica",
      description: "Desarrollamos estrategias personalizadas para acelerar el crecimiento de tu empresa.",
      icon: "🎯",
      features: ["Análisis competitivo", "Plan estratégico", "KPIs personalizados", "Seguimiento mensual"],
      price: "Desde $2,500",
      link: "/servicios/estrategia",
      badge: "Popular",
      category: "consultoria"
    },
    {
      id: "technology",
      title: "Soluciones Tecnológicas",
      description: "Implementamos tecnología que optimiza tus procesos y mejora la productividad.",
      icon: "💻",
      features: ["Automatización", "Sistemas integrados", "Cloud migration", "Soporte 24/7"],
      price: "Desde $5,000",
      link: "/servicios/tecnologia",
      category: "tecnologia"
    }
  ],

  hero: {
    title: "Impulsa tu Negocio al Siguiente Nivel",
    subtitle: "Consultoría y Tecnología",
    description: "Transformamos empresas con estrategias inteligentes y soluciones tecnológicas avanzadas.",
    ctaPrimary: {
      text: "Consulta Gratuita",
      action: "contact"
    },
    ctaSecondary: {
      text: "Ver Casos de Éxito",
      action: "services"
    },
    badges: [
      "🏆 50+ Empresas Transformadas",
      "💼 10+ Años Experiencia",
      "📈 300% ROI Promedio"
    ],
    quickLinks: [
      {
        title: "Consultoría Express",
        emoji: "⚡",
        link: "/servicios/express",
        description: "1 hora gratis"
      },
      {
        title: "Auditoría Gratis",
        emoji: "🔍",
        link: "/auditoria",
        description: "Análisis completo"
      }
    ]
  },

  seo: {
    siteName: "BusinessHub",
    siteUrl: "https://businesshub.com",
    defaultTitle: "BusinessHub - Consultoría Empresarial y Soluciones Tecnológicas",
    defaultDescription: "Transformamos empresas con consultoría estratégica y soluciones tecnológicas. 50+ empresas transformadas. Consulta gratuita disponible.",
    keywords: ["consultoría", "estrategia empresarial", "soluciones tecnológicas", "transformación digital"],
    socialImage: "/social-business.jpg"
  },

  features: {
    blog: true,
    testimonials: true,
    faq: true,
    quiz: false,
    locationHub: false,
    appointments: true,
    multiLanguage: true
  }
};

// 🎨 CONFIGURACIÓN CREATIVE (EJEMPLO: ESTUDIO DE DISEÑO)
export const CREATIVE_TEMPLATE_CONFIG: TemplateConfig = {
  business: {
    name: "CreativeStudio",
    tagline: "Creatividad Sin Límites",
    description: "Diseño, branding y experiencias digitales que conectan con tu audiencia",
    logo: "/logo-creative.png",
    favicon: "/favicon-creative.ico",
    industry: "creative"
  },

  branding: {
    primaryColor: "#c026d3", // Magenta creativo
    secondaryColor: "#a21caf", // Magenta oscuro
    accentColor: "#ea580c", // Naranja complementario
    theme: "creative",
    fontFamily: "Poppins, sans-serif"
  },

  contact: {
    phone: "+1987654321",
    email: "hello@creativestudio.com",
    whatsapp: "1987654321",
    address: {
      street: "456 Creative Ave",
      city: "Design City",
      country: "USA"
    },
    hours: {
      weekdays: "Mon-Fri 10:00-19:00",
      saturday: "Sat 10:00-16:00"
    }
  },

  services: [
    {
      id: "branding",
      title: "Branding Completo",
      description: "Creamos identidades visuales únicas que reflejan la esencia de tu marca.",
      icon: "🎨",
      features: ["Logo design", "Paleta de colores", "Tipografías", "Guidelines"],
      price: "Desde $1,200",
      link: "/servicios/branding",
      badge: "Favorito",
      category: "branding"
    },
    {
      id: "web-design",
      title: "Diseño Web",
      description: "Sitios web únicos y funcionales que convierten visitantes en clientes.",
      icon: "💻",
      features: ["Diseño responsive", "UX/UI optimizado", "SEO integrado", "CMS personalizado"],
      price: "Desde $2,800",
      link: "/servicios/web",
      category: "web"
    }
  ],

  hero: {
    title: "Diseñamos Experiencias Memorables",
    subtitle: "Estudio Creativo",
    description: "Transformamos ideas en realidades visuales que inspiran y conectan con tu audiencia.",
    ctaPrimary: {
      text: "Ver Portfolio",
      action: "services"
    },
    ctaSecondary: {
      text: "Proyecto Gratis",
      action: "contact"
    },
    badges: [
      "🏆 100+ Proyectos Exitosos",
      "🎨 5+ Años Creando",
      "⭐ 98% Clientes Satisfechos"
    ],
    quickLinks: [
      {
        title: "Branding Express",
        emoji: "⚡",
        link: "/branding-express",
        description: "7 días"
      },
      {
        title: "Consulta Creativa",
        emoji: "💡",
        link: "/consulta",
        description: "Gratis 30min"
      }
    ]
  },

  seo: {
    siteName: "CreativeStudio",
    siteUrl: "https://creativestudio.com",
    defaultTitle: "CreativeStudio - Diseño y Branding que Conecta",
    defaultDescription: "Estudio creativo especializado en branding, diseño web y experiencias digitales. 100+ proyectos exitosos. Consulta creativa gratuita.",
    keywords: ["diseño gráfico", "branding", "diseño web", "identidad visual", "estudio creativo"],
    socialImage: "/social-creative.jpg"
  },

  features: {
    blog: true,
    testimonials: true,
    faq: true,
    quiz: false,
    locationHub: false,
    appointments: true,
    multiLanguage: false
  }
};

// Función para obtener la configuración actual
export function getTemplateConfig(): TemplateConfig {
  // Por defecto usa la configuración médica
  // En producción, esto se leería desde variables de entorno o base de datos
  return MEDICAL_TEMPLATE_CONFIG;
}

// Función para cambiar configuración dinámicamente
export function setTemplateConfig(config: Partial<TemplateConfig>): TemplateConfig {
  const currentConfig = getTemplateConfig();
  return { ...currentConfig, ...config };
}

// Export por defecto
export default MEDICAL_TEMPLATE_CONFIG;