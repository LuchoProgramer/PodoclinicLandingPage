import React, { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import "./chatbot.css";

const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "http://127.0.0.1:8000";

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" }
    ]);

    const sendMessage = async (text) => {
        const newMessage = { text, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        try {
            const response = await fetch(`${API_URL}/chatbot/responder/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    empresa_id: "PodoclinicEC",  // 🔹 Debe coincidir con Firestore
                    chatbot_id: "landing_bot",
                    mensaje: text
                })
            });

            const data = await response.json();

            setMessages((prevMessages) => [...prevMessages, { text: data.respuesta, sender: "bot" }]);
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
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;