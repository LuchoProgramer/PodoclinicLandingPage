/**
 * Componente de cliente para el blog híbrido
 * Maneja tanto posts hardcodeados como del CMS
 */

'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Star, User } from "lucide-react";
import { BlogPost, BlogCategory } from '@/types';
import { BlogImage } from '@/components/OptimizedImage';
import { 
  getFeaturedPosts, 
  getRecentPosts, 
  getPostStatsWithFallback
} from '@/data/hybrid-blog-posts';
import { blogCategories } from '@/data/blog/posts';

interface BlogStats {
  static: number;
  cms: number;
  total: number;
  cmsAvailable: boolean;
  isEmergencyData?: boolean;
  message?: string;
}

export default function HybridBlogContent() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories] = useState<BlogCategory[]>(blogCategories);
  const [stats, setStats] = useState<BlogStats>({
    static: 0,
    cms: 0,
    total: 0,
    cmsAvailable: false,
    isEmergencyData: false,
    message: 'Cargando sistema híbrido...'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBlogData() {
      setIsLoading(true);
      
      try {
        console.log('🔍 Iniciando carga de datos del blog...');
        
        // Cargar posts en paralelo
        const [featured, recent, blogStats] = await Promise.all([
          getFeaturedPosts(),
          getRecentPosts(6),
          getPostStatsWithFallback()
        ]);

        console.log('📊 Datos cargados:', {
          featured: featured.length,
          recent: recent.length,
          stats: blogStats
        });

        setFeaturedPosts(featured);
        setRecentPosts(recent);
        setStats(blogStats);
        
      } catch (error) {
        console.error('❌ Error loading blog data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#60BEC3] mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando artículos...</p>
          {stats.message && (
            <p className={`text-sm mt-2 ${
              stats.isEmergencyData 
                ? 'text-orange-600' 
                : stats.cmsAvailable 
                  ? 'text-green-600' 
                  : 'text-gray-600'
            }`}>
              {stats.isEmergencyData ? '⚠️' : stats.cmsAvailable ? '✅' : '📄'} {stats.message}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
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
              saber sobre el cuidado de tus pies por la <strong>Dra. Cristina Muñoz</strong>
            </p>
            
            {/* Indicador del sistema híbrido mejorado */}
            <div className={`mt-6 inline-flex items-center px-4 py-2 rounded-full text-sm ${
              stats.isEmergencyData 
                ? 'bg-orange-50 text-orange-700 border border-orange-200'
                : stats.cmsAvailable 
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-gray-50 text-gray-700 border border-gray-200'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                stats.isEmergencyData 
                  ? 'bg-orange-500'
                  : stats.cmsAvailable 
                    ? 'bg-green-500'
                    : 'bg-gray-400'
              }`}></div>
              
              {stats.message || (
                stats.cmsAvailable 
                  ? `Sistema híbrido activo: ${stats.static} posts locales + ${stats.cms} posts CMS`
                  : `Mostrando ${stats.total} artículos (solo contenido local)`
              )}
              
              {stats.isEmergencyData && (
                <span className="ml-2 text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded">
                  DATOS DE RESPALDO
                </span>
              )}
            </div>
          </div>

          {/* Estadísticas del blog */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#60BEC3] mb-2">{stats.total}+</div>
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
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{featuredPosts.length} destacados</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  {post.image ? (
                    <BlogImage
                      src={post.image}
                      alt={post.title}
                      size="featured"
                      className="h-48 sm:h-56 md:h-48"
                      priority={true}
                    />
                  ) : (
                    <div className="h-48 sm:h-56 md:h-48 bg-gradient-to-br from-[#60BEC3] to-[#79A373] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-[url('/images/blog-pattern.svg')] bg-repeat bg-center"></div>
                      </div>
                      <div className="text-white text-center relative z-10">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Artículo Especializado</h3>
                        <p className="text-sm opacity-80">{post.category}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Destacado
                    </div>
                    {post.isCMSPost && (
                      <div className="bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                        🔴 EN VIVO
                      </div>
                    )}
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
            {categories.map((category) => (
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
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Artículos <span className="text-[#60BEC3]">Recientes</span>
            </h2>
            <span className="text-sm text-gray-600">{recentPosts.length} artículos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {post.image ? (
                  <BlogImage
                    src={post.image}
                    alt={post.title}
                    size="recent"
                    className="h-40 sm:h-32"
                  />
                ) : (
                  <div className="h-40 sm:h-32 bg-gradient-to-r from-[#60BEC3]/10 to-[#79A373]/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div className="w-full h-full bg-[url('/images/blog-pattern.svg')] bg-repeat bg-center"></div>
                    </div>
                    <div className="text-center relative z-10">
                      <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#60BEC3]/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#60BEC3]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                        </svg>
                      </div>
                      <span className="text-[#60BEC3] text-sm font-medium">{post.category}</span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span className="mr-2">{post.readTime}</span>
                    {post.isCMSPost && (
                      <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                        🔴 EN VIVO
                      </span>
                    )}
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#60BEC3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesitas Consulta Personalizada?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Después de leer nuestros artículos, consulta directamente con la Dra. Cristina Muñoz
          </p>
          
          <a
            href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20He%20leído%20artículos%20en%20su%20blog%20y%20me%20gustaría%20una%20consulta%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <User className="w-5 h-5 mr-2" />
            Consulta con la Dra. Cristina
          </a>
        </div>
      </section>
    </div>
  );
}