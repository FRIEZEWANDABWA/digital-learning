# 🚀 Deploy Digilift Africa to GitHub Pages

## 📋 **Step-by-Step Deployment Guide**

### **1. Create GitHub Repository**

1. **Go to GitHub.com** and sign in to your account
2. **Click "New Repository"** (green button)
3. **Repository Settings:**
   - **Name**: `digilift-africa`
   - **Description**: `Digital Empowerment Hubs - Pan-African digital literacy platform`
   - **Visibility**: Public ✅
   - **Initialize**: Leave unchecked (we have existing code)

4. **Click "Create Repository"**

### **2. Connect Local Repository to GitHub**

Open Command Prompt in the project folder and run:

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/digilift-africa.git

# Rename main branch to 'main' (GitHub standard)
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### **3. Enable GitHub Pages**

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in left sidebar
4. **Source Settings:**
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` 
   - **Folder**: `/ (root)`
5. **Click "Save"**

### **4. Update Configuration**

Before pushing, update these files with your GitHub username:

**In `package.json`:**
```json
"homepage": "https://YOUR_USERNAME.github.io/digilift-africa"
```

**In `vite.config.js`:**
```javascript
base: '/digilift-africa/'
```

### **5. Deploy the Website**

The website will automatically deploy when you push to the `main` branch:

```bash
# Make any final changes
git add .
git commit -m "Ready for deployment"
git push origin main
```

### **6. Access Your Live Website**

After 2-5 minutes, your website will be live at:
```
https://YOUR_USERNAME.github.io/digilift-africa
```

## 🔧 **Automatic Deployment**

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- ✅ **Build** the React app automatically
- ✅ **Deploy** to GitHub Pages on every push
- ✅ **Update** the live site within minutes

## 📁 **Project Structure Ready for GitHub**

```
digilift-africa/
├── .github/workflows/deploy.yml    # Auto-deployment
├── src/                           # React source code
├── public/                        # Static assets
├── dist/                          # Built files (auto-generated)
├── package.json                   # Dependencies
├── README.md                      # Project documentation
├── SETUP.md                       # Development setup
└── UPDATE_SUMMARY.md              # Feature summary
```

## 🌟 **Features Included**

### **✅ Complete Platform**
- **9 Pages**: Home, About, Designs, Countries, Partnered Centers, Curriculum, Stories, Contact, Dashboard
- **Multilingual**: 6 African languages supported
- **Mobile Responsive**: Works on all devices
- **Modern Design**: Colorful, professional, engaging

### **✅ Container Designs Showcase**
- **6 Design Options**: Mobile, residential, interior, exterior
- **Visual Gallery**: Colorful placeholders for your container photos
- **Detailed Specs**: Capacity, setup time, mobility features
- **Interactive Filters**: Browse by category and view mode

### **✅ Institutional Partnerships**
- **Partnership Application**: Multi-step form for institutions
- **Hub Dashboard**: Real-time monitoring and analytics
- **Success Stories**: Smart Academy Kenya integration
- **Comparison Tables**: Mobile vs Partnered models

### **✅ Comprehensive Curriculum**
- **10 Course Categories**: From basic literacy to AI training
- **Beginner-Friendly**: Designed for rural communities
- **Real-World Impact**: Income generation focus
- **Certification Ready**: Badge and certificate system

## 🎯 **Next Steps After Deployment**

1. **Test the Live Site**: Check all pages and features
2. **Add Real Images**: Replace placeholders with actual container photos
3. **Customize Content**: Update text, statistics, and contact info
4. **SEO Optimization**: Add meta descriptions and keywords
5. **Analytics Setup**: Add Google Analytics tracking
6. **Domain Setup**: Optional custom domain configuration

## 🔄 **Making Updates**

To update the live website:
```bash
# Make your changes
git add .
git commit -m "Update website content"
git push origin main
```

The site will automatically rebuild and deploy!

## 🆘 **Troubleshooting**

### **Common Issues:**
- **404 Error**: Check base path in `vite.config.js`
- **Blank Page**: Check browser console for errors
- **Build Fails**: Run `npm run build` locally to test
- **Images Missing**: Ensure images are in `public/` folder

### **Support:**
- Check GitHub Actions tab for deployment logs
- Verify GitHub Pages settings in repository
- Test locally with `npm run dev` first

---

**🎉 Your Digilift Africa platform is ready for the world!** 🌍