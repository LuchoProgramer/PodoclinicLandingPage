import LayoutClient from "@/components/LayoutClient";
import { AlertTriangle, Clock, Shield, Phone, Calendar, CheckCircle, Stethoscope, MapPin, Users } from "lucide-react";
import { Metadata } from "next";

// Metadata optimizada para "uñeros"
export const metadata: Metadata = {
  title: "Uñeros en Quito Norte | Tratamiento Sin Dolor - Dra. Cristina Muñoz",
  description: "🏥 Tratamiento de uñeros en Quito Norte sin dolor. ⭐ 13 reseñas Google 5 estrellas. Dra. Cristina Muñoz especialista en uñas encarnadas. Desde $35. Atención urgente.",
  keywords: "uñeros quito norte, uñas encarnadas quito, tratamiento uñeros, quitar uñeros, dolor uñeros, podólogo uñeros, uñas infectadas",
  alternates: {
    canonical: "https://podoclinicec.com/uneros-quito",
  },
  openGraph: {
    title: "Uñeros en Quito Norte | Tratamiento Sin Dolor - Dra. Cristina Muñoz",
    description: "Especialista en tratamiento de uñeros sin dolor en Quito Norte. 13 reseñas Google 5 estrellas. Técnica avanzada, recuperación rápida.",
    url: "https://podoclinicec.com/uneros-quito",
    siteName: "Podoclinicec",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
        width: 1200,
        height: 630,
        alt: "Tratamiento de Uñeros en Quito - Dra. Cristina Muñoz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uñeros en Quito | Tratamiento Sin Dolor",
    description: "Especialista en uñeros. Técnica sin dolor, recuperación en 24h. Atención urgente en Quito.",
    images: ["https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"],
  },
};

// Schema markup específico para tratamiento médico
const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Tratamiento de Uñeros (Uñas Encarnadas)",
  "alternateName": "Onicocriptosis Treatment",
  "description": "Tratamiento especializado para uñeros o uñas encarnadas sin dolor, con técnica avanzada y recuperación rápida en 24-48 horas.",
  "category": "Podiatric Surgery",
  "preparation": "Limpieza del área afectada y anestesia local si es necesario",
  "followup": "Control a las 24-48 horas, cuidados post-tratamiento",
  "howPerformed": "Técnica conservadora sin dolor para liberar la uña encarnada y prevenir recidivas",
  "status": "Recommended",
  "contraindication": "Infección severa no controlada",
  "expectedDuration": "PT30M",
  "procedureType": "Outpatient",
  "bodyLocation": {
    "@type": "AnatomicalStructure",
    "name": "Toe nail"
  },
  "performer": {
    "@type": "Physician",
    "name": "Dra. Cristina Muñoz",
    "specialty": "Podiatry"
  },
  "location": {
    "@type": "MedicalClinic",
    "name": "PodoClinic",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Quito",
      "addressCountry": "EC"
    }
  }
};

const urgentCareSchema = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "name": "Atención Urgente Uñeros Quito",
  "description": "Servicio de emergencia 24/7 para tratamiento urgente de uñeros infectados o con dolor severo",
  "telephone": "+593995832788",
  "availableLanguage": "Spanish",
  "serviceArea": {
    "@type": "City",
    "name": "Quito"
  },
  "provider": {
    "@type": "Person",
    "name": "Dra. Cristina Muñoz"
  }
};

