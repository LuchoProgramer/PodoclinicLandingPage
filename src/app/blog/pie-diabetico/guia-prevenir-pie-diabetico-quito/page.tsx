import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { CTAButton } from "@/components/BlogButtons";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Guía Paso a Paso para Prevenir el Pie Diabético en Quito | Consejos de la Dra. Cristina Muñoz",
  description: "Prevención de pie diabético en Quito: consejos, señales de alerta y atención podológica a domicilio por la Dra. Cristina Muñoz.",
  keywords: "pie diabético Quito, prevención pie diabético, podología a domicilio Quito, cuidado de pies diabéticos, podólogo Quito norte",
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Pie Diabético",
  "associatedAnatomy": {
    "@type": "AnatomicalStructure",
    "name": "Pie"
  },
  "description": "Cuidado y prevención del pie diabético a domicilio en Quito norte con Podoclinicec.",
  "possibleTreatment": {
    "@type": "MedicalTherapy",
    "name": "Consulta Podológica a Domicilio",
    "provider": {
      "@type": "MedicalClinic",
      "name": "Podoclinicec",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Manuel Jordan y Av. La Florida",
        "addressLocality": "Quito",
        "addressCountry": "EC"
      },
      "telephone": "+593995832788"
    },
    "priceRange": "$15 primera consulta"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo prevenir el pie diabético en casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Revisa tus pies diario, usa calzado cómodo y mantén la piel hidratada. Para un cuidado experto, agenda con Podoclinicec por $15."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una consulta para pie diabético en Quito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Podoclinicec, la primera consulta es solo $15, con evaluación y tratamiento. Escribe al +593995832788."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Claro! Usamos equipos esterilizados y seguimos protocolos estrictos en La Florida y Quito norte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Quiénes necesitan un podólogo para pie diabético?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cualquier persona con diabetes, especialmente si notas heridas, rojez o pérdida de sensibilidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren todo Quito norte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, llegamos a La Florida, Carcelén, Cumbayá y más. Pregunta por tu zona: +593995832788."
      }
    }
  ]
};

