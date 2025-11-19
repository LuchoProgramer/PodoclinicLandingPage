// src/data/hybrid-blog-posts.ts
import { BlogPost } from '@/types';

// Importar posts estáticos existentes
import { 
  getAllPosts as getStaticPosts,
  getPostBySlug as getStaticPostBySlug,
  getPostsByCategory as getStaticPostsByCategory,
  getFeaturedPosts as getStaticFeaturedPosts,
  getRecentPosts as getStaticRecentPosts
} from '@/data/blog/posts';

// Cache simple para evitar múltiples llamadas al CMS
let cmsCache: { data: any; timestamp: number } | null = null;
let cmsPromise: Promise<any> | null = null; // Para evitar llamadas concurrentes
const CACHE_DURATION = 60000; // 1 minuto

// Datos de emergencia para testing cuando el CMS falla
const emergencyCMSData = {
  blogs: [
    {
      id: 1,
      title: "Cuidado de pies en diabéticos - Guía completa",
      blocks: [
        { type: "text", content: "El cuidado de los pies es fundamental para las personas con diabetes..." },
        { type: "image", src: "/images/pie-diabetico.jpg" }
      ],
      category: "pie-diabetico",
      tags: ["diabetes", "cuidados", "podología"],
      createdAt: "2024-11-15T10:00:00Z"
    }
  ]
};

// Función para obtener datos del CMS con caché y singleton pattern
async function fetchCMSData(forceRefresh = false): Promise<any> {
  const now = Date.now();
  
  // Usar caché si está disponible y no es muy viejo
  if (!forceRefresh && cmsCache && (now - cmsCache.timestamp) < CACHE_DURATION) {
    console.log('📦 Using cached CMS data');
    return cmsCache.data;
  }
  
  // Si ya hay una llamada en progreso, esperarla en lugar de hacer otra
  if (cmsPromise) {
    console.log('🔄 Waiting for existing CMS request');
    return cmsPromise;
  }
  
  // Crear nueva promesa y cachearla
  cmsPromise = (async () => {
    try {
      console.log('🔄 Fetching fresh CMS data');
      const data = await fetchFromCMSProxy('limit=50');
      cmsCache = { data, timestamp: now };
      return data;
    } catch (error) {
      console.warn('⚠️ Failed to fetch CMS data:', error);
      
      // Si hay caché aunque sea viejo, usarlo como fallback
      if (cmsCache) {
        console.log('📦 Using stale cached data as fallback');
        return cmsCache.data;
      }
      
      // Como último recurso, usar datos de emergencia para testing
      console.log('🚨 Using emergency mock data - CMS completely unavailable');
      return emergencyCMSData;
    } finally {
      // Limpiar la promesa cuando termine (éxito o error)
      cmsPromise = null;
    }
  })();
  
  return cmsPromise;
}

