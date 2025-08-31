# 🚀 Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub repository with your React project
- Cloudflare account (free tier available)

## Step-by-Step Deployment

### 1. Access Cloudflare Dashboard
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign in to your Cloudflare account
3. Click on "Pages" in the left sidebar

### 2. Create New Project
1. Click "Create a project"
2. Select "Connect to Git"
3. Choose your GitHub account
4. Select your repository: `akibkamani/abnerlighting.com`
5. Select the branch: `nw-version`

### 3. Configure Build Settings
Use these exact settings:

**Project name:** `abnerlighting-website` (or your preferred name)

**Build settings:**
- **Framework preset:** `Vite`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave empty)

**Environment variables:** (none required)

### 4. Deploy
1. Click "Save and Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be available at: `https://your-project-name.pages.dev`

## Configuration Files Added

### `wrangler.toml`
- Build configuration for Cloudflare Pages
- Security headers and redirects

### `public/_redirects`
- Handles React Router client-side routing
- Ensures all routes work properly

### `public/_headers`
- Security headers for better protection
- SEO and performance optimizations

## Post-Deployment

### 1. Custom Domain (Optional)
1. In your Cloudflare Pages project
2. Go to "Custom domains"
3. Add your domain (e.g., `abnerlighting.com`)
4. Follow DNS configuration instructions

### 2. Environment Variables (If Needed)
If you need environment variables later:
1. Go to your project settings
2. Navigate to "Environment variables"
3. Add any required variables

### 3. Analytics (Optional)
1. Enable Cloudflare Web Analytics
2. Get insights into your site performance

## Troubleshooting

### Build Failures
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check build logs in Cloudflare dashboard

### Routing Issues
- Verify `public/_redirects` file is present
- Ensure React Router is configured correctly

### Performance
- Images are optimized via ImageKit
- CSS and JS are minified automatically
- CDN is provided by Cloudflare

## Benefits of Cloudflare Pages

✅ **Free Tier:** Unlimited sites and builds  
✅ **Global CDN:** Fast loading worldwide  
✅ **Automatic HTTPS:** SSL certificates included  
✅ **Git Integration:** Automatic deployments  
✅ **Custom Domains:** Easy domain management  
✅ **Analytics:** Built-in performance monitoring  

## Support
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
