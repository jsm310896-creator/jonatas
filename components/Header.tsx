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
        className="bg-green-6