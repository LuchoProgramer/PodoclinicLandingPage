import LayoutClient from "@/components/LayoutClient";
import { Stethoscope, MapPin, Clock, Star, CheckCircle, Phone, Calendar, Users, Award } from "lucide-react";
import { Metadata } from "next";

// Metadata optimizada para "podólogo en quito"
export const metadata: Metadata = {
  title: "Podólogo en Quito Norte | Dra. Cristina Muñoz - Especialista Certificada",
  description: "Podólogo en Quito Norte con 5 años experiencia. 13 reseñas Google 5 estrellas. Dra. Cristina Muñoz: uñeros, pie diabético, hongos. Atención a domicilio.",
  keywords: "podólogo quito norte, podólogos quito, doctor de pies quito norte, especialista pies, podología quito norte, dra cristina muñoz",
  alternates: {
    canonical: "https://podoclinicec.com/podologo-en-quito",
  },
  openGraph: {
    title: "Podólogo en Quito Norte | Dra. Cristina Muñoz - Especialista Certificada",
    description: "Podólogo certificado en Quito Norte: tratamiento de uñeros, pie diabético, hongos. 5 años de experiencia, 13 reseñas Google 5 estrellas.",
    url: "https://podoclinicec.com/podologo-en-quito",
    siteName: "Podoclinicec",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
        width: 1200,
        height: 630,
        alt: "Podólogo en Quito Norte - Dra. Cristina Muñoz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podólogo en Quito Norte | Dra. Cristina Muñoz",
    description: "Especialista en podología con 5 años experiencia en Quito Norte. 13 reseñas Google 5 estrellas. Tratamiento de uñeros, pie diabético y más.",
    images: ["https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"],
  },
};

// Schema markup específico para esta página
const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dra. Cristina Muñoz",
  "givenName": "Cristina",
  "familyName": "Muñoz",
  "honorificPrefix": "Dra.",
  "gender": "Female",
  "nationality": "Ecuadorian",
  "url": "https://podoclinicec.com/podologo-en-quito",
  "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
  "medicalSpecialty": [
    "Podiatry",
    "Diabetic Foot Care",
    "Nail Disorders Treatment",
    "Sports Podiatry"
  ],
  "yearsExperience": "8",
  "workLocation": {
    "@type": "MedicalClinic",
    "name": "Podoclinicec",
    "address": {
      "@type": "PostalAddress", 
      "addressLocality": "Quito Norte",
      "addressRegion": "Pichincha",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.1807",
      "longitude": "-78.4678"
    },
    "telephone": "+593995832788",
    "areaServed": "Quito Norte, 8km de cobertura"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Medical License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Ministerio de Salud Pública del Ecuador"
      }
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Bank Transfer"],
  "openingHours": "Mo-Fr 08:00-18:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "13"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Quién es la mejor podóloga en Quito Norte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Dra. Cristina Muñoz es una podóloga certificada con 5 años de experiencia en Quito Norte, especializada en tratamiento de uñeros, pie diabético y cuidado integral de los pies. Cuenta con 13 reseñas Google de 5 estrellas."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Cuánto cuesta una consulta con podólogo en Quito Norte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las consultas podológicas tienen precios accesibles desde $35. Ofrecemos información inmediata por WhatsApp para evaluar tu caso específico y coordinar la cita."
      }
    },
    {
      "@type": "Question",
      "name": "¿Atienden a domicilio en Quito Norte?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Sí, ofrecemos servicio de podología a domicilio en Quito Norte con cobertura de 8km de radio, especialmente para personas mayores, diabéticos o con movilidad reducida."
      }
    }
  ]
};

