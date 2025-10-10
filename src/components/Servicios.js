"use client";

import Image from "next/image";
import Link from "next/link";
import { 
    ExternalLink, 
    Scissors, 
    Shield, 
    Sparkles, 
    Stethoscope,
    ArrowRight,
    CheckCircle
} from "lucide-react";

// Array de servicios con nombre, descripción e imagen
const servicios = [
    {
        nombre: "Profilaxis Podal",
        descripcion: "Incluye limpieza profunda, corte anatómico de uñas, limpieza de canales ungueales, eliminación de callosidades, hidratación y masoterapia.",
        imagen: "https://www.clinicaplanas.com/blog/wp-content/cuidado-pies-1024x618.png.webp",
        icon: Sparkles,
        benefits: ["Limpieza profunda", "Corte anatómico", "Hidratación"],
        link: "/servicios/profilaxis",
        urgent: false
    },
    {
        nombre: "Tratamientos para Uñeros",
        descripcion: "Eliminación de la presión de la uña, tratamiento de infecciones y corrección del crecimiento para prevenir molestias.",
        imagen: "https://res.cloudinary.com/dltfsttr7/image/upload/v1740591933/WhatsApp_Image_2025-02-26_at_12.42.42_1_csiehy.jpg",
        icon: Scissors,
        benefits: ["Alivio inmediato", "Sin cirugía", "Prevención"],
        link: "/servicios/uneros",
        urgent: true
    },
    {
        nombre: "Cauterización de Verrugas",
        descripcion: "Uso de ácidos específicos para eliminar verrugas plantares, promoviendo una recuperación rápida y evitando infecciones futuras.",
        imagen: "https://res.cloudinary.com/dltfsttr7/image/upload/v1740592014/WhatsApp_Image_2025-02-26_at_12.42.42_2_pnshe2.jpg",
        icon: Shield,
        benefits: ["Eliminación efectiva", "Recuperación rápida", "Sin cicatrices"],
        link: "/servicios/verrugas",
        urgent: false
    },
    {
        nombre: "Tratamientos para Hongos",
        descripcion: "Profilaxis podal para uñas con hongos, limpieza profunda, desinfección y uso de productos antifúngicos especializados.",
        imagen: "https://res.cloudinary.com/dltfsttr7/image/upload/v1740591792/WhatsApp_Image_2025-02-26_at_12.42.42_ycsa7s.jpg",
        icon: Stethoscope,
        benefits: ["Tratamiento especializado", "Desinfección profunda", "Productos profesionales"],
        link: "/servicios/hongos",
        urgent: false
    }
];

export default function Servicios() {
    return (
        <section id="servicios" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Soluciones Especializadas
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Nuestros <span className="text-[#60BEC3]">Tratamientos</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Cada tratamiento está diseñado para resolver problemas específicos 
                        con la más alta calidad y cuidado profesional
                    </p>
                </div>

                {/* Grid de Servicios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {servicios.map((servicio, index) => {
                        const IconComponent = servicio.icon;
                        
                        const CardContent = (
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] h-full">
                                {/* Badge de urgencia */}
                                {servicio.urgent && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                                        Urgente
                                    </div>
                                )}
                                
                                {/* Imagen con overlay de icono */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={servicio.imagen}
                                        alt={servicio.nombre}
                                        width={400}
                                        height={250}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-[#60BEC3] rounded-full p-3">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center justify-between">
                                        {servicio.nombre}
                                        {servicio.link && (
                                            <ExternalLink className="w-5 h-5 text-[#60BEC3] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {servicio.descripcion}
                                    </p>

                                    {/* Beneficios */}
                                    <div className="space-y-2 mb-4">
                                        {servicio.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Footer */}
                                    <div className="pt-4 border-t border-gray-100">
                                        {servicio.link ? (
                                            <div className="flex items-center text-[#60BEC3] text-sm font-medium group-hover:text-[#4A9DB8] transition-colors">
                                                <span>Ver información completa</span>
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <span>Consultar disponibilidad</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );

                        return (
                            <div key={index} className="relative">
                                {servicio.link ? (
                                    <Link href={servicio.link} className="block h-full">
                                        {CardContent}
                                    </Link>
                                ) : (
                                    <div className="h-full cursor-pointer" onClick={() => {
                                        // Track click y redirigir a WhatsApp con servicio específico
                                        if (typeof window !== "undefined" && window.gtag) {
                                            window.gtag("event", "service_interest", {
                                                event_category: "engagement",
                                                event_label: servicio.nombre
                                            });
                                        }
                                        window.open(`https://wa.me/593995832788?text=¡Hola!%20Me%20interesa%20información%20sobre%20${encodeURIComponent(servicio.nombre)}`, '_blank');
                                    }}>
                                        {CardContent}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Global */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            ¿No estás seguro cuál necesitas?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Agenda una consulta gratuita y te ayudaremos a determinar 
                            el mejor tratamiento para tu situación específica
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/593995832788?text=¡Hola!%20Quisiera%20una%20consulta%20para%20saber%20qué%20tratamiento%20necesito"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center"
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.gtag) {
                                        window.gtag("event", "click_whatsapp", {
                                            event_category: "contact",
                                            event_label: "Servicios Consulta Gratuita"
                                        });
                                    }
                                }}
                            >
                                <Stethoscope className="w-5 h-5 mr-2" />
                                Consulta Gratuita
                            </a>
                            <button
                                onClick={() => {
                                    // Scroll al quiz si existe
                                    const quizSection = document.querySelector('[data-section="quiz"]');
                                    if (quizSection) {
                                        quizSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center"
                            >
                                Hacer Quiz de Evaluación
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}