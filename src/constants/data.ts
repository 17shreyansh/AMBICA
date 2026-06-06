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

const imageModules = import.meta.glob('../assets/Houses/**/*.jpeg', { eager: true });

const getHouseImage = (houseName: string, imageName: string) => {
  const path = `../assets/Houses/${houseName}/${imageName}`;
  const module = imageModules[path] as { default: string } | undefined;
  return module?.default || '';
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Meridian Residence',
    category: 'Residential',
    description: 'A contemporary 8,500 sq.ft villa featuring minimalist architecture and sustainable design principles.',
    image: getHouseImage('House1', 'House1_img1.jpeg'),
    gallery: [
      getHouseImage('House1', 'House1_img2.jpeg'),
      getHouseImage('House1', 'House1_img3.jpeg'),
      getHouseImage('House1', 'House1_img4.jpeg'),
      getHouseImage('House1', 'House1_img5.jpeg')
    ],
    details: 'This luxury residence showcases clean lines, expansive glass facades, and seamless indoor-outdoor integration. The project emphasizes natural materials, energy efficiency, and spatial fluidity.',
    year: '2023'
  },
  {
    id: '2',
    title: 'Lumina Hillside Villa',
    category: 'Residential',
    description: 'A stunning modern home terraced into the hillside, offering panoramic views and luxurious living spaces.',
    image: getHouseImage('House2', 'House2_img1.jpeg'),
    gallery: [
      getHouseImage('House2', 'House2_img2.jpeg'),
      getHouseImage('House2', 'House2_img3.jpeg'),
      getHouseImage('House2', 'House2_img4.jpeg'),
      getHouseImage('House2', 'House2_img5.jpeg')
    ],
    details: 'Designed to harmonize with its elevated terrain, the villa utilizes cantilevered structures, native stone, and floor-to-ceiling windows to create a seamless connection between the interior and the natural surroundings.',
    year: '2023'
  },
  {
    id: '3',
    title: 'Aura Minimalist Haven',
    category: 'Residential',
    description: 'A tranquil living space characterized by its pure forms, muted palette, and deliberate architectural restraint.',
    image: getHouseImage('House3', 'House3_img1.jpeg'),
    gallery: [
      getHouseImage('House3', 'House3_img2.jpeg'),
      getHouseImage('House3', 'House3_img3.jpeg'),
      getHouseImage('House3', 'House3_img4.jpeg'),
      getHouseImage('House3', 'House3_img5.jpeg')
    ],
    details: 'Every element in this home was carefully curated to promote a sense of calm and clarity. From the concealed storage solutions to the precise alignment of interior planes, the result is a sanctuary of serene simplicity.',
    year: '2024'
  },
  {
    id: '4',
    title: 'Oakwood Heritage Estate',
    category: 'Renovation',
    description: 'A sensitive modernization of a classic estate, preserving historical character while integrating state-of-the-art amenities.',
    image: getHouseImage('House4', 'House4_img1.jpeg'),
    gallery: [
      getHouseImage('House4', 'House4_img2.jpeg'),
      getHouseImage('House4', 'House4_img3.jpeg'),
      getHouseImage('House4', 'House4_img4.jpeg'),
      getHouseImage('House4', 'House4_img1.jpeg') // Reused to ensure 4 gallery images
    ],
    details: 'This project balanced heritage conservation with modern functionality. Original architectural elements, including bespoke millwork and heritage masonry, were restored alongside comprehensive structural and technological upgrades.',
    year: '2022'
  },
  {
    id: '5',
    title: 'Skyline Penthouse',
    category: 'Interior',
    description: 'A sophisticated urban dwelling featuring bespoke interiors and expansive city views.',
    image: getHouseImage('House5', 'House5_img1.jpeg'),
    gallery: [
      getHouseImage('House5', 'House5_img2.jpeg'),
      getHouseImage('House5', 'House5_img3.jpeg'),
      getHouseImage('House5', 'House5_img4.jpeg'),
      getHouseImage('House5', 'House5_img5.jpeg')
    ],
    details: 'Commanding the top floor of a prestigious tower, the penthouse was designed with entertaining in mind. Custom lighting installations, rare marble surfaces, and curated furnishings define this exclusive residence.',
    year: '2023'
  },
  {
    id: '6',
    title: 'The Glass Pavilion',
    category: 'Residential',
    description: 'An architectural masterpiece defined by its transparent boundaries and pavilion-style layout.',
    image: getHouseImage('House6', 'House6_img1.jpeg'),
    gallery: [
      getHouseImage('House6', 'House6_img2.jpeg'),
      getHouseImage('House6', 'House6_img3.jpeg'),
      getHouseImage('House6', 'House6_img4.jpeg'),
      getHouseImage('House6', 'House6_img5.jpeg')
    ],
    details: 'Conceived as a series of interconnected glass boxes, the home dissolves the boundary between shelter and nature. Advanced glazing technologies ensure thermal comfort without compromising the visual connection to the landscape.',
    year: '2024'
  },
  {
    id: '7',
    title: 'Cedar Retreat',
    category: 'Residential',
    description: 'A warm and inviting woodland home characterized by its extensive use of natural timber and artisanal craftsmanship.',
    image: getHouseImage('House7', 'House7_img1.jpeg'),
    gallery: [
      getHouseImage('House7', 'House7_img2.jpeg'),
      getHouseImage('House7', 'House7_img3.jpeg'),
      getHouseImage('House7', 'House7_img4.jpeg'),
      getHouseImage('House7', 'House7_img5.jpeg')
    ],
    details: 'Situated amidst a mature cedar grove, the retreat utilizes locally sourced timber and stone. The architecture embraces a rugged yet refined aesthetic, providing a luxurious sanctuary deep within nature.',
    year: '2022'
  },
  {
    id: '8',
    title: 'Zenith Modern Home',
    category: 'Residential',
    description: 'A bold statement of contemporary design, featuring dynamic angles and innovative material combinations.',
    image: getHouseImage('House8', 'House8_img1.jpeg'),
    gallery: [
      getHouseImage('House8', 'House8_img2.jpeg'),
      getHouseImage('House8', 'House8_img3.jpeg'),
      getHouseImage('House8', 'House8_img4.jpeg'),
      getHouseImage('House8', 'House8_img5.jpeg')
    ],
    details: 'The Zenith home challenges conventional geometry with its striking angular rooflines and intersecting volumes. The interior spaces are dramatic and light-filled, showcasing a masterful interplay of shadow and light.',
    year: '2023'
  },
  {
    id: '9',
    title: 'Coastal Breeze Villa',
    category: 'Residential',
    description: 'An elegant beachfront property designed to capture ocean breezes and maximize coastal panoramas.',
    image: getHouseImage('House9', 'House9_img1.jpeg'),
    gallery: [
      getHouseImage('House9', 'House9_img2.jpeg'),
      getHouseImage('House9', 'House9_img3.jpeg'),
      getHouseImage('House9', 'House9_img4.jpeg'),
      getHouseImage('House9', 'House9_img5.jpeg')
    ],
    details: 'Designed for a relaxed coastal lifestyle, the villa features expansive wrap-around decks, weather-resistant materials, and an open-plan layout that effortlessly transitions to the outdoor living and pool areas.',
    year: '2024'
  },
  {
    id: '10',
    title: 'Alpine Crest Residence',
    category: 'Residential',
    description: 'A luxurious mountain home engineered for extreme climates without sacrificing aesthetic elegance.',
    image: getHouseImage('House10', 'House10_img1.jpeg'),
    gallery: [
      getHouseImage('House10', 'House10_img2.jpeg'),
      getHouseImage('House10', 'House10_img3.jpeg'),
      getHouseImage('House10', 'House10_img4.jpeg'),
      getHouseImage('House10', 'House10_img5.jpeg')
    ],
    details: 'Perched on an alpine ridge, the residence combines heavy timber construction with vast expanses of triple-glazed glass. The home is an off-grid capable sanctuary featuring robust architecture and profound comfort.',
    year: '2023'
  },
  {
    id: '11',
    title: 'Eclipse Architectural Home',
    category: 'Residential',
    description: 'A visionary architectural project characterized by its sweeping curves and dramatic cantilevered elements.',
    image: getHouseImage('House11', 'House11_img1.jpeg'),
    gallery: [
      getHouseImage('House11', 'House11_img2.jpeg'),
      getHouseImage('House11', 'House11_img3.jpeg'),
      getHouseImage('House11', 'House11_img4.jpeg'),
      getHouseImage('House11', 'House11_img5.jpeg')
    ],
    details: 'The Eclipse home pushes the boundaries of residential design. Its fluid, organic forms are rendered in crisp white concrete, creating a striking contrast against the environment while offering unparalleled interior spatial experiences.',
    year: '2024'
  },
  {
    id: '12',
    title: 'Lakeside Pavilion',
    category: 'Residential',
    description: 'A serene waterside retreat that perfectly frames the surrounding natural beauty.',
    image: getHouseImage('House12', 'House12_img1.jpeg'),
    gallery: [
      getHouseImage('House12', 'House12_img2.jpeg'),
      getHouseImage('House12', 'House12_img3.jpeg'),
      getHouseImage('House12', 'House12_img4.jpeg'),
      getHouseImage('House12', 'House12_img5.jpeg')
    ],
    details: 'Positioned intimately close to the water edge, the pavilion features sweeping overhangs and expansive decks that blur the line between indoor living and the lakeside environment.',
    year: '2023'
  },
  {
    id: '13',
    title: 'Terra Modern Villa',
    category: 'Residential',
    description: 'An earth-toned contemporary home built with sustainable rammed-earth walls and modern aesthetics.',
    image: getHouseImage('House13', 'House13_img1.jpeg'),
    gallery: [
      getHouseImage('House13', 'House13_img2.jpeg'),
      getHouseImage('House13', 'House13_img3.jpeg'),
      getHouseImage('House13', 'House13_img4.jpeg'),
      getHouseImage('House13', 'House13_img5.jpeg')
    ],
    details: 'This villa represents a beautiful intersection between ancient building techniques and modern luxury. The thermal mass of the earth walls provides excellent climate control, while deep wooden accents add warmth.',
    year: '2024'
  },
  {
    id: '14',
    title: 'Urban Oasis Concept',
    category: 'Commercial',
    description: 'A conceptual study in integrating lush vertical gardens into high-density urban developments.',
    image: getHouseImage('House14', 'House14_img1.jpeg'),
    gallery: [
      getHouseImage('House14', 'House14_img2.jpeg'),
      getHouseImage('House14', 'House14_img3.jpeg'),
      getHouseImage('House14', 'House14_img4.jpeg'),
      getHouseImage('House14', 'House14_img5.jpeg')
    ],
    details: 'Serving as a focal point for urban renewal, this concept emphasizes biophilic design. The singular aesthetic vision presents a striking juxtaposition against traditional concrete cityscapes.',
    year: '2025'
  }
];

