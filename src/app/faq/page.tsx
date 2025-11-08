
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import faqs from "@/data/faqs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getPageMetadata } from "@/data/seo-metadata";

const pageMetadata = getPageMetadata('faq');

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  keywords: pageMetadata.keywords,
  alternates: {
    canonical: pageMetadata.canonical
  },
  openGraph: {
    title: pageMetadata.ogTitle || pageMetadata.title,
    description: pageMetadata.ogDescription || pageMetadata.description,
    url: pageMetadata.canonical,
    siteName: "Podoclinicec",
    type: "website",
  }
};

export default function FAQPage() {
  // Schema FAQ completo con todas las preguntas reales
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Navbar />
      
      {/* Schema FAQ completo */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      
      <div className="container mx-auto py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Preguntas <span className="text-[#60BEC3]">Frecuentes</span>
            </h1>
            <p className="text-xl text-gray-600">
              Resuelve todas tus dudas sobre nuestros servicios de podología
            </p>
          </div>
          
          <FAQAccordion faqs={faqs} />
          
          {/* CTA después de FAQs */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#60BEC3] to-[#79A373] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contáctanos directamente y te ayudaremos con cualquier duda
            </p>
            <a
              href="https://wa.me/593995832788?text=Hola,%20tengo%20una%20pregunta%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}
