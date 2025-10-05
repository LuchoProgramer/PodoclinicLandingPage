"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Clock, BookOpen, Home, Stethoscope, User, MessageCircle } from "lucide-react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("inicio");

    // Detectar sección activa
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["inicio", "servicios", "doctora", "contacto"];
            const current = sections.find(section => {
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

    // Función para smooth scroll
    const scrollToSection = (sectionId) => {
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
    const trackNavClick = (section) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_desktop_nav", {
                event_category: "navigation",
                event_label: section
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
                    <button
                        onClick={() => {
                            scrollToSection("inicio");
                            trackNavClick("logo");
                        }}
                        className="hover:opacity-80 transition-opacity"
                    >
                        <img
                            src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1738695404/podoclinic_navbar_landing_page_bcwytb.png"
                            alt="PodoClinic"
                            className="h-12 w-auto object-contain"
                        />
                    </button>
                    
                    {/* Navegación central - Solo Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => {
                                scrollToSection("inicio");
                                trackNavClick("inicio");
                            }}
                            className={`flex items-center space-x-2 font-medium transition-colors ${
                                activeSection === "inicio" 
                                    ? "text-[#60BEC3]" 
                                    : "text-gray-700 hover:text-[#60BEC3]"
                            }`}
                        >
                            <Home className="w-4 h-4" />
                            <span>Inicio</span>
                        </button>

                        <button
                            onClick={() => {
                                scrollToSection("servicios");
                                trackNavClick("servicios");
                            }}
                            className={`flex items-center space-x-2 font-medium transition-colors ${
                                activeSection === "servicios" 
                                    ? "text-[#60BEC3]" 
                                    : "text-gray-700 hover:text-[#60BEC3]"
                            }`}
                        >
                            <Stethoscope className="w-4 h-4" />
                            <span>Servicios</span>
                        </button>
                        
                        <Link 
                            href="/blog"
                            className="flex items-center space-x-2 text-gray-700 hover:text-[#60BEC3] font-medium transition-colors"
                            onClick={() => trackNavClick("blog")}
                        >
                            <BookOpen className="w-4 h-4" />
                            <span>Blog</span>
                        </Link>

                        <button
                            onClick={() => {
                                scrollToSection("doctora");
                                trackNavClick("doctora");
                            }}
                            className={`flex items-center space-x-2 font-medium transition-colors ${
                                activeSection === "doctora" 
                                    ? "text-[#60BEC3]" 
                                    : "text-gray-700 hover:text-[#60BEC3]"
                            }`}
                        >
                            <User className="w-4 h-4" />
                            <span>Doctora</span>
                        </button>

                        <button
                            onClick={() => {
                                scrollToSection("contacto");
                                trackNavClick("contacto");
                            }}
                            className={`flex items-center space-x-2 font-medium transition-colors ${
                                activeSection === "contacto" 
                                    ? "text-[#60BEC3]" 
                                    : "text-gray-700 hover:text-[#60BEC3]"
                            }`}
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>Contacto</span>
                        </button>
                    </div>
                    
                    {/* Botón de emergencia */}
                    <a
                        href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20emergencia%20podológica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center shadow-md"
                        onClick={() => trackNavClick("emergencia_desktop")}
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