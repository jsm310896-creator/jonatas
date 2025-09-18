import React, { Suspense, lazy, useEffect } from 'react';

// Eagerly loaded components (above-the-fold or critical)
import Header from './components/Header';
import Hero from './components/Hero';
import FloatingCta from './components/FloatingCta';
import LiveViewers from './components/LiveViewers';
import BackgroundGraphics from './components/BackgroundGraphics';

// Lazily load components that appear below the fold
const Benefits = lazy(() => import('./components/Benefits'));
const About = lazy(() => import('./components/About'));
const BrokerCta = lazy(() => import('./components/BrokerCta'));
const LeadForm = lazy(() => import('./components/LeadForm'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Faq = lazy(() => import('./components/Faq'));
const FinalCta = lazy(() => import('./components/FinalCta'));
const Footer = lazy(() => import('./components/Footer'));


const App: React.FC = () => {
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const bitag = urlParams.get('bitag');
      if (bitag) {
        localStorage.setItem('bitag', bitag);
      }
    } catch (error) {
      console.error('Falha ao acessar parâmetros da URL ou localStorage:', error);
    }
  }, []);

  const scrollToLeadForm = () => {
    document.getElementById('leadForm')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <BackgroundGraphics />
      <div className="relative z-10">
        <FloatingCta />
        <LiveViewers />
        <Header />
        <main className="max-w-6xl mx-auto px-6 overflow-x-hidden">
          <Hero onScrollToForm={scrollToLeadForm} />
          <Suspense fallback={null}>
            <Benefits />
            <About />
            <BrokerCta />
            <LeadForm />
            <Testimonials />
            <Faq />
            <FinalCta />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;