import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton"; // 👈 Importa el botón flotante
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton /> {/* 👈 Agregamos el botón flotante aquí */}
      </body>
    </html>
  );
}