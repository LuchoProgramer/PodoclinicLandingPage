"use client";

import { useState } from "react";
import { tests } from "../data/tests"; // Importamos los cuestionarios

export default function Cuestionarios() {
    const [showModal, setShowModal] = useState(false);
    const [currentTest, setCurrentTest] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Número de WhatsApp (ajusta este valor con tu número real)
    const whatsappNumber = "593995832788"; // Ejemplo: cambia por tu número con código de país

    const handleTestClick = (testId) => {
        setCurrentTest(testId);
        setShowModal(true);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };

    const handleAnswer = (yes) => {
        const test = tests.find((t) => t.id === currentTest);
        if (yes) {
            setScore(score + test.questions[currentQuestion].weight);
        }
        if (currentQuestion + 1 < test.questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const getRiskLevel = () => {
        if (score >= 5) {
            return {
                level: "🔴 Riesgo Alto",
                message: "Es importante que consultes con un especialista lo antes posible. Tu pisada o estructura del pie puede estar afectando tu salud.",
                action: "Agendar consulta gratuita",
            };
        }
        if (score >= 3) {
            return {
                level: "🟠 Riesgo Moderado",
                message: "Tienes algunos signos que podrían mejorar con una ortesis personalizada. Revisa tus hábitos y consulta con un experto.",
                action: "Solicitar una evaluación",
            };
        }
        return {
            level: "🟢 Riesgo Bajo",
            message: "Tus pies parecen estar en buena condición. Sigue cuidando tus uñas y pisada correctamente para evitar problemas en el futuro.",
            action: null,
        };
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentTest(null);
    };

    const result = getRiskLevel();

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Cuestionarios</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tests.map((test) => (
                    <div
                        key={test.id}
                        className="bg-background shadow-md rounded-lg p-6 text-center"
                    >
                        <h2 className="text-xl font-bold">{test.title}</h2>
                        <p className="mt-4 text-gray-600">{test.description}</p>
                        <button
                            onClick={() => handleTestClick(test.id)}
                            className="mt-6 bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors"
                        >
                            Hacer Test
                        </button>
                    </div>
                ))}
            </div>

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
                        ) : (
                            <>
                                <h2 className="text-xl font-bold">
                                    {tests.find((t) => t.id === currentTest).title}
                                </h2>
                                <p className="text-lg mt-4">
                                    {tests.find((t) => t.id === currentTest).questions[currentQuestion].text}
                                </p>
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