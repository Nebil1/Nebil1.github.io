# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: Framer Motion powered interactions
- **Performance Optimized**: Cached DOM queries and optimized re-renders
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Friendly**: Meta tags and semantic HTML

## Recent Improvements

### Performance
- Cached DOM element references to avoid repeated queries
- Extracted magic numbers to constants
- Optimized scroll handlers with requestAnimationFrame
- Fixed memory leaks in timeout handling

### Mobile Experience
- Added mobile navigation menu
- Improved touch targets (44px minimum)
- Better responsive breakpoints
- Enhanced scroll behavior for mobile
- Optimized button sizes and spacing

### Security & Code Quality
- Added URL validation for external links
- Proper error handling for null/undefined props
- Browser environment checks for SSR safety
- Fixed ESLint configuration conflicts
- Unique SVG gradient IDs to prevent conflicts

### Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## Development

```bash
npm install
npm run dev
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions