/**
 * Custom hook for language management and internationalization
 */

import { useState, useEffect, createContext, useContext } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    
    // Hero Section
    'hero.title': 'Creative Graphic Designer',
    'hero.subtitle': 'Transforming Ideas into Visual Masterpieces',
    'hero.description': 'With over 5 years of expertise in branding, logo design, and visual identity, I create impactful designs that tell your story and elevate your brand.',
    'hero.cta': 'View My Work',
    'hero.hire': 'Hire Me',
    
    // About
    'about.title': 'About Me',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    
    // Services
    'services.title': 'My Services',
    'services.subtitle': 'Professional Design Solutions',
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Recent Projects',
    'portfolio.all': 'All',
    'portfolio.branding': 'Branding',
    'portfolio.logos': 'Logos',
    'portfolio.print': 'Print Design',
    'portfolio.web': 'Web Design',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s Work Together',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.design': 'Designed with passion'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.portfolio': 'أعمالي',
    'nav.about': 'نبذة عني',
    'nav.services': 'خدماتي',
    'nav.contact': 'تواصل معي',
    'nav.blog': 'المدونة',
    
    // Hero Section
    'hero.title': 'مصمم جرافيك مبدع',
    'hero.subtitle': 'تحويل الأفكار إلى تحف بصرية',
    'hero.description': 'مع أكثر من 5 سنوات من الخبرة في العلامات التجارية وتصميم الشعارات والهوية البصرية، أقوم بإنشاء تصاميم مؤثرة تحكي قصتك وترتقي بعلامتك التجارية.',
    'hero.cta': 'شاهد أعمالي',
    'hero.hire': 'وظفني',
    
    // About
    'about.title': 'نبذة عني',
    'about.experience': 'سنوات من الخبرة',
    'about.projects': 'مشروع مكتمل',
    'about.clients': 'عميل راضٍ',
    
    // Services
    'services.title': 'خدماتي',
    'services.subtitle': 'حلول تصميم احترافية',
    
    // Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.subtitle': 'المشاريع الحديثة',
    'portfolio.all': 'الكل',
    'portfolio.branding': 'العلامات التجارية',
    'portfolio.logos': 'الشعارات',
    'portfolio.print': 'التصميم المطبوع',
    'portfolio.web': 'تصميم الويب',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنعمل معاً',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.design': 'مصمم بشغف'
  }
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageProvider = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return {
    language,
    setLanguage,
    t,
    isRTL: language === 'ar'
  };
};
