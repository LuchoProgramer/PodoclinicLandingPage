import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog de Podología - PodoClinic Dra. Cristina Muñoz',
    default: 'Blog de Podología en Quito | Consejos y Guías Especializadas'
  },
  description: 'Blog especializado en podología: consejos para el cuidado de pies, tratamiento de uñeros, pie diabético, hongos y más. Artículos por la Dra. Cristina Muñoz.',
  keywords: [
    'blog podología quito',
    'consejos cuidado pies',
    'tratamiento uñeros',
    'pie diabético cuidados',
    'hongos uñas prevención',
    'podología deportiva',
    'cuidado preventivo pies',
    'dra cristina muñoz blog'
  ],
  openGraph: {
    title: 'Blog de Podología en Quito | Consejos Especializados',
    description: 'Artículos especializados sobre podología: cuidado de pies, tratamientos y prevención. Por la Dra. Cristina Muñoz.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'PodoClinic Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Podología en Quito',
    description: 'Consejos especializados y artículos sobre cuidado de pies por la Dra. Cristina Muñoz.',
  },
};

export default function BlogLayout({
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