const teamImages = import.meta.glob('../assets/Teams/*.jpeg', { eager: true });

const getTeamImage = (imageName: string) => {
  const path = `../assets/Teams/${imageName}`;
  const module = teamImages[path] as { default: string } | undefined;
  return module?.default || '';
};

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'Founder & Principal Architect',
    image: getTeamImage('founder.jpeg')
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'Lead Interior Designer',
    image: getTeamImage('Interior_designer.jpeg')
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Project Director',
    image: getTeamImage('Project_head.jpeg')
  },
  {
    id: '4',
    name: 'Karan Desai',
    role: 'Site Supervisor',
    image: getTeamImage('Site_supervisor.jpeg')
  },
  {
    id: '5',
    name: 'Neha Kapoor',
    role: 'Graphic Designer',
    image: getTeamImage('Graphic_designer.jpeg')
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Deepak Gupta',
    role: 'Businessman, Vishal Mega Mart Agra',
    content: 'The team at AMBICA transformed our commercial space far beyond our expectations. Their ability to manage large-scale requirements while maintaining flawless design aesthetics is truly commendable.',
    rating: 5
  },
  {
    id: '2',
    name: 'Vivek Agarwal',
    role: 'Ajanta Dairy',
    content: 'Working with AMBICA was a seamless experience. They understood the specific operational needs of our facility and delivered a design that is both highly functional and visually stunning.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ritesh Agarwal',
    role: 'Idea Payal',
    content: 'Their professionalism and commitment to timelines set them apart. The architectural details and interior finishings reflect a standard of premium quality that perfectly aligns with our brand.',
    rating: 5
  },
  {
    id: '4',
    name: 'Pankaj Gupta',
    role: 'Businessman',
    content: 'From the initial concept to the final execution, the AMBICA team demonstrated exceptional creativity and dedication. Our new space is a testament to their innovative approach and expertise.',
    rating: 5
  },
  {
    id: '5',
    name: 'Vaastu Consultancy',
    role: 'Partner',
    content: 'AMBICA perfectly integrates traditional Vaastu principles with modern architectural design. Working with their team ensures every project achieves both spiritual harmony and aesthetic brilliance.',
    rating: 5
  },
  {
    id: '6',
    name: 'Architectural and Civil Engineering Consultants',
    role: 'Engineering Partner',
    content: 'Their commitment to structural integrity and innovative design is unmatched. AMBICA consistently delivers projects that meet the highest standards of safety, quality, and engineering excellence.',
    rating: 5
  }
];
