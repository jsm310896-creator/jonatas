
import React from 'react';
import Icon from './icons/Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const benefits = [
  {
    title: "🎯 Sinais com Lógica do Preço",
    description: "Entradas baseadas na movimentação real do preço, sem indicadores. A pura ação do mercado no seu WhatsApp.",
  },
  {
    title: "🛡️ Gerenciamento Anti-Quebra",
    description: "Aprenda a proteger seu capital com um método que respeita os ciclos de mercado e a psicologia do trader.",
  },
  {
    title: "🧠 Análises com a Lógica do Preço",
    description: "Entenda o 'porquê' de cada sinal. Sessões ao vivo para você aprender a ler o mercado como um profissional.",
  },
];

const Benefits: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="beneficios" ref={ref} className="bg-slate-800/50 rounded-xl p-6 lg:p-8 mt-12 border border-slate-700">
      <h3 className={`text-2xl font-semibold text-center text-white fade-in-up ${isVisible ? 'is-visible' : ''}`}>🏆 A Estratégia Comprovada ao Seu Alcance</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className={`p-6 bg-slate-800 rounded-lg shadow-lg flex flex-col items-center text-center fade-in-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
             <div className="bg-blue-600/20 p-3 rounded-full text-blue-400">
               <Icon name="check" className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-white mt-4">{benefit.title}</h4>
            <p className="text-sm text-slate-400 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;