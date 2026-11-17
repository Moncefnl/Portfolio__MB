export interface LiveWebApp {
  id: string;
  title: string;
  arabicTitle?: string;
  category: string;
  tagline: string;
  description: string;
  arabicDescription?: string;
  url: string;
  stack: string[];
  image: string;
  badge?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  fullDetails: string;
  stack: string[];
  image: string;
  span: 'col-span-1 md:col-span-7' | 'col-span-1 md:col-span-5' | 'col-span-1 md:col-span-12';
  aspectRatio: string;
  githubUrl?: string;
  demoUrl?: string;
  metrics?: string[];
  keyFeatures?: string[];
  isRtl?: boolean;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  rotation: number;
  tags: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  badge: string;
}

export interface SkillCategory {
  title: string;
  category: 'languages' | 'web' | 'devops' | 'architecture' | 'databases' | 'spoken';
  skills: { name: string; level?: string; iconName?: string }[];
}
