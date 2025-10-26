/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://podoclinicec.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Configuración enterprise para SEO médico
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://podoclinicec.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/tmp/',
          '*.pdf$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
  },
  
  // URLs adicionales para landing pages SEO
  additionalPaths: async (config) => {
    const paths = [];
    
    // Páginas principales de servicios médicos (alta prioridad)
    const mainMedicalPages = [
      {
        loc: '/uneros-quito',
        priority: 0.9,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/podologo-en-quito',
        priority: 0.9, 
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/podologia-quito-norte',
        priority: 0.9,
        changefreq: 'weekly', 
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/pie-diabetico-quito',
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/profilaxis-podal-quito',
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/hongos-unas-quito',
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/verrugas-plantares-quito',
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      }
    ];
    
    // Ubicaciones específicas (geo-targeting)
    const geoPages = [
      {
        loc: '/podologo-la-floresta',
        priority: 0.7,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/podologo-gonzalez-suarez',
        priority: 0.7,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/podologo-iñaquito',
        priority: 0.7,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/podologo-rumipamba',
        priority: 0.7,
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
      }
    ];
    
    const allPages = [...mainMedicalPages, ...geoPages];
    
    return allPages.map(page => ({
      ...page,
      alternateRefs: [
        {
          href: `https://podoclinicec.com${page.loc}`,
          hreflang: 'es-EC',
        },
        {
          href: `https://podoclinicec.com${page.loc}`,
          hreflang: 'es',
        }
      ]
    }));
  },
  
  // Transformación de URLs para SEO médico optimizado
  transform: async (config, path) => {
    // Homepage - máxima prioridad
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly', 
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: 'https://podoclinicec.com',
            hreflang: 'es-EC',
          },
          {
            href: 'https://podoclinicec.com', 
            hreflang: 'es',
          },
        ],
      }
    }

    // Páginas de servicios médicos - alta prioridad SEO
    if (path.includes('uñeros') || path.includes('podologo') || path.includes('podologia') || path.includes('pie-diabetico')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `https://podoclinicec.com${path}`,
            hreflang: 'es-EC',
          },
        ],
      }
    }

    // Blog posts médicos - contenido educativo
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }

    // Tips y FAQ - contenido de apoyo
    if (path.startsWith('/tips/') || path === '/faq') {
      return {
        loc: path,
        changefreq: 'monthly', 
        priority: 0.5,
        lastmod: new Date().toISOString(),
      }
    }

    // Configuración por defecto
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  
  // Exclude URLs que no aportan SEO
  exclude: [
    '/404',
    '/500', 
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/tmp/*'
  ]
};