// Funciones helper para usar el proxy interno
async function fetchFromCMSProxy(params: string = '') {
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://podoclinicec.com';
  
  const url = `${baseUrl}/api/cms-proxy${params ? `?${params}` : ''}`;
  console.log('🔗 Fetching from proxy:', url);
  
  console.log('🔗 Making single client request (no retries for now)');
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Proxy error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

// Convertir post del CMS al formato de PodoclinicLandingPage
function convertCMSPostToPodoclinicFormat(cmsPost: any): BlogPost {
  // Extraer primer párrafo como excerpt
  const textBlocks = cmsPost.blocks?.filter((block: any) => block.type === 'text') || [];
  const firstTextContent = textBlocks[0]?.content || '';
  const excerpt = extractExcerpt(firstTextContent);

  // Obtener primera imagen como imagen destacada
  const imageBlocks = cmsPost.blocks?.filter((block: any) => block.type === 'image') || [];
  const featuredImage = imageBlocks[0]?.src || '/images/default-blog.jpg';

  // Convertir bloques a HTML
  const content = convertBlocksToHTML(cmsPost.blocks || []);

  // Generar slug
  const slug = `cms-${cmsPost.id}`;

  // Estimar tiempo de lectura
  const readTime = estimateReadTime(content);

  // Mapear categoría del CMS a categorías de Podoclinic
  const category = mapCMSCategoryToPodoclinic(cmsPost.category);

  // Usar tags del CMS o tags por defecto de podología
  const tags = cmsPost.tags && cmsPost.tags.length > 0 
    ? cmsPost.tags 
    : ["podología", "cms"];

  return {
    id: `cms-${cmsPost.id}`,
    title: cmsPost.title || 'Sin título',
    slug,
    excerpt,
    content,
    category,
    author: cmsPost.author?.name || 'CMS',
    publishDate: cmsPost.createdAt || new Date().toISOString(),
    lastModified: cmsPost.updatedAt || cmsPost.createdAt || new Date().toISOString(),
    tags,
    metaTitle: cmsPost.title || '',
    metaDescription: excerpt,
    featured: false,
    image: featuredImage,
    readTime: `${readTime} min`,
    cta: {
      text: "Leer más",
      link: `/blog/${slug}`
    },
    isCMSPost: true // Flag para identificar posts del CMS
  };
}

function extractExcerpt(htmlContent: string): string {
  const textOnly = htmlContent.replace(/<[^>]*>/g, '');
  const words = textOnly.split(' ').slice(0, 30);
  return words.join(' ') + '...';
}

function convertBlocksToHTML(blocks: any[]): string {
  return blocks.map(block => {
    switch (block.type) {
      case 'text':
        return block.content || '';
      case 'image':
        return `<img src="${block.src}" alt="${block.alt || 'Imagen'}" class="w-full h-auto rounded-lg my-4" />`;
      case 'video':
        return `<iframe src="${block.src}" width="100%" height="315" frameborder="0" allowfullscreen class="my-4 rounded-lg"></iframe>`;
      default:
        return '';
    }
  }).join('\n\n');
}

function mapCMSCategoryToPodoclinic(cmsCategory?: string): string {
  const categoryMap: { [key: string]: string } = {
    'salud': 'cuidado-preventivo',
    'hongos': 'hongos',
    'uñas': 'uneros',
    'diabetes': 'pie-diabetico',
    'deportes': 'podologia-deportiva',
    'deporte': 'podologia-deportiva',
    'general': 'cuidado-preventivo'
  };

  if (!cmsCategory) return 'cuidado-preventivo';
  
  const normalizedCategory = cmsCategory.toLowerCase();
  return categoryMap[normalizedCategory] || 'cuidado-preventivo';
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

// Función para obtener todos los posts (estáticos + CMS)
export async function getAllPosts(options: { limit?: number; category?: string } = {}): Promise<BlogPost[]> {
  try {
    console.log('🔄 getAllPosts - Opciones:', options);
    
    // Obtener posts estáticos
    const staticPosts = await getStaticPosts();
    console.log('📄 Posts estáticos obtenidos:', staticPosts.length);

    // Obtener posts del CMS usando caché
    const cmsResponse = await fetchCMSData();
    console.log('🌐 Respuesta CMS:', cmsResponse);
    
    const cmsPosts = cmsResponse.blogs?.map((post: any) => 
      convertCMSPostToPodoclinicFormat(post)
    ) || [];
    console.log('🔄 Posts CMS convertidos:', cmsPosts.length);

    // Combinar posts estáticos y del CMS
    const allPosts = [...staticPosts, ...cmsPosts];

    // Ordenar por fecha (más recientes primero)
    allPosts.sort((a, b) => {
      const dateA = new Date(a.publishDate || a.lastModified || '2025-01-01');
      const dateB = new Date(b.publishDate || b.lastModified || '2025-01-01');
      return dateB.getTime() - dateA.getTime();
    });

    // Filtrar por categoría si se especifica
    let filteredPosts = allPosts;
    if (options.category && options.category !== 'Todos') {
      filteredPosts = allPosts.filter(post => 
        post.category === options.category || 
        (options.category === 'CMS' && post.isCMSPost)
      );
    }

    // Aplicar límite si se especifica
    if (options.limit) {
      filteredPosts = filteredPosts.slice(0, options.limit);
    }

    return filteredPosts;
  } catch (error) {
    // En caso de error con el CMS, devolver solo posts estáticos sin ruido en logs
    const staticPosts = await getStaticPosts();
    
    // Solo logear en desarrollo/runtime, no durante build
    if (process.env.NODE_ENV !== 'production' || typeof window !== 'undefined') {
      console.log('🔄 Fallback a posts estáticos:', staticPosts.length);
    }
    
    // Aplicar filtros a los posts estáticos
    let filteredPosts = staticPosts;
    if (options.category && options.category !== 'Todos' && options.category !== 'CMS') {
      filteredPosts = staticPosts.filter(post => post.category === options.category);
    }
    
    if (options.limit) {
      filteredPosts = filteredPosts.slice(0, options.limit);
    }
    
    console.log('📤 Devolviendo posts (fallback):', filteredPosts.length);
    return filteredPosts;
  }
}

// Función para obtener un post por slug
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  // Si es un post del CMS (comienza con 'cms-')
  if (slug.startsWith('cms-')) {
    try {
      const blogId = slug.replace('cms-', '');
      const cmsPost = await fetchFromCMSProxy(`id=${blogId}`);
      return convertCMSPostToPodoclinicFormat(cmsPost);
    } catch (error) {
      console.error('Error fetching CMS post:', error);
      return undefined;
    }
  }

  // Buscar en posts estáticos
  return await getStaticPostBySlug(slug);
}

// Función para obtener posts por categoría (híbrido)
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return getAllPosts({ category });
}

