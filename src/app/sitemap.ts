import { MetadataRoute } from 'next'
import blogPosts, { blogCategories } from '@/data/blog/posts'
import faqs from '@/data/faqs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://podoclinicec.com'
  const currentDate = new Date().toISOString()
  
  // URLs estáticas principales con prioridades optimizadas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tips`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    }
  ]

  // URLs de servicios médicos (máxima prioridad SEO)
  const serviceUrls: MetadataRoute.Sitemap = [
    // Servicios principales
    {
      url: `${baseUrl}/servicios/uneros`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/pie-diabetico`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios/hongos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios/profilaxis`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/verrugas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios/domicilio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Landing pages específicas
    {
      url: `${baseUrl}/uneros-quito`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/podologo-en-quito`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podologia-quito-norte`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podologia-runners`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    }
  ]

  // URLs geo-específicas dinámicas (Local SEO optimizado)
  const geoUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/local/podologo-la-florida-quito-norte`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    }
  ]

  // URLs del blog dinámicas basadas en datos reales
  const blogCategoryUrls: MetadataRoute.Sitemap = blogCategories.map(category => ({
    url: `${baseUrl}/blog/${category.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: category.id === 'uneros' ? 0.8 : 
              category.id === 'pie-diabetico' ? 0.75 : 
              0.7,
  }))

  // URLs de posts específicos del blog (dinámicas)
  const blogPostUrls: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.category}/${post.slug}`,
    lastModified: post.publishDate ? new Date(post.publishDate).toISOString() : currentDate,
    changeFrequency: 'monthly' as const,
    priority: post.category === 'uneros' ? 0.75 :
              post.category === 'pie-diabetico' ? 0.7 :
              post.featured ? 0.7 : 0.6,
  }))

  // URLs de tips dinámicas
  const tipsUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tips/uneros`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tips/verano`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    }
  ]

  try {
    // Combinar todas las URLs con validación
    const allUrls = [
      ...staticUrls,
      ...serviceUrls,
      ...geoUrls,
      ...blogCategoryUrls,
      ...blogPostUrls,
      ...tipsUrls,
    ]

    // Filtrar URLs duplicadas y validar
    const uniqueUrls = allUrls.filter((url, index, self) => 
      index === self.findIndex(u => u.url === url.url)
    )

    console.log(`✅ Sitemap generado: ${uniqueUrls.length} URLs`)
    return uniqueUrls

  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    // Fallback a URLs críticas si hay algún problema
    return [
      ...staticUrls,
      ...serviceUrls,
    ]
  }
}

// Regenerar sitemap cada 6 horas para mejor indexación
export const revalidate = 21600