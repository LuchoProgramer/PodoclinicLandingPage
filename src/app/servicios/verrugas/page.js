import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, CheckCircle, Calendar, Users } from "lucide-react";

export const metadata = {
  title: "Cauterización de Verrugas Plantares en Quito - PodoClinic",
  description: "Eliminación definitiva de verrugas plantares en Quito. Técnicas avanzadas, mínima molestia y resultados garantizados. Consulta a especialistas en podología.",
  keywords: "verrugas plantares Quito, cauterización verrugas, podólogo Quito, eliminación verrugas pies",
  openGraph: {
    title: "Cauterización de Verrugas en Quito - PodoClinic",
    description: "Tratamiento profesional para eliminar verrugas plantares. Resultados efectivos y seguros en Quito.",
    type: "website",
    locale: "es_EC"
  }
};

const verrugasFAQs = [
  {
    question: "¿Qué son las verrugas plantares?",
    answer: "Son lesiones causadas por el virus del papiloma humano (VPH) que aparecen en la planta del pie y pueden ser dolorosas al caminar."
  },
  {
    question: "¿Cómo se eliminan las verrugas?",
    answer: "Utilizamos ácidos específicos y técnicas de cauterización para eliminar la verruga de forma segura y efectiva, evitando cicatrices."
  },
  {
    question: "¿El tratamiento es doloroso?",
    answer: "Puede haber una leve molestia durante el procedimiento, pero se utiliza anestesia local si es necesario."
  },
  {
    question: "¿Cuántas sesiones se requieren?",
    answer: "Depende del tamaño y profundidad de la verruga, pero la mayoría de casos se resuelven en 1 a 3 sesiones."
  }
];

function VerrugasHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 inline mr-1" />
              Eliminación Segura
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Cauterización de Verrugas
              <span className="text-[#60BEC3] block mt-2">Plantares</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              <strong>Resultados efectivos y rápidos.</strong> Tratamiento profesional con ácidos específicos y técnicas avanzadas.
            </p>
            <div className="bg-[#F0FDF4] border-l-4 border-[#60BEC3] rounded-xl p-4 mb-8 shadow">
              <p className="text-lg text-gray-800 font-semibold mb-2">
                ¿Dolor al caminar por verrugas?
              </p>
              <p className="text-gray-700">
                Agenda tu <strong>cauterización de verrugas</strong> y recupera la comodidad al pisar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Eliminación efectiva",
                "Recuperación rápida",
                "Sin cicatrices",
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
                href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20cauterización%20de%20verrugas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#60BEC3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cauterización
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-[#60BEC3] mr-2" />
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <div className="font-semibold text-gray-800">Técnicas avanzadas</div>
                    <div className="text-gray-600 text-sm">Uso de ácidos y cauterización profesional</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <div className="font-semibold text-gray-800">Seguimiento personalizado</div>
                    <div className="text-gray-600 text-sm">Control y prevención de recurrencias</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <div className="font-semibold text-gray-800">Ambiente seguro</div>
                    <div className="text-gray-600 text-sm">Esterilización y protocolos estrictos</div>
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
                "Me eliminaron una verruga plantar que me molestaba hace meses. El procedimiento fue rápido y sin dolor. ¡Muy recomendado!"
              </p>
              <div className="text-xs text-gray-500">
                - Andrea P., 29 años
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VerrugasPage() {
  return (
    <>
      <Navbar />
      <main>
        <VerrugasHero />
        <AboutDoctor />
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Preguntas Frecuentes sobre <span className="text-[#60BEC3]">Verrugas Plantares</span>
            </h2>
            <FAQAccordion faqs={verrugasFAQs} />
          </div>
        </div>
        <Testimonials />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
