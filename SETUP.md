# Digilift Africa - Quick Setup Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd "C:\Learning hubs\digilift-africa"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit: http://localhost:3000
   - The site should load with the homepage

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve built files

### Project Structure Overview

```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── i18n/          # Multilingual translations
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

### Key Features Implemented

✅ **Responsive Design** - Mobile-first approach
✅ **Multilingual Support** - 6 African languages
✅ **Modern UI** - Tailwind CSS with animations
✅ **React Router** - Client-side navigation
✅ **Component Architecture** - Modular and reusable

### Next Steps for Customization

1. **Add Real Content:**
   - Update translation files in `src/i18n/locales/`
   - Replace placeholder text with actual program information

2. **Add Images:**
   - Place images in `public/assets/images/`
   - Update image references in components

3. **Customize Styling:**
   - Modify `tailwind.config.js` for brand colors
   - Update `src/index.css` for global styles

4. **Add More Countries:**
   - Create country data files
   - Add new country detail pages

5. **Integrate Backend:**
   - Connect contact forms to email service
   - Add CMS integration for content management

### Deployment Options

- **GitHub Pages**: Static hosting
- **Netlify**: Auto-deploy from Git
- **Vercel**: Serverless deployment
- **AWS Amplify**: Full-stack hosting

### Support

For questions or issues:
- Check the main README.md
- Review component documentation
- Test in development mode first

---

**Your Digilift Africa platform is ready for customization!** 🌍