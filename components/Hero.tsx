
import React from 'react';
import { useWhatsappUrl } from '../hooks/useWhatsappUrl';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  const whatsappUrl = useWhatsappUrl();
  const videoId = '9YDfcww3c4s';

  // A fonte do vídeo foi atualizada para mostrar os controles do player.
  // Observação: a reprodução automática com som pode ser bloqueada pelas políticas do navegador.
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&showinfo=0`;

  return (
    // The parent <main> tag now provides horizontal padding.
    // This section provides vertical padding and text styling.
    <section className="text-center text-white pt-12 pb-16 md:pt-16 md:pb-20">
      {/* Inner container to constrain content width to be narrower than other sections */}
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          Pare de Adivinhar o Gráfico. Opere com a Pura <span className="text-blue-400">Lógica do Preço</span>.
        </h1>
        <p 
          className="text-lg md:text-xl text-slate-200 mt-4 max-w-3xl mx-auto"
          style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}
        >
          Decifre os movimentos do mercado e opere com clareza. Receba sinais de alta precisão baseados na ação do preço, direto no seu WhatsApp.
        </p>

        {/* --- Embedded Video Player --- */}
        <div className="mt-10 mb-8 aspect-video w-full rounded-lg shadow-2xl shadow-blue-500/20 overflow-hidden border border-slate-700">
          <iframe
            src={videoSrc}
            title="Apresentação da comunidade JS Trader"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        
        {/* --- CTAs --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            id="primaryCta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => typeof (window as any).fbq === 'function' && (window as any).fbq('track', 'Lead')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
          >
            Entrar na Comunidade WhatsApp
          </a>

          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-700/50 backdrop-blur-sm border border-slate-600 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 shadow-md"
          >
            Receber PDF Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;