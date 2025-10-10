"use client";

import { Mail, Phone, MapPin } from "lucide-react"; // Íconos de contacto
import { Facebook, Instagram, MessageCircle } from "lucide-react"; // Íconos de redes sociales

export default function InformacionContacto() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Ubicación y Contacto</h2>

                {/* Información de Contacto */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
                    <div className="flex items-center space-x-4">
                        <MapPin className="text-[#60BEC3] w-6 h-6" />
                        <p>Manuel Jordan y Av La Florida,</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="text-[#60BEC3] w-6 h-6" />
                                                <a href="tel:+593995832788" className="text-black hover:text-[#60BEC3] transition-colors"
                                                     onClick={() => {
                                                         if (typeof window !== "undefined" && window.gtag) {
                                                             window.gtag("event", "click_phone", {
                                                                 event_category: "contact",
                                                                 event_label: "InformacionContacto Teléfono"
                                                             });
                                                         }
                                                     }}>
                            +593 995 832 788
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Mail className="text-[#60BEC3] w-6 h-6" />
                        <a href="mailto:podoclinic.cm@gmail.com" className="text-black hover:text-[#60BEC3] transition-colors">
                            podoclinic.cm@gmail.com
                        </a>
                    </div>
                </div>

                {/* Mapa de Google Maps */}
                <div className="mt-8 w-full h-64 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Mapa PodoClinic"
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8058746057854!2d-78.4956488!3d-0.1431105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585189a3dc76f%3A0xd97cdfef3d8caf0f!2sPodoClinic%20EC!5e0!3m2!1sen!2sec!4v1738385872077!5m2!1sen!2sec"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                {/* Redes Sociales */}
                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="https://www.instagram.com/podoclinic.ec"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#60BEC3] p-3 rounded-full text-white shadow-md hover:bg-[#79A373] transition"
                    >
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.facebook.com/podoclinic.cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#60BEC3] p-3 rounded-full text-white shadow-md hover:bg-[#79A373] transition"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
}