import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import BrIANLogo from "../BrIANLogo"; // Asegúrate de que la ruta sea correcta
import styles from "./Chatbot.module.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy BrIAn ¿En qué puedo ayudarte?", sender: "bot" }
    ]);

    return (
        <div className={styles.chatbotContainer}>
            {isOpen && <ChatWindow messages={messages} setMessages={setMessages} />}
            <button
                className={styles.chatbotToggle}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✖" : <BrIANLogo />}
            </button>
        </div>
    );
};

export default Chatbot;