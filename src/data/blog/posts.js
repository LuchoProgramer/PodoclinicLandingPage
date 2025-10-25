// Base de datos de posts del blog
const blogPosts = [
  {
    id: "podologia-domicilio-quito-norte",
    title: "Podología a Domicilio en Quito Norte: ¡Cuidar tus Pies Nunca Fue Tan Fácil!",
    slug: "podologia-domicilio-quito-norte",
    excerpt: "¿Quieres podología profesional en tu casa? Descubre cómo la Dra. Cristina Muñoz cuida tus pies en Quito norte por solo $15. Comodidad, seguridad y experiencia a domicilio.",
    content: ``,
    category: "uneros",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-08",
    readTime: "7 min",
    image: "/blog/podologia-domicilio-quito-norte.jpg",
    tags: ["podología", "a domicilio", "quito", "pie diabético"],
    metaTitle: "Podología a Domicilio en Quito Norte | Dra. Cristina Muñoz",
    metaDescription: "Podología a domicilio en Quito norte con la Dra. Cristina Muñoz. Atención profesional, segura y económica en tu casa por solo $15.",
    featured: true,
    cta: {
      text: "Agendar Podología a Domicilio",
      link: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20a%20domicilio%20en%20Quito%20norte"
    }
  },
  {
    id: "guia-prevenir-pie-diabetico-quito",
    title: "Guía Completa para Prevenir el Pie Diabético en Quito: ¡Cuida tus Pies con Podoclinicec!",
    slug: "guia-prevenir-pie-diabetico-quito",
    excerpt: "¿Sabías que el pie diabético es más común de lo que crees en Quito? Aprende a prevenirlo y cuida tus pies con la Dra. Cristina Muñoz a domicilio por solo $15.",
    content: ``,
    category: "pie-diabetico",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-08",
    readTime: "8 min",
    image: "/blog/pie-diabetico-cuidado.jpg",
    tags: ["pie diabético", "prevención", "podología", "quito"],
    metaTitle: "Guía para Prevenir Pie Diabético en Quito | Podoclinicec",
  metaDescription: "Prevención de pie diabético en Quito: consejos prácticos y atención a domicilio por la Dra. Cristina Muñoz.",
    featured: true,
    cta: {
      text: "Agendar Consulta Pie Diabético",
      link: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20consulta%20para%20pie%20diabético%20a%20domicilio"
    }
  },
  {
    id: "podologia-runners-quito",
    title: "Podología para Runners en Quito: ¡Cuida tus Pies y Corre sin Límites!",
    slug: "podologia-runners-quito",
    excerpt: "¿Listo para volar en la Quito 15K, pero un dolor en los pies te frena? Descubre cómo la Dra. Cristina Muñoz cuida a los runners de Quito norte a domicilio por solo $15.",
    content: ``,
    category: "podologia-deportiva",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-08",
    readTime: "7 min",
    image: "/blog/podologia-runners.jpg",
    tags: ["runners", "podología deportiva", "uñeros", "fascitis", "quito"],
    metaTitle: "Podología para Runners en Quito | Podoclinicec",
    metaDescription: "Podología deportiva a domicilio en Quito norte con la Dra. Cristina Muñoz. Prevención y tratamiento de lesiones para runners por solo $15.",
    featured: true,
    cta: {
      text: "Agendar Consulta Podología Deportiva",
      link: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20consulta%20de%20podología%20deportiva%20a%20domicilio"
    }
  },
  {
    id: "podologo-la-florida-quito-norte",
    title: "Por Qué Elegir un Podólogo en La Florida, Quito Norte: ¡Tu Bienestar Empieza Aquí!",
    slug: "podologo-la-florida-quito-norte",
    excerpt: "¿Buscas un podólogo cerca de casa? Descubre por qué Podoclinicec en La Florida, Quito norte, es la mejor opción para runners, diabéticos y familias. Atención a domicilio por solo $15.",
    content: ``,
    category: "local",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-08",
    readTime: "7 min",
    image: "/blog/podologo-la-florida.jpg",
    tags: ["podólogo", "La Florida", "Quito norte", "a domicilio", "pie diabético"],
    metaTitle: "Podólogo en La Florida Quito Norte | Podoclinicec",
    metaDescription: "Podología a domicilio en La Florida, Quito norte, con la Dra. Cristina Muñoz. Atención profesional, segura y económica en tu casa por solo $15.",
    featured: true,
    cta: {
      text: "Agendar Podología en La Florida",
      link: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20en%20La%20Florida%20Quito%20norte"
    }
  },
  {
    id: "faq-podologia-domicilio-quito",
    title: "Preguntas Frecuentes sobre Podología a Domicilio en Quito: ¡Todo lo que Necesitas Saber!",
    slug: "faq-podologia-domicilio-quito",
    excerpt: "Resuelve todas tus dudas sobre podología a domicilio en Quito norte con la Dra. Cristina Muñoz. Atención profesional, segura y económica en tu casa por solo $15.",
    content: ``,
    category: "uneros",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-08",
    readTime: "7 min",
    image: "/blog/faq-podologia-domicilio.jpg",
    tags: ["podología a domicilio", "FAQ", "Quito norte", "uñeros", "pie diabético"],
    metaTitle: "Preguntas Frecuentes Podología a Domicilio Quito | Podoclinicec",
  metaDescription: "Podología a domicilio en Quito norte: atención profesional, segura y económica en tu casa por la Dra. Cristina Muñoz.",
    featured: true,
    cta: {
      text: "Agendar Podología a Domicilio",
      link: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20a%20domicilio%20en%20Quito%20norte"
    }
  },
  {
    id: "unas-encarnadas-domicilio-quito",
    title: "Cómo Tratar Uñas Encarnadas a Domicilio en Quito: ¡Tu Alivio Empieza Aquí!",
    slug: "unas-encarnadas-domicilio-quito",
    excerpt: "¿Uñero en Quito norte? Descubre cómo la Dra. Cristina Muñoz te alivia en casa por solo $15. Consejos, prevención y atención profesional a domicilio.",
    content: ``,
    category: "uneros",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-08",
    readTime: "7 min",
    image: "/blog/unas-encarnadas-domicilio.jpg",
    tags: ["uñeros", "a domicilio", "quito", "tratamiento"],
    metaTitle: "Uñas Encarnadas a Domicilio en Quito | Dra. Cristina Muñoz",
    metaDescription: "Tratamiento profesional de uñas encarnadas a domicilio en Quito norte. Alivio rápido, seguro y económico con la Dra. Cristina Muñoz.",
    featured: true,
    cta: {
      text: "Agendar Tratamiento a Domicilio",
      link: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20tratamiento%20de%20uña%20encarnada%20a%20domicilio"
    }
  },
  {
    id: "senales-unero-urgente",
    title: "5 Señales de que tu Uñero Necesita Atención URGENTE",
    slug: "senales-unero-urgente",
    excerpt: "Descubre cuándo un uñero deja de ser un problema menor y se convierte en una emergencia médica que requiere atención profesional inmediata.",
    content: ``,
    category: "uneros",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-10-05",
    readTime: "5 min",
    image: "/blog/unero-urgente.jpg",
    tags: ["uñeros", "emergencia", "síntomas", "dolor"],
    metaTitle: "5 Señales URGENTES de Uñero | Cuándo Acudir al Podólogo",
    metaDescription: "¿Tu uñero es una emergencia? Aprende las 5 señales que indican que necesitas atención médica URGENTE. Dra. Cristina Muñoz, especialista en Quito.",
    featured: true,
    cta: {
      text: "Consulta URGENTE tu Uñero",
      link: "https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Tengo%20síntomas%20urgentes%20de%20uñero%20y%20necesito%20consulta%20inmediata"
    }
  },
  {
    id: "mitos-remedios-caseros-uneros",
    title: "Mitos vs Realidad: ¿Los Remedios Caseros Curan Uñeros?",
    slug: "mitos-remedios-caseros-uneros", 
    excerpt: "Analizamos los remedios caseros más populares para uñeros y te revelamos cuáles funcionan y cuáles pueden empeorar tu condición.",
    content: ``,
    category: "uneros",
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-09-28",
    readTime: "7 min",
    image: "/blog/remedios-caseros-uneros.jpg",
    tags: ["uñeros", "remedios caseros", "mitos", "tratamiento"],
    metaTitle: "Remedios Caseros para Uñeros: ¿Funcionan Realmente?",
    metaDescription: "Descubre la verdad sobre los remedios caseros para uñeros. Análisis profesional de la Dra. Cristina Muñoz sobre qué funciona y qué no.",
    featured: true,
    cta: {
      text: "Consulta Profesional sobre Uñeros",
      link: "https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20He%20probado%20remedios%20caseros%20y%20quiero%20una%20opinión%20profesional"
    }
  },
  {
    id: "cuidado-pies-diabeticos-guia",
    title: "Diabético: Guía Completa de Cuidado de Pies",
    slug: "cuidado-pies-diabeticos-guia",
    excerpt: "Todo lo que necesitas saber sobre el cuidado de los pies si eres diabético. Prevención, inspección diaria y cuándo acudir al especialista.",
    content: ``,
    category: "pie-diabetico", 
    author: "Dra. Cristina Muñoz",
    publishDate: "2025-09-20",
    readTime: "10 min",
    image: "/blog/pie-diabetico-cuidado.jpg",
    tags: ["diabetes", "pie diabético", "prevención", "cuidado"],
    metaTitle: "Cuidado de Pies para Diabéticos: Guía Completa 2025",
    metaDescription: "Guía especializada para el cuidado de pies en diabéticos. Prevención, inspección y tratamiento por Dra. Cristina Muñoz en Quito.",
    featured: false,
    cta: {
      text: "Evaluación Especializada Pie Diabético",
      link: "https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Soy%20diabético%20y%20necesito%20evaluación%20especializada%20de%20mis%20pies"
    }
  },
  {
    id: "hongos-unas-tratamiento-efectivo",
    title: "Hongos en las Uñas: Tratamiento Efectivo y Prevención",
    slug: "hongos-unas-tratamiento-efectivo",
    excerpt: "Aprende sobre los tratamientos más efectivos para hongos en las uñas y cómo prevenir su aparición con consejos profesionales.",
    content: ``,
    category: "hongos",
    author: "Dra. Cristina Muñoz", 
    publishDate: "2025-09-15",
    readTime: "6 min",
    image: "/blog/hongos-unas-tratamiento.jpg",
    tags: ["hongos", "onicomicosis", "tratamiento", "prevención"],
    metaTitle: "Hongos en las Uñas: Tratamiento Efectivo | Dra. Cristina",
    metaDescription: "Tratamiento profesional para hongos en las uñas. Opciones efectivas y prevención por especialista en podología en Quito.",
    featured: false,
    cta: {
      text: "Consulta Tratamiento Hongos",
      link: "https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Tengo%20hongos%20en%20las%20uñas%20y%20quiero%20conocer%20opciones%20de%20tratamiento"
    }
  }
];

// Utility functions
export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

export function getAllCategories() {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories;
}

export function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(limit = 6) {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

// Categorías disponibles
export const blogCategories = [
  {
    id: "uneros",
    name: "Uñeros",
    description: "Todo sobre uñas encarnadas y su tratamiento",
    color: "#60BEC3",
    icon: "Scissors"
  },
  {
    id: "pie-diabetico", 
    name: "Pie Diabético",
    description: "Cuidado especializado para pacientes diabéticos",
    color: "#79A373",
    icon: "Heart"
  },
  {
    id: "hongos",
    name: "Hongos",
    description: "Tratamiento y prevención de infecciones fúngicas",
    color: "#F59E0B",
    icon: "Shield"
  },
  {
    id: "cuidado-preventivo",
    name: "Cuidado Preventivo", 
    description: "Tips y consejos para mantener pies sanos",
    color: "#8B5CF6",
    icon: "Star"
  }
];

export default blogPosts;