import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Link } from "react-router-dom";

type Message = {
  id: number;
  text: string | React.ReactNode;
  isUser: boolean;
};

const INITIAL_MESSAGE: Message = {
  id: 0,
  text: "Hi there! I'm an assistant designed to answer questions based on this UHS CMH website. Ask me about the CMH Shuttle, pregnancy guides, or clinic information!",
  isUser: false,
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const processResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    let responseText: React.ReactNode;

    if (lowerInput.includes("bus") || lowerInput.includes("transit") || lowerInput.includes("transport") || lowerInput.includes("ride")) {
      responseText = (
        <span>
          The CMH Maternity Shuttle runs <strong>Route 1</strong> directly to the hospital! City routes are $1.00.{" "}
          <Link to="/transportation" className="text-emerald-300 underline font-semibold" onClick={() => setIsOpen(false)}>
             View full schedules here.
          </Link>
        </span>
      );
    } else if (lowerInput.includes("book") || lowerInput.includes("appointment") || lowerInput.includes("contact") || lowerInput.includes("call") || lowerInput.includes("phone")) {
      responseText = (
        <span>
          You can reach the clinic 24/7 by calling <strong>(607) 337-4111</strong> or visiting our Medical District office at 179 N Broad St, Norwich.
        </span>
      );
    } else if (lowerInput.includes("guide") || lowerInput.includes("pregnancy") || lowerInput.includes("trimester") || lowerInput.includes("sick") || lowerInput.includes("pain")) {
      responseText = (
        <span>
          We have an extensive, medically verified Maternal Guide covering everything from Preconception to Postpartum care.{" "}
          <Link to="/pregnancy-guide" className="text-emerald-300 underline font-semibold" onClick={() => setIsOpen(false)}>
            Explore the guide here.
          </Link>
        </span>
      );
    } else if (lowerInput.includes("myth") || lowerInput.includes("fact") || lowerInput.includes("true")) {
      responseText = (
        <span>
          Pregnancy is full of old wives' tales! Check out our{" "}
          <Link to="/myth-busters" className="text-emerald-300 underline font-semibold" onClick={() => setIsOpen(false)}>
            Myth Busters
          </Link>{" "}
          section to separate fact from fiction.
        </span>
      );
    } else {
      responseText = (
        <span>
          I'm still learning and might not understand that question. But our team is always here to help! Please call our clinic directly at <strong>(607) 337-4111</strong>.
        </span>
      );
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: Date.now(), text: responseText, isUser: false }]);
    }, 1000 + Math.random() * 1000); // 1-2 second mock delay
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");
    
    // Add user message immediately
    setMessages((prev) => [...prev, { id: Date.now(), text: userText, isUser: true }]);
    
    // Trigger bot typing indicator and response
    setIsTyping(true);
    processResponse(userText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[340px] h-[480px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between shadow-sm relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">UHS CMH Website Assistant</h3>
                <p className="text-[10px] text-emerald-100 mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex w-full ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                {!msg.isUser && (
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 mr-2 mt-auto mb-1">
                    <Bot size={12} />
                  </div>
                )}
                
                <div 
                  className={`px-4 py-2.5 max-w-[80%] rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.isUser 
                      ? "bg-foreground text-background rounded-br-sm" 
                      : "bg-emerald-700 text-white rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.isUser && (
                  <div className="w-6 h-6 rounded-full bg-muted-foreground flex items-center justify-center text-background shrink-0 ml-2 mt-auto mb-1">
                    <User size={12} />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 mr-2 mt-auto mb-1">
                  <Bot size={12} />
                </div>
                <div className="px-4 py-3 bg-emerald-700 text-white rounded-2xl rounded-bl-sm flex items-center gap-1 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-background border-t border-border">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="w-full pl-4 pr-12 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-muted/50"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-1 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-colors"
              >
                <Send size={16} className="ml-1" />
              </button>
            </form>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group relative"
        >
          {messages.length === 1 && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-background rounded-full group-hover:scale-110 transition-transform" />
          )}
          <MessageCircle size={28} />
        </button>
      )}

    </div>
  );
};

export default Chatbot;
