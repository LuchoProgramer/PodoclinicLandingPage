import React, { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import "./chatbot.css";

// URL del backend (puedes moverla a .env como antes)
const API_URL = process.env.REACT_APP_API_URL || "https://chatbot-api-493217655982.us-central1.run.app/api";

const ChatWindow = ({ empresaId = "podoclinicec.com" }) => {  // Añadimos empresaId como prop con valor por defecto
    const [messages, setMessages] = useState([
        { text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" }
    ]);
    const [whatsappLink, setWhatsappLink] = useState(null);

    const sendMessage = async (text) => {
        const newMessage = { text, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        try {
            const response = await fetch(`${API_URL}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_id: `${empresaId}-${Date.now()}`,  // Session_id único por empresa y timestamp
                    empresa_id: empresaId,  // Añadimos empresa_id al payload
                    message: text
                })
            });

            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }

            const data = await response.json();

            if (data.boton_whatsapp) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: data.reply || "¡Puedes agendar tu cita aquí! 👇", sender: "bot" }
                ]);
                setWhatsappLink(data.boton_whatsapp);
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: data.reply, sender: "bot" }
                ]);
                setWhatsappLink(null);
            }
        } catch (error) {
            console.error("Error al conectar con el chatbot:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Lo siento, hubo un problema al conectar. Intenta de nuevo.", sender: "bot" }
            ]);
            setWhatsappLink(null);
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} />
                ))}
            </div>

            {whatsappLink && (
                <div className="whatsapp-container">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                        📲 Agendar Cita por WhatsApp
                    </a>
                </div>
            )}

            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;