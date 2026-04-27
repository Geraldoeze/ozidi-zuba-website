# Deployment Checklist - Ozidi Zuba in Kubwa Website

## Pre-Deployment Setup

Before deploying to production, complete these tasks:

### 1. Contact Information
- [ ] Replace `https://wa.me/234...` with actual WhatsApp number in:
  - [ ] `components/Navigation.tsx`
  - [ ] `components/Footer.tsx`
  - [ ] `app/page.tsx`
  - [ ] `app/contact/page.tsx`
  - [ ] `app/gallery/page.tsx`
  
- [ ] Update phone number in:
  - [ ] `app/contact/page.tsx`
  - [ ] `components/Footer.tsx`
  - [ ] `app/layout.tsx` (schema)

### 2. Domain Configuration
- [ ] Update domain from `zubainkubwa.com` to your actual domain in:
  - [ ] `app/layout.tsx` (OpenGraph URL, canonical, schema)
  - [ ] `public/sitemap.xml` (all URLs)
  - [ ] `public/robots.txt` (sitemap URL)
  - [ ] `lib/seo.ts` (if used)
  - [ ] `THEME_GALLERY_SETUP.md` (documentation)

### 3. Gallery Content
- [ ] Replace placeholder gallery images with real product photos
  - [ ] Update image URLs in `app/gallery/page.tsx`
  - [ ] Ensure images are 500x500px or similar (responsive)
  
- [ ] Update social media links:
  - [ ] Replace Instagram links with actual post URLs
  - [ ] Replace Facebook links with actual post URLs
  - [ ] Test all social media links work

- [ ] Update gallery item descriptions:
  - [ ] Customize based on actual products
  - [ ] Add accurate likes/comments counts (optional)
  - [ ] Verify platform assignments (Instagram vs Facebook)

### 4. Business Information
- [ ] Update company information in:
  - [ ] `app/layout.tsx` - Schema address
  - [ ] `app/contact/page.tsx` - Business hours, address
  - [ ] `app/about/page.tsx` - Mission, values (if needed)
  - [ ] `public/manifest.json` - Company name

- [ ] Update location details:
  - [ ] Street address (currently: Kubwa)
  - [ ] City (Abuja)
  - [ ] Postal code
  - [ ] Email address

### 5. SEO & Analytics
- [ ] Add Google Search Console verification:
  - [ ] Get verification code from Google Search Console
  - [ ] Add to `app/layout.tsx` meta tag

- [ ] Add Google Analytics (if needed):
  - [ ] Add tracking code to `app/layout.tsx`
  
- [ ] Update robots.txt:
  - [ ] Verify sitemap URL is correct
  - [ ] Add any pages to disallow if needed

- [ ] Verify sitemap.xml:
  - [ ] All URLs point to correct domain
  - [ ] All pages are listed
  - [ ] Priorities are appropriate

### 6. Branding Assets
- [ ] Logo
  - [ ] Verify logo URL is correct
  - [ ] Update if needed in:
    - [ ] `components/Navigation.tsx`
    - [ ] `components/Footer.tsx`
    - [ ] `app/layout.tsx` (Schema image)
    - [ ] `public/manifest.json`
  
- [ ] Favicon
  - [ ] Add to `public/` folder if needed
  - [ ] Reference in `app/layout.tsx` if custom

- [ ] Apple icon
  - [ ] Update in `public/manifest.json`
  - [ ] Update link in `app/layout.tsx`

### 7. Social Media
- [ ] Update social media links:
  - [ ] Instagram: `https://www.instagram.com/zuba_in_kubwa/`
  - [ ] Facebook: `https://www.facebook.com/zubainkubwa/`
  - Verify these are still correct and not suspended

- [ ] Update in:
  - [ ] `components/Footer.tsx`
  - [ ] `app/layout.tsx` (schema)
  - [ ] `public/manifest.json`
  - [ ] All page metadata

### 8. Testing Before Deployment

#### Functionality Tests
- [ ] Theme switcher works correctly
  - [ ] Light mode looks good
  - [ ] Dark mode looks good
  - [ ] System mode works
  - [ ] Theme persists across pages
  - [ ] Theme persists after refresh

- [ ] Gallery page loads
  - [ ] All 8 items display
  - [ ] Responsive on mobile
  - [ ] Social media buttons work
  - [ ] View Post links are correct

