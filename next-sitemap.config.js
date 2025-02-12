/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://podoclinicec.com", // 🔹 Reemplaza con tu dominio real
    generateRobotsTxt: true, // 🔹 Genera automáticamente un robots.txt
    sitemapSize: 5000, // 🔹 Máximo de URLs por sitemap
    generateIndexSitemap: true, // 🔹 Divide en varios sitemaps si hay muchas páginas
    exclude: ["/admin", "/login", "/cart"], // 🔹 Bloquea rutas privadas o sensibles
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/login", "/cart"],
            },
        ],
        additionalSitemaps: [
            "https://podoclinicec.com/server-sitemap.xml", // 🔹 Puedes agregar más sitemaps si tienes contenido dinámico
        ],
    },
};
