import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} JS Trader. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;