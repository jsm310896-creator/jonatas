
import React, { useState, useEffect } from 'react';
import Icon from './icons/Icon';

// Helper to get a random number
const getRandomViewers = () => Math.floor(Math.random() * (180 - 150 + 1)) + 150;

const LiveViewers: React.FC = () => {
  const [viewers, setViewers] = useState(getRandomViewers());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing for the first time
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5s

    const interval = setInterval(() => {
      // Hide the notification, then schedule it to reappear
      setIsVisible(false);

      setTimeout(() => {
        setViewers(getRandomViewers());
        setIsVisible(true);
      }, 12000); // Stays hidden for 12s, then reappears

    }, 20000); // Total cycle time: 8s visible + 12s hidden

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 shadow-lg flex items-center gap-3 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
    >
      <Icon name="fire" className="w-5 h-5 text-amber-500" />
      <span className="text-sm">
        <strong className="font-semibold">{viewers}</strong> pessoas estão vendo isso agora!
      </span>
    </div>
  );
};

export default LiveViewers;