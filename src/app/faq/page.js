import FAQAccordion from "@/components/FAQAccordion";

export default function FAQPage() {
  // Puedes agregar más preguntas en el componente FAQAccordion.js
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
    <div className="container mx-auto py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQAccordion />
    </div>
  );
}
