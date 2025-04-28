import { useEffect, useState } from "react";
import { gsap } from "gsap";


export default function MessageInput({ sendMessage }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    var tl=gsap.timeline();
  tl.from(".enterinput",{
    y:50,
    duration:0.5,
    delay:0.2,
  })

  }, [])
  

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className= "enterinput p-2 bg-[#8174A0] flex overflow-hidden">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 p-3 rounded bg-gray-800 text-white mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-[#CDC1FF] hover:bg-[#bcadf8] text-zinc-800 font-semibold px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
