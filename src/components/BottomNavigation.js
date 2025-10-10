"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();
    
    // Detectar si estamos en una página del blog
    const isOnBlogPage = pathname.startsWith('/blog');

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
            isLink: isOnBlogPage,
            href: isOnBlogPage ? "/#inicio" : undefined,
            action: isOnBlogPage ? undefined : () => {
                scrollToSection("inicio");
                trackNavClick("inicio");
            }
        },
        {
            id: "servicios", 
            label: "Servicios",
            icon: Stethoscope,
            isLink: isOnBlogPage,
            href: isOnBlogPage ? "/#servicios" : undefined,
            action: isOnBlogPage ? undefined : () => {
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
            isLink: isOnBlogPage,
            href: isOnBlogPage ? "/#doctora" : undefined,
            action: isOnBlogPage ? undefined : () => {
                scrollToSection("doctora");
                trackNavClick("doctora");
            }
        },
        {
            id: "contacto",
            label: "Contacto",
            icon: MessageCircle,
            isLink: isOnBlogPage,
            href: isOnBlogPage ? "/#contacto" : undefined,
            action: isOnBlogPage ? undefined : () => {
                scrollToSection("contacto");
                trackNavClick("contacto");
            }
        }
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
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

            {/* Botón flotante de WhatsApp para móviles */}
            <a
                                href="https://wa.me/593995832788?text=¡Hola!%20👋%20Vi%20su%20página%20y%20me%20interesa%20agendar%20una%20consulta%20podológica."
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.gtag) {
                                        window.gtag("event", "click_whatsapp", {
                                            event_category: "contact",
                                            event_label: "BottomNavigation WhatsApp"
                                        });
                                    }
                                    if (typeof trackNavClick === "function") {
                                        trackNavClick("whatsapp_mobile");
                                    }
                                }}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-12 right-4 bg-gradient-to-r from-[#1EBE5D] to-[#128C7E] hover:from-[#16A049] hover:to-[#0F7A6B] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                // onClick eliminado porque ya está combinado arriba
                aria-label="Contactar por WhatsApp"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                
                {/* Badge de "Disponible" */}
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full border border-white shadow-sm">
                    ●
                </div>
            </a>
        </nav>
    );
}