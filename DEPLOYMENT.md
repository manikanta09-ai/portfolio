# Deployment Guide

## Quick Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings (no configuration needed)

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in seconds!

### Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Configure Build Settings**
   - Build command: Leave empty (or `echo "No build"`)
   - Publish directory: `.` (dot - root directory)

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

### Option 3: Deploy to GitHub Pages

1. **Push to GitHub** (same as above)

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select your branch (usually `main`)
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://your-username.github.io/repository-name`

## Testing Locally

1. For local testing, you can use:
   ```bash
   npx serve .
   ```

2. Or use Python's built-in server:
   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser

## File Structure

```
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── package.json            # Project configuration
└── README.md               # Documentation
```

## Custom Domain (Optional)

### Vercel
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### Netlify
- Go to Site Settings → Domain Management
- Add your custom domain
- Follow DNS configuration instructions

## Troubleshooting

### Site Not Loading
- Check that all files are committed and pushed to GitHub
- Verify the deployment platform shows "Deployed" status
- Check browser console for any errors

### Styling Issues
- Clear browser cache
- Check that `styles.css` is properly linked in `index.html`
- Verify file paths are correct

### JavaScript Not Working
- Check browser console for errors
- Verify that `script.js` is properly linked in `index.html`
- Ensure all JavaScript syntax is correct

## Need Help?

- Check the main [README.md](README.md) for more details
- Review your deployment platform's documentation
- Check browser console for any errors
