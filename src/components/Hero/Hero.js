import { HeroSlider } from "./HeroSlider.js";
import { HeroMetrics } from "./HeroMetrics.js";
import { HeroFloatingElements } from "./HeroFloatingElements.js";

export class Hero {
  constructor() {
    this.dynamicTexts = [
      "Haz Crecer Tu Negocio con",
      "Multiplica Tus Ventas con",
      "Aumenta Tu Visibilidad con",
      "Conquista Nuevos Clientes con",
      "Potencia Tu Marca con",
      "Expande Tu Alcance con",
      "Transforma Tu Presencia con",
      "Maximiza Tu Inversión con",
    ];
    this.currentTextIndex = 0;
    this.dynamicTitleElement = null;
    this.slideInterval = null;
    this.currentSlide = 0;
  }

  init() {
    this.render();
    this.initHeroInteractions();
    this.initHeroSlider();
    this.initMetricsAnimation();
    this.addParallaxEffect();
  }

  render() {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    heroSection.innerHTML = `
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title fade-in-up">
            <span id="dynamicTitle">${this.dynamicTexts[0]}</span> 
            <span class="hero-title-highlight">PublicAdis</span>
          </h1>

          <p class="hero-subtitle fade-in-up delay-1">
            La plataforma publicitaria más completa de Cusco que impulsa tus ventas en todos los canales de forma efectiva
          </p>

          <div class="platforms-checklist fade-in-up delay-1">
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Sitio Web</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Aplicación Móvil</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Revista Digital</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Redes Sociales</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Locales Presenciales</span>
            </div>
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Grupos de WhatsApp</span>
            </div>
          </div>

          <div class="hero-metrics fade-in-up delay-2">
            <div class="hero-metric">
              <i class="fa-solid fa-chart-line metric-icon"></i>
              <span class="metric-number" data-value="+380">+380%</span>
              <span class="metric-text">Multiplica tus clientes potenciales</span>
            </div>
            <div class="hero-metric">
              <i class="fa-solid fa-users metric-icon"></i>
              <span class="metric-number" data-value="+25k">+25k</span>
              <span class="metric-text">Personas interesadas al mes</span>
            </div>
            <div class="hero-metric">
              <i class="fa-solid fa-sack-dollar metric-icon"></i>
              <span class="metric-number" data-value="+200">+200%</span>
              <span class="metric-text">Incremento en ventas promedio</span>
            </div>
          </div>

          <div class="hero-buttons fade-in-up delay-2">
            <a href="#services" class="btn btn-primary pulse-animation">
              <i class="fas fa-rocket"></i>
              Explorar Servicios
            </a>
            <a href="#tools" class="btn btn-secondary green-accent">
              <i class="fas fa-tools"></i>
              Herramientas Gratuitas
            </a>
          </div>
        </div>

        <div class="hero-slider" id="heroSlider">
          <div class="slides">
            <div class="slide slide-active">
              <img src="/assets/images/hero/platform-mockup.png" alt="Plataforma PublicAdis">
              <div class="slide-overlay">
                <h3>Tecnología Publicitaria Avanzada</h3>
                <p>Algoritmos de IA que maximizan tu ROI</p>
              </div>
            </div>
            <div class="slide">
              <img src="/assets/images/hero/analytics-mockup.png" alt="Análisis en tiempo real">
              <div class="slide-overlay">
                <h3>Analytics en Tiempo Real</h3>
                <p>Toma decisiones basadas en datos precisos</p>
              </div>
            </div>
            <div class="slide">
              <img src="/assets/images/hero/integration-mockup.png" alt="Integración con Buscadis">
              <div class="slide-overlay">
                <h3>Integración con Buscadis</h3>
                <p>Alcance máximo en el marketplace líder</p>
              </div>
            </div>
          </div>

          <div class="slider-navigation">
            <button id="prevSlide" class="slider-arrow prev">
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="slider-dots">
              <button class="slider-dot active"></button>
              <button class="slider-dot"></button>
              <button class="slider-dot"></button>
            </div>
            <button id="nextSlide" class="slider-arrow next">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="floating-elements">
          <div class="floating-element" data-speed="0.03">
            <i class="fa-solid fa-building"></i>
          </div>
          <div class="floating-element" data-speed="0.02">
            <i class="fa-solid fa-car"></i>
          </div>
          <div class="floating-element" data-speed="0.04">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div class="floating-element" data-speed="0.025">
            <i class="fa-solid fa-store"></i>
          </div>
        </div>
      </div>
      
      <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    `;

    // Guardar referencia al elemento de título dinámico
    this.dynamicTitleElement = document.getElementById("dynamicTitle");
  }

