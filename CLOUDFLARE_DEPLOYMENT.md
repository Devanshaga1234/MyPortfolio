# Cloudflare Workers Deployment Guide

## Devansh Agarwal Portfolio - Cloudflare Workers Setup

### Prerequisites
- Node.js installed
- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)

### Deployment Steps

1. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Workers**
   ```bash
   npm run deploy:workers
   ```

### Available Scripts

- `npm run deploy:workers` - Deploy to Cloudflare Workers
- `npm run deploy:workers:prod` - Deploy with production settings
- `npm run deploy` - Deploy to GitHub Pages (alternative)

### Project Configuration

- **Project Name**: `devansh-agarwal-portfolio`
- **Worker File**: `worker.js`
- **Build Directory**: `./build`
- **Compatibility Date**: `2024-01-15`

### Custom Domain (Optional)

To use a custom domain:
1. Go to Cloudflare Dashboard
2. Navigate to Workers & Pages
3. Select your project
4. Go to Custom Domains
5. Add your domain

### Features

- ✅ React SPA with client-side routing
- ✅ Static file serving
- ✅ 404 fallback to index.html
- ✅ Global CDN distribution
- ✅ Edge computing capabilities

### URL

Your portfolio will be available at:
`https://devansh-agarwal-portfolio.pages.dev`
