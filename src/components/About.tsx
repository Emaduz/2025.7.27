/**
 * About section component with designer's biography and expertise
 */

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Award, BookOpen, Languages, MapPin, Star, Users, Palette, PenTool, Printer, Smartphone, Globe, Camera } from 'lucide-react';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const skills = [
    { name: 'Adobe Creative Suite', icon: <Palette className="h-5 w-5" /> },
    { name: '3D Modeling & Rendering', icon: <Camera className="h-5 w-5" /> },
    { name: 'Typography & Branding', icon: <PenTool className="h-5 w-5" /> },
    { name: 'Print Design', icon: <Printer className="h-5 w-5" /> },
    { name: 'Web Design', icon: <Globe className="h-5 w-5" /> },
    { name: 'Logo Design', icon: <Award className="h-5 w-5" /> }
  ];

  const languages = [
    { name: 'Arabic', nameAr: 'العربية', level: 'Mother Tongue', levelAr: 'اللغة الأم' },
    { name: 'English', nameAr: 'الإنجليزية', level: 'Advanced', levelAr: 'متقدم' },
    { name: 'French', nameAr: 'الفرنسية', level: 'Elementary', levelAr: 'مبتدئ' }
  ];

  const education = [
    {
      degree: 'Bachelor of Graphic & Multimedia',
      degreeAr: 'بكالوريوس الجرافيك والوسائط المتعددة',
      year: '2021',
      institution: 'University',
      institutionAr: 'الجامعة'
    },
    {
      degree: 'TOFEL ITP Certificate',
      degreeAr: 'شهادة توفل ITP',
      year: '2021',
      institution: 'Language Center',
      institutionAr: 'مركز اللغات'
    },
    {
      degree: 'Designing Diploma',
      degreeAr: 'دبلوم التصميم',
      year: '2016',
      institution: 'Design Institute',
      institutionAr: 'معهد التصميم'
    },
    {
      degree: 'English Advanced Diploma',
      degreeAr: 'دبلوم الإنجليزية المتقدم',
      year: '2018',
      institution: 'Language Institute',
      institutionAr: 'معهد اللغات'
    }
  ];

  const experience = [
    {
      title: 'Graphic Designer',
      titleAr: 'مصمم جرافيك',
      company: 'Al Masjid Al Nabawi',
      companyAr: 'المسجد النبوي',
      location: 'Al-Madina, Saudi Arabia',
      locationAr: 'المدينة المنورة، السعودية',
      description: 'Created impactful designs for awareness and guidance campaigns. Enhanced branding through innovative design solutions.',
      descriptionAr: 'أنشأت تصاميم مؤثرة لحملات التوعية والإرشاد. عززت العلامة التجارية من خلال حلول التصميم المبتكرة.'
    },
    {
      title: 'Graphic & Printing Specialist',
      titleAr: 'أخصائي الجرافيك والطباعة',
      company: 'Al Fanoos Press',
      companyAr: 'مطبعة الفانوس',
      location: 'Al-Madina, Saudi Arabia',
      locationAr: 'المدينة المنورة، السعودية',
      description: 'Designed engaging graphic & printing content for printable items. Collaborated with cross-functional teams to deliver projects on time.',
      descriptionAr: 'صممت محتوى جرافيك وطباعة جذاب للعناصر القابلة للطباعة. تعاونت مع فرق متعددة الوظائف لتسليم المشاريع في الوقت المحدد.'
    },
    {
      title: 'Freelance Designer',
      titleAr: 'مصمم مستقل',
      company: 'Self-Employed',
      companyAr: 'عمل حر',
      location: 'Remote',
      locationAr: 'عن بعد',
      description: 'Delivered custom design solutions for clients across various industries. Specialized in branding, logo design, and visual identity.',
      descriptionAr: 'قدمت حلول تصميم مخصصة للعملاء في مختلف الصناعات. متخصص في العلامات التجارية وتصميم الشعارات والهوية البصرية.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#d9cab1]/10 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#9c7860] dark:text-gray-100 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-[#8f1819] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio & Stats */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#9c7860] dark:text-gray-100 mb-6">
                {isRTL ? 'نبذة شخصية' : 'About Me'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {isRTL 
                  ? 'مصمم جرافيك مبدع وذو خبرة مع أكثر من 5 سنوات من الخبرة في تطوير الهويات البصرية المؤثرة. ماهر في إدارة فرق التصميم وتعزيز التعاون وضمان التنفيذ الناجح للمشاريع الإبداعية.'
                  : 'Creative and experienced Branding and Logo Designer with over 5 years of expertise in developing impactful visual identities. Skilled in managing design teams, fostering collaboration, and ensuring the successful execution of creative projects.'
                }
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isRTL
                  ? 'متخصص في تقديم تصاميم شعارات احترافية ومبادئ توجيهية للعلامة التجارية ومواد تسويقية متماسكة. قادر على تولي أدوار كبيرة كمصمم جرافيك أول لقيادة المشاريع وإرشاد المصممين المبتدئين.'
                  : 'Proficient in delivering professional logo designs, brand guidelines, and cohesive marketing materials. Capable of taking on senior-level roles as a Senior Graphic Designer to lead projects and mentor junior designers.'
                }
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#9c7860] mb-6">
                {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#8f1819]/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#8f1819]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#9c7860]">
                      {isRTL ? 'الموقع' : 'Location'}
                    </p>
                    <p className="text-gray-600">Al-Madina, Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#8f1819]/10 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-[#8f1819]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#9c7860]">
                      {isRTL ? 'الجنسية' : 'Nationality'}
                    </p>
                    <p className="text-gray-600">Yemeni</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#8f1819]/10 rounded-full flex items-center justify-center">
                    <Languages className="h-5 w-5 text-[#8f1819]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#9c7860]">
                      {isRTL ? 'اللغات' : 'Languages'}
                    </p>
                    <p className="text-gray-600">Arabic, English, French</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#9c7860] mb-6">
                {isRTL ? 'اللغات' : 'Languages'}
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-[#9c7860]">
                      {isRTL ? lang.nameAr : lang.name}
                    </span>
                    <span className="text-sm text-gray-600 bg-[#d9cab1]/30 px-3 py-1 rounded-full">
                      {isRTL ? lang.levelAr : lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#9c7860] mb-6">
                {isRTL ? 'المهارات' : 'Skills'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-[#d9cab1]/20 dark:bg-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-[#8f1819] rounded-lg flex items-center justify-center text-white">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-[#9c7860] dark:text-gray-200 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#9c7860] mb-6">
                {isRTL ? 'التعليم' : 'Education'}
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#8f1819]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-[#8f1819]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#9c7860]">
                        {isRTL ? edu.degreeAr : edu.degree}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {isRTL ? edu.institutionAr : edu.institution} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#9c7860] mb-6">
                {isRTL ? 'الخبرة المهنية' : 'Professional Experience'}
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    {index !== experience.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-[#d9cab1]"></div>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#8f1819] rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#9c7860] text-lg">
                          {isRTL ? exp.titleAr : exp.title}
                        </h4>
                        <p className="text-[#8f1819] font-medium">
                          {isRTL ? exp.companyAr : exp.company}
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          {isRTL ? exp.locationAr : exp.location}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {isRTL ? exp.descriptionAr : exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