export default function UnerosQuitoPage() {
  return (
    <LayoutClient>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(urgentCareSchema) }} />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        
        {/* Hero Section de Urgencia */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-600 mb-8">
              <a href="/" className="hover:text-[#60BEC3]">Inicio</a>
              <span className="mx-2">/</span>
              <a href="/servicios" className="hover:text-[#60BEC3]">Servicios</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Tratamiento de Uñeros</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Contenido Principal */}
              <div>
                <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  ATENCIÓN URGENTE 24/7
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-red-600">Uñeros</span> en Quito<br />
                  <span className="text-[#60BEC3]">Sin Dolor</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>¿Dolor intenso por uñero?</strong> Especialista certificada elimina uñas encarnadas <strong>sin dolor</strong>. 
                  Recuperación en <strong>24-48 horas</strong>. Atención urgente domicilio.
                </p>

                {/* Urgencia Indicators */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    ¿Tienes estos síntomas? ¡Actúa YA!
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "🔴 Dolor intenso al caminar",
                      "🔴 Hinchazón en el dedo", 
                      "🔴 Pus o secreción",
                      "🔴 Enrojecimiento severo",
                      "🔴 Fiebre por infección",
                      "🔴 Imposibilidad de usar zapatos"
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <span className="text-sm">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs Urgentes */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/593995832788?text=¡URGENTE!%20Tengo%20un%20uñero%20con%20mucho%20dolor%20y%20necesito%20atención%20inmediata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse"
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    URGENTE - WhatsApp
                  </a>
                  
                  <a
                    href="tel:+593995832788"
                    className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </a>
                </div>

                <div className="mt-4 text-center text-gray-600">
                  <Clock className="w-4 h-4 inline mr-2" />
                  <strong>Atención en menos de 2 horas</strong>
                </div>
              </div>

              {/* Panel de Emergencia */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-red-500">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <AlertTriangle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Atención Urgente</h3>
                    <p className="text-gray-600">Especialista disponible 24/7</p>
                  </div>
                  
                  {/* Proceso Rápido */}
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-red-50 rounded-lg">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                      <span className="font-medium text-gray-900">Llamas por WhatsApp</span>
                    </div>
                    <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                      <span className="font-medium text-gray-900">Llegamos en 1-2 horas</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                      <span className="font-medium text-gray-900">Eliminas el dolor YA</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-3xl font-bold text-[#60BEC3] mb-1">$15</div>
                    <div className="text-sm text-gray-600">Tratamiento completo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué son los Uñeros? */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Qué son los <span className="text-red-600">Uñeros</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todo lo que necesitas saber sobre las uñas encarnadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Los uñeros son uñas que crecen hacia adentro</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Causas Principales</h4>
                      <p className="text-gray-600">Corte incorrecto de uñas, zapatos apretados, traumatismos, predisposición genética</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm">!</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Síntomas</h4>
                      <p className="text-gray-600">Dolor intenso, hinchazón, enrojecimiento, pus, dificultad para caminar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Solución</h4>
                      <p className="text-gray-600">Tratamiento profesional sin dolor, técnica conservadora, recuperación rápida</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Grados de Severidad</h4>
                <div className="space-y-4">
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                    <h5 className="font-bold text-yellow-800 mb-1">Grado 1 - Leve</h5>
                    <p className="text-yellow-700 text-sm">Dolor leve, leve enrojecimiento, sin infección</p>
                  </div>
                  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
                    <h5 className="font-bold text-orange-800 mb-1">Grado 2 - Moderado</h5>
                    <p className="text-orange-700 text-sm">Dolor moderado, hinchazón, inicio de infección</p>
                  </div>
                  <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                    <h5 className="font-bold text-red-800 mb-1">Grado 3 - Severo</h5>
                    <p className="text-red-700 text-sm">Dolor intenso, pus, infección avanzada, granuloma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Tratamiento */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nuestro <span className="text-[#60BEC3]">Tratamiento Sin Dolor</span>
              </h2>
              <p className="text-xl text-gray-600">
                Técnica avanzada que elimina el uñero definitivamente
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Evaluación",
                  description: "Examen completo del uñero, grado de infección y técnica a aplicar",
                  icon: Stethoscope,
                  color: "bg-blue-50 text-blue-600 border-blue-200"
                },
                {
                  step: "2", 
                  title: "Anestesia Local",
                  description: "Aplicación de anestesia local para garantizar proceso sin dolor",
                  icon: Shield,
                  color: "bg-green-50 text-green-600 border-green-200"
                },
                {
                  step: "3",
                  title: "Liberación",
                  description: "Técnica conservadora para liberar la uña encarnada sin dañar tejidos",
                  icon: CheckCircle,
                  color: "bg-purple-50 text-purple-600 border-purple-200"
                },
                {
                  step: "4",
                  title: "Cuidados",
                  description: "Instrucciones de cuidado y seguimiento para prevenir recidivas",
                  icon: Clock,
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

            {/* Ventajas */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Por qué elegir nuestro tratamiento?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "✅ Sin dolor durante el procedimiento",
                  "✅ Recuperación en 24-48 horas",
                  "✅ Técnica conservadora, no quirúrgica",
                  "✅ Prevención de recidivas", 
                  "✅ Atención domicilio disponible",
                  "✅ +10 años de experiencia"
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

        {/* Prevención */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Cómo <span className="text-[#60BEC3]">Prevenir</span> los Uñeros?
              </h2>
              <p className="text-xl text-gray-600">
                Consejos profesionales para evitar uñas encarnadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Corte Correcto",
                  description: "Corta las uñas de forma recta, no redondeada. Evita cortar demasiado profundo en las esquinas.",
                  icon: "✂️"
                },
                {
                  title: "Calzado Adecuado",
                  description: "Usa zapatos que no compriman los dedos. Evita tacones altos y puntiagudos por tiempo prolongado.",
                  icon: "👟"
                },
                {
                  title: "Higiene Diaria",
                  description: "Mantén los pies limpios y secos. Cambia calcetines diariamente y usa materiales transpirables.",
                  icon: "🧼"
                },
                {
                  title: "Evita Traumatismos",
                  description: "Protege los pies de golpes y traumatismos que pueden dañar la uña y favorecer el encarnamiento.",
                  icon: "🛡️"
                },
                {
                  title: "Control Regular",
                  description: "Revisa tus pies regularmente y consulta al podólogo ante los primeros síntomas.",
                  icon: "👀"
                },
                {
                  title: "Técnica Profesional",
                  description: "Si tienes tendencia a uñeros, acude al podólogo para corte profesional cada 6-8 semanas.",
                  icon: "🏥"
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{tip.title}</h3>
                  <p className="text-gray-600 text-center">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Urgente Final */}
        <section className="py-16 bg-red-500">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Dolor de Uñero? ¡NO ESPERES MÁS!
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Cada hora que pases con dolor es sufrimiento innecesario<br />
                <strong>Eliminamos tu uñero en 30 minutos - Sin dolor - Recuperación inmediata</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593995832788?text=¡URGENTE!%20Tengo%20un%20uñero%20muy%20doloroso%20y%20necesito%20atención%20inmediata%20en%20Quito"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center animate-pulse"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                ATENCIÓN URGENTE - WhatsApp
              </a>
              
              <a
                href="tel:+593995832788"
                className="border-2 border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                LLAMAR: 099 583 2788
              </a>
            </div>

            <div className="mt-6 text-red-100">
              <Clock className="w-4 h-4 inline mr-2" />
              <strong>Disponible 24 horas - Atención domicilio en toda la ciudad</strong>
            </div>
          </div>
        </section>

      </div>
    </LayoutClient>
  );
}