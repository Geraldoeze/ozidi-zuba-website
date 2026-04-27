# Ozidi Zuba in Kubwa - Motor Spare Parts Website

A professional, SEO-optimized website for Ozidi Zuba in Kubwa, an authentic motor spare parts shopping center in Abuja, Nigeria.

## Overview

This is a modern, responsive website built with Next.js 15, featuring:

- **SEO Optimized**: Comprehensive metadata, Schema.org structured data, sitemap, and robots.txt
- **WhatsApp Integration**: Primary contact method for instant customer communication
- **Mobile Responsive**: Fully responsive design optimized for all devices
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **Animations**: Smooth, engaging animations throughout the site
- **Dark Mode Ready**: Beautiful dark theme optimized for the automotive industry

## Features

### Pages

1. **Home** - Hero section with features and CTA
2. **About** - Company information, mission, vision, and services
3. **Products** - Comprehensive product catalog organized by categories
4. **Contact** - WhatsApp-based contact form and location information

### SEO Features

- Comprehensive metadata tags for all pages
- Open Graph tags for social media sharing
- Twitter Card support
- Schema.org structured data (LocalBusiness, etc.)
- Sitemap.xml for search engine indexing
- Robots.txt for crawler guidance
- Breadcrumb navigation for better UX
- Mobile-friendly design with viewport configuration

### Technical Features

- Built with Next.js 15 (App Router)
- TypeScript for type safety
- Tailwind CSS for responsive styling
- Shadcn/ui components
- Lucide React icons
- PWA manifest support

## Setup Instructions

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)
- A WhatsApp Business Account (for production)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site

### Environment Variables

No environment variables are required for the basic setup. However, for production, update:

1. **WhatsApp Number**: Replace all instances of `https://wa.me/234` with your actual WhatsApp business number in:
   - `components/Navigation.tsx`
   - `components/Footer.tsx`
   - `app/page.tsx`
   - `app/contact/page.tsx`

2. **Domain**: Update the domain in:
   - `app/layout.tsx` metadata
   - `lib/seo.ts`
   - `public/sitemap.xml`

3. **Google Analytics** (Optional): Add to `app/layout.tsx`

### Customization

#### Update Brand Colors

The site uses a gold and black color scheme. To customize:

1. Update color values in `app/globals.css`:
   - Primary (gold): `--primary: oklch(0.68 0.18 70.5);`
   - Background: `--background: oklch(0.15 0 0);`

2. Update logo in:
   - `components/Navigation.tsx`
   - `components/Footer.tsx`
   - `public/manifest.json`

#### Update Business Information

Update your details in:
- `app/layout.tsx` - Company metadata
- `lib/seo.ts` - SEO configuration
- `components/Footer.tsx` - Contact information
- `public/manifest.json` - PWA metadata

#### Update Products

Edit the products list in `app/products/page.tsx`:
- Add/remove product categories
- Update maintenance products
- Modify product descriptions

## Building for Production

1. Build the project:
```bash
pnpm build
```

2. Deploy to Vercel:
```bash
pnpm vercel deploy
```

Or push to GitHub and connect to Vercel for auto-deployment.

## Performance Optimization

- Image optimization through Vercel Blob
- CSS and JavaScript code splitting
- Efficient animations using CSS transforms
- Semantic HTML for better SEO
- Mobile-first responsive design

## Mobile Optimization

- Touch-friendly navigation buttons
- Optimized for small screens
- Fast loading times
- WhatsApp quick contact buttons

## Monitoring

For production monitoring:
- Add Google Analytics
- Set up error tracking (Sentry)
- Monitor Core Web Vitals in Google Search Console

## Support & Maintenance

### Adding New Pages

1. Create a new folder in `app/`
2. Add `page.tsx` with proper metadata
3. Update navigation links in `components/Navigation.tsx`
4. Update sitemap in `public/sitemap.xml`

### Updating Content

All content is managed directly in the components and pages. No database is required for the current setup.

### Regular Updates

- Review and update business information quarterly
- Refresh product listings seasonally
- Update testimonials and success stories
- Monitor and respond to contact form submissions

## Technical Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## File Structure

```
/app
  /api           - API routes
  /about         - About page
  /contact       - Contact page
  /products      - Products page
  /layout.tsx    - Root layout
  /page.tsx      - Home page
  /globals.css   - Global styles

/components
  /Navigation.tsx - Navigation bar
  /Footer.tsx     - Footer
  /Breadcrumb.tsx - Breadcrumb navigation

/lib
  /seo.ts        - SEO configuration

/public
  /manifest.json - PWA manifest
  /sitemap.xml   - XML sitemap
  /robots.txt    - Robots file
```

## License

All rights reserved - Ozidi Zuba in Kubwa © 2024

## Contact

For website inquiries or support:
- WhatsApp: [Your WhatsApp Link]
- Location: Kubwa, Abuja, Nigeria
