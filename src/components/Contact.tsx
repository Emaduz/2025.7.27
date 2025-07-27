/**
 * Contact section component with contact form and information
 */

import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: isRTL ? 'الهاتف' : 'Phone',
      value: '+966 504487308',
      href: 'tel:+966504487308'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'Emad.i202020@gmail.com',
      href: 'mailto:Emad.i202020@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: isRTL ? 'الموقع' : 'Location',
      value: 'Al-Madina, Saudi Arabia',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Behance',
      icon: <Globe className="h-5 w-5" />,
      href: '#',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#d9cab1]/10 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#9c7860] dark:text-gray-100 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[#8f1819] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 lg:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#9c7860] dark:text-gray-100 mb-8">
              {isRTL ? 'أرسل لي رسالة' : 'Send Me a Message'}
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700">
                  {isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!'}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#9c7860] dark:text-gray-200 mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8f1819] focus:border-transparent"
                  placeholder={isRTL ? 'اسمك الكامل' : 'Your full name'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#9c7860] mb-2">
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8f1819] focus:border-transparent"
                  placeholder={isRTL ? 'بريدك الإلكتروني' : 'your.email@example.com'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#9c7860] mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8f1819] focus:border-transparent resize-none"
                  placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8f1819] hover:bg-[#8f1819]/90 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{isRTL ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>{t('contact.send')}</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8f1819] to-[#bd7b6a] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#9c7860] mb-1">{info.label}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#9c7860] mb-6">
                {isRTL ? 'تابعني على' : 'Follow Me On'}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-[#8f1819] hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-[#8f1819] to-[#bd7b6a] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">
                {isRTL ? 'متاح للعمل' : 'Available for Work'}
              </h3>
              <p className="mb-6 opacity-90">
                {isRTL 
                  ? 'أنا متاح حالياً لمشاريع جديدة ومستعد لمساعدتك في تحقيق رؤيتك الإبداعية.'
                  : "I'm currently available for new projects and ready to help you bring your creative vision to life."
                }
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  {isRTL ? 'متاح الآن' : 'Available Now'}
                </span>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#d9cab1]/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8f1819] mb-2">24</div>
                <p className="text-gray-600 text-sm">
                  {isRTL ? 'ساعة متوسط وقت الاستجابة' : 'Hours Average Response Time'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
