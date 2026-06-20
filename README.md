# Sajan Regmi - Professional ePortfolio Website

## 📋 Project Overview

A modern, fully-responsive professional ePortfolio website for Sajan Regmi, a BSc IT (Computer Systems Engineering) student at ISMT College, University of Sunderland. The website showcases education, skills, experience, and interactive demonstrations of web development technologies.

## 🎯 Features

### Core Features
- ✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Dark/Light Theme Toggle** - User preference saved in localStorage
- ✅ **Smooth Animations** - Beautiful entrance animations and transitions
- ✅ **Bootstrap 5 Integration** - Professional component library
- ✅ **Modern UI/UX** - Clean, professional design with gradient effects
- ✅ **Fast Loading** - Optimized assets and lazy loading

### Sections Included
1. **Home/Hero Section** - Animated welcome with CTA buttons
2. **About Me** - Personal introduction and key information
3. **Full Stack Development** - Explanation of web development layers
4. **HTML Demonstration** - Semantic HTML5 examples
5. **CSS Demonstration** - Modern CSS3 features and animations
6. **Bootstrap Framework** - Components and grid system demo
7. **JavaScript Demonstration** - Interactive demos (Counter, Todo, Color Generator, Calculator)
8. **Skills** - Technical skills with progress bars
9. **Experience** - Timeline of field experience
10. **Education** - Academic qualifications and achievements
11. **Awards & Certifications** - Recognition and accomplishments
12. **Contact** - Contact form with validation
13. **Footer** - Social links and quick navigation

### Interactive Features
- 📊 **Skill Progress Bars** - Animated progress visualization
- 📝 **Contact Form** - Email validation and submission feedback
- 🎯 **Counter Application** - Increment/Decrement/Reset demo
- ✅ **Todo List** - Add, complete, and delete tasks
- 🎨 **Color Generator** - Random color generation with clipboard copy
- 🧮 **Calculator** - Basic arithmetic operations
- 🌙 **Theme Toggle** - Dark and light mode support
- 📱 **Mobile Navigation** - Responsive navbar with collapse

### Technical Stack
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Variables, Flexbox, Grid
- **JavaScript** - ES6+ with async/await
- **Bootstrap 5** - Responsive grid and components
- **Font Awesome** - Icon library
- **Google Fonts** - Professional typography

## 📂 File Structure

```
sajan_regmi_portfolio/
├── index.html          # Main HTML file (All sections)
├── style.css          # Custom CSS with dark/light theme
├── script.js          # JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Extract the zip file to your desired location
2. Open `index.html` in your web browser
3. No server required - fully static HTML/CSS/JS

### Option 2: GitHub Pages Deployment
1. Extract the zip file
2. Create a GitHub repository named `username.github.io` (replace with your GitHub username)
3. Upload the files (index.html, style.css, script.js) to the repository
4. Your site will be live at `https://username.github.io`

### Option 3: Web Server Deployment
1. Upload the files to your web hosting provider's public directory
2. Access via your domain name

## 🎨 Customization Guide

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #007bff;
    --primary-dark: #0056b3;
    --secondary-color: #6c757d;
    /* ... more colors ... */
}
```

### Updating Personal Information
Edit these sections in `index.html`:
- Line ~40: Navigation bar (name/logo)
- Line ~100: Hero section text
- Line ~200: About section
- Line ~800: Contact information
- Line ~1000: Footer details

### Adding New Projects
Add project cards in the skills or experience section:
```html
<div class="col-lg-4 mb-4">
    <div class="card project-card">
        <div class="card-body">
            <h5 class="card-title">Project Name</h5>
            <p class="card-text">Project description</p>
            <a href="#" class="btn btn-primary">View Project</a>
        </div>
    </div>
</div>
```

### Modifying Theme Colors
For the dark theme, colors are automatically adjusted. To customize:
```css
[data-theme="dark"] {
    --primary-color: #your-color;
    /* ... */
}
```

## 🔍 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ⚙️ Features in Detail

### Dark/Light Theme
- Automatically saves user preference in localStorage
- CSS Variables update based on theme
- Smooth transition between themes

### Form Validation
- Real-time email validation
- Phone number validation
- Required field checking
- Success/error messages
- Accessible form labels

### JavaScript Demos
1. **Counter** - Increment, Decrement, Reset operations
2. **Todo List** - Add, mark complete, delete tasks
3. **Color Generator** - Generate random hex colors with copy to clipboard
4. **Calculator** - Basic arithmetic (Add, Subtract, Multiply, Divide)

### Animations
- Fade-in animations on page load
- Scroll-triggered animations
- Hover effects on cards and buttons
- Progress bar animations
- Floating cards in hero section

## 🎯 SEO Optimization

- Semantic HTML5 elements
- Meta tags for description and keywords
- Mobile viewport meta tag
- Open Graph meta tags ready
- Structured data ready for schema.org

## ♿ Accessibility Features

- ARIA labels on interactive elements
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- High contrast colors
- Focus indicators on interactive elements

## 📊 Performance Tips

1. **Images**: Already optimized
2. **CSS**: Single stylesheet (all-in-one)
3. **JavaScript**: Minified inline functions
4. **Fonts**: Google Fonts with performance hints
5. **CDN**: Bootstrap and Font Awesome from CDN

## 🐛 Troubleshooting

### Dark mode not working?
- Clear browser cache
- Check if localStorage is enabled
- Verify `data-theme` attribute on HTML element

### Form not submitting?
- Check browser console for errors
- Ensure all required fields are filled
- Verify email format is correct

### Links not working?
- Ensure section IDs match anchor hrefs
- Check for typos in ID names
- Verify smooth scrolling is enabled

## 📧 Contact Information

**Sajan Regmi**
- Email: regmisajan6@gmail.com
- Phone: +977-9765947138
- Location: Pokhara, Kaski, Nepal
- Facebook: [Sajan Regmi](https://www.facebook.com/Sajan%20Regmi)
- Instagram: [@_Sajan_regmi](https://www.instagram.com/_Sajan_regmi/)

## 📝 License

This portfolio template is created for educational purposes. Feel free to customize and use for your own portfolio.

## 🎓 Educational Resources

This portfolio demonstrates:
- ✅ HTML5 semantic markup
- ✅ CSS3 advanced styling techniques
- ✅ JavaScript ES6+ functionality
- ✅ Bootstrap framework usage
- ✅ Responsive web design
- ✅ Web accessibility principles
- ✅ Form validation and handling
- ✅ Local storage management
- ✅ Interactive web applications

## 🔗 Useful Links

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [GitHub Pages](https://pages.github.com/)

## 💡 Future Enhancement Ideas

1. Add project portfolio with images and links
2. Integrate email service for contact form (Formspree, EmailJS)
3. Add blog/articles section
4. Integrate resume download
5. Add testimonials section
6. Social media feed integration
7. Analytics tracking (Google Analytics)
8. CMS integration for dynamic content

## ✨ Special Thanks

Built with ❤️ for Sajan Regmi's professional portfolio journey.

---

**Version**: 1.0  
**Last Updated**: June 2024  
**Status**: Production Ready ✅
