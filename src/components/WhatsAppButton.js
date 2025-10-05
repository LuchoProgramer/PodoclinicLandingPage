"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const whatsappNumber = "593995832788";
    const message = encodeURIComponent("¡Hola! 👋 Quiero más información sobre sus servicios de podología.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    const handleClick = () => {
        // Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_whatsapp", {
                event_category: "engagement",
                event_label: "Botón WhatsApp Flotante"
            });
        }
        
        // TikTok Pixel
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track('Contact', {
                content_type: 'whatsapp_contact',
                content_name: 'WhatsApp Button',
                description: 'Usuario hizo clic en botón flotante de WhatsApp'
            });
        }
        
        // Facebook Pixel
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Contact', {
                content_name: 'WhatsApp Button'
            });
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-40">
            {/* Animación de pulso */}
            <div className="absolute inset-0 bg-[#1EBE5D] rounded-full animate-ping opacity-75"></div>
            
            {/* Botón principal */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-[#60BEC3] to-[#1EBE5D] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 flex items-center justify-center group"
                onClick={handleClick}
            >
                <FaWhatsapp className="w-8 h-8" />
                
                {/* Tooltip en pantallas grandes */}
                <div className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden lg:block">
                    💬 ¡Escríbenos ahora!
                    <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent"></div>
                </div>
            </a>

            {/* Badge de "Online" */}
            <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full border-2 border-white">
                Online
            </div>
        </div>
    );
}
