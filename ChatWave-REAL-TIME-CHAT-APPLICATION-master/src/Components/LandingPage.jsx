import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LandingPage({ setUsername }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim()) {
      setUsername(input.trim());
      navigate("/chat");
    }
  };
  
  useEffect(() => {
   var tl=gsap.timeline();
   tl.from()
  }, [])
  

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0A1F44]">
      <h1 className="text-4xl font-bold mb-8 text-white">Welcome to ChatApp</h1>
      <input
        type="text"
        placeholder="Enter your username"
        className="p-3 rounded bg-gray-800 text-white w-64 mb-4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
      >
        Enter Chat
      </button>
    </div>
  );
}
