import { 
  Shield, 
  Award, 
  Stethoscope, 
  Heart,
  CheckCircle,
  MapPin
} from "lucide-react";

export default function SEOContent() {
  const expertise = [
    "Tratamiento de uñeros sin dolor",
    "Cuidado especializado de pie diabético",
    "Eliminación de hongos y callosidades",
    "Verrugas plantares",
    "Biomecánica y pisada",
    "Profilaxis podal completa"
  ];

  const zones = [
    "La Florida",
    "Iñaquito", 
    "Rumipamba",
    "La Carolina",
    "González Suárez",
    "Quito Norte"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenido Principal SEO */}
        <div className="max-w-4xl mx-auto">
          {/* Título H2 con keyword principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Tu Doctora de Pies Certificada en <span className="text-[#60BEC3]">Quito Norte</span>
          </h2>

          {/* Párrafo introductorio */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-12">
            <p className="leading-relaxed">
              Como <strong>doctora de pies especializada en Quito Norte</strong>, la Dra. Cristina Muñoz ofrece 
              atención podológica integral para resolver problemas que afectan tu movilidad y calidad de vida. 
              Con más de 5 años de experiencia como podóloga certificada, brinda tratamientos efectivos 
              para uñeros, pie diabético, hongos, callosidades y otras afecciones podológicas.
            </p>

            <p className="leading-relaxed">
              Un <strong>doctor de pies profesional</strong> no solo trata síntomas visibles, sino que identifica 
              las causas raíz de cada problema. Ya sea que sufras de dolor al caminar, uñas encarnadas 
              recurrentes, o necesites cuidado preventivo para pie diabético, contar con una especialista 
              certificada marca la diferencia entre un alivio temporal y una solución duradera.
            </p>
          </div>

          {/* Grid de información */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ¿Por qué elegir un doctor de pies certificado? */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#60BEC3] rounded-full p-3 mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  ¿Por Qué Elegir un Doctor de Pies Certificado?
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Diagnóstico preciso:</strong> Identificamos la causa real del problema, no solo los síntomas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Tratamientos seguros:</strong> Protocolos médicos profesionales que garantizan tu seguridad
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Prevención a largo plazo:</strong> Te enseñamos cómo evitar que el problema regrese
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    <strong>Equipamiento especializado:</strong> Herramientas profesionales para tratamientos efectivos
                  </span>
                </li>
              </ul>
            </div>

            {/* Especialidades */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#60BEC3] rounded-full p-3 mr-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Especialidades de Nuestra Doctora de Pies
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-2 h-2 bg-[#60BEC3] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sección: Cuándo consultar */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Heart className="w-6 h-6 text-[#60BEC3] mr-3" />
              ¿Cuándo Debes Consultar a un Doctor de Pies?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-gray-800 mb-2">🚨 Situaciones Urgentes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dolor intenso al caminar</li>
                  <li>• Uñas encarnadas con inflamación</li>
                  <li>• Heridas que no cicatrizan (especialmente diabéticos)</li>
                  <li>• Cambios de color en dedos o uñas</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-800 mb-2">⚠️ Cuidado Preventivo:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Callosidades recurrentes</li>
                  <li>• Deformidades en los dedos</li>
                  <li>• Pies diabéticos (revisión trimestral)</li>
                  <li>• Deportistas con molestias frecuentes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zonas de cobertura */}
          <div className="bg-gradient-to-r from-[#60BEC3] to-[#4A9DB8] rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">
                Doctora de Pies con Atención en Todo Quito Norte
              </h3>
            </div>
            <p className="mb-6 opacity-90">
              Ofrecemos servicio de podología tanto en nuestro consultorio ubicado en La Florida, 
              como atención a domicilio sin costo adicional en las siguientes zonas de Quito Norte:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {zones.map((zone, index) => (
                <div key={index} className="bg-white bg-opacity-20 rounded-lg px-4 py-2 text-center backdrop-blur-sm">
                  <span className="font-medium">{zone}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://wa.me/593995832788?text=¡Hola!%20Necesito%20consulta%20con%20doctora%20de%20pies%20en%20Quito%20Norte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Consultar Disponibilidad en Mi Zona
              </a>
            </div>
          </div>

          {/* Diferenciador final */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-green-50 rounded-full px-6 py-3 mb-4">
              <Award className="w-5 h-5 text-[#60BEC3] mr-2" />
              <span className="text-gray-700 font-medium">
                Más que un doctor de pies, tu aliada en salud podológica
              </span>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              La Dra. Cristina Muñoz no solo trata problemas actuales, sino que te educa sobre 
              el cuidado preventivo de tus pies. Con enfoque personalizado y tecnología moderna, 
              cada tratamiento está diseñado para darte resultados duraderos y mejorar tu calidad de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}