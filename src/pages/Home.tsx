/**
 * Main homepage component that combines all sections
 */

import React from 'react';
import { LanguageProvider } from '../components/LanguageProvider';
import { ThemeProvider } from '../components/ThemeProvider';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Services />
          <Contact />
        </main>
        
        <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Home;
