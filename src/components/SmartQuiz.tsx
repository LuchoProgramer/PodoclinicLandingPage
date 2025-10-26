"use client";

import { useState } from "react";
import { 
    Stethoscope, 
    CheckCircle, 
    AlertCircle, 
    Clock,
    ArrowRight,
    X,
    MessageCircle,
    Calendar,
    TrendingUp
} from "lucide-react";

interface AnswersType {
    [key: number]: number;
}

export default function SmartQuiz() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<AnswersType>({});
    const [showResult, setShowResult] = useState(false);

    // Quiz inteligente sobre salud podológica
    const quiz = {
        title: "¿Qué tan saludables están tus pies?",
        subtitle: "Evaluación rápida en 2 minutos",
        questions: [
            {
                id: 1,
                text: "¿Con qué frecuencia sientes dolor o molestias en los pies?",
                options: [
                    { text: "Nunca o casi nunca", score: 0 },
                    { text: "Ocasionalmente (1-2 veces por semana)", score: 2 },
                    { text: "Frecuentemente (3-4 veces por semana)", score: 4 },
                    { text: "Diariamente", score: 6 }
                ]
            },
            {
                id: 2,
                text: "¿Tienes alguno de estos problemas visibles?",
                options: [
                    { text: "Ninguno", score: 0 },
                    { text: "Callosidades o durezas", score: 2 },
                    { text: "Uñas encarnadas o deformadas", score: 4 },
                    { text: "Hongos, heridas o infecciones", score: 6 }
                ]
            },
            {
                id: 3,
                text: "¿Cómo se desgastan tus zapatos?",
                options: [
                    { text: "De manera uniforme", score: 0 },
                    { text: "Más de un lado que del otro", score: 3 },
                    { text: "Se desgastan muy rápido", score: 4 },
                    { text: "No me fijo en eso", score: 1 }
                ]
            },
            {
                id: 4,
                text: "¿Tienes diabetes, problemas circulatorios o sobrepeso?",
                options: [
                    { text: "No", score: 0 },
                    { text: "Sobrepeso leve", score: 2 },
                    { text: "Problemas circulatorios", score: 4 },
                    { text: "Diabetes", score: 6 }
                ]
            },
            {
                id: 5,
                text: "¿Cuándo fue tu última consulta con un podólogo?",
                options: [
                    { text: "Hace menos de 6 meses", score: 0 },
                    { text: "Hace 6-12 meses", score: 1 },
                    { text: "Hace más de 1 año", score: 3 },
                    { text: "Nunca he ido", score: 5 }
                ]
            }
        ]
    };

    const getTotalScore = (): number => {
        return Object.values(answers).reduce((sum: number, score: number) => sum + score, 0);
    };

    const getResult = () => {
        const score = getTotalScore();
        
        if (score >= 18) {
            return {
                level: "🔴 Atención Urgente",
                color: "from-red-500 to-red-600",
                bgColor: "from-red-50 to-red-100",
                title: "Tus pies necesitan atención profesional inmediata",
                description: "Los síntomas que presentas indican problemas que podrían empeorar sin tratamiento. Es importante actuar ahora para evitar complicaciones.",
                recommendations: [
                    "Consulta urgente con especialista",
                    "Evaluación completa de salud podológica",
                    "Posible tratamiento inmediato"
                ],
                cta: "Agendar Consulta Urgente",
                whatsappMessage: "¡Hola!%20El%20quiz%20indica%20que%20necesito%20atención%20podológica%20urgente.%20¿Pueden%20agendar%20una%20cita%20prioritaria?"
            };
        }
        
        if (score >= 10) {
            return {
                level: "🟡 Prevención Recomendada",
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-50", 
                title: "Es momento de cuidar mejor tus pies",
                description: "Aunque no hay emergencia, hay señales que indican que deberías tomar medidas preventivas para mantener tus pies saludables.",
                recommendations: [
                    "Consulta preventiva con podólogo",
                    "Evaluación de la pisada",
                    "Consejos de cuidado personalizado"
                ],
                cta: "Agendar Consulta Preventiva",
                whatsappMessage: "¡Hola!%20Hice%20el%20quiz%20y%20me%20recomiendan%20una%20consulta%20preventiva%20para%20cuidar%20mejor%20mis%20pies.%20¿Qué%20disponibilidad%20tienen?"
            };
        }
        
        return {
            level: "🟢 Pies Saludables",
            color: "from-green-500 to-green-600",
            bgColor: "from-green-50 to-green-100",
            title: "¡Excelente! Tus pies están en buen estado",
            description: "Mantienes buenos hábitos de cuidado podológico. Continúa así y considera consultas de mantenimiento anuales.",
            recommendations: [
                "Mantén tus buenos hábitos",
                "Consulta anual de mantenimiento",
                "Atención a cambios o molestias"
            ],
            cta: "Consultar Tips de Mantenimiento",
            whatsappMessage: "¡Hola!%20Mis%20pies%20están%20saludables%20según%20el%20quiz.%20¿Pueden%20darme%20consejos%20para%20mantenerlos%20así?"
        };
    };

    const handleAnswer = (questionId: number, score: number) => {
        setAnswers({...answers, [questionId]: score});
        
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
        setIsOpen(false);
    };

    const result = showResult ? getResult() : null;

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50" data-section="quiz">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header del Quiz */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Evaluación Gratuita
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {quiz.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {quiz.subtitle} • Obtén recomendaciones personalizadas
                    </p>
                    
                    {!isOpen && (
                        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#60BEC3] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-sm text-gray-600">Solo 2 minutos</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#60BEC3] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-sm text-gray-600">100% Gratuito</div>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-[#60BEC3] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-sm text-gray-600">Resultados inmediatos</div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => setIsOpen(true)}
                                className="w-full bg-gradient-to-r from-[#60BEC3] to-[#4A9DB8] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
                            >
                                Comenzar Evaluación
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Modal del Quiz */}
                {isOpen && (
                    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-green-50 bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {!showResult ? (
                                <>
                                    {/* Header del Modal */}
                                    <div className="bg-gradient-to-r from-[#60BEC3] to-[#4A9DB8] text-white p-6 rounded-t-2xl">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-bold">Evaluación de Salud Podológica</h3>
                                                <p className="text-sm opacity-90">
                                                    Pregunta {currentQuestion + 1} de {quiz.questions.length}
                                                </p>
                                            </div>
                                            <button 
                                                onClick={resetQuiz}
                                                className="text-white hover:text-gray-200 transition-colors hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
                                            <div 
                                                className="bg-white rounded-full h-2 transition-all duration-300"
                                                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Pregunta */}
                                    <div className="p-8">
                                        <h4 className="text-xl font-semibold text-gray-800 mb-6">
                                            {quiz.questions[currentQuestion].text}
                                        </h4>
                                        
                                        <div className="space-y-3">
                                            {quiz.questions[currentQuestion].options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleAnswer(quiz.questions[currentQuestion].id, option.score)}
                                                    className="w-full text-left bg-gray-50 hover:bg-[#60BEC3] hover:text-white border border-gray-200 rounded-xl p-4 transition-all duration-200 group"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span>{option.text}</span>
                                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : result && (
                                <>
                                    {/* Resultados */}
                                    <div className={`bg-gradient-to-r ${result.color} text-white p-6 rounded-t-2xl`}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">{result.level}</h3>
                                                <p className="text-sm opacity-90">Tu puntuación: {getTotalScore()}/25</p>
                                            </div>
                                            <button 
                                                onClick={resetQuiz}
                                                className="text-white hover:text-gray-200 transition-colors hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h4 className="text-xl font-bold text-gray-800 mb-4">
                                            {result.title}
                                        </h4>
                                        <p className="text-gray-600 mb-6">
                                            {result.description}
                                        </p>

                                        {/* Recomendaciones */}
                                        <div className={`bg-gradient-to-r ${result.bgColor} rounded-xl p-6 mb-6`}>
                                            <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                                                Recomendaciones Personalizadas:
                                            </h5>
                                            <ul className="space-y-2">
                                                {result.recommendations.map((rec, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <div className="w-2 h-2 bg-[#60BEC3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span className="text-gray-700 text-sm">{rec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href={`https://wa.me/593995832788?text=${result.whatsappMessage}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 bg-gradient-to-r ${result.color} text-white py-4 px-6 rounded-xl font-semibold text-center hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center`}
                                            >
                                                <MessageCircle className="w-5 h-5 mr-2" />
                                                {result.cta}
                                            </a>
                                            <button
                                                onClick={resetQuiz}
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-medium transition-colors"
                                            >
                                                Hacer Quiz Otra Vez
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}