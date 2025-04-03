import HeroSlider from "./HeroSlider";
import HeroMetrics from "./HeroMetrics";
import HeroFloatingElements from "./HeroFloatingElements";

class Hero {
  constructor() {
    this.slider = new HeroSlider();
    this.metrics = new HeroMetrics();
    this.floatingElements = new HeroFloatingElements();
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
    this.isAnimating = false;
  }

  init() {
    this.render();
    this.initComponents();
    this.setupDynamicTitle();
    this.setupScrollIndicator();
    this.setupParallaxEffect();
    this.setupIntersectionObserver();
  }

  render() {
    const heroContainer = document.getElementById("heroContainer");
    if (!heroContainer) return;

    heroContainer.innerHTML = `
      <section id="heroSection" class="pageSection hero-section">
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
              ${this.renderPlatformChecks()}
            </div>
            
            <div class="hero-metrics fade-in-up delay-2"></div>
            
            <div id="buttonsContainer" class="fade-in-up delay-2">
              <a href="#servicesSection" class="primary-btn pulse-animation">
                Explorar Servicios <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#businessToolsSection" class="secondary-btn">
                Herramientas Gratuitas <i class="fa-solid fa-tools"></i>
              </a>
            </div>
          </div>
          
          <div class="hero-image fade-in-right">
            <div class="floating-elements"></div>
            
            <div class="hero-slider">
              ${this.renderSlider()}
            </div>
          </div>
        </div>

        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <p>Desplaza para ver más</p>
        </div>

        <div class="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <a href="https://wa.me/937054328" class="whatsapp-button" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </section>
    `;
  }

  renderPlatformChecks() {
    const platforms = [
      { icon: "check-circle", text: "Sitio Web" },
      { icon: "check-circle", text: "Aplicación Móvil" },
      { icon: "check-circle", text: "Revista Digital" },
      { icon: "check-circle", text: "Redes Sociales" },
      { icon: "check-circle", text: "Locales Presenciales" },
      { icon: "check-circle", text: "Grupos de WhatsApp" },
      { icon: "check-circle", text: "Campañas por Email" },
    ];

    return platforms
      .map(
        (platform, index) => `
      <div class="platform-check" data-delay="${index * 100}">
        <i class="fa-solid fa-${platform.icon}"></i>
        <span>${platform.text}</span>
      </div>
    `
      )
      .join("");
  }

  renderSlider() {
    const slides = [
      {
        desktop: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
        mobile: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31",
        title: "Plataforma Web",
        description: "Gestiona tus anuncios en un solo lugar",
      },
      {
        desktop: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
        mobile: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
        title: "Dashboard Analítico",
        description: "Métricas detalladas de tus campañas",
      },
      {
        desktop: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
        mobile: "https://images.unsplash.com/photo-1616499370260-485b3e5ed3bc",
        title: "Herramientas Avanzadas",
        description: "Potencia tu estrategia publicitaria",
      },
    ];

    return `
      <div class="slider-container" id="heroSlider">
        ${slides
          .map(
            (slide, index) => `
          <div class="slide ${index === 0 ? "slide-active" : ""}">
            <div class="slide-content">
              <div class="device-mockup">
                <img 
                  src="${
                    slide.desktop
                  }?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="PublicAdis Desktop Application" 
                  class="device-screen main-device"
                />
                <img 
                  src="${
                    slide.mobile
                  }?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="PublicAdis Mobile Application" 
                  class="device-screen mobile-device"
                />
                <div class="slide-overlay">
                  <h3>${slide.title}</h3>
                  <p>${slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="slider-nav" id="sliderNav">
        ${slides
          .map(
            (_, index) => `
          <div class="slider-dot ${
            index === 0 ? "active" : ""
          }" data-slide="${index}"></div>
        `
          )
          .join("")}
      </div>
      <div class="slider-arrows">
        <div class="slider-arrow" id="prevSlide">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="slider-arrow" id="nextSlide">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    `;
  }

  initComponents() {
    this.slider.init();
    this.metrics.init();
    this.floatingElements.init();
    this.setupHoverEffects();
  }

  setupDynamicTitle() {
    const dynamicTitleElement = document.getElementById("dynamicTitle");
    if (!dynamicTitleElement) return;

    const animateTitle = () => {
      if (this.isAnimating) return;
      this.isAnimating = true;

      dynamicTitleElement.style.opacity = "0";
      dynamicTitleElement.style.transform = "translateY(10px)";

      setTimeout(() => {
        this.currentTextIndex =
          (this.currentTextIndex + 1) % this.dynamicTexts.length;
        dynamicTitleElement.textContent =
          this.dynamicTexts[this.currentTextIndex];

        dynamicTitleElement.style.opacity = "1";
        dynamicTitleElement.style.transform = "translateY(0)";

        this.isAnimating = false;
      }, 500);
    };

    setInterval(animateTitle, 4000);
  }

  setupScrollIndicator() {
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

    document.querySelectorAll(".fade-in-up, .fade-in-right").forEach((el) => {
      observer.observe(el);
    });
  }

  setupParallaxEffect() {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height } = heroSection.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;

      heroSection.style.setProperty("--mouse-x", `${x}px`);
      heroSection.style.setProperty("--mouse-y", `${y}px`);

      document.querySelectorAll(".platform-check").forEach((el, index) => {
        const speed = 0.02 + (index % 3) * 0.01;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    document
      .querySelectorAll(".fade-in-up, .fade-in-right, .platform-check")
      .forEach((el) => {
        observer.observe(el);
      });
  }

  setupHoverEffects() {
    const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

    buttons.forEach((button) => {
      button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--mouse-x", `${x}px`);
        button.style.setProperty("--mouse-y", `${y}px`);
      });

      button.addEventListener("mouseleave", () => {
        button.style.setProperty("--mouse-x", "0px");
        button.style.setProperty("--mouse-y", "0px");
      });
    });
  }
}

export default Hero;
