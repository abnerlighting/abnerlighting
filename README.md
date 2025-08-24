# Abner Lighting Website

A modern, responsive website for Abner Lighting built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🚀 Deployment on Cloudflare Pages

### Prerequisites
- A Cloudflare account
- Git repository with your code

### Deployment Steps

1. **Push your code to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/` (leave empty)
   - Click "Save and Deploy"

### Build Configuration
- **Framework preset**: None
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**: None required

### Local Development
```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Watch CSS changes
npm run dev:css

# Preview build
npm run preview
```

## 📁 Project Structure
```
abnerlighting.com/
├── dist/           # Build output (deployed to Cloudflare)
├── public/         # Static assets
│   └── index.html  # Main HTML file
├── src/
│   └── styles.css  # Tailwind CSS source
├── package.json    # Dependencies and scripts
└── wrangler.toml   # Cloudflare configuration
```

## 🛠️ Technologies Used
- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vanilla JavaScript** - Interactive features
- **Cloudflare Pages** - Static site hosting

## 📝 Features
- Responsive design
- Hero carousel with auto-advance
- Mobile-friendly navigation drawer
- Smooth scroll behavior
- Optimized images via ImageKit
- SEO-friendly structure

## 🔧 Customization
- Update content in `public/index.html`
- Modify styles in `src/styles.css`
- Add images to ImageKit with the base path: `https://ik.imagekit.io/abnerlighting/`

## 📞 Support
For deployment issues, refer to [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).
