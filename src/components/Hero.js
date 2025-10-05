"use client"

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

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handler para evento GA4 y TikTok
    const handleReservaClick = () => {
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

    return (
        <>
            <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-green-50 px-6 pt-24">
                {/* Badges de urgencia */}
                <div className="absolute top-20 sm:top-32 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center z-10">
                    <span className="bg-[#60BEC3] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Disponible HOY
                    </span>
                    <span className="bg-[#79A373] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Solo 3 cupos restantes
                    </span>
                </div>

                {/* Contenido principal del Hero */}
                <div className="max-w-4xl mx-auto space-y-8 mt-12 sm:mt-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        Cuidado Especializado para tus <span className="text-[#60BEC3]">Pies</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-gray-700 mx-auto leading-relaxed">
                        <strong>Tratamiento profesional para uñeros, pie diabético y más.</strong> 
                        Atención personalizada con la experiencia que necesitas.
                    </p>

                    {/* CTAs principales */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <button
                            onClick={handleReservaClick}
                            className="bg-[#60BEC3] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#4A9DB8] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        >
                            <CalendarDays className="w-5 h-5 mr-2" />
                            Reserva tu Cita GRATIS
                        </button>
                        
                        <a
                            href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20consulta%20urgente"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#79A373] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#6B8F65] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Consulta por WhatsApp
                        </a>
                    </div>

                    {/* Promoción con urgencia */}
                    <div className="bg-white rounded-2xl shadow-xl border-l-4 border-[#60BEC3] text-gray-800 px-6 py-4 max-w-lg mx-auto mt-8">
                        <div className="flex items-center justify-center">
                            <BadgePercent className="w-5 h-5 mr-3 text-[#60BEC3] flex-shrink-0" />
                            <div className="text-center">
                                <p className="font-bold text-sm md:text-base text-gray-900">
                                    PROMOCIÓN LIMITADA: Primera consulta solo $15
                                </p>
                                <p className="text-xs md:text-sm text-gray-600">
                                    Precio normal $30 • Válido hasta el 31 de octubre
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
