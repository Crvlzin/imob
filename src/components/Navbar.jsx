import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo Imob Corporativo */}
          <Link to="/" className="flex items-center gap-2.5 group z-10">
            <div className="w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-brand-700/20 group-hover:bg-brand-600 transition-colors">
              <Home className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-black tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors leading-none">
                imob<span className="text-brand-600">.</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">
                Consultoria Imobiliária
              </span>
            </div>
          </Link>

          {/* Menu Desktop Centralizado no Meio da Tela */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-semibold text-slate-600 text-sm absolute left-1/2 -translate-x-1/2 z-10">
            <Link
              to="/"
              className={`transition-colors py-1.5 ${isCurrent('/') ? 'text-brand-700 font-bold border-b-2 border-brand-700' : 'hover:text-brand-600'
                }`}
            >
              Início
            </Link>
            <Link
              to="/imoveis"
              className={`transition-colors py-1.5 ${isCurrent('/imoveis') ? 'text-brand-700 font-bold border-b-2 border-brand-700' : 'hover:text-brand-600'
                }`}
            >
              Imóveis
            </Link>
            <Link
              to="/consultoria"
              className={`transition-colors py-1.5 ${isCurrent('/consultoria') ? 'text-brand-700 font-bold border-b-2 border-brand-700' : 'hover:text-brand-600'
                }`}
            >
              Consultoria VIP
            </Link>

            <a href="/#depoimentos" className="hover:text-brand-700 transition-colors py-1.5">
              Avaliações
            </a>
            <a href="/#contato" className="hover:text-brand-700 transition-colors py-1.5">
              Contato
            </a>
          </nav>

          {/* Lado Direito (Menu Mobile em Telas Menores) */}
          <div className="flex items-center gap-2 z-10">
            <div className="md:hidden flex items-center gap-2">
              <a
                href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20atendimento%20da%20Imob."
                target="_blank"
                rel="noreferrer"
                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg focus:outline-none"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col gap-2 font-medium text-gray-700 text-base">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${isCurrent('/') ? 'text-brand-600 font-bold bg-brand-50' : 'hover:bg-gray-50'}`}
            >
              Início
            </Link>
            <Link
              to="/imoveis"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${isCurrent('/imoveis') ? 'text-brand-600 font-bold bg-brand-50' : 'hover:bg-gray-50'}`}
            >
              Imóveis à Venda e Locação
            </Link>
            <Link
              to="/consultoria"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 rounded-lg ${isCurrent('/consultoria') ? 'text-brand-600 font-bold bg-brand-50' : 'hover:bg-gray-50'}`}
            >
              Consultoria VIP
            </Link>
            <a
              href="/#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-50 hover:text-brand-600"
            >
              Avaliações de Clientes
            </a>
            <a
              href="/#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-50 hover:text-brand-600"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
