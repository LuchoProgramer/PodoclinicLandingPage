import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import "./chatbot.css";

// Define la URL base sin la parte final "/chat"
const API_URL =
    process.env.NEXT_PUBLIC_CHATBOT_API_URL ||
    "https://chatbot-api-493217655982.us-central1.run.app/api";

const ChatWindow = ({ empresaId = "podoclinicec.com" }) => {
    // Verifica la URL en consola al montar el componente
    useEffect(() => {
        console.log("API_URL:", API_URL);
    }, []);

    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy BrIAn ¿En qué puedo ayudarte?", sender: "bot" }
    ]);
    const [whatsappLink, setWhatsappLink] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = async (text) => {
        // Agrega el mensaje del usuario y activa el indicador de "Escribiendo..."
        const newMessage = { text, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await fetch(`${API_URL}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_id: `${empresaId}-${Date.now()}`,
                    empresa_id: empresaId,
                    message: text
                })
            });

            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }

            // Espera la respuesta completa del servidor
            const replyText = await response.text();
            console.log("Respuesta completa:", replyText);

            // Si la respuesta incluye un enlace de WhatsApp, separamos la parte del mensaje
            if (replyText.includes("https://wa.me")) {
                const parts = replyText.split(/(https:\/\/wa\.me\/\S+)/);
                const finalReply = parts[0].trim();
                const whatsappUrl = parts[1];
                setWhatsappLink(whatsappUrl);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: finalReply, sender: "bot" }
                ]);
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: replyText, sender: "bot" }
                ]);
            }
        } catch (error) {
            console.error("Error al conectar con el chatbot:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Lo siento, hubo un problema al conectar. Intenta de nuevo.", sender: "bot" }
            ]);
            setWhatsappLink(null);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} />
                ))}
                {isTyping && (
                    <div className="typing-indicator">
                        <span>Escribiendo...</span>
                    </div>
                )}
            </div>

            {whatsappLink && (
                <div className="whatsapp-container">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                    >
                        📲 Agendar Cita por WhatsApp
                    </a>
                </div>
            )}

            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;