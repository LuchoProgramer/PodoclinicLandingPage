"use client";

import { useState } from "react";
import Link from "next/link";

export default function VeranoTipsPage() {
    const [showModal, setShowModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const summerTest = {
        id: "summer",
        title: "Test: ¿Estás cuidando bien tus pies este verano?",
        questions: [
            { text: "¿Caminas descalzo en la arena caliente con frecuencia?", weight: 1 },
            { text: "¿Sientes tus pies resecos después de un día en la playa?", weight: 1 },
            { text: "¿Te has quemado los pies por no usar protector solar?", weight: 2 },
            { text: "¿Dejas tus pies húmedos después de nadar sin secarlos bien?", weight: 2 },
            { text: "¿Tus uñas se han encarnado después de cortarlas mal este verano?", weight: 1 },
            { text: "¿Usas sandalias sin soporte que te causan molestias?", weight: 1 },
        ],
    };

    const whatsappNumber = "593995832788"; // Reemplaza con tu número real

    const handleStartQuiz = () => {
        setShowModal(true);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const handleAnswer = (yes: boolean) => {
        if (!summerTest) return;
        
        if (yes) {
            setScore(score + summerTest.questions[currentQuestion].weight);
        }
        if (currentQuestion + 1 < summerTest.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const getRiskLevel = () => {
        if (score >= 6) {
            return {
                level: "🔴 Riesgo Alto",
                message: "Tus pies están en riesgo este verano. ¡Es hora de cuidarlos mejor!",
                action: "Agendar consulta gratuita",
            };
        }
        if (score >= 3) {
            return {
                level: "🟠 Riesgo Moderado",
                message: "Podrías mejorar el cuidado de tus pies este verano.",
                action: "Solicitar una evaluación",
            };
        }
        return {
            level: "🟢 Riesgo Bajo",
            message: "¡Tus pies están listos para el verano! Sigue así.",
            action: null,
        };
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const result = getRiskLevel();

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Cuidado en Verano</h1>

            {/* Tips */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">☀️👣 5 Tips para cuidar tus pies este verano en la playa 🏖️</h2>
                <ul className="space-y-4 text-gray-700">
                    <li><span className="font-bold">1️⃣ Usa sandalias adecuadas:</span> 🩴 Evita caminar descalzo en la arena caliente para prevenir quemaduras y cortes.</li>
                    <li><span className="font-bold">2️⃣ Hidrata tus pies:</span> 🧴 Aplica crema humectante tras un día de sol para evitar resequedad.</li>
                    <li><span className="font-bold">3️⃣ Protégete del sol:</span> 🌞 Usa protector solar en tus pies para evitar quemaduras.</li>
                    <li><span className="font-bold">4️⃣ Sécalos bien:</span> 🚿 Después de nadar, seca entre los dedos para prevenir hongos.</li>
                    <li><span className="font-bold">5️⃣ Corta tus uñas correctamente:</span> ✂️ Rectas y no muy cortas para evitar encarnaciones.</li>
                </ul>
                <p className="mt-4 text-gray-600">
                    👣 <span className="font-semibold">¿Quieres más consejos?</span>
                    Agenda tu cita con nosotros para preparar tus pies para el verano.
                    <a href="https://wa.me/593995832788?text=Hola, me interesan los consejos para el cuidado de pies en verano" className="text-primary hover:underline">Consúltanos por WhatsApp 💬</a>. 😎✨
                </p>
            </section>

            {/* Cuestionario */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">¿Estás cuidando bien tus pies este verano?</h2>
                <p className="text-gray-600 mb-4">Responde este breve cuestionario y descubre cómo mejorar.</p>
                <button
                    onClick={handleStartQuiz}
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors"
                >
                    Hacer el Cuestionario
                </button>
            </section>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        {showResult ? (
                            <>
                                <h2 className="text-xl font-bold">{result.level}</h2>
                                <p className="mt-4">{result.message}</p>
                                {result.action && (
                                    <a
                                        href={`https://wa.me/${whatsappNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors inline-block"
                                    >
                                        {result.action}
                                    </a>
                                )}
                                <button
                                    onClick={closeModal}
                                    className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
                                >
                                    Cerrar
                                </button>
                            </>
                        ) : summerTest ? (
                            <>
                                <h2 className="text-xl font-bold">{summerTest.title}</h2>
                                <p className="text-lg mt-4">{summerTest.questions[currentQuestion].text}</p>
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
                        ) : (
                            <p>Error: No se pudo cargar el cuestionario.</p>
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