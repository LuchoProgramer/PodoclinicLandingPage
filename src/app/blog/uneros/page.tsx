export const metadata = {
  title: "Uñeros en Quito | Tratamientos y Consejos de Cristina Muñoz, Podóloga Especialista",
  description: "Tratamiento de uñeros en Quito: consejos, prevención y atención profesional de Cristina Muñoz, Podóloga Especialista.",
};

import Link from "next/link";

export default function UnerosIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
            <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Uñeros</span>
          </nav>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Uñeros en Quito: <span className="text-[#60BEC3]">Prevención y Tratamiento</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Todo lo que necesitas saber sobre uñeros, uñas encarnadas y tratamientos podológicos en Quito. Cristina Muñoz, Podóloga Especialista te explica cómo prevenir, tratar y cuándo consultar a un especialista.
          </p>
        </header>
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué es un uñero?</h2>
          <p>Un uñero es una inflamación dolorosa causada por el crecimiento de la uña hacia la piel. Es común en runners, adultos mayores y personas que usan calzado ajustado.</p>
          <h2>¿Cómo prevenir los uñeros?</h2>
          <ul>
            <li>Corta las uñas de forma recta y no demasiado cortas.</li>
            <li>Usa zapatos cómodos y con espacio para los dedos.</li>
            <li>Revisa tus pies regularmente y mantén una buena higiene.</li>
          </ul>
          <h2>Tratamientos disponibles</h2>
          <p>En Podoclinicec ofrecemos atención a domicilio, técnicas avanzadas y seguimiento personalizado para cada paciente. Consulta por WhatsApp o agenda tu cita online.</p>
        </div>
      </article>
    </div>
  );
}
