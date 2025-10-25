import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { WhatsAppButton, CTAButton } from "@/components/BlogButtons";

export const metadata = {
  title: "Podología a Domicilio Quito Norte | Tratamientos Personalizados en Casa",
  description: "Podología a domicilio en Quito norte: atención profesional para adultos mayores, deportistas y personas con movilidad reducida.",
  keywords: "podología a domicilio Quito, podólogo Quito norte, podología en casa, pie diabético Quito, uñas encarnadas domicilio",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Podoclinicec",
  "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
  "@id": "https://podoclinicec.com/blog/uneros/podologia-domicilio-quito-norte",
  "url": "https://podoclinicec.com/blog/uneros/podologia-domicilio-quito-norte",
  "telephone": "+593995832788",
  "priceRange": "$15 primera consulta",
  "description": "Podología a domicilio en Quito norte con Dra. Cristina Muñoz, especialista en uñas encarnadas, pie diabético y podología deportiva.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manuel Jordan y Av. La Florida",
    "addressLocality": "Quito",
    "addressRegion": "Pichincha",
    "postalCode": "170511",
    "addressCountry": "EC"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-0.143093",
    "longitude": "-78.495641"
  },
  "openingHours": [
    "Mo-Fr 09:00-12:00",
    "Mo-Fr 14:00-18:00",
    "Sa 09:00-14:00"
  ],
  "sameAs": [
    "https://www.facebook.com/podoclinic.cm",
    "https://www.instagram.com/podoclinic.ec/",
    "https://wa.me/593995832788"
  ]
};

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://podoclinicec.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://podoclinicec.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Uñeros",
      "item": "https://podoclinicec.com/blog/uneros"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Podología a Domicilio en Quito Norte",
      "item": "https://podoclinicec.com/blog/uneros/podologia-domicilio-quito-norte"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un podólogo a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un especialista que lleva el cuidado de tus pies a tu casa. En Podoclinicec, la Dra. Muñoz atiende en Quito norte por $15."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta la consulta a domicilio en Quito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La primera consulta es solo $15, con evaluación y tratamiento. Escribe al +593995832788."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Claro! Usamos equipos esterilizados y seguimos estrictos protocolos de bioseguridad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué problemas tratan a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uñas encarnadas, pie diabético, callos, y más. Perfecto para runners o pacientes con diabetes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren todo Quito norte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, llegamos a La Florida, Carcelén, Cumbayá y zonas cercanas. Pregunta por tu área: +593995832788."
      }
    }
  ]
};

export default function PodologiaDomicilioQuitoNortePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb visual */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/uneros" className="hover:text-[#60BEC3]">Uñeros</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Podología a Domicilio en Quito Norte</span>
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
            PODOLOGÍA A DOMICILIO
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Podología a Domicilio en Quito Norte: <span className="text-[#60BEC3]">¡Cuidar tus Pies Nunca Fue Tan Fácil!</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ¿Te imaginas cuidar tus pies sin moverte de tu sofá en Quito norte? ¡Te cuento una aventura que cambia todo! En Podoclinicec, llevamos la podología a tu casa en La Florida y alrededores, con la Dra. Cristina Muñoz lista para aliviarte por solo $15. Nada de tráfico, nada de esperas: solo bienestar directo a tu puerta. ¿Quieres saber cómo funciona y por qué es la mejor opción en Quito? Sigue leyendo, ¡esto va a ser un hit! 😎
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
              <Tag className="w-4 h-4" /> Podología a Domicilio
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué Hace Especial a la Podología a Domicilio?</h2>
          <p>Te ha pasado: un dolor en el pie, un uñero molesto, o simplemente quieres prevenir problemas, pero la idea de ir a una clínica te frena. En Quito, con el ritmo de La Florida o Carcelén, el tiempo es oro. Por eso, en Podoclinicec creamos un servicio a domicilio que es como un viaje a la comodidad: la Dra. Muñoz llega con su equipo esterilizado y su expertise para cuidarte donde estés. ¿Sabías que el 70% de las búsquedas de podólogos en Quito son desde celulares? ¡Eso grita conveniencia!</p>
          <h2>Beneficios que Cambian el Juego</h2>
          <ul>
            <li><strong>Sin moverte:</strong> Atendemos en tu casa, oficina o donde prefieras en Quito norte.</li>
            <li><strong>Rápido y fácil:</strong> Agenda por WhatsApp en minutos (+593 995 832 788).</li>
            <li><strong>Precio imbatible:</strong> Consulta inicial por $15, con evaluación gratis.</li>
            <li><strong>Para todos:</strong> Ideal para diabéticos (7.8% de prevalencia en Quito), runners de Quito 15K, o cualquiera con un dolor de pies.</li>
          </ul>
          <h2>¿Cómo Funciona Nuestro Servicio a Domicilio?</h2>
          <ol>
            <li><strong>Contáctanos:</strong> Escribe al +593 995 832 788 o entra a podoclinicec.com. Dinos dónde estás (La Florida, Cumbayá, Carcelén).</li>
            <li><strong>Agenda tu cita:</strong> Elegimos un horario que te venga bien, incluso fines de semana.</li>
            <li><strong>La Dra. Muñoz llega:</strong> Con equipos esterilizados, evalúa tus pies (uñas encarnadas, pie diabético, o chequeo general).</li>
            <li><strong>Tratamiento personalizado:</strong> Desde cortes precisos hasta tips para runners, todo por $15 en la primera visita.</li>
            <li><strong>Seguimiento:</strong> Te damos consejos para prevenir y un WhatsApp directo para cualquier duda.</li>
          </ol>
          <p>En una hora, tus pies estarán agradecidos, ¡y tú sin salir de casa!</p>
          <h2>¿Quiénes Necesitan un Podólogo a Domicilio?</h2>
          <ul>
            <li><strong>Personas con movilidad limitada:</strong> Como pacientes con pie diabético, que necesitan cuidado experto sin esfuerzos.</li>
            <li><strong>Runners y deportistas:</strong> Si corres en Quito 15K o entrenas en La Carolina, prevenimos uñeros y fascitis.</li>
            <li><strong>Gente ocupada:</strong> Si vives en Quito norte y no tienes tiempo para clínicas, nosotros vamos a ti.</li>
          </ul>
          <p>¿Te suena familiar? Entonces, Podoclinicec es para ti.</p>
          <h2>Por Qué Elegir Podoclinicec en Quito Norte</h2>
          <ul>
            <li><strong>Cercanía:</strong> Basados en La Florida, cubrimos todo Quito norte (Carcelén, Cumbayá, más allá).</li>
            <li><strong>Expertise:</strong> La Dra. Cristina Muñoz es especialista en uñas encarnadas, pie diabético y podología deportiva.</li>
            <li><strong>Confianza:</strong> Equipos esterilizados y protocolos de bioseguridad al 100%.</li>
            <li><strong>Accesibilidad:</strong> $15 por la primera consulta, con un trato que te hará sentir en casa.</li>
          </ul>
          <p>Hemos ayudado a runners a volver a la pista y a abuelitos a caminar sin dolor. ¿Listo para ser el próximo?</p>
          <h2>Preguntas Frecuentes sobre Podología a Domicilio</h2>
          <ul>
            <li><strong>¿Qué es un podólogo a domicilio?</strong> Es un especialista que lleva el cuidado de tus pies a tu casa. En Podoclinicec, la Dra. Muñoz atiende en Quito norte por $15.</li>
            <li><strong>¿Cuánto cuesta la consulta a domicilio en Quito?</strong> La primera consulta es solo $15, con evaluación y tratamiento. ¡Escribe al +593 995 832 788!</li>
            <li><strong>¿Es seguro el servicio a domicilio?</strong> ¡Claro! Usamos equipos esterilizados y seguimos estrictos protocolos de bioseguridad.</li>
            <li><strong>¿Qué problemas tratan a domicilio?</strong> Uñas encarnadas, pie diabético, callos, y más. Perfecto para runners o pacientes con diabetes.</li>
            <li><strong>¿Cubren todo Quito norte?</strong> Sí, llegamos a La Florida, Carcelén, Cumbayá y zonas cercanas. Pregunta por tu área: +593 995 832 788.</li>
            <li><strong>¿Cuánto tarda una cita?</strong> Una hora en promedio, con resultados desde la primera visita.</li>
          </ul>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton text="Agendar Podología a Domicilio" link="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20a%20domicilio%20en%20Quito%20norte" />
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
