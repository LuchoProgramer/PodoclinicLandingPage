/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://podoclinicec.com",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    generateIndexSitemap: true,
    exclude: ["/admin", "/login", "/cart"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/login", "/cart"],
            },
        ],
        additionalSitemaps: [
            "https://podoclinicec.com/sitemap-0.xml",
            "https://podoclinicec.com/server-sitemap.xml",
        ],
    },
};