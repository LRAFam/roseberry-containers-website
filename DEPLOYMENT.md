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

Create a `.env` file in the project root (see `.env.example` for a template). The following variables are required:

| Variable | Description |
|---|---|
| `NUXT_PUBLIC_API_BASE` | URL of the backend API (e.g. `https://api.roseberrycontainers.co.uk`) |
| `NUXT_PUBLIC_CLIENT_ID` | Client UUID from the Roseberry Assistant platform |
| `NUXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | Trustpilot Business Unit ID for the TrustBox widget |
| `NUXT_PUBLIC_TRUSTPILOT_DOMAIN` | Your Trustpilot domain (default: `roseberrycontainers.co.uk`) |

All variables are public (client-side safe). Do **not** commit `.env` — it is git-ignored.

## Pre-Deployment Checklist

- [ ] Set all required environment variables on your hosting platform
- [ ] Confirm `NUXT_PUBLIC_API_BASE` points to the production backend (`https://roseberry-assistant-production.up.railway.app` or your custom API domain)
- [ ] Confirm `NUXT_PUBLIC_CLIENT_ID` is set to the Roseberry client UUID from the assistant platform
- [ ] Confirm SMTP is configured on the backend API (see `roseberry-assistant/PRODUCTION_SETUP.md`) — contact form emails will not arrive without it
- [ ] Verify chatbot (James) responds correctly via the production API
- [ ] Test all pages and links
- [ ] Test mobile responsiveness
- [ ] Add Google Analytics / tracking (optional)
- [ ] Set up custom domain name
- [ ] Submit sitemap to Google Search Console (`/sitemap.xml`)

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

- Consider using the Nuxt Image module for automatic image optimisation
- Enable caching headers in production (already partially configured via `routeRules` in `nuxt.config.ts`)
- Use a CDN for static assets

## Support

For issues or questions about the website code, refer to the main README.md file.
