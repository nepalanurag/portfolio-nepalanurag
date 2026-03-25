import React, { useState, useEffect } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // Inject placeholder color style on mount
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !document.getElementById("chat-input-style")
    ) {
      const style = document.createElement("style");
      style.id = "chat-input-style";
      style.innerHTML = `.chat-input::placeholder { color: #222 !important; opacity: 1 !important; }`;
      document.head.appendChild(style);
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(
        "https://anurag-nepal-portfolio.vercel.app/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot" as const, text: data.answer },
      ]);
    } catch (e) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot" as const, text: "Sorry, something went wrong." },
      ]);
    }
    setLoading(false);
  };

  // Floating button (collapsed)
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: 36,
          right: 36,
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "#2970f1",
          border: "none",
          boxShadow: "0 8px 32px rgba(41,112,241,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          cursor: "pointer",
          transition: "box-shadow 0.2s",
        }}
        aria-label="Open chat"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h.01M12 12h.01M16 12h.01" />
        </svg>
      </button>
    );
  }

  // Expanded chat window
  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 390,
        background: "#181f2a",
        border: "none",
        borderRadius: 18,
        boxShadow: "0 8px 32px rgba(24,31,42,0.32)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        height: 520,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 24px 12px 24px",
          borderBottom: "1px solid #232b3a",
          background: "#232b3a",
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      >
        <span
          style={{
            color: "#4ea1f7",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: 0.2,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ea1f7"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: 4 }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h.01M12 12h.01M16 12h.01" />
          </svg>
          Ask about Anurag
        </span>
        <button
          onClick={() => setOpen(false)}
          style={{
            background: "none",
            border: "none",
            color: "#4ea1f7",
            fontSize: 28,
            cursor: "pointer",
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close chat"
        >
          ×
        </button>
      </div>
      {/* Messages */}
      <div
        style={{
          maxHeight: 370,
          flex: 1,
          overflowY: "auto",
          padding: 18,
          background: "#181f2a",
        }}
      >
        {messages.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "#b3c6e0",
              margin: "32px 0",
              fontSize: 17,
              opacity: 0.95,
              background: "#232b3a",
              borderRadius: 14,
              padding: 18,
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4ea1f7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginBottom: 8 }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h.01M12 12h.01M16 12h.01" />
            </svg>
            Hi! I'm here to help you learn more about Anurag Nepal. You can ask
            me about his experience, skills, projects, or anything else from his
            portfolio. What would you like to know?
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "14px 0",
            }}
          >
            <span
              style={{
                background: msg.sender === "user" ? "#2970f1" : "#232b3a",
                color: msg.sender === "user" ? "#fff" : "#b3c6e0",
                padding: "12px 18px",
                borderRadius: 18,
                display: "inline-block",
                fontSize: 18,
                maxWidth: "80%",
                wordBreak: "break-word",
                boxShadow:
                  msg.sender === "user"
                    ? "0 2px 8px rgba(41,112,241,0.10)"
                    : "0 2px 8px rgba(35,43,58,0.10)",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div style={{ color: "#b3c6e0" }}>Bot is typing...</div>}
      </div>
      {/* Input */}
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #232b3a",
          padding: 14,
          background: "#232b3a",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            padding: 12,
            color: "#fff",
            background: "#181f2a",
            fontSize: 16,
            borderRadius: 8,
            marginRight: 8,
          }}
          placeholder="Ask about experience, skills, projects..."
          disabled={loading}
          className="chat-input"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            padding: "0 18px",
            borderRadius: 8,
            border: "none",
            background: "#2970f1",
            color: "#fff",
            fontSize: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            boxShadow: "0 2px 8px rgba(41,112,241,0.10)",
          }}
          aria-label="Send message"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
