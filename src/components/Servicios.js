"use client";

import { useState } from "react";

// Array de servicios con nombre y descripción
const servicios = [
    {
        nombre: "Profilaxis Podal",
        descripcion:
            "Incluye limpieza profunda, corte anatómico de uñas, limpieza de canales ungueales, eliminación de callosidades, hidratación y masoterapia.",
    },
    {
        nombre: "Corte Anatómico de Uñas",
        descripcion:
            "Técnica especializada que sigue el contorno natural de la uña para promover un crecimiento saludable y prevenir uñas encarnadas.",
    },
    {
        nombre: "Tratamientos para los Hongos",
        descripcion:
            "Profilaxis podal para uñas con hongos, limpieza profunda, desinfección y uso de productos antifúngicos especializados.",
    },
    {
        nombre: "Tratamientos para los Uñeros",
        descripcion:
            "Eliminación de la presión de la uña, tratamiento de infecciones y corrección del crecimiento para prevenir molestias.",
    },
    {
        nombre: "Cauterización de Verrugas Plantares",
        descripcion:
            "Uso de ácidos específicos para eliminar verrugas plantares, promoviendo una recuperación rápida y evitando infecciones futuras.",
    },
    {
        nombre: "Reflexología",
        descripcion:
            "Terapia que aplica presión en puntos específicos de los pies para aliviar molestias, mejorar la circulación y promover el bienestar general.",
    },
    {
        nombre: "Hidratación con Parafina",
        descripcion:
            "Tratamiento con cera caliente para suavizar la piel de los pies, nutriendo en profundidad y mejorando la circulación.",
    },
    {
        nombre: "Eliminación de Callosidades",
        descripcion:
            "Suavización y eliminación del exceso de piel dura en los pies para mejorar la comodidad y prevenir molestias.",
    },
    {
        nombre: "Elaboración de Ortesis",
        descripcion:
            "Dispositivos personalizados para corregir deformidades, aliviar el dolor y mejorar la funcionalidad de los pies.",
    },
    {
        nombre: "Masoterapia",
        descripcion:
            "Masajes terapéuticos para aliviar tensiones musculares, mejorar la circulación y reducir el estrés en los pies.",
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
                            {/* Aquí podrías colocar un ícono representativo de cada servicio, por ejemplo: */}
                            {/*
              <div className="mb-3 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M..." />
                </svg>
              </div>
              */}

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {servicio.nombre}
                            </h3>

                            {/* 
                Efecto "desplegable": en reposo, altura 0. 
                Con hover, automáticamente crece y muestra la descripción.
              */}
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