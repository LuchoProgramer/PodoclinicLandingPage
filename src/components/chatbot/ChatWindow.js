import React, { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import "./chatbot.css";

const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" }
    ]);
    const [whatsappLink, setWhatsappLink] = useState(null);

    const sendMessage = async (text) => {
        const newMessage = { text, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        try {
            const response = await fetch(`${API_URL}/chatbot/responder/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    empresa_id: "PodoClinicEC",
                    chatbot_id: "landing_bot",
                    mensaje: text
                })
            });

            const data = await response.json();

            // Si hay un botón de WhatsApp, lo mostramos
            if (data.boton_whatsapp) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "¡Puedes agendar tu cita aquí! 👇", sender: "bot" }
                ]);
                setWhatsappLink(data.boton_whatsapp);
            } else {
                setMessages((prevMessages) => [...prevMessages, { text: data.respuesta, sender: "bot" }]);
                setWhatsappLink(null); // Limpiar el botón si no es necesario
            }
        } catch (error) {
            console.error("Error al conectar con el chatbot:", error);
            setMessages((prevMessages) => [...prevMessages, { text: "Error al conectar con el servidor.", sender: "bot" }]);
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} />
                ))}
            </div>

            {/* Mostrar el botón de WhatsApp solo si está disponible */}
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