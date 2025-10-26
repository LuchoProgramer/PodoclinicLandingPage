"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Iconos para contacto
import { Facebook, Instagram, MessageCircle } from "lucide-react"; // Iconos redes sociales

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("¡Mensaje enviado con éxito!");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h2>
                <p className="text-lg text-gray-600 mb-6">
                    ¿Tienes dudas o quieres agendar una cita? Déjanos tu mensaje y te responderemos lo antes posible.
                </p>

                {/* Formulario de Contacto */}
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="p-3 border rounded-lg w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Correo electrónico"
                            className="p-3 border rounded-lg w-full"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono (Opcional)"
                        className="p-3 border rounded-lg w-full mt-4"
                    />
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        className="p-3 border rounded-lg w-full mt-4"
                        rows={4}
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-6 bg-[#60BEC3] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#79A373] transition"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}
