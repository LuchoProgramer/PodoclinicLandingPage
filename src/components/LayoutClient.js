"use client"; // 🔥 Renderizado solo en el cliente

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/chatbot/Chatbot"; // Importamos el chatbot

export default function LayoutClient({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
            <Chatbot />  {/* Agregamos el Chatbot aquí */}
        </>
    );
}