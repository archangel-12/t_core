"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/Chatbox";
import MessageInput from "../components/MessageInput";

export default function DashboardPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Halo, ada yang bisa saya bantu mengenai sejarah?",
    },
  ]);
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    const botReply = data.reply || "Maaf, tidak dapat menjawab saat ini.";

    setMessages((prev) => [...prev, { role: "assistant", content: botReply }]);
  };
  return (
    <div className="flex h-screen pl-5 py-px">
      <Sidebar />
      <div className="flex flex-col flex-1 p-4 gap-4">
        <ChatBox messages={messages} />
        <div className="p-5">
          <MessageInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}