  initHeroInteractions() {
    // Iniciar la rotación del título
    setInterval(() => {
      // Fade out
      if (this.dynamicTitleElement) {
        this.dynamicTitleElement.style.opacity = "0";

        setTimeout(() => {
          // Cambiar texto
          this.currentTextIndex = (this.currentTextIndex + 1) % this.dynamicTexts.length;
          this.dynamicTitleElement.textContent = this.dynamicTexts[this.currentTextIndex];

          // Fade in
          this.dynamicTitleElement.style.opacity = "1";
        }, 500);
      }
    }, 4000);

    // Observe elements for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in elements
    document.querySelectorAll(".fade-in-up, .fade-in-right").forEach((el) => {
      observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }

  initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (!slides.length || !dots.length) return;

    // Inicializar
    this.currentSlide = 0;
    this.showSlide(this.currentSlide);

    // Navegación con botones
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.nextSlide();
      });
    }

    // Navegación con puntos
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
      });
    });

    // Auto rotación
    this.startSlideInterval();

    // Detener auto rotación al interactuar con el slider
    const slider = document.getElementById('heroSlider');
    if (slider) {
      slider.addEventListener('mouseenter', () => {
        this.stopSlideInterval();
      });

      slider.addEventListener('mouseleave', () => {
        this.startSlideInterval();
      });
    }

    // Soporte para gestos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    if (slider) {
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      }, { passive: true });
    }
  }

  showSlide(index) {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dot');

    if (!slides.length || !dots.length) return;

    // Ocultar todas las slides
    slides.forEach(slide => {
      slide.classList.remove('slide-active', 'slide-from-left', 'slide-from-right');
      slide.style.display = 'none';
    });

    // Mostrar slide actual
    slides[index].style.display = 'block';
    
    // Añadir animación según la dirección
    if (this.lastSlide > index) {
      slides[index].classList.add('slide-from-left');
    } else if (this.lastSlide < index) {
      slides[index].classList.add('slide-from-right');
    }
    
    setTimeout(() => {
      slides[index].classList.add('slide-active');
    }, 50);

    // Actualizar puntos de navegación
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    this.lastSlide = index;
  }

  nextSlide() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (!slides.length) return;
    
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    this.showSlide(this.currentSlide);
  }

  prevSlide() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (!slides.length) return;
    
    this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
    this.showSlide(this.currentSlide);
  }

  startSlideInterval() {
    this.stopSlideInterval(); // Limpiar intervalo existente
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideInterval() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  handleSwipe() {
    const SWIPE_THRESHOLD = 50;
    if (touchEndX < touchStartX - SWIPE_THRESHOLD) {
      this.nextSlide(); // Swipe izquierdo, siguiente slide
    }
    if (touchEndX > touchStartX + SWIPE_THRESHOLD) {
      this.prevSlide(); // Swipe derecho, slide anterior
    }
  }

  initMetricsAnimation() {
    // Observador para la animación de métricas
    const metricsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateMetrics();
            metricsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const metricsContainer = document.querySelector('.hero-metrics');
    if (metricsContainer) {
      metricsObserver.observe(metricsContainer);
    }
  }

  animateMetrics() {
    const metrics = document.querySelectorAll('.metric-number');
    
    metrics.forEach(metric => {
      const value = metric.getAttribute('data-value');
      if (!value) return;
      
      let finalValue = value;
      let startValue = 0;
      let duration = 2000; // 2 segundos
      
      // Manejar valores con + o k
      let isPlus = false;
      let isK = false;
      let targetValue = finalValue;
      
      if (finalValue.includes('+')) {
        isPlus = true;
        targetValue = finalValue.replace('+', '');
      }
      
      if (finalValue.includes('k')) {
        isK = true;
        targetValue = parseFloat(targetValue.replace('k', '')) * 1000;
      }
      
      // Eliminar comas para cálculos
      targetValue = parseFloat(targetValue.replace(/,/g, ''));
      
      const increment = targetValue / (duration / 16);
      let currentValue = 0;
      
      const counterTimer = setInterval(() => {
        currentValue += increment;
        
        if (currentValue >= targetValue) {
          clearInterval(counterTimer);
          metric.textContent = finalValue;
        } else {
          let displayValue = Math.floor(currentValue);
          
          if (isK) {
            displayValue = (displayValue / 1000).toFixed(0) + 'k';
          }
          
          if (isPlus) {
            displayValue = '+' + displayValue;
          }
          
          metric.textContent = displayValue;
        }
      }, 16);
    });
  }

  addParallaxEffect() {
    window.addEventListener('mousemove', (e) => {
      const floatingElements = document.querySelectorAll('.floating-element');
      
      floatingElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.02');
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
}
