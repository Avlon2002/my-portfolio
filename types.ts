
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  highlights: string[];

  github?: string; // optional
  demo?: string;  // optional
}


export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string }[];
}
