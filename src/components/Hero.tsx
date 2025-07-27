/**
 * Hero section component with main introduction and call-to-action
 */

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#d9cab1]/20 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#9c7860] dark:text-gray-100 leading-tight">
                {t('hero.title')}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-[#a76552] dark:text-[#bd7b6a] font-light">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8f1819]">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8f1819]">200+</div>
                <div className="text-sm text-gray-600">{t('about.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8f1819]">150+</div>
                <div className="text-sm text-gray-600">{t('about.clients')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToPortfolio}
                className="bg-[#8f1819] hover:bg-[#8f1819]/90 text-white px-8 py-3 text-lg group"
              >
                {t('hero.cta')}
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="bg-transparent border-[#bd7b6a] text-[#9c7860] hover:bg-[#bd7b6a] hover:text-white px-8 py-3 text-lg group"
              >
                {t('hero.hire')}
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-[#d9cab1] dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#8f1819] rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">+966 504487308</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#8f1819] rounded-full"></div>
                <span className="text-gray-600">Emad.i202020@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#8f1819] rounded-full"></div>
                <span className="text-gray-600">Al-Madina, Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#8f1819]/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/a96cdca2-eaed-4972-bb52-8d5398004c6e.JPG"
                  alt="EmadAlddine Ismael - Senior Graphic Designer"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6">
                  <h3 className="text-white text-xl font-semibold">EmadAlddine Ismael</h3>
                  <p className="text-white/90">Senior Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
