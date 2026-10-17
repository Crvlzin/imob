import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Coluna 1: Marca Imob */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight leading-none">
                imob<span className="text-brand-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              Sua imobiliária de confiança. Conectando pessoas a lares extraordinários com segurança jurídica, atendimento consultivo e tecnologia.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-gray-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-gray-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-gray-400">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 hover:text-white flex items-center justify-center transition-colors text-gray-400">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-white transition-colors">
                  Catálogo de Imóveis
                </Link>
              </li>
              <li>
                <a href="/#diferenciais" className="hover:text-white transition-colors">Diferenciais Imob</a>
              </li>
              <li>
                <a href="/#depoimentos" className="hover:text-white transition-colors">Avaliações</a>
              </li>
              <li>
                <a href="/#contato" className="hover:text-white transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Categorias Populares */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/imoveis" className="hover:text-white transition-colors">
                  Casas em Condomínio
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-white transition-colors">
                  Apartamentos Familiares
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-white transition-colors">
                  Coberturas Duplex
                </Link>
              </li>
              <li>
                <Link to="/imoveis" className="hover:text-white transition-colors">
                  Studios Mobiliados
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Av. Brig. Faria Lima, 2800 · SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>(11) 3040-5000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span>contato@imob.com.br</span>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                CRECI-SP nº 38.921-J · Atendimento certificado
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Imob Imobiliária Ltda. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
