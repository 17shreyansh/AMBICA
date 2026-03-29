# AMBICA CONSTRUCTION AND INTERIOR

A premium, production-ready React website for a construction and interior design company. Built with modern web technologies and architectural design principles.

## 🎨 Design Philosophy

- **Minimal & Premium**: Clean lines, sophisticated typography, architectural aesthetic
- **Color Palette**: Deep charcoal, warm stone, subtle bronze accents
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Layout**: Grid-based, generous whitespace, strong visual hierarchy

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **Tailwind CSS** with custom design system
- **Framer Motion** for subtle animations
- **React Router** for navigation

## 📁 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/
│   ├── ui/          # Reusable UI components (Button, Container, Section)
│   ├── layout/      # Layout components (Header, Footer)
│   └── sections/    # Page sections (Hero, About, Services, etc.)
├── pages/           # Route pages (Home, Services, Projects)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── styles/          # Global styles
├── types/           # TypeScript type definitions
├── constants/       # Data constants and configuration
├── animations/      # Framer Motion animation variants
└── App.tsx          # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📄 Pages

### Home Page
- **Hero Section**: Bold statement with CTA
- **About Section**: Company overview with statistics
- **Services Slider**: Horizontal slider showcasing services
- **Projects Slider**: Featured projects with imagery
- **Team Section**: Team member profiles
- **Testimonials**: Client reviews
- **Contact Form**: Lead capture

### Services Page
- Left-right alternating layout
- Each service with detailed description
- High-quality imagery
- Feature lists

### Projects Page
- Portfolio showcase
- Project details with category and year
- Case study format
- Professional photography

## 🎨 Design System

### Colors
- **Primary**: Charcoal/Black tones (900-50)
- **Accent**: Warm bronze/stone (900-50)
- **Stone**: Neutral grays (900-50)

### Typography Scale
- Display: 5rem
- H1: 3.5rem
- H2: 2.5rem
- H3: 2rem
- H4: 1.5rem
- H5: 1.25rem
- Body: 1rem

### Spacing
8px grid system with extended spacing utilities

## 🎭 Components

### UI Components
- **Button**: Primary, secondary, outline variants
- **Container**: Max-width wrapper with responsive padding
- **Section**: Consistent vertical spacing

### Layout Components
- **Header**: Fixed navigation with mobile menu
- **Footer**: Multi-column footer with links

### Section Components
- **Hero**: Full-screen hero with animation
- **About**: Two-column layout with stats
- **ServicesSlider**: Horizontal slider
- **ProjectsSlider**: Featured projects carousel
- **Team**: Grid layout with hover effects
- **Testimonials**: Review cards
- **Contact**: Form with contact information

## 🎬 Animations

Subtle, professional animations using Framer Motion:
- Fade in on scroll
- Slide up transitions
- Stagger children animations
- Scale effects

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes

## 🔧 Customization

### Update Content
Edit `src/constants/data.ts` to modify:
- Services
- Projects
- Team members
- Testimonials

### Modify Design System
Edit `tailwind.config.js` to customize:
- Colors
- Typography
- Spacing
- Animations

### Add New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## 📝 Code Quality

- TypeScript strict mode enabled
- Component-driven architecture
- Reusable, modular code
- Clean separation of concerns
- No inline styles

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Private project for AMBICA Construction and Interior

---

Built with precision and attention to detail. Premium quality, production-ready code.
