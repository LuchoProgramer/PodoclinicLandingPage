import LayoutClient from "@/components/LayoutClient";
import { Clock, Shield, Phone, Calendar, CheckCircle, Stethoscope, MapPin, Target, Zap, Activity, Trophy, Heart, AlertTriangle, Timer, Footprints, FlameKindling, Droplets, TrendingUp, Moon } from "lucide-react";
import { Metadata } from "next";

// Metadata optimizada para podología deportiva
export const metadata: Metadata = {
  title: "Podología Deportiva para Runners en Quito | Cristina Muñoz",
  description: "🏃‍♀️ Especialista en podología deportiva para runners en Quito. Prevención y tratamiento de lesiones, fascitis plantar, uñeros. Atención a domicilio. ⭐ 13 reseñas 5 estrellas.",
  keywords: "podología deportiva quito, runners quito, fascitis plantar, lesiones deportivas pies, podólogo runners, tratamiento deportistas, podología atletas",
  alternates: {
    canonical: "https://podoclinicec.com/podologia-runners",
  },
  openGraph: {
    title: "Podología Deportiva para Runners en Quito | Cristina Muñoz",
    description: "Especialista en podología deportiva para runners. Prevención y tratamiento de lesiones. Atención a domicilio en Quito.",
    url: "https://podoclinicec.com/podologia-runners",
    siteName: "Podoclinicec",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
        width: 1200,
        height: 630,
        alt: "Podología Deportiva para Runners en Quito - Cristina Muñoz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podología Deportiva para Runners | Quito",
    description: "Especialista en podología deportiva. Prevención y tratamiento de lesiones para runners. Atención domicilio en Quito.",
    images: ["https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"],
  },
};

// Schema markup para servicio deportivo
const sportsPodiarySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalService",
  "name": "Podología Deportiva para Runners",
  "description": "Servicios especializados de podología deportiva para runners y atletas, incluyendo prevención y tratamiento de lesiones",
  "provider": {
    "@type": "Person",
    "name": "Cristina Muñoz",
    "specialty": "Sports Podiatry"
  },
  "serviceType": "Sports Medicine",
  "areaServed": {
    "@type": "City", 
    "name": "Quito"
  },
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "Athletes and Runners"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Home Visit",
    "availableLanguage": "Spanish"
  }
};

