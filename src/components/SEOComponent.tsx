/**
 * Componente SEO centralizado para optimización de contenido médico
 * Genera metadatos, structured data y optimizaciones específicas para podología
 */

import { BlogPost } from '@/types';
import { MEDICAL_SEO_CONFIG } from '@/lib/performance-config';

interface SEOComponentProps {
  post: BlogPost;
  baseUrl?: string;
}

export default function SEOComponent({ post, baseUrl = 'https://podoclinicec.com' }: SEOComponentProps) {
  const canonicalUrl = `${baseUrl}/blog/${post.category}/${post.slug}`;
  
  // Generar structured data optimizado para SEO médico
  const generateMedicalArticleSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "mainEntity": {
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt || post.metaDescription,
        "image": {
          "@type": "ImageObject",
          "url": post.image || `${baseUrl}/images/blog/default-podologia.jpg`,
          "width": 1200,
          "height": 630,
          "caption": post.title
        },
        "author": {
          "@type": "Person",
          "name": post.author || MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.doctor,
          "jobTitle": MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.specialty,
          "qualification": "Doctora en Podología",
          "url": baseUrl,
          "worksFor": {
            "@type": "MedicalClinic",
            "name": MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.clinic,
            "url": baseUrl,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Manuel Jordan y Av La Florida",
              "addressLocality": "Quito",
              "addressRegion": "Pichincha",
              "postalCode": "170511",
              "addressCountry": "EC"
            },
            "telephone": "+593995832788",
            "medicalSpecialty": "Podiatry"
          },
          "alumniOf": "Universidad Especializada en Podología",
          "knowsAbout": [
            "Podología", 
            "Pie Diabético", 
            "Onicocriptosis", 
            "Onicomicosis",
            "Podiatría Deportiva"
          ]
        },
        "publisher": {
          "@type": "MedicalClinic",
          "name": `${MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.clinic} - ${MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.doctor}`,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo-podoclinic.png`,
            "width": 200,
            "height": 60
          },
          "url": baseUrl
        },
        "url": canonicalUrl,
        "datePublished": post.publishDate,
        "dateModified": post.lastModified || post.publishDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "articleSection": post.category,
        "keywords": generateMedicalKeywords(),
        "wordCount": post.content?.length || 1500,
        "timeRequired": post.readTime || "5 min",
        "inLanguage": "es-EC",
        "isAccessibleForFree": true,
        "audience": {
          "@type": "PeopleAudience",
          "audienceType": "Pacientes que buscan atención podológica"
        },
        "about": {
          "@type": "MedicalCondition",
          "name": getMedicalConditionName(post.category),
          "alternateName": getAlternateNames(post.category),
          "description": getMedicalDescription(post.category)
        }
      },
      "medicalAudience": {
        "@type": "PeopleAudience", 
        "audienceType": "Patient"
      },
      "lastReviewed": post.lastModified || post.publishDate,
      "reviewedBy": {
        "@type": "Person",
        "name": post.author || MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.doctor,
        "jobTitle": MEDICAL_SEO_CONFIG.MEDICAL_AUTHORITY.specialty
      }
    };
  };

  // Generar breadcrumb schema
  const generateBreadcrumbSchema = () => {
    const categoryNames: { [key: string]: string } = {
      'uneros': 'Uñeros',
      'pie-diabetico': 'Pie Diabético',
      'hongos': 'Hongos en las Uñas',
      'podologia-deportiva': 'Podología Deportiva',
      'cuidado-preventivo': 'Cuidado Preventivo'
    };

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": baseUrl
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Blog de Podología",
          "item": `${baseUrl}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": categoryNames[post.category] || 'Artículos',
          "item": `${baseUrl}/blog/${post.category}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": post.title
        }
      ]
    };
  };

  // Generar FAQ schema si el post tiene preguntas frecuentes
  const generateFAQSchema = () => {
    if (!post.category || !post.isCMSPost) return null;

    const faqs = generateCategoryFAQs(post.category);
    if (faqs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Funciones auxiliares
  const generateMedicalKeywords = (): string => {
    const baseKeywords = post.tags || [];
    const categoryKeywords = MEDICAL_SEO_CONFIG.MEDICAL_KEYWORDS.primary.filter(k => 
      k.includes(post.category) || post.title.toLowerCase().includes(k)
    );
    const locationKeywords = MEDICAL_SEO_CONFIG.MEDICAL_KEYWORDS.secondary;
    const medicalTerms = MEDICAL_SEO_CONFIG.MEDICAL_KEYWORDS.medical;

    return [...baseKeywords, ...categoryKeywords, ...locationKeywords, ...medicalTerms]
      .slice(0, 10) // Limitar a 10 keywords
      .join(', ');
  };

  const getMedicalConditionName = (category: string): string => {
    const conditions: { [key: string]: string } = {
      'uneros': 'Onicocriptosis',
      'pie-diabetico': 'Pie Diabético',
      'hongos': 'Onicomicosis',
      'podologia-deportiva': 'Lesiones Podológicas Deportivas',
      'cuidado-preventivo': 'Prevención Podológica'
    };
    return conditions[category] || 'Condición Podológica';
  };

  const getAlternateNames = (category: string): string[] => {
    const alternates: { [key: string]: string[] } = {
      'uneros': ['Uña encarnada', 'Uñero', 'Onicocriptosis'],
      'pie-diabetico': ['Complicaciones diabéticas del pie', 'Neuropatía diabética'],
      'hongos': ['Micosis ungueal', 'Hongos en las uñas', 'Onicomicosis'],
      'podologia-deportiva': ['Podología del deporte', 'Lesiones deportivas del pie'],
      'cuidado-preventivo': ['Higiene podal', 'Cuidado de pies', 'Prevención podológica']
    };
    return alternates[category] || [];
  };

  const getMedicalDescription = (category: string): string => {
    const descriptions: { [key: string]: string } = {
      'uneros': 'Condición donde el borde de la uña se clava en la piel circundante causando dolor e inflamación.',
      'pie-diabetico': 'Complicación de la diabetes que afecta los pies, requiere cuidado especializado.',
      'hongos': 'Infección fúngica que afecta las uñas, causando cambios en color, grosor y textura.',
      'podologia-deportiva': 'Especialidad que trata lesiones y problemas podológicos en deportistas.',
      'cuidado-preventivo': 'Medidas y tratamientos para mantener la salud podológica y prevenir problemas.'
    };
    return descriptions[category] || 'Condición podológica que requiere atención especializada.';
  };

  const generateCategoryFAQs = (category: string): Array<{question: string, answer: string}> => {
    const faqsByCategory: { [key: string]: Array<{question: string, answer: string}> } = {
      'uneros': [
        {
          question: "¿Cuándo debo consultar por un uñero?",
          answer: "Consulte inmediatamente si presenta dolor intenso, pus, enrojecimiento excesivo o si es diabético."
        },
        {
          question: "¿Se puede tratar un uñero en casa?",
          answer: "Los casos leves pueden manejarse con cuidados básicos, pero se recomienda evaluación profesional para evitar complicaciones."
        }
      ],
      'pie-diabetico': [
        {
          question: "¿Con qué frecuencia debe revisarse los pies un diabético?",
          answer: "Diariamente en casa y profesionalmente cada 3-6 meses, o según recomendación médica."
        }
      ],
      'hongos': [
        {
          question: "¿Cuánto tiempo toma curar los hongos en las uñas?",
          answer: "El tratamiento puede tomar de 3-12 meses dependiendo de la severidad y el tipo de hongo."
        }
      ]
    };
    return faqsByCategory[category] || [];
  };

  // Schemas principales
  const articleSchema = generateMedicalArticleSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      {/* Structured Data Principal */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} 
      />
      
      {/* Breadcrumb Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />
      
      {/* FAQ Schema (si aplica) */}
      {faqSchema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
        />
      )}

      {/* Meta tags adicionales para SEO médico */}
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="googlebot" content="index,follow" />
      <meta name="medical-specialty" content="Podiatry" />
      <meta name="content-language" content="es-EC" />
      <meta name="geo.region" content="EC-P" />
      <meta name="geo.placename" content="Quito" />
      <meta name="ICBM" content="-0.1807, -78.4678" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Link relations para SEO */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es-ec" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es" href={canonicalUrl} />
      
      {/* DNS Prefetch para rendimiento */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
}