import { Service, Project, TeamMember, Testimonial } from '../types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Residential Construction',
    description: 'Crafting bespoke homes that blend architectural excellence with functional living spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    features: ['Custom Home Design', 'Luxury Villas', 'Apartment Complexes', 'Renovation & Remodeling']
  },
  {
    id: '2',
    title: 'Commercial Spaces',
    description: 'Building dynamic commercial environments that drive business success and brand identity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    features: ['Office Buildings', 'Retail Spaces', 'Hospitality Projects', 'Mixed-Use Developments']
  },
  {
    id: '3',
    title: 'Interior Design',
    description: 'Transforming spaces into timeless environments through meticulous attention to detail.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    features: ['Space Planning', 'Custom Furniture', 'Material Selection', 'Lighting Design']
  },
  {
    id: '4',
    title: 'Project Management',
    description: 'End-to-end project execution ensuring quality, timeline, and budget adherence.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    features: ['Site Supervision', 'Quality Control', 'Vendor Coordination', 'Timeline Management']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Meridian Residence',
    category: 'Residential',
    description: 'A contemporary 8,500 sq.ft villa featuring minimalist architecture and sustainable design principles.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    details: 'This luxury residence showcases clean lines, expansive glass facades, and seamless indoor-outdoor integration. The project emphasizes natural materials, energy efficiency, and spatial fluidity.',
    year: '2023'
  },
  {
    id: '2',
    title: 'Nexus Corporate Tower',
    category: 'Commercial',
    description: 'A 12-story commercial complex designed for modern enterprises seeking premium workspace.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    details: 'The tower features flexible floor plates, advanced building systems, and a striking facade that establishes a strong urban presence. Sustainable design achieved LEED Gold certification.',
    year: '2023'
  },
  {
    id: '3',
    title: 'Serenity Spa & Wellness',
    category: 'Interior',
    description: 'A tranquil 5,000 sq.ft wellness center combining natural elements with contemporary aesthetics.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    details: 'The interior design creates a calming atmosphere through carefully curated materials, lighting, and spatial flow. Natural stone, warm woods, and water features define the sensory experience.',
    year: '2024'
  },
  {
    id: '4',
    title: 'Heritage Restoration',
    category: 'Renovation',
    description: 'Sensitive restoration of a 1920s colonial bungalow preserving historical character.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    details: 'This project balanced heritage conservation with modern functionality. Original architectural elements were restored while integrating contemporary amenities and structural upgrades.',
    year: '2022'
  },
  {
    id: '5',
    title: 'Urban Loft Conversion',
    category: 'Interior',
    description: 'Industrial warehouse transformed into a sophisticated 3,200 sq.ft residential loft.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    details: 'Exposed brick, steel beams, and concrete floors were preserved and complemented with custom millwork, designer lighting, and curated furnishings to create a refined urban dwelling.',
    year: '2023'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'Founder & Principal Architect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'Lead Interior Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Project Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    role: 'Senior Architect',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Vikram Malhotra',
    role: 'CEO, Malhotra Industries',
    content: 'AMBICA delivered our corporate headquarters with exceptional attention to detail. Their ability to translate our vision into reality while maintaining the highest standards of quality was remarkable.',
    rating: 5
  },
  {
    id: '2',
    name: 'Anjali Desai',
    role: 'Homeowner',
    content: 'Building our dream home with AMBICA was a seamless experience. Their design sensibility, professionalism, and commitment to excellence exceeded our expectations at every stage.',
    rating: 5
  },
  {
    id: '3',
    name: 'Karthik Iyer',
    role: 'Restaurant Owner',
    content: 'The interior design for our restaurant perfectly captures the ambiance we envisioned. AMBICA\'s creative approach and execution have significantly contributed to our business success.',
    rating: 5
  }
];
