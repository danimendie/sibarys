/**
 * Síbarys Paraguay - Main JavaScript
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initNavScroll();
        initMobileNav();
        initScrollReveal();
        initFormSubmit();
    });

    // Navigation scroll effect
    function initNavScroll() {
        const nav = document.getElementById('nav');
        if (!nav) return;

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // Mobile navigation toggle
    function initMobileNav() {
        const toggle = document.getElementById('navToggle');
        const menu = document.querySelector('.nav-menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function() {
            menu.classList.toggle('open');
            toggle.classList.toggle('active');
        });
    }

    // Scroll reveal animations
    function initScrollReveal() {
        const elements = document.querySelectorAll('.fade-in');
        if (!elements.length) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        elements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // Form submission
    function initFormSubmit() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const btn = form.querySelector('.form-submit');
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            setTimeout(function() {
                btn.textContent = 'Enviado ✓';
                btn.style.background = '#25D366';
                
                const success = document.getElementById('formSuccess');
                if (success) success.classList.add('visible');
                
                form.reset();
                
                setTimeout(function() {
                    btn.textContent = 'Enviar';
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

})();
