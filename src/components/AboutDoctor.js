"use client";

import Image from "next/image";
import { 
    GraduationCap, 
    Award, 
    Users, 
    MapPin,
    CheckCircle,
    Star
} from "lucide-react";

export default function AboutDoctor() {
    const certifications = [
        "Licenciada en Podología - Universidad del Gran Rosario - Argentina",
        "Especialización en Pie Diabético - Universidad de Especialidades Espíritu Santo",
        "Curso Avanzado en Cirugía Podológica Mínimamente Invasiva",
        "Certificación en Biomecánica del Pie - Instituto Español de Podología"
    ];

    const achievements = [
        { number: "500+", label: "Pacientes atendidos" },
        { number: "5+", label: "Años de experiencia" },
        { number: "98%", label: "Índice de satisfacción" },
        { number: "50+", label: "Cirugías exitosas" }
    ];

    return (
        <section id="doctora" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Conoce a la <span className="text-[#60BEC3]">Dra. Cristina Muñoz</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Especialista en podología con amplia experiencia en el tratamiento 
                        de patologías del pie y cuidado preventivo
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Imagen y presentación */}
                    <div className="space-y-6">
                        {/* Imagen de la doctora */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center">
                            <div className="w-48 h-48 mx-auto mb-6 relative">
                                <Image
                                    src="https://res.cloudinary.com/dltfsttr7/image/upload/c_fill,w_384,h_384,q_auto:eco,f_auto,dpr_auto,fl_progressive:steep,e_sharpen:60/v1759895245/IMG_6853_f0skfi.jpg"
                                    alt="Dra. Cristina Muñoz - Especialista en Podología"
                                    fill
                                    className="rounded-full object-cover border-4 border-white shadow-lg"
                                    priority
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Dra. Cristina Muñoz
                            </h3>
                            <p className="text-[#60BEC3] font-medium mb-4">
                                Especialista en Podología
                            </p>
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>Quito, Ecuador</span>
                            </div>
                        </div>

                        {/* Estadísticas */}
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#60BEC3] mb-1">
                                        {achievement.number}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {achievement.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Información profesional */}
                    <div className="space-y-8">
                        {/* Mensaje personal */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#60BEC3] rounded-full p-2 mr-3 flex-shrink-0">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Mi compromiso contigo</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        "Mi pasión es ayudar a las personas a recuperar la salud de sus pies. 
                                        Cada paciente es único y merece un tratamiento personalizado y de calidad. 
                                        Mi objetivo es que puedas caminar sin dolor y con confianza."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Formación y certificaciones */}
                        <div>
                            <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                                <GraduationCap className="w-5 h-5 mr-2 text-[#60BEC3]" />
                                Formación y Certificaciones
                            </h4>
                            <div className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Especialidades */}
                        <div>
                            <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                                <Award className="w-5 h-5 mr-2 text-[#60BEC3]" />
                                Áreas de Especialización
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {[
                                    "Tratamiento de uñeros",
                                    "Cuidado pie diabético", 
                                    "Eliminación de verrugas",
                                    "Tratamiento de hongos",
                                    "Lesiones deportivas",
                                    "Biomecánica del pie"
                                ].map((specialty, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-[#60BEC3] rounded-full mr-2"></div>
                                        <span className="text-gray-700 text-sm">{specialty}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-white rounded-xl border-2 border-[#60BEC3] p-6 text-center">
                            <h4 className="font-semibold text-gray-800 mb-2">
                                ¿Tienes alguna consulta?
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Estoy aquí para ayudarte con cualquier problema en tus pies
                            </p>
                            <a
                                href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Tengo%20una%20consulta%20sobre%20mis%20pies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#60BEC3] hover:bg-[#4A9DB8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                            >
                                <Users className="w-4 h-4 mr-2" />
                                Consultarme directamente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}