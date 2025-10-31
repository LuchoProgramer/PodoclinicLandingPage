import LayoutClient from "@/components/LayoutClient";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import AboutDoctor from "@/components/AboutDoctor";
import SmartQuiz from "@/components/SmartQuiz";
import Testimonials from "@/components/Testimonials";
import LocationHub from "@/components/LocationHub";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinks from "@/components/InternalLinks";
import faqs from "@/data/faqs";
import { Metadata } from "next";
import { Stethoscope, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Doctor de Pies en Quito | Podólogo Especialista - Dra. Cristina Muñoz",
  description: "Doctor de pies en Quito. Dra. Cristina Muñoz, podóloga certificada, especialista en uñeros, hongos, pie diabético y dolor de pies. Atención en consultorio y domicilio en Quito Norte.",
  keywords: "doctor de pies quito, podólogo quito, especialista pies quito, tratamiento uñeros, hongos, pie diabético, atención domicilio quito norte",
  openGraph: {
    title: "Doctor de Pies en Quito | Podólogo Especialista",
    description: "Atención profesional para tus pies en Quito. Uñeros, hongos, pie diabético, dolor y prevención. Dra. Cristina Muñoz, podóloga certificada.",
    url: "https://podoclinicec.com/doctor-de-pies-quito",
    siteName: "Podoclinicec",
    type: "website",
  },
  alternates: {
    canonical: "https://podoclinicec.com/doctor-de-pies-quito"
  }
};

export default function DoctorDePiesQuitoLanding() {
  // Datos estructurados adaptados
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PodoClinicec",
    "url": "https://podoclinicec.com/doctor-de-pies-quito",
    "logo": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+593995832788",
      "contactType": "customer service",
      "areaServed": "EC",
      "availableLanguage": ["Spanish", "English"]
    }],
    "sameAs": [
      "https://www.facebook.com/podoclinic.cm",
      "https://www.instagram.com/podoclinic.ec/",
      "https://wa.me/593995832788"
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Doctor de Pies en Quito | Dra. Cristina Muñoz",
    "alternateName": [
      "Podólogo Quito",
      "Especialista en Pies Quito",
      "Doctor de Pies Quito Norte"
    ],
    "description": "Clínica podológica en Quito especializada en dolor de pies, uñeros, pie diabético, profilaxis podal y verrugas plantares. Dra. Cristina Muñoz con +10 años experiencia. Atención domicilio y consultorio.",
    "url": "https://podoclinicec.com/doctor-de-pies-quito",
    "logo": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
    "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manuel Jordan y Av La Florida",
      "addressLocality": "Quito Norte",
      "addressRegion": "Pichincha",
      "postalCode": "170135",
      "addressCountry": "EC"
    },
    "telephone": "+593995832788",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "¿Atienden dolor de pies?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, somos especialistas en el tratamiento de dolor de pies y molestias en Quito."}},
      {"@type": "Question", "name": "¿Necesito cita previa?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, es recomendable agendar una cita para una mejor atención."}},
      {"@type": "Question", "name": "¿Atienden a niños y adultos mayores?", "acceptedAnswer": {"@type": "Answer", "text": "Sí, brindamos atención a pacientes de todas las edades."}},
      {"@type": "Question", "name": "¿Dónde están ubicados?", "acceptedAnswer": {"@type": "Answer", "text": "Estamos en Manuel Jordan y Av La Florida, Quito."}}
    ]
  };

  return (
    <LayoutClient>
      {/* Datos estructurados para SEO avanzado */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Contenido de la página */}
      <Hero />
      <AboutDoctor />
      {/* Enlaces internos estratégicos después del Hero */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios Especializados en Quito Norte
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre todos nuestros tratamientos podológicos especializados y las zonas que cubrimos
            </p>
          </div>
          {/* Grid principal de enlaces internos */}
          <InternalLinks 
            variant="grid" 
            category="mixed" 
            limit={8} 
            showDescription={true} 
          />
          {/* Enlaces horizontales por categoría */}
          <div className="mt-16 space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Stethoscope className="w-6 h-6 text-[#60BEC3] mr-2" />
                <span>Servicios Principales</span>
              </h3>
              <InternalLinks 
                variant="horizontal" 
                category="servicios" 
                limit={5} 
                showDescription={false} 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                📍 <span className="ml-2">Zonas de Atención</span>
              </h3>
              <InternalLinks 
                variant="horizontal" 
                category="zonas" 
                limit={4} 
                showDescription={false} 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 text-[#60BEC3] mr-2" />
                <span>Tips y Consejos</span>
              </h3>
              <InternalLinks 
                variant="horizontal" 
                category="tips" 
                limit={4} 
                showDescription={false} 
              />
            </div>
          </div>
        </div>
      </section>
      <SmartQuiz />
      <Servicios />
      <Testimonials />
      <FAQAccordion faqs={faqs.slice(0, 8)} />
      <LocationHub />
    </LayoutClient>
  );
}