// Función para obtener posts destacados
export async function getFeaturedPosts(limit: number = 6): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.filter(post => post.featured);
  
  // Si no hay suficientes destacados, completar con los más recientes
  if (featuredPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => !post.featured)
      .slice(0, limit - featuredPosts.length);
    featuredPosts.push(...recentPosts);
  }

  return featuredPosts.slice(0, limit);
}

// Función para obtener posts recientes
export async function getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
  return getAllPosts({ limit });
}

// Función para obtener categorías disponibles (estáticas + CMS)
export async function getAvailableCategories(): Promise<string[]> {
  try {
    // Categorías estáticas de PodoclinicLandingPage
    const staticPosts = await getStaticPosts();
    const staticCategories = new Set(staticPosts.map(post => post.category));
    
    // Categorías del CMS - simplificado por ahora
    const cmsCategories = new Set(['cuidado-preventivo', 'hongos', 'uneros', 'pie-diabetico', 'podologia-deportiva']);
    
    // Combinar ambas y agregar categoría especial para CMS
    const allCategories = new Set<string>();
    
    // Agregar categorías estáticas
    staticCategories.forEach(cat => allCategories.add(cat));
    
    // Agregar categorías del CMS
    cmsCategories.forEach(cat => allCategories.add(cat));
    
    // Agregar categoría especial CMS
    allCategories.add('CMS');
    
    return Array.from(allCategories).sort();
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fallback a categorías estáticas
    const staticPosts = await getStaticPosts();
    const staticCategories = new Set(staticPosts.map(post => post.category));
    return Array.from(staticCategories).sort();
  }
}

// Función para obtener posts relacionados
export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  
  if (!currentPost) return [];

  // Buscar posts relacionados por categoría o tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.category === currentPost.category ||
      (currentPost.tags && post.tags && post.tags.some(tag => currentPost.tags!.includes(tag)))
    )
    .slice(0, limit);

  // Si no hay suficientes relacionados, completar con posts recientes
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => !relatedPosts.includes(post))
      .slice(0, limit - relatedPosts.length);
    
    relatedPosts.push(...recentPosts);
  }

  return relatedPosts;
}

// Función para obtener estadísticas de posts
export async function getPostStats() {
  try {
    const staticPosts = await getStaticPosts();
    const cmsResponse = await fetchCMSData(); // Usar caché en lugar de llamada directa
    const cmsPostCount = cmsResponse.blogs?.length || 0;
    
    return {
      static: staticPosts.length,
      cms: cmsPostCount,
      total: staticPosts.length + cmsPostCount,
      cmsAvailable: cmsPostCount > 0 // Solo true si hay posts del CMS
    };
  } catch (error) {
    console.warn('⚠️ CMS not available:', error);
    const staticPosts = await getStaticPosts();
    return {
      static: staticPosts.length,
      cms: 0,
      total: staticPosts.length,
      cmsAvailable: false
    };
  }
}