"use client";

import { FaWhatsapp } from "react-icons/fa"; // ✅ Importamos el icono de WhatsApp

export default function WhatsAppButton() {
    const whatsappNumber = "593995832788"; // 📞 Reemplaza con tu número sin "+"
    const message = encodeURIComponent("¡Hola! Quiero más información sobre sus servicios.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Handler para el evento de clic
    const handleClick = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_whatsapp", {
                event_category: "engagement",
                event_label: "Botón WhatsApp"
            });
        }
        // El enlace se abrirá igual, esto solo envía el evento antes
    };

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#60BEC3] text-white p-4 rounded-full shadow-lg hover:bg-[#1EBE5D] transition duration-300 flex items-center justify-center"
            onClick={handleClick}
        >
            <FaWhatsapp className="w-8 h-8" /> {/* ✅ Ícono más moderno y reconocible */}
        </a>
    );
}
