
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleChat = () => {
    const url = `https://wa.me/977${phoneNumber.replace(/\s+/g, '')}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-center">
      <button 
        onClick={handleChat}
        className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all hover:bg-[#128C7E] group flex items-center space-x-3"
        title="Chat with us on WhatsApp"
      >
        <MessageSquare size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
