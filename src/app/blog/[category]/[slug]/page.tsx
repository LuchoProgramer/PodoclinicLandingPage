import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2, CheckCircle } from "lucide-react";
import { getAllPosts, getPostBySlug, getRecentPosts } from "@/lib/hybrid-blog-service";
import { notFound } from "next/navigation";
import LayoutClient from "@/components/LayoutClient";
import CMSContentRenderer from "@/components/CMSContentRenderer";
import TikTokLoader from "@/components/TikTokLoader";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export const revalidate = 60; // Enable ISR

export async function generateStaticParams() {
  console.log('🏗️  [BUILD] generateStaticParams called for blog posts');

  const posts = await getAllPosts();

  console.log(`📊 [BUILD] Total posts found: ${posts.length}`);
  console.log(`📝 [BUILD] Posts breakdown:`);

  const params = posts.map((post) => {
    console.log(`   - ${post.title} → /blog/${post.category}/${post.slug}`);
    return {
      category: post.category,
      slug: post.slug,
    };
  });

  console.log(`✅ [BUILD] Generated ${params.length} static params`);

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado - Podoclinic',
      description: 'El artículo que buscas no existe.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseUrl = 'https://podoclinicec.com';
  const canonicalUrl = `${baseUrl}/blog/${post.category}/${slug}`;

  // Generar metadatos SEO completos
  const metaTitle = post.metaTitle || `${post.title} | Cristina Muñoz - PodoClinicec`;
  const metaDescription = post.metaDescription || post.excerpt || `Artículo sobre ${post.category} por Cristina Muñoz, podóloga especialista en Quito Norte.`;
  const imageUrl = post.image || `${baseUrl}/images/blog/default-article.jpg`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.tags?.join(', ') || `podología, ${post.category}, Quito Norte, Cristina Muñoz`,
    authors: [{ name: post.author || 'Cristina Muñoz' }],
    creator: post.author || 'Cristina Muñoz',
    publisher: 'PodoClinicec - Cristina Muñoz, Podóloga Especialista',
    category: post.category,
    classification: 'Medical Article',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'PodoClinicec - Cristina Muñoz, Podóloga Especialista',
      locale: 'es_EC',
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified || post.publishDate,
      expirationTime: undefined, // Los artículos médicos no expiran
      authors: [post.author || 'Cristina Muñoz'],
      section: post.category,
      tags: post.tags || [`podología`, `${post.category}`, `Quito Norte`],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${post.title} - Artículo de podología por Cristina Muñoz, Podóloga Especialista`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@podoclinicec',
      creator: '@podoclinicec',
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: imageUrl,
          alt: `${post.title} - PodoClinicec`,
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Metadatos adicionales para SEO médico
    other: {
      'medical-specialty': 'Podiatry',
      'content-language': 'es-EC',
      'geo.region': 'EC-P',
      'geo.placename': 'Quito',
      'geo.position': '-0.1807;-78.4678',
      'ICBM': '-0.1807, -78.4678',
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug, category } = await params;

  // Server-side fetch para SEO optimizado
  const post = await getPostBySlug(slug);
  const recentPosts = await getRecentPosts(3);

  if (!post) {
    notFound();
  }

  // Validar que la categoría en la URL coincida con la del post
  if (post.category !== category) {
    // Redirigir a la URL correcta si la categoría no coincide
    notFound();
  }

  const baseUrl = 'https://podoclinicec.com';
  const canonicalUrl = `${baseUrl}/blog/${category}/${slug}`;

  // Schema.org para el artículo (optimizado para SEO médico)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "mainEntity": {
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt || post.metaDescription,
      "image": {
        "@type": "ImageObject",
        "url": post.image || `${baseUrl}/images/blog/default-article.jpg`,
        "width": 1200,
        "height": 630,
        "caption": post.title
      },
      "author": {
        "@type": "Person",
        "name": post.author || "Cristina Muñoz",
        "jobTitle": "Podóloga Especialista",
        "qualification": "Especialista en Podología",
        "worksFor": {
          "@type": "MedicalClinic",
          "name": "PodoClinicec",
          "url": baseUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Manuel Jordan y Av La Florida",
            "addressLocality": "Quito",
            "addressRegion": "Pichincha",
            "postalCode": "170511",
            "addressCountry": "EC"
          }
        },
        "alumniOf": "Universidad Especializada en Podología",
        "knowsAbout": ["Podología", "Pie Diabético", "Onicocriptosis", "Onicomicosis"]
      },
      "publisher": {
        "@type": "MedicalClinic",
        "name": "PodoClinicec - Cristina Muñoz, Podóloga Especialista",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo-podoclinic.png`,
          "width": 200,
          "height": 60
        },
        "url": baseUrl,
        "telephone": "+593995832788",
        "medicalSpecialty": "Podiatry"
      },
      "url": canonicalUrl,
      "datePublished": post.publishDate,
      "dateModified": post.lastModified || post.publishDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "articleSection": post.category,
      "keywords": post.tags?.join(', ') || `podología, ${post.category}, Quito Norte`,
      "wordCount": post.content?.length || 1500,
      "timeRequired": post.readTime || "5 min",
      "inLanguage": "es-EC",
      "isAccessibleForFree": true,
      "audience": {
        "@type": "PeopleAudience",
        "audienceType": "Patients seeking podiatric care"
      },
      "about": {
        "@type": "MedicalCondition",
        "name": post.category === 'uneros' ? 'Onicocriptosis' :
          post.category === 'pie-diabetico' ? 'Pie Diabético' :
            post.category === 'hongos' ? 'Onicomicosis' : 'Condición Podológica'
      }
    },
    "medicalAudience": {
      "@type": "PeopleAudience",
      "audienceType": "Patient"
    },
    "lastReviewed": post.lastModified || post.publishDate,
    "reviewedBy": {
      "@type": "Person",
      "name": post.author || "Cristina Muñoz",
      "jobTitle": "Podóloga Especialista"
    }
  };

  // Schema.org para breadcrumbs
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
        "name": post.category === 'uneros' ? 'Uñeros' :
          post.category === 'pie-diabetico' ? 'Pie Diabético' :
            post.category === 'hongos' ? 'Hongos' : 'Artículos',
        "item": `${baseUrl}/blog/${category}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title
      }
    ]
  };

  // Schema.org para la organización médica
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "PodoClinicec",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-podoclinic.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manuel Jordan y Av La Florida",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha",
      "postalCode": "170511",
      "addressCountry": "EC"
    },
    "telephone": "+593995832788",
    "medicalSpecialty": "Podiatry"
  };

  return (
    <LayoutClient>
      <TikTokLoader />
      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        {/* Breadcrumb mejorado con Schema.org */}
        <div className="bg-white border-b shadow-sm pt-20 md:pt-20">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <nav className="flex items-center text-sm text-gray-600 mt-8" aria-label="Breadcrumb">
              <Link
                href="/"
                className="hover:text-[#60BEC3] transition-colors font-medium"
                itemProp="item"
              >
                <span itemProp="name">🏠 Inicio</span>
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <Link
                href="/blog"
                className="hover:text-[#60BEC3] transition-colors font-medium"
                itemProp="item"
              >
                <span itemProp="name">📝 Blog</span>
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <Link
                href={`/blog/${category}`}
                className="hover:text-[#60BEC3] transition-colors font-medium"
                itemProp="item"
              >
                <span itemProp="name">
                  {category === 'uneros' && '🦶 Uñeros'}
                  {category === 'pie-diabetico' && '🩺 Pie Diabético'}
                  {category === 'hongos' && '🍄 Hongos'}
                  {!['uneros', 'pie-diabetico', 'hongos'].includes(category) && '📄 Artículos'}
                </span>
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <span className="text-gray-800 font-semibold truncate" itemProp="name">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Contenido del Post - Sistema Híbrido */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {post.isCMSPost ? (
            // Renderizar contenido del CMS usando el renderizador dinámico
            <CMSContentRenderer post={post} />
          ) : (
            // Contenido hardcodeado para posts estáticos
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                {/* Contenido específico por post */}
                {post.slug === "senales-unero-urgente" && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">¿Cuándo un Uñero se Convierte en Emergencia?</h2>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Los uñeros (uñas encarnadas) son una condición común que puede variar desde una molestia menor
                      hasta una emergencia médica. Como especialista en podología, he visto casos que pudieron haberse
                      resuelto fácilmente si se hubieran atendido a tiempo.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                      <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ ATENCIÓN: Busca ayuda inmediata si presentas:</h3>
                      <ul className="text-red-700 space-y-2">
                        <li>• Fiebre o escalofríos</li>
                        <li>• Pus abundante o mal olor</li>
                        <li>• Líneas rojas que se extienden desde el dedo</li>
                        <li>• Dolor que te impide caminar</li>
                        <li>• Si eres diabético y tienes cualquier lesión en el pie</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Las 5 Señales de Alerta</h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Infección Visible</h4>
                          <p className="text-gray-700">Presencia de pus, enrojecimiento excesivo que se extiende más allá del dedo, o calor intenso en la zona.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Dolor Incapacitante</h4>
                          <p className="text-gray-700">Dolor que te impide usar zapatos, caminar normalmente o dormir por las noches.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Síntomas Sistémicos</h4>
                          <p className="text-gray-700">Fiebre, malestar general, o ganglios inflamados - señales de que la infección se está extendiendo.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Empeoramiento Rápido</h4>
                          <p className="text-gray-700">El uñero empeora visiblemente en cuestión de horas o días, especialmente si ya intentaste tratarlo.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Condiciones de Riesgo</h4>
                          <p className="text-gray-700">Si eres diabético, tienes problemas circulatorios, o tu sistema inmunológico está comprometido.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 Consejo Profesional</h3>
                      <p className="text-blue-700">
                        "En mi experiencia, los pacientes que acuden tempranamente tienen un 95% de éxito con tratamientos
                        mínimamente invasivos. Esperar puede convertir un procedimiento simple en una cirugía compleja."
                        - Cristina Muñoz, Podóloga Especialista
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">¿Qué NO Debes Hacer?</h3>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3">❌</span>
                          <span>Intentar "operar" en casa con tijeras o cuchillos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3">❌</span>
                          <span>Ignorar los síntomas esperando que "se cure solo"</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3">❌</span>
                          <span>Usar remedios caseros cuando hay signos de infección</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3">❌</span>
                          <span>Automedicarse con antibióticos sin consulta médica</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Nuestro Protocolo de Atención Urgente</h3>

                    <p className="text-gray-700 mb-6">
                      En PodoClinic, tenemos un protocolo específico para casos urgentes de uñeros que incluye:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 rounded-lg p-6">
                        <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                        <h4 className="font-semibold text-gray-800 mb-2">Evaluación Inmediata</h4>
                        <p className="text-gray-700 text-sm">Análisis completo del grado de infección y plan de tratamiento personalizado.</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-6">
                        <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                        <h4 className="font-semibold text-gray-800 mb-2">Tratamiento Láser</h4>
                        <p className="text-gray-700 text-sm">Técnica mínimamente invasiva que elimina la porción problemática sin dolor.</p>
                      </div>
                    </div>
                  </>
                )}

                {/* CTA específico del post */}
                <div className="bg-gradient-to-r from-[#60BEC3] to-[#79A373] rounded-2xl p-8 text-center text-white mt-12">
                  <h3 className="text-2xl font-bold mb-4">¿Reconoces alguna de estas señales?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    No esperes a que empeore. La atención temprana es clave para un tratamiento exitoso.
                  </p>
                  {post.cta && (
                    <a
                      href={post.cta.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      {post.cta.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex items-center flex-wrap gap-3 mt-8">
            <Tag className="w-5 h-5 text-gray-500" />
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm border border-[#60BEC3]">
                {tag}
              </span>
            ))}
          </div>

          {/* Botón compartir */}
          {/* Botón compartir */}
          <div className="flex items-center justify-center mt-8">
            <button className="flex items-center bg-white text-gray-600 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Share2 className="w-5 h-5 mr-2" />
              Compartir artículo
            </button>
          </div>
        </div>

        {/* Posts relacionados */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Artículos <span className="text-[#60BEC3]">Relacionados</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-32 bg-gradient-to-r from-gray-100 to-gray-200">
                    {relatedPost.image ? (
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-gray-500 text-sm">{relatedPost.category}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.category}/${relatedPost.slug}`}
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
      </div>
    </LayoutClient>
  );
}