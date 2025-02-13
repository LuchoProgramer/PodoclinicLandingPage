/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // 🔹 Asegura la exportación estática
    reactStrictMode: true,
    trailingSlash: true, // 🔹 Asegura que las URLs terminen con "/"
    images: {
        unoptimized: true, // 🔹 Evita problemas con imágenes en Next.js estático
    },
};

export default nextConfig; // 🔹 Sintaxis correcta para archivos .mjs