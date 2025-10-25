
import blogPosts, { blogCategories } from '@/data/blog/posts';

const SITE_URL = 'https://podoclinicec.com';

export const dynamic = 'force-static';

export async function GET() {
  const staticPages = [
    '',
    '/faq',
    '/blog',
    '/tips',
    '/servicios/domicilio',
    '/servicios/hongos',
    '/servicios/profilaxis',
    '/servicios/uneros',
    '/servicios/verrugas',
  ].map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const categoryPages = blogCategories.map(cat => ({
    url: `${SITE_URL}/blog/${cat.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const postPages = blogPosts.map(post => ({
    url: `${SITE_URL}/blog/${post.category}/${post.slug}`,
    lastModified: post.publishDate ? new Date(post.publishDate).toISOString() : new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const allPages = [...staticPages, ...categoryPages, ...postPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages
    .map(
      (page) => `\n  <url>\n    <loc>${page.url}</loc>\n    <lastmod>${page.lastModified}</lastmod>\n    <changefreq>${page.changeFrequency}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}