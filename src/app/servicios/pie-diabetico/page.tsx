import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/InternalLinks";
import { SEO_METADATA } from "@/data/seo-metadata";
import { 
    Heart,
    AlertTriangle,
    CheckCircle,
    Clock,
    Shield,
    Users,
    Phone,
    Calendar,
    Stethoscope
} from "lucide-react";

// Metadata específica para pie diabético
const pageMetadata = SEO_METADATA['servicios-pie-diabetico'] || {
  title: "Cuidado del Pie Diabético | Especialista en Quito - Podoclinicec",
  description: "Atención especializada para pie diabético en Quito Norte. Cristina Muñoz, experta en cuidados preventivos y tratamiento. Consulta a domicilio disponible.",
  keywords: "pie diabético quito, cuidado pie diabético, podólogo diabéticos, prevención pie diabético quito norte",
  canonical: "https://podoclinicec.com/servicios/pie-diabetico"
};

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: pageMetadata.keywords,
  alternates: {
    canonical: pageMetadata.canonical
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: pageMetadata.canonical,
    siteName: "Podoclinicec",
    type: "website"
  }
};

const pieDiabeticoInfo = {
  symptoms: [
    "Pérdida de sensibilidad en los pies",
    "Heridas que no cicatrizan",
    "Cambios en la temperatura del pie",
    "Deformidades en dedos o pies",
    "Piel seca y agrietada",
    "Infecciones frecuentes"
  ],
  riskFactors: [
    "Diabetes mal controlada",
    "Neuropatía diabética",
    "Problemas de circulación",
    "Historial de úlceras",
    "Deformidades del pie",
    "Calzado inadecuado"
  ],
  prevention: [
    "Control estricto de glucosa",
    "Inspección diaria de pies",
    "Higiene adecuada",
    "Calzado apropiado",
    "Corte correcto de uñas",
    "Revisiones podológicas regulares"
  ]
};

const pieDiabeticoFAQs = [
  {
    id: "pie-diabetico-1",
    question: "¿Qué es el pie diabético?",
    answer: "El pie diabético es una complicación de la diabetes que afecta los nervios y vasos sanguíneos de los pies, pudiendo causar úlceras, infecciones y en casos graves, amputaciones.",
    category: "general"
  },
  {
    id: "pie-diabetico-2",
    question: "¿Con qué frecuencia debe un diabético revisar sus pies?",
    answer: "Los diabéticos deben inspeccionar sus pies diariamente y acudir a revisión podológica cada 3-6 meses, o más frecuentemente si hay factores de riesgo elevados.",
    category: "prevencion"
  },
  {
    id: "pie-diabetico-3",
    question: "¿Qué hacer si encuentro una herida en mi pie siendo diabético?",
    answer: "Cualquier herida en el pie de un diabético requiere atención médica inmediata. Mantenga la herida limpia, seca y contacte a su podólogo o médico lo antes posible.",
    category: "urgencia"
  },
  {
    id: "pie-diabetico-4",
    question: "¿El cuidado del pie diabético se puede hacer a domicilio?",
    answer: "Sí, ofrecemos servicios especializados de cuidado del pie diabético a domicilio, incluyendo inspección, cuidados preventivos y seguimiento personalizado.",
    category: "servicio"
  }
];

function PieDiabeticoHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4 inline mr-1" />
              Cuidado Especializado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Cuidado del
              <span className="text-blue-600 block mt-2">
                Pie Diabético
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              <strong>Prevención y cuidado especializado</strong> para pacientes diabéticos. 
              Evita complicaciones con atención profesional a domicilio.
            </p>
            
            {/* Beneficios clave */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Evaluación integral",
                "Cuidados preventivos", 
                "Seguimiento personalizado",
                "Atención a domicilio"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/593995832788?text=¡Hola!%20Soy%20diabético%20y%20necesito%20evaluación%20especializada%20de%20mis%20pies"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Evaluación Especializada
              </a>
              <a
                href="tel:+593995832788"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergencia: Llamar
              </a>
            </div>
          </div>

          {/* Información de riesgo */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                Señales de Alerta
              </h3>
              <div className="space-y-3">
                {pieDiabeticoInfo.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {symptom}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-red-50 rounded-lg">
                <p className="text-sm text-red-800 font-medium">
                  ⚠️ Cualquier cambio en los pies requiere evaluación inmediata
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                Nuestro Enfoque
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Evaluación", desc: "Revisión completa de sensibilidad y circulación" },
                  { step: "2", title: "Plan", desc: "Programa personalizado de cuidados preventivos" },
                  { step: "3", title: "Seguimiento", desc: "Monitoreo regular y ajustes según necesidades" },
                  { step: "4", title: "Educación", desc: "Capacitación en autocuidado y prevención" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PieDiabeticoPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Cuidado del Pie Diabético",
    "alternateName": "Podología para Diabéticos",
    "url": "https://podoclinicec.com/servicios/pie-diabetico",
    "description": "Atención especializada para pie diabético en Quito Norte. Prevención, cuidados y seguimiento profesional para pacientes diabéticos.",
    "provider": {
      "@type": "Physician",
      "name": "Cristina Muñoz",
      "medicalSpecialty": ["Podiatry", "Diabetic Foot Care"]
    },
    "areaServed": {
      "@type": "City", 
      "name": "Quito Norte, Ecuador"
    },
    "availableService": [
      "Evaluación integral del pie diabético",
      "Cuidados preventivos especializados",
      "Seguimiento y monitoreo",
      "Educación en autocuidado"
    ]
  };

  return (
    <>
      <Navbar />
      
      {/* Schema estructurado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs path="/servicios/pie-diabetico" />
      
      <PieDiabeticoHero />

      {/* Sección de prevención */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Prevención: La Mejor Medicina
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El cuidado preventivo adecuado puede evitar hasta el 85% de las amputaciones relacionadas con diabetes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Factores de riesgo */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                Factores de Riesgo
              </h3>
              <div className="space-y-4">
                {pieDiabeticoInfo.riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medidas preventivas */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                Prevención Diaria
              </h3>
              <div className="space-y-4">
                {pieDiabeticoInfo.prevention.map((prevention, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{prevention}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuándo consultar */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Stethoscope className="w-6 h-6 text-blue-600 mr-2" />
                Consulta Inmediata Si...
              </h3>
              <div className="space-y-4">
                {[
                  "Aparece cualquier herida",
                  "Cambio de color en los pies", 
                  "Pérdida de sensibilidad",
                  "Dolor inusual",
                  "Inflamación o enrojecimiento",
                  "Cambios en la temperatura"
                ].map((sign, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutDoctor />
      <Testimonials />
      <FAQAccordion faqs={pieDiabeticoFAQs} />

      {/* CTA especializado */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu Salud No Puede Esperar
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Si eres diabético, el cuidado preventivo de tus pies es esencial. 
            Agenda tu evaluación especializada hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/593995832788?text=¡Hola!%20Soy%20diabético%20y%20quiero%20agendar%20evaluación%20de%20mis%20pies"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Evaluación Especializada
            </a>
            <a
              href="tel:+593995832788"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Llamada de Emergencia
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}