"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
    Home, 
    Stethoscope, 
    BookOpen, 
    User, 
    MessageCircle,
    Phone
} from "lucide-react";

export default function BottomNavigation() {
    const [activeSection, setActiveSection] = useState("inicio");

    // Detectar sección activa basado en scroll
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
            const offsetTop = sectionId === "inicio" ? 0 : element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
            setActiveSection(sectionId);
        }
    };

    // Tracking para analytics
    const trackNavClick = (section) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_bottom_nav", {
                event_category: "navigation",
                event_label: section
            });
        }
    };

    const navItems = [
        {
            id: "inicio",
            label: "Inicio",
            icon: Home,
            action: () => {
                scrollToSection("inicio");
                trackNavClick("inicio");
            }
        },
        {
            id: "servicios", 
            label: "Servicios",
            icon: Stethoscope,
            action: () => {
                scrollToSection("servicios");
                trackNavClick("servicios");
            }
        },
        {
            id: "blog",
            label: "Blog", 
            icon: BookOpen,
            isLink: true,
            href: "/blog"
        },
        {
            id: "doctora",
            label: "Doctora",
            icon: User,
            action: () => {
                scrollToSection("doctora");
                trackNavClick("doctora");
            }
        },
        {
            id: "contacto",
            label: "Contacto",
            icon: MessageCircle,
            action: () => {
                scrollToSection("contacto");
                trackNavClick("contacto");
            }
        }
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 shadow-lg">
            <div className="flex items-center justify-around py-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id || 
                        (item.id === "blog" && typeof window !== "undefined" && window.location.pathname.includes("/blog"));
                    
                    if (item.isLink) {
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`flex flex-col items-center py-1 px-2 min-w-0 flex-1 ${
                                    isActive 
                                        ? "text-[#60BEC3]" 
                                        : "text-gray-600 hover:text-[#60BEC3]"
                                } transition-colors`}
                                onClick={() => trackNavClick(item.label.toLowerCase())}
                            >
                                <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-[#60BEC3]" : ""}`} />
                                <span className="text-xs font-medium truncate">{item.label}</span>
                                {isActive && (
                                    <div className="w-4 h-0.5 bg-[#60BEC3] rounded-full mt-1"></div>
                                )}
                            </Link>
                        );
                    }

                    return (
                        <button
                            key={item.id}
                            onClick={item.action}
                            className={`flex flex-col items-center py-1 px-2 min-w-0 flex-1 ${
                                isActive 
                                    ? "text-[#60BEC3]" 
                                    : "text-gray-600 hover:text-[#60BEC3]"
                            } transition-colors`}
                        >
                            <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-[#60BEC3]" : ""}`} />
                            <span className="text-xs font-medium truncate">{item.label}</span>
                            {isActive && (
                                <div className="w-4 h-0.5 bg-[#60BEC3] rounded-full mt-1"></div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Botón flotante de emergencia */}
            <a
                href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20emergencia%20podológica"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-6 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
                onClick={() => trackNavClick("emergencia_bottom")}
            >
                <Phone className="w-5 h-5" />
            </a>
        </nav>
    );
}