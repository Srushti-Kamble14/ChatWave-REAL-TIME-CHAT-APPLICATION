import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import WebSocketService from "../services/WebSocketService";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ChatPage({ username }) {
  const [messages, setMessages] = useState([]);
  const socket = WebSocketService.getSocket();

  
  useEffect(() => {
    var tl=gsap.timeline();
  tl.from(".nav",{
    y:-50,
    duration:0.5,
    delay:0.2,
  })


  }, [])

  useEffect(() => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };
  }, [socket]);

  const sendMessage = (text) => {
    const msg = {
      type: "message",
      username,
      text,
      timestamp: new Date().toISOString(),
    };
    socket.send(JSON.stringify(msg));
    setMessages((prev) => [...prev, msg]);
  };

  const isEmptyChat = messages.length === 0;

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      {/* Header with Username on the Right */}
      <header className="nav flex items-center justify-between px-6 py-4 bg-[#1f1e1e]">
        <h1 className="text-3xl font-bold text-[#A888B5] tracking-wide">ChatWave</h1>
        {/* Username in the top-right corner */}
        <div className="text-[#A888B5] text-xl">  {username} </div>
      </header>

      {/* 🖤 Welcome Heading (only if no messages) */}
      {isEmptyChat && (
        <div className="flex justify-center items-center flex-1">
          <h1 className="text-5xl font-medium text-[#A888B5] uppercase animate-pulse">
            Heyy {username}, Welcome to ChatWave!!
          </h1>
        </div>
      )}

      {/* Chat window (only if there are messages) */}
      {!isEmptyChat && (
        <ChatWindow messages={messages} username={username} />
      )}

      {/* Message input always visible */}
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}
