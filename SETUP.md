# 🚀 QUICK START GUIDE

## AMBICA Construction & Interior Website

### ✅ Installation Complete

All files have been created and dependencies installed.

---

## 🎯 Run the Project

### Development Mode
```bash
npm run dev
```
Then open: **http://localhost:5173**

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Overview

### Pages Created
1. **Home** (`/`) - Complete landing page with all sections
2. **Services** (`/services`) - Detailed services with alternating layout
3. **Projects** (`/projects`) - Portfolio showcase

### Key Features
✓ Premium architectural design system
✓ Custom Tailwind configuration
✓ Framer Motion animations
✓ Fully responsive (mobile-first)
✓ TypeScript strict mode
✓ Component-driven architecture
✓ Clean, scalable folder structure

---

## 🎨 Design System

### Colors
- **Primary**: Deep charcoal/black tones
- **Accent**: Warm bronze/stone
- **Stone**: Neutral grays

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

### Layout
- 8px grid system
- Max-width: 1280px (7xl)
- Generous whitespace
- Strong visual hierarchy

---

## 📝 Customization

### Update Content
Edit: `src/constants/data.ts`
- Services array
- Projects array
- Team members
- Testimonials

### Modify Colors/Typography
Edit: `tailwind.config.js`

### Add New Components
Create in: `src/components/ui/` or `src/components/sections/`

---

## 🏗️ Architecture

```
src/
├── animations/      → Framer Motion variants
├── components/
│   ├── ui/         → Reusable UI (Button, Container, Section)
│   ├── layout/     → Header, Footer
│   └── sections/   → Page sections (Hero, About, etc.)
├── pages/          → Route pages
├── constants/      → Data & configuration
├── types/          → TypeScript definitions
├── hooks/          → Custom React hooks
└── lib/            → Utility functions
```

---

## 🎬 Animations

Subtle, professional animations:
- Fade in on scroll
- Slide up transitions
- Stagger effects
- Smooth sliders

---

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

---

## 🔥 Next Steps

1. **Run the dev server**: `npm run dev`
2. **Replace placeholder images** with actual company photos
3. **Update content** in `src/constants/data.ts`
4. **Add company logo** to `src/assets/`
5. **Customize colors** based on brand guidelines
6. **Test on all devices**

---

## 💡 Tips

- All images use Unsplash URLs - replace with your own
- Contact form is UI only - add backend integration
- Sliders use state management - easily customizable
- All components are fully typed with TypeScript

---

## 🎯 Production Checklist

- [ ] Replace all placeholder images
- [ ] Update company information
- [ ] Add real contact details
- [ ] Integrate contact form backend
- [ ] Add Google Analytics
- [ ] Optimize images
- [ ] Test all links
- [ ] SEO meta tags
- [ ] Performance audit

---

**Built with excellence. Ready for production.** 🚀
