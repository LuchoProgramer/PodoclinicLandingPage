import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/InternalLinks";
import { SEO_METADATA } from "@/data/seo-metadata";
import { blogPosts } from "@/data/blog/posts";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Metadata específica para blog local
const pageMetadata = SEO_METADATA['blog-local'] || {
  title: "Podología Local en Quito Norte | Artículos y Guías - Podoclinicec",
  description: "Información local sobre podología en Quito Norte: servicios, ubicaciones, testimonios y guías específicas para residentes de La Florida y zonas aledañas.",
  keywords: "podología quito norte, podólogo la florida, servicios locales quito, atención domicilio quito norte",
  canonical: "https://podoclinicec.com/blog/local"
};

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: pageMetadata.keywords,
  alternates: {
    canonical: pageMetadata.canonical
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: pageMetadata.canonical,
    siteName: "Podoclinicec",
    type: "website"
  }
};

export default function BlogLocalPage() {
  // Filtrar posts de la categoría "local"
  const localPosts = blogPosts.filter(post => post.category === "local");

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Local - Podología Quito Norte",
    "alternateName": "Información Local de Podología",
    "url": "https://podoclinicec.com/blog/local",
    "description": "Artículos e información específica sobre servicios de podología en Quito Norte, testimonios locales y guías para residentes.",
    "author": {
      "@type": "Person",
      "name": "Cristina Muñoz, Podóloga Especialista"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Podoclinicec"
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Schema estructurado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs path="/blog/local" />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4 inline mr-1" />
              Información Local
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Podología en
              <span className="text-green-600 block mt-2">
                Quito Norte
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              Información específica sobre <strong>servicios de podología</strong> en 
              La Florida, Quito Norte y zonas aledañas. Testimonios, ubicaciones y guías locales.
            </p>
          </div>

          {/* Estadísticas locales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-700">Años atendiendo Quito Norte</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700">Pacientes locales atendidos</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15 min</div>
              <div className="text-gray-700">Tiempo promedio de llegada</div>
            </div>
          </div>

          {/* Zonas de atención */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Zonas de Atención en Quito Norte
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "La Florida", "El Batán", "La Paz", "Carcelén",
                "Ponceano", "El Condado", "Comité del Pueblo", "Calderón"
              ].map((zona, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  {zona}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artículos locales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Artículos sobre Podología Local
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Información específica para residentes de Quito Norte: testimonios, ubicaciones y guías prácticas
            </p>
          </div>

          {localPosts.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {localPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.publishDate).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      5 min lectura
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          #{tag.replace(/\s+/g, '')}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/local/${post.slug}`}
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Leer artículo completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Próximamente más contenido local
              </h3>
              <p className="text-gray-500 mb-6">
                Estamos preparando más artículos específicos sobre podología en Quito Norte
              </p>
              <Link 
                href="/blog"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Ver todos los artículos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Información de contacto local */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Vives en Quito Norte?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ofrecemos atención podológica a domicilio sin costo adicional por traslado. 
            Agenda tu cita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/593995832788?text=¡Hola!%20Vivo%20en%20Quito%20Norte%20y%20quiero%20agendar%20podología%20a%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar Cita a Domicilio
            </a>
            <a
              href="tel:+593995832788"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}