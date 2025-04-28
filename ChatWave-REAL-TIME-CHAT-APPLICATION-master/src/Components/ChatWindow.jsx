import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages, username }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} isOwn={msg.username === username} />
      ))}
    </div>
  );
}
