import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const navigate = useNavigate();

  const handleGoToProperties = () => {
    navigate('/imoveis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex-1">
      {/* Hero com vídeo controlado por scroll */}
      <Hero onExploreClick={handleGoToProperties} />

      {/* Ideias Principais / Diferenciais da Imob */}
      <Pillars onExploreClick={handleGoToProperties} />

      {/* Depoimentos e Avaliações de Clientes */}
      <Testimonials />

      {/* Formas de Contato da Imob */}
      <ContactSection />
    </main>
  );
}
