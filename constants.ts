// FIX: Populated this file with constant definitions and exports to resolve module errors.
import type { FaqItem, TestimonialItem } from './types';

// URLs
export const WHATSAPP_GROUP_URL = "https://api.whatsapp.com/send/?phone=5577999316981&text=Ol%C3%A1%2C+quero+entrar+na+comunidade+gratuita+de+OB%21&type=phone_number&app_absent=0";

/**
 * URL de afiliado para a corretora Polarium.
 * O bitag será adicionado dinamicamente.
 */
export const POLARIUM_AFFILIATE_URL = "https://trade.polariumbroker.com/register?aff=437805&aff_model=revenue";

/**
 * URL de Integração com a Selflux para captura de leads.
 */
export const SELFLUX_WEBHOOK_URL = "https://webhook.sellflux.app/v2/webhook/custom/87f9384a67677cc459f9f880407bef23";

/**
 * URL para a página de download do guia em PDF.
 * IMPORTANTE: Substitua este valor pelo link real do seu arquivo PDF.
 */
export const PDF_DOWNLOAD_URL = "https://drive.google.com/file/d/1Qp-zb6ApKBCO1bIn15I-dHON8KBjz6wg/view?usp=sharing";


// FAQ Items
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso ter experiência prévia para entrar na comunidade?",
    answer: "Não! Nossa comunidade é para todos, desde iniciantes que nunca operaram até traders avançados. Oferecemos materiais e suporte para todos os níveis de conhecimento."
  },
  {
    question: "Os sinais são para qual corretora?",
    answer: "Nossos sinais são compatíveis com a maioria das corretoras de opções binárias, como Quotex, IQ Option, Binomo, entre outras. Você pode operar na plataforma de sua preferência."
  },
  {
    question: "Qual o horário de envio dos sinais?",
    answer: "Os sinais são enviados em horários estratégicos, geralmente durante os períodos de maior volatilidade do mercado, para maximizar as chances de acerto. Os horários são comunicados diariamente no grupo."
  },
  {
    question: "E se eu não puder operar em um dia? Os sinais ficam salvos?",
    answer: "Sim, todos os sinais e análises ficam registrados no grupo do WhatsApp. Você pode consultá-los a qualquer momento para estudar os resultados, mas as operações devem ser feitas em tempo real."
  }
];

// Testimonial Items
// FIX: Corrected a typo in the constant name from TESTIMONial_ITEMS to TESTIMONIAL_ITEMS.
export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80&facepad=4&crop=faces&fm=webp",
    name: "Carlos Silva",
    detail: "Membro há 6 meses",
    quote: "Desde que entrei na comunidade, minha consistência melhorou absurdamente. O gerenciamento de risco ensinado pelo JS é o diferencial. Finalmente estou positivo!"
  },
  {
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80&facepad=4&crop=faces&fm=webp",
    name: "Mariana Costa",
    detail: "Membro há 1 ano",
    quote: "Eu era totalmente iniciante e tinha medo de operar. O suporte da comunidade e a clareza dos sinais me deram a confiança que eu precisava. Recomendo demais!"
  },
  {
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&q=80&facepad=4&crop=faces&fm=webp",
    name: "Ricardo Alves",
    detail: "Membro há 3 meses",
    quote: "Já participei de várias salas de sinais, mas a assertividade e a transparência do JS Trader são incomparáveis. O suporte ao vivo faz toda a diferença."
  }
];