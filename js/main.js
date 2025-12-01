// ===================================
// KAZI MAZID - PROFESSIONAL PORTFOLIO
// Interactive JavaScript - 2025
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // LOADING SCREEN
    // ===================================
    const loadingScreen = document.getElementById('loadingScreen');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // ===================================
    // SCROLL TO TOP BUTTON
    // ===================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================================
    // HEADER SCROLL EFFECT
    // ===================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when user scrolls down
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // SCROLL REVEAL ANIMATION
    // ===================================
    // ===================================
    // SCROLL REVEAL ANIMATION
    // ===================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px" // Offset slightly from bottom
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ===================================
    // THEME TOGGLE
    // ===================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️ Light';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Update button text and save preference
        if (body.classList.contains('light-mode')) {
            themeToggle.textContent = '☀️ Light';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.textContent = '🌙 Dark';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ===================================
    // TIMELINE ANIMATION
    // ===================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    const animateTimeline = () => {
        const windowHeight = window.innerHeight;

        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 100); // Stagger animation
            }
        });
    };

    // Initial check
    animateTimeline();

    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = window.requestAnimationFrame(() => {
            animateTimeline();
        });
    });

    // ===================================
    // STATS COUNTER ANIMATION
    // ===================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateStats = () => {
        if (hasAnimated) return;

        const statsSection = document.querySelector('.summary-stats');
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            hasAnimated = true;

            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const number = parseInt(text.replace(/[^0-9]/g, ''));

                let current = 0;
                const increment = number / 50; // 50 steps
                const duration = 2000; // 2 seconds
                const stepTime = duration / 50;

                const counter = setInterval(() => {
                    current += increment;

                    if (current >= number) {
                        current = number;
                        clearInterval(counter);
                    }

                    let displayValue = Math.floor(current);
                    if (hasPlus) displayValue += '+';
                    if (hasPercent) displayValue += '%';

                    stat.textContent = displayValue;
                }, stepTime);
            });
        }
    };

    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load

    // ===================================
    // SKILL CARDS HOVER EFFECT
    // ===================================
    const skillCards = document.querySelectorAll('.skill-category');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // GLASS CARD TILT EFFECT (SUBTLE)
    // ===================================
    const glassCards = document.querySelectorAll('.glass-card, .timeline-content');

    glassCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ===================================
    // ACTIVE NAV LINK ON SCROLL
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksForHighlight = document.querySelectorAll('.nav-link');

    const highlightNavLink = () => {
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksForHighlight.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);

    // ===================================
    // PARALLAX EFFECT FOR HERO
    // ===================================
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        if (hero) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });

    // ===================================
    // LOADING ANIMATION
    // ===================================
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';

        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in collaboration? Reach out at kaziminal28@gmail.com', 'color: #00d2ff; font-size: 14px;');

});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
