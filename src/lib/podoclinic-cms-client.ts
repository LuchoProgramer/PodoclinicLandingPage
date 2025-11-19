// src/lib/podoclinic-cms-client.ts
interface CMSBlogPost {
  id: string;
  title: string;
  category?: string;
  tags?: string[];
  blocks: Array<{
    type: 'text' | 'image' | 'video';
    content?: string;
    src?: string;
    alt?: string;
  }>;
  author: {
    name: string;
    uid: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface CMSResponse {
  blogs: CMSBlogPost[];
  total: number;
  tenant: string;
}

class PodoclinicCMSClient {
  private baseUrl: string;
  private tenantId: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';
    this.tenantId = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'zCXAU8FLaGX4UHgnrPfI';
  }

  async getAllBlogs(options: { limit?: number } = {}): Promise<CMSResponse> {
    const { limit } = options;
    
    try {
      // Durante el build time, no hacer fetch al CMS
      if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME) {
        console.log('⏭️ Skipping CMS fetch during build time');
        return { blogs: [], total: 0, tenant: this.tenantId };
      }

      // Usar URL absoluta para SSR
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://podoclinicec.com' 
        : 'http://localhost:3001';
        
      let url = `${baseUrl}/api/cms-proxy`;
      if (limit) {
        url += `?limit=${limit}`;
      }

      const response = await fetch(url, {
        next: { revalidate: 300 }, // Revalidar cada 5 minutos
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          'Accept': 'application/json',
          'User-Agent': 'PodoclinicBot/1.0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      // Durante build time, devolver respuesta vacía sin logs
      if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME) {
        return { blogs: [], total: 0, tenant: this.tenantId };
      }
      
      // En runtime, log normal
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.log('⚠️ CMS not available:', errorMessage);
      throw error;
    }
  }

  async getBlogById(blogId: string): Promise<CMSBlogPost> {
    try {
      // Durante el build time, no hacer fetch al CMS
      if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME) {
        console.log('⏭️ Skipping CMS fetch for blog by ID during build time');
        throw new Error('CMS not available during build time');
      }

      // Usar URL absoluta para SSR
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://podoclinicec.com' 
        : 'http://localhost:3001';
      
      const response = await fetch(
        `${baseUrl}/api/cms-proxy?id=${blogId}`,
        { 
          next: { revalidate: 300 },
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            'Accept': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      // Durante build time, este método no debería llamarse
      if (typeof window === 'undefined' && !process.env.NEXT_RUNTIME) {
        throw new Error(`Blog with ID ${blogId} not available during build time`);
      }
      
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.log('⚠️ CMS blog by ID not available:', errorMessage);
      throw error;
    }
  }

  // Convertir post del CMS al formato de PodoclinicLandingPage
  convertCMSPostToPodoclinicFormat(cmsPost: CMSBlogPost): any {
    // Extraer primer párrafo como excerpt
    const textBlocks = cmsPost.blocks.filter(block => block.type === 'text');
    const firstTextContent = textBlocks[0]?.content || '';
    const excerpt = this.extractExcerpt(firstTextContent);

    // Obtener primera imagen como imagen destacada
    const imageBlocks = cmsPost.blocks.filter(block => block.type === 'image');
    const featuredImage = imageBlocks[0]?.src || '/images/default-blog.jpg';

    // Convertir bloques a HTML
    const content = this.convertBlocksToHTML(cmsPost.blocks);

    // Generar slug
    const slug = `cms-${cmsPost.id}`;

    // Estimar tiempo de lectura
    const readTime = this.estimateReadTime(content);

    // Mapear categoría del CMS a categorías de Podoclinic
    const category = this.mapCMSCategoryToPodoclinic(cmsPost.category);

    // Usar tags del CMS o tags por defecto de podología
    const tags = cmsPost.tags && cmsPost.tags.length > 0 
      ? cmsPost.tags 
      : ["podología", "cms"];

    return {
      id: `cms-${cmsPost.id}`,
      title: cmsPost.title,
      slug,
      excerpt,
      content,
      category,
      author: cmsPost.author.name,
      publishDate: cmsPost.createdAt,
      lastModified: cmsPost.updatedAt || cmsPost.createdAt,
      tags,
      metaTitle: cmsPost.title,
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

  private extractExcerpt(htmlContent: string): string {
    // Remover HTML tags y obtener primeras 30 palabras
    const textOnly = htmlContent.replace(/<[^>]*>/g, '');
    const words = textOnly.split(' ').slice(0, 30);
    return words.join(' ') + '...';
  }

  private convertBlocksToHTML(blocks: CMSBlogPost['blocks']): string {
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

  private mapCMSCategoryToPodoclinic(cmsCategory?: string): string {
    // Mapear categorías del CMS a las categorías existentes de Podoclinic
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

  private estimateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  }

  async getCategories(): Promise<{ categories: string[] }> {
    try {
      // Por ahora devolver las categorías existentes de Podoclinic
      return { 
        categories: ["uneros", "hongos", "pie-diabetico", "podologia-deportiva", "cuidado-preventivo"] 
      };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return { 
        categories: ["cuidado-preventivo"] 
      };
    }
  }
}

export const podoclinicCMSClient = new PodoclinicCMSClient();
export { PodoclinicCMSClient };
export type { CMSBlogPost, CMSResponse };