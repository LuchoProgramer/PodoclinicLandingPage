import "../styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Podología en Quito | Tratamiento para Pie Diabético y Uñeros",
  description: "Clínica podológica en Quito especializada en uñeros, pie diabético, hongos y verrugas plantares. Más de 500 pacientes satisfechos. Consulta gratuita y atención personalizada.",
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
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="ms0gw8rk4q2dih57znfb3d392zj3j0" />
        
        {/* Content Security Policy for tracking scripts */}
        <meta httpEquiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://analytics.tiktok.com https://ads.tiktok.com https://www.clarity.ms; connect-src 'self' https://www.google-analytics.com https://analytics.tiktok.com https://ads.tiktok.com https://connect.facebook.net https://www.clarity.ms; img-src 'self' data: https: https://www.facebook.com https://www.clarity.ms;" />
        
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