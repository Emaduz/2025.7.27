/**
 * Services section component showcasing design services offered
 */

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Palette, PenTool, Printer, Globe, Award, Camera } from 'lucide-react';

const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Brand Identity Design',
      titleAr: 'تصميم الهوية التجارية',
      description: 'Complete visual identity packages including logos, color schemes, typography, and brand guidelines that reflect your business values.',
      descriptionAr: 'حزم الهوية البصرية الشاملة بما في ذلك الشعارات وأنظمة الألوان والطباعة والمبادئ التوجيهية للعلامة التجارية التي تعكس قيم عملك.'
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Logo Design',
      titleAr: 'تصميم الشعارات',
      description: 'Professional logo design services that create memorable and impactful brand marks for businesses of all sizes.',
      descriptionAr: 'خدمات تصميم الشعارات الاحترافية التي تخلق علامات تجارية لا تُنسى ومؤثرة للشركات من جميع الأحجام.'
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: 'Print Design',
      titleAr: 'التصميم المطبوع',
      description: 'High-quality print materials including brochures, flyers, posters, business cards, and packaging design.',
      descriptionAr: 'مواد طباعة عالية الجودة بما في ذلك الكتيبات والنشرات والملصقات وبطاقات العمل وتصميم التغليف.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Design',
      titleAr: 'تصميم الويب',
      description: 'Modern, responsive web design that creates engaging digital experiences for your audience.',
      descriptionAr: 'تصميم ويب حديث ومتجاوب يخلق تجارب رقمية جذابة لجمهورك.'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Digital Marketing Design',
      titleAr: 'تصميم التسويق الرقمي',
      description: 'Social media graphics, web banners, email templates, and digital advertising materials.',
      descriptionAr: 'رسوميات وسائل التواصل الاجتماعي ولافتات الويب وقوالب البريد الإلكتروني ومواد الإعلان الرقمي.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '3D Modeling & Rendering',
      titleAr: 'النمذجة ثلاثية الأبعاد',
      description: 'Professional 3D modeling and rendering services for product visualization and architectural presentations.',
      descriptionAr: 'خدمات النمذجة والعرض ثلاثية الأبعاد الاحترافية لتصور المنتجات والعروض المعمارية.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#9c7860] dark:text-gray-100 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t('services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#8f1819] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-[#bd7b6a]/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#8f1819] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#9c7860] dark:text-gray-100 group-hover:text-[#8f1819] transition-colors duration-300">
                  {isRTL ? service.titleAr : service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {isRTL ? service.descriptionAr : service.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#8f1819]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#d9cab1]/20 dark:bg-gray-800/50 p-12 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#9c7860] dark:text-gray-100 mb-4">
              {isRTL ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {isRTL 
                ? 'دعنا نعمل معاً لإنشاء تصاميم استثنائية تجعل علامتك التجارية تبرز من المنافسة.'
                : "Let's work together to create exceptional designs that make your brand stand out from the competition."
              }
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#8f1819] hover:bg-[#8f1819]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isRTL ? 'ابدأ مشروعك' : 'Start Your Project'}
            </button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#9c7860] dark:text-gray-100 mb-4">
              {isRTL ? 'عملية العمل' : 'Work Process'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL 
                ? 'عملية منظمة لضمان تقديم أفضل النتائج لكل مشروع'
                : 'A structured process to ensure the best results for every project'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                titleAr: 'الاستكشاف',
                description: 'Understanding your needs and goals',
                descriptionAr: 'فهم احتياجاتك وأهدافك'
              },
              {
                step: '02',
                title: 'Concept',
                titleAr: 'المفهوم',
                description: 'Creating initial design concepts',
                descriptionAr: 'إنشاء مفاهيم التصميم الأولية'
              },
              {
                step: '03',
                title: 'Design',
                titleAr: 'التصميم',
                description: 'Developing the final design',
                descriptionAr: 'تطوير التصميم النهائي'
              },
              {
                step: '04',
                title: 'Delivery',
                titleAr: 'التسليم',
                description: 'Final files and project completion',
                descriptionAr: 'الملفات النهائية وإنجاز المشروع'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#8f1819] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-[#9c7860] dark:text-gray-100 mb-2">
                  {isRTL ? process.titleAr : process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {isRTL ? process.descriptionAr : process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
