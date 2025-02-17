import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import "./chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatbot-container">
            {isOpen && <ChatWindow />}
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2a3 3 0 0 1 3 3v1h1a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-.5a2.5 2.5 0 0 1-5 0H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h1V5a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1zm5 6H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-6 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
