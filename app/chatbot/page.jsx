"use client";
import { useRef, useState } from "react";
import styles from "./styles.module.css";
import { tenali_Ramakrishna, luckiest_Guy } from "@/public/font";
import axios from "axios";
import { FaReply, FaPaperPlane } from "react-icons/fa";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;
    setInput("");

    try {
      const response = await axios.post("/api/ai", {
        rawText: userInput,
      });

      const botReply = {
        text: response.data?.message || "Bot diam... mungkin lagi galau.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: `⚠️ API Error: ${
            error.response?.data?.error || error.message || "Tidak diketahui"
          }`,
          sender: "bot",
        },
      ]);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter") sendMessage();
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.page}>
      <div className={styles.firstLayer}>
        <div className={styles.chatPage}>
          <div className={styles.header}>
            <a href="/dashboard" className={styles.backBtn}>
              <FaReply />
            </a>
            <h3 className={`${luckiest_Guy.className}`}>AskTag AI</h3>
          </div>

          <div className={styles.messagesArea}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.user : styles.bot
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <input
              className={`${styles.input} ${tenali_Ramakrishna.className}`}
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className={styles.btnSend} onClick={sendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
        <div className={styles.gif}></div>
      </div>
    </div>
   
  );
}
