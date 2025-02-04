"use client";

import { useState } from "react";

export default function Cuestionarios() {
    const [showModal, setShowModal] = useState(false);
    const [currentTest, setCurrentTest] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const tests = [
        {
            id: 1,
            title: "Evaluación general de tus pies",
            description: "Descubre el estado de salud de tus pies.",
            questions: [
                { text: "¿Sientes dolor al caminar?", weight: 1 },
                { text: "¿Tienes durezas en los pies?", weight: 1 },
            ],
        },
        {
            id: 2,
            title: "Test para deportistas",
            description: "Evalúa si tus pies están listos para la actividad física.",
            questions: [
                { text: "¿Sientes molestias después de correr?", weight: 1 },
                { text: "¿Usas el calzado adecuado para deporte?", weight: 1 },
            ],
        },
        {
            id: 3,
            title: "Test para personas mayores",
            description: "Conoce si tus pies requieren atención especial.",
            questions: [
                { text: "¿Tienes dificultad para caminar largas distancias?", weight: 1 },
                { text: "¿Padeces diabetes u otros problemas?", weight: 2 },
            ],
        },
    ];

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

    const closeModal = () => {
        setShowModal(false);
        setCurrentTest(null);
    };

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
                            className="mt-6 bg-primary text-white px-4 py-2 rounded-lg shadow-md 
                         hover:bg-secondary transition-colors"
                        >
                            Hacer Test
                        </button>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-background p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        {showResult ? (
                            <>
                                <h2 className="text-xl font-bold">Resultado</h2>
                                <p className="mt-4">
                                    {score < 2
                                        ? "¡Todo bien! Sigue cuidando tus pies."
                                        : "Es un buen momento para agendar una cita en PodoClinic."}
                                </p>
                                <button
                                    onClick={closeModal}
                                    className="mt-6 bg-primary text-white px-4 py-2 rounded-lg shadow-md 
                             hover:bg-secondary transition-colors"
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
                                        className="bg-primary text-white px-4 py-2 rounded-lg shadow-md 
                               hover:bg-secondary transition-colors"
                                    >
                                        Sí
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(false)}
                                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-md 
                               hover:bg-gray-300 transition-colors"
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