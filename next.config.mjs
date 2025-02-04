/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // 👈 Fuerza la exportación estática
    reactStrictMode: true,
    trailingSlash: true, // 👈 Asegura que todas las rutas terminen en "/"
    images: {
        unoptimized: true, // 👈 Evita problemas con imágenes en Next.js estático
    },
};

export default nextConfig; // 👈 IMPORTANTE: Usa "export default" en archivos MJS
