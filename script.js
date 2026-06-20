// ========================
// THEME MANAGEMENT
// ========================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    if (themeToggle) {
        if (theme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.title = 'Switch to Light Mode';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.title = 'Switch to Dark Mode';
        }
    }
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation
        document.body.style.transition = 'background-color 0.3s, color 0.3s';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

// Initialize theme on page load
window.addEventListener('DOMContentLoaded', initializeTheme);

// ========================
// SMOOTH SCROLLING
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================
// SCROLL TO TOP BUTTON
// ========================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================
// FORM VALIDATION
// ========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate form
        if (!this.checkValidity() === false) {
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Show success message
            showFormSuccess();

            // Reset form
            this.reset();
            this.classList.remove('was-validated');
        } else {
            // Show validation errors
            this.classList.add('was-validated');
        }
    });
}

function showFormSuccess() {
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
        <i class="fas fa-check-circle"></i> <strong>Success!</strong> Your message has been sent. Thank you for reaching out!
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const formContainer = contactForm.parentElement;
    formContainer.insertBefore(alertDiv, contactForm);

    // Auto-remove alert after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// ========================
// COUNTER DEMO
// ========================

let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
    // Add animation
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 100);
}

if (incrementBtn) {
    incrementBtn.addEventListener('click', () => {
        counter++;
        updateCounterDisplay();
    });
}

if (decrementBtn) {
    decrementBtn.addEventListener('click', () => {
        counter--;
        updateCounterDisplay();
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateCounterDisplay();
    });
}

// ========================
// TODO LIST DEMO
// ========================

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

if (addTodoBtn) {
    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create todo item
        const todoItem = document.createElement('li');
        todoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <button class="btn btn-sm btn-danger delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        `;

        // Add delete functionality
        const deleteBtn = todoItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoItem.remove();
        });

        // Toggle completion on click
        const span = todoItem.querySelector('span');
        span.style.cursor = 'pointer';
        span.addEventListener('click', () => {
            span.style.textDecoration = span.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            span.style.opacity = span.style.opacity === '0.5' ? '1' : '0.5';
        });

        todoList.appendChild(todoItem);
        todoInput.value = '';
        todoInput.focus();
    }

    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
}

// ========================
// COLOR GENERATOR DEMO
// ========================

const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const generateColorBtn = document.getElementById('generateColorBtn');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

if (generateColorBtn) {
    generateColorBtn.addEventListener('click', () => {
        const newColor = generateRandomColor();
        colorBox.style.backgroundColor = newColor;
        colorBox.style.transition = 'background-color 0.3s ease';
        colorCode.textContent = newColor;

        // Copy to clipboard
        copyToClipboard(newColor);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = colorCode.textContent;
        colorCode.textContent = 'Copied!';
        setTimeout(() => {
            colorCode.textContent = originalText;
        }, 2000);
    });
}

// ========================
// CALCULATOR DEMO
// ========================

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const calcResult = document.getElementById('calcResult');

function calculate(operation) {
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = (num1 / num2).toFixed(2);
            }
            break;
        default:
            result = 0;
    }

    calcResult.textContent = result;
}

if (addBtn) {
    addBtn.addEventListener('click', () => calculate('add'));
}
if (subtractBtn) {
    subtractBtn.addEventListener('click', () => calculate('subtract'));
}
if (multiplyBtn) {
    multiplyBtn.addEventListener('click', () => calculate('multiply'));
}
if (divideBtn) {
    divideBtn.addEventListener('click', () => calculate('divide'));
}

// Allow Enter key for calculation
if (num1Input && num2Input) {
    [num1Input, num2Input].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculate('add');
            }
        });
    });
}

// ========================
// NAVBAR ACTIVE STATE
// ========================

function updateNavbarActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

updateNavbarActiveState();

// ========================
// ANIMATIONS ON SCROLL
// ========================

function animateOnScroll() {
    const elements = document.querySelectorAll('[class*="section"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

animateOnScroll();

// ========================
// SKILL PROGRESS BARS
// ========================

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, {
        threshold: 0.5
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

window.addEventListener('load', animateProgressBars);

// ========================
// FORM INPUT EFFECTS
// ========================

const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
    // Add focus effects
    input.addEventListener('focus', function () {
        this.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
        this.style.transform = 'scale(1)';
    });

    // Real-time validation
    input.addEventListener('input', function () {
        if (this.value) {
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
        }
    });
});

// ========================
// EMAIL VALIDATION
// ========================

const emailInput = document.getElementById('email');

if (emailInput) {
    emailInput.addEventListener('input', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(this.value)) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else if (this.value) {
            this.classList.remove('is-valid');
            this.classList.add('is-invalid');
        }
    });
}

// ========================
// PHONE NUMBER VALIDATION
// ========================

const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function () {
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
        if (this.value && phoneRegex.test(this.value)) {
            this.classList.add('is-valid');
        } else if (this.value) {
            this.classList.add('is-invalid');
        }
    });
}

// ========================
// LAZY LOADING IMAGES
// ========================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================
// BOOTSTRAP TOOLTIPS
// ========================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap tooltips if available
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    if (typeof bootstrap !== 'undefined') {
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});

// ========================
// NAVBAR COLLAPSE ON LINK CLICK
// ========================

const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarLinks = document.querySelectorAll('.navbar-collapse .nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close navbar on mobile
        if (window.innerWidth < 992) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// ========================
// PERFORMANCE OPTIMIZATION
// ========================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll listeners
const debouncedScroll = debounce(() => {
    updateNavbarActiveState();
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ========================
// LOCAL STORAGE UTILITIES
// ========================

const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },

    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    }
};

// ========================
// PAGE LOAD ANIMATION
// ========================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    });
});

// ========================
// PRINT STYLES
// ========================

window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
});

window.addEventListener('afterprint', () => {
    initializeTheme();
});

// ========================
// KEYBOARD SHORTCUTS
// ========================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: Focus search (can be extended)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Add your shortcut logic here
    }

    // Escape: Close any open modals
    if (e.key === 'Escape') {
        // Bootstrap handles this automatically
    }
});

// ========================
// ACCESSIBILITY IMPROVEMENTS
// ========================

// Improve focus management
document.querySelectorAll('button, a, input, textarea, select').forEach(element => {
    element.addEventListener('focus', function () {
        this.setAttribute('aria-label', this.getAttribute('aria-label') || this.textContent);
    });
});

// ========================
// CONSOLE MESSAGE
// ========================

console.log('%c🎉 Welcome to Sajan Regmi\'s Portfolio!', 'font-size: 20px; color: #007bff; font-weight: bold;');
console.log('%cCheck out the code and feel free to connect!', 'font-size: 14px; color: #6c757d;');
console.log('%cEmail: regmisajan6@gmail.com | Phone: +977-9765947138', 'font-size: 12px; color: #007bff;');

// ========================
// INITIALIZATION
// ========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Initialize all components
    initializeTheme();
    animateProgressBars();
    updateNavbarActiveState();
    animateOnScroll();
});

// ========================
// EXPORT FOR EXTERNAL USE
// ========================

window.PortfolioApp = {
    theme: {
        toggle: () => themeToggle.click(),
        set: (theme) => {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        }
    },
    storage: Storage,
    scrollToTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    scrollToSection: (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
