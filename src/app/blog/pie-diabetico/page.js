export const metadata = {
  title: "Pie Diabético en Quito | Prevención, Síntomas y Tratamientos Podológicos",
  description: "Información completa sobre el pie diabético en Quito: síntomas, prevención, riesgos y tratamientos. La Dra. Cristina Muñoz te orienta sobre cómo cuidar tus pies y evitar complicaciones. Atención podológica profesional y consejos prácticos.",
};

import Link from "next/link";

export default function PieDiabeticoIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
             <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Pie Diabético</span>
          </nav>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Pie Diabético en Quito: <span className="text-[#60BEC3]">Prevención y Tratamiento</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Todo lo que necesitas saber sobre el pie diabético: cómo prevenirlo, reconocer los síntomas y acceder a tratamientos podológicos profesionales en Quito.
          </p>
        </header>
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué es el pie diabético?</h2>
          <p>El pie diabético es una complicación frecuente en personas con diabetes. Se caracteriza por lesiones, infecciones o úlceras en los pies debido a la mala circulación y daño en los nervios.</p>
          <h2>¿Cómo prevenir el pie diabético?</h2>
          <ul>
            <li>Revisa tus pies diariamente y mantén una buena higiene.</li>
            <li>Usa calzado cómodo y adecuado.</li>
            <li>Consulta a un podólogo ante cualquier herida o cambio en la piel.</li>
          </ul>
          <h2>Tratamientos y atención en Quito</h2>
          <p>La Dra. Cristina Muñoz ofrece atención podológica especializada para pie diabético en Quito, con consultas a domicilio y seguimiento personalizado.</p>
        </div>
      </article>
    </div>
  );
}
