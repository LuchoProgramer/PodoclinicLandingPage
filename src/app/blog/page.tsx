import LayoutClient from "@/components/LayoutClient";
import HybridBlogContent from "@/components/HybridBlogContent";

export const metadata = {
  title: "Blog Podológico | Consejos y Tratamientos | Cristina Muñoz",
  description: "Blog de podología en Quito: prevención, tratamientos modernos y experiencias de pacientes. Cuida tus pies con expertos.",
  keywords: "blog podología, uñeros, pie diabético, hongos uñas, cuidado pies Quito, podólogo Quito",
  authors: [{ name: "Cristina Muñoz" }],
  creator: "Cristina Muñoz",
  publisher: "PodoClinicec",
  alternates: {
    canonical: "https://podoclinicec.com/blog",
  },
  openGraph: {
    title: "Blog Podológico | Cristina Muñoz | PodoClinicec",
    description: "Guía completa de salud podal: tips, novedades y soluciones para problemas frecuentes de pies. Información confiable de Cristina Muñoz en Quito.",
    url: "https://podoclinicec.com/blog",
    siteName: "PodoClinicec",
    type: "website",
    images: [
      { 
        url: "https://podoclinicec.com/blog/blog-og-image.jpg", 
        width: 1200, 
        height: 630,
        alt: "Blog Podológico PodoClinicec"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Podológico | Cristina Muñoz",
    description: "Recursos y consejos prácticos para el cuidado de tus pies. Todo sobre podología moderna en Quito.",
    images: ["https://podoclinicec.com/blog/blog-og-image.jpg"],
    creator: "@podoclinicec",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  // Schema.org para la página principal del blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Podológico PodoClinicec",
    "description": "Artículos especializados en podología por Cristina Muñoz",
    "url": "https://podoclinicec.com/blog",
    "author": {
      "@type": "Person",
      "name": "Cristina Muñoz",
      "jobTitle": "Especialista en Podología",
      "worksFor": {
        "@type": "Organization",
        "name": "PodoClinicec",
        "url": "https://podoclinicec.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "PodoClinicec",
      "logo": {
        "@type": "ImageObject",
        "url": "https://podoclinicec.com/logo-podoclinic.png"
      }
    }
  };

  return (
    <LayoutClient>
      {/* Datos estructurados para SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} 
      />
      
      {/* Componente híbrido que maneja posts hardcodeados + CMS */}
      <HybridBlogContent />
    </LayoutClient>
  );
}