export default function GuiaPrevenirPieDiabeticoQuitoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/pie-diabetico" className="hover:text-[#60BEC3]">Pie Diabético</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Guía Prevenir Pie Diabético Quito</span>
          </nav>
        </div>
      </div>

      {/* Header del Post */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          {/* Botón volver */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#60BEC3] hover:text-[#4A9DB8] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>

          {/* Categoría */}
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            PIE DIABÉTICO
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Guía Completa para Prevenir el Pie Diabético en Quito: <span className="text-[#60BEC3]">¡Cuida tus Pies con Podoclinicec!</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ¿Sabías que el pie diabético es más común de lo que crees en Quito? ¡Te cuento una experiencia que puede cambiarte la vida! Con un 7.8% de personas con diabetes en nuestra ciudad, cuidar tus pies es clave para evitar complicaciones como úlceras o infecciones. En Podoclinicec, la Dra. Cristina Muñoz lleva el cuidado profesional a tu casa en Quito norte, ¡y por solo $15! ¿Quieres aprender a prevenir el pie diabético y caminar sin preocupaciones? Sigue leyendo, ¡esto es para ti! 😎
          </p>

          {/* Meta información */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> Dra. Cristina Muñoz
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 08/10/2025
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" /> Pie Diabético
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué es el Pie Diabético y Por Qué Preocuparte?</h2>
          <p>Te cuento: el pie diabético surge cuando la diabetes afecta la circulación y los nervios de tus pies, causando heridas que no sanan o infecciones si no se cuidan. En Quito, con el ritmo de vida en La Florida o Carcelén, muchas personas no le dan importancia hasta que duele. ¿Sabías que el 15% de los diabéticos enfrentan problemas en los pies alguna vez? Pero tranquilo, prevenirlo es más fácil de lo que parece, ¡y no necesitas salir de casa!</p>
          <h2>Causas Principales</h2>
          <ul>
            <li><strong>Mala circulación:</strong> La diabetes reduce el flujo de sangre, haciendo que las heridas tarden en sanar.</li>
            <li><strong>Daño nervioso:</strong> Pierdes sensibilidad, así que no notas cortes o rozaduras.</li>
            <li><strong>Calzado inadecuado:</strong> Zapatos apretados o caminatas largas en Quito pueden causar roces.</li>
            <li><strong>Falta de cuidado:</strong> No revisar tus pies a diario puede dejar pasar pequeños problemas.</li>
          </ul>
          <p>¿Te suena? Si tienes diabetes o conoces a alguien que la tiene, este blog es tu guía.</p>
          <h2>Cómo Prevenir el Pie Diabético: Tips Prácticos</h2>
          <ul>
            <li><strong>Revisa tus pies diario:</strong> Busca cortes, ampollas o rojez. Usa un espejo si es difícil ver.</li>
            <li><strong>Lava e hidrata:</strong> Lava con agua tibia y jabón neutro, y usa crema hidratante (evita entre los dedos).</li>
            <li><strong>Elige calzado cómodo:</strong> Zapatos con espacio para los dedos, ideales para caminar en La Carolina.</li>
            <li><strong>Calcetines de algodón:</strong> Mantén tus pies secos y sin presión.</li>
            <li><strong>No cortes callos:</strong> Déjaselo a un podólogo para evitar infecciones.</li>
          </ul>
          <p>¿Y si necesitas ayuda? Ahí entra Podoclinicec con un servicio que te va a encantar.</p>
          <h2>Podología a Domicilio con Podoclinicec: Tu Solución en Quito Norte</h2>
          <p>Imagina esto: estás en tu casa en La Florida, y la Dra. Cristina Muñoz llega con su equipo esterilizado para cuidar tus pies. Por solo $15, tu primera consulta incluye:</p>
          <ul>
            <li>Evaluación completa para detectar riesgos de pie diabético.</li>
            <li>Tratamiento preventivo (corte de uñas, cuidado de callos).</li>
            <li>Consejos personalizados para tu día a día.</li>
            <li>Seguimiento por WhatsApp para cualquier duda.</li>
          </ul>
          <p>No necesitas pelear con el tráfico de Quito norte. Cubrimos La Florida, Carcelén, Cumbayá y más, ¡llegamos donde estés! En 1-2 sesiones, tus pies estarán protegidos, listos para caminar sin miedo.</p>
          <h2>¿Por Qué Elegir Podoclinicec?</h2>
          <ul>
            <li><strong>A domicilio:</strong> Cuidamos tus pies en tu casa, ideal para diabéticos con movilidad limitada.</li>
            <li><strong>Expertise:</strong> La Dra. Muñoz ofrece tratamientos especializados para prevención de pie diabético, uñas encarnadas y podología deportiva.</li>
            <li><strong>Precio accesible:</strong> $15 por la primera consulta, con evaluación gratis.</li>
            <li><strong>Confianza:</strong> Equipos esterilizados y protocolos de bioseguridad al 100%.</li>
          </ul>
          <p>Hemos ayudado a pacientes diabéticos a evitar complicaciones y a runners de Quito 15K a mantener sus pies en forma. ¿Listo para unirte?</p>
          <h2>Preguntas Frecuentes sobre el Pie Diabético</h2>
          <ul>
            <li><strong>¿Cómo prevenir el pie diabético en casa?</strong> Revisa tus pies diario, usa calzado cómodo y mantén la piel hidratada. Para un cuidado experto, agenda con Podoclinicec por $15.</li>
            <li><strong>¿Cuánto cuesta una consulta para pie diabético en Quito?</strong> En Podoclinicec, la primera consulta es solo $15, con evaluación y tratamiento. ¡Escribe al +593 995 832 788!</li>
            <li><strong>¿Es seguro el servicio a domicilio?</strong> ¡Claro! Usamos equipos esterilizados y seguimos protocolos estrictos en La Florida y Quito norte.</li>
            <li><strong>¿Quiénes necesitan un podólogo para pie diabético?</strong> Cualquier persona con diabetes, especialmente si notas heridas, rojez o pérdida de sensibilidad.</li>
            <li><strong>¿Cubren todo Quito norte?</strong> Sí, llegamos a La Florida, Carcelén, Cumbayá y más. Pregunta por tu zona: +593 995 832 788.</li>
            <li><strong>¿Cuánto tarda el cuidado preventivo?</strong> Una consulta de una hora puede prevenir problemas graves. La Dra. Muñoz te guía desde el primer día.</li>
          </ul>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton 
            href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20consulta%20para%20pie%20diabético%20a%20domicilio"
            className="inline-flex items-center bg-[#60BEC3] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            trackingLabel="consulta_pie_diabetico"
            isExternal={true}
          >
            Agendar Consulta Pie Diabético
          </CTAButton>
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
