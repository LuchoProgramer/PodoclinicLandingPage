/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // 🔹 Asegura que las URLs terminen con "/"
    images: {
        unoptimized: true, // 🔹 Evita problemas con imágenes en Next.js estático
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