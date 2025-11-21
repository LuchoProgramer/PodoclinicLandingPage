import LayoutClient from "@/components/LayoutClient";
import { Target, MapPin, Clock, Users, CheckCircle, Phone, Calendar, Stethoscope, Award } from "lucide-react";

// Metadata optimizada para "podología quito norte"
export const metadata = {
  title: "Podología Quito Norte | Cristina Muñoz - Especialista Zona Norte",
  description: "Podología en Quito Norte: La Florida, Iñaquito, Rumipamba. Cristina Muñoz especialista en uñeros, pie diabético. Consulta a domicilio.",
  keywords: "podología quito norte, podólogo quito norte, podólogos zona norte quito, la florida, iñaquito, rumipamba, gonzález suárez",
  alternates: {
    canonical: "https://podoclinicec.com/podologia-quito-norte",
  },
  openGraph: {
    title: "Podología Quito Norte | Cristina Muñoz - Especialista Zona Norte",
    description: "Podología especializada en Quito Norte: La Florida, Iñaquito, Rumipamba. Atención domicilio y consultorio. 5 años experiencia.",
    url: "https://podoclinicec.com/podologia-quito-norte",
    siteName: "PodoClinicec",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
        width: 1200,
        height: 630,
        alt: "Podología Quito Norte - Cristina Muñoz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podología Quito Norte | Cristina Muñoz",
    description: "Especialista en podología para Quito Norte: La Florida, Iñaquito, Rumipamba. Atención domicilio.",
    images: ["https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"],
  },
};

// Schema markup para ubicación específica
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PodiatryOffice",
  "name": "PodoClinic Quito Norte",
  "alternateName": "Podología Quito Norte - Cristina Muñoz",
  "description": "Clínica de podología especializada en Quito Norte. Atención en La Florida, Iñaquito, Rumipamba y sectores aledaños.",
  "url": "https://podoclinicec.com/podologia-quito-norte",
  "telephone": "+593995832788",
  "email": "podoclinic.cm@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manuel Jordan y Av La Florida",
    "addressLocality": "Quito Norte",
    "addressRegion": "Pichincha",
    "postalCode": "170135", 
    "addressCountry": "EC"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-0.1807",
    "longitude": "-78.4678"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "La Florida, Quito"
    },
    {
      "@type": "City", 
      "name": "Iñaquito, Quito"
    },
    {
      "@type": "City",
      "name": "Rumipamba, Quito"
    },
    {
      "@type": "City",
      "name": "González Suárez, Quito"
    },
    {
      "@type": "City",
      "name": "Quito Norte"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates", 
      "latitude": "-0.1807",
      "longitude": "-78.4678"
    },
    "geoRadius": "15000"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-14:00"
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247",
    "bestRating": "5"
  },
  "founder": {
    "@type": "Person",
    "name": "Cristina Muñoz",
    "jobTitle": "Podóloga Certificada"
  }
};

