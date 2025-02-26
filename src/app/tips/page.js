"use client";

import Link from "next/link";
import Image from "next/image"; // Importamos el componente Image de Next.js

export default function TipsPage() {
    const tipsCategories = [
        {
            id: "uneros",
            title: "Evita los Uñeros",
            description: "Consejos para prevenir uñas encarnadas y mantener tus pies sanos.",
            link: "/tips/uneros",
            imageUrl: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1740611942/Tarjeta_01_Tips_anti_un%CC%83eros_jbzybc_ntlynr.png",
        },
        {
            id: "verano",
            title: "Cuidado en Verano",
            description: "Tips para proteger tus pies en la playa este verano.",
            link: "/tips/verano",
            imageUrl: "https://res.cloudinary.com/dbbukhtz5/image/upload/v1740611604/Tarjeta_02_Tips_para_el_verano_ofrfq9.png",
        },
    ];

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Consejos para tus Pies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tipsCategories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-background shadow-md rounded-lg p-6 text-center"
                    >
                        {/* Imagen con contenedor ajustado */}
                        <div className="relative w-full h-0 pb-[66.67%] max-w-lg mx-auto mb-4">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                fill // Ocupa el contenedor
                                style={{ objectFit: "cover" }} // Ajusta cómo se muestra la imagen
                                className="rounded-t-lg"
                                placeholder="blur" // Efecto de carga suave
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAAAAKgAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyMjKC0fHB4pKSkqKy8xNTU1GiQ7QDs0Py40NTE5OTv/2wBDAQsLCw0NDxkQEBkQHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5PooooA/9k=" // Placeholder genérico
                            />
                        </div>
                        <h2 className="text-xl font-bold">{category.title}</h2>
                        <p className="mt-4 text-gray-600">{category.description}</p>
                        <Link
                            href={category.link}
                            className="mt-6 inline-block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition-colors"
                        >
                            Ver Consejos
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}