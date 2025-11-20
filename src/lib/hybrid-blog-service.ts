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
    private convertCMSBlogToPost(cmsBlog: any): BlogPost | null {
        // Validar que tenga los campos mínimos requeridos
        if (!cmsBlog.slug || !cmsBlog.title) {
            console.warn('⚠️ Blog del CMS sin slug o title, omitiendo:', cmsBlog.id);
            return null;
        }

        // Usar el content HTML generado por el CMS si existe, sino generarlo
        let content = cmsBlog.content || '';
        
        if (!content && cmsBlog.blocks) {
            content = cmsBlog.blocks.map((block: any) => {
                if (block.type === 'text') {
                    return block.content || '';
                } else if (block.type === 'image') {
                    const imgSrc = block.url || block.src || '';
                    return `<img src="${imgSrc}" alt="${block.alt || ''}" class="img-fluid" />`;
                }
                return '';
            }).join('\n');
        }

        // Obtener imagen destacada: primero del campo image, luego del primer bloque de imagen
        const featuredImage = cmsBlog.image || 
            cmsBlog.blocks?.find((b: any) => b.type === 'image')?.url || 
            cmsBlog.blocks?.find((b: any) => b.type === 'image')?.src;

        return {
            id: cmsBlog.id,
            title: cmsBlog.title,
            slug: cmsBlog.slug,
            excerpt: cmsBlog.excerpt || content.substring(0, 200) + '...',
            content: content,
            category: cmsBlog.category || 'general',
            author: cmsBlog.author?.name || 'CMS',
            publishDate: cmsBlog.createdAt || new Date().toISOString(),
            lastModified: cmsBlog.updatedAt || cmsBlog.createdAt || new Date().toISOString(),
            tags: cmsBlog.tags || [],
            metaTitle: cmsBlog.title,
            metaDescription: cmsBlog.excerpt || content.substring(0, 160),
            featured: false,
            image: featuredImage,
            readTime: Math.ceil((content.split(' ').length || 0) / 200) + ' min',
            cta: {
                text: 'Leer más',
                link: `/blog/${cmsBlog.slug}`
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
            console.log(`📦 Using cached CMS posts: ${this.cmsPosts.length} posts`);
            return this.cmsPosts;
        }

        try {
            // Hacer fetch directo a la API del CMS
            const baseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app';
            const tenantId = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'zCXAU8FLaGX4UHgnrPfI';
            const url = `${baseUrl}/api/blogs?tenant=${tenantId}&limit=50`;
            
            console.log(`🔍 Fetching CMS posts from: ${url}`);
            console.log(`   CMS_URL: ${baseUrl}`);
            console.log(`   TENANT_ID: ${tenantId}`);
            
            const response = await fetch(url, {
                next: { revalidate: 60 }, // Revalidar cada 60 segundos
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log(`📡 CMS API Response Status: ${response.status}`);
            
            if (response.ok) {
                const data = await response.json();
                console.log(`📦 CMS API returned ${data.blogs?.length || 0} blogs`);
                
                if (data.blogs && data.blogs.length > 0) {
                    // Convertir CMSBlogPost a BlogPost format, filtrando los que fallen validación
                    this.cmsPosts = data.blogs
                        .map((blog: any) => this.convertCMSBlogToPost(blog))
                        .filter((post: BlogPost | null): post is BlogPost => post !== null);
                    this.cmsAvailable = true;
                    this.lastCMSFetch = now;
                    console.log(`✅ Successfully converted ${this.cmsPosts.length} CMS posts`);
                    this.cmsPosts.forEach(post => {
                        console.log(`   - ${post.title} (${post.category}/${post.slug})`);
                    });
                } else {
                    console.log('📦 CMS returned empty blogs array');
                    this.cmsAvailable = false;
                }
            } else {
                const errorText = await response.text();
                console.error(`❌ CMS API HTTP ${response.status}: ${errorText}`);
                throw new Error(`HTTP ${response.status}`);
            }
            
            return this.cmsPosts;

        } catch (error) {
            console.error('❌ Error fetching CMS posts:', error);
            console.error('   Error details:', error instanceof Error ? error.message : String(error));
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
        console.log(`🔍 Searching for post with slug: ${slug}`);
        
        // Buscar primero en posts hardcodeados
        const hardcodedPost = getHardcodedPostBySlug(slug);
        if (hardcodedPost) {
            console.log(`✅ Found hardcoded post: ${hardcodedPost.title}`);
            return hardcodedPost;
        }

        // Si no se encuentra, buscar en todos los posts del CMS
        const allPosts = await this.getCombinedPosts();
        const cmsPost = allPosts.find(post => post.slug === slug);
        
        if (cmsPost) {
            console.log(`✅ Found CMS post: ${cmsPost.title}`);
            return cmsPost;
        }

        console.warn(`❌ Post not found with slug: ${slug}`);
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