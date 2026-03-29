# Typography System Guide

## Font Sizes (Responsive with clamp)

### Display (Hero Headlines)
- Class: `text-display`
- Size: 40px (mobile) → 80px (desktop)
- Line Height: 1.05
- Usage: Main hero headlines only

### H1 (Page Titles)
- Class: `text-h1`
- Size: 32px (mobile) → 56px (desktop)
- Line Height: 1.1
- Usage: Page titles, major section headers

### H2 (Section Headers)
- Class: `text-h2`
- Size: 28px (mobile) → 40px (desktop)
- Line Height: 1.2
- Usage: Section titles

### H3 (Subsection Headers)
- Class: `text-h3`
- Size: 24px (mobile) → 32px (desktop)
- Line Height: 1.3
- Usage: Card titles, subsections

### H4 (Small Headers)
- Class: `text-h4`
- Size: 20px (mobile) → 24px (desktop)
- Line Height: 1.4
- Usage: Small headers, card subtitles

### H5 (Tiny Headers)
- Class: `text-h5`
- Size: 18px (mobile) → 20px (desktop)
- Line Height: 1.5
- Usage: Small labels, tiny headers

### Body (Paragraphs)
- Class: `text-body`
- Size: 15px (mobile) → 16px (desktop)
- Line Height: 1.7
- Usage: All body text, paragraphs

### Small (Fine Print)
- Class: `text-small`
- Size: 13px (mobile) → 14px (desktop)
- Line Height: 1.6
- Usage: Captions, metadata

## Font Families

### Serif (Playfair Display)
- Class: `font-serif`
- Usage: All headings (h1-h6)
- Weights: 400, 500, 600, 700

### Sans (Inter)
- Class: `font-sans`
- Usage: Body text, UI elements
- Weights: 300, 400, 500, 600, 700

## Usage Examples

```jsx
// Hero Section
<h1 className="text-display font-serif">Building Dreams</h1>

// Page Title
<h1 className="text-h1 font-serif">Our Services</h1>

// Section Header
<h2 className="text-h2 font-serif">What We Do</h2>

// Card Title
<h3 className="text-h3 font-serif">Residential Construction</h3>

// Body Text
<p className="text-body font-light">Lorem ipsum dolor sit amet...</p>

// Small Text
<span className="text-small font-sans">Category • 2024</span>
```

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All font sizes scale smoothly between breakpoints using CSS clamp().
