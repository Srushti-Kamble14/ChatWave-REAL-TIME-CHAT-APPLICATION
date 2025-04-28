export default function MessageBubble({ message, isOwn }) {
    return (
      <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs p-3 rounded-lg ${isOwn ? 'bg-[#C599B6] text-white' : 'bg-gray-700 text-gray-100'}`}>
          <div className="text-sm font-bold">{!isOwn && message.username}</div>
          <div>{message.text}</div>
        </div>
      </div>
    );
  }
  