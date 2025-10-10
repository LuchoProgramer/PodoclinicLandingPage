"use client";

import { useState } from "react";
import { 
    ChevronDown, 
    ChevronUp, 
    Search,
    HelpCircle,
    Users,
    Stethoscope,
    Clock,
    Shield,
    MessageCircle,
    Phone
} from "lucide-react";

export default function FAQAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Categorizar FAQs por temas
    const categorizedFAQs = faqs.map(faq => {
        let category = "general";
        let icon = HelpCircle;
        
        if (faq.question.toLowerCase().includes("diabét") || faq.question.toLowerCase().includes("diabetes")) {
            category = "diabetes";
            icon = Shield;
        } else if (faq.question.toLowerCase().includes("uñer") || faq.question.toLowerCase().includes("uña")) {
            category = "uneros";
            icon = Stethoscope;
        } else if (faq.question.toLowerCase().includes("hongo") || faq.question.toLowerCase().includes("micosis")) {
            category = "hongos";
            icon = Stethoscope;
        } else if (faq.question.toLowerCase().includes("tiempo") || faq.question.toLowerCase().includes("curar")) {
            category = "tiempo";
            icon = Clock;
        }
        
        return { ...faq, category, icon };
    });

    const categories = [
        { id: "all", name: "Todas", icon: HelpCircle, count: faqs.length },
        { id: "diabetes", name: "Pie Diabético", icon: Shield, count: categorizedFAQs.filter(f => f.category === "diabetes").length },
        { id: "uneros", name: "Uñeros", icon: Stethoscope, count: categorizedFAQs.filter(f => f.category === "uneros").length },
        { id: "hongos", name: "Hongos", icon: Stethoscope, count: categorizedFAQs.filter(f => f.category === "hongos").length },
        { id: "tiempo", name: "Tratamientos", icon: Clock, count: categorizedFAQs.filter(f => f.category === "tiempo").length },
        { id: "general", name: "General", icon: HelpCircle, count: categorizedFAQs.filter(f => f.category === "general").length }
    ].filter(cat => cat.count > 0); // Solo mostrar categorías con contenido

    // Filtrar FAQs
    const filteredFAQs = categorizedFAQs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const handleCTAClick = (action) => {
        // Track FAQ CTA clicks
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "faq_cta_click", {
                event_category: "engagement",
                event_label: action
            });
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-[#60BEC3] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Resolvemos tus Dudas
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Preguntas <span className="text-[#60BEC3]">Frecuentes</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Las respuestas a las consultas más comunes de nuestros pacientes. 
                        Si no encuentras lo que buscas, contáctanos directamente.
                    </p>

                    {/* Estadística */}
                    <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                        <Users className="w-5 h-5 text-[#60BEC3] mr-2" />
                        <span className="text-gray-700">
                            <strong>95%</strong> de dudas resueltas aquí
                        </span>
                    </div>
                </div>

                {/* Buscador */}
                <div className="mb-8">
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar en preguntas frecuentes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#60BEC3] focus:border-transparent shadow-lg transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Categorías */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedCategory === category.id
                                        ? 'bg-[#60BEC3] text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                                }`}
                            >
                                <IconComponent className="w-4 h-4 mr-2" />
                                {category.name}
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                    selectedCategory === category.id
                                        ? 'bg-white text-[#60BEC3]'
                                        : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {category.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* FAQs */}
                <div className="space-y-4 mb-12">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq, idx) => {
                            const IconComponent = faq.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                                >
                                    <button
                                        className="w-full text-left px-6 py-6 focus:outline-none focus:ring-2 focus:ring-[#60BEC3] focus:ring-inset"
                                        onClick={() => toggle(idx)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="bg-[#60BEC3] rounded-full p-2 mr-4 flex-shrink-0">
                                                    <IconComponent className="w-5 h-5 text-white" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <div className="flex-shrink-0">
                                                {openIndex === idx ? (
                                                    <ChevronUp className="w-6 h-6 text-[#60BEC3]" />
                                                ) : (
                                                    <ChevronDown className="w-6 h-6 text-gray-400" />
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                    
                                    {openIndex === idx && (
                                        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                                            <div className="pt-4">
                                                <p className="text-gray-700 leading-relaxed mb-4">
                                                    {faq.answer}
                                                </p>
                                                
                                                {/* Mini-CTA contextual */}
                                                {(faq.category === "diabetes" || faq.category === "uneros" || faq.category === "hongos") && (
                                                    <div className="bg-white rounded-xl p-4 border border-[#60BEC3] border-opacity-20">
                                                        <p className="text-sm text-gray-600 mb-3">
                                                            ¿Tienes este problema? Agenda una consulta especializada:
                                                        </p>
                                                        <a
                                                            href={`https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20consulta%20sobre%20${encodeURIComponent(faq.category === 'diabetes' ? 'pie diabético' : faq.category)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={() => handleCTAClick(`consultation_${faq.category}`)}
                                                            className="inline-flex items-center bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                                        >
                                                            <MessageCircle className="w-4 h-4 mr-2" />
                                                            Consultar sobre {faq.category === 'diabetes' ? 'pie diabético' : faq.category}
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center py-12">
                            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No encontramos resultados
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Intenta con otros términos o contáctanos directamente
                            </p>
                            <a
                                href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20consulta%20que%20no%20está%20en%20las%20FAQs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.gtag) {
                                        window.gtag("event", "click_whatsapp", {
                                            event_category: "contact",
                                            event_label: "FAQAccordion Consulta Personalizada"
                                        });
                                    }
                                }}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Hacer Consulta Personalizada
                            </a>
                        </div>
                    )}
                </div>

                {/* CTA Final */}
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        ¿No encontraste la respuesta que buscabas?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Nuestro equipo está listo para resolver cualquier duda específica sobre tu situación
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/593995832788?text=¡Hola!%20Tengo%20una%20consulta%20específica%20sobre%20podología"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                if (typeof window !== "undefined" && window.gtag) {
                                    window.gtag("event", "click_whatsapp", {
                                        event_category: "contact",
                                        event_label: "FAQAccordion Consulta Específica"
                                    });
                                }
                                if (typeof handleCTAClick === 'function') {
                                    handleCTAClick('custom_consultation');
                                }
                            }}
                            className="bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Consulta Personalizada
                        </a>
                        <a
                            href="tel:+593995832788"
                            onClick={() => {
                                if (typeof window !== "undefined" && window.gtag) {
                                    window.gtag("event", "click_phone", {
                                        event_category: "contact",
                                        event_label: "FAQAccordion Llamar Directamente"
                                    });
                                }
                                if (typeof handleCTAClick === 'function') {
                                    handleCTAClick('phone_call');
                                }
                            }}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Llamar Directamente
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
