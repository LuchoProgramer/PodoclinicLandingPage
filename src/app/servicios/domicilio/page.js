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
    title: "Servicio de Podología a Domicilio en Quito - PodoClinic | Pacientes con Movilidad Reducida",
    description: "Atención podológica profesional a domicilio en Quito para personas con movilidad reducida. Tratamientos seguros, cómodos y personalizados en tu hogar. Agenda tu visita!",
    keywords: "podología a domicilio Quito, atención podológica domicilio, movilidad reducida, podólogo a domicilio, servicio a domicilio pies",
    openGraph: {
        title: "Podología a Domicilio - Atención Especializada en Quito | PodoClinic",
        description: "¿Dificultad para movilizarte? Llevamos el consultorio a tu hogar. Atención podológica profesional y segura en Quito.",
        type: "website",
        locale: "es_EC"
    }
};

const domicilioFAQs = [
    {
        question: "¿Quiénes pueden solicitar el servicio a domicilio?",
        answer: "Personas con movilidad reducida, adultos mayores, pacientes postquirúrgicos, personas con discapacidad o cualquier persona que no pueda acudir fácilmente al consultorio."
    },
    {
        question: "¿Qué tratamientos se pueden realizar a domicilio?",
        answer: "Tratamientos de uñeros, hongos, corte y limado de uñas, profilaxis, control de pie diabético, curaciones y asesoría personalizada."
    },
    {
        question: "¿Es seguro el tratamiento en casa?",
        answer: "Sí, llevamos todo el instrumental esterilizado y seguimos protocolos estrictos de bioseguridad para garantizar tu salud y la de tu familia."
    },
    {
        question: "¿Cómo agendo una visita a domicilio?",
        answer: "Puedes agendar por WhatsApp, llamada telefónica o a través de nuestro sitio web. Nos adaptamos a tus horarios y necesidades."
    },
    {
        question: "¿El costo es diferente al del consultorio?",
        answer: "El servicio a domicilio tiene un recargo por desplazamiento, pero recibirás la misma calidad y atención profesional que en el consultorio."
    }
];

function DomicilioHero() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido principal */}
                    <div className="text-center lg:text-left">
                        <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Users className="w-4 h-4 inline mr-1" />
                            Servicio Especial para Movilidad Reducida
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                            Podología Profesional
                            <span className="text-[#60BEC3] block mt-2">
                                a Domicilio
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                            <strong>Comodidad y seguridad en tu hogar.</strong> Atención podológica especializada para quienes más lo necesitan.
                        </p>
                        {/* Beneficios */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Atención personalizada en casa",
                                "Ideal para adultos mayores y discapacitados",
                                "Protocolos de bioseguridad",
                                "Instrumental esterilizado"
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
                                href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20una%20visita%20de%20podología%20a%20domicilio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#60BEC3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Agendar Visita a Domicilio
                            </a>
                            <a
                                href="tel:+593995832788"
                                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            >
                                <AlertTriangle className="w-5 h-5 mr-2" />
                                Llamar Ahora
                            </a>
                        </div>
                    </div>
                    {/* Información */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <Shield className="w-6 h-6 text-[#60BEC3] mr-2" />
                                ¿Cómo funciona el servicio?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Agenda", desc: "Solicita tu cita por WhatsApp o llamada" },
                                    { step: "2", title: "Visita", desc: "El podólogo llega a tu domicilio con todo el equipo" },
                                    { step: "3", title: "Tratamiento", desc: "Se realiza el procedimiento necesario en tu hogar" },
                                    { step: "4", title: "Cuidados", desc: "Recibes recomendaciones y seguimiento personalizado" }
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function DomicilioPage() {
    return (
        <>
            <Navbar />
            <DomicilioHero />
            <AboutDoctor />
            <Testimonials />
            <FAQAccordion faqs={domicilioFAQs} />
            <WhatsAppButton />
            <Footer />
        </>
    );
}
