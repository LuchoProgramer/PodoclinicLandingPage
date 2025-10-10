"use client";

import { 
    MapPin, 
    Phone, 
    Clock, 
    Mail,
    ExternalLink,
    MessageCircle,
    Calendar,
    Navigation
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function LocationHub() {
    const contactInfo = {
        address: "Manuel Jordan y Av La Florida, Quito",
        phone: "+593 995 832 788",
        email: "info@podoclinic.ec",
        hours: {
            weekdays: "Lunes - Viernes: 8:00 - 18:00",
            weekend: "Sábado: 8:00 - 14:00",
            sunday: "Domingo: Cerrado"
        },
        socialMedia: [
            {
                name: "WhatsApp",
                icon: FaWhatsapp,
                url: "https://wa.me/593995832788?text=¡Hola!%20Quiero%20información%20sobre%20sus%20servicios",
                color: "hover:bg-green-500",
                primary: true
            },
            {
                name: "Facebook",
                icon: FaFacebook,
                url: "https://www.facebook.com/podoclinic.cm",
                color: "hover:bg-blue-600"
            },
            {
                name: "Instagram", 
                icon: FaInstagram,
                url: "https://www.instagram.com/podoclinic.ec/",
                color: "hover:bg-pink-500"
            },
            {
                name: "TikTok",
                icon: FaTiktok,
                url: "https://www.tiktok.com/@podoclinic.ec?_t=ZM-90GpQu43MBE&_r=1",
                color: "hover:bg-black"
            }
        ]
    };

    const handleGetDirections = () => {
        const address = encodeURIComponent(contactInfo.address);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
        window.open(mapsUrl, '_blank');
        
        // Track direcciones
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "get_directions", {
                event_category: "engagement",
                event_label: "Location Hub"
            });
        }
    };

    return (
        <section id="contacto" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        Ubicación y Contacto
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Visítanos en <span className="text-[#60BEC3]">Quito</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Encuentra fácilmente nuestra clínica y conoce todas las formas 
                        de contactarnos para tu comodidad
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Mapa Premium */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8!2d-78.495641!3d-0.143093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDgnMzUuMSJTIDc4wrAyOSc0NC4zIlc!5e0!3m2!1ses!2sec!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                        </div>
                        
                        {/* Overlay del mapa */}
                        <div className="p-6 bg-gradient-to-r from-[#60BEC3] to-[#4A9DB8] text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg mb-1">PodoClinic</h3>
                                    <p className="text-sm opacity-90">{contactInfo.address}</p>
                                </div>
                                <button
                                    onClick={handleGetDirections}
                                    className="bg-white text-[#60BEC3] px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center"
                                >
                                    <Navigation className="w-4 h-4 mr-2" />
                                    Cómo llegar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Información de Contacto */}
                    <div className="space-y-6">
                        {/* Información Principal */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <Phone className="w-6 h-6 text-[#60BEC3] mr-3" />
                                Información de Contacto
                            </h3>
                            
                            <div className="space-y-4">
                                {/* Dirección */}
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-[#60BEC3] mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-800">Dirección</p>
                                        <p className="text-gray-600">{contactInfo.address}</p>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="flex items-start">
                                    <Phone className="w-5 h-5 text-[#60BEC3] mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-800">Teléfono</p>
                                        <a 
                                            href={`tel:${contactInfo.phone}`}
                                            className="text-[#60BEC3] hover:text-[#4A9DB8] transition-colors"
                                        >
                                            {contactInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <Mail className="w-5 h-5 text-[#60BEC3] mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-gray-800">Email</p>
                                        <a 
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-[#60BEC3] hover:text-[#4A9DB8] transition-colors"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Horarios */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <Clock className="w-6 h-6 text-[#60BEC3] mr-3" />
                                Horarios de Atención
                            </h3>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-700">Lunes - Viernes</span>
                                    <span className="font-medium text-gray-800">8:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-700">Sábado</span>
                                    <span className="font-medium text-gray-800">8:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-700">Domingo</span>
                                    <span className="text-red-600 font-medium">Cerrado</span>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociales */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Síguenos en Redes Sociales
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {contactInfo.socialMedia.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center bg-gray-100 ${social.color} text-gray-700 hover:text-white p-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${social.primary ? 'col-span-2 bg-green-50 border border-green-200' : ''}`}
                                            onClick={() => {
                                                // Track social media clicks
                                                if (typeof window !== "undefined" && window.gtag) {
                                                    window.gtag("event", "social_click", {
                                                        event_category: "engagement",
                                                        event_label: social.name
                                                    });
                                                }
                                            }}
                                        >
                                            <IconComponent className="w-6 h-6 mr-3" />
                                            <span className="font-medium">{social.name}</span>
                                            {social.primary && (
                                                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                                                    Preferido
                                                </span>
                                            )}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTAs de Refuerzo */}
                        <div className="bg-gradient-to-r from-[#60BEC3] to-[#4A9DB8] rounded-2xl shadow-xl p-8 text-white text-center">
                            <h3 className="text-xl font-bold mb-4">
                                ¿Listo para cuidar tus pies?
                            </h3>
                            <p className="mb-6 opacity-90">
                                Agenda tu cita o haz nuestra evaluación gratuita
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://wa.me/593995832788?text=¡Hola!%20Quiero%20agendar%20una%20cita"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-[#60BEC3] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                                    onClick={() => {
                                        if (typeof window !== "undefined" && window.gtag) {
                                            window.gtag("event", "click_whatsapp", {
                                                event_category: "contact",
                                                event_label: "LocationHub Agendar Cita"
                                            });
                                        }
                                    }}
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Agendar Cita
                                </a>
                                <button
                                    onClick={() => {
                                        const quizSection = document.querySelector('[data-section="quiz"]');
                                        if (quizSection) {
                                            quizSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-30 transition-colors flex items-center justify-center"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Hacer Evaluación
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}