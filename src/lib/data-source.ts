// Data source abstraction layer for future CMS integration
// This will make it easy to switch from static data to your CMS

import { BlogPost, Service, FAQ, DoctorInfo } from "@/types";

// Static data imports (current)
import blogPosts from "@/data/blog/posts";
import faqs from "@/data/faqs";
// import { tests } from "@/data/tests";

// Future: This will be replaced with your CMS API calls
// const { getCMSData } = require('@your-cms/client');

/**
 * Data Source Interface
 * When your CMS is ready, just replace the implementations
 */
export interface DataSource {
  // Blog methods
  getAllPosts(): Promise<BlogPost[]>;
  getPostBySlug(slug: string): Promise<BlogPost | null>;
  getPostsByCategory(category: string): Promise<BlogPost[]>;
  getFeaturedPosts(): Promise<BlogPost[]>;
  
  // Service methods
  getAllServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | null>;
  
  // FAQ methods
  getAllFAQs(): Promise<FAQ[]>;
  getFAQsByCategory(category?: string): Promise<FAQ[]>;
  
  // Doctor info
  getDoctorInfo(): Promise<DoctorInfo>;
  
  // Site content
  getSiteMetadata(): Promise<any>;
}

/**
 * Static Data Source (current implementation)
 * This simulates async calls to make transition easier
 */
class StaticDataSource implements DataSource {
  
  async getAllPosts(): Promise<BlogPost[]> {
    // Simulate async call
    return new Promise((resolve) => {
      setTimeout(() => resolve(blogPosts), 0);
    });
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return new Promise((resolve) => {
      const post = blogPosts.find((p: BlogPost) => p.slug === slug) || null;
      setTimeout(() => resolve(post), 0);
    });
  }

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      const posts = blogPosts.filter((p: BlogPost) => p.category === category);
      setTimeout(() => resolve(posts), 0);
    });
  }

  async getFeaturedPosts(): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      const posts = blogPosts.filter((p: BlogPost) => p.featured);
      setTimeout(() => resolve(posts), 0);
    });
  }

  async getAllServices(): Promise<Service[]> {
    // For now return empty, we'll populate this
    return new Promise((resolve) => {
      setTimeout(() => resolve([]), 0);
    });
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(null), 0);
    });
  }

  async getAllFAQs(): Promise<FAQ[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(faqs as FAQ[]), 0);
    });
  }

  async getFAQsByCategory(category?: string): Promise<FAQ[]> {
    return new Promise((resolve) => {
      let filteredFAQs = faqs as FAQ[];
      if (category) {
        filteredFAQs = (faqs as FAQ[]).filter((faq: FAQ) => faq.category === category);
      }
      setTimeout(() => resolve(filteredFAQs), 0);
    });
  }

  async getDoctorInfo(): Promise<DoctorInfo> {
    return new Promise((resolve) => {
      const doctorInfo: DoctorInfo = {
        name: "Cristina Muñoz",
        title: "Podóloga Especialista",
        description: "Especialista en podología con 5 años de experiencia en el cuidado integral de los pies.",
        image: "/images/doctora-cristina.jpg",
        stats: {
          patients: "5000+",
          experience: "10+ años",
          satisfaction: "98%",
          surgeries: "500+"
        },
        certifications: [
          "Especialista en Podología",
          "Tratamientos especializados para prevención de pie diabético",
          "Especialista en Podología Deportiva"
        ],
        specialties: [
          "Tratamiento de uñeros",
          "Tratamientos especializados para prevención de pie diabético",
          "Podología deportiva",
          "Cirugía podológica menor"
        ]
      };
      setTimeout(() => resolve(doctorInfo), 0);
    });
  }

  async getSiteMetadata(): Promise<any> {
    return new Promise((resolve) => {
      const metadata = {
        siteName: "PodoClinic",
        description: "Podología especializada en Quito",
        keywords: ["podología", "quito", "pie diabético", "uñeros"],
        contact: {
          phone: "+593995832788",
          email: "contacto@podoclinic.ec",
          whatsapp: "https://wa.me/593995832788"
        }
      };
      setTimeout(() => resolve(metadata), 0);
    });
  }
}

/**
 * Your CMS Data Source (future implementation)
 * Uncomment and implement when your CMS is ready
 */
/*
class YourCMSDataSource implements DataSource {
  
  async getAllPosts(): Promise<BlogPost[]> {
    // Replace with your CMS API call
    return await yourCMS.query('posts', {
      type: 'blogPost',
      published: true,
      orderBy: 'publishDate desc'
    });
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return await yourCMS.queryFirst('posts', {
      slug,
      published: true
    });
  }

  // ... implement other methods with your CMS API
}
*/

// Export the data source instance
// When your CMS is ready, just change this line:
// export const dataSource: DataSource = new YourCMSDataSource();
export const dataSource: DataSource = new StaticDataSource();

// Convenience functions (these won't change when you switch to CMS)
export const {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  getFeaturedPosts,
  getAllServices,
  getServiceBySlug,
  getAllFAQs,
  getFAQsByCategory,
  getDoctorInfo,
  getSiteMetadata
} = dataSource;