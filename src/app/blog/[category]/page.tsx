
import { getAllPosts, getPostsByCategory } from '@/lib/hybrid-blog-service';
import { blogCategories } from '@/data/blog/posts';
import Link from 'next/link';
import Image from 'next/image';
import { Home, FileText, ChevronRight } from 'lucide-react';
import LayoutClient from "@/components/LayoutClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  // Usar las categorías predefinidas del blog
  return blogCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  const firstPost = posts && posts.length > 0 ? posts[0] : null;
  const baseUrl = 'https://podoclinicec.com';
  const canonicalUrl = `${baseUrl}/blog/${category}`;
  let title = firstPost?.metaTitle || `Artículos de ${category} - Podoclinic`;
  let description = firstPost?.metaDescription || `Artículos especializados en ${category} por Cristina Muñoz, podóloga en Quito.`;
  if (category === 'cuidado-preventivo') {
    title = 'Cuidado Preventivo de los Pies en Quito | Consejos y Guías de Podología';
    description = 'Descubre consejos y guías de podología para el cuidado preventivo de los pies en Quito. Información profesional para prevenir problemas y mantener tus pies sanos.';
  }
  return {
    title,
    description,
    keywords: firstPost?.tags?.join(', ') || 'podología, artículos podología, cuidado pies',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'PodoClinicec',
      type: 'website',
      images: [
        {
          url: firstPost?.image || `${baseUrl}/blog/${category}-category.jpg`,
          width: 1200,
          height: 630,
        }
      ]
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams || {};
  if (!category) {
    notFound();
    return null;
  }

  const posts = await getPostsByCategory(category);

  const categoryTitles: Record<string, string> = {
    'uneros': 'Uñeros',
    'pie-diabetico': 'Pie Diabético',
    'hongos': 'Hongos',
    'cuidados': 'Cuidados Generales'
  };

  const baseUrl = 'https://podoclinicec.com';

  // Schema.org para la página de categoría
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Artículos sobre ${categoryTitles[category]}`,
    "description": `Artículos especializados sobre ${categoryTitles[category]} por la Cristina Muñoz, Podóloga Especialista`,
    "url": `${baseUrl}/blog/${category}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((post, index) => ({
        "@type": "Article",
        "position": index + 1,
        "url": `${baseUrl}/blog/${category}/${post.slug}`,
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "datePublished": post.publishDate
      }))
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoryTitles[category] || 'Artículos',
        "item": {
          "@type": "Thing",
          "@id": `${baseUrl}/blog/${category}`
        }
      }
    ]
  };

  return (
    <LayoutClient>
      {/* Datos estructurados para SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:pt-32 md:pb-12">
        {/* Breadcrumbs mejorado */}
  <nav className="mb-8 mt-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm bg-white rounded-lg shadow-sm px-4 py-3">
            <li>
              <Link 
                href="/" 
                className="text-[#60BEC3] hover:text-[#4A9DB8] font-medium transition-colors"
                itemProp="item"
              >
                <span itemProp="name">🏠 Inicio</span>
              </Link>
            </li>
            <li className="text-gray-400">›</li>
            <li>
              <Link 
                href="/blog" 
                className="text-[#60BEC3] hover:text-[#4A9DB8] font-medium transition-colors"
                itemProp="item"
              >
                <span itemProp="name">📝 Blog</span>
              </Link>
            </li>
            <li className="text-gray-400">›</li>
            <li className="text-gray-800 font-semibold" itemProp="name">
              {category === 'uneros' && '🦶 Uñeros'}
              {category === 'pie-diabetico' && '🩺 Pie Diabético'}
              {category === 'hongos' && '🍄 Hongos'}
              {!['uneros', 'pie-diabetico', 'hongos'].includes(category) && '📄 Artículos'}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artículos sobre {categoryTitles[category]}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información especializada y consejos profesionales sobre {categoryTitles[category]?.toLowerCase()} 
            por Cristina Muñoz, Podóloga Especialista
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image || '/default-blog-image.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categoryTitles[post.category] || post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">DC</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Cristina Muñoz, Podóloga Especialista</p>
                        <p className="text-xs text-gray-500">{post.publishDate}</p>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.category}/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Próximamente más contenido
            </h3>
            <p className="text-gray-600 mb-8">
              Estamos preparando más artículos especializados sobre {categoryTitles[category]?.toLowerCase()}.
            </p>
            <Link 
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver todos los artículos
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas atención especializada?
          </h3>
          <p className="text-gray-600 mb-6">
            Agenda tu consulta con Cristina Muñoz, Podóloga Especialista para un diagnóstico y tratamiento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5930999999999?text=Hola, me interesa agendar una consulta sobre {categoryTitles[category]?.toLowerCase()}"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
            <Link 
              href="/#contacto"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Agendar Cita
            </Link>
          </div>
        </div>
      </div>
      </div>
    </LayoutClient>
  );
}