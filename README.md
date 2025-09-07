# Devansh Agarwal - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and TailwindCSS. Features a clean design with smooth animations, dark/light mode toggle, and comprehensive sections showcasing skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with lots of whitespace and subtle animations
- **Responsive Layout**: Optimized for both mobile and desktop devices
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: Proper focus states and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Cloudflare Pages ready

## 📱 Sections

1. **Hero**: Introduction with photo placeholder and call-to-action buttons
2. **Education**: Academic background including UIUC and NTU programs
3. **Skills**: Technical skills with visual progress indicators
4. **Experience**: Work experience with detailed achievements and metrics
5. **Projects**: Featured projects with technologies and descriptions
6. **Contact**: Contact form and information with clickable buttons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-new
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## 🌐 Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set build output directory: `build`
6. Deploy!

### Other Platforms

The build output in the `build` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/Education.tsx` - Education details
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors and themes can be modified in `tailwind.config.js`
- Component-specific styles are in each component file
- Global styles are in `src/index.css`

### Photos
Replace the photo placeholder in `src/components/Hero.tsx` with your actual photo:
```tsx
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name" 
  className="w-80 h-80 rounded-full object-cover"
/>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- System preference detection
- Manual toggle in navigation
- Persistent storage in localStorage
- Smooth transitions between themes

## ⚡ Performance

- Lazy loading with `whileInView` animations
- Optimized images and assets
- Efficient CSS with TailwindCSS
- Minimal JavaScript bundle

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run eject` - Eject from Create React App

### Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx     # Navigation bar
│   ├── Hero.tsx       # Hero section
│   ├── Education.tsx  # Education section
│   ├── Skills.tsx     # Skills section
│   ├── Experience.tsx # Work experience
│   ├── Projects.tsx   # Projects showcase
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer
├── App.tsx            # Main app component
├── index.tsx          # Entry point
└── index.css          # Global styles
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: da30@illinois.edu
- **LinkedIn**: [linkedin.com/in/devanshagarwal2510/](https://linkedin.com/in/devanshagarwal2510/)
- **Phone**: +1 (217) 721-8133

---

Built with ❤️ by Devansh Agarwal using React & TailwindCSS
