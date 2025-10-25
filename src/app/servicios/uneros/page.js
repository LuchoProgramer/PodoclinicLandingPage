import Navbar from "@/components/Navbar";
import AboutDoctor from "@/components/AboutDoctor";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { 
    Shield, 
    Clock, 
    Award, 
    CheckCircle,
    AlertTriangle,
    Users,
    Calendar
} from "lucide-react";

// Metadata para SEO
export const metadata = {
    title: "Tratamiento de Uñeros en Quito - PodoClinic | Alivio Inmediato Sin Dolor",
    description: "Tratamiento avanzado de uñeros en Quito: técnica sin dolor, recuperación rápida y atención urgente. Agenda tu cita con expertos.",
    keywords: "uñeros Quito, tratamiento uñeros, onicocriptosis, podólogo Quito, dolor dedo pie, uña encarnada",
    openGraph: {
        title: "Tratamiento de Uñeros - Alivio Inmediato | PodoClinic Quito",
        description: "¿Dolor por uñero? Tratamiento profesional sin cirugía. Atención de emergencia disponible en Quito.",
        type: "website",
        locale: "es_EC"
    }
};

// FAQ específicas para uñeros
const unerosFAQs = [
    {
        question: "¿Qué es un uñero y por qué se produce?",
        answer: "Un uñero (onicocriptosis) ocurre cuando el borde de la uña se incrusta en la piel circundante. Se produce por corte incorrecto de uñas, calzado apretado, traumatismos, predisposición genética o mala higiene del pie."
    },
    {
        question: "¿Cuáles son los síntomas de un uñero?",
        answer: "Los síntomas incluyen dolor intenso al caminar o con presión, enrojecimiento e hinchazón del dedo, posible supuración o pus, dificultad para usar calzado cerrado, y en casos severos, fiebre por infección."
    },
    {
        question: "¿Cuándo debo buscar tratamiento profesional?",
        answer: "Busca atención inmediata si hay signos de infección (pus, mal olor, fiebre), dolor severo que impide caminar, enrojecimiento que se extiende, si eres diabético, o si los remedios caseros no funcionan en 2-3 días."
    },
    {
        question: "¿En qué consiste el tratamiento profesional?",
        answer: "El tratamiento incluye evaluación profesional, limpieza y desinfección, remoción del fragmento de uña incrustado, aplicación de antisépticos, colocación de gasa especializada y educación para prevenir recurrencias."
    },
    {
        question: "¿Es doloroso el tratamiento?",
        answer: "El procedimiento se realiza con anestesia local para minimizar el dolor. Puedes sentir una leve molestia durante la inyección, pero el tratamiento en sí es prácticamente indoloro."
    },
    {
        question: "¿Cuánto tiempo tarda la recuperación?",
        answer: "La recuperación típica es de 1-2 semanas. El dolor mejora significativamente en 24-48 horas. Es importante seguir las indicaciones de cuidado y mantener el pie limpio y seco."
    }
];

// Componente específico para uñeros
function UnerosHero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido principal */}
                    <div className="text-center lg:text-left">
                        <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <AlertTriangle className="w-4 h-4 inline mr-1" />
                            Tratamiento Urgente Disponible
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                            Tratamiento Especializado para 
                            <span className="text-[#60BEC3] block mt-2">
                                Uñeros
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                            <strong>Alivio inmediato del dolor.</strong> Tratamiento profesional 
                            sin cirugía en la mayoría de casos. Recuperación rápida y efectiva.
                        </p>

                        {/* Beneficios específicos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Alivio inmediato del dolor",
                                "Sin cirugía en 90% de casos", 
                                "Recuperación en 1-2 semanas",
                                "Prevención de infecciones"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20un%20uñero%20y%20necesito%20tratamiento%20urgente"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#60BEC3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Agendar Tratamiento Urgente
                            </a>
                            
                            <a
                                href="tel:+593995832788"
                                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            >
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Llamar Ahora
                            </a>
                        </div>
                    </div>

                    {/* Información de urgencia */}
                    <div className="space-y-6">
                        {/* Proceso de tratamiento */}
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <Shield className="w-6 h-6 text-[#60BEC3] mr-2" />
                                Proceso de Tratamiento
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Evaluación", desc: "Diagnóstico profesional del uñero" },
                                    { step: "2", title: "Anestesia", desc: "Aplicación de anestesia local" },
                                    { step: "3", title: "Tratamiento", desc: "Remoción cuidadosa del fragmento" },
                                    { step: "4", title: "Cuidados", desc: "Vendaje y instrucciones de cuidado" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                                            {item.step}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">{item.title}</div>
                                            <div className="text-gray-600 text-sm">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Urgencia y disponibilidad */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6">
                            <h4 className="font-bold text-red-800 mb-2 flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                Atención de Emergencia
                            </h4>
                            <p className="text-red-700 text-sm mb-3">
                                ¿Dolor severo? ¿Signos de infección? No esperes más.
                            </p>
                            <div className="text-sm text-red-600">
                                • <strong>Disponible HOY</strong> - Citas de emergencia<br />
                                • <strong>Respuesta inmediata</strong> por WhatsApp<br />
                                • <strong>Alivio del dolor</strong> en la primera sesión
                            </div>
                        </div>

                        {/* Testimonial específico */}
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <div className="flex items-center mb-3">
                                <Users className="w-5 h-5 text-[#60BEC3] mr-2" />
                                <span className="font-semibold text-gray-800">Testimonio Real</span>
                            </div>
                            <p className="text-gray-700 italic text-sm mb-3">
                                "Llegué con un dolor insoportable por un uñero infectado. 
                                En una sola sesión me quitaron el dolor y en una semana estaba completamente curado."
                            </p>
                            <div className="text-xs text-gray-500">
                                - Ana M., 34 años
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function UnerosPage() {
    return (
        <>
            <Navbar />
            <main>
                <UnerosHero />
                <AboutDoctor />
                <div className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                            Preguntas Frecuentes sobre <span className="text-[#60BEC3]">Uñeros</span>
                        </h2>
                        <FAQAccordion faqs={unerosFAQs} />
                    </div>
                </div>
                <Testimonials />
                <Footer />
                <WhatsAppButton />
            </main>
        </>
    );
}