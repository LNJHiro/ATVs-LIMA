// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact card click handler
    const contactCard = document.querySelector('.contact-card');
    if (contactCard) {
        contactCard.addEventListener('click', function() {
            // You can customize this action - open email, show contact form, etc.
            window.location.href = 'mailto:seu.email@exemplo.com?subject=Contato via Portfólio';
        });
    }

    // Project items click handlers
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // You can customize these actions - open project pages, modals, etc.
            const projectName = this.querySelector('.project-name').textContent;
            alert(`Abrindo projeto: ${projectName}`);
            // Example: window.open(`/projects/${projectName.toLowerCase()}`, '_blank');
        });
    });

    // Add parallax effect to decorative elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const decorativeIcon = document.querySelector('.decorative-icon');
        if (decorativeIcon) {
            decorativeIcon.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.1}deg)`;
        }
    });

    // Add hover effects for better interactivity
    const cards = document.querySelectorAll('.hero-card, .profile-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe all cards for animation
    const animatedElements = document.querySelectorAll('.hero-card, .profile-card, .contact-card, .project-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

