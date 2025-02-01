"use client";

import { useState } from "react";

const servicios = [
    {
        nombre: "Profilaxis Podal",
        descripcion: "Incluye limpieza profunda, corte anatómico de uñas, limpieza de canales ungueales, eliminación de callosidades, hidratación y masoterapia.",
    },
    {
        nombre: "Corte Anatómico de Uñas",
        descripcion: "Técnica especializada que sigue el contorno natural de la uña para promover un crecimiento saludable y prevenir uñas encarnadas.",
    },
    {
        nombre: "Tratamientos para los Hongos",
        descripcion: "Profilaxis podal para uñas con hongos, limpieza profunda, desinfección y uso de productos antifúngicos especializados.",
    },
    {
        nombre: "Tratamientos para los Uñeros",
        descripcion: "Eliminación de la presión de la uña, tratamiento de infecciones y corrección del crecimiento para prevenir molestias.",
    },
    {
        nombre: "Cauterización de Verrugas Plantares",
        descripcion: "Uso de ácidos específicos para eliminar verrugas plantares, promoviendo una recuperación rápida y evitando infecciones futuras.",
    },
    {
        nombre: "Reflexología",
        descripcion: "Terapia que aplica presión en puntos específicos de los pies para aliviar molestias, mejorar la circulación y promover el bienestar general.",
    },
    {
        nombre: "Hidratación con Parafina",
        descripcion: "Tratamiento con cera caliente para suavizar la piel de los pies, nutriendo en profundidad y mejorando la circulación.",
    },
    {
        nombre: "Eliminación de Callosidades",
        descripcion: "Suavización y eliminación del exceso de piel dura en los pies para mejorar la comodidad y prevenir molestias.",
    },
    {
        nombre: "Elaboración de Ortesis",
        descripcion: "Dispositivos personalizados para corregir deformidades, aliviar el dolor y mejorar la funcionalidad de los pies.",
    },
    {
        nombre: "Masoterapia",
        descripcion: "Masajes terapéuticos para aliviar tensiones musculares, mejorar la circulación y reducir el estrés en los pies.",
    },
];

export default function Servicios() {
    const [activo, setActivo] = useState(null);

    const toggleServicio = (index) => {
        setActivo(activo === index ? null : index);
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Nuestros Servicios</h2>
                <ul className="space-y-4">
                    {servicios.map((servicio, index) => (
                        <li key={index} className="bg-white shadow-md rounded-lg">
                            <button
                                onClick={() => toggleServicio(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-200 transition"
                            >
                                {servicio.nombre}
                                <span className="text-gray-600">{activo === index ? "▲" : "▼"}</span>
                            </button>
                            {activo === index && (
                                <div className="px-6 pb-4 text-gray-600">{servicio.descripcion}</div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}