export const metadata = {
  title: "Cuidado Preventivo de los Pies en Quito | Consejos y Guías de Podología",
  description: "Consejos de podología para el cuidado preventivo de los pies en Quito. Información profesional por la Dra. Cristina Muñoz.",
};

import Link from "next/link";

export default function CuidadoPreventivoIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Cuidado Preventivo</span>
          </nav>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Por qué es importante el cuidado preventivo?</h2>
          <p>El cuidado preventivo ayuda a evitar problemas como uñeros, hongos, callosidades y lesiones. Una rutina adecuada puede ahorrarte molestias y visitas innecesarias al especialista.</p>
          <h2>Consejos básicos para el día a día</h2>
          <ul>
            <li>Lava y seca bien tus pies todos los días.</li>
            <li>Usa calzado cómodo y transpirable.</li>
            <li>Corta las uñas de forma recta y no demasiado cortas.</li>
            <li>Hidrata la piel de tus pies regularmente.</li>
            <li>Revisa tus pies en busca de heridas, ampollas o cambios de color.</li>
          </ul>
          <h2>¿Cuándo consultar a un podólogo?</h2>
          <p>Si notas dolor, enrojecimiento, hinchazón o cualquier cambio inusual, consulta a un especialista. La Dra. Cristina Muñoz puede ayudarte a prevenir complicaciones y mantener tus pies sanos.</p>
        </div>
      </article>
    </div>
  );
}
