/**
 * Portfolio section component with project gallery and filtering
 */

import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample portfolio data - In real implementation, this would come from CMS
  const projects: Project[] = [
    {
      id: '1',
      title: 'Al Masjid Al Nabawi Branding',
      titleAr: 'هوية المسجد النبوي',
      description: 'Complete visual identity design for awareness campaigns',
      descriptionAr: 'تصميم هوية بصرية شاملة لحملات التوعية',
      category: 'branding',
      categoryAr: 'علامات تجارية',
      image: 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/e8824c84-3b7c-41a7-83cd-7ee882aeeebb.jpg',
      images: ['https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/e8824c84-3b7c-41a7-83cd-7ee882aeeebb.jpg', 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/aed438d9-bddf-421e-919a-543e11ebda45.jpg'],
      year: '2023',
      client: 'Al Masjid Al Nabawi',
      clientAr: 'المسجد النبوي'
    },
    {
      id: '2',
      title: 'Modern Logo Collection',
      titleAr: 'مجموعة شعارات حديثة',
      description: 'Professional logo designs for various clients',
      descriptionAr: 'تصاميم شعارات احترافية لعملاء متنوعين',
      category: 'logos',
      categoryAr: 'شعارات',
      image: 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/20493bf5-be64-4512-b6c2-db75da1e6ebc.jpg',
      images: ['https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/20493bf5-be64-4512-b6c2-db75da1e6ebc.jpg', 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/57b8832d-62bb-435b-a940-ea40ec2916bb.jpg'],
      year: '2023',
      client: 'Various Clients',
      clientAr: 'عملاء متنوعون'
    },
    {
      id: '3',
      title: 'Print Design Campaign',
      titleAr: 'حملة التصميم المطبوع',
      description: 'Creative print materials for Al Fanoos Press',
      descriptionAr: 'مواد طباعة إبداعية لمطبعة الفانوس',
      category: 'print',
      categoryAr: 'طباعة',
      image: 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/ee4e9af5-534b-4db1-a6d1-79221744293e.jpg',
      images: ['https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/ee4e9af5-534b-4db1-a6d1-79221744293e.jpg', 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/c7d3b4d2-fb5b-4eec-aa08-72629614d330.jpg'],
      year: '2022',
      client: 'Al Fanoos Press',
      clientAr: 'مطبعة الفانوس'
    },
    {
      id: '4',
      title: 'Modern Web Design',
      titleAr: 'تصميم الويب الحديث',
      description: 'Responsive web design for modern businesses',
      descriptionAr: 'تصميم ويب متجاوب للشركات الحديثة',
      category: 'web',
      categoryAr: 'تصميم الويب',
      image: 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/41025ee5-485d-41ba-bcd8-f4e6121fa5a5.jpg',
      images: ['https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/41025ee5-485d-41ba-bcd8-f4e6121fa5a5.jpg', 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/ffb96891-a931-4e61-82e3-8ef600e793a6.jpg'],
      year: '2023',
      client: 'Tech Startup',
      clientAr: 'شركة تقنية ناشئة'
    },
    {
      id: '5',
      title: 'Corporate Identity Package',
      titleAr: 'حزمة الهوية المؤسسية',
      description: 'Complete brand identity for corporate clients',
      descriptionAr: 'هوية علامة تجارية كاملة للعملاء المؤسسيين',
      category: 'branding',
      categoryAr: 'علامات تجارية',
      image: 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/0239a33f-3271-49f5-b136-166a575c1f20.jpg',
      images: ['https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/0239a33f-3271-49f5-b136-166a575c1f20.jpg', 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/fcd10ab2-c609-4f2e-9f1b-1a1cf01e2838.jpg'],
      year: '2023',
      client: 'Corporate Client',
      clientAr: 'عميل مؤسسي'
    },
    {
      id: '6',
      title: 'Creative Poster Series',
      titleAr: 'سلسلة ملصقات إبداعية',
      description: 'Artistic poster designs for cultural events',
      descriptionAr: 'تصاميم ملصقات فنية للفعاليات الثقافية',
      category: 'print',
      categoryAr: 'طباعة',
      image: 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/33671486-68db-48e4-b141-ed2464d8d126.jpg',
      images: ['https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/33671486-68db-48e4-b141-ed2464d8d126.jpg', 'https://pub-cdn.sider.ai/u/U07GH21JVW2/web-coder/688625ebf2d3a0ac8dcc55d0/resource/b00742e6-a78e-4f8d-9538-e711a6135d5c.jpg'],
      year: '2022',
      client: 'Cultural Center',
      clientAr: 'المركز الثقافي'
    }
  ];

  const categories = [
    { key: 'all', label: t('portfolio.all') },
    { key: 'branding', label: t('portfolio.branding') },
    { key: 'logos', label: t('portfolio.logos') },
    { key: 'print', label: t('portfolio.print') },
    { key: 'web', label: t('portfolio.web') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#9c7860] dark:text-gray-100 mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              variant={activeFilter === category.key ? "default" : "outline"}
              className={
                activeFilter === category.key
                  ? "bg-[#8f1819] hover:bg-[#8f1819]/90 text-white"
                  : "bg-transparent border-[#bd7b6a] text-[#9c7860] hover:bg-[#bd7b6a] hover:text-white"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={isRTL ? project.titleAr : project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">
                      {isRTL ? project.titleAr : project.title}
                    </h3>
                    <p className="text-sm text-white/90 mb-4">
                      {isRTL ? project.descriptionAr : project.description}
                    </p>
                    <Button
                      onClick={() => openProjectModal(project)}
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-black"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8f1819] font-medium">
                    {isRTL ? project.categoryAr : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#9c7860] mb-2">
                  {isRTL ? project.titleAr : project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isRTL ? project.descriptionAr : project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#9c7860]">
                    {isRTL ? selectedProject.titleAr : selectedProject.title}
                  </h3>
                  <Button
                    onClick={closeProjectModal}
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    ✕
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={isRTL ? selectedProject.titleAr : selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#9c7860] mb-2">Description</h4>
                      <p className="text-gray-600">
                        {isRTL ? selectedProject.descriptionAr : selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#9c7860] mb-2">Client</h4>
                      <p className="text-gray-600">
                        {isRTL ? selectedProject.clientAr : selectedProject.client}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#9c7860] mb-2">Year</h4>
                      <p className="text-gray-600">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#9c7860] mb-2">Category</h4>
                      <p className="text-gray-600">
                        {isRTL ? selectedProject.categoryAr : selectedProject.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
