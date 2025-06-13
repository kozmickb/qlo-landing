# Qlo Marketing Site

This is the standalone marketing landing page for Qlo, designed to be deployed to `https://qlo.app`.

## Features

- Professional marketing landing page with strategic business intelligence showcase
- Problem-solution narrative demonstrating queue management benefits
- Mobile-responsive design with optimized spacing
- Populated traffic analytics showing customer loss patterns
- Direct links to the core Qlo application at `web.qlo.app`

## Deployment Instructions

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deployment to qlo.app

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider (Netlify, Vercel, etc.)

3. **Configure domain:** Point `qlo.app` to your deployed marketing site

4. **Environment setup:** No environment variables required for marketing site

## Architecture

- **Marketing Site** (`qlo.app`): Static landing page showcasing Qlo's value proposition
- **Core Application** (`web.qlo.app`): Full Qlo application with business management features

## Navigation Flow

All "Get Started", "Start Free Trial", and "Demo" buttons redirect to `https://web.qlo.app/business-selection`

## File Structure

```
marketing-site/
├── src/
│   ├── QloLandingPage.tsx    # Main landing page component
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind styles
├── public/                   # Static assets
├── dist/                     # Build output
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── server.js                 # Production server
```

## Key Links

- Marketing site redirects all CTAs to: `https://web.qlo.app/business-selection`
- Sign In button links to: `https://web.qlo.app/auth/login`
- Demo and navigation links point to: `https://web.qlo.app`