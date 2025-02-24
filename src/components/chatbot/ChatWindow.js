import React, { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import "./chatbot.css";

const API_URL = process.env.REACT_APP_API_URL || "https://chatbot-api-493217655982.us-central1.run.app/api";

const ChatWindow = ({ empresaId = "podoclinicec.com" }) => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy BrIAn ¿En qué puedo ayudarte?", sender: "bot" }
    ]);
    const [whatsappLink, setWhatsappLink] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = async (text) => {
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

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let accumulatedResponse = "";
            let hasWhatsapp = false;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split("\n\n");  // Separar por eventos

                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        const data = line.slice(6).trim();  // Extraer contenido después de "data: "
                        if (data) {
                            if (data.includes("https://wa.me")) {
                                hasWhatsapp = true;
                                const linkStart = data.indexOf("https://wa.me");
                                const whatsappUrl = data.substring(linkStart);
                                setWhatsappLink(whatsappUrl);
                                accumulatedResponse = data.substring(0, linkStart).trim() || "¡Puedes agendar tu cita aquí! 👇";
                            } else {
                                accumulatedResponse += data;
                            }
                            setMessages((prevMessages) => [
                                ...prevMessages.slice(0, -1),  // Reemplazar el último mensaje "isTyping"
                                { text: accumulatedResponse, sender: "bot" }
                            ]);
                        }
                    }
                }
            }

            setIsTyping(false);
        } catch (error) {
            console.error("Error al conectar con el chatbot:", error);
            setIsTyping(false);
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
                {isTyping && (
                    <div className="typing-indicator">
                        <span>Escribiendo...</span>
                    </div>
                )}
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