export default function PodologiaRunnersPage() {
  return (
    <LayoutClient>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsPodiarySchema) }} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-600 mb-8">
              <a href="/" className="hover:text-[#60BEC3]">Inicio</a>
              <span className="mx-2">/</span>
              <a href="/servicios" className="hover:text-[#60BEC3]">Servicios</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Podología Deportiva</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Contenido Principal */}
              <div>
                <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Trophy className="w-4 h-4 mr-2" />
                  ESPECIALISTA DEPORTIVA
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-[#60BEC3]">Podología</span><br />
                  para <span className="text-orange-600">Runners</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>¿Corres y tienes molestias en los pies?</strong> Especialista en podología deportiva 
                  te ayuda a <strong>prevenir lesiones</strong> y <strong>mejorar tu rendimiento</strong>. 
                  Atención especializada para runners en Quito.
                </p>

                {/* Problemas Comunes */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-orange-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Activity className="w-5 h-5 text-orange-500 mr-2" />
                    ¿Tienes alguno de estos problemas?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "🦶 Fascitis plantar",
                      "💥 Dolor en el talón", 
                      "🏃‍♀️ Molestias al correr",
                      "🩹 Ampollas frecuentes",
                      "💪 Calambres en pies",
                      "⚡ Fatiga muscular"
                    ].map((problem, idx) => {
                      const icons = [Footprints, AlertTriangle, Activity, Heart, Zap, Timer];
                      const IconComponent = icons[idx];
                      const texts = [
                        "Fascitis plantar",
                        "Dolor en el talón",
                        "Molestias al correr", 
                        "Ampollas frecuentes",
                        "Calambres en pies",
                        "Fatiga muscular"
                      ];
                      return (
                        <div key={idx} className="flex items-center text-gray-700">
                          <IconComponent className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{texts[idx]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/593995832788?text=¡Hola!%20Soy%20runner%20y%20me%20gustaría%20una%20consulta%20de%20podología%20deportiva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Consulta Deportiva - WhatsApp
                  </a>
                  
                  <a
                    href="tel:+593995832788"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </a>
                </div>

                <div className="mt-4 text-center text-gray-600">
                  <Clock className="w-4 h-4 inline mr-2" />
                  <strong>Evaluación personalizada • A domicilio o consultorio</strong>
                </div>
              </div>

              {/* Panel de Servicios Deportivos */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Servicios Deportivos</h3>
                    <p className="text-gray-600">Especialización en runners y atletas</p>
                  </div>
                  
                  {/* Servicios */}
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</div>
                      <span className="font-medium text-gray-900">Evaluación biomecánica</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</div>
                      <span className="font-medium text-gray-900">Prevención de lesiones</span>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</div>
                      <span className="font-medium text-gray-900">Tratamiento especializado</span>
                    </div>
                    <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">✓</div>
                      <span className="font-medium text-gray-900">Seguimiento deportivo</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-lg font-bold text-[#60BEC3] mb-1">Servicios a partir de $35</div>
                    <div className="text-sm text-gray-600">Consulta deportiva</div>
                  </div>
                  
                  {/* Ideal para */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2 text-center">Ideal para:</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Runners de todos los niveles</div>
                      <div>• Atletas amateur y profesionales</div>
                      <div>• Deportistas con lesiones recurrentes</div>
                      <div>• Prevención antes de competencias</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lesiones Comunes en Runners */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lesiones <span className="text-orange-600">Más Comunes</span> en Runners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce las lesiones más frecuentes y cómo prevenirlas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Fascitis Plantar",
                  description: "Inflamación de la fascia plantar que causa dolor en el talón, especialmente por las mañanas",
                  icon: Footprints,
                  severity: "Alto",
                  prevention: "Estiramientos, calzado adecuado, fortalecimiento"
                },
                {
                  title: "Tendinitis Aquiles",
                  description: "Inflamación del tendón de Aquiles por sobrecarga o técnica incorrecta",
                  icon: Zap,
                  severity: "Medio",
                  prevention: "Calentamiento, progresión gradual, técnica correcta"
                },
                {
                  title: "Metatarsalgia",
                  description: "Dolor en la parte anterior del pie por impacto repetitivo",
                  icon: AlertTriangle,
                  severity: "Medio",
                  prevention: "Plantillas, calzado apropiado, técnica de pisada"
                },
                {
                  title: "Uñas Encarnadas",
                  description: "Problema frecuente en runners por presión del calzado y sudoración",
                  icon: Shield,
                  severity: "Bajo",
                  prevention: "Corte correcto, calzado holgado, higiene"
                },
                {
                  title: "Ampollas",
                  description: "Formación de ampollas por fricción y humedad durante carreras largas",
                  icon: Heart,
                  severity: "Bajo",
                  prevention: "Calcetines técnicos, calzado ajustado, lubricación"
                },
                {
                  title: "Neuroma de Morton",
                  description: "Engrosamiento del nervio entre los dedos que causa dolor punzante",
                  icon: Target,
                  severity: "Alto",
                  prevention: "Calzado ancho, plantillas, evitar tacones"
                }
              ].map((injury, idx) => {
                const IconComponent = injury.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{injury.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{injury.description}</p>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Severidad:</span>
                        <span className={`text-sm font-bold ${
                          injury.severity === 'Alto' ? 'text-red-600' : 
                          injury.severity === 'Medio' ? 'text-orange-600' : 'text-green-600'
                        }`}>{injury.severity}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Prevención:</span>
                        <p className="text-sm text-gray-600 mt-1">{injury.prevention}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nuestro Enfoque Deportivo */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nuestro <span className="text-[#60BEC3]">Enfoque Deportivo</span>
              </h2>
              <p className="text-xl text-gray-600">
                Metodología especializada para atletas y runners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Evaluación",
                  description: "Análisis completo de la pisada, biomecánica y historial deportivo",
                  icon: Stethoscope,
                  color: "bg-blue-50 text-blue-600 border-blue-200"
                },
                {
                  step: "2", 
                  title: "Diagnóstico",
                  description: "Identificación de factores de riesgo y problemas específicos del runner",
                  icon: Target,
                  color: "bg-green-50 text-green-600 border-green-200"
                },
                {
                  step: "3",
                  title: "Tratamiento",
                  description: "Plan personalizado adaptado a tu disciplina y nivel deportivo",
                  icon: CheckCircle,
                  color: "bg-purple-50 text-purple-600 border-purple-200"
                },
                {
                  step: "4",
                  title: "Seguimiento",
                  description: "Monitoreo continuo y ajustes según tu progreso deportivo",
                  icon: Activity,
                  color: "bg-orange-50 text-orange-600 border-orange-200"
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${item.color} hover:shadow-xl transition-all`}>
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-[#60BEC3] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                        {item.step}
                      </div>
                      <IconComponent className="w-8 h-8 text-[#60BEC3] mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Ventajas para Runners */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Por qué elegir nuestra podología deportiva?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "✅ Especialización en deportistas",
                  "✅ Comprensión de biomecánica deportiva",
                  "✅ Planes de prevención personalizados",
                  "✅ Tratamientos que no interrumpen entrenamiento", 
                  "✅ Seguimiento durante temporada competitiva",
                  "✅ Atención a domicilio para deportistas"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consejos para Runners */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-[#60BEC3]">Consejos</span> para Runners
              </h2>
              <p className="text-xl text-gray-600">
                Tips profesionales para cuidar tus pies mientras corres
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Calzado Deportivo",
                  description: "Elige zapatillas específicas para tu tipo de pisada y reemplázalas cada 500-800 km.",
                  icon: Footprints
                },
                {
                  title: "Calentamiento",
                  description: "Dedica 10-15 minutos a calentar y estirar antes de cada sesión de running.",
                  icon: FlameKindling
                },
                {
                  title: "Hidratación",
                  description: "Mantén los pies secos con calcetines técnicos que absorban la humedad.",
                  icon: Droplets
                },
                {
                  title: "Progresión Gradual",
                  description: "Aumenta distancia e intensidad gradualmente. Regla del 10% semanal.",
                  icon: TrendingUp
                },
                {
                  title: "Superficie Variada",
                  description: "Alterna superficies de entrenamiento: asfalto, tierra, pista para reducir impacto.",
                  icon: Activity
                },
                {
                  title: "Descanso Activo",
                  description: "Incluye días de descanso y recuperación en tu plan de entrenamiento.",
                  icon: Moon
                }
              ].map((tip, idx) => {
                const IconComponent = tip.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-[#60BEC3] rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{tip.title}</h3>
                    <p className="text-gray-600 text-center">{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-[#60BEC3]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Listo para Correr sin Dolor?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Especialista en podología deportiva para runners en Quito<br />
                <strong>Evalúa, previene y trata • Mejora tu rendimiento • Corre sin límites</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593995832788?text=¡Hola!%20Soy%20runner%20y%20me%20gustaría%20una%20consulta%20de%20podología%20deportiva%20en%20Quito"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#60BEC3] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Consulta Deportiva - WhatsApp
              </a>
              
              <a
                href="tel:+593995832788"
                className="border-2 border-white text-white hover:bg-white hover:text-[#60BEC3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                LLAMAR: 099 583 2788
              </a>
            </div>

            <div className="mt-6 text-blue-100">
              <MapPin className="w-4 h-4 inline mr-2" />
              <strong>Consultorio en La Florida Quito• Atención a domicilio para deportistas</strong>
            </div>
          </div>
        </section>

      </div>
    </LayoutClient>
  );
}