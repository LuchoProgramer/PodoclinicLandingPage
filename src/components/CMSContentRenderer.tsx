/**
 * Renderizador de contenido dinámico para posts del CMS
 * Convierte el contenido del CMS en componentes React renderizables
 */

'use client';

import { BlogPost } from '@/types';
import { CheckCircle, AlertTriangle, Info, Lightbulb, Heart } from 'lucide-react';

interface CMSContentRendererProps {
  post: BlogPost;
}

// Componentes reutilizables para el contenido CMS
const ContentComponents = {
  // Sección de introducción
  Introduction: ({ children }: { children: React.ReactNode }) => (
    <div className="mb-8">
      <p className="text-gray-700 text-lg leading-relaxed">{children}</p>
    </div>
  ),

  // Lista con viñetas
  BulletList: ({ items }: { items: string[] }) => (
    <ul className="space-y-2 mb-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-[#60BEC3] mr-3">•</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  ),

  // Lista numerada con iconos
  NumberedList: ({ items }: { items: string[] }) => (
    <div className="space-y-4 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="bg-[#60BEC3] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
            {index + 1}
          </div>
          <div className="text-gray-700">{item}</div>
        </div>
      ))}
    </div>
  ),

  // Caja de alerta/advertencia
  AlertBox: ({ type, title, children }: { 
    type: 'warning' | 'info' | 'success' | 'tip'; 
    title: string; 
    children: React.ReactNode 
  }) => {
    const config = {
      warning: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-800', icon: AlertTriangle },
      info: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-800', icon: Info },
      success: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800', icon: CheckCircle },
      tip: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-800', icon: Lightbulb }
    };

    const { bg, border, text, icon: Icon } = config[type];

    return (
      <div className={`${bg} border-l-4 ${border} p-6 mb-8`}>
        <div className="flex items-start">
          <Icon className={`w-6 h-6 ${text} mr-3 flex-shrink-0 mt-0.5`} />
          <div>
            <h3 className={`text-lg font-semibold ${text} mb-3`}>{title}</h3>
            <div className={text}>{children}</div>
          </div>
        </div>
      </div>
    );
  },

  // Sección con título
  Section: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      {children}
    </div>
  ),

  // Grid de características
  FeatureGrid: ({ features }: { features: Array<{ icon: string; title: string; description: string }> }) => (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-green-50 rounded-lg p-6">
          <div className="text-2xl mb-3">{feature.icon}</div>
          <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
          <p className="text-gray-700 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  ),

  // CTA personalizado
  CustomCTA: ({ title, description, buttonText, link }: {
    title: string;
    description: string;
    buttonText: string;
    link: string;
  }) => (
    <div className="bg-gradient-to-r from-[#60BEC3] to-[#79A373] rounded-2xl p-8 text-center text-white mt-12">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg mb-6 opacity-90">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-[#60BEC3] px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <Heart className="w-5 h-5 mr-2" />
        {buttonText}
      </a>
    </div>
  )
};

