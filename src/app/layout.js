// app/layout.js
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}