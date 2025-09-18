import React from 'react';
import { useWhatsappUrl } from '../hooks/useWhatsappUrl';
import Icon from './icons/Icon';

const FloatingCta: React.FC = () => {
  const whatsappUrl = useWhatsappUrl();
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => typeof (window as any).fbq === 'function' && (window as any).fbq('track', 'Lead')}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl flex items-center gap-3 font-semibold transition-all duration-300 transform hover:scale-110"
      aria-label="Entrar na comunidade do WhatsApp"
    >
      <Icon name="whatsapp" className="w-5 h-5" />
      <span className="hidden sm:inline">Entrar na Comunidade</span>
    </a>
  );
};

export default FloatingCta;