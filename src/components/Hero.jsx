import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const [progress, setProgress] = useState(0);

  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!container || !video) return;

    video.pause();

    let ticking = false;

    const updateVideoPosition = () => {
      const rect = container.getBoundingClientRect();
      const maxScroll = container.offsetHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      // Progresso normalizado de 0 a 1 dentro da seção Hero
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / maxScroll;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clampedProgress);

      if (video.duration && !isNaN(video.duration)) {
        const targetTime = clampedProgress * video.duration;
        video.currentTime = targetTime;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVideoPosition);
        ticking = true;
      }
    };

    const onVideoReady = () => {
      video.pause();
      updateVideoPosition();
    };

    video.addEventListener('loadedmetadata', onVideoReady);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    updateVideoPosition();

    return () => {
      video.removeEventListener('loadedmetadata', onVideoReady);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('imoveis');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-slate-950"
    >
      {/* Container Fixo na Tela (Sticky) travado enquanto o vídeo é percorrido pelo scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Vídeo de fundo controlado pelo scroll */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <video
            ref={videoRef}
            src="./hero-video.mp4"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover object-[center_35%] pointer-events-none"
          />

          {/* Overlay suave com gradiente cinematográfico para contraste perfeito */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/60"></div>
        </div>

        {/* Linha sutil de progresso no topo */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
          <div
            className="h-full bg-emerald-500 transition-all duration-75"
            style={{ width: `${Math.round(progress * 100)}%` }}
          ></div>
        </div>

        {/* Espaçador superior para compensar a navbar e elevar o conteúdo */}
        <div className="h-20 w-full z-10 shrink-0"></div>

        {/* Conteúdo Central Elevado da Hero */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex-1 flex flex-col justify-center items-center pb-12 sm:pb-16 -translate-y-4 sm:-translate-y-8">
          
          {/* Novo Título H1 Corporativo */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl mx-auto drop-shadow-2xl mb-8">
            Tire o seu sonho do papel e faça realidade
          </h1>

          {/* Link / Botão: 'Faça seu sonho realidade' que leva para a vitrine de imóveis */}
          <a
            href="#imoveis"
            onClick={handleLinkClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-extrabold text-base sm:text-lg shadow-2xl hover:shadow-brand-500/30 transition-all duration-300 border border-white/20 backdrop-blur-sm"
          >
            <span>Faça seu sonho realidade</span>
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>

        {/* Indicador discreto de rolagem na base */}
        <div className="relative z-10 pb-5 text-center text-white/60 flex flex-col items-center select-none">
          <span className="text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 opacity-80 animate-pulse">
            <span>Role para avançar</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </section>
  );
}
