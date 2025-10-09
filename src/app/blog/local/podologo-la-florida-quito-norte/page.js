import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { WhatsAppButton, CTAButton } from "@/components/BlogButtons";

export const metadata = {
  title: "Por Qué Elegir un Podólogo en La Florida, Quito Norte: ¡Tu Bienestar Empieza Aquí!",
  description: "Podología a domicilio en La Florida, Quito norte, con la Dra. Cristina Muñoz. Atención profesional, segura y económica en tu casa por solo $15.",
  keywords: "podólogo La Florida Quito, podología a domicilio Quito norte, podólogo cerca de mí, podología runners Quito, pie diabético Quito",
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
  "priceRange": "$15 primera consulta",
  "description": "Podología a domicilio en La Florida, Quito norte, con Dra. Cristina Muñoz, especialista en uñas encarnadas, pie diabético y podología deportiva."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Dónde encontrar un podólogo en Quito norte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Podoclinicec, estamos en La Florida y llegamos a tu casa por $15. Escribe al +593995832788."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una consulta en La Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La primera consulta es solo $15, con evaluación y tratamiento. Agenda ya."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Claro! Usamos equipos esterilizados y protocolos estrictos en Quito norte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué problemas tratan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uñas encarnadas, pie diabético, fascitis, callos, y más. Ideal para runners y diabéticos."
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

export default function PodologoLaFloridaQuitoNortePage() {
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
            <Link href="/blog/local" className="hover:text-[#60BEC3]">Podología Local</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Podólogo La Florida Quito Norte</span>
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
            PODOLOGÍA LOCAL
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Por Qué Elegir un Podólogo en La Florida, Quito Norte: <span className="text-[#60BEC3]">¡Tu Bienestar Empieza Aquí!</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ¿Buscas un podólogo que realmente entienda tus pies y esté cerca de casa? ¡Te cuento una experiencia que te va a encantar! En Podoclinicec, estamos en el corazón de La Florida, Quito norte, llevando el cuidado de tus pies a tu puerta por solo $15. La Dra. Cristina Muñoz te ayuda a decir adiós a uñeros, pie diabético o molestias de running, ¡sin que pelees con el tráfico! ¿Quieres saber por qué somos la mejor opción en Quito norte? Sigue leyendo, ¡esto es para ti! 😎
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
              <Tag className="w-4 h-4" /> Podología Local
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Por Qué un Podólogo Local en La Florida?</h2>
          <p>Te ha pasado: un dolor en el pie te frena, pero ir a una clínica en el centro de Quito es un lío. En La Florida, cerca de Parque La Carolina o a un paso de Cumbayá, la vida es intensa, y necesitas soluciones rápidas. En Podoclinicec, somos tus vecinos: entendemos el ritmo de Quito norte y llevamos el cuidado profesional a tu casa. ¿Sabías que el 70% de las búsquedas de podólogos en Quito son desde celulares? ¡Eso grita comodidad, y nosotros te la damos!</p>
          <h2>Ventajas de un Podólogo en tu Zona</h2>
          <ul>
            <li><strong>Cercanía:</strong> Basados en La Florida, cubrimos Carcelén, Cumbayá y más.</li>
            <li><strong>A domicilio:</strong> No necesitas moverte; la Dra. Muñoz llega a ti.</li>
            <li><strong>Conexión local:</strong> Conocemos las necesidades de runners de Quito 15K o diabéticos en Quito norte.</li>
            <li><strong>Rapidez:</strong> Agenda en un toque por WhatsApp (+593 995 832 788).</li>
          </ul>
          <h2>Qué Ofrece Podoclinicec en Quito Norte</h2>
          <p>En Podoclinicec, hacemos que cuidar tus pies sea una aventura sin complicaciones. Por $15, tu primera consulta incluye:</p>
          <ul>
            <li>Evaluación completa: Uñas encarnadas, pie diabético, fascitis o chequeo general.</li>
            <li>Tratamiento personalizado: Desde cortes precisos hasta cuidados para runners.</li>
            <li>Consejos prácticos: Para que tus pies estén listos para el día a día.</li>
            <li>Servicio a domicilio: En La Florida o cualquier rincón de Quito norte.</li>
          </ul>
          <p>La Dra. Cristina Muñoz llega con equipos esterilizados y un trato que te hace sentir en casa. En una hora, tus pies estarán agradecidos, ¡y tú sin salir de tu zona!</p>
          <h2>¿Quiénes Necesitan un Podólogo en La Florida?</h2>
          <p>Nuestro servicio es ideal para:</p>
          <ul>
            <li><strong>Runners:</strong> Si entrenas para Quito 15K o corres en La Carolina, prevenimos uñeros y fascitis.</li>
            <li><strong>Pacientes diabéticos:</strong> Cuidamos tus pies para evitar complicaciones (7.8% de prevalencia en Quito).</li>
            <li><strong>Gente ocupada:</strong> Si vives en La Florida y no tienes tiempo para clínicas.</li>
            <li><strong>Todos con molestias:</strong> Desde callos hasta dolores raros, te ayudamos.</li>
          </ul>
          <p>¿Te suena familiar? Entonces, Podoclinicec es tu solución.</p>
          <h2>Por Qué Podoclinicec es la Mejor Opción</h2>
          <ul>
            <li><strong>Hiperlocalidad:</strong> Estamos en La Florida, a minutos de Parque La Carolina o Cumbayá.</li>
            <li><strong>Expertise:</strong> La Dra. Muñoz es experta en uñas encarnadas, pie diabético y podología deportiva.</li>
            <li><strong>Precio imbatible:</strong> $15 por la primera consulta, con evaluación gratis.</li>
            <li><strong>Confianza:</strong> Equipos esterilizados y protocolos de bioseguridad al 100%.</li>
          </ul>
          <p>Hemos ayudado a runners a volver a la pista y a abuelitos a caminar sin dolor. ¿Listo para ser el próximo?</p>
          <h2>Preguntas Frecuentes sobre Podología en La Florida</h2>
          <ul>
            <li><strong>¿Dónde encontrar un podólogo en Quito norte?</strong> En Podoclinicec, estamos en La Florida y llegamos a tu casa por $15. ¡Escribe al +593 995 832 788!</li>
            <li><strong>¿Cuánto cuesta una consulta en La Florida?</strong> La primera consulta es solo $15, con evaluación y tratamiento. ¡Agenda ya!</li>
            <li><strong>¿Es seguro el servicio a domicilio?</strong> ¡Claro! Usamos equipos esterilizados y protocolos estrictos en Quito norte.</li>
            <li><strong>¿Qué problemas tratan?</strong> Uñas encarnadas, pie diabético, fascitis, callos, y más. Ideal para runners y diabéticos.</li>
            <li><strong>¿Cubren todo Quito norte?</strong> Sí, llegamos a La Florida, Carcelén, Cumbayá y más. Pregunta por tu zona: +593 995 832 788.</li>
            <li><strong>¿Cuánto tarda una consulta?</strong> Una hora, con resultados desde el primer día. La Dra. Muñoz te guía al instante.</li>
          </ul>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton text="Agendar Podología en La Florida" link="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20en%20La%20Florida%20Quito%20norte" />
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
