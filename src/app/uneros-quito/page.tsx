import LayoutClient from "@/components/LayoutClient";
import { AlertTriangle, Clock, Shield, Phone, Calendar, CheckCircle, Stethoscope, MapPin, Users } from "lucide-react";
import { Metadata } from "next";

// Metadata optimizada para "uñeros"
export const metadata: Metadata = {
  title: "Uñeros en Quito Norte | Tratamiento Sin Dolor - Dra. Cristina Muñoz",
  description: "🏥 Tratamiento de uñeros en Quito Norte sin dolor. ⭐ 13 reseñas Google 5 estrellas. Dra. Cristina Muñoz especialista en uñas encarnadas. Desde $35. Atención domicilio con cita previa.",
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
    description: "Especialista en uñeros. Técnica sin dolor, recuperación en 24h. Atención domicilio con cita previa en Quito.",
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

// Schema markup para servicio a domicilio
const homeCareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalService",
  "name": "Tratamiento de Uñeros a Domicilio",
  "description": "Servicio de podología a domicilio con cita previa, especialmente para personas con movilidad reducida",
  "provider": {
    "@type": "Person",
    "name": "Dra. Cristina Muñoz"
  },
  "serviceType": "Podiatric Care",
  "areaServed": {
    "@type": "City", 
    "name": "Quito"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Home Visit",
    "availableLanguage": "Spanish"
  }
};

export default function UnerosQuitoPage() {
  return (
    <LayoutClient>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeCareServiceSchema) }} />
      
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
                <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  ESPECIALISTA CERTIFICADA
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-red-600">Uñeros</span> en Quito<br />
                  <span className="text-[#60BEC3]">Sin Dolor</span>
                </h1>
                
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>¿Dolor intenso por uñero?</strong> Especialista certificada elimina uñas encarnadas <strong>sin dolor</strong>. 
                  Recuperación en <strong>24-48 horas</strong>. Atención a domicilio con cita previa.
                </p>

                {/* Urgencia Indicators */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-[#60BEC3]">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#60BEC3] mr-2" />
                    ¿Tienes estos síntomas? Agenda tu consulta
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "✓ Dolor intenso al caminar",
                      "✓ Hinchazón en el dedo", 
                      "✓ Pus o secreción",
                      "✓ Enrojecimiento severo",
                      "✓ Molestias constantes",
                      "✓ Dificultad para usar zapatos"
                    ].map((symptom, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <span className="text-sm">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20un%20uñero%20doloroso%20y%20me%20gustaría%20agendar%20una%20cita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Cita - WhatsApp
                  </a>
                  
                  <a
                    href="tel:+593995832788"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Consulta Telefónica
                  </a>
                </div>

                <div className="mt-4 text-center text-gray-600">
                  <Clock className="w-4 h-4 inline mr-2" />
                  <strong>Citas disponibles • Atención domicilio con cita previa</strong>
                </div>
              </div>

              {/* Panel de Servicio a Domicilio */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-[#60BEC3]">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-[#60BEC3] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Servicio a Domicilio</h3>
                    <p className="text-gray-600">Con cita previa • Movilidad reducida</p>
                  </div>
                  
                  {/* Proceso */}
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                      <span className="font-medium text-gray-900">Agendas tu cita</span>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                      <span className="font-medium text-gray-900">Confirmamos horario</span>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                      <span className="font-medium text-gray-900">Llegamos a tu hogar</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-3xl font-bold text-[#60BEC3] mb-1">$35</div>
                    <div className="text-sm text-gray-600">Tratamiento a domicilio</div>
                  </div>
                  
                  {/* Ideal para */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2 text-center">Ideal para:</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Adultos mayores</div>
                      <div>• Personas con movilidad reducida</div>
                      <div>• Pacientes con dificultades de transporte</div>
                      <div>• Comodidad de tu hogar</div>
                    </div>
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
                  "✅ Atención domicilio con cita previa",
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

        {/* CTA Final */}
        <section className="py-16 bg-[#60BEC3]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="mb-6">
              <Calendar className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Dolor de Uñero? ¡Agenda tu Cita!
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Tratamiento profesional sin dolor en consultorio o a domicilio<br />
                <strong>Eliminamos tu uñero en 30 minutos - Sin dolor - Recuperación rápida</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20un%20uñero%20doloroso%20y%20me%20gustaría%20agendar%20una%20cita%20en%20Quito"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#60BEC3] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cita - WhatsApp
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
              <strong>Consultorio en La Floresta • Atención domicilio con cita previa</strong>
            </div>
          </div>
        </section>

      </div>
    </LayoutClient>
  );
}