export default function PodologoEnQuitoPage() {
  return (
    <LayoutClient>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        
        {/* Hero Section Optimizada para SEO */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-600 mb-8">
              <a href="/" className="hover:text-[#60BEC3]">Inicio</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Podólogo en Quito</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Contenido Principal */}
              <div>
                <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  PODÓLOGO CERTIFICADO EN QUITO
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-[#60BEC3]">Podólogo en Quito Norte</span><br />
                  Dra. Cristina Muñoz
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  <strong>13 reseñas Google 5 estrellas</strong> - Especialista certificada con 5 años de experiencia. 
                  Tratamiento personalizado de <strong>uñeros, pie diabético, hongos</strong> a domicilio en Quito Norte.
                </p>

                {/* Beneficios clave */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "✓ 13 reseñas Google 5 estrellas",
                    "✓ 5 años de experiencia", 
                    "✓ Cobertura 8km Quito Norte",
                    "✓ Seguimiento personalizado"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Busco%20un%20podólogo%20en%20Quito%20Norte%20y%20quisiera%20agendar%20una%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta Quito Norte
                  </a>
                  
                  <a
                    href="tel:+593995832788"
                    className="border-2 border-[#60BEC3] text-[#60BEC3] hover:bg-[#60BEC3] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">Llamar Ahora</span>
                    <span className="sm:hidden">Llamar</span>
                  </a>
                </div>
              </div>

              {/* Imagen/Stats */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-[#60BEC3] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Stethoscope className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dra. Cristina Muñoz</h3>
                    <p className="text-gray-600">Podóloga Certificada</p>
                  </div>
                  
                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#60BEC3] mb-1">13</div>
                      <div className="text-sm text-gray-600">Reseñas 5★ Google</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#60BEC3] mb-1">8+</div>
                      <div className="text-sm text-gray-600">Años Experiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#60BEC3] mb-1">8km</div>
                      <div className="text-sm text-gray-600">Cobertura Norte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#60BEC3] mb-1">24h</div>
                      <div className="text-sm text-gray-600">Seguimiento</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: ¿Por qué elegir a la Dra. Cristina Muñoz? */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir a la <span className="text-[#60BEC3]">Dra. Cristina Muñoz</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La mejor opción en podología para Quito Norte y sectores aledaños
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Certificada y Experimentada",
                  description: "5 años tratando problemas podológicos en Quito Norte. 13 reseñas Google con 5 estrellas de pacientes satisfechos.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: Users,
                  title: "Seguimiento Personalizado",
                  description: "Atención integral con seguimiento WhatsApp 24/7. Especialista de confianza para familias en Quito Norte.",
                  color: "bg-green-50 text-green-600"
                },
                {
                  icon: MapPin,
                  title: "Cobertura 8km Quito Norte",
                  description: "Atención a domicilio en radio de 8km desde Quito Norte. Ideal para personas mayores, diabéticos o con movilidad reducida.",
                  color: "bg-purple-50 text-purple-600"
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sección: Especialidades */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Especialidades <span className="text-[#60BEC3]">Podológicas</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tratamientos especializados con tecnología de punta
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Tratamiento de Uñeros",
                  description: "Especialización en uñeros (servicio más rentable). Técnica sin dolor, recuperación rápida.",
                  price: "Desde $35",
                  urgent: true
                },
                {
                  title: "Cuidado Pie Diabético", 
                  description: "Atención especializada para prevenir complicaciones en pacientes diabéticos.",
                  price: "Información WhatsApp",
                  urgent: false
                },
                {
                  title: "Profilaxis Podal",
                  description: "Limpieza profunda, corte de uñas, eliminación de callosidades e hidratación.",
                  price: "Desde $35", 
                  urgent: false
                },
                {
                  title: "Tratamiento de Hongos",
                  description: "Eliminación de hongos en uñas y pies con productos antifúngicos especializados.",
                  price: "Desde $35",
                  urgent: false
                },
                {
                  title: "Verrugas Plantares",
                  description: "Cauterización profesional para eliminar verrugas plantares definitivamente.",
                  price: "Desde $35",
                  urgent: false
                },
                {
                  title: "Podología Infantil",
                  description: "Cuidado especializado para niños con técnicas suaves y ambiente amigable.",
                  price: "Desde $35",
                  urgent: false
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-[1.02]">
                  {service.urgent && (
                    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                      URGENTE
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#60BEC3] font-bold text-lg">{service.price}</span>
                    <a
                      href={`https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Me%20interesa%20información%20sobre%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#60BEC3] hover:text-[#4A9DB8] font-medium flex items-center"
                    >
                      Consultar
                      <CheckCircle className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-[#60BEC3]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para cuidar tus pies con la mejor podóloga de Quito Norte?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Solicita información por WhatsApp y descubre por qué tenemos 13 reseñas Google de 5 estrellas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Me%20interesa%20información%20sobre%20consulta%20podológica%20en%20Quito%20Norte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#60BEC3] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Información WhatsApp
              </a>
              
              <a
                href="tel:+593995832788"
                className="border-2 border-white text-white hover:bg-white hover:text-[#60BEC3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar: 099 583 2788
              </a>
            </div>
          </div>
        </section>

      </div>
    </LayoutClient>
  );
}