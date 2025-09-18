import { useMemo } from 'react';
import { WHATSAPP_GROUP_URL } from '../constants';

/**
 * Hook customizado para gerar a URL do grupo do WhatsApp, anexando o 'bitag' 
 * do localStorage, se existir.
 * Isso centraliza a lógica e evita a duplicação de código.
 */
export const useWhatsappUrl = (): string => {
  const whatsappUrl = useMemo(() => {
    // Esta verificação é para ambientes onde a `window` não está disponível (ex: SSR)
    if (typeof window === 'undefined') {
      return WHATSAPP_GROUP_URL;
    }

    try {
      const bitag = localStorage.getItem('bitag');
      // A URL original já possui parâmetros de consulta, então usamos '&' para anexar o bitag
      return bitag ? `${WHATSAPP_GROUP_URL}&bitag=${bitag}` : WHATSAPP_GROUP_URL;
    } catch (error) {
      console.error('Falha ao acessar o localStorage:', error);
      // Retorna para a URL base se o localStorage não estiver acessível
      return WHATSAPP_GROUP_URL;
    }
  }, []);

  return whatsappUrl;
};
