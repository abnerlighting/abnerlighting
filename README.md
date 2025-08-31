# Abner Lighting - Modern React Static Website

A modern, responsive website for Abner Lighting built with React, Vite, and Tailwind CSS. Features a component-based architecture with Markdown support for blog content.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development
- **Component-Based Design**: Reusable components for maintainable code
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Markdown Blog Support**: Full Markdown rendering with syntax highlighting
- **Interactive Navigation**: Smooth routing with React Router
- **Contact Form**: Functional contact form with validation
- **Map Integration**: Google Maps integration for partner locations
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Markdown** - Markdown rendering for blog posts
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd abnerlighting-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx      # Main layout with header/footer
│   ├── HeroCarousel.jsx # Homepage hero carousel
│   ├── ContactForm.jsx  # Contact form component
│   ├── ContactMap.jsx   # Google Maps integration
│   ├── CustomTextSection.jsx # Signature text section
│   └── WhatsAppButton.jsx # WhatsApp contact button
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact page
│   ├── Projects.jsx    # Projects showcase
│   ├── Blogs.jsx       # Blog listing
│   ├── BlogPost.jsx    # Individual blog post
│   ├── ConcreteSeries.jsx # Concrete series products
│   ├── StoneSeries.jsx # Stone series products
│   ├── ArchitecturalSeries.jsx # Architectural series
│   └── ProductDetail.jsx # Product detail page
├── App.jsx             # Main app with routing
├── main.jsx           # React entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Design System

### Colors
- **Primary**: `#013f88` (Blue)
- **Secondary**: `#6b7280` (Gray)
- **Background**: `#ffffff` (White)
- **Text**: `#1f2937` (Dark Gray)

### Typography
- **Font Family**: Jost (Google Fonts)
- **Headings**: Bold weights with responsive sizing
- **Body**: Regular weight with good line height

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Consistent shadow and border radius
- **Forms**: Clean input styling with validation
- **Navigation**: Responsive header with mobile menu

## 📝 Blog System

The website includes a complete blog system with:

- **Markdown Support**: Full Markdown rendering with `react-markdown`
- **Syntax Highlighting**: Code blocks with syntax highlighting
- **Categories**: Blog post categorization
- **Tags**: Tag system for better organization
- **Related Posts**: Automatic related post suggestions
- **SEO Optimized**: Meta tags and structured data

### Blog Features
- Responsive design for all screen sizes
- Reading time estimation
- Author information
- Social sharing capabilities
- Newsletter subscription

## 🗺️ Map Integration

The contact page includes Google Maps integration:

- **Partner Locations**: Interactive map with partner markers
- **Info Windows**: Detailed partner information on click
- **Custom Styling**: Branded map appearance
- **Responsive Design**: Works on all devices

**Note**: Add your Google Maps API key to enable the interactive map.

## 📱 Responsive Design

The website is fully responsive with:

- **Mobile First**: Designed for mobile devices first
- **Tablet Optimized**: Perfect layout for tablets
- **Desktop Enhanced**: Enhanced features for desktop
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Performance

- **Fast Loading**: Optimized with Vite
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper sizing
- **Lazy Loading**: Images and components load as needed

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Layout.jsx`

### Styling
- Use Tailwind CSS classes for styling
- Custom components defined in `src/index.css`
- Responsive design with Tailwind breakpoints

### Content Management
- Blog posts can be managed through Markdown files
- Product data can be stored in JSON files or CMS
- Images served through ImageKit CDN

## 📞 Contact & Support

For questions or support:
- **Email**: info@abnerlighting.com
- **Phone**: +1 (234) 567-890
- **Website**: https://abnerlighting.com

## 📄 License

This project is proprietary to Abner Lighting.

---

Built with ❤️ by the Abner Lighting team
