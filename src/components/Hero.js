// Hero Component
function loadHero() {
  const hero = `
    <section id="heroSection" class="pageSection hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title fade-in-up">
            <span id="dynamicTitle">Haz Crecer Tu Negocio con</span> <span class="hero-title-highlight">PublicAdis</span>
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
            <div class="platform-check">
              <i class="fa-solid fa-check-circle"></i>
              <span>Campañas por Email</span>
            </div>
          </div>
          
          <div class="hero-metrics fade-in-up delay-2">
            <div class="hero-metric">
              <i class="fa-solid fa-chart-line metric-icon"></i>
              <span class="metric-number">+380%</span>
              <span class="metric-text">Multiplica tus clientes potenciales</span>
            </div>
            <div class="hero-metric">
              <i class="fa-solid fa-users metric-icon"></i>
              <span class="metric-number">+25k</span>
              <span class="metric-text">Personas interesadas al mes</span>
            </div>
            <div class="hero-metric">
              <i class="fa-solid fa-sack-dollar metric-icon"></i>
              <span class="metric-number">+200%</span>
              <span class="metric-text">Incremento en ventas promedio</span>
            </div>
          </div>
          
          <div id="buttonsContainer" class="fade-in-up delay-2">
            <a href="#servicesSection" class="primary-btn pulse-animation">
              Explorar Servicios <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#businessToolsSection" class="secondary-btn gold-accent">
              Herramientas Gratuitas <i class="fa-solid fa-tools"></i>
            </a>
          </div>
        </div>
        
        <div class="hero-image fade-in-right">
          <div class="floating-elements">
            <div class="floating-element">
              <i class="fa-solid fa-building"></i>
            </div>
            <div class="floating-element">
              <i class="fa-solid fa-car"></i>
            </div>
            <div class="floating-element">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="floating-element">
              <i class="fa-solid fa-store"></i>
            </div>
          </div>
          
          <div class="hero-slider">
            <div class="slider-container" id="heroSlider">
              <div class="slide slide-active">
                <div class="slide-content">
                  <div class="device-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                      alt="PublicAdis Desktop Application" 
                      class="device-screen main-device"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                      alt="PublicAdis Mobile Application" 
                      class="device-screen mobile-device"
                    />
                    <div class="slide-overlay">
                      <h3>Plataforma Web</h3>
                      <p>Gestiona tus anuncios en un solo lugar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="slide-content">
                  <div class="device-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                      alt="PublicAdis Marketing Dashboard" 
                      class="device-screen main-device"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
                      alt="PublicAdis Marketing Mobile App" 
                      class="device-screen mobile-device"
                    />
                    <div class="slide-overlay">
                      <h3>Dashboard Analítico</h3>
                      <p>Métricas detalladas de tus campañas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="slide-content">
                  <div class="device-mockup">
                    <img 
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="PublicAdis Analysis Tools" 
                      class="device-screen main-device"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1616499370260-485b3e5ed3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" 
                      alt="PublicAdis Analysis Mobile App" 
                      class="device-screen mobile-device"
                    />
                    <div class="slide-overlay">
                      <h3>Herramientas Avanzadas</h3>
                      <p>Potencia tu estrategia publicitaria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-nav" id="sliderNav">
              <div class="slider-dot active" data-slide="0"></div>
              <div class="slider-dot" data-slide="1"></div>
              <div class="slider-dot" data-slide="2"></div>
            </div>
            <div class="slider-arrows">
              <div class="slider-arrow" id="prevSlide">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div class="slider-arrow" id="nextSlide">
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
     <!-- 
      <div class="hero-stats">
        <div class="stats-container">
          <div class="stat-item fade-in-up">
            <div class="stat-icon"><i class="fa-solid fa-bullhorn"></i></div>
            <div class="stat-value">5,893+</div>
            <div class="stat-label">Anuncios publicados</div>
          </div>
          <div class="stat-item fade-in-up delay-1">
            <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
            <div class="stat-value">93%</div>
            <div class="stat-label">Tasa de satisfacción</div>
          </div>
          <div class="stat-item fade-in-up delay-2">
            <div class="stat-icon"><i class="fa-solid fa-rocket"></i></div>
            <div class="stat-value">245%</div>
            <div class="stat-label">ROI promedio</div>
          </div>
          <div class="stat-item fade-in-up delay-3">
            <div class="stat-icon"><i class="fa-solid fa-eye"></i></div>
            <div class="stat-value">42k+</div>
            <div class="stat-label">Visualizaciones diarias</div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <p>Desplaza para ver más</p>
      </div>
      -->
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

  document.getElementById("heroContainer").innerHTML = hero;

  initHeroInteractions();
}

function initHeroInteractions() {
  // Configurar el título dinámico rotativo
  const dynamicTexts = [
    "Haz Crecer Tu Negocio con",
    "Multiplica Tus Ventas con",
    "Aumenta Tu Visibilidad con",
    "Conquista Nuevos Clientes con",
    "Potencia Tu Marca con",
    "Expande Tu Alcance con",
    "Transforma Tu Presencia con",
    "Maximiza Tu Inversión con",
  ];

  let currentTextIndex = 0;
  const dynamicTitleElement = document.getElementById("dynamicTitle");

  // Iniciar la rotación del título
  setInterval(() => {
    // Fade out
    dynamicTitleElement.style.opacity = "0";

    setTimeout(() => {
      // Cambiar texto
      currentTextIndex = (currentTextIndex + 1) % dynamicTexts.length;
      dynamicTitleElement.textContent = dynamicTexts[currentTextIndex];

      // Fade in
      dynamicTitleElement.style.opacity = "1";
    }, 500);
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

  // Initialize hero slider with improved animations
  initHeroSlider();

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

  // Add parallax effect to floating elements
  window.addEventListener("mousemove", (e) => {
    const floatingElements = document.querySelectorAll(".floating-element");

    floatingElements.forEach((element, index) => {
      const speed = index % 2 === 0 ? 0.03 : 0.02;
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;

      element.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Add counter animation to stat values
  animateCounters();
}

function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");

  let currentSlide = 0;
  let slideInterval;
  const slideDelay = 5000; // 5 seconds between slides

  function goToSlide(index) {
    // Deactivate current slide
    slides.forEach((slide) => {
      slide.classList.remove("slide-active");
      slide.classList.remove("slide-from-left");
      slide.classList.remove("slide-from-right");
    });

    dots.forEach((dot) => dot.classList.remove("active"));

    // Set new current slide
    const direction = index > currentSlide ? "right" : "left";

    // Add appropriate animation class
    if (
      direction === "right" ||
      (currentSlide === slides.length - 1 && index === 0)
    ) {
      slides[index].classList.add("slide-from-right");
    } else {
      slides[index].classList.add("slide-from-left");
    }

    // Activate new slide
    slides[index].classList.add("slide-active");
    dots[index].classList.add("active");

    // Update current slide index
    currentSlide = index;

    // Reset auto slide interval
    resetInterval();
  }

  function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideDelay);
  }

  // Event Listeners
  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Touch swipe functionality
  handleSwipe();

  // Start auto slide
  startAutoSlide();

  // Add slide transition animation effects
  slides.forEach((slide) => {
    slide.addEventListener("transitionend", () => {
      slide.classList.add("animation-complete");
    });
  });
}

function handleSwipe() {
  const slider = document.querySelector(".hero-slider");
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  });

  function handleSwipeGesture() {
    if (touchEndX < touchStartX - 50) {
      // Swiped left - show next slide
      document.getElementById("nextSlide").click();
    } else if (touchEndX > touchStartX + 50) {
      // Swiped right - show previous slide
      document.getElementById("prevSlide").click();
    }
  }
}

function animateCounters() {
  const statValues = document.querySelectorAll(".stat-value");

  statValues.forEach((statValue) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const finalValue = statValue.textContent;
            let startValue = 0;
            let duration = 2000; // 2 seconds

            // Handle special values like 5,893+ or 42k+
            let isPlus = false;
            let isK = false;
            let targetValue = finalValue;

            if (finalValue.includes("+")) {
              isPlus = true;
              targetValue = finalValue.replace("+", "");
            }

            if (finalValue.includes("k")) {
              isK = true;
              targetValue = parseFloat(targetValue.replace("k", "")) * 1000;
            }

            // Remove commas for calculation
            targetValue = parseFloat(targetValue.replace(/,/g, ""));

            // Animation step
            const increment = targetValue / (duration / 16);
            let currentValue = 0;

            const counterTimer = setInterval(() => {
              currentValue += increment;

              if (currentValue >= targetValue) {
                clearInterval(counterTimer);
                statValue.textContent = finalValue; // Show original formatted text
              } else {
                // Format according to original format
                let displayValue = Math.floor(currentValue);

                if (isK) {
                  displayValue = (displayValue / 1000).toFixed(1) + "k";
                } else if (displayValue > 999) {
                  displayValue = displayValue.toLocaleString();
                }

                if (isPlus) {
                  displayValue += "+";
                }

                statValue.textContent = displayValue;
              }
            }, 16);

            // Unobserve after animation started
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statValue);
  });
}

function getTooltipText(platform) {
  switch (platform) {
    case "Sitio Web":
      return "Destaca en nuestro sitio web con más de 80,000 visitas mensuales.";
    case "Aplicación Móvil":
      return "Llega a más de 15,000 usuarios activos en nuestra aplicación móvil.";
    case "Revista Digital":
      return "Aparece en nuestra revista digital con más de 5,000 lectores mensuales.";
    case "Redes Sociales":
      return "Promociona en nuestras redes sociales con más de 50,000 seguidores.";
    case "Locales Presenciales":
      return "Exhibe tu negocio en nuestros 12 puntos físicos en Cusco.";
    case "Grupos de WhatsApp":
      return "Llega a más de 30,000 personas en nuestros grupos exclusivos de WhatsApp.";
    default:
      return "Plataforma publicitaria de alto impacto";
  }
}
