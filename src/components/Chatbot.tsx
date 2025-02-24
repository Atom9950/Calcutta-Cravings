'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare, FiX } from 'react-icons/fi';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    // In a real application, you would make an API call to your backend here
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Simple response logic - you can expand this or connect to a real API
    if (lowerMessage.includes('reservation') || lowerMessage.includes('book')) {
      return "You can make a reservation by filling out our booking form. Would you like me to guide you there?";
    } else if (lowerMessage.includes('menu')) {
      return "Our menu features a variety of dishes including our famous Wagyu Steak and Truffle Risotto. Would you like to see the full menu?";
    } else if (lowerMessage.includes('hours') || lowerMessage.includes('open')) {
      return "We're open Monday through Sunday from 11:00 AM to 10:00 PM.";
    } else if (lowerMessage.includes('location') || lowerMessage.includes('address')) {
      return "We're located at 123 Restaurant Street, Foodie City. Would you like directions?";
    } else {
      return "I'm here to help with reservations, menu information, hours, and locations. What would you like to know more about?";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          {/* Chat Header */}
          <div className="bg-gray-900 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Restaurant Assistant</h3>
            <p className="text-sm text-gray-300">Ask me anything</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gray-900 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-50">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                <FiSend size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
