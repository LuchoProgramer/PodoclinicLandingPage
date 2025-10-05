import { getAllPosts, getPostsByCategory, getAllCategories } from '@/data/blog/posts';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const categories = getAllCategories();
  
  return categories.map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  
  const categoryTitles = {
    'uneros': 'Uñeros - Tratamiento y Prevención',
    'diabetes': 'Cuidado Podológico para Diabéticos',
    'hongos': 'Tratamiento de Hongos en Pies',
    'cuidados': 'Cuidados Generales de los Pies'
  };
  
  return {
    title: `${categoryTitles[category] || 'Artículos'} - Podoclinic`,
    description: `Artículos especializados sobre ${categoryTitles[category]?.toLowerCase() || 'podología'} por Dra. Cristina Muñoz`,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  
  const categoryTitles = {
    'uneros': 'Uñeros',
    'diabetes': 'Diabetes y Pies',
    'hongos': 'Hongos',
    'cuidados': 'Cuidados Generales'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">{categoryTitles[category]}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artículos sobre {categoryTitles[category]}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información especializada y consejos profesionales sobre {categoryTitles[category]?.toLowerCase()} 
            por Dra. Cristina Muñoz
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categoryTitles[post.category]}
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
                        <p className="text-sm font-medium text-gray-900">Dra. Cristina Muñoz</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
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
            Agenda tu consulta con Dra. Cristina Muñoz para un diagnóstico y tratamiento personalizado
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
  );
}