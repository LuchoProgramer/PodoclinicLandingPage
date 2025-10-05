"use client";

import { useState, useEffect } from "react";
import { 
    MessageCircle, 
    X, 
    Send, 
    Bot,
    User,
    Clock
} from "lucide-react";

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [userName, setUserName] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [showTyping, setShowTyping] = useState(false);

    const chatSteps = [
        {
            type: "bot",
            message: "¡Hola! 👋 Soy el asistente virtual de PodoClinic. ¿En qué puedo ayudarte hoy?",
            options: [
                "Tengo dolor en el pie",
                "Quiero agendar una cita", 
                "Consulta sobre precios",
                "Otra consulta"
            ]
        }
    ];

    const quickResponses = {
        "Tengo dolor en el pie": {
            message: "Entiendo tu preocupación. Para brindarte la mejor atención, me gustaría conectarte directamente con la Dra. Cristina Muñoz, nuestra especialista.",
            redirect: "¡Hola%20Dra.%20Cristina!%20Tengo%20dolor%20en%20el%20pie%20y%20necesito%20su%20ayuda%20profesional"
        },
        "Quiero agendar una cita": {
            message: "¡Perfecto! Te conectaré directamente con nuestro sistema de citas para que puedas agendar de inmediato.",
            redirect: "¡Hola!%20Quiero%20agendar%20una%20cita%20para%20consulta%20podológica"
        },
        "Consulta sobre precios": {
            message: "Te proporcionaré información detallada sobre nuestros precios y promociones actuales.",
            redirect: "¡Hola!%20Quisiera%20información%20sobre%20precios%20y%20promociones%20disponibles"
        },
        "Otra consulta": {
            message: "Estaré encantado de ayudarte con cualquier consulta. Te conectaré con nuestro equipo.",
            redirect: "¡Hola!%20Tengo%20una%20consulta%20y%20me%20gustaría%20hablar%20con%20alguien%20del%20equipo"
        }
    };

    useEffect(() => {
        // Mostrar el chat después de 10 segundos si no se ha abierto
        const timer = setTimeout(() => {
            if (!isOpen) {
                setIsOpen(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const handleOptionClick = (option) => {
        const response = quickResponses[option];
        
        // Simular typing
        setShowTyping(true);
        
        setTimeout(() => {
            setShowTyping(false);
            
            // Mensaje de bot
            setTimeout(() => {
                // Redirigir a WhatsApp
                const whatsappUrl = `https://wa.me/593995832788?text=${response.redirect}`;
                window.open(whatsappUrl, '_blank');
                setIsOpen(false);
            }, 1500);
        }, 2000);
    };

    if (!isOpen) {
        return (
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
                
                {/* Tooltip */}
                <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-90">
                    ¿Necesitas ayuda? ¡Chatea con nosotros!
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-gray-200">
                {/* Header del chat */}
                <div className="bg-[#60BEC3] text-white p-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                            <Bot className="w-5 h-5 text-[#60BEC3]" />
                        </div>
                        <div>
                            <div className="font-semibold text-sm">PodoClinic Chat</div>
                            <div className="text-xs opacity-90 flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                                En línea
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-200 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Área de mensajes */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    {/* Mensaje inicial del bot */}
                    <div className="flex items-start mb-4">
                        <div className="w-8 h-8 bg-[#60BEC3] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                            <p className="text-sm text-gray-800">
                                {chatSteps[0].message}
                            </p>
                        </div>
                    </div>

                    {/* Opciones rápidas */}
                    <div className="space-y-2 mb-4">
                        {chatSteps[0].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="w-full text-left bg-white border border-[#60BEC3] text-[#60BEC3] rounded-lg p-2 text-sm hover:bg-[#60BEC3] hover:text-white transition-colors"
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {/* Indicador de typing */}
                    {showTyping && (
                        <div className="flex items-start mb-4">
                            <div className="w-8 h-8 bg-[#60BEC3] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>Respuesta en menos de 2 minutos</span>
                    </div>
                    <div className="text-xs text-gray-400 text-center">
                        Powered by WhatsApp Business
                    </div>
                </div>
            </div>
        </div>
    );
}