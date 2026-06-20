# Deployment Guide - Sajan Regmi's Portfolio

Complete step-by-step instructions for deploying your portfolio to different platforms.

## 🌟 Recommended: GitHub Pages (Free, Easy, Professional)

### Requirements
- GitHub account (free)
- Your files: `index.html`, `style.css`, `script.js`
- ~5 minutes setup time

### Setup Instructions

#### Step 1: Create Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `YOUR_USERNAME.github.io`
   - Replace YOUR_USERNAME with your actual GitHub username
   - Example: `sajanregmi.github.io`
3. Description: "Professional Portfolio"
4. Select: **Public** (important!)
5. Click "Create repository"

#### Step 2: Upload Files
**Method A: Web Upload (Easiest)**
1. Click "Add file" → "Upload files"
2. Drag and drop (or select):
   - index.html
   - style.css
   - script.js
3. Click "Commit changes"

**Method B: Git Command Line**
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io

# Copy portfolio files here
cp /path/to/index.html .
cp /path/to/style.css .
cp /path/to/script.js .

# Push to GitHub
git add .
git commit -m "Add portfolio website"
git push origin main
```

#### Step 3: Verify Deployment
1. Wait 1-2 minutes for deployment
2. Visit: `https://YOUR_USERNAME.github.io`
3. Your portfolio is live! 🎉

#### Additional GitHub Features
- **Custom Domain**: Settings → Pages → Custom domain
- **SSL Certificate**: Automatic (HTTPS)
- **Analytics**: GitHub Insights
- **Versioning**: Keep history of all changes

---

## 🏢 Netlify (Free, Advanced Features)

### Requirements
- GitHub/GitLab/Bitbucket account
- Your files
- ~10 minutes setup time

### Setup Instructions

#### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub/GitLab/Bitbucket"
3. Authorize Netlify
4. Select your portfolio repository

#### Step 2: Configure Build Settings
1. Build command: (leave empty)
2. Publish directory: `./` (root)
3. Click "Deploy site"

#### Step 3: Custom Domain (Optional)
1. Go to Domain settings
2. Add custom domain
3. Point DNS records to Netlify

**Netlify Advantages**:
- Free SSL/HTTPS
- Automatic deploys on push
- Form handling with Netlify Forms
- Analytics included
- Email notifications

---

## 🌐 Vercel (Free, Fastest)

### Setup Instructions

#### Step 1: Connect Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository

#### Step 2: Deploy
1. Choose "Other" for framework
2. Click "Deploy"
3. Wait for build to complete

#### Step 3: Access Your Site
- URL: `https://your-project.vercel.app`
- Custom domain in settings

**Vercel Advantages**:
- Extremely fast CDN
- Automatic optimizations
- Preview deployments
- Analytics included

---

## 💼 Traditional Web Hosting (Shared Hosting)

### Providers (Monthly Cost)
- **Hostinger**: $2.99/month
- **Bluehost**: $2.95/month
- **SiteGround**: $2.99/month
- **DreamHost**: $2.59/month

### Setup Instructions

#### Step 1: Upload Files
1. Log into your hosting control panel (cPanel/Plesk)
2. Go to File Manager
3. Navigate to `public_html/` directory
4. Upload files:
   - index.html
   - style.css
   - script.js

#### Step 2: Configure Domain
1. Point domain DNS to hosting provider
2. Wait for propagation (up to 48 hours)
3. Access via your domain

#### Step 3: SSL Certificate
1. Most hosting includes free SSL
2. Install from control panel
3. Enable HTTPS

---

## ☁️ AWS S3 + CloudFront

### Setup Instructions

#### Step 1: Create S3 Bucket
```bash
# Using AWS CLI
aws s3 mb s3://your-domain-name
```

#### Step 2: Upload Files
```bash
# Upload files
aws s3 sync . s3://your-domain-name --exclude ".git/*"

# Make files public
aws s3api put-bucket-acl --bucket your-domain-name --acl public-read
```

#### Step 3: Enable Static Website Hosting
1. Bucket Properties → Static website hosting
2. Set index document: `index.html`
3. Set error document: `index.html`

#### Step 4: CloudFront Distribution
1. Create CloudFront distribution
2. Origin: S3 bucket
3. Enable compression
4. Set default root object: `index.html`

---

## 🐧 Linux Web Server (Advanced)

### Requirements
- Linux server (Ubuntu/CentOS)
- SSH access
- Apache/Nginx installed

