import './styles/main.css';
import './css/premium.css';
import { Header } from './components/Header/Header.js';
import { Hero } from './components/Hero/Hero.js';
import { Services } from './components/Services/Services.js';
import { Benefits } from './components/Benefits/Benefits.js';
import { Footer } from './components/Footer/Footer.js';
import { BusinessTools } from './components/BusinessTools/BusinessTools.js';
import { Sectors } from './components/Sectors/Sectors.js';
import { Testimonials } from './components/Testimonials/Testimonials.js';
import { Contact } from './components/Contact/Contact.js';

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components
  const header = new Header();
  const hero = new Hero();
  const services = new Services();
  const benefits = new Benefits();
  const footer = new Footer();
  const businessTools = new BusinessTools();
  const sectors = new Sectors();
  const testimonials = new Testimonials();
  const contact = new Contact();

  // Initialize each component
  header.init();
  hero.init();
  services.init();
  benefits.init();
  footer.init();
  businessTools.init();
  sectors.init();
  testimonials.init();
  contact.init();

  // Handle loader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        document.body.classList.add('loaded');
      }, 300);
    }, 800);
  }

  // Apply premium class to hero
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.classList.add('premium-hero');
  }

  // Setup scroll animations
  setupScrollAnimations();

  // Setup premium effects
  applyPremiumEffects();

  // Initialize back to top button
  initBackToTop();

  // Setup parallax effects
  setupParallaxEffects();
});

// Setup scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in-up, .fade-in-right, .fade-in-left').forEach(el => {
    observer.observe(el);
  });
}

// Initialize back to top button
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');

  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Setup parallax effects
function setupParallaxEffects() {
  document.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Parallax para acentos premium
    document
      .querySelectorAll('.premium-accent, .premium-accent-secondary, .premium-accent-gold')
      .forEach(accent => {
        const speed = 0.05;
        const moveX = (x - 0.5) * 100 * speed;
        const moveY = (y - 0.5) * 100 * speed;

        accent.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
  });
}

// Apply premium effects to the website
function applyPremiumEffects() {
  // Añadir títulos dorados a todas las secciones
  document.querySelectorAll('.section-title').forEach(title => {
    title.classList.add('gold-effect');
  });

  // Añadir acentos premium a las secciones
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    // No aplicar a hero y footer que ya tienen
    if (section.classList.contains('hero-section') || section.classList.contains('site-footer')) {
      return;
    }

    // Añadir acentos de decoración
    const accent1 = document.createElement('div');
    accent1.className = 'section-accent accent-primary';
    accent1.style.left = '15%';
    accent1.style.top = '10%';

    const accent2 = document.createElement('div');
    accent2.className = 'section-accent accent-secondary';
    accent2.style.right = '15%';
    accent2.style.top = '30%';

    const accent3 = document.createElement('div');
    accent3.className = 'section-accent accent-gold';
    accent3.style.left = '30%';
    accent3.style.bottom = '20%';

    // Alternar posiciones en secciones pares
    if (index % 2 === 0) {
      accent1.style.left = '65%';
      accent2.style.right = '65%';
      accent3.style.left = '50%';
    }

    section.style.position = 'relative';
    section.style.overflow = 'hidden';
    section.appendChild(accent1);
    section.appendChild(accent2);
    section.appendChild(accent3);
  });

  // Añadir efectos de hover a las tarjetas
  document
    .querySelectorAll(
      '.card, .service-card, .benefit-card, .tool-card, .sector-card, .testimonial-card'
    )
    .forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('gold-shimmer');
      });

      card.addEventListener('mouseleave', () => {
        setTimeout(() => {
          card.classList.remove('gold-shimmer');
        }, 1000);
      });
    });

  // Añadir bordes dorados a los elementos destacados
  document.querySelectorAll('.featured').forEach(element => {
    element.classList.add('gold-border');
  });

  // Animación contador para estadísticas
  setupCounterAnimation();
}

// Setup counter animation
function setupCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          let count = 0;
          let step = Math.ceil(target / 50);

          const updateCounter = () => {
            count += step;
            if (count > target) count = target;
            counter.textContent = count;
            if (count < target) {
              requestAnimationFrame(updateCounter);
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Debug information
console.log('Main script loaded and premium effects applied');
