export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
