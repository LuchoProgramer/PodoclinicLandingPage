"use client";

import Image from "next/image";
import { useState } from "react";

// Array de servicios con nombre, descripción e imagen
const servicios = [
    {
        nombre: "Profilaxis Podal",
        descripcion:
            "Incluye limpieza profunda, corte anatómico de uñas, limpieza de canales ungueales, eliminación de callosidades, hidratación y masoterapia.",
        imagen: "https://www.clinicaplanas.com/blog/wp-content/cuidado-pies-1024x618.png.webp",
    },
    {
        nombre: "Tratamientos para los Hongos",
        descripcion:
            "Profilaxis podal para uñas con hongos, limpieza profunda, desinfección y uso de productos antifúngicos especializados.",
        imagen: "/images/hongos.jpg",
    },
    {
        nombre: "Tratamientos para los Uñeros",
        descripcion:
            "Eliminación de la presión de la uña, tratamiento de infecciones y corrección del crecimiento para prevenir molestias.",
        imagen: "/images/uñeros.jpg",
    },
    {
        nombre: "Cauterización de Verrugas Plantares",
        descripcion:
            "Uso de ácidos específicos para eliminar verrugas plantares, promoviendo una recuperación rápida y evitando infecciones futuras.",
        imagen: "/images/verrugas.jpg",
    },
    {
        nombre: "Spa Podal",
        descripcion:
            "Relaja y revitaliza tus pies con masajes, reflexología y parafina hidratante. Disfruta un cuidado podal integral que transforma tu bienestar.",
        imagen: "/images/spa.jpg",
    },
];

export default function Servicios() {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Nuestros Servicios</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl p-6 text-center
                         transition duration-300 transform hover:shadow-2xl 
                         cursor-pointer group relative"
                        >
                            {/* Imagen del servicio */}
                            <Image
                                src={servicio.imagen}
                                alt={servicio.nombre}
                                width={400}      // Ajusta el ancho según tus necesidades
                                height={250}     // Ajusta la altura según tus necesidades
                                className="object-cover w-full h-auto mb-4 rounded-md"
                            />

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {servicio.nombre}
                            </h3>

                            <div
                                className="
                  overflow-hidden 
                  h-0 
                  group-hover:h-auto 
                  transition-all 
                  duration-300 
                  ease-in-out
                "
                            >
                                <p className="text-gray-700 text-sm mt-2">
                                    {servicio.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}