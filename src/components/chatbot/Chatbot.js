import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "¡Hola! Soy BrIAn ¿En qué puedo ayudarte?", sender: "bot" }
    ]);

    return (
        <div className={styles.chatbotContainer}>
            {isOpen && <ChatWindow messages={messages} setMessages={setMessages} />}
            <button className={styles.chatbotToggle} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : (
                    <img
                        src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1739994374/Icon_BrIAN_zqc4jh.png"
                        alt="Chatbot Icon"
                        className={styles.chatbotIcon}
                    />
                )}
            </button>
        </div>
    );
};

export default Chatbot;