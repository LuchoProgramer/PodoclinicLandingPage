import React, { useState } from "react";
import "./chatbot.css";

const ChatInput = ({ sendMessage }) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim() !== "") {
            sendMessage(input);
            setInput("");
        }
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
};

export default ChatInput;