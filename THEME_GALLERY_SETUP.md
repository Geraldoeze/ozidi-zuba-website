# Theme System & Gallery Implementation Guide

## Overview

Two major enhancements have been added to the Ozidi Zuba in Kubwa website:

1. **Dynamic Theme System** - Light/Dark mode with system preference detection
2. **Gallery Page** - Product showcase with social media links

## Theme System Details

### Components Added

#### 1. Theme Provider (`app/providers.tsx`)
- Context-based theme management
- Automatic system preference detection
- localStorage persistence
- Real-time theme switching

#### 2. Theme Switcher (`components/ThemeSwitcher.tsx`)
- UI component with dropdown menu
- Located in navigation bar
- Three options: Light, Dark, System
- Smooth transitions between themes

### Features

- **System Detection**: Automatically adapts to user's OS theme preference
- **Persistent Storage**: User's theme choice is saved in localStorage
- **Manual Control**: Users can override system preference anytime
- **Smooth Transitions**: CSS transitions for color changes
- **Complete Coverage**: Both light and dark color schemes implemented

### How It Works

1. **Light Mode (Default)**
   - Background: White/Light Gray
   - Text: Dark
   - Cards: Light backgrounds
   - Primary Color: Gold accent

2. **Dark Mode**
   - Background: Dark Gray/Black
   - Text: Light
   - Cards: Dark backgrounds
   - Primary Color: Gold accent (enhanced visibility)

3. **System Mode**
   - Follows user's OS preference
   - Automatically updates when OS theme changes
   - Provides best user experience

### CSS Configuration

Updated `app/globals.css` with:
- Light mode colors in `:root` selector
- Dark mode colors in `.dark` selector
- Both themes share the same primary gold color (#c79a5d)
- Smooth transitions via CSS variables

## Gallery Page Details

### Files Added

1. **Gallery Page** (`app/gallery/page.tsx`)
   - Responsive grid layout (1-3 columns)
   - 8 product showcase items
   - Direct links to Instagram and Facebook
   - SEO optimized with proper metadata

2. **Gallery Card Component** (`components/GalleryCard.tsx`)
   - Individual product cards
   - Hover effects with overlay
   - Platform badges (Instagram/Facebook)
   - Engagement stats (likes/comments)
   - Direct "View Post" buttons

### Features

- **Social Media Integration**
  - Direct links to Instagram posts: https://www.instagram.com/zuba_in_kubwa/
  - Direct links to Facebook posts: https://www.facebook.com/zubainkubwa/
  - Platform-specific gradient badges

- **Product Showcase**
  - Motor spare parts images
  - Category-based organization
  - Engaging descriptions
  - Engagement metrics display

- **Mobile Responsive**
  - 1 column on mobile
  - 2 columns on tablet
  - 3 columns on desktop
  - Touch-friendly interactions

- **SEO Optimized**
  - Proper metadata tags
  - Breadcrumb navigation
  - Schema markup
  - Social sharing ready

### Gallery Items Included

1. Engine Parts
2. Brake System Components
3. Suspension & Steering
4. Electrical Components
5. Cooling System Parts
6. Fuel System Components
7. Transmission & Drive
8. Maintenance Services

## Navigation Updates

Updated `components/Navigation.tsx` to include:

1. **Gallery Link** - Added "Gallery" to main navigation menu
2. **Theme Switcher** - Added theme toggle button next to WhatsApp CTA
3. **Responsive Design** - Theme switcher adapts to screen size

## SEO Improvements

1. **Updated Sitemap** - Added gallery page to `public/sitemap.xml`
2. **Enhanced Schema** - Added Organization schema in layout
3. **Metadata** - Gallery page has proper title and description
4. **Breadcrumbs** - All pages including gallery have breadcrumb navigation

## Color Scheme Reference

### Light Mode
```
Background: oklch(0.98 0 0) - Almost white
Foreground: oklch(0.15 0 0) - Dark text
Card: oklch(0.95 0 0) - Light card backgrounds
Primary: oklch(0.68 0.18 70.5) - Gold color
Muted: oklch(0.9 0 0) - Light gray
```

### Dark Mode
```
Background: oklch(0.15 0 0) - Dark background
Foreground: oklch(0.95 0 0) - Light text
Card: oklch(0.22 0 0) - Dark card backgrounds
Primary: oklch(0.68 0.18 70.5) - Gold color (same)
Muted: oklch(0.4 0 0) - Dark gray
```

## Usage Guide for Users

### Switching Themes
1. Look for the moon/sun icon in the navigation bar (top right)
2. Click to open theme dropdown
3. Select: Light, Dark, or System
4. Theme changes immediately and is saved

### Gallery Page
1. Navigate to "Gallery" in main menu
2. Browse product showcase in grid format
3. Click "View Post" on any product to see full post on social media
4. Follow the social media buttons at bottom to see more updates

## Customization Guide

### Change Primary Color

If you want to change from gold to another color, update in `app/globals.css`:

```css
:root {
  --primary: oklch(0.68 0.18 70.5); /* Change this value */
}

.dark {
  --primary: oklch(0.68 0.18 70.5); /* Change this value */
}
```

### Add More Gallery Items

Edit `app/gallery/page.tsx` and add items to the `galleryItems` array:

```typescript
{
  id: 9,
  image: 'image-url',
  title: 'Product Name',
  description: 'Product description',
  platform: 'instagram' or 'facebook',
  link: 'https://...',
  likes: 123,
  comments: 45,
}
```

### Update Social Media Links

Replace Instagram and Facebook links in:
- `components/Navigation.tsx` - Theme Switcher component area
- `app/gallery/page.tsx` - Social Media CTA section
- `app/layout.tsx` - Schema metadata

## Browser Compatibility

- Light/Dark mode: All modern browsers (Chrome, Firefox, Safari, Edge)
- System preference detection: All modern browsers
- Gallery: All modern browsers with CSS Grid support
- Theme persistence: Requires localStorage support

## Performance Notes

- Theme switching is instant (no page reload)
- Colors are CSS variables (fast switching)
- Gallery images use optimized img tags
- Minimal JavaScript for theme management

## Future Enhancements

Potential improvements:
1. Fetch real gallery items from Instagram/Facebook API
2. Add image lazy loading for gallery
3. Create separate pages for each product category
4. Add theme transition animations
5. Implement gallery lightbox/modal view
6. Add search/filter functionality to gallery

## Troubleshooting

### Theme not persisting
- Check if localStorage is enabled
- Clear browser cache and try again
- Check browser console for errors

### Gallery images not loading
- Verify image URLs are correct
- Check internet connection
- Verify CORS if hosting externally

### Theme not matching system preference
- Check OS theme setting
- Refresh the page
- Clear localStorage and try "System" mode again
