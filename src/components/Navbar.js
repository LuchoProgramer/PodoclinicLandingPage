"use client"; // Indica que este es un componente del cliente

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white shadow-md p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <img src="/logo.png" alt="PodoClinic" className="h-10" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>

                {/* Botón de Reserva */}
                <Link href="/reserva" className="hidden md:block bg-[#60BEC3] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#79A373] transition">
                    Reserva tu cita
                </Link>

                {/* Menú Móvil */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4">
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                    <li><Link href="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link></li>
                    <li><Link href="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
                    <li>
                        <Link href="/reserva" className="bg-[#60BEC3] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#79A373] transition">
                            Reserva tu cita
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}