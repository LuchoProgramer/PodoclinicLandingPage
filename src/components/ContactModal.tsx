"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { 
    X, 
    Phone, 
    User, 
    Stethoscope,
    MessageSquare,
    Calendar,
    Clock
} from "lucide-react";
import { ContactModalProps, ContactFormData } from "@/types";

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

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        // Tracking del envío del formulario
        if (typeof window !== "undefined") {
            // Google Analytics
            if (window.gtag) {
                window.gtag("event", "form_submit", {
                    event_category: "engagement",
                    event_label: "Formulario Contacto"
                });
            }
            
            // TikTok Pixel
            if (window.ttq) {
                window.ttq.track('CompleteRegistration', {
                    content_type: 'contact_form',
                    content_name: 'Contact Form Submit',
                    description: 'Usuario completó formulario de contacto'
                });
            }
            
            // Facebook Pixel
            if (window.fbq) {
                window.fbq('track', 'Lead', {
                    content_name: 'Contact Form'
                });
            }
        }

        // Crear mensaje para WhatsApp
        const whatsappMessage = `¡Hola! 👋

*Datos de contacto:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
• Servicio: ${formData.service}
• Mensaje: ${formData.message}

Enviado desde el formulario web 📝`;

        const whatsappLink = `https://wa.me/593995832788?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
        
        // Limpiar formulario y cerrar modal
        setFormData({ name: "", phone: "", service: "", message: "" });
        onClose();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-green-50 bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-100">
                {/* Header */}
                <div className="bg-[#60BEC3] text-white p-6 rounded-t-2xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Calendar className="w-6 h-6 mr-3" />
                            <div>
                                <h2 className="text-xl font-bold">¡Agenda tu cita!</h2>
                                <p className="text-sm opacity-90">Te contactaremos por WhatsApp</p>
                            </div>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-white hover:text-gray-200 transition-colors duration-200 hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Nombre */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <User className="w-4 h-4 mr-2 text-[#60BEC3]" />
                            Nombre completo *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#60BEC3] focus:border-transparent transition-all duration-200 shadow-sm"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-[#60BEC3]" />
                            Teléfono / WhatsApp *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#60BEC3] focus:border-transparent transition-all duration-200 shadow-sm"
                            placeholder="099 123 4567"
                        />
                    </div>

                    {/* Servicio */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Stethoscope className="w-4 h-4 mr-2 text-[#60BEC3]" />
                            ¿Qué necesitas? *
                        </label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#60BEC3] focus:border-transparent transition-all duration-200 shadow-sm"
                        >
                            <option value="">Selecciona un servicio</option>
                            <option value="Tratamiento de uñeros">Tratamiento de uñeros</option>
                            <option value="Cuidado pie diabético">Cuidado pie diabético</option>
                            <option value="Eliminación verrugas">Eliminación de verrugas</option>
                            <option value="Tratamiento hongos">Tratamiento de hongos</option>
                            <option value="Lesiones deportivas">Lesiones deportivas</option>
                            <option value="Consulta general">Consulta general</option>
                            <option value="Atención domicilio">Atención a domicilio</option>
                        </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2 text-[#60BEC3]" />
                            Cuéntanos más (opcional)
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#60BEC3] focus:border-transparent transition-all duration-200 shadow-sm resize-none"
                            placeholder="Describe tu situación o pregunta..."
                        />
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#60BEC3] hover:bg-[#4A9DB8] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
                        >
                            <FaWhatsapp className="w-5 h-5 mr-2" />
                            Enviar por WhatsApp
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center">
                            <Clock className="w-3 h-3 mr-1" />
                            Te contactaremos en máximo 30 minutos
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}