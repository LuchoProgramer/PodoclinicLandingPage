import { Metadata } from "next";
import { Breadcrumbs } from "@/components/InternalLinks";
import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Stethoscope, CheckCircle, Calendar, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Tratamiento de Hongos Quito Norte | Dra. Cristina Muñoz - Podoclinicec",
  description: "🏥 Tratamiento de hongos en uñas y pies en Quito Norte. ⭐ 13 reseñas Google 5 estrellas. Dra. Cristina Muñoz. Resultados efectivos desde $35.",
  keywords: "hongos uñas quito norte, tratamiento hongos pies, onicomicosis, podólogo hongos",
  openGraph: {
    title: "Tratamiento de Hongos Quito Norte | Dra. Cristina Muñoz",
    description: "Tratamiento especializado de hongos en uñas y pies en Quito Norte. 13 reseñas Google 5 estrellas. Resultados efectivos.",
    type: "website",
    locale: "es_EC"
  },
  alternates: {
    canonical: "https://podoclinicec.com/servicios/hongos"
  }
};

const hongosFAQs = [
  {
    id: "hon1",
    question: "¿Qué causa los hongos en las uñas?",
    answer: "Los hongos (onicomicosis) se desarrollan por humedad, calzado cerrado, mala higiene o contagio en lugares públicos como piscinas o duchas.",
    category: "causas"
  },
  {
    id: "hon2",
    question: "¿Cómo es el tratamiento profesional?",
    answer: "Incluye limpieza profunda, desinfección, corte y fresado de uñas, y aplicación de productos antifúngicos especializados.",
    category: "tratamiento"
  },
  {
    id: "hon3",
    question: "¿Cuánto tiempo tarda en curarse?",
    answer: "El tratamiento es progresivo. Se requieren varias sesiones y constancia en el uso de productos para eliminar el hongo por completo.",
    category: "tiempo"
  },
  {
    id: "hon4",
    question: "¿Puedo prevenir la reaparición?",
    answer: "Sí, con higiene adecuada, secado correcto de pies y uso de calzado ventilado. El podólogo te dará recomendaciones personalizadas.",
    category: "prevencion"
  }
];

function HongosHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4 inline mr-1" />
              Tratamiento Especializado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Tratamiento de Hongos
              <span className="text-[#60BEC3] block mt-2">Uñas y Pies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              <strong>Recupera la salud de tus uñas.</strong> Limpieza profunda, desinfección y productos antifúngicos profesionales.
            </p>
            <div className="bg-[#F0FDF4] border-l-4 border-[#60BEC3] rounded-xl p-4 mb-8 shadow">
              <p className="text-lg text-gray-800 font-semibold mb-2">
                ¿Uñas amarillas, gruesas o con mal olor?
              </p>
              <p className="text-gray-700">
                Agenda tu <strong>tratamiento para hongos</strong> y mejora la apariencia y salud de tus pies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Desinfección profunda",
                "Productos antifúngicos",
                "Profilaxis podal",
                "Prevención de recurrencias"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20tratamiento%20para%20hongos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#60BEC3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Tratamiento
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Stethoscope className="w-6 h-6 text-[#60BEC3] mr-2" />
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <div className="font-semibold text-gray-800">Diagnóstico profesional</div>
                    <div className="text-gray-600 text-sm">Identificación precisa del tipo de hongo</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <div className="font-semibold text-gray-800">Productos de alta calidad</div>
                    <div className="text-gray-600 text-sm">Antifúngicos profesionales y seguros</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <div className="font-semibold text-gray-800">Seguimiento personalizado</div>
                    <div className="text-gray-600 text-sm">Control y prevención de recurrencias</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-3">
                <Users className="w-5 h-5 text-[#60BEC3] mr-2" />
                <span className="font-semibold text-gray-800">Testimonio Real</span>
              </div>
              <p className="text-gray-700 italic text-sm mb-3">
                "Tenía hongos en las uñas desde hace años. Con el tratamiento y las recomendaciones, mis uñas mejoraron muchísimo."
              </p>
              <div className="text-xs text-gray-500">
                - Patricia S., 37 años
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HongosPage() {
  return (
    <>
      <Navbar />
      {/* Breadcrumbs para navegación */}
      <Breadcrumbs path="/servicios/hongos" />
      <main>
        <HongosHero />
        <AboutDoctor />
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Preguntas Frecuentes sobre <span className="text-[#60BEC3]">Hongos en Uñas y Pies</span>
            </h2>
            <FAQAccordion faqs={hongosFAQs} />
          </div>
        </div>
        <Testimonials />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
