const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Podoclinicec",
  "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
  "@id": "https://podoclinicec.com/blog/podologia-deportiva/podologia-runners-quito",
  "url": "https://podoclinicec.com/blog/podologia-deportiva/podologia-runners-quito",
  "telephone": "+593995832788",
  "priceRange": "$15 primera consulta",
  "description": "Podología deportiva a domicilio en Quito norte con Dra. Cristina Muñoz, especialista en runners, uñas encarnadas y pie diabético.",
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
      "name": "Podología Deportiva",
      "item": "https://podoclinicec.com/blog/podologia-deportiva"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Podología para Runners Quito",
      "item": "https://podoclinicec.com/blog/podologia-deportiva/podologia-runners-quito"
    }
  ]
};
import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { WhatsAppButton, CTAButton } from "@/components/BlogButtons";

export const metadata = {
  title: "Podología para Runners en Quito: ¡Cuida tus Pies y Corre sin Límites!",
  description: "Podología deportiva a domicilio en Quito norte con la Dra. Cristina Muñoz. Prevención y tratamiento de lesiones para runners por solo $15.",
  keywords: "podología runners Quito, podología deportiva Quito, uñas encarnadas runners, fascitis plantar Quito, podólogo deportivo domicilio",
};

const sportsActivitySchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Podoclinicec",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manuel Jordan y Av. La Florida",
    "addressLocality": "Quito",
    "addressCountry": "EC"
  },
  "telephone": "+593995832788",
  "description": "Podología deportiva a domicilio en Quito norte con Dra. Cristina Muñoz, especialista en runners, uñas encarnadas y pie diabético.",
  "priceRange": "$15 primera consulta"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo evitar uñas encarnadas al correr?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Corta las uñas recto, usa zapatillas con espacio y revisa tus pies. En Podoclinicec, tratamos uñeros por $15."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una consulta para runners en Quito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La primera consulta es solo $15, con evaluación biomecánica. Escribe al +593995832788."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Claro! Usamos equipos esterilizados y protocolos estrictos en La Florida y Quito norte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué problemas tratan para runners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uñas encarnadas, fascitis, callos, y más. Perfecto para Quito 15K o entrenamientos diarios."
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

export default function PodologiaRunnersQuitoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsActivitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb visual */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/podologia-deportiva" className="hover:text-[#60BEC3]">Podología Deportiva</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Podología para Runners Quito</span>
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
            PODOLOGÍA DEPORTIVA
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Podología para Runners en Quito: <span className="text-[#60BEC3]">¡Cuida tus Pies y Corre sin Límites!</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ¿Listo para volar en la Quito 15K, pero un dolor en los pies te frena? ¡Te cuento una aventura que te va a cambiar la pista! En Podoclinicec, sabemos que los runners de Quito norte, desde La Florida hasta La Carolina, necesitan pies en forma para darlo todo. La Dra. Cristina Muñoz lleva el cuidado profesional a tu casa por solo $15, ¡sin que dejes de entrenar! ¿Quieres saber cómo prevenir uñeros, fascitis y más para correr sin preocupaciones? Sigue leyendo, ¡esto es para ti! 😎
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
              <Tag className="w-4 h-4" /> Podología Deportiva
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Por Qué los Runners Necesitan un Podólogo?</h2>
          <p>Te ha pasado: estás entrenando en el parque La Carolina, todo va genial, y de repente un uñero o un dolor en el talón te saca de la jugada. En Quito, donde los runners enfrentan subidas, bajadas y el clima cambiante, los pies sufren. ¿Sabías que el 30% de los deportistas tienen problemas como uñas encarnadas o fascitis por no cuidar sus pies? Pero tranquilo, con un podólogo a tu lado, ¡nada te para!</p>
          <h2>Problemas Comunes en Runners</h2>
          <ul>
            <li><strong>Uñas encarnadas:</strong> Zapatos apretados o cortes malos las causan.</li>
            <li><strong>Fascitis plantar:</strong> Dolor en el talón por sobreesfuerzo.</li>
            <li><strong>Ampollas y callos:</strong> Fricción en carreras largas.</li>
            <li><strong>Lesiones por terreno:</strong> Las calles de Quito norte no siempre son amables.</li>
          </ul>
          <p>¿Te suena? Un podólogo especializado es tu boleto para seguir corriendo.</p>
          <h2>Cómo Podoclinicec Cuida tus Pies de Runner</h2>
          <p>En Podoclinicec, llevamos la podología deportiva a tu casa en Quito norte. La Dra. Cristina Muñoz, experta en runners, te ayuda a prevenir y tratar problemas para que no pares. Por solo $15, tu primera consulta incluye:</p>
          <ul>
            <li>Evaluación biomecánica para ver cómo pisas.</li>
            <li>Tratamiento de uñeros, callos o fascitis (sin dolor).</li>
            <li>Consejos para zapatillas y cuidados diarios.</li>
            <li>Servicio a domicilio en La Florida, Carcelén, Cumbayá y más.</li>
          </ul>
          <p>Imagina: estás en casa, la Dra. Muñoz llega con equipos esterilizados, y en una hora tus pies están listos para la próxima carrera. ¿No es una aventura que vale la pena?</p>
          <h2>Consejos para Runners: Previene Problemas en tus Pies</h2>
          <ul>
            <li><strong>Elige zapatillas adecuadas:</strong> Busca modelos con soporte y espacio para los dedos. Pregúntanos cuáles son ideales para Quito 15K.</li>
            <li><strong>Corta uñas recto:</strong> Evita uñeros con un corte limpio y sin ángulos.</li>
            <li><strong>Usa calcetines técnicos:</strong> Dejan respirar tus pies y evitan ampollas.</li>
            <li><strong>Estira y fortalece:</strong> Ejercicios simples para el arco del pie te salvan de fascitis.</li>
            <li><strong>Revisa tus pies:</strong> Un pequeño corte puede complicarse si lo ignoras.</li>
          </ul>
          <p>¿Quieres más tips personalizados? La Dra. Muñoz te los da en tu consulta.</p>
          <h2>¿Por Qué Elegir Podoclinicec para Runners en Quito?</h2>
          <ul>
            <li><strong>A domicilio:</strong> Cuidamos tus pies en tu casa, sin interrumpir tu rutina.</li>
            <li><strong>Expertise:</strong> La Dra. Muñoz es especialista en podología deportiva, uñas encarnadas y pie diabético.</li>
            <li><strong>Precio imbatible:</strong> $15 por la primera consulta, con evaluación gratis.</li>
            <li><strong>Confianza:</strong> Equipos esterilizados y protocolos de bioseguridad al 100%.</li>
          </ul>
          <p>Hemos ayudado a runners de Quito 15K a volver a la pista sin dolor y a principiantes a correr su primera 5K. ¿Listo para ser el próximo?</p>
          <h2>Preguntas Frecuentes sobre Podología para Runners</h2>
          <ul>
            <li><strong>¿Cómo evitar uñas encarnadas al correr?</strong> Corta las uñas recto, usa zapatillas con espacio y revisa tus pies. En Podoclinicec, tratamos uñeros por $15.</li>
            <li><strong>¿Cuánto cuesta una consulta para runners en Quito?</strong> La primera consulta es solo $15, con evaluación biomecánica. ¡Escribe al +593 995 832 788!</li>
            <li><strong>¿Es seguro el servicio a domicilio?</strong> ¡Claro! Usamos equipos esterilizados y protocolos estrictos en La Florida y Quito norte.</li>
            <li><strong>¿Qué problemas tratan para runners?</strong> Uñas encarnadas, fascitis, callos, y más. Perfecto para Quito 15K o entrenamientos diarios.</li>
            <li><strong>¿Cubren todo Quito norte?</strong> Sí, llegamos a La Florida, Carcelén, Cumbayá y más. Pregunta por tu zona: +593 995 832 788.</li>
            <li><strong>¿Cuánto tarda una consulta?</strong> Una hora, con resultados desde el primer día. La Dra. Muñoz te prepara para correr sin límites.</li>
          </ul>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton text="Agendar Consulta Podología Deportiva" link="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20consulta%20de%20podología%20deportiva%20a%20domicilio" />
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
