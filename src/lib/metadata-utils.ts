import { Metadata } from "next";
import { getPageMetadata, PageMetadata } from "@/data/seo-metadata";

/**
 * Genera metadata de Next.js a partir de los datos de SEO
 * @param pageKey - Clave de la página en SEO_METADATA
 * @returns Metadata object para Next.js
 */
export function generateMetadata(pageKey: string): Metadata {
  const pageMetadata = getPageMetadata(pageKey);
  
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    openGraph: {
      title: pageMetadata.ogTitle || pageMetadata.title,
      description: pageMetadata.ogDescription || pageMetadata.description,
      url: pageMetadata.canonical,
      siteName: "Podoclinicec",
      type: "website",
      locale: "es_EC"
    },
    twitter: {
      card: "summary_large_image",
      title: pageMetadata.ogTitle || pageMetadata.title,
      description: pageMetadata.ogDescription || pageMetadata.description,
    },
    alternates: {
      canonical: pageMetadata.canonical
    }
  };
}

/**
 * Hook personalizado para obtener metadata de una página específica
 * @param pageKey - Clave de la página
 * @returns PageMetadata object
 */
export function usePageMetadata(pageKey: string): PageMetadata {
  return getPageMetadata(pageKey);
}