"use client";

import Image from "next/image";
import Link from "next/link";
import { 
    ExternalLink, 
    Scissors, 
    Shield, 
    Sparkles, 
    Stethoscope,
    ArrowRight,
    CheckCircle,
    LucideIcon,
    Target,
    Briefcase,
    Palette,
    Zap,
    Heart,
    Clock
} from "lucide-react";
import { getTemplateConfig, ServiceConfig } from "../../config/template.config";

// Declaraciones globales para Analytics
declare global {
    interface Window {
        gtag?: (command: string, targetId: string, config?: any) => void;
        ttq?: {
            track: (event: string, data?: any) => void;
        };
        fbq?: (command: string, event: string, data?: any) => void;
    }
}

// Mapeo de iconos de Lucide para diferentes servicios
const ICON_MAP: { [key: string]: LucideIcon } = {
    // Médicos
    'scissors': Scissors,
    'shield': Shield,
    'sparkles': Sparkles,
    'stethoscope': Stethoscope,
    'heart': Heart,
    
    // Business
    'target': Target,
    'briefcase': Briefcase,
    'zap': Zap,
    'clock': Clock,
    
    // Creative
    'palette': Palette,
    
    // Genéricos
    'checkCircle': CheckCircle,
    'arrowRight': ArrowRight,
    'externalLink': ExternalLink
};

// Función para obtener el icono correcto
function getServiceIcon(iconName: string): LucideIcon {
    const normalizedName = iconName.toLowerCase().replace(/[-_\s]/g, '');
    return ICON_MAP[normalizedName] || Stethoscope;
}

// Función para obtener imagen por defecto según industria
function getDefaultServiceImage(industry: string, serviceId: string): string {
    const industryImages = {
        medical: {
            uneros: "https://www.clinicaplanas.com/blog/wp-content/cuidado-pies-1024x618.png.webp",
            profilaxis: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
            hongos: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
            'pie-diabetico': "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
        },
        business: {
            strategy: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
            technology: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
            consulting: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
        },
        creative: {
            branding: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
            'web-design': "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
            photography: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800"
        }
    };
    
    const industryMap = industryImages[industry as keyof typeof industryImages];
    return (industryMap as any)?.[serviceId] || 
           "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800";
}

interface TemplateServiciosProps {
    showTitle?: boolean;
    maxServices?: number;
    layout?: 'grid' | 'carousel' | 'list';
}

export default function TemplateServicios({ 
    showTitle = true, 
    maxServices, 
    layout = 'grid' 
}: TemplateServiciosProps) {
    const config = getTemplateConfig();
    const services = maxServices ? config.services.slice(0, maxServices) : config.services;

    // Handler para tracking de clics en servicios
    const handleServiceClick = (serviceName: string, serviceId: string): void => {
        // Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_service", {
                event_category: "engagement",
                event_label: serviceName,
                service_id: serviceId
            });
        }
        
        // TikTok Pixel
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track('ViewContent', {
                content_type: 'service',
                content_name: serviceName,
                content_id: serviceId
            });
        }
        
        // Facebook Pixel
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: serviceName,
                content_category: 'service',
                content_ids: [serviceId]
            });
        }
    };

    const ServiceCard = ({ service, index }: { service: ServiceConfig; index: number }) => {
        const IconComponent = service.icon.length === 1 ? 
            null : 
            getServiceIcon(service.icon);
        
        return (
            <div 
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
            >
                {/* Badge si existe */}
                {service.badge && (
                    <div 
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: config.branding.accentColor }}
                    >
                        {service.badge}
                    </div>
                )}

                {/* Badge de urgente */}
                {service.urgent && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                        ¡URGENTE!
                    </div>
                )}

                <div className="text-center mb-6">
                    {/* Icono o Emoji */}
                    <div className="text-6xl mb-4">
                        {service.icon.length === 1 ? (
                            service.icon
                        ) : IconComponent ? (
                            <IconComponent 
                                className="w-16 h-16 mx-auto" 
                                style={{ color: config.branding.primaryColor }} 
                            />
                        ) : (
                            service.icon
                        )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                    </p>

                    {/* Precio */}
                    {service.price && (
                        <div 
                            className="text-2xl font-bold mb-4"
                            style={{ color: config.branding.primaryColor }}
                        >
                            {service.price}
                        </div>
                    )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle 
                                className="w-4 h-4 mr-3 flex-shrink-0" 
                                style={{ color: config.branding.secondaryColor }} 
                            />
                            <span className="text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Imagen del servicio */}
                <div className="mb-6 rounded-xl overflow-hidden">
                    <Image
                        src={getDefaultServiceImage(config.business.industry, service.id)}
                        alt={`${service.title} - ${config.business.name}`}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* CTA */}
                <Link
                    href={service.link}
                    onClick={() => handleServiceClick(service.title, service.id)}
                    className="block w-full text-center py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: config.branding.primaryColor }}
                >
                    <span>Más Información</span>
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
            </div>
        );
    };

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {showTitle && (
                    <div className="text-center mb-12 sm:mb-16">
                        <div 
                            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                            style={{ 
                                backgroundColor: `${config.branding.primaryColor}20`, 
                                color: config.branding.primaryColor 
                            }}
                        >
                            <Stethoscope className="w-4 h-4 inline mr-2" />
                            {config.business.industry === 'medical' ? 'Servicios Especializados' :
                             config.business.industry === 'business' ? 'Nuestros Servicios' :
                             'Servicios Creativos'}
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
                            {config.business.industry === 'medical' ? 'Servicios de' :
                             config.business.industry === 'business' ? 'Soluciones para tu' :
                             'Servicios de'}
                            <span 
                                className="block mt-2"
                                style={{ color: config.branding.primaryColor }}
                            >
                                {config.business.industry === 'medical' ? config.business.tagline.replace('Especialistas en ', '') :
                                 config.business.industry === 'business' ? 'Negocio' :
                                 'Diseño'}
                            </span>
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {config.business.description}
                        </p>
                    </div>
                )}

                {/* Grid de servicios */}
                <div className={`grid gap-6 sm:gap-8 ${
                    layout === 'grid' ? 
                        `grid-cols-1 ${services.length > 1 ? 'md:grid-cols-2' : ''} ${services.length > 2 ? 'lg:grid-cols-3' : ''}` :
                    layout === 'list' ? 'grid-cols-1 max-w-4xl mx-auto' :
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={service.id} 
                            service={service} 
                            index={index} 
                        />
                    ))}
                </div>

                {/* CTA adicional si hay más servicios */}
                {maxServices && config.services.length > maxServices && (
                    <div className="text-center mt-12">
                        <Link
                            href="/servicios"
                            className="inline-block px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                            style={{ backgroundColor: config.branding.secondaryColor }}
                        >
                            Ver Todos los Servicios
                            <ArrowRight className="w-5 h-5 inline ml-2" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}