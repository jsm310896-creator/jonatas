
import React from 'react';
import { TESTIMONIAL_ITEMS } from '../constants';
import Icon from './icons/Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="depoimentos" ref={ref} className="py-12">
      <h3 className={`text-2xl font-semibold text-center text-white fade-in-up ${isVisible ? 'is-visible' : ''}`}>A transformação dos nossos membros</h3>
      <p className={`text-center text-slate-400 mt-2 fade-in-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>Veja os resultados reais de quem confia no método JS Trader.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIAL_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className={`bg-slate-800 rounded-lg p-6 flex flex-col items-center text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 fade-in-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${200 + index * 150}ms` }}
          >
            <img 
              src={item.photoUrl} 
              alt={`Foto de ${item.name}`} 
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-400" 
              loading="lazy" 
            />
            <h4 className="font-bold text-lg text-white mt-4">{item.name}</h4>
            <p className="text-sm text-blue-300">{item.detail}</p>
            <div className="text-blue-500 my-4">
              <Icon name="quote" className="w-8 h-8" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed italic">"{item.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;