- [ ] Navigation works
  - [ ] All menu items link correctly
  - [ ] Gallery link appears
  - [ ] Theme switcher appears
  - [ ] Mobile menu works

- [ ] Forms work
  - [ ] Contact form submits
  - [ ] WhatsApp links work
  - [ ] Error handling works

#### Performance Tests
- [ ] Mobile viewport renders correctly
- [ ] Desktop viewport renders correctly
- [ ] Images load properly
- [ ] Page load time is acceptable
- [ ] No console errors

#### SEO Tests
- [ ] Sitemap.xml loads
- [ ] Robots.txt loads
- [ ] Breadcrumbs display
- [ ] Meta tags are present
- [ ] Schema markup is valid
  - Test with: https://schema.org/validate

#### Browser Compatibility
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### 9. Vercel Deployment
- [ ] Create Vercel account if needed
- [ ] Connect GitHub repository (if using GitHub)
- [ ] Configure environment variables:
  - [ ] Add any API keys needed
  - [ ] No sensitive data in code

- [ ] Deploy to production:
  - [ ] Run production build locally: `pnpm build`
  - [ ] Verify build succeeds
  - [ ] Push to Vercel
  - [ ] Monitor deployment

### 10. Post-Deployment Verification
- [ ] Visit website and verify all pages work
- [ ] Test theme switching on live site
- [ ] Verify social media links work
- [ ] Check that contact forms work
- [ ] Verify WhatsApp integration works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify analytics tracking works (if added)
- [ ] Submit sitemap to Google Search Console
- [ ] Request URL crawl for homepage

## Customization Options

### Color Changes
To change from gold to another primary color:

1. Edit `app/globals.css`
2. Change `--primary: oklch(0.68 0.18 70.5);` in both `:root` and `.dark`
3. Adjust the oklch values to your desired color
4. Test in both light and dark modes

### Font Changes
To use different fonts:

1. Edit `app/layout.tsx`
2. Import different font from Google Fonts
3. Update `_geist` and `_geistMono` variables
4. Update `@theme` section in `app/globals.css`
5. Test font rendering

### Layout Changes
To modify page layouts:

1. Edit individual page files in `app/[page]/page.tsx`
2. Adjust grid columns, spacing, etc.
3. Update responsive breakpoints as needed
4. Test on mobile and desktop

## Maintenance Tasks

### Regular Updates
- [ ] Check for Next.js updates monthly
- [ ] Update dependencies: `pnpm update`
- [ ] Monitor console for warnings
- [ ] Test critical features monthly

### Content Updates
- [ ] Update gallery items as new products arrive
- [ ] Refresh product photos regularly
- [ ] Update testimonials (if added later)
- [ ] Maintain blog posts (if added later)

### Performance Monitoring
- [ ] Monitor Core Web Vitals
- [ ] Check Google Analytics
- [ ] Monitor search rankings
- [ ] Track user behavior

### SEO Maintenance
- [ ] Check Search Console monthly
- [ ] Monitor ranking positions
- [ ] Update content for trending keywords
- [ ] Build backlinks naturally

## Rollback Plan

If issues occur after deployment:

1. **Immediate action**:
   - Check Vercel deployment logs
   - Review recent code changes
   - Check browser console for errors

2. **Rollback to previous version**:
   - Go to Vercel dashboard
   - Click "Deployments"
   - Select previous stable deployment
   - Click "Redeploy"

3. **Local testing**:
   - `git revert [commit-hash]`
   - Run `pnpm dev` and test
   - Push changes when verified

## Documentation

Complete documentation files included:
- `README.md` - Main setup guide
- `THEME_GALLERY_SETUP.md` - Detailed feature guide
- `FEATURES_ADDED.md` - New features overview
- `DEPLOYMENT_CHECKLIST.md` - This file

## Support

For issues or questions:
1. Check the documentation files above
2. Review inline code comments
3. Check Next.js documentation
4. Review TypeScript error messages
5. Use browser DevTools console for debugging

## Final Sign-Off

Before going live, confirm:

- [ ] All TODO items above completed
- [ ] Website tested thoroughly
- [ ] All links verified
- [ ] Analytics configured
- [ ] Team aware of deployment
- [ ] Backup/rollback plan confirmed
- [ ] Client informed of launch
- [ ] Monitoring tools set up

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Version**: 1.0
**Status**: Ready for Production ✓
