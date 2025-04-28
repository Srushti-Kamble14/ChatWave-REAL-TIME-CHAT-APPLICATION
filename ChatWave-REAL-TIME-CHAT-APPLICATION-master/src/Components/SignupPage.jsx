import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { gsap } from "gsap";

export default function SignupPage({ setUsername }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    var tl=gsap.timeline();
  tl.from(".nav",{
    y:-50,
    duration:0.5,
    delay:0.2,
  })

  tl.from(".signup",{
    x:300,
    duration:0.8,
    delay:0.2,
    opacity:0,
   
  })
  }, [])
  

  const handleSignup = () => {
    if (input.trim()) {
      setUsername(input.trim());
      navigate("/chat", { state: { username: input.trim() } }); // passing username
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#09090B] overflow-hidden" >
      <header className="nav flex items-center px-6 py-4 bg-[#1f1e1e]">
        <h1 className=" text-3xl font-bold text-[#A888B5] tracking-wide">ChatWave</h1>
      </header>

      <div className="signup flex flex-col items-center justify-center flex-grow h-2/3 p-8 m-10">
        <div className="flex flex-col items-center justify-center flex-grow border-2 border-[#A888B5] rounded-lg shadow-lg bg-[#0D0D0D] p-10">
          <h2 className="text-3xl font-semibold mb-8 text-[#A888B5]">Signup for ChatWave</h2>
          <input
            type="text"
            placeholder="Choose a Username"
            className="p-3 rounded bg-gray-800 text-white w-64 mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSignup()}
          />
          <button
            onClick={handleSignup}
            className="bg-[#8174A0] hover:bg-[#806eaa] text-white px-6 py-2 rounded mb-4"
          >
            Signup
          </button>
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-[#966ecd] underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
