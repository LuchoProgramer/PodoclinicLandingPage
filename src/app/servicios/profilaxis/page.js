import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sparkles, CheckCircle, Calendar, Users } from "lucide-react";

export const metadata = {
  title: "Profilaxis Podal en Quito - PodoClinic | Limpieza y Salud de tus Pies",
  description: "Profilaxis podal en Quito: limpieza profunda, prevención de infecciones y bienestar para tus pies. Atención personalizada y tecnología de punta.",
  keywords: "profilaxis podal Quito, limpieza pies, corte de uñas, podólogo Quito, salud podal",
  openGraph: {
    title: "Profilaxis Podal en Quito - PodoClinic",
    description: "Limpieza profunda y cuidado profesional de tus pies. Agenda tu cita con nuestros especialistas en Quito.",
    type: "website",
    locale: "es_EC"
  }
};

const profilaxisFAQs = [
  {
    question: "¿Qué es la profilaxis podal?",
    answer: "Es una limpieza profunda y profesional de los pies, que incluye corte anatómico de uñas, limpieza de canales ungueales, eliminación de callosidades, hidratación y masoterapia."
  },
  {
    question: "¿Cada cuánto tiempo debo hacerme una profilaxis podal?",
    answer: "Se recomienda cada 1-2 meses, dependiendo de la salud de tus pies y recomendaciones del podólogo."
  },
  {
    question: "¿Duele el procedimiento?",
    answer: "No, es un procedimiento indoloro y relajante, realizado por profesionales capacitados."
  },
  {
    question: "¿Qué beneficios tiene?",
    answer: "Previene infecciones, mejora la salud y apariencia de los pies, y ayuda a detectar problemas a tiempo."
  }
];

function ProfilaxisHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Limpieza Profunda
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Profilaxis Podal
              <span className="text-[#60BEC3] block mt-2">Cuidado Profesional</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              <strong>Salud y belleza para tus pies.</strong> Limpieza profunda, corte anatómico y masoterapia en un solo tratamiento.
            </p>
            <div className="bg-[#F0FDF4] border-l-4 border-[#60BEC3] rounded-xl p-4 mb-8 shadow">
              <p className="text-lg text-gray-800 font-semibold mb-2">
                ¿Pies cansados o con callosidades?
              </p>
              <p className="text-gray-700">
                Agenda tu <strong>profilaxis podal</strong> y disfruta de pies sanos, suaves y libres de molestias.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Limpieza profunda",
                "Corte anatómico de uñas",
                "Eliminación de callosidades",
                "Masoterapia relajante"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20una%20profilaxis%20podal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#60BEC3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Profilaxis
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 text-[#60BEC3] mr-2" />
                ¿Por qué elegirnos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <div className="font-semibold text-gray-800">Profesionales certificados</div>
                    <div className="text-gray-600 text-sm">Atención por podólogos expertos</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <div className="font-semibold text-gray-800">Esterilización rigurosa</div>
                    <div className="text-gray-600 text-sm">Instrumental 100% esterilizado</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <div className="font-semibold text-gray-800">Ambiente relajante</div>
                    <div className="text-gray-600 text-sm">Experiencia cómoda y segura</div>
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
                "Nunca había sentido mis pies tan suaves y saludables. El trato fue excelente y el ambiente muy relajante."
              </p>
              <div className="text-xs text-gray-500">
                - Carlos R., 42 años
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProfilaxisPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProfilaxisHero />
        <AboutDoctor />
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Preguntas Frecuentes sobre <span className="text-[#60BEC3]">Profilaxis Podal</span>
            </h2>
            <FAQAccordion faqs={profilaxisFAQs} />
          </div>
        </div>
        <Testimonials />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
