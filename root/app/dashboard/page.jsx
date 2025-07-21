"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/Chatbox";
import MessageInput from "../components/MessageInput";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Halo, ada yang bisa saya bantu mengenai sejarah?",
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) return null;

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