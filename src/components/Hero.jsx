import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const [progress, setProgress] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!container || !video) return;

    let targetTime = 0;
    let isSeeking = false;
    let isPrimed = false;
    let animationFrameId = null;

    // Realiza o seek de forma segura, respeitando o estado do decodificador móvel
    const performSeek = () => {
      if (!video || !video.duration || isNaN(video.duration)) return;
      if (isSeeking || video.seeking) return;

      // Evita sobrecarga se a diferença de tempo for insignificante (< ~1 frame)
      if (Math.abs(video.currentTime - targetTime) < 0.03) return;

      try {
        isSeeking = true;
        video.currentTime = targetTime;
      } catch (e) {
        isSeeking = false;
      }
    };

    const handleSeeked = () => {
      isSeeking = false;
      // Se enquanto estava buscando o frame anterior o usuário continuou rolando,
      // busca o novo frame atualizado imediatamente
      if (Math.abs(video.currentTime - targetTime) >= 0.03) {
        performSeek();
      }
    };

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
        targetTime = clampedProgress * video.duration;
        performSeek();
      }
    };

    const onScrollOrTouch = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateVideoPosition);
    };

    // "Prime" / Desbloqueio do decodificador de vídeo por hardware no iOS Safari e Android Chrome
    const primeVideoPlayback = () => {
      if (isPrimed) return;
      isPrimed = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.pause();
            setIsVideoReady(true);
            updateVideoPosition();
          })
          .catch(() => {
            // Em navegadores móveis com restrição de autoplay, desbloqueia no primeiro gesto
            const unlockOnTouch = () => {
              video.play()
                .then(() => {
                  video.pause();
                  setIsVideoReady(true);
                  updateVideoPosition();
                })
                .catch(() => {});
              window.removeEventListener('touchstart', unlockOnTouch);
              window.removeEventListener('touchend', unlockOnTouch);
              window.removeEventListener('scroll', unlockOnTouch);
            };

            window.addEventListener('touchstart', unlockOnTouch, { passive: true, once: true });
            window.addEventListener('touchend', unlockOnTouch, { passive: true, once: true });
            window.addEventListener('scroll', unlockOnTouch, { passive: true, once: true });
          });
      }
    };

    const onLoadedMetadata = () => {
      primeVideoPlayback();
    };

    const onCanPlay = () => {
      setIsVideoReady(true);
      updateVideoPosition();
    };

    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('loadeddata', onCanPlay);
    video.addEventListener('canplay', onCanPlay);

    // Se metadados já estiverem disponíveis (cache ou fast load)
    if (video.readyState >= 1) {
      primeVideoPlayback();
    }

    window.addEventListener('scroll', onScrollOrTouch, { passive: true });
    window.addEventListener('touchmove', onScrollOrTouch, { passive: true });
    window.addEventListener('resize', onScrollOrTouch, { passive: true });

    updateVideoPosition();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('loadeddata', onCanPlay);
      video.removeEventListener('canplay', onCanPlay);
      window.removeEventListener('scroll', onScrollOrTouch);
      window.removeEventListener('touchmove', onScrollOrTouch);
      window.removeEventListener('resize', onScrollOrTouch);
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
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-between">
        
        {/* Vídeo de fundo controlado pelo scroll */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            muted
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover object-[center_35%] pointer-events-none transition-opacity duration-300"
            style={{ opacity: isVideoReady ? 1 : 0.9 }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

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
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex-1 flex flex-col justify-center items-center pb-8 sm:pb-16 -translate-y-2 sm:-translate-y-8">
          
          {/* Novo Título H1 Corporativo com quebra balanceada para qualquer tela */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-snug sm:leading-[1.1] max-w-3xl mx-auto drop-shadow-2xl mb-6 sm:mb-8 [text-wrap:balance]">
            Tire o seu sonho do papel e faça realidade
          </h1>

          {/* Link / Botão: 'Faça seu sonho realidade' que leva para a vitrine de imóveis */}
          <a
            href="#imoveis"
            onClick={handleLinkClick}
            className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-extrabold text-sm sm:text-lg shadow-2xl hover:shadow-brand-500/30 transition-all duration-300 border border-white/20 backdrop-blur-sm max-w-full"
          >
            <span>Faça seu sonho realidade</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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
