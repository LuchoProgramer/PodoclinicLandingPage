// src/data/blog/hybrid-posts.ts
import { BlogPost } from "@/types";
import { blogPosts, blogCategories } from "./posts";
import { cmsClient } from "@/lib/cms-client";

// Función para obtener todos los posts (estáticos + CMS)
export async function getAllPosts(options: { limit?: number; category?: string } = {}): Promise<BlogPost[]> {
  try {
    // Obtener posts del CMS
    const cmsResponse = await cmsClient.getAllBlogs({ limit: 50 });
    const cmsPosts = cmsResponse.blogs.map(post => 
      cmsClient.convertCMSPostToPodoclinicFormat(post)
    );

    // Combinar posts estáticos y del CMS
    const allPosts = [...blogPosts, ...cmsPosts];

    // Ordenar por fecha (más recientes primero)
    allPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

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
    console.error('Error fetching hybrid posts:', error);
    // En caso de error, devolver solo posts estáticos
    let filteredPosts = blogPosts;
    
    if (options.category && options.category !== 'Todos') {
      filteredPosts = blogPosts.filter(post => post.category === options.category);
    }
    
    if (options.limit) {
      filteredPosts = filteredPosts.slice(0, options.limit);
    }
    
    return filteredPosts;
  }
}

// Función para obtener un post por slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // Si es un post del CMS (comienza con 'cms-')
  if (slug.startsWith('cms-')) {
    try {
      const blogId = slug.replace('cms-', '').replace(/^cms-/, ''); // Limpiar prefijo
      const cmsPost = await cmsClient.getBlogById(blogId);
      return cmsClient.convertCMSPostToPodoclinicFormat(cmsPost);
    } catch (error) {
      console.error('Error fetching CMS post:', error);
      return null;
    }
  }

  // Buscar en posts estáticos
  return blogPosts.find(post => post.slug === slug) || null;
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
      post.tags.some(tag => currentPost.tags.includes(tag))
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

// Función para obtener posts recientes (estáticos + CMS)
export async function getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

// Función para obtener categorías disponibles (estáticas + CMS)
export async function getAvailableCategories(): Promise<string[]> {
  try {
    // Categorías estáticas de PodoClinic
    const staticCategories = blogPosts.map(post => post.category);
    
    // Categorías del CMS
    const cmsResponse = await cmsClient.getCategories();
    const cmsCategories = cmsResponse.categories;
    
    // Combinar ambas
    const allCategories = new Set([...staticCategories, ...cmsCategories]);
    
    return Array.from(allCategories).sort();
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fallback a categorías estáticas
    const staticCategories = blogPosts.map(post => post.category);
    return Array.from(new Set(staticCategories)).sort();
  }
}

// Función para obtener posts destacados (estáticos + CMS)
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

// Función para obtener posts por categoría (estáticos + CMS)
export async function getPostsByCategory(category: string, limit?: number): Promise<BlogPost[]> {
  return getAllPosts({ category, limit });
}

// Exportar también las funciones originales para compatibilidad
export { blogPosts, blogCategories };

// Exportaciones por defecto para mantener compatibilidad
export default {
  getAllPosts,
  getPostBySlug,
  getRecentPosts,
  getRelatedPosts,
  getFeaturedPosts,
  getPostsByCategory,
  getAvailableCategories
};