"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-primary">Let's Chat!</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat} className="h-8 w-8 p-0">
              <X size={18} />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Have questions about our DJ services? Send us a message and we'll get back to you shortly!
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded" />
            <textarea
              placeholder="Your message"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded"></textarea>
            <Button className="w-full bg-black hover:bg-black/80 text-white">SEND</Button>
          </div>
        </div>
      )}
      <Button
        onClick={toggleChat}
        className="rounded-full w-16 h-16 bg-[#E6D3B3] hover:bg-[#E6D3B3]/80 text-primary shadow-lg">
        <MessageCircle size={28} />
      </Button>
    </div>
  );
}
