import LayoutClient from "@/components/LayoutClient";
import Hero from "@/components/Hero";
import Cuestionarios from "@/components/Cuestionarios";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import InformacionContacto from "@/components/InformacionContacto";

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
    "sameAs": [
      "https://www.facebook.com/podoclinic.cm",
      "https://www.instagram.com/podoclinic.ec/",
      "https://wa.me/593995832788"
    ]
  };

  return (
    <LayoutClient>
      {/* Datos estructurados para SEO avanzado */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      {/* Contenido de la página */}
      <Hero />
      <section className="py-12 bg-gray-100">
        <Cuestionarios />
      </section>
      <Servicios />
      <Contacto />
      <InformacionContacto />
    </LayoutClient>
  );
}