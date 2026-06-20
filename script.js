document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle Functionality ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlElement.setAttribute('data-theme', 'dark');
            updateThemeIcon('dark');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scroll position for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight + 5,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // --- Skills Progress Bar Animation on Scroll ---
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1; // Trigger slightly before it's fully visible
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }
        });
    };

    // Run once on load and add event listener for scroll
    animateSkills();
    window.addEventListener('scroll', animateSkills);

    // --- Interactive JavaScript Demonstration (Character Counter) ---
    const textarea = document.getElementById('demo-textarea');
    const charCount = document.getElementById('char-count');
    const charProgress = document.getElementById('char-progress');
    const charWarning = document.getElementById('char-warning');
    const MAX_CHARS = 100;

    if (textarea) {
        textarea.addEventListener('input', (e) => {
            const currentLength = e.target.value.length;
            
            // Limit character input
            if (currentLength > MAX_CHARS) {
                e.target.value = e.target.value.substring(0, MAX_CHARS);
            }
            
            const finalLength = e.target.value.length;
            charCount.textContent = finalLength;
            
            // Update progress bar
            const percentage = (finalLength / MAX_CHARS) * 100;
            charProgress.style.width = percentage + '%';
            
            // Change color based on length
            if (percentage > 85) {
                charProgress.classList.remove('bg-primary');
                charProgress.classList.add('bg-danger');
                charCount.classList.remove('text-primary');
                charCount.classList.add('text-danger');
            } else {
                charProgress.classList.add('bg-primary');
                charProgress.classList.remove('bg-danger');
                charCount.classList.add('text-primary');
                charCount.classList.remove('text-danger');
            }
            
            // Show warning
            if (finalLength >= MAX_CHARS) {
                charWarning.classList.remove('d-none');
            } else {
                charWarning.classList.add('d-none');
            }
        });
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (!contactForm.checkValidity()) {
                event.stopPropagation();
                contactForm.classList.add('was-validated');
            } else {
                // Simulate form submission
                contactForm.classList.remove('was-validated');
                formSuccess.classList.remove('d-none');
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('d-none');
                }, 5000);
            }
        }, false);
    }
});
