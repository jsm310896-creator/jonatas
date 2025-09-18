
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const newImageUrl = "https://jstrader.cloud/wp-content/uploads/2025/09/photo_2025-04-29_22-21-03.jpg";

  return (
    <section id="sobre" ref={ref} className={`py-12 my-12 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="grid md:grid-cols-5 gap-12 items-center px-6 lg:px-12">
        <div className="md:col-span-2 flex justify-center">
            <img 
              src={newImageUrl}
              alt="Foto de JS, o criador do método JS Trader" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-2xl border-4 border-slate-700"
              width="256"
              height="256"
              loading="lazy"
              decoding="async"
            />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold text-white">Quem é <span className="text-blue-400">JS Trader</span>?</h2>
          <p className="mt-4 text-slate-300">
            Olá, sou JS. Há 7 anos, eu era como muitos: perdendo dinheiro com indicadores ultrapassados. Foi quando decidi abandonar o óbvio e mergulhar fundo na verdadeira Lógica do Preço.
          </p>
          <p className="mt-3 text-slate-300">
            Minha missão aqui não é apenas enviar sinais. É ensinar você a ler o fluxo do mercado, a identificar os pontos de interesse e a operar com a confiança de quem entende o porquê de cada movimento. Vamos operar juntos com inteligência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;