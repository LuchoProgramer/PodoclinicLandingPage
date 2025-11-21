export const metadata = {
  title: "Tratamiento de Hongos en Uñas en Quito | Soluciones Podológicas Efectivas",
  description: "Tratamiento efectivo de hongos en uñas en Quito: síntomas, prevención y atención profesional con Cristina Muñoz, Podóloga Especialista.",
};

import Link from "next/link";
import LayoutClient from "@/components/LayoutClient";
import { Shield, Sparkles, CheckCircle, AlertCircle, Clock, TrendingUp, Users, Award, ArrowRight, Droplet, Wind, Footprints } from "lucide-react";

export default function HongosIndexPage() {
  return (
    <LayoutClient>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Breadcrumb mejorado */}
        <div className="bg-white/80 backdrop-blur-sm border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 mt-28 md:mt-32">
            <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#60BEC3] transition-colors font-medium flex items-center gap-1">
                🏠 Inicio
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <Link href="/blog" className="hover:text-[#60BEC3] transition-colors font-medium flex items-center gap-1">
                📝 Blog
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <Link href="/blog/hongos" className="hover:text-[#60BEC3] transition-colors font-medium flex items-center gap-1">
                🍄 Hongos
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <span className="text-gray-800 font-semibold flex items-center gap-1">Tratamiento de Hongos en Uñas</span>
            </nav>
          </div>
        </div>

        {/* Hero Section Impactante */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#60BEC3]/10 to-[#79A373]/10"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#60BEC3]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#79A373]/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
                <Sparkles className="w-5 h-5 text-[#60BEC3]" />
                <span className="text-sm font-semibold text-gray-700">Tratamiento Profesional Certificado</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Elimina los <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60BEC3] to-[#79A373]">Hongos</span> de tus Uñas
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Recupera la salud y apariencia de tus pies con tratamientos avanzados y personalizados. 
                <span className="font-semibold text-gray-800"> Resultados visibles desde la primera sesión.</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a 
                  href="https://wa.me/593995832788?text=Hola, quiero información sobre tratamiento de hongos" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#60BEC3] to-[#79A373] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link 
                  href="#tratamientos"
                  className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  Ver Tratamientos
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <Users className="w-8 h-8 text-[#60BEC3] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Pacientes Tratados</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-[#79A373] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Tasa de Éxito</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <Clock className="w-8 h-8 text-[#60BEC3] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">8-12</div>
                  <div className="text-sm text-gray-600">Semanas Promedio</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <Award className="w-8 h-8 text-[#79A373] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Años Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué son los hongos? - Diseño moderno */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                  <AlertCircle className="w-5 h-5 text-[#60BEC3]" />
                  <span className="text-sm font-semibold text-[#60BEC3]">Información Importante</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Qué son los Hongos en las Uñas?
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Los hongos en las uñas, conocidos médicamente como <strong>onicomicosis</strong>, 
                  son infecciones frecuentes que afectan tanto la apariencia como la salud de tus pies.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚠️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Señal de Alerta</h4>
                      <p className="text-gray-600 text-sm">Los hongos no desaparecen solos y pueden empeorar con el tiempo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Altamente Contagioso</h4>
                      <p className="text-gray-600 text-sm">Se propagan fácilmente en ambientes húmedos como duchas y piscinas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tratamiento Efectivo</h4>
                      <p className="text-gray-600 text-sm">Con el tratamiento adecuado, se pueden eliminar completamente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#60BEC3]/20 to-[#79A373]/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-8xl mb-6">🦶</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Identificación Temprana</h3>
                      <p className="text-gray-600">La detección precoz es clave para un tratamiento exitoso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Síntomas - Grid interactivo */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Señales de que Tienes <span className="text-[#60BEC3]">Hongos</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reconoce los síntomas a tiempo para un tratamiento más efectivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🟡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cambio de Color</h3>
                <p className="text-gray-600">Uñas amarillentas, marrones o con manchas blanquecinas</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📏</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Engrosamiento</h3>
                <p className="text-gray-600">Uñas más gruesas y difíciles de cortar</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💔</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fragilidad</h3>
                <p className="text-gray-600">Uñas quebradizas que se rompen fácilmente</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">😣</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mal Olor</h3>
                <p className="text-gray-600">Olor desagradable persistente en los pies</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deformación</h3>
                <p className="text-gray-600">Cambios en la forma y textura de la uña</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Desprendimiento</h3>
                <p className="text-gray-600">Separación de la uña del lecho ungueal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prevención - Cards interactivas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-[#79A373]" />
                <span className="text-sm font-semibold text-[#79A373]">Prevención es Clave</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cómo <span className="text-[#79A373]">Prevenir</span> los Hongos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sigue estos consejos para mantener tus pies saludables y libres de hongos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#60BEC3] to-[#79A373] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <Droplet className="w-12 h-12 text-[#60BEC3] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mantén Pies Secos</h3>
                  <p className="text-gray-600 mb-4">Seca bien entre los dedos después de bañarte. Los hongos prosperan en ambientes húmedos.</p>
                  <div className="flex items-center gap-2 text-[#60BEC3] font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Esencial</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#60BEC3] to-[#79A373] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <Wind className="w-12 h-12 text-[#79A373] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Calzado Transpirable</h3>
                  <p className="text-gray-600 mb-4">Usa zapatos de materiales naturales que permitan la circulación del aire.</p>
                  <div className="flex items-center gap-2 text-[#79A373] font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Muy Importante</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#60BEC3] to-[#79A373] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <Footprints className="w-12 h-12 text-[#60BEC3] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cambia Calcetines</h3>
                  <p className="text-gray-600 mb-4">Usa calcetines de algodón y cámbialos diariamente o si sudan mucho.</p>
                  <div className="flex items-center gap-2 text-[#60BEC3] font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Diariamente</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🚿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Duchas Públicas</h3>
                <p className="text-gray-600">Usa sandalias en piscinas, gimnasios y vestidores compartidos.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">✂️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Higiene Personal</h3>
                <p className="text-gray-600">No compartas cortaúñas, toallas ni calzado con otras personas.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">💅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cuidado de Uñas</h3>
                <p className="text-gray-600">Mantén las uñas cortas y limpias. Evita esmaltes por periodos prolongados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamientos - Section Premium */}
        <section id="tratamientos" className="py-16 bg-gradient-to-br from-[#60BEC3]/10 to-[#79A373]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tratamientos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60BEC3] to-[#79A373]">Profesionales</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cristina Muñoz, Podóloga Especialista ofrece tratamientos avanzados y personalizados
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12 bg-gradient-to-br from-[#60BEC3] to-[#79A373] text-white">
                  <h3 className="text-2xl font-bold mb-6">¿Por qué elegir nuestro tratamiento?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Diagnóstico Preciso</h4>
                        <p className="text-white/90 text-sm">Evaluación completa para identificar el tipo específico de hongo</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Tratamiento Personalizado</h4>
                        <p className="text-white/90 text-sm">Plan adaptado a tu condición y estilo de vida</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Seguimiento Continuo</h4>
                        <p className="text-white/90 text-sm">Monitoreo del progreso y ajustes según sea necesario</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Prevención de Recaídas</h4>
                        <p className="text-white/90 text-sm">Recomendaciones para evitar futuras infecciones</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Opciones de Tratamiento</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#60BEC3] transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">💊 Tratamiento Tópico</h4>
                      <p className="text-gray-600 text-sm">Medicamentos aplicados directamente sobre la uña</p>
                    </div>

                    <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#60BEC3] transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ Tratamiento Láser</h4>
                      <p className="text-gray-600 text-sm">Tecnología avanzada para casos resistentes</p>
                    </div>

                    <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#60BEC3] transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">💉 Tratamiento Sistémico</h4>
                      <p className="text-gray-600 text-sm">Medicación oral para infecciones extensas</p>
                    </div>

                    <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-[#60BEC3] transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">🔬 Tratamiento Combinado</h4>
                      <p className="text-gray-600 text-sm">Múltiples enfoques para resultados óptimos</p>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/593995832788?text=Hola, quiero más información sobre tratamientos de hongos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-gradient-to-r from-[#60BEC3] to-[#79A373] text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Solicitar Consulta Gratuita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Impactante */}
        <section className="py-20 bg-gradient-to-r from-[#60BEC3] to-[#79A373] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Da el Primer Paso hacia Pies Saludables
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No dejes que los hongos afecten tu calidad de vida. El tratamiento temprano es más efectivo y rápido.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/593995832788?text=Hola, necesito ayuda con hongos en las uñas" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <span>📱</span>
                Contactar por WhatsApp
              </a>
              <a 
                href="tel:+593995832788"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300"
              >
                <span>📞</span>
                Llamar Ahora
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Atención Inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">Primera Consulta Gratis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios / Trust Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo que Dicen Nuestros <span className="text-[#60BEC3]">Pacientes</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Después de años luchando con hongos, finalmente encontré una solución efectiva. Cristina Muñoz es increíble."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#60BEC3] to-[#79A373] rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">María González</div>
                    <div className="text-sm text-gray-500">Quito, Ecuador</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Tratamiento profesional y resultados visibles desde la primera sesión. Totalmente recomendado."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#60BEC3] to-[#79A373] rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Jorge Ramírez</div>
                    <div className="text-sm text-gray-500">Quito, Ecuador</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excelente atención y seguimiento. Mis pies están completamente sanos gracias al tratamiento."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#60BEC3] to-[#79A373] rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ana López</div>
                    <div className="text-sm text-gray-500">Quito, Ecuador</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas <span className="text-[#60BEC3]">Frecuentes</span>
              </h2>
              <p className="text-lg text-gray-600">
                Resolvemos tus dudas sobre el tratamiento de hongos
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-[#60BEC3]">❓</span>
                  ¿Cuánto tiempo dura el tratamiento?
                </h3>
                <p className="text-gray-600 pl-7">
                  El tratamiento típicamente dura entre 8 y 12 semanas, dependiendo de la severidad de la infección. 
                  Los resultados visibles comienzan a notarse desde las primeras semanas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-[#60BEC3]">❓</span>
                  ¿El tratamiento es doloroso?
                </h3>
                <p className="text-gray-600 pl-7">
                  No. Los tratamientos modernos son completamente indoloros. El láser puede causar una ligera sensación 
                  de calor, pero sin dolor. La mayoría de pacientes encuentran el proceso muy cómodo.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-[#60BEC3]">❓</span>
                  ¿Los hongos pueden volver después del tratamiento?
                </h3>
                <p className="text-gray-600 pl-7">
                  Con el tratamiento adecuado y siguiendo las recomendaciones de prevención, la tasa de recurrencia 
                  es muy baja. Te enseñaremos hábitos para mantener tus pies sanos a largo plazo.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-[#60BEC3]">❓</span>
                  ¿Puedo usar esmalte durante el tratamiento?
                </h3>
                <p className="text-gray-600 pl-7">
                  Generalmente se recomienda evitar el esmalte durante el tratamiento para permitir que los medicamentos 
                  penetren mejor. Sin embargo, existen esmaltes especiales que pueden usarse. Consultaremos tu caso específico.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-[#60BEC3]">❓</span>
                  ¿Necesito hacer algún análisis antes del tratamiento?
                </h3>
                <p className="text-gray-600 pl-7">
                  En la primera consulta realizaremos una evaluación completa. En algunos casos, puede ser necesario 
                  un cultivo para identificar el tipo específico de hongo y elegir el tratamiento más efectivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA con urgencia */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#60BEC3] to-[#79A373] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-semibold">Cupos Limitados Esta Semana</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Agenda Tu Consulta Hoy
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Obtén un diagnóstico profesional y comienza tu tratamiento cuanto antes
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="https://wa.me/593995832788?text=Hola, quiero agendar una consulta para tratamiento de hongos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    Agendar por WhatsApp
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    <span>Respuesta Inmediata</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    <span>Sin Compromiso</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    <span>Atención Personalizada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutClient>
  );
}