// Content management utilities for easy CMS migration
// When your CMS is ready, you'll only need to update the data-source.ts file

import { BlogPost, Service, FAQ, BlogCategory } from "@/types";
import { dataSource } from "./data-source";

/**
 * Unified Content Management Class for CMS Integration
 */
export class ContentManager {
  
  // Blog Methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await dataSource.getAllPosts();
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return await dataSource.getPostBySlug(slug);
  }

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    return await dataSource.getPostsByCategory(category);
  }

  async getFeaturedPosts(limit?: number): Promise<BlogPost[]> {
    const posts = await dataSource.getFeaturedPosts();
    return limit ? posts.slice(0, limit) : posts;
  }

  async getBlogCategories(): Promise<BlogCategory[]> {
    const posts = await this.getAllBlogPosts();
    const categoryMap = new Map<string, BlogCategory>();
    
    posts.forEach(post => {
      if (!categoryMap.has(post.category)) {
        categoryMap.set(post.category, {
          slug: post.category,
          name: this.getCategoryDisplayName(post.category),
          description: `Artículos sobre ${this.getCategoryDisplayName(post.category).toLowerCase()}`,
          count: 0
        });
      }
      const category = categoryMap.get(post.category)!;
      category.count++;
    });
    
    return Array.from(categoryMap.values());
  }

  private getCategoryDisplayName(slug: string): string {
    const categoryNames: Record<string, string> = {
      'uneros': 'Uñeros',
      'pie-diabetico': 'Pie Diabético',
      'hongos': 'Hongos',
      'podologia-deportiva': 'Podología Deportiva',
      'local': 'Servicios Locales',
      'cuidado-preventivo': 'Cuidado Preventivo'
    };
    return categoryNames[slug] || slug;
  }

  // FAQ Methods  
  async getAllFAQs(): Promise<FAQ[]> {
    return await dataSource.getAllFAQs();
  }

  async getFAQsByCategory(category?: string): Promise<FAQ[]> {
    return await dataSource.getFAQsByCategory(category);
  }

  // Service Methods
  async getAllServices(): Promise<Service[]> {
    return await dataSource.getAllServices();
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    return await dataSource.getServiceBySlug(slug);
  }

  // SEO Methods for Sitemap
  async generateSitemapData() {
    try {
      const [posts, categories] = await Promise.all([
        this.getAllBlogPosts(),
        this.getBlogCategories()
      ]);

      return {
        posts: posts.map(post => ({
          url: `/blog/${post.category}/${post.slug}`,
          lastModified: new Date(post.publishDate),
          changeFrequency: 'monthly' as const,
          priority: 0.6
        })),
        categories: categories.map(category => ({
          url: `/blog/${category.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.7
        }))
      };
    } catch (error) {
      console.error('Error generating sitemap data:', error);
      return { posts: [], categories: [] };
    }
  }
}

/**
 * Blog Content Management (legacy support)
 */
export class BlogManager {
  
  static async getAllPosts(): Promise<BlogPost[]> {
    const manager = new ContentManager();
    return await manager.getAllBlogPosts();
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const manager = new ContentManager();
    return await manager.getPostBySlug(slug);
  }

  static async getPostsByCategory(category: string): Promise<BlogPost[]> {
    const manager = new ContentManager();
    return await manager.getPostsByCategory(category);
  }

  static async getFeaturedPosts(limit?: number): Promise<BlogPost[]> {
    const manager = new ContentManager();
    return await manager.getFeaturedPosts(limit);
  }

  static async getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
    const manager = new ContentManager();
    const posts = await manager.getAllBlogPosts();
    return posts
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, limit);
  }

  static async searchPosts(query: string): Promise<BlogPost[]> {
    const manager = new ContentManager();
    const posts = await manager.getAllBlogPosts();
    const lowercaseQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery)
    );
  }

  static async getRelatedPosts(currentPost: BlogPost, limit: number = 3): Promise<BlogPost[]> {
    const manager = new ContentManager();
    const posts = await manager.getAllBlogPosts();
    
    // Get posts from same category, excluding current post
    const relatedPosts = posts.filter(post => 
      post.category === currentPost.category && 
      post.id !== currentPost.id
    );

    return relatedPosts.slice(0, limit);
  }
}

/**
 * FAQ Content Management (legacy support)
 */
export class FAQManager {
  
  static async getAllFAQs(): Promise<FAQ[]> {
    const manager = new ContentManager();
    return await manager.getAllFAQs();
  }

  static async getFAQsByCategory(category?: string): Promise<FAQ[]> {
    const manager = new ContentManager();
    return await manager.getFAQsByCategory(category);
  }

  static async searchFAQs(query: string): Promise<FAQ[]> {
    const manager = new ContentManager();
    const faqs = await manager.getAllFAQs();
    const lowercaseQuery = query.toLowerCase();
    
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(lowercaseQuery) ||
      faq.answer.toLowerCase().includes(lowercaseQuery)
    );
  }

  static async getFAQCategories(): Promise<string[]> {
    const manager = new ContentManager();
    const faqs = await manager.getAllFAQs();
    const categorySet = new Set(faqs.map(faq => faq.category));
    return Array.from(categorySet);
  }
}

/**
 * Service Content Management (legacy support)
 */
export class ServiceManager {
  
  static async getAllServices(): Promise<Service[]> {
    const manager = new ContentManager();
    return await manager.getAllServices();
  }

  static async getServiceBySlug(slug: string): Promise<Service | null> {
    const manager = new ContentManager();
    return await manager.getServiceBySlug(slug);
  }

  static async getFeaturedServices(): Promise<Service[]> {
    const manager = new ContentManager();
    const services = await manager.getAllServices();
    return services.filter(service => service.urgent || false);
  }
}

/**
 * SEO Content Management (legacy support)
 */
export class SEOManager {
  
  static async generateBlogPostMetadata(slug: string) {
    const post = await BlogManager.getPostBySlug(slug);
    
    if (!post) {
      return {
        title: "Post no encontrado | PodoClinic",
        description: "El post que buscas no fue encontrado."
      };
    }

    return {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      keywords: post.tags.join(', '),
      openGraph: {
        title: post.metaTitle || post.title,
        description: post.metaDescription,
        type: 'article',
        publishedTime: post.publishDate,
        authors: [post.author],
        tags: post.tags
      },
      twitter: {
        card: 'summary_large_image',
        title: post.metaTitle || post.title,
        description: post.metaDescription
      }
    };
  }

  static async generateCategoryMetadata(category: string) {
    const posts = await BlogManager.getPostsByCategory(category);
    
    const categoryNames: Record<string, string> = {
      'uneros': 'Uñeros',
      'pie-diabetico': 'Pie Diabético',
      'hongos': 'Hongos',
      'podologia-deportiva': 'Podología Deportiva',
      'local': 'Servicios Locales',
      'cuidado-preventivo': 'Cuidado Preventivo'
    };

    const categoryName = categoryNames[category] || category;

    return {
      title: `${categoryName} | Blog de Podología en Quito`,
      description: `Artículos especializados sobre ${categoryName.toLowerCase()} con consejos profesionales de la Dra. Cristina Muñoz en Quito.`,
      openGraph: {
        title: `${categoryName} | Blog de Podología en Quito`,
        description: `Artículos especializados sobre ${categoryName.toLowerCase()}`
      }
    };
  }
}

/**
 * Content Statistics (legacy support)
 */
export class ContentStats {
  
  static async getBlogStats() {
    const posts = await BlogManager.getAllPosts();
    const categories = new Set(posts.map(post => post.category));
    
    return {
      totalPosts: posts.length,
      featuredPosts: posts.filter(post => post.featured).length,
      totalCategories: categories.size,
      averageReadTime: Math.round(
        posts.reduce((sum, post) => {
          // Extract minutes from readTime string like "7 min"
          const minutes = parseInt(post.tags[0]) || 5; // Default 5 min
          return sum + minutes;
        }, 0) / posts.length
      ),
      postsByCategory: Array.from(categories).map(category => ({
        category,
        count: posts.filter(post => post.category === category).length
      }))
    };
  }

  static async getFAQStats() {
    const faqs = await FAQManager.getAllFAQs();
    const categories = await FAQManager.getFAQCategories();
    
    return {
      totalFAQs: faqs.length,
      totalCategories: categories.length,
      faqsByCategory: categories.map(category => ({
        category,
        count: faqs.filter(faq => faq.category === category).length
      }))
    };
  }
}

// Export convenience functions
export {
  BlogManager as Blog,
  FAQManager as FAQ,
  ServiceManager as Service,
  SEOManager as SEO,
  ContentStats as Stats
};