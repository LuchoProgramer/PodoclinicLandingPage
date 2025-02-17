import React, { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import "./chatbot.css";

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! ¿En qué puedo ayudarte?", sender: "bot" }
    ]);

    const sendMessage = async (text) => {
        const newMessage = { text, sender: "user" };
        setMessages([...messages, newMessage]);

        try {
            const response = await fetch("/api/chat", {  // Usamos la API local de Next.js
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text })
            });

            const data = await response.json();
            setMessages([...messages, newMessage, { text: data.response, sender: "bot" }]);
        } catch (error) {
            setMessages([...messages, newMessage, { text: "Error al conectar con el servidor.", sender: "bot" }]);
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