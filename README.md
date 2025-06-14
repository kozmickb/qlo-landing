# Qlo Marketing Landing Page - Netlify Deployment

This is a standalone React application for the Qlo marketing landing page, optimized for Netlify deployment.

## Features

- **Modern Design**: Dark theme with gradient animations using Framer Motion
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Vite for fast loading
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Analytics Showcase**: Interactive retention analytics feature section

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

### Netlify Deployment

#### Option 1: Drag & Drop (Simplest)
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify's deploy interface

#### Option 2: Git Integration (Recommended)
1. Push this folder to a GitHub repository
2. Connect the repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher

#### Option 3: Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=dist`

## Project Structure

```
├── src/
│   ├── components/ui/     # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── QloMarketingLanding.tsx  # Main landing page
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## Key Features Highlighted

### Customer Retention Analytics
- **94% retention rate** showcase with mock Elite Fitness Club data
- Interactive dashboard preview
- Real ROI metrics: 34% churn reduction, 43% lifetime value increase

### Business Benefits
- High-value customer identification
- Proactive churn prevention
- Growing loyalty tracking

### Call-to-Action
- Direct links to live app at web.qlo.app
- Professional demo booking options

## Customization

To customize for your brand:
1. Update colors in `tailwind.config.js`
2. Modify content in `QloMarketingLanding.tsx`
3. Replace logo and favicon in `public/` folder
4. Update meta tags in `index.html`

## Performance Notes

- Uses Google Fonts for Plus Jakarta Sans typography
- Implements lazy loading for images
- Optimized bundle size with tree shaking
- CSS purging for minimal file sizes

## Support

For deployment issues or customization needs, refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)