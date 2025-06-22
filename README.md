# Digilift Africa - Digital Empowerment Hubs

A comprehensive pan-African digital literacy and community engagement platform showcasing mobile, solar-powered digital hubs using shipping containers converted into digital classrooms for underserved communities.

## 🌍 Project Overview

Digilift Africa documents and manages the rollout of innovative digital education hubs across Africa, targeting health centers, orphanages, rural schools, and community centers in underserved areas.

### Target Countries & Languages
- **Kenya**: English & Kiswahili
- **Senegal**: French  
- **Rwanda**: Kinyarwanda
- **Ethiopia**: Amharic
- **South Africa**: English & isiZulu

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Multilingual Support**: Full i18n implementation for 6 languages
- **Dynamic Country Pages**: Localized content for each target country
- **Interactive Components**: Smooth animations and transitions
- **CMS Ready**: Structured for easy content management

### Pages Included
1. **Home**: Project overview, impact statistics, call to action
2. **About the Hubs**: Technical details, solar mobility, training format
3. **Countries**: Dynamic localized pages with local partners and success stories
4. **Curriculum**: Digital skills offered, certifications, internship links
5. **Stories & Impact**: Real student testimonials and community voices
6. **Data for Africa**: AI training and data-driven insights
7. **Get Involved**: Partnership opportunities for NGOs, governments, donors
8. **Contact**: Application forms and contact information

### Technical Features
- **React 18** with modern hooks and patterns
- **Tailwind CSS** for responsive styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing
- **React i18next** for internationalization
- **Lucide React** for consistent iconography

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd digilift-africa

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
npm run serve    # Serve built files with http-server
```

## 📁 Project Structure

```
digilift-africa/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx    # Navigation with language switcher
│   │   ├── Footer.jsx    # Site footer with links
│   │   └── ScrollToTop.jsx
│   ├── pages/            # Route components
│   │   ├── Home.jsx      # Landing page
│   │   ├── About.jsx     # Hub information
│   │   ├── Countries.jsx # Country overview
│   │   ├── CountryDetail.jsx # Individual country pages
│   │   ├── Curriculum.jsx # Training programs
│   │   ├── Stories.jsx   # Impact stories
│   │   ├── DataForAfrica.jsx # AI/Data insights
│   │   ├── GetInvolved.jsx # Partnership info
│   │   └── Contact.jsx   # Contact forms
│   ├── i18n/             # Internationalization
│   │   ├── config.js     # i18n configuration
│   │   └── locales/      # Translation files
│   │       ├── en.json   # English
│   │       ├── sw.json   # Kiswahili
│   │       ├── fr.json   # French
│   │       ├── rw.json   # Kinyarwanda
│   │       ├── am.json   # Amharic
│   │       └── zu.json   # isiZulu
│   ├── data/             # Static data files
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (#0ea5e9 to #0c4a6e)
- **Secondary**: Orange tones (#f97316 to #7c2d12)  
- **Success**: Green tones (#22c55e to #14532d)
- **Africa Theme**: Gold, Earth, Sunset, Savanna, Sky

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)
- **Font Weights**: 300-800 range

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Hover effects with shadows
- **Animations**: Fade-in, slide-up, bounce effects

## 🌐 Internationalization

The platform supports 6 languages with complete translations:

- **English (en)**: Default language
- **Kiswahili (sw)**: Kenya/Tanzania
- **French (fr)**: Senegal/West Africa
- **Kinyarwanda (rw)**: Rwanda
- **Amharic (am)**: Ethiopia  
- **isiZulu (zu)**: South Africa

### Adding New Languages
1. Create new translation file in `src/i18n/locales/`
2. Add language to `src/i18n/config.js`
3. Update language selector in `Navbar.jsx`

## 📊 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Facebook Pixel
- Custom event tracking
- User journey analysis

## 🚀 Deployment Options

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### Vercel
```bash
# Auto-deployment from Git repository
# Build command: npm run build
# Output directory: dist
```

### AWS Amplify
```bash
# Connect repository
# Build settings: npm run build
# Artifacts location: dist
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow React best practices
- Use TypeScript for new components (optional)
- Maintain responsive design principles
- Test across different devices and browsers
- Ensure accessibility compliance (WCAG 2.1)

## 📝 Content Management

### Adding New Countries
1. Create country data in `src/data/countries.js`
2. Add country-specific translations
3. Create country detail page component
4. Update routing in `App.jsx`

### Updating Content
- **Static Content**: Edit translation files in `src/i18n/locales/`
- **Dynamic Content**: Update data files in `src/data/`
- **Images**: Add to `public/assets/images/`

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for design system changes
- Update `src/index.css` for global styles
- Component-specific styles in individual files

### Functionality
- Add new pages in `src/pages/`
- Create reusable components in `src/components/`
- Extend utilities in `src/utils/`

## 📞 Support & Contact

For technical support or questions about the platform:

- **Email**: dev@digiliftafrica.org
- **Documentation**: [Link to detailed docs]
- **Issues**: GitHub Issues tab
- **Discussions**: GitHub Discussions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- African communities for inspiring this initiative
- Open source contributors and maintainers
- Partner organizations across Africa
- Development team and volunteers

---

**Built with ❤️ for Africa's Digital Future**