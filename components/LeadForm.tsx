
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SELFLUX_WEBHOOK_URL, PDF_DOWNLOAD_URL } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const LeadForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.4 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    
    // Validação simples para verificar se a URL do webhook foi configurada.
    // FIX: Removed impossible comparison to a placeholder string that caused a TypeScript error.
    if (!SELFLUX_WEBHOOK_URL) {
      setStatus('error');
      setMessage('Erro de configuração: A URL de integração não foi definida.');
      console.error("A URL do webhook da Selflux não está configurada no arquivo constants.ts");
      return;
    }

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch(SELFLUX_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) {
        // Se a resposta do servidor não for de sucesso (ex: 404, 500), lança um erro.
        throw new Error('Falha no envio dos dados. A resposta do servidor não foi bem-sucedida.');
      }

      // Se a requisição foi bem-sucedida
      setStatus('success');
      setMessage('Sucesso! Redirecionando para o download...');
      
      // Track Facebook Pixel custom event for PDF download
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('trackCustom', 'PDF');
      }

      // Limpa os campos do formulário
      setName('');
      setEmail('');
      setPhone('');
      
      // Redireciona para a página de download do PDF após um breve intervalo
      setTimeout(() => {
        window.location.href = PDF_DOWNLOAD_URL;
      }, 1500); // 1.5 segundos de delay para o usuário ler a mensagem

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setStatus('error');
      setMessage('Não foi possível enviar seus dados no momento. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <section id="leadForm" ref={ref} className={`mt-12 p-6 lg:p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg fade-in-up ${isVisible ? 'is-visible' : ''} border border-slate-700`}>
      <div className="md:flex md:items-center md:justify-between gap-8">
        <div className="md:flex-1">
          <h3 className="text-xl font-semibold text-white">Baixe o PDF: O Guia Definitivo da Lógica do Preço</h3>
          <p className="text-sm text-slate-400 mt-2">Neste PDF, eu revelo os conceitos da Lógica do Preço que utilizo para encontrar entradas de alta precisão. Deixe seu contato e tenha acesso imediato a este material exclusivo.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 md:mt-0 w-full md:max-w-lg md:flex-1">
          <div className="flex flex-col gap-3">
             {/* Row 1: Name and Email */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="name" className="sr-only">Nome</label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="seu@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            {/* Row 2: Phone and Button */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                    <label htmlFor="phone" className="sr-only">WhatsApp (Telefone)</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="Seu WhatsApp (DDD + Número)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-5 py-3 rounded-lg font-semibold text-white disabled:bg-slate-500 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Baixar Guia Agora'}
                </button>
            </div>
          </div>
        </form>
      </div>
      {message && (
        <p className={`mt-4 text-sm text-center md:text-left ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </section>
  );
};

export default LeadForm;