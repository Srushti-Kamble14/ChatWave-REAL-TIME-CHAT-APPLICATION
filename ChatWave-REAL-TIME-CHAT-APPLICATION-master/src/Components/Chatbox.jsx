import { useEffect, useRef, useState } from 'react';

const socket = new WebSocket('ws://localhost:3001');

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'history') {
        setMessages(msg.data);
      } else if (msg.type === 'message') {
        setMessages(prev => [...prev, msg.data]);
      }
    };
  }, []);

  const sendMessage = () => {
    const message = { user: 'Me', text: input };
    socket.send(JSON.stringify({ type: 'message', data: message }));
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg p-4 h-[80vh] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="bg-blue-100 p-2 rounded">
            <strong>{msg.user}: </strong>{msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
