import Link from "next/link";
import { Calendar, Clock, ArrowRight, Star, User } from "lucide-react";
import blogPosts, { getFeaturedPosts, getRecentPosts, blogCategories } from "@/data/blog/posts";
import LayoutClient from "@/components/LayoutClient";

export const metadata = {
  title: "Blog Podológico | Consejos y Tratamientos | Cristina Muñoz",
  description: "Blog de podología en Quito: prevención, tratamientos modernos y experiencias de pacientes. Cuida tus pies con expertos.",
  keywords: "blog podología, uñeros, pie diabético, hongos uñas, cuidado pies Quito, podólogo Quito",
  authors: [{ name: "Cristina Muñoz" }],
  creator: "Cristina Muñoz",
  publisher: "PodoClinicec",
  alternates: {
    canonical: "https://podoclinicec.com/blog",
  },
  openGraph: {
    title: "Blog Podológico | Cristina Muñoz | PodoClinicec",
  description: "Guía completa de salud podal: tips, novedades y soluciones para problemas frecuentes de pies. Información confiable de Cristina Muñoz en Quito.",
    url: "https://podoclinicec.com/blog",
    siteName: "PodoClinicec",
    type: "website",
    images: [
      { 
        url: "https://podoclinicec.com/blog/blog-og-image.jpg", 
        width: 1200, 
        height: 630,
        alt: "Blog Podológico PodoClinicec"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Podológico | Cristina Muñoz",
  description: "Recursos y consejos prácticos para el cuidado de tus pies. Todo sobre podología moderna en Quito.",
    images: ["https://podoclinicec.com/blog/blog-og-image.jpg"],
    creator: "@podoclinicec",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  // Schema.org para la página principal del blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Podológico PodoClinicec",
    "description": "Artículos especializados en podología por Cristina Muñoz",
    "url": "https://podoclinicec.com/blog",
    "author": {
      "@type": "Person",
      "name": "Cristina Muñoz",
      "jobTitle": "Especialista en Podología",
      "worksFor": {
        "@type": "Organization",
        "name": "PodoClinicec",
        "url": "https://podoclinicec.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "PodoClinicec",
      "logo": {
        "@type": "ImageObject",
        "url": "https://podoclinicec.com/logo-podoclinic.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": featuredPosts.length + recentPosts.length,
      "itemListElement": [
        ...featuredPosts.map((post, index) => ({
          "@type": "Article",
          "position": index + 1,
          "url": `https://podoclinicec.com/blog/${post.category}/${post.slug}`,
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.publishDate
        })),
        ...recentPosts.map((post, index) => ({
          "@type": "Article",
          "position": featuredPosts.length + index + 1,
          "url": `https://podoclinicec.com/blog/${post.category}/${post.slug}`,
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.publishDate
        }))
      ]
    }
  };

  return (
    <LayoutClient>
      {/* Datos estructurados para SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header del Blog */}
      <section className="pt-32 pb-16 md:pt-32 md:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Blog <span className="text-[#60BEC3]">Podológico</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consejos profesionales, tratamientos especializados y todo lo que necesitas 
              saber sobre el cuidado de tus pies por la <strong>Cristina Muñoz, Podóloga Especialista</strong>
            </p>
          </div>

          {/* Estadísticas del blog */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#60BEC3] mb-2">15+</div>
              <div className="text-sm text-gray-600">Artículos Especializados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#60BEC3] mb-2">500+</div>
              <div className="text-sm text-gray-600">Pacientes Informados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#60BEC3] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Información Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#60BEC3] mb-2">100%</div>
              <div className="text-sm text-gray-600">Contenido Profesional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Destacados */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Artículos <span className="text-[#60BEC3]">Destacados</span>
            </h2>
            <Star className="w-8 h-8 text-yellow-400 fill-current" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  {post.image ? (
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#60BEC3] to-[#79A373] flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-lg font-semibold mb-2">Imagen del Post</h3>
                        <p className="text-sm opacity-80">{post.category}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm font-medium">
                    Destacado
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#60BEC3] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/blog/${post.category}/${post.slug}`}
                      className="inline-flex items-center text-[#60BEC3] font-semibold hover:text-[#4A9DB8] transition-colors"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Explora por <span className="text-[#60BEC3]">Categorías</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCategories.map((category) => (
              <Link 
                key={category.id}
                href={`/blog/${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-100">
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${category.color || '#60BEC3'}20` }}
                    >
                      <div 
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: category.color || '#60BEC3' }}
                      ></div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#60BEC3] transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {category.description}
                    </p>

                    <div className="inline-flex items-center text-[#60BEC3] font-medium text-sm">
                      Ver artículos
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos Recientes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Artículos <span className="text-[#60BEC3]">Recientes</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {post.image ? (
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover"
                  />
                ) : (
                  <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{post.category}</span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#60BEC3] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.category}/${post.slug}`}
                    className="inline-flex items-center text-[#60BEC3] font-semibold text-sm hover:text-[#4A9DB8] transition-colors"
                  >
                    Leer artículo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/*
          <div className="text-center mt-12">
            <Link 
              href="/blog/todos"
              className="inline-flex items-center bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Ver Todos los Artículos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          */}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#60BEC3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesitas Consulta Personalizada?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Después de leer nuestros artículos, consulta directamente con la Cristina Muñoz, Podóloga Especialista
          </p>
          
          <a
            href="https://wa.me/593995832788?text=¡Hola%20Cristina!%20He%20leído%20artículos%20en%20su%20blog%20y%20me%20gustaría%20una%20consulta%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <User className="w-5 h-5 mr-2" />
            Consulta con Cristina Muñoz, Podóloga Especialista, Cristina
          </a>
        </div>
      </section>
      </div>
    </LayoutClient>
  );
}