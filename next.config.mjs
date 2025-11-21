/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // 🔹 Asegura que las URLs terminen con "/"
    images: {
        // ✅ Configuración para imágenes optimizadas con remotePatterns
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'pukapresscms.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'podoclinicec.com',
            },
            {
                protocol: 'https',
                hostname: 'www.clinicaplanas.com',
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días cache
        dangerouslyAllowSVG: false, // Seguridad SVG
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // CSP temporalmente deshabilitado para desarrollo con CMS
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: `...`
    //                 },
    //             ],
    //         },
    //     ]
    // },
};

export default nextConfig; // 🔹 Sintaxis correcta para archivos .mjs