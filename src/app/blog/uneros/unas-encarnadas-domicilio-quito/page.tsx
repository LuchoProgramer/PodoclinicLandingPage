import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { CTAButton } from "@/components/BlogButtons";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Tratamiento de Uñas Encarnadas a Domicilio en Quito Norte | Alivio Rápido y Seguro",
  description: "Uñas encarnadas a domicilio en Quito norte: atención profesional, técnicas avanzadas y recuperación rápida.",
  keywords: "uñas encarnadas Quito, uñero a domicilio, podólogo Quito norte, tratamiento uñas encarnadas",
};

const medicalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalService",
  "name": "Tratamiento de Uñas Encarnadas a Domicilio",
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
  "priceRange": "$15 primera consulta",
  "description": "Tratamiento profesional de uñas encarnadas a domicilio en Quito norte con Cristina Muñoz, Podóloga Especialista."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo aliviar una uña encarnada en casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lava con agua tibia y jabón neutro, aplica crema antibiótica y usa zapatos sueltos. Para un alivio real, confía en Podoclinicec por $15."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta tratar uñas encarnadas en Quito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Podoclinicec, la primera consulta es solo $15, con tratamiento y tips incluidos. Llama ya: +593995832788."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el servicio a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "¡Totalmente! Usamos equipos esterilizados y seguimos protocolos de bioseguridad en La Florida."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda el tratamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de los uñeros se resuelven en 1-2 sesiones. Cristina Muñoz evalúa tu caso en la primera cita."
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

export default function UnasEncarnadasDomicilioQuitoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalServiceSchema) }} />
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
            <span className="text-gray-800">Uñas Encarnadas a Domicilio en Quito</span>
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
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            UÑEROS A DOMICILIO
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Cómo Tratar Uñas Encarnadas a Domicilio en Quito: <span className="text-[#60BEC3]">¡Tu Alivio Empieza Aquí!</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            ¿Te ha pasado que un uñero te tiene al borde de la desesperación, sin poder caminar tranquilo? ¡Te cuento mi experiencia! En Podoclinicec, descubrimos que las uñas encarnadas son más comunes de lo que crees en Quito, especialmente entre runners y quienes pasan horas de pie. Pero aquí va lo mejor: no necesitas salir de casa para solucionarlo. Cristina Muñoz, Podóloga Especialista lleva el alivio directo a tu puerta en Quito norte, ¡y por solo $15! ¿Quieres saber cómo? Sigue leyendo y descubre cómo transformar el dolor en bienestar. 😎
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
              <Tag className="w-4 h-4" /> Uñeros
            </div>
          </div>
        </header>
        {/* Contenido principal */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Por Qué Duelen Tanto las Uñas Encarnadas?</h2>
          <p>Te cuento: una uña encarnada pasa cuando el borde se clava en la piel, causando inflamación, dolor y, a veces, hasta infección. En Quito, con tanta gente corriendo en eventos como la Quito 15K o usando zapatos apretados, esto es pan de cada día. ¿Sabías que hasta el 20% de las consultas podológicas son por uñeros? Las causas principales son:</p>
          <ul>
            <li><strong>Corte mal hecho:</strong> Cortar las uñas en ángulo o muy cortas.</li>
            <li><strong>Zapatos que aprietan:</strong> Esas zapatillas de running que amas, pero no dan espacio a tus dedos.</li>
            <li><strong>Golpes constantes:</strong> Caminar o correr en las calles de La Florida puede pasar factura.</li>
            <li><strong>Genética:</strong> Algunas uñas crecen curvadas, ¡y no es tu culpa!</li>
          </ul>
          <p>Si sientes un pinchazo que no te deja en paz, es hora de actuar. Pero tranquilo, no tienes que ir lejos.</p>
          <h2>La Solución: Tratamiento Profesional a Domicilio con Podoclinicec</h2>
          <p>Imagina esto: no tienes que moverte de tu casa en Quito norte. En Podoclinicec, Cristina Muñoz, Podóloga Especialista, nuestra experta en podología, llega a ti con todo lo necesario para aliviar tus uñas encarnadas. Por solo $15, tu primera consulta incluye:</p>
          <ul>
            <li>Revisión completa para entender tu caso.</li>
            <li>Tratamiento sin dolor (corte preciso, desinflamación).</li>
            <li>Tips personalizados para que no vuelva a pasar.</li>
            <li>Equipos 100% esterilizados, porque tu seguridad es primero.</li>
          </ul>
          <p>¿Lo mejor? Estamos en La Florida y cubrimos todo Quito norte, desde Carcelén hasta Cumbayá. En 1-2 sesiones, estarás listo para caminar sin drama. ¿No suena como una aventura que vale la pena?</p>
          <h2>Consejos para Prevenir Uñas Encarnadas en Casa</h2>
          <ul>
            <li><strong>Corta recto:</strong> Usa tijeras limpias y evita los ángulos.</li>
            <li><strong>Elige bien tus zapatos:</strong> Busca zapatillas con espacio para los dedos, sobre todo si corres.</li>
            <li><strong>Lava y revisa:</strong> Mantén tus pies secos y chequea cualquier rojez.</li>
            <li><strong>No ignores el dolor:</strong> Un uñero pequeño puede complicarse si no lo tratas.</li>
          </ul>
          <p>¿Y si ya duele? No te arriesgues con remedios caseros. Un podólogo profesional es tu mejor aliado.</p>
          <h2>¿Por Qué Podoclinicec es Tu Mejor Opción en Quito?</h2>
          <ul>
            <li><strong>A domicilio:</strong> Llegamos a tu casa en La Florida o cerca (¡sin tráfico para ti!).</li>
            <li><strong>Precio imbatible:</strong> $15 por la primera consulta, con evaluación gratis.</li>
            <li><strong>Expertise:</strong> Cristina Muñoz, Podóloga Especialista no solo trata uñeros, sino que es experta en pie diabético y runners.</li>
            <li><strong>Fácil y rápido:</strong> Agenda en un toque por WhatsApp: +593 995 832 788.</li>
          </ul>
          <p>Hemos ayudado a runners de Quito 15K a volver a la pista y a personas que solo quieren caminar sin dolor. ¿Listo para ser el próximo?</p>
          <h2>Preguntas Frecuentes: Todo lo que Quieres Saber</h2>
          <ul>
            <li><strong>¿Cómo aliviar una uña encarnada en casa?</strong> Lava con agua tibia y jabón neutro, aplica una crema antibiótica y usa zapatos sueltos. Pero para un alivio real, confía en Podoclinicec por $15.</li>
            <li><strong>¿Cuánto cuesta tratar uñas encarnadas en Quito?</strong> En Podoclinicec, la primera consulta es solo $15, con tratamiento y tips incluidos. ¡Llama ya!</li>
            <li><strong>¿Es seguro el servicio a domicilio?</strong> ¡Totalmente! Usamos equipos esterilizados y seguimos protocolos de bioseguridad en La Florida.</li>
            <li><strong>¿Cuánto tarda el tratamiento?</strong> La mayoría de los uñeros se resuelven en 1-2 sesiones. Cristina Muñoz evalúa tu caso en la primera cita.</li>
            <li><strong>¿Cubren todo Quito norte?</strong> Sí, llegamos a La Florida, Carcelén, Cumbayá y más. Pregunta por tu zona: +593 995 832 788.</li>
          </ul>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton 
            href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20tratamiento%20de%20uña%20encarnada%20a%20domicilio"
            className="inline-flex items-center bg-[#60BEC3] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            trackingLabel="tratamiento_uneros_domicilio"
            isExternal={true}
          >
            Agendar Tratamiento a Domicilio
          </CTAButton>
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
