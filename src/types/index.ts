export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Certifications {
  name: string;
  position: string;
  company: string;
  text: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  imageUrl: string;
}