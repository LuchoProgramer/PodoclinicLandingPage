import Hero from "../components/Hero";
import Cuestionarios from "../components/Cuestionarios";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import InformacionContacto from "../components/InformacionContacto"; // 👈 Importamos el nuevo componente

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-gray-100">
        <Cuestionarios />
      </section>
      <Servicios />
      <Contacto />
      <InformacionContacto /> {/* 👈 Nueva sección de contacto con mapa */}
    </>
  );
}