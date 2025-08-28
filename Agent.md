# Agent Guide

This repo is a plain HTML + Tailwind CSS (v4) static site. It contains a single homepage with a transparent navbar, left-side drawer, full-viewport hero carousel, content sections, and a footer.

## Tech stack
- HTML (no framework)
- Tailwind CSS v4 via `@tailwindcss/cli`

## Google Fonts
- Primary font: Jost (Regular 400)
- Loaded in `public/index.html` head:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap" rel="stylesheet">
  ```
- Applied globally in `src/styles.css`:
  ```css
  body { font-family: "Jost", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
  h1, h2, h3 { font-weight: 400; }
  h1 { font-size: 48px; line-height: 1.2; }
  h2 { font-size: 36px; line-height: 1.25; }
  h3 { font-size: 32px; line-height: 1.3; }
  p  { font-size: 21px; line-height: 1.7; }
  .subtitle { font-size: 16px; line-height: 1.5; font-weight: 400; }
  ```
- Usage tips:
  - Avoid Tailwind `text-*` utilities on headings/paragraphs unless you want to override the base scale.
  - Use `.subtitle` for smaller supporting text (e.g., navbar brand or secondary labels).

## Project layout
- `public/index.html` — homepage markup
- `src/styles.css` — Tailwind entry (compiled to `public/styles.css`)
- `package.json` — scripts for building/watching CSS

## Get started
- Build CSS once: `npm run build:css`
- Watch CSS during edits: `npm run dev:css`
- Open `public/index.html` in a browser (or serve `public/` statically).

## Editing the homepage
- Update sections in `public/index.html`.
- Use Tailwind utility classes for layout/styles.
- Put any small custom CSS in `src/styles.css` (it compiles to `public/styles.css`).

## Images (ImageKit)
- Base path: `https://ik.imagekit.io/abnerlighting/`
- Images can be in subdirectories, e.g.: `branding/logo.png` (example URL: `https://ik.imagekit.io/abnerlighting/branding/logo.png`)
- Reference directly in HTML:
  - `<img src="https://ik.imagekit.io/abnerlighting/branding/logo.png" alt="Abner logo" />`
- Background images:
  - `class="[background-image:url('https://ik.imagekit.io/abnerlighting/hero/cover.jpg')] bg-cover bg-center"`

### Recommended ImageKit transforms
Append transforms after the base path using `tr:`. Common examples:
- Width/height and cover crop:
  - `.../path/file.jpg?tr=w-1200,h-600,fo-auto,cm-extract,rt-0,pr-true`
- Format + quality (automatic):
  - `?tr=f-auto,q-auto`
- Responsive `srcset` example:
  ```html
  <img
    src="https://ik.imagekit.io/abnerlighting/branding/hero.jpg?tr=f-auto,q-auto,w-1200"
    srcset="
      https://ik.imagekit.io/abnerlighting/branding/hero.jpg?tr=f-auto,q-auto,w-480 480w,
      https://ik.imagekit.io/abnerlighting/branding/hero.jpg?tr=f-auto,q-auto,w-768 768w,
      https://ik.imagekit.io/abnerlighting/branding/hero.jpg?tr=f-auto,q-auto,w-1200 1200w,
      https://ik.imagekit.io/abnerlighting/branding/hero.jpg?tr=f-auto,q-auto,w-1600 1600w
    "
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
    alt="Hero visual"
    class="w-full h-auto"
  />
  ```
- Accessibility: always provide meaningful `alt` text.

## Components overview
- Navbar: transparent, logo centered, Contact button on right, hamburger on left.
- Drawer: opens from left; full-screen on mobile, half-width (`md:w-1/2`) on desktop.
- Carousels: pure CSS horizontal scroll with `scroll-snap` (no JS autoplay by default).
- Sections: "We're Abner", "Why choose us", "Explore by collection", "Numbers", "Industry partners", "Testimonials", and footer.

## Conventions
- Keep HTML semantic (use headings in order, meaningful landmarks).
- Reuse Tailwind utilities; avoid inline styles except for special cases (e.g., background-image URLs).
- Prefer ImageKit URLs for all production images. If using placeholders temporarily, replace them before release.

## Release checklist
- [ ] All images use the ImageKit base path with appropriate transforms (`f-auto,q-auto` at minimum).
- [ ] Mobile/desktop layouts verified (nav, drawer, hero, grids, carousels).
- [ ] `npm run build:css` run and `public/styles.css` present.
- [ ] Lighthouse basics checked (performance/accessibility best effort for static page).

## Background Colors
The project uses specific background colors throughout:

- **Gray**: `#f0f0f0` - Used for section backgrounds (e.g., "We've Abner in Numbers", "Testimonials")
- **Black**: `#000000` - Used for footer background
- **Blue**: `#013f88` - Used for "Why Choose Us" section background

## Navigation
The website has a simple 3-page navigation structure:

### Pages:
1. **Home** (`index.html`) - Main landing page with carousel, about section, and product collections
2. **About** (`about.html`) - Company information, timeline, and founder's desk
3. **Projects** (`projects.html`) - Showcase of restaurant, workspace, and jewellery store projects
4. **Concrete Series** (`concrete-series.html`) - Product showcase for concrete lighting fixtures
5. **Stone Series** (`stone-series.html`) - Product showcase for stone lighting fixtures
6. **Architectural Series** (`architectural-series.html`) - Product showcase for technical/architectural lighting fixtures
7. **Blogs** (`blogs.html`) - Blog articles about lighting design, trends, and industry insights

### Navbar Structure:
- **Logo**: Centered, links to homepage
- **Hamburger Menu**: Left side, opens drawer navigation
- **Contact Us Button**: Right side, opens email with pre-filled message
- **Drawer Menu**: Contains 7 navigation links (Home, About, Projects, Concrete Series, Stone Series, Architectural Series, Blogs)

### Navigation Links:
```html
<nav class="grid gap-2 p-4 text-slate-700">
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="index.html">Home</a>
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="about.html">About</a>
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="projects.html">Projects</a>
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="concrete-series.html">Concrete Series</a>
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="stone-series.html">Stone Series</a>
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="architectural-series.html">Architectural Series</a>
  <a class="rounded-lg px-4 py-3 hover:bg-slate-100" href="blogs.html">Blogs</a>
</nav>
```

## Product Series Pages
The website includes three dedicated product series pages, each with:

### Page Structure:
- **Navbar**: Consistent with main pages (Home, About, Projects)
- **Hero Image**: 30% page height banner image
- **Title Section**: Series-specific product title
- **Content Section**: Descriptive text about the series
- **Product Grid**: 3 columns on desktop, 1 column on mobile
- **Footer**: Consistent across all pages

### Product Grid Features:
- **JSON Data**: Product information defined at the top of each page
- **Dynamic Rendering**: Products loaded via JavaScript
- **Responsive Design**: 3 columns desktop, 1 column mobile
- **Hover Effects**: Image scale animation on hover
- **Click Navigation**: Each product card links to individual product page
- **Slugify Function**: Converts product names to URL-friendly slugs

### Series Content:
1. **Concrete Series**: Industrial strength, minimalist design, raw textures
2. **Stone Series**: Natural stone elegance, premium design, timeless appeal
3. **Architectural Series**: Technical precision, superior quality, modern aesthetics

### Product Data Structure:
```javascript
const products = [
  {
    "image": "https://ik.imagekit.io/abnerlighting/series-name/product1.jpg",
    "name": "Product Name",
    "description": "Product description"
  }
];
```

## Blogs Page
The website includes a dedicated blogs page with:

### Page Structure:
- **Navbar**: Consistent with main pages (Home, About, Projects, Blogs)
- **Hero Image**: 30% page height banner image
- **Title Section**: "Our Blogs" heading
- **Content Section**: Descriptive text about the blog content
- **Blog Grid**: 3 columns on desktop, 2 columns on tablet, 1 column on mobile
- **Footer**: Consistent across all pages

### Blog Grid Features:
- **JSON Data**: Blog information loaded from `blogs.json` file
- **Dynamic Rendering**: Blogs loaded via JavaScript fetch API
- **Responsive Design**: 3 columns desktop, 2 columns tablet, 1 column mobile
- **Hover Effects**: Image scale animation on hover
- **Click Navigation**: Each blog card links to individual blog post
- **Blog Metadata**: Displays date and read time for each post

### Blog Data Structure:
```javascript
// blogs.json
{
  "blogs": [
    {
      "image": "https://ik.imagekit.io/abnerlighting/blogs/blog-image.jpg",
      "title": "Blog Title",
      "excerpt": "Blog excerpt text",
      "date": "January 15, 2025",
      "readTime": "5 min read",
      "url": "./blog-post.html"
    }
  ]
}
```

### Blog Content Topics:
- Lighting design trends and innovations
- Sustainable lighting solutions
- Commercial lighting design guides
- LED technology advancements
- Outdoor lighting essentials
- Color temperature and lighting psychology

## Troubleshooting
- CSS not updating: ensure `npm run dev:css` is running or rebuild with `npm run build:css`.
- Icons/clipart not loading: confirm the ImageKit URL exists and is public; try removing transforms to debug.
- Drawer not opening: check for console errors; the toggle is plain JS bound to the hamburger and overlay.
