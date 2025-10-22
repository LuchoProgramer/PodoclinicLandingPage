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
             <nav className="flex items-center text-sm text-gray-600 mt-8">
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

      <article className="max-w-4xl mx-auto px-6 py-12">
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
