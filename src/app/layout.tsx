import "../styles/globals.css";
import Script from "next/script";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL('https://podoclinicec.com'),
  title: "Podólogo a Domicilio Quito Norte | Cristina Muñoz - Podoclinicec",
  description: "Podólogo especialista a domicilio en Quito Norte. 13 reseñas Google 5 estrellas. Cristina Muñoz: uñeros, pie diabético, hongos. Desde $35. Cobertura 8km.",
  robots: "index, follow",
  keywords: [
    "podólogo quito norte",
    "podología domicilio quito", 
    "uñeros quito norte",
    "pie diabético quito",
    "hongos uñas quito",
    "profilaxis podal",
    "verrugas plantares",
    "cristina muñoz",
    "podólogo domicilio",
    "13 reseñas google 5 estrellas"
  ],
  openGraph: {
    title: "Podólogo a Domicilio Quito Norte | Cristina Muñoz - Podoclinicec",
    description: "Podólogo especialista a domicilio en Quito Norte. 13 reseñas Google 5 estrellas. Cristina Muñoz, 5 años experiencia. Cobertura La Florida.",
    url: "https://podoclinicec.com/",
    siteName: "Podoclinicec",
    images: [
      {
        url: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
        width: 1200,
        height: 630,
        alt: "Podoclinicec - Podólogo a Domicilio Quito Norte",
      },
    ],
    type: "website",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podólogo a Domicilio Quito Norte | Cristina Muñoz",
    description: "Especialista en podología: uñeros, pie diabético, hongos. 13 reseñas Google 5 estrellas. Atención domicilio Quito Norte.",
    images: [
      "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png"
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="ms0gw8rk4q2dih57znfb3d392zj3j0" />
        
        {/* Content Security Policy for tracking scripts and CMS API */}
        <meta httpEquiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://analytics.tiktok.com https://ads.tiktok.com https://www.clarity.ms https://static.cloudflareinsights.com; connect-src 'self' https://www.google-analytics.com https://analytics.tiktok.com https://ads.tiktok.com https://connect.facebook.net https://www.clarity.ms https://pukapresscms.vercel.app; img-src 'self' data: https: https://www.facebook.com https://www.clarity.ms;" />
        
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
        
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '827077656519595');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=827077656519595&ev=PageView&noscript=1"
          />
        </noscript>
        
        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D3FD2NBC77U7D8VS5C00');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "o4qcj2k9pm");
          `}
        </Script>
        <Script id="podoclinic-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalClinic",
                  "@id": "https://podoclinicec.com/#medicalclinic",
                  "name": "Podoclinicec - Cristina Muñoz",
                  "alternateName": "Podoclinicec",
                  "url": "https://podoclinicec.com",
                  "logo": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
                  "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
                  "description": "Podólogo especialista a domicilio en Quito Norte. 13 reseñas Google 5 estrellas. Cristina Muñoz: uñeros, pie diabético, hongos. Cobertura 8km.",
                  "medicalSpecialty": [
                    "Podiatry",
                    "Diabetic Foot Care", 
                    "Nail Disorders Treatment"
                  ],
                  "priceRange": "$$",
                  "paymentAccepted": ["Cash", "Bank Transfer"],
                  "currenciesAccepted": "USD",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Quito Norte",
                    "addressRegion": "Pichincha",
                    "addressCountry": "EC"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "-0.1807",
                    "longitude": "-78.4678"
                  },
                  "telephone": "+593995832788",
                  "email": "contacto@podoclinicec.com",
                  "openingHours": "Mo-Fr 08:00-18:00",
                  "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": "-0.1807",
                      "longitude": "-78.4678"
                    },
                    "geoRadius": "8000"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios Podológicos",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalService",
                          "name": "Tratamiento de Uñeros",
                          "alternateName": "Onicocriptosis",
                          "description": "Tratamiento profesional de uñas encarnadas sin dolor"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "MedicalService",
                          "name": "Cuidado de Pie Diabético",
                          "description": "Atención especializada para pacientes diabéticos"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalService", 
                          "name": "Profilaxis Podal",
                          "description": "Limpieza e higiene integral de pies"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalService",
                          "name": "Tratamiento de Verrugas Plantares", 
                          "description": "Eliminación de verrugas plantares por cauterización"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "MedicalService",
                          "name": "Tratamiento de Hongos",
                          "alternateName": "Onicomicosis",
                          "description": "Tratamiento antifúngico para hongos en uñas y pies"
                        }
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "13",
                    "bestRating": "5",
                    "worstRating": "5"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://podoclinicec.com/#podiatrist",
                  "name": "Cristina Muñoz",
                  "givenName": "Cristina",
                  "familyName": "Muñoz",
                  "jobTitle": "Podóloga",
                  "gender": "Female",
                  "nationality": "Ecuadorian",
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Universidad Central del Ecuador"
                  },
                  "hasOccupation": {
                    "@type": "Occupation",
                    "name": "Podóloga",
                    "occupationalCategory": "Healthcare"
                  },
                  "yearsExperience": "5",
                  "workLocation": {
                    "@id": "https://podoclinicec.com/#medicalclinic"
                  },
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "Professional License",
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "Ministerio de Salud Pública del Ecuador"
                      }
                    }
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://podoclinicec.com/#localbusiness", 
                  "name": "Podoclinicec Quito Norte",
                  "image": "https://res.cloudinary.com/dbbukhtz5/image/upload/v1739392953/PODOCLINIC_LOGO_uerq9h.png",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Quito Norte",
                    "addressRegion": "Pichincha", 
                    "addressCountry": "EC"
                  },
                  "telephone": "+593995832788",
                  "url": "https://podoclinicec.com",
                  "sameAs": [
                    "https://www.facebook.com/podoclinicec",
                    "https://www.instagram.com/podoclinicec",
                    "https://wa.me/593995832788"
                  ]
                }
              ]
            }
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
        {/* SEO Debugger - solo en desarrollo */}
        {process.env.NODE_ENV === 'development' && (
          <div>
            {/* Importación dinámica para evitar problemas en producción */}
          </div>
        )}
      </body>
    </html>
  );
}