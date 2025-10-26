"use client"; // 🔥 Renderizado solo en el cliente

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNavigation from "@/components/BottomNavigation";

interface LayoutClientProps {
    children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
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