"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { 
    CalendarDays, 
    Phone, 
    CheckCircle, 
    Clock, 
    Home, 
    Stethoscope,
    Star,
    BadgePercent,
    MessageCircle
} from "lucide-react";

// Declaraciones globales para Analytics
declare global {
    interface Window {
        gtag?: (command: string, targetId: string, config?: any) => void;
        ttq?: {
            track: (event: string, data?: any) => void;
        };
        fbq?: (command: string, event: string, data?: any) => void;
    }
}

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Handler para evento GA4 y TikTok
    const handleReservaClick = (): void => {
        // Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_reserva_cita", {
                event_category: "engagement",
                event_label: "Botón Hero Reserva tu cita"
            });
        }
        
        // TikTok Pixel
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track('Contact', {
                content_type: 'cita_reserva',
                content_name: 'Reservar Cita Hero',
                description: 'Usuario hizo clic en reservar cita desde Hero'
            });
        }
        
        // Facebook Pixel
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Contact', {
                content_name: 'Reservar Cita Hero'
            });
        }

        // Abrir modal en lugar de ir a WhatsApp directamente
        setIsModalOpen(true);
    };

    // Handler para WhatsApp click
    const handleWhatsAppClick = (): void => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_whatsapp", {
                event_category: "contact",
                event_label: "Hero WhatsApp"
            });
        }
    };

    return (
        <>
            <section id="inicio" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-green-50 px-4 sm:px-6 pt-24 sm:pt-28 pb-12">
                {/* Badges de urgencia - Movidos más abajo para evitar conflicto con navbar */}
                <div className="absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center z-40 px-2 w-full max-w-md">
                    <span className="bg-[#60BEC3] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center whitespace-nowrap">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        Disponible HOY
                    </span>
                    <span className="bg-[#79A373] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center whitespace-nowrap">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        Solo 3 cupos restantes
                    </span>
                </div>

                {/* Contenido principal del Hero */}
                <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 mt-24 sm:mt-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mt-4 sm:mt-0">
                        Cuidado <span className="text-[#60BEC3]">Personalizado</span> para tus Pies
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl max-w-4xl text-gray-700 mx-auto leading-relaxed px-2 mt-4">
                        <strong>Tratamiento especializado en uñeros con seguimiento personalizado.</strong> 
                        Te acompañamos desde la primera consulta hasta tu recuperación completa.
                    </p>

                    {/* Diferenciadores clave - Mejorado el espaciado */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-4 sm:p-6 max-w-3xl mx-auto mt-8 sm:mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-sm">
                            <div className="text-center py-2">
                                <div className="text-[#60BEC3] font-bold text-2xl sm:text-xl md:text-2xl mb-1">13</div>
                                <div className="text-gray-600 text-sm sm:text-xs md:text-sm">Reseñas 5⭐ en Google</div>
                            </div>
                            <div className="text-center py-2 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200">
                                <div className="text-[#60BEC3] font-bold text-2xl sm:text-xl md:text-2xl mb-1">24h</div>
                                <div className="text-gray-600 text-sm sm:text-xs md:text-sm">Seguimiento post-tratamiento</div>
                            </div>
                            <div className="text-center py-2 border-t sm:border-t-0 border-gray-200">
                                    <div className="text-[#60BEC3] font-bold text-2xl sm:text-xl md:text-2xl mb-1">La Floresta</div>
                                    <div className="text-gray-600 text-sm sm:text-xs md:text-sm">Ubicación central en Quito Norte</div>
                            </div>
                        </div>
                    </div>

                    {/* CTAs principales - Mejorado para móvil */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-2">
                        <button
                            onClick={handleReservaClick}
                            className="w-full sm:w-auto bg-[#60BEC3] text-white px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        >
                            <CalendarDays className="w-5 h-5 mr-2" />
                            Consulta Personalizada GRATIS
                        </button>
                        
                        <a
                            href="https://wa.me/593995832788?text=¡Hola!%20Me%20interesa%20el%20tratamiento%20personalizado%20de%20uñeros"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#79A373] text-white px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-[#6B8F65] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                            onClick={handleWhatsAppClick}
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            WhatsApp Directo
                        </a>
                    </div>

                    {/* Enlaces Internos SEO - Mejorado espaciado y responsive */}
                    <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto px-2">
                        <a
                            href="/uneros-quito"
                            className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-[#60BEC3] hover:shadow-lg transition-all duration-300 min-h-[80px] sm:min-h-[100px] flex flex-col justify-center"
                            onClick={() => {
                                if (typeof window !== "undefined" && window.gtag) {
                                    window.gtag("event", "click_internal_link", {
                                        event_category: "seo",
                                        event_label: "Hero Uñeros"
                                    });
                                }
                            }}
                        >
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🩹</div>
                                <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors leading-tight">
                                    Uñeros Especializado
                                </div>
                                <div className="text-xs text-gray-600 mt-1">Servicio #1</div>
                            </div>
                        </a>

                        <a
                            href="/podologo-la-floresta"
                            className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-[#60BEC3] hover:shadow-lg transition-all duration-300 min-h-[80px] sm:min-h-[100px] flex flex-col justify-center"
                            onClick={() => {
                                if (typeof window !== "undefined" && window.gtag) {
                                    window.gtag("event", "click_internal_link", {
                                        event_category: "seo",
                                        event_label: "Hero La Floresta"
                                    });
                                }
                            }}
                        >
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🌳</div>
                                <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors leading-tight">
                                    La Floresta
                                </div>
                                <div className="text-xs text-gray-600 mt-1">Ubicación central</div>
                            </div>
                        </a>

                        <a
                            href="/podologo-la-carolina"
                            className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-[#60BEC3] hover:shadow-lg transition-all duration-300 min-h-[80px] sm:min-h-[100px] flex flex-col justify-center"
                            onClick={() => {
                                if (typeof window !== "undefined" && window.gtag) {
                                    window.gtag("event", "click_internal_link", {
                                        event_category: "seo",
                                        event_label: "Hero La Carolina"
                                    });
                                }
                            }}
                        >
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🏃‍♀️</div>
                                <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors leading-tight">
                                    La Carolina
                                </div>
                                <div className="text-xs text-gray-600 mt-1">Deportistas</div>
                            </div>
                        </a>
                    </div>

                    {/* Promoción con urgencia - Mejorado espaciado */}
                    <div className="bg-white rounded-2xl shadow-xl border-l-4 border-[#60BEC3] text-gray-800 px-4 sm:px-6 py-4 sm:py-5 max-w-lg mx-auto mt-8 sm:mt-10">
                        <div className="flex items-center justify-center">
                            <BadgePercent className="w-5 h-5 mr-3 text-[#60BEC3] flex-shrink-0" />
                            <div className="text-center">
                                <p className="font-bold text-sm sm:text-base text-gray-900 mb-1">
                                    Primera consulta desde $15
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Lun-Vie 8:00-18:00 | Sáb 8:00-14:00 • Rango $$
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elementos decorativos médicos sutiles */}
                <div className="absolute top-1/4 left-8 opacity-5">
                    <Stethoscope className="w-32 h-32 text-[#60BEC3]" />
                </div>
                <div className="absolute bottom-1/4 right-8 opacity-5">
                    <Stethoscope className="w-24 h-24 text-[#79A373] transform rotate-45" />
                </div>
            </section>

            {/* Modal de contacto */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}