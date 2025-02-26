"use client";

import { useState } from "react";
import Link from "next/link";
import { tests } from "../../data/tests"; // Ajusta la ruta según tu estructura

export default function TipsPage() {
    const [showModal, setShowModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const uneroTest = tests.find((t) => t.id === 4); // Cuestionario de "Prevención de Uñeros"

    const handleStartQuiz = () => {
        setShowModal(true);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const handleAnswer = (yes) => {
        if (yes) {
            setScore(score + uneroTest.questions[currentQuestion].weight);
        }
        if (currentQuestion + 1 < uneroTest.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const getRiskLevel = () => {
        if (score >= 8) {
            return {
                level: "🔴 Riesgo Alto",
                message: "Tus hábitos o condiciones podrían estar causando uñeros. Consulta a un especialista pronto.",
                action: "Agendar consulta gratuita",
            };
        }
        if (score >= 4) {
            return {
                level: "🟠 Riesgo Moderado",
                message: "Estás en riesgo de desarrollar uñeros. Revisa tus hábitos y considera una evaluación.",
                action: "Solicitar una evaluación",
            };
        }
        return {
            level: "🟢 Riesgo Bajo",
            message: "Tus pies están en buena forma. ¡Sigue estos tips para mantenerlos así!",
            action: null,
        };
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const result = getRiskLevel();

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

            {/* Sección de Cuestionario */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">¿Estás en riesgo de uñeros?</h2>
                <p className="text-gray-600 mb-4">
                    Responde este breve cuestionario y descubre cómo cuidar mejor tus pies.
                </p>
                <button
                    onClick={handleStartQuiz}
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors"
                >
                    Hacer el Cuestionario
                </button>
            </section>

            {/* Modal del Cuestionario */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        {showResult ? (
                            <>
                                <h2 className="text-xl font-bold">{result.level}</h2>
                                <p className="mt-4">{result.message}</p>
                                {result.action && (
                                    <button className="mt-6 bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors">
                                        {result.action}
                                    </button>
                                )}
                                <button
                                    onClick={closeModal}
                                    className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
                                >
                                    Cerrar
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold">{uneroTest.title}</h2>
                                <p className="text-lg mt-4">{uneroTest.questions[currentQuestion].text}</p>
                                <div className="flex justify-center space-x-4 mt-6">
                                    <button
                                        onClick={() => handleAnswer(true)}
                                        className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors"
                                    >
                                        Sí
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(false)}
                                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
                                    >
                                        No
                                    </button>
                                </div>
                            </>
                        )}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}