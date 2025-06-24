// main.js - Global JavaScript for VOCI Web Application

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for all anchor links that point to a section ID
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetElement.offsetTop - navbarHeight - 20; // Adjusted offset for fixed navbar and a little padding

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close the navbar toggler on small screens after clicking a link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Add active class to navbar links based on scroll position
    const sections = document.querySelectorAll('section, header.hero-section'); // Include hero as a section
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const activateNavLink = () => {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset + document.querySelector('.navbar').offsetHeight + 50; // Add some offset

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches the current section ID or is the index.html link pointing to home
            if (link.getAttribute('href') === 'index.html' && currentSectionId === 'hero-section') {
                link.classList.add('active');
            } else if (link.getAttribute('href').includes(currentSectionId) && currentSectionId !== 'hero-section') {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateNavLink);
    // Call on load to set initial active state
    activateNavLink();

    // Show/Hide Back to Top button on scroll
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show after scrolling 300px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Smooth scroll to top when button is clicked
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- New: Scroll-triggered Animations for Sections ---
    // Select all sections (excluding the hero section as it animates on load)
    const animatableSections = document.querySelectorAll('section');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the section is intersecting (in view)
            if (entry.isIntersecting) {
                // Add the animation class
                // Assumes Animate.css classes like animate__fadeIn, animate__fadeInUp are directly on the sections
                // or their immediate children within the animate__animated container.
                // We'll target elements with 'animate__animated' class within the section.
                const animatedElements = entry.target.querySelectorAll('.animate__animated');
                animatedElements.forEach(element => {
                    element.classList.add('animate__active'); // Add a class to activate the animation
                });

                // Stop observing once the animation has been triggered to run only once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // Observe against the viewport
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Observe each section
    animatableSections.forEach(section => {
        observer.observe(section);
    });

    // Initial check for elements already in view on page load
    // This is important for sections that might be visible without scrolling
    animatableSections.forEach(section => {
        const animatedElements = section.querySelectorAll('.animate__animated');
        if (section.getBoundingClientRect().top < window.innerHeight) {
            animatedElements.forEach(element => {
                element.classList.add('animate__active');
            });
            // Stop observing if already in view
            observer.unobserve(section);
        }
    });

    // We also need to ensure that animate__animated elements are initially invisible
    // This styling should typically be handled in CSS, but for robustness,
    // we can add a check or ensure classes are set correctly.
    // The home.css already has `opacity: 0;` for `.hero-section .animate__animated`,
    // and sections themselves are set to fade in from `home.css`.
    // For elements within sections that have animate__animated, they should
    // ideally start hidden as well. We'll add a CSS rule for general
    // `.animate__animated` elements not yet activated.
});
