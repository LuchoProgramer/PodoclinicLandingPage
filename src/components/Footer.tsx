"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    // Handler para tracking de enlaces del footer
    const handleFooterLinkClick = (linkName: string) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_footer_link", {
                event_category: "seo",
                event_label: `Footer: ${linkName}`,
                value: 1
            });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Información de contacto */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#60BEC3]">
                            PodoClinic
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Especialistas en podología. Cristina Muñoz, 5 años de experiencia especializada en Quito Norte.
                        </p>
                        
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center text-gray-300">
                                <Phone className="w-4 h-4 mr-2 text-[#60BEC3]" />
                                <a 
                                    href="tel:+593995832788" 
                                    className="hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Teléfono")}
                                >
                                    +593 99 583 2788
                                </a>
                            </div>
                            
                            <div className="flex items-center text-gray-300">
                                <Mail className="w-4 h-4 mr-2 text-[#60BEC3]" />
                                <a 
                                    href="mailto:contacto@podoclinicec.com" 
                                    className="hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Email")}
                                >
                                    contacto@podoclinicec.com
                                </a>
                            </div>
                            
                            <div className="flex items-start text-gray-300">
                                <MapPin className="w-4 h-4 mr-2 mt-1 text-[#60BEC3] flex-shrink-0" />
                                <span>Manuel Jordan y Av La Florida, Quito Norte</span>
                            </div>
                            
                            <div className="flex items-center text-gray-300">
                                <Clock className="w-4 h-4 mr-2 text-[#60BEC3]" />
                                <span>Lun-Vie 8:00-18:00 | Sáb 8:00-14:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Servicios principales */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#60BEC3]">
                            Servicios
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link 
                                    href="/servicios/uneros" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Tratamiento Uñeros")}
                                >
                                    Tratamiento de Uñeros
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/servicios/pie-diabetico" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Tratamientos prevención pie diabético")}
                                >
                                    Tratamientos prevención pie diabético
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/servicios/hongos" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Tratamiento Hongos")}
                                >
                                    Tratamiento de Hongos
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/servicios/profilaxis" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Profilaxis Podal")}
                                >
                                    Profilaxis Podal
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/servicios/domicilio" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Atención Domicilio")}
                                >
                                    Atención a Domicilio
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Zonas de atención */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#60BEC3]">
                            Zonas de Atención
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link 
                                    href="/blog/local/podologo-la-florida-quito-norte" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("La Florida")}
                                >
                                    Podólogo La Florida
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/podologia-runners" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Runners")}
                                >
                                    Podología para Runners
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/podologia-quito-norte" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Quito Norte")}
                                >
                                    Podología Quito Norte
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/podologo-en-quito" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Podólogo Quito")}
                                >
                                    Podólogo en Quito
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/uneros-quito" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Uñeros Quito")}
                                >
                                    Uñeros Quito
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Blog y recursos */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#60BEC3]">
                            Recursos
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link 
                                    href="/blog" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Blog")}
                                >
                                    Blog de Podología
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/tips" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Tips")}
                                >
                                    Tips de Cuidado
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/faq" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("FAQ")}
                                >
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/tips/uneros" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Tips Uñeros")}
                                >
                                    Prevenir Uñeros
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/tips/verano" 
                                    className="text-gray-300 hover:text-[#60BEC3] transition-colors"
                                    onClick={() => handleFooterLinkClick("Tips Verano")}
                                >
                                    Cuidados de Verano
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p>&copy; {currentYear} PodoClinic - Cristina Muñoz. Todos los derechos reservados.</p>
                            <p className="mt-1">
                                Podólogo certificado en Quito Norte | Tratamientos especializados para prevención de pie diabético
                            </p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://wa.me/593995832788" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#60BEC3] transition-colors"
                                onClick={() => handleFooterLinkClick("WhatsApp Footer")}
                            >
                                WhatsApp
                            </a>
                            <a 
                                href="https://www.facebook.com/podoclinicec" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#60BEC3] transition-colors"
                                onClick={() => handleFooterLinkClick("Facebook Footer")}
                            >
                                Facebook
                            </a>
                            <a 
                                href="https://www.instagram.com/podoclinicec" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#60BEC3] transition-colors"
                                onClick={() => handleFooterLinkClick("Instagram Footer")}
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}