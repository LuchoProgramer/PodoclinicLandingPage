// src/data/hybrid-blog-posts.ts
import { BlogPost } from '@/types';
import { podoclinicCMSClient } from '@/lib/podoclinic-cms-client';

// Importar posts estáticos existentes
import { 
  getAllPosts as getStaticPosts,
  getPostBySlug as getStaticPostBySlug,
  getPostsByCategory as getStaticPostsByCategory,
  getFeaturedPosts as getStaticFeaturedPosts,
  getRecentPosts as getStaticRecentPosts
} from '@/data/blog/posts';

// Función para obtener todos los posts (estáticos + CMS)
export async function getAllPosts(options: { limit?: number; category?: string } = {}): Promise<BlogPost[]> {
  try {
    console.log('🔄 getAllPosts - Opciones:', options);
    
    // Obtener posts estáticos
    const staticPosts = await getStaticPosts();
    console.log('📄 Posts estáticos obtenidos:', staticPosts.length);

    // Obtener posts del CMS
    const cmsResponse = await podoclinicCMSClient.getAllBlogs({ limit: 50 });
    console.log('🌐 Respuesta CMS:', cmsResponse);
    
    const cmsPosts = cmsResponse.blogs.map(post => 
      podoclinicCMSClient.convertCMSPostToPodoclinicFormat(post)
    );
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
    console.error('❌ Error fetching hybrid posts:', error);
    // En caso de error con el CMS, devolver solo posts estáticos
    const staticPosts = await getStaticPosts();
    console.log('🔄 Fallback a posts estáticos:', staticPosts.length);
    
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
      const cmsPost = await podoclinicCMSClient.getBlogById(blogId);
      return podoclinicCMSClient.convertCMSPostToPodoclinicFormat(cmsPost);
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
    
    // Categorías del CMS
    const cmsResponse = await podoclinicCMSClient.getCategories();
    const cmsCategories = new Set(cmsResponse.categories);
    
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
    const cmsResponse = await podoclinicCMSClient.getAllBlogs({ limit: 100 });
    
    return {
      static: staticPosts.length,
      cms: cmsResponse.blogs.length,
      total: staticPosts.length + cmsResponse.blogs.length,
      cmsAvailable: true
    };
  } catch (error) {
    const staticPosts = await getStaticPosts();
    return {
      static: staticPosts.length,
      cms: 0,
      total: staticPosts.length,
      cmsAvailable: false
    };
  }
}