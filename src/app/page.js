import LayoutClient from "@/components/LayoutClient";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import AboutDoctor from "@/components/AboutDoctor";
import SmartQuiz from "@/components/SmartQuiz";
import Testimonials from "@/components/Testimonials";
import LocationHub from "@/components/LocationHub";
import FAQAccordion from "@/components/FAQAccordion";
import LiveChat from "@/components/LiveChat";
import faqs from "@/data/faqs";

export default function HomePage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "PodoClinicec - Podología en Quito",
    "description": "Clínica podológica especializada en el tratamiento de pie diabético, uñeros, onicomicrosis y verrugas plantares en Quito. Atención personalizada para adultos mayores y deportistas.",
    "url": "https://podoclinicec.com",
    "logo": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
    "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manuel Jordan y Av La Florida, Quito",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha",
      "postalCode": "170511",
      "addressCountry": "EC"
    },
    "telephone": "+593995832788",
    "openingHours": [
      "Mo-Fr 09:00-12:00",
      "Mo-Fr 14:00-18:00",
      "Sa 09:00-14:00"
    ],
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.143093",
      "longitude": "-78.495641"
    },
    "hasMap": "https://maps.app.goo.gl/zrLzEJUUkHqDXS5K6",
    "areaServed": ["Quito", "Pichincha", "Ecuador"],
    "founder": {
      "@type": "Person",
      "name": "Dra. Cristina Muñoz"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10"
    },
    "medicalSpecialty": "Podiatry",
    "acceptsNewPatients": true,
    "sameAs": [
      "https://www.facebook.com/podoclinic.cm",
      "https://www.instagram.com/podoclinic.ec/",
      "https://wa.me/593995832788"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Atienden pie diabético?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, somos especialistas en el tratamiento de pie diabético en Quito."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito cita previa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es recomendable agendar una cita para una mejor atención."
        }
      },
      {
        "@type": "Question",
        "name": "¿Atienden a niños y adultos mayores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, brindamos atención a pacientes de todas las edades."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde están ubicados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estamos en Manuel Jordan y Av La Florida, Quito."
        }
      }
    ]
  };

  return (
    <LayoutClient>
      {/* Datos estructurados para SEO avanzado */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Contenido de la página */}
      <Hero />
      <AboutDoctor />
      <SmartQuiz />
      <Servicios />
      <Testimonials />
      <FAQAccordion faqs={faqs.slice(0, 8)} />
      <LocationHub />
      <LiveChat />
    </LayoutClient>
  );
}