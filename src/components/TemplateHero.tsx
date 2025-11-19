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
    MessageCircle,
    Activity
} from "lucide-react";
import { getTemplateConfig } from "@/config/template.config";

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

export default function TemplateHero() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const config = getTemplateConfig();

    // Handler para evento GA4 y TikTok
    const handleReservaClick = (): void => {
        // Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_reserva_cita", {
                event_category: "engagement",
                event_label: `Botón Hero ${config.hero.ctaPrimary.text}`
            });
        }
        
        // TikTok Pixel
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track('Contact', {
                content_type: 'cita_reserva',
                content_name: `${config.hero.ctaPrimary.text} Hero`,
                description: `Usuario hizo clic en ${config.hero.ctaPrimary.text} desde Hero`
            });
        }
        
        // Facebook Pixel
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Contact', {
                content_name: `${config.hero.ctaPrimary.text} Hero`,
                content_category: 'hero_cta'
            });
        }

        // Acciones según configuración
        switch (config.hero.ctaPrimary.action) {
            case 'modal':
                setIsModalOpen(true);
                break;
            case 'phone':
                window.location.href = `tel:${config.contact.phone}`;
                break;
            case 'whatsapp':
                window.open(`https://wa.me/${config.contact.whatsapp}`, '_blank');
                break;
            case 'contact':
                window.location.href = '/contacto';
                break;
        }
    };

    const handlePhoneClick = (): void => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_phone", {
                event_category: "engagement",
                event_label: "Botón Hero Llamar"
            });
        }
        
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track('Contact', {
                content_type: 'phone_call',
                content_name: 'Llamar Hero',
                description: 'Usuario hizo clic en llamar desde Hero'
            });
        }
    };

    const handleSecondaryClick = (): void => {
        if (!config.hero.ctaSecondary) return;
        
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_secondary_cta", {
                event_category: "engagement",
                event_label: `Hero ${config.hero.ctaSecondary.text}`
            });
        }

        switch (config.hero.ctaSecondary.action) {
            case 'services':
                window.location.href = '/servicios';
                break;
            case 'about':
                window.location.href = '/nosotros';
                break;
            case 'blog':
                window.location.href = '/blog';
                break;
        }
    };

    return (
        <>
            <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Contenido principal */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div 
                                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6"
                                style={{ 
                                    backgroundColor: `${config.branding.primaryColor}20`, 
                                    color: config.branding.primaryColor 
                                }}
                            >
                                <Stethoscope className="w-4 h-4 inline mr-1" />
                                {config.business.tagline}
                            </div>
                            
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
                                {config.hero.title.split(' ').slice(0, -2).join(' ')}
                                <span 
                                    className="block mt-2"
                                    style={{ color: config.branding.primaryColor }}
                                >
                                    {config.hero.title.split(' ').slice(-2).join(' ')}
                                </span>
                            </h1>
                            
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {config.hero.description}
                            </p>

                            {/* Badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8">
                                {config.hero.badges.map((badge, index) => (
                                    <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm">
                                        <span className="text-yellow-500 mr-1">
                                            {badge.includes('⭐') ? '⭐' : badge.includes('🏥') ? '🏥' : '🦶'}
                                        </span>
                                        <span className="text-gray-700 font-medium">
                                            {badge.replace(/⭐|🏥|🦶/g, '').trim()}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs principales */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                                <button
                                    onClick={handleReservaClick}
                                    className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 text-base sm:text-lg"
                                    style={{ backgroundColor: config.branding.primaryColor }}
                                >
                                    <CalendarDays className="w-5 h-5 inline mr-2" />
                                    {config.hero.ctaPrimary.text}
                                </button>
                                
                                <a
                                    href={`tel:${config.contact.phone}`}
                                    onClick={handlePhoneClick}
                                    className="px-6 sm:px-8 py-3 sm:py-4 text-gray-800 font-semibold rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 text-base sm:text-lg"
                                >
                                    <Phone className="w-5 h-5 inline mr-2" />
                                    Llamar Ahora
                                </a>

                                {config.hero.ctaSecondary && (
                                    <button
                                        onClick={handleSecondaryClick}
                                        className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl border-2 transition-all duration-300 text-base sm:text-lg"
                                        style={{ 
                                            borderColor: config.branding.secondaryColor,
                                            color: config.branding.secondaryColor
                                        }}
                                    >
                                        {config.hero.ctaSecondary.text}
                                    </button>
                                )}
                            </div>

                            {/* Quick Links */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                                {config.hero.quickLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.link}
                                        className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-2 sm:p-3 hover:shadow-lg transition-all duration-300 min-h-[70px] sm:min-h-[80px] flex flex-col justify-center"
                                        style={{ 
                                            '&:hover': { 
                                                borderColor: config.branding.primaryColor 
                                            } 
                                        }}
                                        onClick={() => {
                                            if (typeof window !== "undefined" && window.gtag) {
                                                window.gtag("event", "click_quick_link", {
                                                    event_category: "engagement",
                                                    event_label: `Hero ${link.title}`
                                                });
                                            }
                                        }}
                                    >
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl mb-1">{link.emoji}</div>
                                            <div className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">
                                                {link.title}
                                            </div>
                                            <div className="text-xs text-gray-600 mt-1">{link.description}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Panel de información */}
                        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                            <div 
                                className="rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4"
                                style={{ 
                                    backgroundColor: 'white',
                                    borderTopColor: config.branding.primaryColor
                                }}
                            >
                                <div className="text-center mb-6">
                                    <div 
                                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                                        style={{ backgroundColor: config.branding.primaryColor }}
                                    >
                                        <Activity className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                        {config.business.name}
                                    </h3>
                                    <p 
                                        className="font-semibold mb-4"
                                        style={{ color: config.branding.primaryColor }}
                                    >
                                        {config.business.tagline}
                                    </p>
                                </div>

                                {/* Información de contacto */}
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-center">
                                        <Phone className="w-4 h-4 mr-2" style={{ color: config.branding.primaryColor }} />
                                        <span className="text-sm font-medium">{config.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Clock className="w-4 h-4 mr-2" style={{ color: config.branding.primaryColor }} />
                                        <span className="text-sm">{config.contact.hours.weekdays}</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Home className="w-4 h-4 mr-2" style={{ color: config.branding.primaryColor }} />
                                        <span className="text-sm text-center">{config.contact.address.street}, {config.contact.address.city}</span>
                                    </div>
                                </div>

                                {/* Servicios destacados */}
                                <div className="space-y-3">
                                    <h4 className="text-lg font-bold text-center text-gray-800 mb-4">
                                        Servicios Principales
                                    </h4>
                                    {config.services.slice(0, 3).map((service, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                            <span className="text-2xl mr-3">{service.icon}</span>
                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-800 text-sm">{service.title}</div>
                                                <div className="text-xs text-gray-600">{service.description.substring(0, 60)}...</div>
                                                {service.price && (
                                                    <div 
                                                        className="text-xs font-semibold mt-1"
                                                        style={{ color: config.branding.primaryColor }}
                                                    >
                                                        {service.price}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal de contacto */}
            {config.hero.ctaPrimary.action === 'modal' && (
                <ContactModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                />
            )}
        </>
    );
}