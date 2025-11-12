"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Clock, BookOpen, Home, Stethoscope, User, MessageCircle } from "lucide-react";
import { NavbarProps } from "@/types";

// Declaración del tipo para gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

export default function Navbar({ activeSection: propActiveSection }: NavbarProps = {}) {
    const [activeSection, setActiveSection] = useState<string>("inicio");
    const pathname = usePathname();
    
    // Detectar si estamos en una página del blog
    const isOnBlogPage: boolean = pathname.startsWith('/blog');

    // Detectar sección activa
    useEffect(() => {
        const handleScroll = (): void => {
            const sections: string[] = ["inicio", "servicios", "doctora", "contacto"];
            const current = sections.find((section: string) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Usar activeSection de props si está disponible
    const currentActiveSection = propActiveSection || activeSection;

    // Función para smooth scroll
    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = sectionId === "inicio" ? 0 : element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    // Tracking para analytics
    const trackNavClick = (section: string): void => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_desktop_nav", {
                event_category: "navigation",
                event_label: section
            });
        }
    };

    // Tracking para teléfono
    const trackPhoneClick = (label: string): void => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_phone", {
                event_category: "contact",
                event_label: label
            });
        }
    };

    // Tracking para WhatsApp
    const trackWhatsAppClick = (label: string): void => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_whatsapp", {
                event_category: "contact",
                event_label: label
            });
        }
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            {/* Barra superior con info de contacto */}
            <div className="bg-[#60BEC3] text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="hidden sm:inline">Lun-Vie 8:00-18:00 | Sáb 8:00-14:00</span>
                            <span className="sm:hidden">L-V 8-18h | S 8-14h</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a 
                            href="tel:+593995832788"
                            className="flex items-center hover:text-blue-100 transition-colors"
                            onClick={() => trackPhoneClick("Navbar Barra Superior Teléfono")}
                        >
                            <Phone className="w-4 h-4 mr-1" />
                            <span className="font-medium">099 583 2788</span>
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Navbar principal */}
            <div className="bg-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link
                        href="/"
                        className="hover:opacity-80 transition-opacity"
                        onClick={() => trackNavClick("logo")}
                    >
                        <img
                            src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1738695404/podoclinic_navbar_landing_page_bcwytb.png"
                            alt="PodoClinic Quito Norte - Podólogo especialista uñeros pie diabético La Florida"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                    
                    {/* Navegación central - Solo Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            onClick={() => trackNavClick("inicio")}
                            className="flex items-center space-x-2 font-medium text-gray-700 hover:text-[#60BEC3] transition-colors"
                        >
                            <Home className="w-4 h-4" />
                            <span>Inicio</span>
                        </Link>

                        <Link
                            href="/#servicios"
                            onClick={() => trackNavClick("servicios")}
                            className="flex items-center space-x-2 font-medium text-gray-700 hover:text-[#60BEC3] transition-colors"
                        >
                            <Stethoscope className="w-4 h-4" />
                            <span>Servicios</span>
                        </Link>
                        
                        <Link 
                            href="/blog"
                            className="flex items-center space-x-2 text-gray-700 hover:text-[#60BEC3] font-medium transition-colors"
                            onClick={() => trackNavClick("blog")}
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>Blog</span>
                        </Link>

                        {isOnBlogPage ? (
                            <Link
                                href="/#doctora"
                                onClick={() => trackNavClick("doctora")}
                                className="flex items-center space-x-2 font-medium text-gray-700 hover:text-[#60BEC3] transition-colors"
                            >
                                <User className="w-4 h-4" />
                                <span>Podóloga</span>
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    scrollToSection("doctora");
                                    trackNavClick("doctora");
                                }}
                                className={`flex items-center space-x-2 font-medium transition-colors ${
                                    currentActiveSection === "doctora" 
                                        ? "text-[#60BEC3]" 
                                        : "text-gray-700 hover:text-[#60BEC3]"
                                }`}
                            >
                                <User className="w-4 h-4" />
                                <span>Podóloga</span>
                            </button>
                        )}

                        {isOnBlogPage ? (
                            <Link
                                href="/#contacto"
                                onClick={() => trackNavClick("contacto")}
                                className="flex items-center space-x-2 font-medium text-gray-700 hover:text-[#60BEC3] transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Contacto</span>
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    scrollToSection("contacto");
                                    trackNavClick("contacto");
                                }}
                                className={`flex items-center space-x-2 font-medium transition-colors ${
                                    currentActiveSection === "contacto" 
                                        ? "text-[#60BEC3]" 
                                        : "text-gray-700 hover:text-[#60BEC3]"
                                }`}
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Contacto</span>
                            </button>
                        )}
                    </div>
                    
                    {/* Botón de emergencia */}
                    <a
                        href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20emergencia%20podológica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center shadow-md"
                        onClick={() => {
                            trackWhatsAppClick("Navbar Emergencia Desktop");
                            trackNavClick("emergencia_desktop");
                        }}
                    >
                        <Phone className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Emergencia</span>
                        <span className="sm:hidden">SOS</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}