export default function CMSContentRenderer({ post }: CMSContentRendererProps) {
  // Si el post tiene contenido personalizado, renderizarlo
  if (post.content && post.content.trim()) {
    return (
      <div className="prose prose-lg max-w-none">
        <div 
          className="cms-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    );
  }

  // Si no tiene contenido personalizado, generar contenido basado en la categoría
  const renderDefaultContent = () => {
    switch (post.category) {
      case 'uneros':
        return (
          <>
            <ContentComponents.Introduction>
              Los uñeros son una de las consultas más frecuentes en podología. 
              En este artículo, la Dra. Cristina Muñoz te explica todo lo que necesitas saber 
              sobre esta condición y cómo tratarla correctamente.
            </ContentComponents.Introduction>

            <ContentComponents.AlertBox type="warning" title="⚠️ Atención Inmediata">
              Si presentas fiebre, pus abundante, líneas rojas que se extienden, 
              dolor incapacitante o eres diabético, busca atención profesional inmediata.
            </ContentComponents.AlertBox>

            <ContentComponents.Section title="¿Qué son los Uñeros exactamente?">
              <p className="text-gray-700 mb-4">
                Los uñeros, técnicamente llamados onicocriptosis, ocurren cuando el borde de la uña 
                se curva y crece dentro de la piel circundante, causando dolor, inflamación y 
                potenciales infecciones.
              </p>
            </ContentComponents.Section>

            <ContentComponents.Section title="Principales Causas">
              <ContentComponents.BulletList items={[
                'Corte inadecuado de las uñas (demasiado cortas o redondeadas)',
                'Uso de zapatos ajustados o de tacón alto',
                'Traumatismos repetidos (deportes, actividades laborales)',
                'Predisposición genética',
                'Hongos en las uñas que alteran su crecimiento',
                'Sudoración excesiva de los pies'
              ]} />
            </ContentComponents.Section>

            <ContentComponents.Section title="Tratamiento Profesional">
              <ContentComponents.FeatureGrid features={[
                {
                  icon: '🔬',
                  title: 'Evaluación Completa',
                  description: 'Análisis del grado de severidad y factores contributivos'
                },
                {
                  icon: '⚡',
                  title: 'Técnica Láser',
                  description: 'Tratamiento mínimamente invasivo con recuperación rápida'
                },
                {
                  icon: '🛡️',
                  title: 'Prevención',
                  description: 'Plan personalizado para evitar recurrencias'
                },
                {
                  icon: '🏠',
                  title: 'Atención Domicilio',
                  description: 'Comodidad y seguridad en tu hogar'
                }
              ]} />
            </ContentComponents.Section>

            <ContentComponents.CustomCTA 
              title="¿Sufres de uñeros recurrentes?"
              description="La Dra. Cristina Muñoz puede ayudarte con técnicas modernas y efectivas"
              buttonText="Consulta Especializada"
              link="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Necesito%20tratamiento%20para%20uñeros"
            />
          </>
        );

      case 'pie-diabetico':
        return (
          <>
            <ContentComponents.Introduction>
              El cuidado de los pies en personas diabéticas es fundamental para prevenir 
              complicaciones graves. La Dra. Cristina Muñoz te guía en este proceso esencial.
            </ContentComponents.Introduction>

            <ContentComponents.AlertBox type="info" title="💡 Dato Importante">
              El 85% de las amputaciones relacionadas con diabetes se pueden prevenir 
              con cuidados podológicos adecuados y revisiones periódicas.
            </ContentComponents.AlertBox>

            <ContentComponents.Section title="Inspección Diaria - Los 5 Puntos Clave">
              <ContentComponents.NumberedList items={[
                'Revisa toda la superficie del pie, incluyendo entre los dedos',
                'Busca cambios en color, temperatura o textura de la piel',
                'Identifica cortadas, ampollas, callos o áreas enrojecidas',
                'Verifica que las uñas estén en buen estado',
                'Evalúa la sensibilidad tocando diferentes zonas'
              ]} />
            </ContentComponents.Section>

            <ContentComponents.Section title="Señales de Alarma">
              <ContentComponents.AlertBox type="warning" title="🚨 Busca Atención Inmediata Si:">
                <ContentComponents.BulletList items={[
                  'Heridas que no cicatrizan en 2-3 días',
                  'Cambios en color (azul, negro, muy rojo)',
                  'Pérdida de sensibilidad en alguna zona',
                  'Dolor persistente o pulsátil',
                  'Mal olor proveniente del pie',
                  'Fiebre acompañada de problemas en los pies'
                ]} />
              </ContentComponents.AlertBox>
            </ContentComponents.Section>

            <ContentComponents.CustomCTA 
              title="¿Eres diabético y necesitas evaluación podológica?"
              description="Programa tu revisión preventiva con la Dra. Cristina Muñoz"
              buttonText="Agendar Evaluación Preventiva"
              link="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Soy%20diabético%20y%20necesito%20evaluación%20podológica"
            />
          </>
        );

      case 'hongos':
        return (
          <>
            <ContentComponents.Introduction>
              Los hongos en pies y uñas son más comunes de lo que piensas, especialmente 
              en el clima de Quito. Aprende a identificarlos y tratarlos correctamente.
            </ContentComponents.Introduction>

            <ContentComponents.Section title="Tipos Principales de Hongos">
              <ContentComponents.FeatureGrid features={[
                {
                  icon: '🦶',
                  title: 'Pie de Atleta',
                  description: 'Afecta la piel entre los dedos, causa picazón y descamación'
                },
                {
                  icon: '💅',
                  title: 'Onicomicosis',
                  description: 'Infecta las uñas, las vuelve gruesas, amarillentas y quebradizas'
                },
                {
                  icon: '🔴',
                  title: 'Candidiasis',
                  description: 'Más común en personas diabéticas, causa enrojecimiento'
                },
                {
                  icon: '⚫',
                  title: 'Hongos Negros',
                  description: 'Menos comunes pero más resistentes al tratamiento'
                }
              ]} />
            </ContentComponents.Section>

            <ContentComponents.AlertBox type="tip" title="💡 Prevención Efectiva">
              <ContentComponents.BulletList items={[
                'Mantén los pies secos, especialmente entre los dedos',
                'Cambia calcetines diariamente (preferible algodón)',
                'Usa zapatos que permitan ventilación',
                'No camines descalzo en áreas húmedas públicas',
                'Desinfecta zapatos periódicamente'
              ]} />
            </ContentComponents.AlertBox>

            <ContentComponents.CustomCTA 
              title="¿Sospechas que tienes hongos en los pies?"
              description="Un diagnóstico temprano facilita el tratamiento. Consulta con la especialista."
              buttonText="Diagnóstico Profesional"
              link="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Creo%20que%20tengo%20hongos%20en%20los%20pies"
            />
          </>
        );

      default:
        return (
          <>
            <ContentComponents.Introduction>
              {post.excerpt || 'Contenido especializado en podología por la Dra. Cristina Muñoz.'}
            </ContentComponents.Introduction>

            <ContentComponents.Section title="Información Profesional">
              <p className="text-gray-700">
                Este artículo forma parte de nuestra biblioteca de contenido podológico especializado. 
                Para información más detallada y personalizada, no dudes en contactar directamente 
                con la Dra. Cristina Muñoz.
              </p>
            </ContentComponents.Section>

            <ContentComponents.CustomCTA 
              title="¿Necesitas más información sobre este tema?"
              description="La Dra. Cristina Muñoz puede brindarte asesoría personalizada"
              buttonText="Consulta Especializada"
              link="https://wa.me/593995832788?text=¡Hola%20Dra.%20Cristina!%20Me%20interesa%20información%20sobre%20podología"
            />
          </>
        );
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {renderDefaultContent()}
      </div>
    </div>
  );
}