import React, { useState } from 'react';
import { Send, Clock } from 'lucide-react';
import type { Message, Chat } from '../types';

interface ChatProps {
  chats: Chat[];
  messages: Message[];
  currentUserId: string;
  onSendMessage: (content: string) => void;
}

export default function Chat({ chats, messages, currentUserId, onSendMessage }: ChatProps) {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const currentChat = chats.find(chat => chat.id === selectedChat);
  const chatMessages = messages.filter(msg => 
    currentChat?.participants.includes(msg.senderId) && 
    currentChat?.participants.includes(msg.receiverId)
  );

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50">
      {/* Chat List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Messages</h2>
        </div>
        <div className="overflow-y-auto h-full">
          {chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                selectedChat === chat.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Company Name</span>
                <span className="text-sm text-gray-500">
                  {new Date(chat.timestamp).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              {chat.unread > 0 && (
                <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs rounded-full mt-1">
                  {chat.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 border-b bg-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Company Name</h3>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock size={16} className="mr-1" />
                  Response time: ~2 hours
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.senderId === currentUserId
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <span className="text-xs opacity-75 mt-1 block">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={() => {
                    if (message.trim()) {
                      onSendMessage(message);
                      setMessage('');
                    }
                  }}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}