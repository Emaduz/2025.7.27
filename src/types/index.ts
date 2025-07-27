/**
 * Type definitions for the portfolio website
 */

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  image: string;
  images: string[];
  year: string;
  client?: string;
  clientAr?: string;
}

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

export interface Language {
  code: 'en' | 'ar';
  name: string;
  flag: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  image: string;
  date: string;
  readTime: string;
}
