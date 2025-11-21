import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { CTAButton } from "@/components/BlogButtons";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "FAQ Podología a Domicilio en Quito | Resuelve tus Dudas y Cuida tus Pies",
  description: "FAQ podología a domicilio en Quito norte: protocolos, tratamientos y consejos de Cristina Muñoz, Podóloga Especialista.",
  keywords: "podología a domicilio Quito, preguntas frecuentes podólogo, podología Quito norte, podólogo a domicilio, FAQ podología Quito",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Podoclinicec",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manuel Jordan y Av. La Florida",
    "addressLocality": "Quito",
    "addressCountry": "EC"
  },
  "telephone": "+593995832788",
  "priceRange": "desde $35 primera consulta",
  "description": "Podología a domicilio en Quito norte con Cristina Muñoz, Podóloga Especialista, especialista en uñas encarnadas, pie diabético y podología deportiva."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una consulta de podología a domicilio en Quito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Podoclinicec, la primera consulta a domicilio es desde $35, con evaluación y tratamiento. Escribe al +593995832788."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Claro! Usamos equipos esterilizados y seguimos protocolos estrictos en Quito norte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué problemas trata un podólogo a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uñas encarnadas, pie diabético, fascitis, callos, y más. Ideal para runners y diabéticos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Escribe al +593995832788, elige un horario, y Cristina Muñoz llega a tu casa en La Florida con tratamiento en una hora."
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

export default function FAQPodologiaDomicilioQuitoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/uneros" className="hover:text-[#60BEC3]">Uñeros</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">FAQ Podología a Domicilio Quito</span>
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
            FAQ PODOLOGÍA DOMICILIO
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Preguntas Frecuentes sobre Podología a Domicilio en Quito: <span className="text-[#60BEC3]">¡Todo lo que Necesitas Saber!</span>
          </h1>

          {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ¿Te has preguntado qué hace un podólogo a domicilio o cuánto cuesta cuidar tus pies sin salir de casa? ¡Te cuento todo en esta aventura! En Podoclinicec, llevamos el cuidado profesional a tu puerta en Quito norte, con Cristina Muñoz, Podóloga Especialista resolviendo tus dudas y aliviando tus pies desde $35. Desde uñas encarnadas hasta pie diabético, aquí respondemos las preguntas más comunes que nos hacen en La Florida. ¿Listo para caminar sin preocupaciones? Sigue leyendo, ¡esto es para ti! 😎
          </p>

          {/* Meta información */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> Cristina Muñoz, Podóloga Especialista
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 08/10/2025
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" /> FAQ Podología Domicilio
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué es un Podólogo a Domicilio?</h2>
          <p>Te cuento: un podólogo a domicilio es como tener una clínica en tu casa. En Podoclinicec, Cristina Muñoz, Podóloga Especialista llega a La Florida, Carcelén o Cumbayá con equipos esterilizados para tratar tus pies. ¿Sabías que el 70% de las búsquedas de podólogos en Quito son desde celulares, buscando comodidad? Nosotros te damos eso y más: cuidamos uñas encarnadas, pie diabético o molestias de runners, todo sin que pelees con el tráfico.</p>
          <h2>Las Preguntas que Todos se Hacen</h2>
          <p>Aquí van las dudas más comunes que nos llegan por WhatsApp (+593 995 832 788). ¡Vamos a resolverlas!</p>
          <h3>¿Cuánto Cuesta una Consulta de Podología a Domicilio en Quito?</h3>
          <p>Desde $35, tu primera consulta a domicilio con Podoclinicec incluye evaluación completa y tratamiento. Ya sea un uñero, pie diabético o chequeo para runners, te damos un servicio top en La Florida. ¡Y sin costos escondidos! Escribe al +593 995 832 788 para agendar en un toque.</p>
          <h3>¿Es Seguro el Servicio a Domicilio?</h3>
          <p>¡Claro que sí! Usamos equipos 100% esterilizados y seguimos protocolos de bioseguridad estrictos. Cristina Muñoz llega a tu casa en Quito norte con todo listo para cuidarte, como si estuvieras en una clínica, pero con la comodidad de tu sofá.</p>
          <h3>¿Qué Problemas Trata un Podólogo a Domicilio?</h3>
          <p>De todo un poco: uñas encarnadas, pie diabético, fascitis, callos, y más. Es ideal para:</p>
          <ul>
            <li><strong>Runners:</strong> Preparamos tus pies para Quito 15K.</li>
            <li><strong>Diabéticos:</strong> Prevenimos complicaciones (7.8% de prevalencia en Quito).</li>
            <li><strong>Cualquiera con molestias:</strong> Desde dolores raros hasta chequeos generales.</li>
          </ul>
          <h3>¿Cómo Funciona el Servicio a Domicilio?</h3>
          <ol>
            <li>Escribe al +593 995 832 788 o entra a podoclinicec.com.</li>
            <li>Elige un horario que te venga bien (¡hasta fines de semana!).</li>
            <li>Cristina Muñoz llega a tu casa en La Florida o Quito norte.</li>
            <li>Recibes evaluación, tratamiento y tips en una hora.</li>
            <li>Seguimos en contacto por WhatsApp para cualquier duda.</li>
          </ol>
          <h3>¿Cubren Todo Quito Norte?</h3>
          <p>¡Sí! Atendemos La Florida, Carcelén, Cumbayá, y más. Si estás cerca de Parque La Carolina o más allá, pregunta por tu zona. Cubrimos todo Quito norte para que no te muevas.</p>
          <h3>¿Cuánto Tarda una Consulta?</h3>
          <p>En promedio, una hora. Desde la evaluación hasta el tratamiento, Cristina Muñoz te deja los pies listos para el día a día. La mayoría de los problemas, como uñeros, mejoran desde la primera visita.</p>
          <h2>¿Por Qué Elegir Podoclinicec?</h2>
          <ul>
            <li><strong>Cercanía:</strong> Estamos en La Florida, entendemos Quito norte.</li>
            <li><strong>Expertise:</strong> Cristina Muñoz es especialista en uñas encarnadas, pie diabético y podología deportiva.</li>
            <li><strong>Precio:</strong> servicios a partir de $15, con evaluación gratis.</li>
            <li><strong>Confianza:</strong> Equipos esterilizados y un trato que te hace sentir en casa.</li>
          </ul>
          <h2>¿Y si Tienes Más Dudas?</h2>
          <p>No hay pregunta pequeña. Hemos ayudado a runners de Quito 15K a volver a la pista, a diabéticos a prevenir complicaciones, y a vecinos de La Florida a caminar sin dolor. Si tienes otra duda, mándanos un WhatsApp al +593 995 832 788. ¡Te respondemos en un toque!</p>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton 
            href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20a%20domicilio%20en%20Quito%20norte"
            className="inline-flex items-center bg-[#60BEC3] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            trackingLabel="podologia_domicilio_faq"
            isExternal={true}
          >
            Agendar Podología a Domicilio
          </CTAButton>
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
