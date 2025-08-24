import { HeadshotStyle, ResumeTemplate } from '../types';

export const headshotStyles: HeadshotStyle[] = [
  {
    id: 'corporate-executive',
    name: 'Corporate Executive',
    description: 'Professional business attire with confident posture',
    category: 'corporate',
    thumbnail: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'business-professional',
    name: 'Business Professional',
    description: 'Classic business look with approachable demeanor',
    category: 'corporate',
    thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'creative-professional',
    name: 'Creative Professional',
    description: 'Modern, artistic style for creative industries',
    category: 'creative',
    thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'startup-casual',
    name: 'Startup Casual',
    description: 'Relaxed yet professional for tech environments',
    category: 'casual',
    thumbnail: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'academic-professional',
    name: 'Academic Professional',
    description: 'Scholarly appearance for educational settings',
    category: 'industry',
    thumbnail: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'healthcare-professional',
    name: 'Healthcare Professional',
    description: 'Trustworthy and caring for medical fields',
    category: 'industry',
    thumbnail: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'tech-industry',
    name: 'Tech Industry',
    description: 'Modern and innovative for technology roles',
    category: 'industry',
    thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    description: 'Energetic and personable for client-facing roles',
    category: 'corporate',
    thumbnail: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'legal-professional',
    name: 'Legal Professional',
    description: 'Authoritative and trustworthy for legal careers',
    category: 'corporate',
    thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
  {
    id: 'neutral-professional',
    name: 'Neutral Professional',
    description: 'Versatile style suitable for any industry',
    category: 'corporate',
    thumbnail: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=240&fit=crop',
  },
];

export const resumeTemplates: ResumeTemplate[] = [
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    description: 'Clean, minimal design with two-column layout',
    category: 'modern',
    atsScore: 95,
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=240&h=320&fit=crop',
  },
  {
    id: 'ats-classic',
    name: 'ATS Classic',
    description: 'Single column, traditional format with high ATS compatibility',
    category: 'ats',
    atsScore: 98,
    thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=240&h=320&fit=crop',
  },
  {
    id: 'creative-professional',
    name: 'Creative Professional',
    description: 'Sidebar design with color accents for creative roles',
    category: 'creative',
    atsScore: 85,
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=240&h=320&fit=crop',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated, formal layout for senior-level positions',
    category: 'classic',
    atsScore: 92,
    thumbnail: 'https://images.pexels.com/photos/590018/pexels-photo-590018.jpeg?auto=compress&cs=tinysrgb&w=240&h=320&fit=crop',
  },
  {
    id: 'tech-minimalist',
    name: 'Tech Minimalist',
    description: 'Clean, sparse design optimized for tech industry',
    category: 'modern',
    atsScore: 90,
    thumbnail: 'https://images.pexels.com/photos/590017/pexels-photo-590017.jpeg?auto=compress&cs=tinysrgb&w=240&h=320&fit=crop',
  },
];

export const keywordSuggestions = {
  'software engineer': [
    'JavaScript', 'React', 'Node.js', 'Python', 'Git', 'Agile', 'API development',
    'Database design', 'Cloud computing', 'DevOps'
  ],
  'marketing manager': [
    'Digital marketing', 'SEO', 'Content strategy', 'Analytics', 'Campaign management',
    'Social media', 'Brand management', 'Lead generation', 'Marketing automation'
  ],
  'data analyst': [
    'SQL', 'Python', 'Excel', 'Tableau', 'Data visualization', 'Statistical analysis',
    'Machine learning', 'Business intelligence', 'Data mining', 'Reporting'
  ],
  'project manager': [
    'Agile', 'Scrum', 'Risk management', 'Stakeholder management', 'Budget planning',
    'Team leadership', 'Process improvement', 'Quality assurance', 'Timeline management'
  ],
  'sales representative': [
    'Lead generation', 'CRM', 'Negotiation', 'Client relationship', 'Sales forecasting',
    'Territory management', 'Product knowledge', 'Closing techniques', 'Pipeline management'
  ],
};