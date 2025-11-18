/**
 * Servicio híbrido para combinar posts hardcodeados con posts del CMS
 * Mantiene compatibilidad total con el sistema existente
 */

import { BlogPost, BlogCategory } from '@/types';
import { podoclinicCMS, CMSPost } from './podoclinic-cms';

// Importar posts y categorías hardcodeados existentes
import { 
    blogPosts as hardcodedPosts, 
    blogCategories as hardcodedCategories,
    getAllPosts as getHardcodedPosts,
    getPostBySlug as getHardcodedPostBySlug,
    getPostsByCategory as getHardcodedPostsByCategory,
    getFeaturedPosts as getHardcodedFeaturedPosts,
    getRecentPosts as getHardcodedRecentPosts
} from '@/data/blog/posts';

class HybridBlogService {
    private cacheTimeout = 5 * 60 * 1000; // 5 minutos
    private lastCMSFetch = 0;
    private cmsPosts: BlogPost[] = [];
    private cmsAvailable = false;

    /**
     * Convertir post del CMS al formato de Podoclinic
     */
    private convertCMSPostToBlogPost(cmsPost: CMSPost): BlogPost {
        return {
            id: `cms-${cmsPost.id}`, // Prefijo para identificar posts del CMS
            title: cmsPost.title,
            slug: cmsPost.slug,
            excerpt: cmsPost.excerpt,
            content: cmsPost.content,
            category: cmsPost.category,
            author: cmsPost.author,
            publishDate: cmsPost.publishDate,
            lastModified: cmsPost.lastModified,
            tags: cmsPost.tags,
            metaTitle: cmsPost.metaTitle,
            metaDescription: cmsPost.metaDescription,
            featured: cmsPost.featured,
            image: cmsPost.image,
            readTime: cmsPost.readTime,
            cta: cmsPost.cta
        };
    }

    /**
     * Obtener posts del CMS con cache
     */
    private async fetchCMSPosts(): Promise<BlogPost[]> {
        const now = Date.now();
        
        // Usar cache si es reciente
        if (now - this.lastCMSFetch < this.cacheTimeout && this.cmsPosts.length > 0) {
            return this.cmsPosts;
        }

        try {
            // Verificar si el CMS está disponible
            this.cmsAvailable = await podoclinicCMS.checkConnection();
            
            if (!this.cmsAvailable) {
                console.log('📦 CMS no disponible, usando solo posts hardcodeados');
                return [];
            }

            // Obtener posts del CMS
            const cmsPostsRaw = await podoclinicCMS.getAllPosts(50); // Limite alto para obtener todos
            this.cmsPosts = cmsPostsRaw.map(post => this.convertCMSPostToBlogPost(post));
            this.lastCMSFetch = now;

            console.log(`✅ ${this.cmsPosts.length} posts obtenidos del CMS`);
            return this.cmsPosts;

        } catch (error) {
            console.warn('⚠️ Error obteniendo posts del CMS:', error);
            this.cmsAvailable = false;
            return [];
        }
    }

    /**
     * Combinar posts hardcodeados con posts del CMS
     */
    private async getCombinedPosts(): Promise<BlogPost[]> {
        const cmsPostsArray = await this.fetchCMSPosts();
        
        // Combinar ambas fuentes
        const allPosts = [...hardcodedPosts, ...cmsPostsArray];
        
        // Ordenar por fecha de publicación (más recientes primero)
        return allPosts.sort((a, b) => {
            const dateA = new Date(a.publishDate || a.lastModified || '2025-01-01');
            const dateB = new Date(b.publishDate || b.lastModified || '2025-01-01');
            return dateB.getTime() - dateA.getTime();
        });
    }

    /**
     * Obtener todos los posts (hardcodeados + CMS)
     */
    async getAllPosts(): Promise<BlogPost[]> {
        return this.getCombinedPosts();
    }

    /**
     * Obtener post por slug (busca en hardcodeados primero, luego en CMS)
     */
    async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
        // Buscar primero en posts hardcodeados
        const hardcodedPost = getHardcodedPostBySlug(slug);
        if (hardcodedPost) {
            return hardcodedPost;
        }

        // Si no se encuentra, buscar en CMS
        try {
            const cmsPost = await podoclinicCMS.getPostBySlug(slug);
            if (cmsPost) {
                return this.convertCMSPostToBlogPost(cmsPost);
            }
        } catch (error) {
            console.warn('Error buscando post en CMS:', error);
        }

        return undefined;
    }

    /**
     * Obtener posts por categoría (hardcodeados + CMS)
     */
    async getPostsByCategory(category: string): Promise<BlogPost[]> {
        const allPosts = await this.getCombinedPosts();
        return allPosts.filter(post => post.category === category);
    }

    /**
     * Obtener posts destacados (hardcodeados + CMS)
     */
    async getFeaturedPosts(): Promise<BlogPost[]> {
        const allPosts = await this.getCombinedPosts();
        return allPosts.filter(post => post.featured);
    }

    /**
     * Obtener posts recientes (hardcodeados + CMS)
     */
    async getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
        const allPosts = await this.getCombinedPosts();
        return allPosts.slice(0, limit);
    }

    /**
     * Obtener todas las categorías (siempre las hardcodeadas)
     */
    getAllCategories(): BlogCategory[] {
        return hardcodedCategories;
    }

    /**
     * Obtener estadísticas de posts
     */
    async getPostStats() {
        const cmsPostsArray = await this.fetchCMSPosts();
        return {
            hardcoded: hardcodedPosts.length,
            cms: cmsPostsArray.length,
            total: hardcodedPosts.length + cmsPostsArray.length,
            cmsAvailable: this.cmsAvailable
        };
    }

    /**
     * Limpiar cache del CMS
     */
    clearCache(): void {
        this.cmsPosts = [];
        this.lastCMSFetch = 0;
        podoclinicCMS.clearCache();
    }
}

// Instancia singleton del servicio híbrido
export const hybridBlogService = new HybridBlogService();

// Funciones compatibles con el sistema existente
export async function getAllPosts(): Promise<BlogPost[]> {
    return hybridBlogService.getAllPosts();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return hybridBlogService.getPostBySlug(slug);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
    return hybridBlogService.getPostsByCategory(category);
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
    return hybridBlogService.getFeaturedPosts();
}

export async function getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
    return hybridBlogService.getRecentPosts(limit);
}

export function getAllCategories(): string[] {
    const categories = hybridBlogService.getAllCategories();
    return categories.map(cat => cat.slug);
}

// Re-exportar categorías para compatibilidad
export { blogCategories } from '@/data/blog/posts';

export default hybridBlogService;