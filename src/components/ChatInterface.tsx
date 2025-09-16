import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Message } from '../types';
import MarkdownRenderer from './MarkdownRenderer';

const ChatInterface: React.FC = () => {
  const { chatState, sendMessage, isApiConnected } = useApp();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  useEffect(() => {
    // Scroll suave apenas quando há novas mensagens
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [chatState.messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const message = inputValue.trim();
    setInputValue('');
    
    // Scroll suave para a nova mensagem após um pequeno delay
    setTimeout(() => {
      scrollToBottom();
    }, 200);
    
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const MessageBubble: React.FC<{ message: Message; index: number }> = ({ message, index }) => {
    const isUser = message.type === 'user';
    
    return (
      <div
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div className={`flex items-start space-x-3 max-w-3xl ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
          {/* Avatar */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isUser 
                ? 'bg-primary-600 text-white' 
                : 'bg-primary-600 text-white'
            }`}
          >
            {isUser ? <User size={16} /> : <Bot size={16} />}
          </div>

          {/* Message Content */}
          <div
            className={`
              relative px-4 py-3 rounded-xl max-w-2xl
              ${isUser 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-100 text-gray-800'
              }
            `}
          >
            {isUser ? (
              <p className="text-sm leading-relaxed">{message.content}</p>
            ) : (
              <MarkdownRenderer content={message.content} />
            )}
            <div className={`text-xs mt-1 ${isUser ? 'text-primary-100' : 'text-gray-500'}`}>
              {message.timestamp}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Chat Header */}
      <div className="bg-primary-600 rounded-t-2xl p-6 text-white shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">
              IA Farol 360 - Análise de Não Conformidades
            </h1>
            <p className="text-primary-100 text-sm">
              Especialista em insights sobre indicadores de qualidade
            </p>
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className="bg-white rounded-b-2xl shadow-sm min-h-[400px] max-h-[500px] flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 chat-scroll">
          {chatState.messages.map((message, index) => (
            <MessageBubble key={message.id} message={message} index={index} />
          ))}

          {/* Typing Indicator */}
          {chatState.isTyping && (
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white">
                <Bot size={16} />
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-xl">
                <div className="flex items-center space-x-2">
                  <Loader2 size={14} className="animate-spin text-primary-600" />
                  <span className="text-sm text-gray-600">IA está pensando...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Section */}
        <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta sobre não conformidades ou indicadores..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-colors duration-200 text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || chatState.isTyping}
              className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">

          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
