"use client";

import Link from "next/link";
import { Phone, Clock } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white shadow-md z-50">
            {/* Barra superior con info de contacto */}
            <div className="bg-[#60BEC3] text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Lun-Vie 8:00-18:00 | Sáb 8:00-14:00</span>
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
                    <Link href="/">
                        <img
                            src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1738695404/podoclinic_navbar_landing_page_bcwytb.png"
                            alt="PodoClinic"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                    
                    {/* Botón de emergencia */}
                    <a
                        href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20emergencia%20podológica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center"
                    >
                        <Phone className="w-4 h-4 mr-1" />
                        Emergencia
                    </a>
                </div>
            </div>
        </nav>
    );
}