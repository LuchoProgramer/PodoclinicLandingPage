"use client";

import Link from "next/link";
import { 
  MapPin, 
  ArrowRight, 
  Clock, 
  Star, 
  Bandage, 
  Droplet, 
  Microscope, 
  Sparkles, 
  Home, 
  Flower, 
  Activity, 
  Globe, 
  Award, 
  BookOpen, 
  Book, 
  Search, 
  Lightbulb, 
  Sun, 
  HelpCircle 
} from "lucide-react";

interface InternalLink {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'servicio' | 'zona' | 'blog' | 'tip';
}

interface InternalLinksProps {
  variant?: 'horizontal' | 'grid' | 'list';
  category?: 'servicios' | 'zonas' | 'blog' | 'tips' | 'mixed';
  limit?: number;
  showDescription?: boolean;
}

const allLinks: InternalLink[] = [
  // Servicios principales
  {
    href: "/servicios/uneros",
    title: "Tratamiento de Uñeros",
    description: "Especialista en uñas encarnadas sin dolor",
    icon: Bandage,
    category: "servicio"
  },
  {
    href: "/servicios/pie-diabetico", 
    title: "Pie Diabético",
    description: "Cuidado especializado para diabéticos",
    icon: Droplet,
    category: "servicio"
  },
  {
    href: "/servicios/hongos",
    title: "Tratamiento de Hongos",
    description: "Eliminación efectiva de hongos en uñas",
    icon: Microscope,
    category: "servicio"
  },
  {
    href: "/servicios/profilaxis",
    title: "Profilaxis Podal",
    description: "Limpieza profunda y preventiva",
    icon: Sparkles,
    category: "servicio"
  },
  {
    href: "/servicios/domicilio",
    title: "Atención a Domicilio",
    description: "Servicio en tu hogar, Quito Norte",
    icon: Home,
    category: "servicio"
  },
  
  // Zonas geográficas
  {
    href: "/blog/local/podologo-la-florida-quito-norte",
    title: "Podólogo La Florida",
    description: "Atención especializada en La Florida",
    icon: Flower,
    category: "zona"
  },
  {
    href: "/podologia-runners",
    title: "Podología para Runners",
    description: "Especialización deportiva, atletas y runners",
    icon: Activity,
    category: "zona"
  },
  {
    href: "/podologia-quito-norte",
    title: "Podología Quito Norte",
    description: "Cobertura completa La Floresta",
    icon: Globe,
    category: "zona"
  },
  {
    href: "/podologo-en-quito",
    title: "Podólogo en Quito",
    description: "Mejor podólogo certificado",
    icon: Award,
    category: "zona"
  },
  
  // Blog y contenido educativo
  {
    href: "/blog/uneros",
    title: "Todo sobre Uñeros",
    description: "Guía completa de uñas encarnadas",
    icon: BookOpen,
    category: "blog"
  },
  {
    href: "/blog/pie-diabetico",
    title: "Cuidado Pie Diabético",
    description: "Prevención y tratamiento especializado",
    icon: Book,
    category: "blog"
  },
  {
    href: "/blog/hongos",
    title: "Hongos en Uñas",
    description: "Causas, síntomas y tratamientos",
    icon: Search,
    category: "blog"
  },
  
  // Tips y consejos
  {
    href: "/tips/uneros",
    title: "Prevenir Uñeros",
    description: "Consejos para evitar uñas encarnadas",
    icon: Lightbulb,
    category: "tip"
  },
  {
    href: "/tips/verano",
    title: "Cuidados de Verano",
    description: "Protege tus pies en temporada calurosa",
    icon: Sun,
    category: "tip"
  },
  {
    href: "/faq",
    title: "Preguntas Frecuentes",
    description: "Respuestas a dudas comunes",
    icon: HelpCircle,
    category: "tip"
  }
];

