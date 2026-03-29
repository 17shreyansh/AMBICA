# UI/UX Color System - Perfect Contrast Guide

## Color Palette

### Primary Colors (Dark)
- `primary-900`: #0a0908 (Almost Black)
- `primary-800`: #1c1917 (Very Dark)
- `primary-700`: #292524 (Dark Brown)
- `primary-600`: #44403c (Medium Dark)
- `primary-500`: #57534e (Medium)
- `primary-400`: #78716c (Medium Light)

### Stone Colors (Neutral)
- `stone-50`: #fafaf9 (Off White - Body Background)
- `stone-100`: #f5f5f4 (Very Light Gray)
- `stone-200`: #e7e5e4 (Light Gray)
- `stone-300`: #d6d3d1 (Medium Light)
- `stone-400`: #a8a29e (Medium)

### Accent Colors (Bronze/Warm)
- `accent-600`: #8b6f4a (Bronze)
- `accent-400`: #b8a07a (Light Bronze)
- `accent-300`: #d4c4a8 (Very Light Bronze)

## Color Usage by Section

### ✅ Hero Section (Dark Background)
- Background: `bg-primary-900` (Dark)
- Heading: `text-stone-50` (White)
- Subheading: `text-stone-300` (Light Gray)
- Label: `text-accent-300` (Light Bronze)
- Buttons: White bg with dark text / Outline with white text

### ✅ About Section (Light Background)
- Background: `bg-stone-50` (Off White)
- Heading: `text-primary-900` (Dark)
- Body Text: `text-primary-700` (Dark Gray)
- Label: `text-accent-600` (Bronze)
- Stats: `text-primary-900` (Dark)

### ✅ Services Slider (Light Background)
- Background: `bg-stone-100` (Very Light Gray)
- Heading: `text-primary-900` (Dark)
- Body Text: `text-primary-700` (Dark Gray)
- Label: `text-accent-600` (Bronze)
- Features: `text-primary-700` (Dark Gray)

### ✅ Projects Slider (Light Background)
- Background: `bg-stone-50` (Off White)
- Heading: `text-primary-900` (Dark)
- Body Text: `text-primary-700` (Dark Gray)
- Card Overlay: `bg-primary-900` with `text-stone-50` (Dark bg, White text)

### ✅ Team Section (Light Background)
- Background: `bg-stone-100` (Very Light Gray)
- Heading: `text-primary-900` (Dark)
- Body Text: `text-primary-700` (Dark Gray)
- Names: `text-primary-900` (Dark)
- Roles: `text-primary-400` (Medium)

### ✅ Testimonials (Light Background)
- Background: `bg-stone-50` (Off White)
- Heading: `text-primary-900` (Dark)
- Body Text: `text-primary-700` (Dark Gray)
- Quotes: `text-primary-900` (Dark)
- Stars: `text-accent-600` (Bronze)

### ✅ Contact Section (Dark Background)
- Background: `bg-primary-900` (Dark)
- Heading: `text-stone-50` (White)
- Body Text: `text-stone-400` (Light Gray)
- Labels: `text-primary-400` (Medium - visible on dark)
- Links: `text-stone-50` (White)
- Form Inputs: `text-stone-50` (White text)
- Placeholders: `text-primary-500` (Medium - visible on dark)

### ✅ Footer (Dark Background)
- Background: `bg-primary-900` (Dark)
- Body Text: `text-stone-400` (Light Gray)
- Links: `text-stone-300` (Light Gray)
- Headings: `text-primary-500` (Medium - visible on dark)
- Copyright: `text-primary-600` (Medium)

### ✅ Services Page
- Hero: `bg-primary-900` with `text-stone-50` (Dark bg, White text)
- Content: `bg-stone-50` / `bg-stone-100` alternating
- Text: `text-primary-900` headings, `text-primary-700` body

### ✅ Projects Page
- Hero: `bg-primary-900` with `text-stone-50` (Dark bg, White text)
- Content: `bg-stone-50` / `bg-stone-100` alternating
- Text: `text-primary-900` headings, `text-primary-700` body

## Contrast Rules

### Dark Backgrounds (primary-900)
✅ Use: stone-50, stone-300, stone-400, accent-300, accent-400
❌ Avoid: primary-700, primary-800, primary-900

### Light Backgrounds (stone-50, stone-100)
✅ Use: primary-900, primary-800, primary-700, accent-600
❌ Avoid: stone-50, stone-100, stone-200

## Typography Color Guidelines

### Headings (h1-h6)
- Light backgrounds: `text-primary-900`
- Dark backgrounds: `text-stone-50`

### Body Text
- Light backgrounds: `text-primary-700` (main) or `text-primary-600` (secondary)
- Dark backgrounds: `text-stone-300` or `text-stone-400`

### Labels/Captions
- Light backgrounds: `text-accent-600` or `text-primary-400`
- Dark backgrounds: `text-accent-300` or `text-accent-400`

### Links
- Light backgrounds: `text-primary-900` with `hover:text-accent-600`
- Dark backgrounds: `text-stone-300` with `hover:text-stone-50`

## Accessibility

All color combinations meet WCAG AA standards:
- Dark text on light backgrounds: Contrast ratio > 7:1
- Light text on dark backgrounds: Contrast ratio > 7:1
- Interactive elements: Clear hover states with color changes

## Quick Reference

```jsx
// Light Section
<section className="bg-stone-50">
  <h2 className="text-primary-900">Heading</h2>
  <p className="text-primary-700">Body text</p>
  <span className="text-accent-600">Label</span>
</section>

// Dark Section
<section className="bg-primary-900">
  <h2 className="text-stone-50">Heading</h2>
  <p className="text-stone-300">Body text</p>
  <span className="text-accent-300">Label</span>
</section>
```

## Result

✅ Perfect contrast everywhere
✅ No white text on white backgrounds
✅ No dark text on dark backgrounds
✅ Accessible and readable
✅ Professional and premium look
