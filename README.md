# Roseberry Self Storage Website

Modern, responsive website for Roseberry Self Storage built with Nuxt 3, Vue 3, TypeScript, and TailwindCSS.

## 🚀 Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- 🎨 TailwindCSS for styling
- 🔍 SEO optimized with meta tags
- 📧 Contact form with validation
- 🗺️ Integrated Google Maps
- ⚡ Fast performance with Nuxt 3
- 🔒 Type-safe with TypeScript

## 📦 Tech Stack

- **Framework**: Nuxt 3
- **Frontend**: Vue 3 (Composition API)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Icons**: Heroicons

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

### Generate Static Site

```bash
# Generate static site
npm run generate
```

## 📁 Project Structure

```
├── assets/
│   └── css/          # Global styles
├── components/       # Vue components
│   ├── Header.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   ├── FeaturesSection.vue
│   └── ContactSection.vue
├── pages/            # Route pages
│   ├── index.vue
│   ├── container-sales.vue
│   └── contact.vue
├── public/           # Static assets
└── nuxt.config.ts    # Nuxt configuration
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js` and `assets/css/main.css`.

### Content

- Business information: Update in `nuxt.config.ts` and component files
- Images: Replace placeholder images in components
- Contact form: Currently frontend only - connect to your backend API in `ContactSection.vue`

## 📝 Business Information

- **Address**: Waverley Rd, Middlesbrough, TS1, UK
- **Email**: roseberyselfstorage@hotmail.com
- **Phone**: 07793 251550 / 07873 082655

## 🌐 Pages

- **Home** (`/`) - Hero, features, and contact section
- **Container Sales** (`/container-sales`) - Information about purchasing containers
- **Contact** (`/contact`) - Full contact page with form and map

## 📄 License

© 2026 Roseberry Self Storage. All rights reserved.
