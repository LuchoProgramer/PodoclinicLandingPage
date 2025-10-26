"use client";

import { useState, useEffect } from "react";
import { X, Clock, Gift, Phone, MessageCircle } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of page and popup hasn't been shown
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        
        // Analytics
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "exit_intent_popup_shown", {
            event_category: "engagement",
            event_label: "Exit Intent Last Chance"
          });
        }
      }
    };

    // Also show after 45 seconds if user hasn't interacted
    timeout = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    
    // Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exit_intent_popup_closed", {
        event_category: "engagement",
        event_label: "Exit Intent Dismissed"
      });
    }
  };

  const handleCTAClick = (cta: string) => {
    // Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exit_intent_conversion", {
        event_category: "conversion",
        event_label: `Exit Intent ${cta}`
      });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-pulse">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Header with value proposition */}
          <div className="bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
            <Clock className="w-4 h-4 inline mr-2" />
            💡 Antes de irte...
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Te vas sin consultar con<br />
            <span className="text-[#60BEC3]">la ESPECIALISTA?</span>
          </h3>

          <p className="text-gray-700 mb-6">
            <strong>No te vayas con dudas:</strong> La Dra. Cristina Muñoz puede 
            <strong className="text-green-600"> resolver tu problema</strong> con 5 años de experiencia especializada.
            Agenda tu consulta profesional ahora.
          </p>

          {/* Value proposition */}
          <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Gift className="w-6 h-6 text-blue-600 mr-2" />
              <span className="font-bold text-blue-800">VENTAJA ESPECIAL</span>
            </div>
            <div className="text-lg">
              <span className="text-blue-800 font-semibold">Consulta especializada + Evaluación completa</span>
              <span className="text-sm text-gray-600 block">Atención a domicilio disponible - $35</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <a
              href="https://wa.me/593995832788?text=🏥%20Hola%20Dra.%20Cristina,%20vi%20su%20sitio%20web%20y%20me%20interesa%20una%20consulta%20especializada.%20¿Podría%20darme%20información%20sobre%20disponibilidad%20y%20precios?"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick("WhatsApp Consult")}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              CONSULTAR DISPONIBILIDAD
            </a>
            
            <a
              href="tel:+593995832788"
              onClick={() => handleCTAClick("Phone Consult")}
              className="w-full bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              LLAMAR AHORA: 099 583 2788
            </a>
          </div>

          {/* Professional credibility */}
          <div className="mt-4 text-gray-600 font-medium text-sm">
            📍 Dra. Cristina Muñoz - 5 años de experiencia especializada
          </div>
        </div>
      </div>
    </div>
  );
}