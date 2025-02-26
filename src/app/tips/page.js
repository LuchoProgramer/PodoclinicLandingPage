"use client";

import Link from "next/link";

export default function TipsPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Tips y Cuestionarios para tus Pies</h1>

            {/* Sección de Tips */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">🦶💡 5 Tips para evitar los uñeros (uñas encarnadas)</h2>
                <ul className="space-y-4 text-gray-700">
                    <li>
                        <span className="font-bold">1️⃣ Corta tus uñas de forma recta:</span> ✂️ Evita redondearlas para prevenir que crezcan hacia la piel.
                    </li>
                    <li>
                        <span className="font-bold">2️⃣ Usa calzado cómodo y amplio:</span> 👟 Evita zapatos apretados que presionen tus dedos.
                    </li>
                    <li>
                        <span className="font-bold">3️⃣ Mantén tus pies secos y limpios:</span> 🚿 La humedad favorece infecciones y uñeros.
                    </li>
                    <li>
                        <span className="font-bold">4️⃣ No cortes la piel alrededor de las uñas:</span> 🚫 Esto puede provocar que la uña se entierre.
                    </li>
                    <li>
                        <span className="font-bold">5️⃣ Evita arrancar los bordes de las uñas:</span> ❌ Usa cortaúñas y lima para un recorte seguro.
                    </li>
                </ul>
                <p className="mt-4 text-gray-600">
                    👣 <span className="font-semibold">¿Sientes molestias?</span> Consúltanos.
                    Habla con nuestro <Link href="/" className="text-primary hover:underline">chatbot asistido por IA 🤖</Link>
                    en nuestra landing page para resolver tus dudas y agendar tu cita fácilmente. ¡Tu bienestar está a un clic de distancia! 👣✨
                </p>
            </section>

            {/* Enlace al cuestionario */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">¿Quieres saber si estás en riesgo?</h2>
                <p className="text-gray-600 mb-4">
                    Responde nuestro cuestionario sobre prevención de uñeros y descubre cómo cuidar mejor tus pies.
                </p>
                <Link href="/cuestionarios" className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors">
                    Ir al Cuestionario
                </Link>
            </section>
        </div>
    );
}