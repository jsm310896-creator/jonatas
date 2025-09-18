import React from 'react';

// Centraliza todos os paths SVG em um único objeto para fácil gerenciamento
const ICON_PATHS: Record<string, React.ReactNode> = {
  whatsapp: (
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.536 1.907 6.344l-1.196 4.359 4.557-1.196z M8.678 7.367c-.09-.219-.182-.219-.268-.223-.086-.004-.171-.004-.258-.004-.086 0-.217.034-.329.171-.112.137-.436.426-.436 1.039 0 .612.448 1.213.512 1.299.064.086.879 1.413 2.132 1.96.287.123.533.195.704.248.171.054.329.021.438-.033.12-.064.533-.219.612-.436.079-.217.079-.404.054-.436-.025-.032-.086-.054-.171-.099-.086-.043-.533-.264-.612-.295-.079-.032-.137-.032-.195.034-.058.063-.217.264-.268.328-.05.064-.1.071-.17.025-.071-.047-.295-.109-.56-.328-.21-.17-.426-.479-.462-.533-.036-.054-.004-.086.048-.137.05-.05.112-.137.171-.195.058-.058.079-.099.112-.17.032-.064.017-.119-.004-.151-.021-.032-.195-.479-.268-.648z" />
  ),
  play: <path d="M4 2v20l18-10L4 2z" />,
  chevronDoubleRight: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />,
  check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>,
  quote: (
    <>
      <path d="M6.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 4a8 8 0 100 16 8 8 0 000-16z" opacity=".2"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5.67 1.5 1.5S9.33 14 8.5 14 7 13.33 7 12.5 7.67 11 8.5 11zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
    </>
  ),
  menu: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>,
  x: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>,
  chevronDown: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />,
  fire: <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052c.247.252.484.52.698.802a10.518 10.518 0 01-2.43.99c-.198.085-.386.177-.568.275a.75.75 0 00.568 1.355c.22-.102.448-.2.682-.292 1.056-.421 2.21-.421 3.266 0 .234.092.462.19.682.292a.75.75 0 00.568-1.355c-.182-.098-.37-.19-.568-.275a10.518 10.518 0 01-2.43-.99c.214-.282.45-.55.698-.802a.75.75 0 001.071-1.052zM9.01 16.85a.75.75 0 001.48 0c-.01-.132-.017-.264-.022-.396a9.003 9.003 0 012.064-3.23c1.012-1.123 1.53-2.52 1.53-3.974C14.062 6.83 12.232 5 10.02 5 7.808 5 6 6.83 6 9.25c0 1.454.518 2.851 1.53 3.974a9.003 9.003 0 012.064 3.23c-.005.132-.012.264-.022.396z" clipRule="evenodd" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 18L9 9l4.5 4.5L21.75 6" />,
};

export type IconName = keyof typeof ICON_PATHS;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

/**
 * Componente genérico para renderizar ícones SVG.
 * Centraliza a lógica e os paths, melhorando a manutenção e a reutilização.
 * @param {IconName} name - O nome do ícone a ser renderizado.
 * @param {React.SVGProps<SVGSVGElement>} props - Outras propriedades SVG (className, onClick, etc.).
 */
const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const path = ICON_PATHS[name];
  if (!path) {
    // Retorna nulo se o nome do ícone for inválido para evitar quebras.
    return null;
  }

  // Define propriedades padrão que podem ser sobrescritas pelas `props`
  const defaultProps: React.SVGProps<SVGSVGElement> = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    className: "w-6 h-6", // Tamanho padrão
    ...props, // Props do usuário sobrescrevem os padrões
  };

  // Tratamento especial para ícones que usam `fill` em vez de `stroke`
  if (name === 'play' || name === 'quote' || name === 'fire' || name === 'whatsapp') {
    defaultProps.fill = props.fill || 'currentColor';
    defaultProps.stroke = props.stroke || 'none';
  }
  
  return (
    <svg {...defaultProps}>
      {path}
    </svg>
  );
};

export default Icon;