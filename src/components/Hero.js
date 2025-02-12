export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#60BEC3] to-[#79A373] px-6">
            {/* Contenido principal del Hero */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                Impulsamos cada uno de tus pasos
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl text-white drop-shadow-md">
                Profesionales en podología con un servicio personalizado y atención de calidad.
            </p>

            {/* Botón de CTA */}
            <a
                href="https://wa.me/593995832788?text=Hola,%20quiero%20reservar%20una%20cita%20con%20PodoClinicec."
                className="mt-8 bg-white text-[#60BEC3] px-8 py-3 rounded-full text-lg font-semibold shadow-lg 
                     hover:shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
                Reserva tu cita
            </a>

            {/* Testimonio (claim) para reforzar la credibilidad */}
            <div className="mt-8 max-w-md w-full bg-white/90 text-gray-700 p-4 md:p-6 rounded-md shadow-md">
                <p className="italic">
                    “Excelente servicio, mis pies nunca habían estado tan sanos. Sin duda volveré.”
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">
                    – Ana Martínez, 45 años
                </p>
                <div className="mt-2 flex items-center justify-center space-x-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-xs text-gray-500">Paciente verificado</span>
                </div>
            </div>
        </section>
    );
}
