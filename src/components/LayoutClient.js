"use client"; // 🔥 Renderizado solo en el cliente

import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNavigation from "@/components/BottomNavigation";

export default function LayoutClient({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
            <BottomNavigation />
        </>
    );
}