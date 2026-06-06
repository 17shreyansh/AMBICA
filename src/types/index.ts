export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  details: string;
  year: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
