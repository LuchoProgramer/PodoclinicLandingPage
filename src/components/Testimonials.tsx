"use client";

import { useState } from "react";
import { 
    Star, 
    Quote, 
    ChevronLeft, 
    ChevronRight,
    Users,
    Award,
    Clock,
    Shield
} from "lucide-react";

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Ana Martínez",
            age: "45 años",
            problem: "Uñeros recurrentes",
            text: "Sufrí con uñeros por años. Después del tratamiento con PodoClinicec, no he vuelto a tener problemas. El profesionalismo y cuidado son excepcionales.",
            rating: 5,
            verified: true
        },
        {
            name: "Carlos Mendoza",
            age: "62 años",
            problem: "Pie diabético",
            text: "Como diabético, el cuidado de mis pies es crucial. La Dra. Cristina es muy profesional y me ha enseñado técnicas de cuidado preventivo. Muy recomendado.",
            rating: 5,
            verified: true
        },
        {
            name: "María Elena Ruiz",
            age: "38 años",
            problem: "Verrugas plantares",
            text: "Tenía verrugas plantares que me impedían caminar bien. El tratamiento fue efectivo y sin dolor. Ahora puedo usar cualquier zapato sin molestias.",
            rating: 5,
            verified: true
        },
        {
            name: "Roberto Silva",
            age: "28 años",
            problem: "Lesión deportiva",
            text: "Como corredor, una lesión en el pie me tenía preocupado. El tratamiento especializado me permitió volver a entrenar más rápido de lo esperado.",
            rating: 5,
            verified: true
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentTestimonial];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Lo que dicen nuestros <span className="text-[#60BEC3]">pacientes</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Más de <strong>500 pacientes</strong> han recuperado la salud de sus pies con nosotros
                    </p>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <Users className="w-8 h-8 text-[#60BEC3]" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-[#60BEC3]">500+</div>
                        <div className="text-sm text-gray-600">Pacientes atendidos</div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <Award className="w-8 h-8 text-[#60BEC3]" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-[#60BEC3]">98%</div>
                        <div className="text-sm text-gray-600">Satisfacción</div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <Shield className="w-8 h-8 text-[#60BEC3]" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-[#60BEC3]">5+</div>
                        <div className="text-sm text-gray-600">Años experiencia</div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <Clock className="w-8 h-8 text-[#60BEC3]" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-[#60BEC3]">24h</div>
                        <div className="text-sm text-gray-600">Tiempo respuesta</div>
                    </div>
                </div>

                {/* Testimonio principal */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                        {/* Icono de comillas */}
                        <div className="absolute top-6 left-6 text-[#60BEC3] opacity-20">
                            <Quote className="w-8 h-8" />
                        </div>

                        {/* Contenido del testimonio */}
                        <div className="relative z-10">
                            {/* Problema tratado */}
                            <div className="inline-block bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                                Caso: {current.problem}
                            </div>

                            {/* Texto del testimonio */}
                            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                                "{current.text}"
                            </blockquote>

                            {/* Rating */}
                            <div className="flex items-center justify-center mb-4">
                                {[...Array(current.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                                ))}
                            </div>

                            {/* Información del paciente */}
                            <div className="text-center">
                                <div className="font-semibold text-gray-800 text-lg">
                                    {current.name}
                                </div>
                                <div className="text-gray-500 text-sm flex items-center justify-center">
                                    {current.age}
                                    {current.verified && (
                                        <>
                                            <span className="mx-2">•</span>
                                            <Shield className="w-4 h-4 text-green-600 mr-1" />
                                            <span className="text-green-600">Paciente verificado</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controles de navegación */}
                    <div className="flex justify-center items-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition duration-300"
                        >
                            <ChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>

                        {/* Indicadores */}
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition duration-300 ${
                                        index === currentTestimonial 
                                            ? 'bg-[#60BEC3]' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition duration-300"
                        >
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600 mb-6">
                        ¿Listo para ser nuestro próximo caso de éxito?
                    </p>
                    <a
                        href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20He%20visto%20los%20testimonios%20y%20quiero%20agendar%20mi%20primera%20consulta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                        onClick={() => {
                            // Google Analytics
                            if (typeof window !== "undefined" && window.gtag) {
                                window.gtag("event", "click_testimonials_cta", {
                                    event_category: "engagement",
                                    event_label: "Agenda consulta desde testimonials"
                                });
                            }
                            
                            // TikTok Pixel
                            if (typeof window !== "undefined" && window.ttq) {
                                window.ttq.track('Contact', {
                                    content_type: 'testimonials_cta',
                                    content_name: 'Agenda consulta testimonials'
                                });
                            }
                            
                            // Facebook Pixel
                            if (typeof window !== "undefined" && window.fbq) {
                                window.fbq('track', 'Contact', {
                                    content_name: 'Testimonials CTA'
                                });
                            }
                        }}
                    >
                        <Shield className="w-5 h-5 mr-2" />
                        Agenda tu consulta ahora
                    </a>
                </div>
            </div>
        </section>
    );
}