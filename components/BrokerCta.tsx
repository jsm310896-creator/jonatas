import React from 'react';
import { usePolariumUrl } from '../hooks/usePolariumUrl';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icon from './icons/Icon';

const BrokerCta: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const polariumUrl = usePolariumUrl();

  return (
    <section id="corretora" ref={ref} className={`py-12 my-8 fade-in-up ${isVisible ? 'is-visible' : ''}`}>
      <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-700/50 rounded-xl p-6 lg:p-8 shadow-2xl shadow-blue-900/20">
        <div className="flex justify-center mb-4">
          <Icon name="chart" className="w-10 h-10 text-blue-400" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-extrabold text-white">Opere com a Corretora Certa</h3>
        <p className="mt-4 max-w-2xl mx-auto text-slate-300">
          Para garantir a melhor experiência e execução com nossos sinais, recomendamos a <strong>Polarium Broker</strong>.
          Plataforma rápida, confiável e com as melhores condições para traders de opções binárias.
        </p>
        <div className="mt-8">
          <a
            href={polariumUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => typeof (window as any).fbq === 'function' && (window as any).fbq('trackCustom', 'BrokerRegistrationClick')}
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="chevronDoubleRight" className="w-5 h-5 mr-2" />
            Abrir Conta Gratuita na Polarium
          </a>
        </div>
        <p className="text-xs text-slate-500 mt-4">Você será redirecionado para o site da corretora.</p>
      </div>
    </section>
  );
};

export default BrokerCta;
