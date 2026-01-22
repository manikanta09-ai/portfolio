# Manikanta's Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Showcasing skills, projects, experience, and achievements.

## 🌟 Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- ⚡ **Fast Loading**: Static site with no build step required
- 🎯 **Smooth Scrolling**: Elegant navigation between sections
- 💼 **Portfolio Sections**: About, Skills, Experience, Projects, Education, and Contact

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd manikanta-portfolio
```

2. For local testing, you can use a simple server:
```bash
npm run dev
# or
npx serve .
```

3. Open `http://localhost:3000` in your browser.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. No configuration needed - Vercel will auto-detect it as a static site
4. Deploy!

The site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: Leave empty (or `echo "No build"`)
   - Publish directory: `.` (root)
4. Deploy!

The site will be live at `https://your-project.netlify.app`

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be live at `https://your-username.github.io/repository-name`

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── styles.css              # All CSS styling
├── script.js               # JavaScript functionality
├── package.json            # Project configuration
└── README.md               # This file
```

## 📝 Customization

### Update Portfolio Information

Edit the `portfolioData` object in `script.js`:
```javascript
const portfolioData = {
    skills: [...],
    projects: [...]
};
```

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #0a192f;
    --accent: #64ffda;
    /* ... */
}
```

### Update Content

Edit `index.html` to update:
- Hero section text
- About section
- Experience details
- Education information
- Contact information

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme
- **Smooth Animations**: Fade-in and scroll animations
- **Responsive Navigation**: Mobile-friendly menu
- **Section Numbering**: Numbered sections for easy navigation
- **Hover Effects**: Interactive elements with hover states

## 📱 Sections

1. **Home/Hero**: Introduction and call-to-action
2. **About**: Personal background and technologies
3. **Skills**: Technical skills and technologies
4. **Experience**: Work experience and achievements
5. **Projects**: Portfolio projects with descriptions
6. **Education**: Academic background
7. **Contact**: Contact information and links

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- No frameworks or dependencies required

## 📄 License

© 2025 Manikanta. All rights reserved.

## 🙏 Credits

- Built with vanilla HTML, CSS, and JavaScript
- Modern design inspired by contemporary portfolio websites
- Fully responsive and accessible
