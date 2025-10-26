import Link from "next/link";
import { Calendar, ArrowLeft, User, Tag } from "lucide-react";
import { getPostBySlug } from "@/data/blog/posts";
import { CTAButton } from "@/components/BlogButtons";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Cuidado Diario de Pies para Personas con Diabetes en Quito | Guía Práctica",
  description: "Guía para cuidar pies diabéticos en Quito: consejos diarios, señales de alerta y prevención por la Dra. Cristina Muñoz.",
  keywords: "pie diabético, cuidado pies diabéticos, prevención, podólogo Quito, diabetes",
};

export default function CuidadoPiesDiabeticosGuiaPage() {
  const post = getPostBySlug("cuidado-pies-diabeticos-guia");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
             <nav className="flex items-center text-sm text-gray-600 mt-8">
            <Link href="/" className="hover:text-[#60BEC3]">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#60BEC3]">Blog</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/pie-diabetico" className="hover:text-[#60BEC3]">Pie Diabético</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Guía Completa de Cuidado de Pies</span>
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
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            PIE DIABÉTICO
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Diabético: Guía Completa de Cuidado de Pies
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Todo lo que necesitas saber sobre el cuidado de los pies si eres diabético. Prevención, inspección diaria y cuándo acudir al especialista.
          </p>

          {/* Meta información */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> Dra. Cristina Muñoz
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 20/09/2025
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" /> Pie Diabético
            </div>
          </div>
        </header>
        {/* Aquí iría el contenido del post */}
        <div className="prose prose-lg mx-auto text-gray-800">
          <p>Contenido profesional sobre el cuidado de pies en personas diabéticas. (Completa este contenido según tus necesidades).</p>
        </div>
        {/* CTA principal */}
        <div className="mt-12 flex flex-col items-center">
          <CTAButton 
            href="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Soy%20diabético%20y%20necesito%20evaluación%20especializada%20de%20mis%20pies"
            className="inline-flex items-center bg-[#60BEC3] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            trackingLabel="evaluacion_pie_diabetico"
            isExternal={true}
          >
            Evaluación Especializada Pie Diabético
          </CTAButton>
        </div>
      </article>
      <WhatsAppButton />
    </div>
  );
}
