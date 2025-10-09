/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://podoclinicec.com",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    generateIndexSitemap: true,
    exclude: ["/admin", "/login", "/cart"],
    additionalPaths: async (config) => {
        // Agregar rutas del blog dinámicamente
        return [
            {
                loc: '/blog',
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/blog/uneros',
                changefreq: 'weekly', 
                priority: 0.7,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/blog/pie-diabetico',
                changefreq: 'weekly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/blog/hongos',
                changefreq: 'weekly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/blog/cuidado-preventivo',
                changefreq: 'weekly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/blog/uneros/senales-unero-urgente',
                changefreq: 'monthly',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            },
        ]
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/login", "/cart"],
            },
        ],
        additionalSitemaps: [
            "https://podoclinicec.com/sitemap-0.xml"
        ],
    },
};