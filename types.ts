
export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
}

export interface GalleryItem {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  gallery?: (string | GalleryItem)[];
  liveUrl?: string;
  caseStudyUrl?: string;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}

export interface PricingPack {
  name: string;
  price: string;
  features: string[];
  excluded: string[];
}

export interface SocialPost {
  platform: string;
  content: string;
  hashtags: string[];
}

export interface ProposalData {
  title: string;
  commercialText: string;
  socialPosts: SocialPost[];
  sitemap: string[];
  timeline: { week: string; tasks: string[] }[];
}

export type AdminSection = 'overview' | 'blog' | 'projects' | 'services' | 'settings';
