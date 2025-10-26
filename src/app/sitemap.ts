import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://podoclinicec.com'
  
  // URLs estáticas principales
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tips`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }
  ]

  // URLs de servicios médicos (alta prioridad SEO)
  const serviceUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/uneros-quito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podologo-en-quito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podologia-quito-norte`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pie-diabetico-quito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/profilaxis-podal-quito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hongos-unas-quito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/verrugas-plantares-quito`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // URLs geo-específicas actualizadas (Local SEO)
  const geoUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/podologo-la-floresta`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podologo-carcelen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podologo-el-condado`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podologo-la-carolina`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podologo-rumipamba`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/podologo-bicentenario`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  try {
    // URLs del blog (estáticas por ahora, dinámicas cuando CMS esté listo)
    const blogUrls: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/blog/uneros`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/pie-diabetico`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/hongos`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/podologia-deportiva`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      // Blog posts específicos
      {
        url: `${baseUrl}/blog/uneros/podologia-domicilio-quito-norte`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/blog/pie-diabetico/guia-prevenir-pie-diabetico-quito`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/blog/local/podologo-la-florida-quito-norte`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    ]

    return [
      ...staticUrls,
      ...serviceUrls,
      ...geoUrls,
      ...blogUrls,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Fallback a URLs estáticas si hay algún problema
    return [
      ...staticUrls,
      ...serviceUrls,
      ...geoUrls,
    ]
  }
}

// Regenerar sitemap cada 24 horas
export const revalidate = 86400