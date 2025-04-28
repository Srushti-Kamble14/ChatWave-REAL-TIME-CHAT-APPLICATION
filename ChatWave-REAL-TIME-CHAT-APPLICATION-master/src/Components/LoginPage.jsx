import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { gsap } from "gsap";

export default function LoginPage({ setUsername }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    var tl=gsap.timeline();
  tl.from(".nav",{
    y:-50,
    duration:0.5,
    delay:0.2,
    opacity:0,
  })

  tl.from(".login",{
    x:-300,
    duration:0.8,
    delay:0.2,
    opacity:0,
   
  })

  }, [])

  const handleLogin = () => {
    if (input.trim()) {
      setUsername(input.trim());
      navigate("/chat", { state: { username: input.trim() } }); // passing username
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#09090B]">
      <header className="nav flex items-center px-6 py-4 bg-[#1f1e1e]">
        <h1 className="text-3xl font-bold text-[#A888B5] tracking-wide">ChatWave</h1>
      </header>

      <div className=" login flex flex-col items-center justify-center flex-grow h-2/3 p-8 m-10">
        <div className="onebyone flex flex-col items-center justify-center flex-grow border-2 border-[#A888B5] rounded-lg shadow-lg bg-[#0D0D0D] p-10">
          <h2 className=" text-3xl font-semibold mb-8 text-[#A888B5]">Login to ChatWave</h2>
          <input
            type="text"
            placeholder="Enter Username"
            className="p-3 rounded bg-gray-800 text-white w-64 mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          <button
            onClick={handleLogin}
            className="bg-[#8174A0] hover:bg-[#806eaa] text-white px-6 py-2 rounded mb-4"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#966ecd] underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
