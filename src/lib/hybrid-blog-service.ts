/**
 * Servicio híbrido para combinar posts hardcodeados con posts del CMS
 * Mantiene compatibilidad total con el sistema existente
 */

import { BlogPost, BlogCategory } from '@/types';

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
     * Convertir CMSBlogPost a BlogPost
     */
    private convertCMSBlogToPost(cmsBlog: any): BlogPost {
        // Convertir blocks a content HTML
        const content = cmsBlog.blocks?.map((block: any) => {
            if (block.type === 'text') {
                return block.content || '';
            } else if (block.type === 'image') {
                return `<img src="${block.src}" alt="${block.alt || ''}" />`;
            }
            return '';
        }).join('\n') || '';

        return {
            id: cmsBlog.id,
            title: cmsBlog.title || 'Sin título',
            slug: cmsBlog.id, // Usar ID como slug por ahora
            excerpt: content.substring(0, 200) + '...',
            content: content,
            category: cmsBlog.category || 'general',
            author: cmsBlog.author?.name || 'CMS',
            publishDate: cmsBlog.createdAt || new Date().toISOString(),
            lastModified: cmsBlog.updatedAt || cmsBlog.createdAt || new Date().toISOString(),
            tags: cmsBlog.tags || [],
            metaTitle: cmsBlog.title || '',
            metaDescription: content.substring(0, 160),
            featured: false,
            image: cmsBlog.blocks?.find((b: any) => b.type === 'image')?.src,
            readTime: Math.ceil(content.split(' ').length / 200) + ' min',
            cta: {
                text: 'Leer más',
                link: `/blog/${cmsBlog.id}`
            }
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
            // Hacer fetch directo a la API del CMS
            const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app';
            const tenantId = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'zCXAU8FLaGX4UHgnrPfI';
            const url = `${baseUrl}/api/blogs?tenant=${tenantId}&limit=50`;
            
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                if (data.blogs && data.blogs.length > 0) {
                    // Convertir CMSBlogPost a BlogPost format
                    this.cmsPosts = data.blogs.map((blog: any) => this.convertCMSBlogToPost(blog));
                    this.cmsAvailable = true;
                    this.lastCMSFetch = now;
                    console.log(`✅ ${this.cmsPosts.length} posts obtenidos del CMS`);
                } else {
                    console.log('📦 CMS no disponible, usando solo posts hardcodeados');
                    this.cmsAvailable = false;
                }
            } else {
                throw new Error(`HTTP ${response.status}`);
            }
            
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
            const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app';
            const tenantId = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'zCXAU8FLaGX4UHgnrPfI';
            const url = `${baseUrl}/api/blogs?tenant=${tenantId}&id=${slug}`;
            
            const response = await fetch(url);
            if (response.ok) {
                const cmsBlog = await response.json();
                if (cmsBlog) {
                    return this.convertCMSBlogToPost(cmsBlog);
                }
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