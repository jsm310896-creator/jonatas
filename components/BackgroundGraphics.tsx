import React, { useState, useEffect } from 'react';

// Data for the first (top-right) candlestick chart
const candles1 = [
  { type: 'bullish', x: 100, wick: [450, 520], body: [470, 500] },
  { type: 'bullish', x: 160, wick: [420, 480], body: [430, 470] },
  { type: 'bearish', x: 220, wick: [440, 500], body: [450, 480] },
  { type: 'doji',    x: 280, wick: [430, 490], body: [460, 465] },
  { type: 'bullish', x: 340, wick: [380, 440], body: [390, 430] },
  { type: 'bullish', x: 400, wick: [350, 400], body: [360, 390] },
  { type: 'bearish', x: 460, wick: [370, 420], body: [380, 410] },
  { type: 'bullish', x: 520, wick: [320, 380], body: [330, 370] },
  { type: 'doji',    x: 580, wick: [300, 360], body: [330, 335] },
  { type: 'bearish', x: 640, wick: [320, 380], body: [330, 360] },
];

// Data for the second (bottom-left) candlestick chart
const candles2 = [
    { type: 'bearish', x: 50, wick: [180, 250], body: [200, 230] },
    { type: 'bullish', x: 110, wick: [150, 220], body: [170, 200] },
    { type: 'doji',    x: 170, wick: [160, 230], body: [190, 195] },
    { type: 'bearish', x: 230, wick: [180, 250], body: [200, 240] },
    { type: 'bullish', x: 290, wick: [150, 210], body: [160, 200] },
    { type: 'bullish', x: 350, wick: [120, 180], body: [130, 170] },
];

type Candle = typeof candles1[number];

// A reusable function to render a single candle
const renderCandle = ({ type, x, wick, body }: Candle) => {
  const wickColor = "url(#line-gradient)";
  const bodyWidth = 18;
  const bodyColors = {
    bullish: 'rgba(34, 197, 94, 0.6)', // green-500 with opacity
    bearish: 'rgba(239, 68, 68, 0.6)', // red-500 with opacity
    doji: 'rgba(107, 114, 128, 0.8)', // gray-500 with opacity
  };

  return (
    <g className="candle">
      <line x1={x} y1={wick[0]} x2={x} y2={wick[1]} stroke={wickColor} strokeWidth="2" />
      <rect 
        x={x - bodyWidth / 2}
        y={Math.min(body[0], body[1])}
        width={bodyWidth}
        height={Math.abs(body[0] - body[1])}
        fill={bodyColors[type]}
        // Make border slightly more opaque than fill
        stroke={type === 'doji' ? 'none' : bodyColors[type].replace('0.6', '0.9').replace('0.8', '1')}
        strokeWidth="1"
      />
    </g>
  );
};

const BackgroundGraphics: React.FC = () => {
  const [transformStyle1, setTransformStyle1] = useState({});
  const [transformStyle2, setTransformStyle2] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const { innerWidth, innerHeight } = currentTarget as Window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      const maxRotate = 6;

      // Layer 1 (further away) moves less
      setTransformStyle1({
        transform: `translateZ(-50px) rotateX(${-yPercent * maxRotate * 0.7}deg) rotateY(${xPercent * maxRotate * 0.7}deg)`
      });

      // Layer 2 (closer) moves more
      setTransformStyle2({
        transform: `translateZ(-20px) rotateX(${-yPercent * maxRotate}deg) rotateY(${xPercent * maxRotate}deg)`
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div className="background-graphics" aria-hidden="true">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      
      <svg
        width="800"
        height="600"
        viewBox="0 0 800 600"
        className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 transform opacity-30 lg:opacity-40 graphic-3d-layer"
        xmlns="http://www.w3.org/2000/svg"
        style={transformStyle2}
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
           <filter id="graphic-filter">
            <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>
        <g className="candlestick-chart" filter="url(#graphic-filter)">
          {candles1.map((candle, index) => (
            <g key={`chart1-candle-${index}`} className="candle-container">
              {renderCandle(candle)}
            </g>
          ))}
        </g>
      </svg>

       <svg
        width="600"
        height="400"
        viewBox="0 0 600 400"
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 transform opacity-20 graphic-3d-layer"
        xmlns="http://www.w3.org/2000/svg"
        style={transformStyle1}
      >
         <g className="candlestick-chart">
            {candles2.map((candle, index) => (
                <g key={`chart2-candle-${index}`} className="candle-container">
                    {renderCandle(candle)}
                </g>
            ))}
         </g>
      </svg>
    </div>
  );
};

export default BackgroundGraphics;