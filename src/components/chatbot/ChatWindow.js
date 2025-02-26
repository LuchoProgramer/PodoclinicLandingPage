import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import styles from "./Chatbot.module.css";

const API_URL =
    process.env.NEXT_PUBLIC_CHATBOT_API_URL ||
    "https://chatbot-api-493217655982.us-central1.run.app/api";

const ChatWindow = ({
    empresaId = "podoclinicec.com",
    messages = [],
    setMessages
}) => {
    useEffect(() => {
        console.log("API_URL:", API_URL);
        console.log("Messages recibidos:", messages);
    }, [messages]);

    const [whatsappLink, setWhatsappLink] = useState(null);
    const [mapLink, setMapLink] = useState(null);
    const [showMap, setShowMap] = useState(false);
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

            const reply = await response.json();
            let replyText = reply.message;
            console.log("Respuesta parseada:", replyText);

            let finalReply = replyText;
            let whatsappUrl = null;
            let mapUrl = null;

            // Extraer enlace de WhatsApp
            const whatsappMatch = replyText.match(/https:\/\/wa\.me\/[^\s]+/);
            if (whatsappMatch) {
                whatsappUrl = whatsappMatch[0];
                finalReply = replyText.replace(whatsappUrl, "").trim();
            }

            // Extraer enlace de Google Maps
            const mapMatch = replyText.match(/https:\/\/maps\.app\.goo\.gl\/[^\s]+/);
            if (mapMatch) {
                mapUrl = mapMatch[0];
                finalReply = finalReply.replace(mapUrl, "").trim();
            }

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: finalReply, sender: "bot" }
            ]);
            setWhatsappLink(whatsappUrl);
            setMapLink(mapUrl);
            setShowMap(false);
        } catch (error) {
            console.error("Error al conectar con el chatbot:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: "Lo siento, hubo un problema al conectar. Intenta de nuevo.",
                    sender: "bot"
                }
            ]);
            setWhatsappLink(null);
            setMapLink(null);
            setShowMap(false);
        } finally {
            setIsTyping(false);
        }
    };

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    return (
        <div className={styles.chatWindow}>
            {/* Contenedor de mensajes y botones */}
            <div className={styles.chatContent}>
                <div className={styles.chatMessages}>
                    {(messages || []).map((msg, index) => (
                        <Message
                            key={index}
                            text={msg.text}
                            sender={msg.sender}
                            className={
                                msg.sender === "user" ? styles.messageUser : styles.messageBot
                            }
                        />
                    ))}
                    {isTyping && (
                        <div className={styles.typingIndicator}>
                            <span>Escribiendo...</span>
                        </div>
                    )}
                </div>

                <div className={styles.buttonsContainer}>
                    {whatsappLink && (
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappButton}
                        >
                            📲 Agendar Cita por WhatsApp
                        </a>
                    )}
                    {mapLink && (
                        <div className={styles.mapContainer}>
                            <button onClick={toggleMap} className={styles.mapButton}>
                                {showMap ? "✖️ Cerrar" : "🗺️ Ver mapa"}
                            </button>
                            {showMap && (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8058746057854!2d-78.4956488!3d-0.1431105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585189a3dc76f%3A0xd97cdfef3d8caf0f!2sPodoClinic%20EC!5e0!3m2!1sen!2sec!4v1740508114271!5m2!1sen!2sec"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de PodoClinic EC"
                                ></iframe>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Contenedor para el input con margen superior */}
            <div className={styles.chatInputContainer}>
                <ChatInput sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default ChatWindow;