### Setup with Apache

```bash
# SSH into server
ssh user@your_server.com

# Navigate to web root
cd /var/www/html/

# Upload files (or use SFTP)
scp index.html user@your_server.com:/var/www/html/
scp style.css user@your_server.com:/var/www/html/
scp script.js user@your_server.com:/var/www/html/

# Set permissions
chmod 644 index.html style.css script.js

# Enable HTTPS with Let's Encrypt
sudo certbot --apache -d yourdomain.com
```

### Setup with Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 📊 Performance Optimization After Deployment

### For All Platforms

#### 1. Enable Caching
```html
<!-- Add to index.html head -->
<meta http-equiv="cache-control" content="max-age=3600">
```

#### 2. Enable Compression
- Most platforms handle this automatically
- Check CloudFlare for free compression

#### 3. Minify Assets
- CSS: Already minimal
- JS: Already minimal
- HTML: Already minimal

#### 4. Use CDN
- CloudFlare (Free tier available)
- AWS CloudFront
- Netlify/Vercel (built-in)

---

## 🔒 Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Use strong domain registration
- [ ] Enable 2FA on hosting account
- [ ] Regular backups
- [ ] Monitor for suspicious activity
- [ ] Update contact form backend if needed
- [ ] Monitor 404 errors

---

## 🚀 Post-Deployment Checklist

### Functionality
- [ ] All links working
- [ ] Dark/Light mode toggle working
- [ ] Contact form working
- [ ] Mobile responsive
- [ ] All animations smooth
- [ ] No console errors (F12)

### SEO & Analytics
- [ ] Meta tags correct
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Add sitemap.xml
- [ ] Add robots.txt

### Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on iPhone/iPad
- [ ] Test on Android
- [ ] Test on slow connection (DevTools)

---

## 📱 Monitor Your Site

### Free Monitoring Tools
- **Google Analytics**: Track visitors and behavior
- **Google Search Console**: Monitor search performance
- **Pingdom**: Website uptime monitoring
- **GTmetrix**: Performance analysis
- **Google PageSpeed Insights**: Performance optimization

---

## 🔄 Update & Maintenance

### Regular Updates
1. Update personal information quarterly
2. Add new projects/achievements
3. Update skills as you learn
4. Check for broken links monthly
5. Monitor analytics

### Version Control (Git)
```bash
# Make changes locally
git add .
git commit -m "Update skills section"
git push origin main

# Changes auto-deploy on GitHub/Netlify/Vercel
```

---

## 💰 Cost Comparison

| Platform | Cost | Setup Time | SSL | Custom Domain |
|----------|------|-----------|-----|----------------|
| GitHub Pages | Free | 5 min | ✅ | ✅ Free |
| Netlify | Free | 10 min | ✅ | ✅ Free |
| Vercel | Free | 10 min | ✅ | ✅ Paid |
| Shared Hosting | $2-5/mo | 20 min | ✅ | ✅ Included |
| AWS S3 | ~$1/mo | 30 min | ✅ | ✅ Paid |
| Dedicated Server | $20+/mo | 1 hour | ✅ | ✅ Included |

---

## ❓ Frequently Asked Questions

**Q: Can I use a custom domain on GitHub Pages?**
A: Yes! Go to Settings → Pages → Custom domain

**Q: How long does deployment take?**
A: Usually 1-2 minutes. GitHub Pages may take up to 10 minutes.

**Q: Can I use a subdomain?**
A: Yes! Most platforms support subdomains (e.g., portfolio.yourdomain.com)

**Q: Is HTTPS required?**
A: Yes, all modern platforms provide free HTTPS.

**Q: Can I add a backend?**
A: Yes, use Netlify Functions or integrate external services like Formspree for forms.

---

## 🆘 Troubleshooting Deployment

### Site shows 404 error
- Ensure `index.html` is in root directory
- Check file names are correct (case-sensitive)
- Clear browser cache

### Styles not loading
- Verify CSS file name: `style.css`
- Check file is in same directory
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### JavaScript not working
- Check JavaScript file name: `script.js`
- Verify file is in same directory
- Check browser console for errors (F12)

### Domain not pointing to site
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records in domain registrar
- Check nameserver settings

---

## 📞 Support Resources

- **GitHub Pages Docs**: [pages.github.com](https://pages.github.com)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Stack Overflow**: Search your error message
- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org)

---

**Choose GitHub Pages for simplicity or Netlify for advanced features!** 🚀
