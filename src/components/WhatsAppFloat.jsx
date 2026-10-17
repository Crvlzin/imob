import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip convidativo */}
      <div className="hidden sm:block mr-3 bg-gray-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Falar com um corretor online 👋
      </div>

      {/* Botão Flutuante */}
      <a
        href="https://wa.me/5511999998888?text=Olá!%20Estou%20no%20site%20da%20Imob%20e%20gostaria%20de%20atendimento."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
        aria-label="Atendimento pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </a>
    </div>
  );
}
