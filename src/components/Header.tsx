/**
 * Header component with navigation and language switcher
 */

import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from './ThemeProvider';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-gray-800/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/f2bec30a-4050-4cc6-b4fc-3c08362b1501.png" 
              alt="EmadAlddine Ismael Logo" 
              className="w-auto h-auto"
            />
            <span className="text-xl font-bold text-[#8f1819] dark:text-[#bd7b6a]">
              {isRTL ? 'عماد الدين إسماعيل' : 'EmadAlddine Ismael'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-[#9c7860] hover:text-[#8f1819] dark:text-gray-300 dark:hover:text-[#bd7b6a] transition-colors duration-300 font-medium"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Theme Switcher, Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center space-x-2 bg-transparent border-[#bd7b6a] text-[#9c7860] hover:bg-[#bd7b6a] hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-transparent border-[#bd7b6a] text-[#9c7860] hover:bg-[#bd7b6a] hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#9c7860] hover:text-[#8f1819] dark:text-gray-300 dark:hover:text-[#bd7b6a] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#d9cab1] dark:border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#9c7860] hover:text-[#8f1819] dark:text-gray-300 dark:hover:text-[#bd7b6a] transition-colors duration-300 font-medium text-left"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
