import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Servicios de Podología - PodoClinic Dra. Cristina Muñoz',
    default: 'Servicios de Podología en Quito Norte | PodoClinic Dra. Cristina Muñoz'
  },
  description: 'Servicios especializados de podología en Quito Norte: uñeros, pie diabético, hongos, profilaxis podal y verrugas. Atención en consultorio y domicilio.',
  keywords: [
    'servicios podología quito',
    'podólogo quito norte',
    'tratamiento uñeros quito',
    'pie diabético quito',
    'hongos uñas quito',
    'profilaxis podal',
    'verrugas plantares quito',
    'podología domicilio quito'
  ],
  openGraph: {
    title: 'Servicios de Podología en Quito Norte | PodoClinic',
    description: 'Servicios especializados: uñeros, pie diabético, hongos, profilaxis. Dra. Cristina Muñoz, 5 años experiencia.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'PodoClinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Podología en Quito Norte',
    description: 'Tratamientos especializados de podología con la Dra. Cristina Muñoz. Atención en consultorio y domicilio.',
  },
};

export default function ServiciosLayout({
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