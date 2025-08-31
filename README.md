# Portfolio Website 🚀

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Features beautiful animations, floating geometric shapes, and a complete project showcase system.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive**: Fully responsive design that works on all devices
- **Project Routing**: Individual project detail pages with routing
- **Interactive Elements**: Floating geometric shapes and hover effects
- **Contact Form**: Functional contact form with validation
- **Skills Showcase**: Animated skill bars and professional capabilities
- **Dark Theme**: Beautiful dark gradient theme throughout

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM 7
- **Development**: ESLint, Hot Module Replacement

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Section**: Personal information, experience, and skills overview
3. **Skills Section**: Technical and professional skills with animated progress bars
4. **Projects Section**: Showcase of 6 dummy projects with detailed cards
5. **Contact Section**: Contact form and social links
6. **Footer**: Quick navigation and social media links

## 🎨 Projects Featured

1. **E-Commerce Platform** - Full-featured online marketplace
2. **Task Management System** - Collaborative project management tool
3. **Social Media Dashboard** - Analytics dashboard for multiple platforms
4. **Weather Forecast App** - Advanced weather application
5. **Cryptocurrency Tracker** - Real-time crypto portfolio tracking
6. **Learning Management System** - Online education platform

Each project includes:
- Detailed descriptions and features
- Technology stack used
- GitHub links and live demos
- Development challenges and solutions
- Project duration and role information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section component
│   ├── Contact.jsx        # Contact form and info
│   ├── Footer.jsx         # Footer with social links
│   ├── Hero.jsx           # Main hero section
│   ├── Navbar.jsx         # Navigation component
│   ├── ProjectDetail.jsx  # Individual project pages
│   ├── Projects.jsx       # Projects showcase
│   └── Skills.jsx         # Skills and expertise
├── data/
│   └── portfolioData.js   # All portfolio content and data
├── App.jsx               # Main app component with routing
└── main.jsx             # App entry point
```

## 🎯 Key Features Implemented

### Animations & Interactions
- Floating geometric shapes in backgrounds
- Smooth scroll animations
- Hover effects on cards and buttons
- Staggered animations for lists
- Progress bar animations for skills

### Routing System
- React Router for navigation
- Individual project detail pages
- Smooth transitions between sections
- Back navigation functionality

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactions

### Modern UI Elements
- Glassmorphism effects
- Gradient backgrounds
- Backdrop blur effects
- Card-based layouts
- Animated buttons and links

## 🔧 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update `src/data/portfolioData.js` with your details
2. **Projects**: Replace dummy projects with your actual work
3. **Images**: Add your professional photos and project screenshots
4. **Colors**: Modify the color scheme in component classes
5. **Content**: Update all text content to match your experience
6. **Social Links**: Update social media links in components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

**Mahmood Ali**
- Email: mahmood@example.com
- Location: Pakistan
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

⭐ **If you like this project, please give it a star!** ⭐+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
