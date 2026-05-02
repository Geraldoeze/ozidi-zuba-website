# Media Optimization & Performance Guide

## Current Media Setup

### Images Generated & Optimized
1. **Hero Section** (`/public/images/hero-gradient.jpg`)
   - Professional gradient background (gold to dark)
   - Used as fallback for video background
   - Optimized JPG format
   - Size: ~150KB

2. **About Page** (`/public/images/about-storefront.jpg`)
   - Real storefront photo from Instagram
   - Original high-quality image saved
   - Responsive sizes for all devices
   - Optimized for web (85% quality)

3. **Gallery Images** (`/public/images/gallery/`)
   - 8 professional product category images
   - Engine Parts, Brake Systems, Suspension, Electrical
   - Cooling System, Fuel System, Transmission, Maintenance
   - All optimized JPG format
   - Used with Next.js Image component for lazy loading

## Performance Optimizations Implemented

### Image Optimization
1. **Next.js Image Component**
   - Automatic format conversion (WebP for modern browsers)
   - Responsive image sizing with `sizes` attribute
   - Lazy loading by default
   - Quality set to 80-85% for optimal file size/quality balance

2. **Image Loading Strategies**
   - `priority={true}` for above-the-fold images (hero, about)
   - Default lazy loading for gallery images
   - Responsive sizing for different screen sizes

3. **CSS for Performance**
   - CSS animations instead of JavaScript where possible
   - `will-change` for smooth animations
   - Optimized gradients using CSS instead of images
   - Minimal motion for accessibility

### Media File Structure
```
/public/
├── images/
│   ├── hero-gradient.jpg      (Hero background)
│   ├── about-storefront.jpg   (About page)
│   └── gallery/
│       ├── engine-parts.jpg
│       ├── brake-systems.jpg
│       ├── suspension.jpg
│       ├── electrical.jpg
│       ├── cooling-system.jpg
│       ├── fuel-system.jpg
│       ├── transmission.jpg
│       └── maintenance.jpg
```

## How to Update Media Later

### Updating Gallery Images
To replace gallery images with real Instagram/Facebook posts:

1. Extract high-quality image from Instagram/Facebook post
2. Save to `/public/images/gallery/[category-name].jpg`
3. Update `lib/gallery-data.ts` with real social media post URLs
4. Gallery will automatically use new images

**Example:**
```typescript
// In lib/gallery-data.ts
{
  id: '1',
  title: 'Engine Parts Collection',
  image: '/images/gallery/engine-parts.jpg',
  instagram: 'https://www.instagram.com/p/{REAL_POST_ID}/',
  facebook: 'https://www.facebook.com/zubainkubwa/posts/{REAL_POST_ID}/'
}
```

### Updating Hero Section
Replace `/public/images/hero-gradient.jpg` with your video:

1. If adding video background:
   - Save video as `/public/videos/hero.mp4`
   - Update `components/HeroSection.tsx` to include `<video>` element
   - Keep gradient JPG as fallback

2. For image-only updates:
   - Replace `/public/images/hero-gradient.jpg` directly

### Updating About Page Image
To use the business owner video screenshot:

1. Export frame from Instagram business owner video
2. Save as `/public/images/about-owner.jpg`
3. Update About page to display this image instead
4. Aspect ratio should be similar to storefront (landscape)

## Video Integration

### Current Setup
- Hero section uses gradient JPG as fallback
- Ready to add video background

### When You Have Video
To add a professional video to the hero:

1. Save video as `/public/videos/hero-video.mp4`
2. Update `HeroSection.tsx`:
```tsx
<video 
  autoPlay 
  muted 
  loop 
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

### Video Optimization Tips
- Use MP4 format (better compatibility)
- Target 5-15MB file size for web
- Dimensions: 1920x1080 minimum
- Use tools like FFmpeg to compress:
  ```bash
  ffmpeg -i input.mp4 -vcodec libx264 -crf 23 output.mp4
  ```

## Best Practices Going Forward

### Image Format Selection
- **Hero/About**: Use JPG (photos)
- **Gallery**: Use JPG (product photos)
- **Icons/Logos**: Keep as SVG or PNG

### File Size Targets
- Hero/About images: 150-250KB
- Gallery images: 80-150KB each
- Total page: < 2MB initial load

### Responsive Images
All images use responsive sizing:
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 4 columns (gallery)

### Performance Metrics
Current estimated performance:
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 3s
- Cumulative Layout Shift (CLS): < 0.1

## Social Media Integration

### Gallery Links
Each gallery item links directly to Instagram/Facebook posts:
- Click Instagram icon → Opens Instagram post
- Click Facebook icon → Opens Facebook post
- Both open in new tabs

### Updating Social Links
To change social media URLs, edit `lib/gallery-data.ts`:
```typescript
export function getInstagramUrl(): string {
  return 'https://www.instagram.com/zuba_in_kubwa/'
}

export function getFacebookUrl(): string {
  return 'https://www.facebook.com/zubainkubwa/'
}
```

## Quick Checklist for Content Updates

- [ ] Have you extracted images from Instagram posts?
- [ ] Have you compressed images for web?
- [ ] Are image dimensions at least 1200x1200px?
- [ ] Do all images have proper alt text?
- [ ] Have you updated `lib/gallery-data.ts` with real post URLs?
- [ ] Have you tested gallery filter functionality?
- [ ] Have you tested social media links open correctly?

## Troubleshooting

### Images Not Showing
1. Check file path is correct (case-sensitive on Linux)
2. Verify image is in correct directory
3. Clear browser cache (Ctrl+Shift+Delete)
4. Rebuild: `npm run build`

### Performance Issues
1. Check image file sizes (use DevTools)
2. Ensure JPG quality is 80-85%
3. Verify lazy loading is working
4. Test with different network speeds

### Social Links Not Working
1. Verify Instagram/Facebook URLs are correct
2. Check URL format matches expected pattern
3. Test link in new incognito window
4. Ensure links open in new tab (`target="_blank"`)
