export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEO_METADATA: Record<string, PageMetadata> = {
  // Página principal
  home: {
    title: "Podólogo a Domicilio Quito Norte | Dra. Cristina Muñoz - Podoclinicec",
    description: "Podólogo especialista a domicilio en Quito Norte. 13 reseñas Google 5 estrellas. Dra. Cristina Muñoz: uñeros, pie diabético, hongos. Desde $35. Agenda tu consulta.",
    keywords: "podólogo domicilio quito norte, uñeros quito, pie diabético, hongos uñas, podología a domicilio, dra cristina muñoz",
    canonical: "https://podoclinicec.com"
  },

  // FAQ
  faq: {
    title: "Preguntas Frecuentes | Podólogo Quito Norte - Podoclinicec",
    description: "🏥 Respuestas a preguntas frecuentes sobre podología en Quito Norte. ⭐ Precios, servicios, horarios y consultas. Resuelve tus dudas ahora.",
    keywords: "preguntas frecuentes podólogo, FAQ podología quito norte, precios podólogo, horarios atención",
    canonical: "https://podoclinicec.com/faq"
  },

  // Servicios generales
  servicios: {
    title: "Servicios de Podología | Tratamientos Especializados - Podoclinicec",
    description: "Servicios podológicos especializados en Quito Norte: uñeros, pie diabético, hongos, verrugas plantares, profilaxis podal. Atención domicilio y consultorio.",
    keywords: "servicios podología quito, tratamientos podológicos, uñeros, pie diabético, hongos uñas, verrugas plantares",
    canonical: "https://podoclinicec.com/servicios"
  },

  // Servicios específicos
  'servicios-domicilio': {
    title: "Podólogo a Domicilio Quito Norte | Atención en Casa - Podoclinicec",
    description: "Servicio de podología a domicilio en Quito Norte. Sin costo adicional por traslado. Atención profesional en la comodidad de tu hogar. Agenda hoy.",
    keywords: "podólogo domicilio quito norte, podología casa, atención domicilio, podólogo en casa quito",
    canonical: "https://podoclinicec.com/servicios/domicilio"
  },

  'servicios-uneros': {
    title: "Tratamiento de Uñeros Quito Norte | Sin Dolor - Podoclinicec",
    description: "Tratamiento profesional de uñeros (uñas encarnadas) en Quito Norte. Técnica sin dolor, recuperación 24-48h. Especialista Dra. Cristina Muñoz.",
    keywords: "tratamiento uñeros quito norte, uñas encarnadas, onicocriptosis, podólogo uñeros quito",
    canonical: "https://podoclinicec.com/servicios/uneros"
  },

  'servicios-hongos': {
    title: "Tratamiento de Hongos en Uñas | Onicomicosis Quito - Podoclinicec",
    description: "Eliminación de hongos en uñas y pies en Quito Norte. Tratamiento antifúngico profesional. Resultados visibles desde la primera sesión.",
    keywords: "tratamiento hongos uñas quito, onicomicosis, hongos pies quito norte, antifúngico profesional",
    canonical: "https://podoclinicec.com/servicios/hongos"
  },

  'servicios-verrugas': {
    title: "Eliminación de Verrugas Plantares | Cauterización Quito - Podoclinicec",
    description: "Eliminación profesional de verrugas plantares por cauterización en Quito Norte. Procedimiento seguro y efectivo. Sin recidiva.",
    keywords: "verrugas plantares quito, eliminación verrugas pies, cauterización verrugas, podólogo verrugas quito norte",
    canonical: "https://podoclinicec.com/servicios/verrugas"
  },

  'servicios-profilaxis': {
    title: "Profilaxis Podal | Limpieza Profesional de Pies - Podoclinicec",
    description: "Profilaxis podal completa en Quito Norte: corte de uñas, eliminación de callosidades, limpieza profunda. Mantén tus pies saludables.",
    keywords: "profilaxis podal quito norte, limpieza pies profesional, corte uñas, eliminación callosidades",
    canonical: "https://podoclinicec.com/servicios/profilaxis"
  },

  // Ubicaciones específicas
  'quito-norte': {
    title: "Podólogo en Quito Norte | Zona La Florida, Iñaquito - Podoclinicec",
    description: "El mejor podólogo de Quito Norte. Cobertura La Florida, Iñaquito, Rumipamba. Dra. Cristina Muñoz, 8 años experiencia. Atención domicilio.",
    keywords: "podólogo quito norte, podología la florida, podólogo iñaquito, podólogo rumipamba",
    canonical: "https://podoclinicec.com/podologia-quito-norte"
  },

  'podologo-en-quito': {
    title: "El Mejor Podólogo en Quito | Especialista Certificado - Podoclinicec",
    description: "Encuentra el mejor podólogo en Quito. Dra. Cristina Muñoz, especialista certificada con 8 años de experiencia. Consulta inicial gratuita.",
    keywords: "mejor podólogo quito, especialista pies quito, podólogo certificado, doctor pies quito",
    canonical: "https://podoclinicec.com/podologo-en-quito"
  },

  'uneros-quito': {
    title: "Especialista en Uñeros Quito | Tratamiento Sin Dolor - Podoclinicec",
    description: "Especialista en uñeros (uñas encarnadas) en Quito. Tratamiento sin dolor, técnica avanzada. Dra. Cristina Muñoz. Resultados garantizados.",
    keywords: "especialista uñeros quito, uñas encarnadas quito, onicocriptosis quito, tratamiento uñeros",
    canonical: "https://podoclinicec.com/uneros-quito"
  },

  'podologia-runners': {
    title: "Podología Deportiva Runners | Especialista en Corredores Quito",
    description: "Podología especializada para runners en Quito. Análisis de pisada, prevención lesiones, tratamiento específico para corredores. Optimiza tu rendimiento.",
    keywords: "podología deportiva quito, podólogo runners, análisis pisada corredores, lesiones running",
    canonical: "https://podoclinicec.com/podologia-runners"
  },

  // Blog y tips
  'blog': {
    title: "Blog de Podología | Consejos y Tips para el Cuidado de Pies",
    description: "Blog especializado en podología: consejos, tips y guías para el cuidado de pies. Información de calidad por la Dra. Cristina Muñoz, especialista en Quito.",
    keywords: "blog podología, consejos cuidado pies, tips pies sanos, información podológica",
    canonical: "https://podoclinicec.com/blog"
  },

  'tips': {
    title: "Tips para el Cuidado de Pies | Consejos de Podología - Podoclinicec",
    description: "Tips y consejos profesionales para el cuidado de pies. Prevención de uñeros, hongos y problemas podológicos. Guías prácticas de la Dra. Cristina Muñoz.",
    keywords: "tips cuidado pies, consejos podología, prevención uñeros, cuidado pies casa",
    canonical: "https://podoclinicec.com/tips"
  },

  // Páginas específicas del blog
  'blog-pie-diabetico': {
    title: "Cuidado del Pie Diabético | Guía Completa de Prevención - Blog",
    description: "Guía completa para el cuidado del pie diabético: prevención, síntomas, tratamiento. Consejos especializados para pacientes diabéticos en Quito.",
    keywords: "pie diabético cuidado, prevención pie diabético, diabetes pies, guía pie diabético",
    canonical: "https://podoclinicec.com/blog/pie-diabetico"
  },

  'blog-hongos': {
    title: "Cómo Prevenir y Tratar Hongos en las Uñas | Blog Podología",
    description: "Todo sobre hongos en uñas: causas, síntomas, tratamiento y prevención. Consejos profesionales para mantener uñas saludables y libres de hongos.",
    keywords: "hongos uñas prevención, onicomicosis tratamiento, hongos pies prevención, uñas saludables",
    canonical: "https://podoclinicec.com/blog/hongos"
  },

  'blog-uneros': {
    title: "Uñeros: Causas, Prevención y Tratamiento | Blog Especializado",
    description: "Guía completa sobre uñeros (uñas encarnadas): causas, síntomas, prevención y tratamiento. Consejos de la Dra. Cristina Muñoz para evitar complicaciones.",
    keywords: "uñeros prevención, uñas encarnadas causas, onicocriptosis, tratamiento uñeros casa",
    canonical: "https://podoclinicec.com/blog/uneros"
  }
};

// Función para obtener metadata de una página específica
export function getPageMetadata(pageKey: string): PageMetadata {
  return SEO_METADATA[pageKey] || SEO_METADATA.home;
}

// Función para validar que no haya descriptions duplicadas
export function validateUniqueDescriptions(): boolean {
  const descriptions = Object.values(SEO_METADATA).map(meta => meta.description);
  const uniqueDescriptions = new Set(descriptions);
  return descriptions.length === uniqueDescriptions.size;
}

// Función para obtener todas las descriptions (útil para debugging)
export function getAllDescriptions(): Record<string, string> {
  const result: Record<string, string> = {};
  Object.entries(SEO_METADATA).forEach(([key, meta]) => {
    result[key] = meta.description;
  });
  return result;
}