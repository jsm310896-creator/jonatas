
import React, { useState, useEffect } from 'react';
import { useWhatsappUrl } from '../hooks/useWhatsappUrl';
import Icon from './icons/Icon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappUrl = useWhatsappUrl();


  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  const NavLinks: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
    <>
      <a href="#beneficios" onClick={onLinkClick} className="text-lg md:text-sm hover:text-blue-300 transition-colors">Benefícios</a>
      <a href="#sobre" onClick={onLinkClick} className="text-lg md:text-sm hover:text-blue-300 transition-colors">Sobre mim</a>
      <a href="#depoimentos" onClick={onLinkClick} className="text-lg md:text-sm hover:text-blue-300 transition-colors">Depoimentos</a>
      <a href="#faq" onClick={onLinkClick} className="text-lg md:text-sm hover:text-blue-300 transition-colors">FAQ</a>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => typeof (window as any).fbq === 'function' && (window as any).fbq('track', 'Lead')}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 md:px-4 md:py-2 rounded-lg text-lg md:text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        Entrar na Comunidade
      </a>
    </>
  );

  return (
    <>
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-50">
        <a href="#" aria-label="Página inicial JS Trader" className="flex items-center gap-3">
          <img src="https://jstrader.cloud/wp-content/uploads/2025/09/photo_2023-06-30_22-06-12.jpg" alt="JS Trader Logo" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="text-lg font-semibold tracking-wide">JS Trader</div>
          </div>
        </a>
        
        <nav className="hidden md:flex gap-6 items-center">
          <NavLinks />
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden z-50 text-white"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <Icon name="x" className="w-6 h-6" /> : <Icon name="menu" className="w-6 h-6" />}
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-95 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </>
  );
};

export default Header;