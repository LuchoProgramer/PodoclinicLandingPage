// Datos estructurados JSON-LD para SEO de la página de profilaxis podal
const profilaxisServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Profilaxis Podal en PodoclinicEC",
  "serviceType": "Profilaxis Podal",
  "provider": {
    "@type": "MedicalClinic",
    "name": "PodoclinicEC",
    "url": "https://podoclinicec.com/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "M. Jordán, y Av . La florida 170511",
      "addressLocality": "Quito",
      "addressRegion": "Pichincha",
      "addressCountry": "EC"
    },
    "medicalSpecialty": "Podología",
    "image": "https://podoclinicec.com/public/podoclinic-schema.jsonld"
  },
  "areaServed": "Quito Norte",
  "description": "Profilaxis podal profesional: limpieza profunda, corte anatómico de uñas, eliminación de callosidades y masoterapia. Atención por Cristina Muñoz, Podóloga Especialista.",
  "priceRange": "$35+",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Podológicos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Profilaxis Podal",
          "description": "Limpieza profunda, corte anatómico de uñas, eliminación de callosidades, masoterapia."
        },
        "price": "35",
        "priceCurrency": "USD"
      }
    ]
  },
  "providerMobility": "static"
};

export default profilaxisServiceSchema;
