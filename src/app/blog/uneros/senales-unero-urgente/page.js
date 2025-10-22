import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag, Share2, CheckCircle } from "lucide-react";
import { getPostBySlug, getRecentPosts } from "@/data/blog/posts";
import { WhatsAppButton, CTAButton } from "@/components/BlogButtons";

export const metadata = {
  title: "5 Señales URGENTES de Uñero | Cuándo Acudir al Podólogo",
  description: "¿Tu uñero es una emergencia? Aprende las 5 señales que indican que necesitas atención médica URGENTE. Dra. Cristina Muñoz, especialista en Quito.",
  keywords: "uñero urgente, uña encarnada emergencia, podólogo Quito, infección uñero",
};

export default function SeñalesUneroUrgentePage() {
  const post = getPostBySlug("senales-unero-urgente");
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== post?.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
             <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/uneros" className="hover:text-[#60BEC3]">Uñeros</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">5 Señales de que tu Uñero Necesita Atención URGENTE</span>
          </nav>
        </div>
      </div>

      {/* Header del Post */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          {/* Botón volver */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#60BEC3] hover:text-[#4A9DB8] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>

          {/* Categoría */}
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            URGENTE • UÑEROS
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            5 Señales de que tu Uñero Necesita Atención <span className="text-red-600">URGENTE</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Descubre cuándo un uñero deja de ser un problema menor y se convierte en una emergencia médica que requiere atención profesional inmediata.
          </p>

          {/* Meta información */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span className="font-medium">Dra. Cristina Muñoz</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>5 de Octubre, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>5 min de lectura</span>
            </div>
          </div>

          {/* Imagen destacada placeholder */}
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-12">
            <div className="text-white text-center">
              <h3 className="text-xl font-semibold mb-2">🚨 Uñero de Emergencia</h3>
              <p className="text-sm opacity-80">Señales de alerta que no debes ignorar</p>
            </div>
          </div>
        </header>

        {/* Contenido del Post */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
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
                <br />- <strong>Dra. Cristina Muñoz</strong>
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

            {/* CTA específico del post */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-center text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">🚨 ¿Reconoces alguna de estas señales?</h3>
              <p className="text-lg mb-6 opacity-90">
                No esperes a que empeore. La atención temprana es clave para un tratamiento exitoso.
              </p>
              <WhatsAppButton
                href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Tengo%20síntomas%20urgentes%20de%20uñero%20y%20necesito%20consulta%20inmediata"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                trackingLabel="Señales Uñero Urgente CTA"
              >
                Consulta URGENTE tu Uñero
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center flex-wrap gap-3 mt-8">
          <Tag className="w-5 h-5 text-gray-500" />
          <span className="bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm border border-[#60BEC3]">uñeros</span>
          <span className="bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm border border-[#60BEC3]">emergencia</span>
          <span className="bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm border border-[#60BEC3]">síntomas</span>
          <span className="bg-white text-[#60BEC3] px-3 py-1 rounded-full text-sm border border-[#60BEC3]">dolor</span>
        </div>

        {/* Botón compartir */}
        <div className="flex items-center justify-center mt-8">
          <button className="flex items-center bg-white text-gray-600 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Share2 className="w-5 h-5 mr-2" />
            Compartir artículo
          </button>
        </div>
      </article>

      {/* Posts relacionados */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Artículos <span className="text-[#60BEC3]">Relacionados</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{relatedPost.category}</span>
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
  );
}