import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | FAQ Podología - PodoClinic Cristina Muñoz',
  description: 'Preguntas frecuentes sobre podología en Quito Norte: uñeros, pie diabético, hongos, precios, horarios y más. Respuestas de Cristina Muñoz.',
  keywords: [
    'faq podología quito',
    'preguntas frecuentes podólogo',
    'precios podología quito',
    'consulta podólogo quito',
    'tratamiento uñeros preguntas',
    'pie diabético consultas',
    'horarios podólogo quito norte'
  ],
  openGraph: {
    title: 'FAQ Podología | Preguntas Frecuentes - PodoClinic',
    description: 'Respuestas a las preguntas más frecuentes sobre podología en Quito Norte. Información sobre tratamientos, precios y consultas.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'PodoClinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Podología | Preguntas Frecuentes',
    description: 'Respuestas profesionales a las preguntas más comunes sobre podología y tratamientos.',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}