export default function InternalLinks({ 
  variant = 'grid', 
  category = 'mixed', 
  limit = 6,
  showDescription = true 
}: InternalLinksProps) {
  
  // Filtrar enlaces según categoría
  const filteredLinks = category === 'mixed' 
    ? allLinks 
    : allLinks.filter(link => {
        if (category === 'servicios') return link.category === 'servicio';
        if (category === 'zonas') return link.category === 'zona';
        if (category === 'blog') return link.category === 'blog';
        if (category === 'tips') return link.category === 'tip';
        return true;
      });

  const displayLinks = filteredLinks.slice(0, limit);

  // Handler para tracking de enlaces internos
  const handleLinkClick = (title: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_internal_link", {
        event_category: "seo",
        event_label: `Internal Link: ${title}`,
        value: 1
      });
    }
  };

  if (variant === 'horizontal') {
    return (
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {displayLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => handleLinkClick(link.title)}
            className="group flex-shrink-0 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#60BEC3] hover:shadow-lg transition-all duration-300 min-w-[200px]"
          >
            <div className="flex items-center">
              <link.icon className="w-6 h-6 text-[#60BEC3] mr-3" />
              <div>
                <div className="font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors text-sm">
                  {link.title}
                </div>
                {showDescription && (
                  <div className="text-xs text-gray-600 mt-1">
                    {link.description}
                  </div>
                )}
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-[#60BEC3] transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="space-y-2">
        {displayLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => handleLinkClick(link.title)}
            className="group flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-[#60BEC3] hover:shadow-md transition-all duration-300"
          >
            <link.icon className="w-5 h-5 text-[#60BEC3] mr-3" />
            <div className="flex-grow">
              <div className="font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors">
                {link.title}
              </div>
              {showDescription && (
                <div className="text-sm text-gray-600">
                  {link.description}
                </div>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#60BEC3] transition-colors" />
          </Link>
        ))}
      </div>
    );
  }

  // Default: grid variant
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={() => handleLinkClick(link.title)}
          className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[#60BEC3] hover:shadow-lg transition-all duration-300"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <link.icon className="w-8 h-8 text-[#60BEC3]" />
            </div>
            <div className="font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors text-sm">
              {link.title}
            </div>
            {showDescription && (
              <div className="text-xs text-gray-600 mt-1">
                {link.description}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

// Componente específico para enlaces relacionados en blog posts
export function RelatedLinks({ currentPath }: { currentPath: string }) {
  // Lógica para mostrar enlaces relacionados basados en la página actual
  const getRelatedLinks = (path: string): InternalLink[] => {
    if (path.includes('uneros')) {
      return allLinks.filter(link => 
        link.href.includes('uneros') || 
        link.href.includes('pie-diabetico') ||
        link.href.includes('domicilio')
      ).slice(0, 4);
    }
    
    if (path.includes('hongos')) {
      return allLinks.filter(link => 
        link.href.includes('hongos') || 
        link.href.includes('profilaxis') ||
        link.href.includes('verano')
      ).slice(0, 4);
    }
    
    if (path.includes('pie-diabetico')) {
      return allLinks.filter(link => 
        link.href.includes('pie-diabetico') || 
        link.href.includes('uneros') ||
        link.href.includes('domicilio')
      ).slice(0, 4);
    }
    
    // Default: mix de servicios principales
    return allLinks.filter(link => link.category === 'servicio').slice(0, 4);
  };

  const relatedLinks = getRelatedLinks(currentPath);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Star className="w-5 h-5 mr-2 text-[#60BEC3]" />
        Servicios Relacionados
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {relatedLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "click_related_link", {
                  event_category: "seo",
                  event_label: `Related: ${link.title}`,
                  value: 1
                });
              }
            }}
            className="group flex items-center p-3 bg-white border border-gray-200 rounded-lg hover:border-[#60BEC3] hover:shadow-md transition-all duration-300"
          >
            <link.icon className="w-5 h-5 text-[#60BEC3] mr-3" />
            <div className="flex-grow">
              <div className="font-medium text-gray-900 group-hover:text-[#60BEC3] transition-colors text-sm">
                {link.title}
              </div>
              <div className="text-xs text-gray-600">
                {link.description}
              </div>
            </div>
            <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-[#60BEC3] transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// Componente para breadcrumbs
export function Breadcrumbs({ path }: { path: string }) {
  const segments = path.split('/').filter(Boolean);
  
  const breadcrumbNames: Record<string, string> = {
    'servicios': 'Servicios',
    'blog': 'Blog', 
    'tips': 'Tips',
    'uneros': 'Uñeros',
    'hongos': 'Hongos',
    'pie-diabetico': 'Pie Diabético',
    'domicilio': 'Atención Domicilio',
    'profilaxis': 'Profilaxis Podal',
    'verano': 'Cuidados Verano',
    'local': 'Zonas de Atención',
    'faq': 'Preguntas Frecuentes'
  };

  return (
    <nav className="bg-gray-50 border-b border-gray-200 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
        <Link 
          href="/" 
          className="text-[#60BEC3] hover:text-[#4A9DB8] transition-colors"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "click_breadcrumb", {
                event_category: "navigation",
                event_label: "Home"
              });
            }
          }}
        >
          Inicio
        </Link>
        
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const name = breadcrumbNames[segment] || segment.replace('-', ' ');
          const isLast = index === segments.length - 1;
          
          return (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-700 font-medium capitalize">{name}</span>
              ) : (
                <Link 
                  href={href}
                  className="text-[#60BEC3] hover:text-[#4A9DB8] transition-colors capitalize"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "click_breadcrumb", {
                        event_category: "navigation",
                        event_label: name
                      });
                    }
                  }}
                >
                  {name}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}