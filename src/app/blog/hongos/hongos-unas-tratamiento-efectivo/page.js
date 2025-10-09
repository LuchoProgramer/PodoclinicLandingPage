import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { getPostBySlug } from "@/data/blog/posts";
import { WhatsAppButton, CTAButton } from "@/components/BlogButtons";

export const metadata = {
  title: "Hongos en las Uñas: Tratamiento Efectivo y Prevención",
  description: "Aprende sobre los tratamientos más efectivos para hongos en las uñas y cómo prevenir su aparición con consejos profesionales.",
  keywords: "hongos uñas, tratamiento hongos, onicomicosis, prevención, podólogo Quito",
};

export default function HongosUnasTratamientoEfectivoPage() {
  const post = getPostBySlug("hongos-unas-tratamiento-efectivo");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/hongos" className="hover:text-[#60BEC3]">Hongos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Hongos en las Uñas: Tratamiento Efectivo</span>
          </nav>
        </div>
      </div>

      {/* Header del Post */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          {/* Botón volver */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#60BEC3] hover:text-[#4A9DB8] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>

          {/* Categoría */}
          <div className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            HONGOS
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Hongos en las Uñas: Tratamiento Efectivo y Prevención
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Aprende sobre los tratamientos más efectivos para hongos en las uñas y cómo prevenir su aparición con consejos profesionales.
          </p>

          {/* Meta información */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> Dra. Cristina Muñoz
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 15/09/2025
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" /> Hongos
            </div>
          </div>
        </header>
        {/* Aquí iría el contenido del post */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <p>Contenido profesional sobre tratamiento y prevención de hongos en las uñas. (Completa este contenido según tus necesidades).</p>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton text="Consulta Tratamiento Hongos" link="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Tengo%20hongos%20en%20las%20uñas%20y%20quiero%20conocer%20opciones%20de%20tratamiento" />
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
