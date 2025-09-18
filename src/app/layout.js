import "../styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Podología en Quito | Tratamiento para Pie Diabético y Uñeros",
  description: "Atención podológica especializada en Quito. Tratamiento de uñeros, pie diabético, onicomicrosis y verrugas. Reserva tu cita hoy.",
  robots: "index, follow",
  keywords: [
    "podología",
    "pie diabético",
    "uñeros",
    "tratamiento uñeros",
    "podología en Quito"
  ],
  openGraph: {
    title: "Podología en Quito | Tratamiento para Pie Diabético y Uñeros",
    description: "Atención podológica especializada en Quito. Trato personalizado para adultos mayores y pacientes con pie diabético.",
    url: "https://podoclinicec.com/",
    siteName: "PodoClinicec",
    images: [
      {
        url: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
        width: 1200,
        height: 630,
        alt: "PodoClinicec - Podología en Quito",
      },
    ],
    type: "website",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podología en Quito | Tratamiento para Pie Diabético y Uñeros",
    description: "Atención podológica especializada en Quito. Trato personalizado para adultos mayores y pacientes con pie diabético.",
    images: [
      "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WXW86JFH');
            `,
          }}
        />
        {/* Mantén GA4 por ahora; lo migraremos a GTM */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-FHN5JGKH34`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FHN5JGKH34');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXW86JFH"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}