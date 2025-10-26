import LayoutClient from "@/components/LayoutClient";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import AboutDoctor from "@/components/AboutDoctor";
import SmartQuiz from "@/components/SmartQuiz";
import Testimonials from "@/components/Testimonials";
import LocationHub from "@/components/LocationHub";
import FAQAccordion from "@/components/FAQAccordion";
import faqs from "@/data/faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podólogo a Domicilio Quito Norte | Dra. Cristina Muñoz - Podoclinicec",
  description: "🏥 Podólogo especialista a domicilio en Quito Norte. ⭐ 13 reseñas Google 5 estrellas. Dra. Cristina Muñoz: uñeros, pie diabético, hongos. Desde $35. Agenda tu consulta.",
  keywords: "podólogo domicilio quito norte, uñeros quito, pie diabético, hongos uñas, podología a domicilio, dra cristina muñoz",
  openGraph: {
    title: "Podólogo a Domicilio Quito Norte | Dra. Cristina Muñoz",
    description: "Podólogo especialista a domicilio en Quito Norte. 13 reseñas Google 5 estrellas. Tratamiento de uñeros, pie diabético, hongos. Desde $35.",
    url: "https://podoclinicec.com",
    siteName: "Podoclinicec",
    type: "website",
  },
  alternates: {
    canonical: "https://podoclinicec.com"
  }
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PodoClinicec",
    "url": "https://podoclinicec.com",
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
    "name": "PodoClinic - Podólogo en Quito Norte | Dra. Cristina Muñoz",
    "alternateName": [
      "Podología Quito Norte",
      "Podólogo Quito",
      "Especialista en Uñeros Quito",
      "Pie Diabético Quito"
    ],
    "description": "Clínica podológica #1 en Quito Norte especializada en uñeros, pie diabético, profilaxis podal y verrugas plantares. Dra. Cristina Muñoz con +10 años experiencia. Atención domicilio y consultorio.",
    "url": "https://podoclinicec.com",
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
    "email": "info@podoclinicec.com",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.1807",
      "longitude": "-78.4678"
    },
    "hasMap": "https://maps.app.goo.gl/zrLzEJUUkHqDXS5K6",
    "areaServed": [
      {
        "@type": "City",
        "name": "Quito Norte, Ecuador"
      },
      {
        "@type": "City", 
        "name": "La Floresta, Quito"
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
        "@type": "State",
        "name": "Pichincha, Ecuador"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-0.1807",
        "longitude": "-78.4678"
      },
      "geoRadius": "20000"
    },
    "founder": {
      "@type": "Physician",
      "name": "Dra. Cristina Muñoz",
      "jobTitle": "Podóloga Certificada",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "PodoClinic"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Medical License",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Ministerio de Salud Pública Ecuador"
          }
        }
      ],
      "medicalSpecialty": [
        "Podiatry",
        "Diabetic Foot Care", 
        "Nail Disorders",
        "Sports Podiatry"
      ],
      "yearsExperience": "10+"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "312",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Podiatry",
      "Diabetic Foot Care",
      "Ingrown Nail Treatment", 
      "Plantar Wart Removal",
      "Foot Prophylaxis"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Tratamiento de Uñeros",
        "alternateName": "Uñas Encarnadas",
        "description": "Tratamiento sin dolor para uñeros con recuperación en 24-48 horas"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Cuidado Pie Diabético",
        "description": "Atención especializada para prevenir complicaciones en pacientes diabéticos"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Profilaxis Podal",
        "description": "Limpieza profunda, corte de uñas, eliminación de callosidades"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Tratamiento de Hongos",
        "alternateName": "Onicomicosis",
        "description": "Eliminación de hongos en uñas y pies con productos especializados"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Verrugas Plantares",
        "description": "Cauterización profesional para eliminar verrugas plantares"
      },
      {
        "@type": "MedicalService",
        "name": "Atención Domicilio",
        "description": "Servicio de podología a domicilio sin costo adicional en Quito Norte"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "USD",
    "smokingAllowed": false,
    "petsAllowed": false,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Podología",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consulta Inicial Gratuita"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Tratamiento de Uñeros"
          },
          "price": "15",
          "priceCurrency": "USD"
        }
      ]
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Contenido de la página */}
      <Hero />
      <AboutDoctor />
      <SmartQuiz />
      <Servicios />
      <Testimonials />
      <FAQAccordion faqs={faqs.slice(0, 8)} />
      <LocationHub />
    </LayoutClient>
  );
}