export default function PodologiaQuitoNortePage() {
  return (
    <LayoutClient>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        
        {/* Hero Section Geo-optimizada */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-600 mb-8">
              <a href="/" className="hover:text-[#60BEC3]">Inicio</a>
              <span className="mx-2">/</span>
              <a href="/servicios" className="hover:text-[#60BEC3]">Servicios</a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Podología Quito Norte</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Contenido Principal */}
              <div>
                <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  ESPECIALISTA ZONA NORTE QUITO
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-[#60BEC3]">Podología</span><br />
                  Quito Norte
                </h1>
                
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  <strong>Especialista certificada</strong> atendiendo <strong>La Florida, Iñaquito, Rumipamba, González Suárez</strong> y toda la zona norte de Quito.
                </p>

                {/* Sectores específicos */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 text-[#60BEC3] mr-2" />
                    Sectores que Atendemos en Quito Norte:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "✓ La Florida",
                      "✓ Iñaquito", 
                      "✓ Rumipamba",
                      "✓ González Suárez",
                      "✓ Jipijapa",
                      "✓ Bellavista",
                      "✓ Mariscal Sucre",
                      "✓ La Carolina"
                    ].map((sector, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="font-medium text-sm">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/593995832788?text=¡Hola%20Cristina!%20Vivo%20en%20Quito%20Norte%20y%20necesito%20atención%20podológica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar en Zona Norte
                  </a>
                  
                  <a
                    href="tel:+593995832788"
                    className="border-2 border-[#60BEC3] text-[#60BEC3] hover:bg-[#60BEC3] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </a>
                </div>
              </div>

              {/* Mapa de Cobertura */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <MapPin className="w-16 h-16 text-[#60BEC3] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cobertura Quito Norte</h3>
                    <p className="text-gray-600">Atención domicilio y consultorio</p>
                  </div>
                  
                  {/* Tiempos de llegada */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">La Florida</span>
                      <span className="text-[#60BEC3] font-bold">15 min</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-900">Iñaquito</span>
                      <span className="text-[#60BEC3] font-bold">10 min</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-900">Rumipamba</span>
                      <span className="text-[#60BEC3] font-bold">12 min</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="font-medium text-gray-900">González Suárez</span>
                      <span className="text-[#60BEC3] font-bold">8 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas de Atención en Quito Norte */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir <span className="text-[#60BEC3]">Podología en Quito Norte</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Especialistas locales que conocen las necesidades de tu sector
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Atención Rápida",
                  description: "Llegamos a tu domicilio en Quito Norte en máximo 20 minutos. Servicio express para urgencias podológicas.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: MapPin,
                  title: "Conocemos tu Zona",
                  description: "5 años atendiendo familias en La Florida, Iñaquito, Rumipamba. Conocemos cada rincón de Quito Norte.",
                  color: "bg-green-50 text-green-600"
                },
                {
                  icon: Users,
                  title: "Clientes Locales",
                  description: "Más de 2000 pacientes satisfechos en Quito Norte. Referencias verificables en tu mismo sector.",
                  color: "bg-purple-50 text-purple-600"
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
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

        {/* Servicios más Solicitados en Quito Norte */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Servicios más <span className="text-[#60BEC3]">Solicitados</span> en Quito Norte
              </h2>
              <p className="text-xl text-gray-600">
                Tratamientos especializados para las necesidades de tu zona
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Uñeros Urgentes",
                  description: "El problema #1 en Quito Norte. Técnica sin dolor, recuperación en 24h.",
                  price: "Servicios a partir de $20",
                  popular: true,
                  stats: "40% de consultas"
                },
                {
                  title: "Profilaxis Podal", 
                  description: "Servicio premium muy solicitado en La Florida.",
                  price: "Servicios a partir de $20",
                  popular: false,
                  stats: "25% de consultas"
                },
                {
                  title: "Pie Diabético",
                  description: "Cuidado especializado para diabéticos en González Suárez y Rumipamba.",
                  price: "Consulta GRATIS",
                  popular: false,
                  stats: "20% de consultas"
                },
                {
                  title: "Hongos en Uñas",
                  description: "Problema frecuente por clima húmedo de Quito Norte.",
                  price: "Servicios a partir de $20",
                  popular: false,
                  stats: "15% de consultas"
                },
                {
                  title: "Atención Domicilio",
                  description: "Muy popular entre adultos mayores de Quito Norte.",
                  price: "Servicios a partir de $35",
                  popular: true,
                  stats: "70% prefiere"
                },
                {
                  title: "Podología Deportiva",
                  description: "Para runners del Parque La Carolina y deportistas locales.",
                  price: "Servicios a partir de $20",
                  popular: false,
                  stats: "10% de consultas"
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-[1.02] relative">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      MÁS POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-sm text-[#60BEC3] font-medium mb-3">{service.stats}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#60BEC3] font-bold text-lg">{service.price}</span>
                    <a
                      href={`https://wa.me/593995832788?text=¡Hola%20Cristina!%20Vivo%20en%20Quito%20Norte%20y%20necesito%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#60BEC3] hover:text-[#4A9DB8] font-medium flex items-center"
                    >
                      Solicitar
                      <CheckCircle className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios de Quito Norte */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros <span className="text-[#60BEC3]">pacientes de Quito Norte</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  location: "La Florida",
                  text: "Cristina llegó a mi casa en La Florida en 15 minutos. Solucionó mi uñero sin dolor y con mucha profesionalidad.",
                  rating: 5
                },
                {
                  name: "Carlos Ruiz",
                  location: "Iñaquito", 
                  text: "Excelente atención domicilio en Iñaquito. Mi papá diabético recibe el mejor cuidado podológico sin salir de casa.",
                  rating: 5
                },
                {
                  name: "Ana Vásquez",
                  location: "Rumipamba",
                  text: "Llevaba meses con hongos en las uñas. En Rumipamba no encontraba especialista hasta que conocí a Cristina.",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-[#60BEC3] text-sm font-medium">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Geo-específico */}
        <section className="py-16 bg-[#60BEC3]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Vives en Quito Norte? ¡Agenda tu consulta HOY!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              La Florida • Iñaquito • Rumipamba • González Suárez<br />
              <strong>Atención domicilio sin costo adicional</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593995832788?text=¡Hola%20Cristina!%20Vivo%20en%20Quito%20Norte%20y%20quiero%20agendar%20mi%20consulta%20podológica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#60BEC3] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar en Quito Norte
              </a>
              
              <a
                href="tel:+593995832788"
                className="border-2 border-white text-white hover:bg-white hover:text-[#60BEC3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                099 583 2788
              </a>
            </div>
          </div>
        </section>

      </div>
    </LayoutClient>
  );
}