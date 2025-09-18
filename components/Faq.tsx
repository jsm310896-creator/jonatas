
import React from 'react';
import { FAQ_ITEMS } from '../constants';
import type { FaqItem } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icon from './icons/Icon';

const Faq: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="faq" ref={ref} className="py-12">
      <h3 className={`text-2xl font-semibold text-center text-white fade-in-up ${isVisible ? 'is-visible' : ''}`}>Dúvidas Frequentes</h3>
      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item: FaqItem, index: number) => (
          <details 
            key={index} 
            className={`bg-slate-800 p-4 rounded-lg cursor-pointer group fade-in-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${100 + index * 100}ms` }}
          >
            <summary className="font-semibold text-white list-none flex justify-between items-center">
              {item.question}
              <Icon name="chevronDown" className="w-5 h-5 transition-transform transform group-open:rotate-180 duration-300" />
            </summary>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;