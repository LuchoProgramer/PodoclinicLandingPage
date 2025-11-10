import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag, Home, Zap, Wallet, Users, Smartphone, Calendar as CalendarIcon, Stethoscope, Sparkles, MessageCircle, Activity, Clock, MapPin, GraduationCap, Shield, Heart, HelpCircle, DollarSign, Star, Phone, Home as HomeIcon, Zap as ZapIcon, Watch } from "lucide-react";
import { CTAButton } from "@/components/BlogButtons";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Podología a Domicilio Quito Norte | Tratamientos Personalizados en Casa",
  description: "Podología a domicilio en Quito norte: atención profesional para adultos mayores, deportistas y personas con movilidad reducida.",
  keywords: "podología a domicilio Quito, podólogo Quito norte, podología en casa, pie diabético Quito, uñas encarnadas domicilio",
  image: "https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_900/v1762797439/IMG_6879_lqniq0.jpg",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Podoclinicec",
  "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
  "@id": "https://podoclinicec.com/blog/local/podologia-domicilio-quito-norte",
  "url": "https://podoclinicec.com/blog/local/podologia-domicilio-quito-norte",
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
      "name": "Local",
      "item": "https://podoclinicec.com/blog/local"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Podología a Domicilio en Quito Norte",
      "item": "https://podoclinicec.com/blog/local/podologia-domicilio-quito-norte"
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
            <Link href="/blog/local" className="hover:text-[#60BEC3]">Local</Link>
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
        {/* Hero Image Section */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_900/v1762797439/IMG_6879_lqniq0.jpg" 
              alt="Dra. Cristina Muñoz brindando podología a domicilio en Quito Norte"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Podología Profesional en tu Casa</h2>
              <p className="text-lg opacity-90">Quito Norte • La Florida • Carcelén</p>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-12">
          
          {/* Sección 1: ¿Qué hace especial? */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué Hace Especial a la Podología a Domicilio?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Te ha pasado: un dolor en el pie, un uñero molesto, o simplemente quieres prevenir problemas, pero la idea de ir a una clínica te frena. En Quito, con el ritmo de La Florida o Carcelén, el tiempo es oro.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Por eso, en Podoclinicec creamos un servicio a domicilio que es como un viaje a la comodidad: la Dra. Muñoz llega con su equipo esterilizado y su expertise para cuidarte donde estés. 
                  <span className="font-semibold text-[#60BEC3]"> ¿Sabías que el 70% de las búsquedas de podólogos en Quito son desde celulares? ¡Eso grita conveniencia!</span>
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dltfsttr7/image/upload/f_auto,q_auto,w_600/v1740592014/WhatsApp_Image_2025-02-26_at_12.42.42_2_pnshe2.jpg" 
                  alt="Comodidad del servicio de podología a domicilio"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#60BEC3] text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">70%</div>
                  <div className="text-sm">Búsquedas móviles</div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2: Beneficios */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Beneficios que Cambian el Juego</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: <Home className="w-8 h-8 mx-auto text-[#60BEC3]" />,
                  title: "Sin Moverte",
                  description: "Atendemos en tu casa, oficina o donde prefieras en Quito norte.",
                  image: "https://images.pexels.com/photos/7653084/pexels-photo-7653084.jpeg?auto=compress&w=400&h=200&fit=crop"
                },
                {
                  icon: <Zap className="w-8 h-8 mx-auto text-[#60BEC3]" />,
                  title: "Rápido y Fácil",
                  description: "Agenda por WhatsApp en minutos (+593 995 832 788).",
                  image: "https://images.pexels.com/photos/3795280/pexels-photo-3795280.jpeg?auto=compress&w=400&h=200&fit=crop"
                },
                {
                  icon: <Wallet className="w-8 h-8 mx-auto text-[#60BEC3]" />,
                  title: "Atención Personalizada",
                  description: "Cada consulta se adapta a tus necesidades y tipo de pie.",
                  image: "https://images.pexels.com/photos/18429374/pexels-photo-18429374.jpeg?auto=compress&w=400&h=200&fit=crop"
                },
                {
                  icon: <Users className="w-8 h-8 mx-auto text-[#60BEC3]" />,
                  title: "Para Todos",
                  description: "Ideal para diabéticos, runners de Quito 15K, o cualquiera con dolor de pies.",
                  image: "https://images.pexels.com/photos/2403057/pexels-photo-2403057.jpeg?auto=compress&w=400&h=200&fit=crop"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4 text-center">{benefit.icon}</div>
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Sección 3: Proceso paso a paso */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">¿Cómo Funciona Nuestro Servicio a Domicilio?</h2>
            <p className="text-lg text-gray-600 text-center mb-12">Un proceso simple de 5 pasos para cuidar tus pies</p>
            
            <div className="relative">
              {/* Línea conectora */}
              <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-[#60BEC3] to-green-500"></div>
              
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  {
                    step: "1",
                    title: "Contáctanos",
                    description: "Escribe al +593 995 832 788 o entra a podoclinicec.com. Dinos dónde estás (La Florida, Cumbayá, Carcelén).",
                    image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/contacto-whatsapp.jpg",
                    icon: <Smartphone className="w-7 h-7 mx-auto text-[#60BEC3]" />
                  },
                  {
                    step: "2", 
                    title: "Agenda tu Cita",
                    description: "Elegimos un horario que te venga bien, incluso fines de semana.",
                    image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/calendario-cita.jpg",
                    icon: <CalendarIcon className="w-7 h-7 mx-auto text-[#60BEC3]" />
                  },
                  {
                    step: "3",
                    title: "La Dra. Muñoz Llega", 
                    description: "Con equipos esterilizados, evalúa tus pies (uñas encarnadas, pie diabético, o chequeo general).",
                    image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/dra-cristina-munoz.jpg",
                    icon: <Stethoscope className="w-7 h-7 mx-auto text-[#60BEC3]" />
                  },
                  {
                    step: "4",
                    title: "Tratamiento Personalizado",
                    description: "Desde cortes precisos hasta tips para runners, todo por $15 en la primera visita.",
                    image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/tratamiento-personalizado.jpg", 
                    icon: <Sparkles className="w-7 h-7 mx-auto text-[#60BEC3]" />
                  },
                  {
                    step: "5",
                    title: "Seguimiento",
                    description: "Te damos consejos para prevenir y un WhatsApp directo para cualquier duda.",
                    image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/seguimiento-cuidados.jpg",
                    icon: <MessageCircle className="w-7 h-7 mx-auto text-[#60BEC3]" />
                  }
                ].map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#60BEC3] transition-colors">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#60BEC3] text-white rounded-full text-xl font-bold mx-auto mb-4">
                        {step.step}
                      </div>
                      <div className="mb-3">{step.icon}</div>
                      <h3 className="font-bold text-lg text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12 p-6 bg-white border border-[#60BEC3] rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-[#60BEC3]">¡En una hora, tus pies estarán agradecidos!</h3>
              <p className="text-lg text-gray-700 opacity-90">Y tú sin salir de casa</p>
            </div>
          </section>
          {/* Sección 4: ¿Quiénes necesitan? */}
          <section className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">¿Quiénes Necesitan un Podólogo a Domicilio?</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personas con Movilidad Limitada",
                  description: "Como pacientes con pie diabético, que necesitan cuidado experto sin esfuerzos.",
                  image: "https://images.pexels.com/photos/2026764/pexels-photo-2026764.jpeg?auto=compress&w=400&h=200&fit=crop",
                  icon: <User className="w-8 h-8 text-red-600" />, 
                  bgColor: "bg-red-100",
                  textColor: "text-red-600"
                },
                {
                  title: "Runners y Deportistas", 
                  description: "Si corres en Quito 15K o entrenas en La Carolina, prevenimos uñeros y fascitis.",
                  image: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&w=400&h=200&fit=crop",
                  icon: <Activity className="w-8 h-8 text-green-600" />, 
                  bgColor: "bg-green-100",
                  textColor: "text-green-600"
                },
                {
                  title: "Gente Ocupada",
                  description: "Si vives en Quito norte y no tienes tiempo para clínicas, nosotros vamos a ti.",
                  image: "https://images.pexels.com/photos/4339471/pexels-photo-4339471.jpeg?auto=compress&w=400&h=200&fit=crop",
                  icon: <Clock className="w-8 h-8 text-blue-600" />, 
                  bgColor: "bg-blue-100", 
                  textColor: "text-blue-600"
                }
              ].map((persona, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${persona.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    {persona.icon}
                  </div>
                  <img 
                    src={persona.image} 
                    alt={persona.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className={`font-bold text-xl ${persona.textColor} mb-4 text-center`}>{persona.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{persona.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">¿Te suena familiar?</h3>
              <p className="text-lg text-[#60BEC3] font-semibold">Entonces, Podoclinicec es para ti 💙</p>
            </div>
          </section>

          {/* Sección 5: Por qué elegir Podoclinicec */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Por Qué Elegir Podoclinicec en Quito Norte</h2>
              <img 
                src="https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_384,h_384,q_auto:eco,f_auto,dpr_auto,fl_progressive:steep,e_sharpen:60/v1759895245/IMG_6853_f0skfi.jpg"
                alt="Dra. Cristina Muñoz - Especialista en Podología"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-[#60BEC3]"
              />
              <p className="text-lg text-gray-600">Con la Dra. Cristina Muñoz, especialista certificada</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 text-purple-600" />,
                    title: "Cercanía",
                    description: "Basados en La Florida, cubrimos todo Quito norte (Carcelén, Cumbayá, más allá).",
                    color: "bg-purple-100 text-purple-600"
                  },
                  {
                    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
                    title: "Expertise",
                    description: "La Dra. Cristina Muñoz es especialista en uñas encarnadas, pie diabético y podología deportiva.",
                    color: "bg-blue-100 text-blue-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-green-600" />,
                    title: "Confianza", 
                    description: "Equipos esterilizados y protocolos de bioseguridad al 100%.",
                    color: "bg-green-100 text-green-600"
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-red-600" />,
                    title: "Accesibilidad",
                    description: "$15 por la primera consulta, con un trato que te hará sentir en casa.",
                    color: "bg-red-100 text-red-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white border border-[#60BEC3] rounded-xl shadow-md text-center">
              <p className="text-lg font-semibold text-gray-800">Hemos ayudado a runners a volver a la pista y a abuelitos a caminar sin dolor.</p>
              <p className="text-xl font-bold mt-2 text-[#60BEC3]">¿Listo para ser el próximo?</p>
            </div>
          </section>
          {/* Sección 6: FAQs mejoradas */}
          <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Preguntas Frecuentes sobre Podología a Domicilio</h2>
              <p className="text-lg text-gray-600">Resolvemos tus dudas más comunes</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  question: "¿Qué es un podólogo a domicilio?",
                  answer: "Es un especialista que lleva el cuidado de tus pies a tu casa. En Podoclinicec, la Dra. Muñoz atiende en Quito norte por $15.",
                  icon: <HelpCircle className="w-5 h-5 text-white" />
                },
                {
                  question: "¿Cuánto cuesta la consulta a domicilio en Quito?",
                  answer: "La primera consulta es solo $15, con evaluación y tratamiento. ¡Escribe al +593 995 832 788!",
                  icon: <DollarSign className="w-5 h-5 text-white" />
                },
                {
                  question: "¿Es seguro el servicio a domicilio?",
                  answer: "¡Claro! Usamos equipos esterilizados y seguimos estrictos protocolos de bioseguridad.",
                  icon: <Shield className="w-5 h-5 text-white" />
                },
                {
                  question: "¿Qué problemas tratan a domicilio?",
                  answer: "Uñas encarnadas, pie diabético, callos, y más. Perfecto para runners o pacientes con diabetes.",
                  icon: <Stethoscope className="w-5 h-5 text-white" />
                },
                {
                  question: "¿Cubren todo Quito norte?",
                  answer: "Sí, llegamos a La Florida, Carcelén, Cumbayá y zonas cercanas. Pregunta por tu área: +593 995 832 788.",
                  icon: <MapPin className="w-5 h-5 text-white" />
                },
                {
                  question: "¿Cuánto tarda una cita?",
                  answer: "Una hora en promedio, con resultados desde la primera visita.",
                  icon: <Clock className="w-5 h-5 text-white" />
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#60BEC3] rounded-full flex items-center justify-center text-white text-xl mr-3">
                      {faq.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{faq.question}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección de testimonios visuales */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Lo Que Dicen Nuestros Pacientes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "María González",
                  location: "La Florida", 
                  testimonial: "¡Increíble! La Dra. Muñoz vino a mi casa y solucionó mi uñero en una hora. Super profesional y cómodo.",
                  rating: 5,
                  image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/testimonio-maria.jpg"
                },
                {
                  name: "Carlos Runner",
                  location: "Carcelén",
                  testimonial: "Como runner, necesitaba cuidado especializado. El servicio a domicilio me ahorra tiempo y es excelente.",
                  rating: 5, 
                  image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/testimonio-carlos.jpg"
                },
                {
                  name: "Doña Carmen",
                  location: "Cumbayá",
                  testimonial: "A mis 75 años, ir a clínicas es difícil. Que vengan a casa es una bendición. Muy recomendado.",
                  rating: 5,
                  image: "https://res.cloudinary.com/TU_CLOUD_NAME/image/upload/v1/blog/testimonio-carmen.jpg"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400" fill="#facc15" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.testimonial}"</p>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* CTA principal mejorado */}
        <div className="mt-12">
          <div className="bg-white border border-[#60BEC3] rounded-2xl p-8 text-center shadow-lg">
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Tus Pies Merecen el Mejor Cuidado!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Agenda ahora tu consulta de podología a domicilio en Quito Norte
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-center">
              <div className="p-4">
                <HomeIcon className="w-7 h-7 mx-auto text-[#60BEC3] mb-2" />
                <div className="font-bold text-gray-800">En tu Casa</div>
                <div className="text-sm text-gray-600">Sin moverte</div>
              </div>
              <div className="p-4">
                <ZapIcon className="w-7 h-7 mx-auto text-[#60BEC3] mb-2" />
                <div className="font-bold text-gray-800">Resultados</div>
                <div className="text-sm text-gray-600">Desde la primera visita</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20podología%20a%20domicilio%20en%20Quito%20norte"
                className="inline-flex items-center bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                trackingLabel="podologia_domicilio_norte"
                isExternal={true}
              >
                <Smartphone className="w-6 h-6 mr-2" /> Agendar por WhatsApp
              </CTAButton>
              
              <div className="flex items-center space-x-2 text-white/90">
                <span className="text-sm text-gray-600">O llama directo:</span>
                <a href="tel:+593995832788" className="font-bold text-lg text-[#60BEC3] hover:underline transition-colors">
                  +593 995 832 788
                </a>
              </div>
            </div>
            
            <div className="mt-6 text-sm opacity-80">
              <span className="inline-flex items-center mr-2 text-gray-600"><Watch className="w-4 h-4 mr-1 inline text-[#60BEC3]" />Atendemos de Lunes a Sábado</span> • <span className="inline-flex items-center text-gray-600"><MapPin className="w-4 h-4 mr-1 inline text-[#60BEC3]" />Cobertura en todo Quito Norte</span>
            </div>
          </div>
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
