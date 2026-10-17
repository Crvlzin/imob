import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-brand-500 selection:text-white flex flex-col">
        {/* Barra de Navegação Global */}
        <Navbar />

        {/* Rotas das Telas */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/imoveis" element={<PropertiesPage />} />
          </Routes>
        </div>

        {/* Botão Flutuante de WhatsApp Global */}
        <WhatsAppFloat />

        {/* Rodapé Global */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
