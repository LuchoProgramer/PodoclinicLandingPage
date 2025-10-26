// Global type definitions for PodoClinic Landing Page

// Blog Post Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  lastModified?: string;
  tags: string[];
  metaTitle?: string;
  metaDescription: string;
  featured: boolean;
  image?: string;
  readTime?: string;
  cta?: {
    text: string;
    link: string;
  };
}

// Blog Category Types
export interface BlogCategory {
  id?: string;
  slug: string;
  name: string;
  description: string;
  count: number;
  metaTitle?: string;
  metaDescription?: string;
  color?: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string; // Changed from optional to required
}

// Service Types
export interface Service {
  id?: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  icon: any; // LucideIcon type
  benefits: string[];
  link?: string;
  urgent?: boolean;
  title?: string;
  description?: string;
  price?: number;
  duration?: string;
}

// Test/Quiz Types
export interface Test {
  id: number;
  title: string;
  description: string;
  questions: TestQuestion[];
}

export interface TestQuestion {
  text: string;
  weight: number;
}

// Doctor Information
export interface DoctorInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  stats: {
    patients: string;
    experience: string;
    satisfaction: string;
    surgeries: string;
  };
  certifications: string[];
  specialties: string[];
}

// Contact Information
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

// Metadata Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  openGraph?: {
    title: string;
    description: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
}

// Component Props Types
export interface NavbarProps {
  activeSection?: string;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export interface ServicesProps {
  services?: Service[];
}

export interface FAQAccordionProps {
  faqs: FAQ[];
  categories?: string[];
}

export interface TestimonialsProps {
  testimonials?: any[];
}

export interface BlogButtonsProps {
  href: string;
  trackingLabel: string;
  children: React.ReactNode;
  isExternal?: boolean;
}