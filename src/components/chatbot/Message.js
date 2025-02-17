import React from "react";
import "./chatbot.css";

const Message = ({ text, sender }) => {
    return (
        <div className={`message ${sender}`}>
            <p>{text}</p>
        </div>
    );
};

export default Message;