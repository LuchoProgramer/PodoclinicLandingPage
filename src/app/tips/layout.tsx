import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Tips de Podología - PodoClinic Dra. Cristina Muñoz',
    default: 'Tips de Podología | Consejos Prácticos para el Cuidado de Pies'
  },
  description: 'Tips y consejos prácticos de podología para el cuidado diario de tus pies. Guías estacionales y recomendaciones profesionales.',
  keywords: [
    'tips podología',
    'consejos cuidado pies',
    'cuidado pies verano',
    'cuidado pies invierno',
    'prevención uñeros',
    'higiene podal',
    'calzado saludable',
    'ejercicios pies'
  ],
  openGraph: {
    title: 'Tips de Podología | Consejos para el Cuidado de Pies',
    description: 'Tips prácticos y consejos profesionales para mantener tus pies saludables. Guías estacionales y recomendaciones.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'PodoClinic Tips',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tips de Podología | Cuidado de Pies',
    description: 'Consejos prácticos y tips profesionales para el cuidado diario de tus pies.',
  },
};

export default function TipsLayout({
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