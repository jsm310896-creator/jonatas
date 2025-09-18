import { useMemo } from 'react';
import { POLARIUM_AFFILIATE_URL } from '../constants';

/**
 * Hook customizado para gerar a URL de afiliado da Polarium, 
 * anexando o 'bitag' do localStorage, se existir.
 */
export const usePolariumUrl = (): string => {
  const polariumUrl = useMemo(() => {
    // Retorna a URL base em ambientes sem `window` (ex: SSR)
    if (typeof window === 'undefined') {
      return POLARIUM_AFFILIATE_URL;
    }

    try {
      const bitag = localStorage.getItem('bitag');
      if (bitag) {
        // A URL base já tem parâmetros, então usamos '&'
        return `${POLARIUM_AFFILIATE_URL}&afftrack=${bitag}`;
      }
      return POLARIUM_AFFILIATE_URL;
    } catch (error) {
      console.error('Falha ao acessar o localStorage:', error);
      // Retorna a URL base como fallback em caso de erro
      return POLARIUM_AFFILIATE_URL;
    }
  }, []);

  return polariumUrl;
};
