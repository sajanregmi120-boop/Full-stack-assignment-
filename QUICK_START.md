# Quick Start Guide - Sajan Regmi's Portfolio

## 🚀 5-Minute Setup

### Step 1: Extract Files
```bash
unzip sajan_regmi_portfolio.zip
cd sajan_regmi_portfolio
```

### Step 2: Open in Browser
Simply double-click `index.html` or open it in your browser:
- **File Path**: `file:///path/to/index.html`
- No server required!

### Step 3: Test Features
✅ Check dark/light mode toggle (top-right)  
✅ Click section links in navbar  
✅ Try interactive demos (Calculator, Todo, Color Generator)  
✅ Submit contact form  
✅ Test on mobile view  

## 🌐 Deploy to GitHub Pages (Free Hosting)

### Step 1: Create GitHub Account
Go to [github.com](https://github.com) and sign up

### Step 2: Create Repository
1. Click "+" → "New repository"
2. Name: `username.github.io` (replace with your GitHub username)
3. Make it **Public**
4. Click "Create repository"

### Step 3: Upload Files
**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop: `index.html`, `style.css`, `script.js`
3. Click "Commit changes"

**Option B: Using Git (Recommended)**
```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
cp index.html style.css script.js .
git add .
git commit -m "Add portfolio"
git push origin main
```

### Step 4: Access Your Portfolio
Visit: `https://username.github.io`

*It may take 1-2 minutes to deploy*

## 📝 Customize Before Deploying

### Update Personal Info (IMPORTANT!)
Edit `index.html` and replace:
1. **Line 8**: Meta description
2. **Line 40-42**: Name in navbar
3. **Line ~70-80**: Hero section text
4. **Line ~200-250**: About section content
5. **Line ~800**: Contact information (email, phone)
6. **Line ~900**: Footer social links

### Update Social Links
Find and update:
- Facebook: `https://www.facebook.com/YOUR_PROFILE`
- Instagram: `https://www.instagram.com/YOUR_USERNAME`
- Email: `mailto:your_email@gmail.com`
- Phone: `tel:+977-XXXXXXXXXX`

### Change Primary Color
Edit `style.css`, find `:root` section and change:
```css
--primary-color: #007bff;  /* Change this to your color */
```

## 📋 File Checklist

- [ ] `index.html` - Main HTML file
- [ ] `style.css` - All styling
- [ ] `script.js` - All functionality
- [ ] Files in same directory

## 🎨 Color Schemes (Ready to Use)

### Modern Blue
```css
--primary-color: #007bff;
--primary-dark: #0056b3;
```

### Professional Purple
```css
--primary-color: #6f42c1;
--primary-dark: #5a32a3;
```

### Tech Green
```css
--primary-color: #28a745;
--primary-dark: #1e7e34;
```

### Creative Orange
```css
--primary-color: #fd7e14;
--primary-dark: #e86c00;
```

## 🔧 Common Customizations

### Change Website Title
Line 9 in `index.html`:
```html
<title>Your Name - Professional Portfolio</title>
```

### Update Hero Section
Lines 70-82 in `index.html`:
```html
<h1 class="hero-title">
    <span class="word">Welcome</span>
    <span class="word">to</span>
    <span class="word">My Portfolio</span>
</h1>
```

### Modify Skill Percentages
Lines 900-950 in `index.html`:
```html
<div class="progress-bar" style="width: 90%">
    <!-- Change 90% to desired percentage -->
</div>
```

### Change Footer Year
Line 1050 in `index.html`:
```html
&copy; 2024 <strong>Your Name</strong>.
```

## ✨ Feature Highlights

| Feature | Status |
|---------|--------|
| Dark/Light Theme | ✅ Working |
| Responsive Design | ✅ Mobile-Ready |
| Contact Form | ✅ Ready |
| Smooth Scrolling | ✅ Enabled |
| Interactive Demos | ✅ Functional |
| SEO Optimized | ✅ Yes |
| Accessible | ✅ WCAG Compliant |

## 🐛 Quick Troubleshooting

**Issue**: Dark mode not saving
- **Solution**: Clear browser cache, check localStorage enabled

**Issue**: Links not scrolling
- **Solution**: Verify section IDs in HTML match nav links

**Issue**: Form not working
- **Solution**: Check console (F12), ensure email format valid

**Issue**: Slow loading
- **Solution**: This shouldn't happen - files are optimized

## 📱 Test on Different Devices

### Mobile Testing (in Browser)
1. Press `F12` (Developer Tools)
2. Click device icon (top-left)
3. Select device: iPhone, iPad, Android, etc.
4. Test responsiveness

### Real Device Testing
1. Get your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Share file via local network
3. Access on phone via same WiFi

## 🎯 Next Steps

1. ✅ Extract and customize files
2. ✅ Test locally in browser
3. ✅ Deploy to GitHub Pages (or your host)
4. ✅ Test on mobile devices
5. ✅ Share your portfolio URL
6. ✅ Keep it updated with new projects/skills

## 💡 Pro Tips

- **Backup Original**: Keep a copy before customizing
- **Test Before Sharing**: Check all links and forms
- **Mobile First**: Always test on mobile (60% of users)
- **Keep Updated**: Update skills and experience regularly
- **SEO**: Add og:image meta tag for social media preview

## 🎓 Learning Resources

- CSS Variables: [MDN Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- Bootstrap: [Official Docs](https://getbootstrap.com/)
- JavaScript ES6: [Tutorials](https://javascript.info/)

## 📞 Support

For issues or questions:
- Check README.md for detailed documentation
- Review comments in code files
- Test in different browsers
- Check browser console (F12) for errors

---

**Ready to go!** Your portfolio is production-ready. 🚀
