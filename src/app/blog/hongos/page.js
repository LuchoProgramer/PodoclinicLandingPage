export const metadata = {
  title: "Tratamiento de Hongos en Uñas en Quito | Soluciones Podológicas Efectivas",
  description: "Todo sobre el tratamiento de hongos en las uñas en Quito. Descubre causas, síntomas, prevención y opciones de tratamiento profesional con la Dra. Cristina Muñoz. Atención podológica especializada para recuperar la salud de tus pies.",
};

import Link from "next/link";
import LayoutClient from "@/components/LayoutClient";
import { ArrowRight } from "lucide-react";

export default function HongosIndexPage() {
  return (
    <LayoutClient>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Breadcrumb de categoría */}
        <div className="bg-white/80 backdrop-blur-sm border-b shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 mt-28 md:mt-32">
            <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#60BEC3] transition-colors font-medium flex items-center gap-1">
                🏠 Inicio
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <Link href="/blog" className="hover:text-[#60BEC3] transition-colors font-medium flex items-center gap-1">
                📝 Blog
              </Link>
              <span className="mx-2 text-gray-400">›</span>
              <span className="text-gray-800 font-semibold flex items-center gap-1">🍄 Hongos</span>
            </nav>
          </div>
        </div>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog de Hongos en las Uñas</h1>
            <p className="text-lg text-gray-700 mb-8">
              Información, consejos y tratamientos profesionales para combatir los hongos en las uñas. Explora los artículos y descubre cómo recuperar la salud de tus pies.
            </p>
            {/* Listado de artículos de la categoría Hongos */}
            <div className="mt-12 grid gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-left flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 text-5xl">🦶</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <Link href="/blog/hongos/hongos-unas-tratamiento-efectivo" className="hover:text-[#60BEC3] transition-colors">
                      Tratamiento de Hongos en Uñas: Guía Completa
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-2">Descubre causas, síntomas, prevención y opciones de tratamiento profesional con la Dra. Cristina Muñoz.</p>
                  <Link href="/blog/hongos/hongos-unas-tratamiento-efectivo" className="text-[#60BEC3] font-semibold inline-flex items-center gap-1">
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutClient>
  );
}