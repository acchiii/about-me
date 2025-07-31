document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 300) {
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

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');

    function animateSkillBars() {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-skill') || '0%';
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }
/*
    // Intersection Observer for skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    // Observe each parent of skill-bar
    skillBars.forEach(bar => {
        observer.observe(bar.parentElement);
    });
});
*/
