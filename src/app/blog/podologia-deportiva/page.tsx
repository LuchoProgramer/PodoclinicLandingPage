export const metadata = {
  title: "Podología Deportiva en Quito | Prevención y Tratamiento para Atletas",
  description: "Podología deportiva en Quito: prevención de lesiones y tratamientos para runners y deportistas. Atención profesional.",
};

import Link from "next/link";

export default function PodologiaDeportivaIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
             <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Podología Deportiva</span>
          </nav>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Podología Deportiva en Quito: <span className="text-[#60BEC3]">Cuida tus Pies y Rinde al Máximo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Descubre cómo la podología deportiva puede ayudarte a prevenir lesiones y mejorar tu rendimiento. Consejos y tratamientos de Cristina Muñoz para runners y deportistas en Quito.
          </p>
        </header>
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué es la podología deportiva?</h2>
          <p>La podología deportiva se especializa en el cuidado de los pies de atletas y personas activas. Ayuda a prevenir y tratar lesiones comunes como uñas encarnadas, fascitis plantar y callosidades.</p>
          <h2>Consejos para runners y deportistas</h2>
          <ul>
            <li>Usa calzado adecuado y cámbialo regularmente.</li>
            <li>Realiza estiramientos y revisa tus pies después de entrenar.</li>
            <li>Consulta a un podólogo ante cualquier molestia o lesión.</li>
          </ul>
          <h2>Atención profesional en Quito</h2>
          <p>Cristina Muñoz ofrece consultas personalizadas para deportistas y runners, con tratamientos avanzados y seguimiento a domicilio.</p>
        </div>
      </article>
    </div>
  );
}
