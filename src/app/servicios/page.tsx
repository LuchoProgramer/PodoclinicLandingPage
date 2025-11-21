import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { generateMetadata } from "@/lib/metadata-utils";
import { 
    Stethoscope, 
    Home, 
    Clock, 
    Shield, 
    Award,
    CheckCircle,
    ArrowRight,
    Star
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateMetadata('servicios');

const servicios = [
  {
    title: "Tratamiento de Uñeros",
    description: "Tratamiento profesional de uñas encarnadas sin dolor. Técnica especializada con recuperación en 24-48 horas.",
    icon: "🦶",
    features: ["Sin dolor", "Técnica especializada", "Recuperación rápida", "Prevención de recaídas"],
    link: "/servicios/uneros",
    price: "Servicios a partir de $20"
  },
  {
    title: "Cuidado Pie Diabético",
    description: "Atención especializada para pacientes diabéticos. Prevención de complicaciones y cuidado integral.",
    icon: "🩺",
    features: ["Prevención", "Control especializado", "Cuidado integral", "Seguimiento continuo"],
    link: "/servicios/pie-diabetico",
    price: "Servicios a partir de $20"
  },
  {
    title: "Tratamiento de Hongos",
    description: "Eliminación de hongos en uñas y pies con tratamiento antifúngico profesional y resultados visibles.",
    icon: "🧪",
    features: ["Tratamiento profesional", "Resultados visibles", "Productos especializados", "Sin recidiva"],
    link: "/servicios/hongos",
    price: "Servicios a partir de $20"
  },
  {
    title: "Eliminación de Verrugas",
    description: "Eliminación segura de verrugas plantares por cauterización. Procedimiento efectivo y definitivo.",
    icon: "⚡",
    features: ["Cauterización segura", "Procedimiento efectivo", "Sin recidiva", "Técnica avanzada"],
    link: "/servicios/verrugas",
    price: "Servicios a partir de $20"
  },
  {
    title: "Profilaxis Podal",
    description: "Limpieza profesional completa: corte de uñas, eliminación de callosidades y cuidado integral.",
    icon: "✨",
    features: ["Limpieza completa", "Corte profesional", "Eliminación callos", "Hidratación"],
    link: "/servicios/profilaxis",
    price: "Servicios a partir de $20"
  },
  {
    title: "Atención a Domicilio",
    description: "Todos nuestros servicios disponibles en la comodidad de tu hogar. Sin costo adicional por traslado.",
    icon: "🏠",
    features: ["En tu hogar", "Sin costo extra", "Misma calidad", "Horarios flexibles"],
    link: "/servicios/domicilio",
    price: "Servicios a partir de $35"
  }
];

const beneficios = [
  {
    icon: <Award className="w-8 h-8 text-[#60BEC3]" />,
    title: "Especialista Certificada",
    description: "Cristina Muñoz con 5 años de experiencia y certificaciones profesionales"
  },
  {
    icon: <Shield className="w-8 h-8 text-[#60BEC3]" />,
    title: "Protocolos de Bioseguridad",
    description: "Instrumental esterilizado y protocolos estrictos de seguridad e higiene"
  },
  {
    icon: <Clock className="w-8 h-8 text-[#60BEC3]" />,
    title: "Horarios Flexibles",
    description: "Atención de lunes a sábado con horarios que se adaptan a tus necesidades"
  },
  {
    icon: <Home className="w-8 h-8 text-[#60BEC3]" />,
    title: "Consultorio y Domicilio",
    description: "Elige la modalidad que prefieras: en nuestro consultorio o en tu hogar"
  }
];

export default function ServiciosPage() {
  const serviciosSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Podoclinicec - Servicios de Podología",
    "url": "https://podoclinicec.com/servicios",
    "description": "Servicios podológicos especializados en Quito Norte: uñeros, pie diabético, hongos, verrugas plantares, profilaxis podal.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Podología",
      "itemListElement": servicios.map((servicio, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalService",
          "name": servicio.title,
          "description": servicio.description
        },
        "price": servicio.price,
        "url": `https://podoclinicec.com${servicio.link}`
      }))
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Schema de servicios */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#60BEC3]/10 text-[#60BEC3] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4 inline mr-1" />
              Servicios Especializados
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Servicios de
              <span className="text-[#60BEC3] block mt-2">
                Podología Especializada
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              <strong>Atención integral para el cuidado de tus pies.</strong> Tratamientos profesionales con la mejor tecnología y técnicas actualizadas.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg text-gray-600">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-semibold">13 reseñas Google</span>
              <span>•</span>
              <span>+500 pacientes satisfechos</span>
            </div>
          </div>

          {/* Beneficios principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {beneficio.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{beneficio.title}</h3>
                <p className="text-gray-600 text-sm">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tratamientos podológicos profesionales con técnicas avanzadas y atención personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{servicio.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{servicio.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{servicio.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {servicio.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-[#60BEC3] font-bold text-lg">{servicio.price}</div>
                  <div className="text-sm text-gray-500">Consulta inicial gratuita</div>
                </div>

                <Link
                  href={servicio.link}
                  className="block w-full bg-[#60BEC3] text-white text-center py-3 rounded-xl font-semibold hover:bg-[#4A9DB8] transition-colors duration-300 group-hover:bg-[#4A9DB8]"
                >
                  <span className="flex items-center justify-center">
                    Ver más detalles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#60BEC3] to-[#79A373]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas Atención Podológica Especializada?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agenda tu consulta inicial gratuita y recibe la atención que mereces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20una%20consulta%20de%20podología"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Agendar por WhatsApp
            </a>
            <a
              href="tel:+593995832788"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#60BEC3] transition-all duration-300 flex items-center justify-center"
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