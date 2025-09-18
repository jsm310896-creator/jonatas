
import React from 'react';
import { useWhatsappUrl } from '../hooks/useWhatsappUrl';
import Icon from './icons/Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FinalCta: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const whatsappUrl = useWhatsappUrl();

  return (
    <section ref={ref} className={`py-12 text-center bg-slate-800 rounded-xl p-8 my-12 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      <h3 className="text-3xl font-extrabold text-white">Chega de contar com a sorte. Opere com inteligência.</h3>
      <p className="mt-4 max-w-2xl mx-auto text-slate-300">Junte-se à comunidade JS Trader e aprenda a operar com base no que o preço realmente faz. Chega de indicadores confusos e estratégias que não funcionam.</p>
      <ul className="mt-6 flex flex-col md:flex-row justify-center gap-x-8 gap-y-2 text-slate-300">
          <li className="flex items-center justify-center gap-2">
            <Icon name="check" className="w-5 h-5 text-green-400" /> Sinais com Lógica do Preço
          </li>
          <li className="flex items-center justify-center gap-2">
            <Icon name="check" className="w-5 h-5 text-green-400" /> Gerenciamento de Risco
          </li>
          <li className="flex items-center justify-center gap-2">
            <Icon name="check" className="w-5 h-5 text-green-400" /> Mentoria em Lógica do Preço
          </li>
      </ul>
      <div className="mt-8">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => typeof (window as any).fbq === 'function' && (window as any).fbq('track', 'Lead')}
          className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl text-lg transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
        >
          Garantir minha vaga na Comunidade
        </a>
      </div>
      <p className="text-xs text-slate-500 mt-4">Vagas limitadas. Acesso imediato após entrar.</p>
    </section>
  );
};

export default FinalCta;