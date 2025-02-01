export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#60BEC3] to-[#79A373] text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">Cuidamos la salud de tus pies</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
                Profesionales en podología con un servicio personalizado y atención de calidad.
            </p>
            <a
                href="/reserva"
                className="mt-6 bg-white text-[#60BEC3] px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition"
            >
                Reserva tu cita
            </a>
        </section>
    );
}  