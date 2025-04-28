import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import ChatPage from "./Components/ChatPage";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUsername={setUsername} />} />
      <Route path="/signup" element={<SignupPage setUsername={setUsername} />} />
      <Route path="/chat" element={username ? <ChatPage username={username} /> : <Navigate to="/" />} />
    </Routes>
  );
}
