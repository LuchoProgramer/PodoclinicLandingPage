/**
 * SDK para integrar Podoclinic con el CMS Headless
 * Este archivo debe agregarse a Podoclinic para conectar con el CMS
 */

export interface CMSPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    publishDate: string;
    lastModified: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
    featured: boolean;
    image?: string;
    readTime: string;
    cta: {
        text: string;
        link: string;
    };
}

export interface CMSResponse {
    success: boolean;
    data: CMSPost[];
    total: number;
    source: string;
    error?: string;
    message?: string;
}

export class PodoclinicCMSClient {
    private baseUrl: string;
    private cache: Map<string, { data: CMSPost[]; timestamp: number }>;
    private cacheTimeout: number = 5 * 60 * 1000; // 5 minutos

    constructor(baseUrl?: string) {
        // Configuración automática de URL según entorno
        this.baseUrl = baseUrl || this.getDefaultBaseUrl();
        this.cache = new Map();
        console.log('🔗 CMS Client configurado para:', this.baseUrl);
    }

    /**
     * Determina la URL base según el entorno
     */
    private getDefaultBaseUrl(): string {
        // Si estamos en el navegador
        if (typeof window !== 'undefined') {
            // Usar variable de entorno o URL pública
            return process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app/';
        }
        // Si estamos en servidor (SSR)
        return process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app/';
    }

    // Método privado para hacer requests con cache
    private async fetchWithCache(endpoint: string, params: URLSearchParams): Promise<CMSPost[]> {
        const cacheKey = `${endpoint}?${params.toString()}`;
        const cached = this.cache.get(cacheKey);

        // Verificar cache válido
        if (cached && (Date.now() - cached.timestamp) < this.cacheTimeout) {
            console.log('📦 Usando cache para:', cacheKey);
            return cached.data;
        }

        try {
            const url = `${this.baseUrl}${endpoint}?${params.toString()}`;
            console.log('🌐 Fetching from CMS:', url);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result: CMSResponse = await response.json();
            
            if (!result.success) {
                throw new Error(result.message || 'Error from CMS API');
            }

            // Guardar en cache
            this.cache.set(cacheKey, {
                data: result.data,
                timestamp: Date.now()
            });

            return result.data;

        } catch (error) {
            console.warn('⚠️ Error conectando con CMS:', error);
            // En caso de error, devolver array vacío para no romper la página
            return [];
        }
    }

    /**
     * Obtener todos los posts del CMS
     */
    async getAllPosts(limit = 10): Promise<CMSPost[]> {
        const params = new URLSearchParams({
            limit: limit.toString()
        });

        return this.fetchWithCache('/api/public/podoclinic/posts', params);
    }

    /**
     * Obtener posts por categoría
     */
    async getPostsByCategory(category: string, limit = 10): Promise<CMSPost[]> {
        const params = new URLSearchParams({
            category,
            limit: limit.toString()
        });

        return this.fetchWithCache('/api/public/podoclinic/posts', params);
    }

    /**
     * Obtener un post por slug
     */
    async getPostBySlug(slug: string): Promise<CMSPost | null> {
        const params = new URLSearchParams({ slug });
        const posts = await this.fetchWithCache('/api/public/podoclinic/posts', params);
        return posts[0] || null;
    }

    /**
     * Obtener posts destacados
     */
    async getFeaturedPosts(limit = 6): Promise<CMSPost[]> {
        const params = new URLSearchParams({
            featured: 'true',
            limit: limit.toString()
        });

        return this.fetchWithCache('/api/public/podoclinic/posts', params);
    }

    /**
     * Obtener posts recientes
     */
    async getRecentPosts(limit = 6): Promise<CMSPost[]> {
        return this.getAllPosts(limit);
    }

    /**
     * Limpiar cache
     */
    clearCache(): void {
        this.cache.clear();
        console.log('🗑️ Cache del CMS limpiado');
    }

    /**
     * Verificar si el CMS está disponible
     */
    async checkConnection(): Promise<boolean> {
        try {
            const response = await fetch(`${this.baseUrl}/api/public/podoclinic/posts?limit=1`);
            return response.ok;
        } catch {
            return false;
        }
    }
}

// Instancia singleton para usar en toda la aplicación
export const podoclinicCMS = new PodoclinicCMSClient();

// Función de configuración para diferentes entornos
export const configureCMSClient = (config: {
    developmentUrl?: string;
    productionUrl?: string;
    cacheTimeout?: number;
}) => {
    const isDev = process.env.NODE_ENV === 'development';
    const baseUrl = isDev ? 
        (config.developmentUrl || process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app/') : 
        (config.productionUrl || process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app/');
    return new PodoclinicCMSClient(baseUrl);
};