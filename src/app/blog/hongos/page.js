export const metadata = {
  title: "Tratamiento de Hongos en Uñas en Quito | Soluciones Podológicas Efectivas",
  description: "Todo sobre el tratamiento de hongos en las uñas en Quito. Descubre causas, síntomas, prevención y opciones de tratamiento profesional con la Dra. Cristina Muñoz. Atención podológica especializada para recuperar la salud de tus pies.",
};

import Link from "next/link";

export default function HongosIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
            <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Hongos</span>
          </nav>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg mx-auto text-gray-800">
          <h2>¿Qué son los hongos en las uñas?</h2>
          <p>Los hongos en las uñas (onicomicosis) son infecciones frecuentes que afectan la apariencia y salud de los pies. Es importante tratarlos a tiempo para evitar complicaciones.</p>
          <h2>¿Cómo prevenir los hongos?</h2>
          <ul>
            <li>Mantén los pies secos y limpios.</li>
            <li>Usa calzado transpirable y cambia los calcetines a diario.</li>
            <li>No compartas cortaúñas ni calzado.</li>
          </ul>
          <h2>Tratamientos disponibles en Quito</h2>
          <p>La Dra. Cristina Muñoz ofrece tratamientos personalizados para hongos en las uñas, con seguimiento y recomendaciones para evitar recaídas.</p>
        </div>
      </article>
    </div>
  );
}
