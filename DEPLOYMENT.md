# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository at [vercel.com](https://vercel.com)

### 2. Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

Or drag and drop the `.output/public` folder at [netlify.com](https://netlify.com)

### 3. Static Hosting (Cloudflare Pages, GitHub Pages, etc.)

```bash
# Generate static site
npm run generate

# Upload the .output/public folder to your hosting provider
```

## Environment Variables

Currently, no environment variables are needed. When you add backend functionality (e.g., contact form API), create a `.env` file:

```env
# Example
NUXT_PUBLIC_API_URL=https://api.example.com
CONTACT_FORM_EMAIL=your-email@example.com
```

## Pre-Deployment Checklist

- [ ] Update business information in components
- [ ] Replace placeholder images with real photos
- [ ] Update Google Maps embed with correct location
- [ ] Connect contact form to email/backend service
- [ ] Update meta tags and SEO information
- [ ] Test all pages and links
- [ ] Test mobile responsiveness
- [ ] Add Google Analytics (optional)
- [ ] Set up domain name

## Post-Deployment

1. **Test the live site** on multiple devices
2. **Run Lighthouse audit** in Chrome DevTools
3. **Submit sitemap** to Google Search Console
4. **Set up SSL certificate** (usually automatic with modern hosts)
5. **Monitor contact form** submissions

## Custom Domain

Most hosting providers offer simple domain configuration:

1. Add your domain in the hosting dashboard
2. Update DNS records at your domain registrar
3. Enable SSL (usually automatic)

## Performance Tips

- Images are currently using Unsplash placeholders - replace with optimized local images
- Consider using Nuxt Image module for automatic image optimization
- Enable caching headers in production
- Use a CDN for static assets

## Support

For issues or questions about the website code, refer to the main README.md file.
