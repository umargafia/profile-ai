export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  plan: 'free' | 'premium';
  usage: {
    headshots: {
      generated: number;
      downloaded: number;
      limit: number;
    };
    resumes: {
      exported: number;
      limit: number;
    };
  };
}

export interface HeadshotStyle {
  id: string;
  name: string;
  description: string;
  category: 'corporate' | 'creative' | 'casual' | 'industry';
  thumbnail: string;
  isPremium?: boolean;
}

export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  category: 'modern' | 'classic' | 'creative' | 'ats';
  thumbnail: string;
  atsScore: number;
  isPremium?: boolean;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
    title: string;
  };
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: string[];
  languages: string[];
}

export interface GeneratedHeadshot {
  id: string;
  originalImage: string;
  processedImage: string;
  style: HeadshotStyle;
  settings: {
    background: string;
    lighting: string;
  };
  createdAt: string;
  expiresAt: string;
}

export type Language = 'en' | 'es' | 'zh';
export type Theme = 'light' | 'dark';