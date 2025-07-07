// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate stats when they come into view
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const step = (target / (duration / 16)); // 60fps
                let current = 0;
                
                const updateCount = () => {
                    current += step;
                    if (current < target) {
                        entry.target.textContent = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target + '+';
                    }
                };
                
                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });

    // Initialize stats animation
    animateStats();
});

// Skip to main content functionality
const skipToContent = () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
    }
};

// Make skip to content link work
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        skipToContent();
    });
}
