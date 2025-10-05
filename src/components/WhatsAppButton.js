"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
    const [message, setMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const whatsappNumber = "593995832788";

    useEffect(() => {
        // Generar mensaje inteligente basado en hora y comportamiento
        const generateSmartMessage = () => {
            const hour = new Date().getHours();
            const timeOnPage = Date.now() - window.performance.timing.navigationStart;
            
            let greeting = "¡Hola!";
            if (hour >= 6 && hour < 12) greeting = "¡Buenos días!";
            else if (hour >= 12 && hour < 18) greeting = "¡Buenas tardes!";
            else if (hour >= 18 && hour < 24) greeting = "¡Buenas noches!";
            
            let context = "Quiero más información sobre sus servicios de podología.";
            
            // Si el usuario lleva más de 30 segundos, es más probable que esté interesado
            if (timeOnPage > 30000) {
                context = "He estado revisando su página y me interesa agendar una consulta. ¿Cuál sería el siguiente paso?";
            }
            
            // Si es fin de semana, mencionar disponibilidad
            const day = new Date().getDay();
            if (day === 0 || day === 6) {
                context += " ¿Atienden los fines de semana?";
            }
            
            return encodeURIComponent(`${greeting} 👋 ${context}`);
        };

        setMessage(generateSmartMessage());
        
        // Mostrar el botón después de 3 segundos
        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    const handleClick = () => {
        // Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_whatsapp", {
                event_category: "engagement",
                event_label: "Botón WhatsApp Inteligente",
                value: 1
            });
        }
        
        // TikTok Pixel
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track('Contact', {
                content_type: 'whatsapp_contact',
                content_name: 'Smart WhatsApp Button',
                description: 'Usuario contactó via WhatsApp inteligente'
            });
        }
        
        // Facebook Pixel
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Contact', {
                content_name: 'Smart WhatsApp Button',
                source: 'landing_page'
            });
        }
    };

    return (
        <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animación de pulso más sutil */}
            <div className="absolute inset-0 bg-[#1EBE5D] rounded-full animate-ping opacity-30"></div>
            
            {/* Botón principal con mejor diseño */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-[#1EBE5D] to-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                onClick={handleClick}
                aria-label="Contactar por WhatsApp"
            >
                <FaWhatsapp className="w-8 h-8 filter drop-shadow-sm" />
                
                {/* Tooltip mejorado con horario */}
                <div className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap hidden lg:block shadow-xl border border-gray-100">
                    <div className="font-semibold text-[#1EBE5D] mb-1">💬 ¡Escríbenos ahora!</div>
                    <div className="text-sm text-gray-600">Respuesta inmediata • Online</div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-8 border-l-white border-y-8 border-y-transparent"></div>
                </div>
            </a>

            {/* Badge de estado mejorado */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full border-2 border-white shadow-lg animate-pulse">
                <span className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                    Online
                </span>
            </div>
        </div>
    );
}
