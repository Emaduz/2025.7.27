/**
 * Footer component with copyright and additional links
 */

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#9c7860] dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/f2bec30a-4050-4cc6-b4fc-3c08362b1501.png" 
                alt="EmadAlddine Ismael Logo" 
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="text-xl font-bold">
                {isRTL ? 'عماد الدين إسماعيل' : 'EmadAlddine Ismael'}
              </span>
            </div>
            <p className="text-white/80 text-sm">
              {isRTL ? 'مصمم جرافيك محترف' : 'Professional Graphic Designer'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                { key: 'home', href: '#home' },
                { key: 'portfolio', href: '#portfolio' },
                { key: 'about', href: '#about' },
                { key: 'services', href: '#services' },
                { key: 'contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {t(`nav.${link.key}`)}
                </button>
              ))}
            </nav>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">
                {isRTL ? 'العودة للأعلى' : 'Back to Top'}
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} EmadAlddine Ismael. {t('footer.rights')}.
          </p>
          <p className="flex items-center space-x-1 mt-2 md:mt-0">
            <span>{t('footer.design')}</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>
              {isRTL ? 'في المدينة المنورة' : 'in Al-Madina'}
            </span>
          </p>
        </div>

        {/* Skills Tags */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {[
              'Graphic Design', 'Logo Design', 'Brand Identity', 'Print Design', 
              'UI/UX Design', '3D Modeling', 'Typography', 'Adobe Creative Suite'
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
