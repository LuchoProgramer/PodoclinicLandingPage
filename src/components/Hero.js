"use client"

"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

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
            <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#60BEC3] to-[#79A373] px-6">
                {/* Badges de urgencia */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        ✅ Disponible HOY
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        ⏰ Solo 3 cupos restantes
                    </span>
                </div>

                {/* Contenido principal del Hero */}
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                        Cuidado Especializado para tus <span className="text-yellow-300">Pies</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl max-w-2xl text-white drop-shadow-md mx-auto">
                        <strong>Tratamiento profesional para uñeros, pie diabético y más.</strong> 
                        Atención personalizada con la experiencia que necesitas.
                    </p>

                    {/* Beneficios clave */}
                    <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="text-2xl mb-2">🩺</div>
                            <p className="font-semibold">Primera consulta</p>
                            <p className="text-sm">50% descuento</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="text-2xl mb-2">🏠</div>
                            <p className="font-semibold">Atención a domicilio</p>
                            <p className="text-sm">Disponible</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="text-2xl mb-2">⏰</div>
                            <p className="font-semibold">Respuesta rápida</p>
                            <p className="text-sm">Máximo 30 min</p>
                        </div>
                    </div>

                    {/* CTAs mejorados */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <button
                            onClick={handleReservaClick}
                            className="bg-white text-[#60BEC3] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105"
                        >
                            🗓️ Reserva tu Cita GRATIS
                        </button>
                        
                        <a
                            href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20consulta%20urgente"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#60BEC3] transition duration-300"
                        >
                            💬 Consulta por WhatsApp
                        </a>
                    </div>

                    {/* Promoción con urgencia */}
                    <div className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg shadow-lg max-w-lg mx-auto mt-6">
                        <p className="font-bold text-sm">
                            ⚡ PROMOCIÓN LIMITADA: Primera consulta solo $15 (precio normal $30)
                        </p>
                        <p className="text-xs">Válido hasta el 31 de octubre</p>
                    </div>
                </div>

                {/* Testimonio mejorado */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 max-w-md w-full bg-white/95 text-gray-700 p-4 md:p-6 rounded-lg shadow-xl">
                    <p className="italic text-sm md:text-base">
                        "Excelente servicio, mis pies nunca habían estado tan sanos. El tratamiento para uñeros fue perfecto."
                    </p>
                    <div className="flex items-center justify-between mt-3">
                        <div>
                            <p className="text-sm font-semibold text-gray-800">– Ana Martínez</p>
                            <p className="text-xs text-gray-500">Paciente verificado</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        </div>
                    </div>
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
