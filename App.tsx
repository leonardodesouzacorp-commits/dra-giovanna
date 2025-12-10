import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-main font-sans selection:bg-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default App;