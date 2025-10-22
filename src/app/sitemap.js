import blogPosts, { blogCategories } from '@/data/blog/posts';

const SITE_URL = 'https://podoclinicec.com';

export const dynamic = 'force-static';

export default function sitemap() {
  // Rutas estáticas principales
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

  // Rutas de categorías del blog
  const categoryPages = blogCategories.map(cat => ({
    url: `${SITE_URL}/blog/${cat.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Rutas de posts del blog
  const postPages = blogPosts.map(post => ({
    url: `${SITE_URL}/blog/${post.category}/${post.slug}`,
    lastModified: post.publishDate ? new Date(post.publishDate).toISOString() : new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...postPages,
  ];
}