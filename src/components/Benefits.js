// Benefits Component
function loadBenefits() {
  const benefits = `
    <section id="benefitsSection" class="pageSection benefits-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title animate-on-scroll">
            Beneficios de Anunciarte con
            <span class="section-title-highlight">PublicAdis</span>
          </h2>
          <p class="section-subtitle animate-on-scroll">
            Descubre por qué los negocios en Cusco prefieren nuestra plataforma
          </p>
        </div>

        <div class="benefits-grid">
          <!-- Benefit Card 1 -->
          <div class="benefit-card animate-on-scroll">
            <div class="benefit-icon-container">
              <i class="fa-solid fa-bullhorn"></i>
            </div>
            <h3 class="benefit-title">Exposición en 7 Canales Diferentes</h3>
            <p class="benefit-description">
              Tu anuncio aparecerá en nuestra web, app, local físico,
              Facebook, TikTok, WhatsApp y revista digital.
            </p>
            <div class="benefit-metrics">
              <div class="metric">
                <span class="metric-value">7x</span>
                <span class="metric-label">Más alcance</span>
              </div>
            </div>
            <div class="benefit-icon-bg"></div>
          </div>

          <!-- Benefit Card 2 -->
          <div class="benefit-card animate-on-scroll">
            <div class="benefit-icon-container">
              <i class="fa-solid fa-user-plus"></i>
            </div>
            <h3 class="benefit-title">
              Audiencia Local Altamente Interesada
            </h3>
            <p class="benefit-description">
              Conecta con personas que realmente buscan tus productos o
              servicios en Cusco y alrededores.
            </p>
            <div class="benefit-metrics">
              <div class="metric">
                <span class="metric-value">+5K</span>
                <span class="metric-label">Usuarios diarios</span>
              </div>
            </div>
            <div class="benefit-icon-bg"></div>
          </div>

          <!-- Benefit Card 3 -->
          <div class="benefit-card animate-on-scroll">
            <div class="benefit-icon-container">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <h3 class="benefit-title">Incremento de Ventas Demostrado</h3>
            <p class="benefit-description">
              Nuestros anunciantes reportan un aumento significativo en
              consultas y ventas tras publicar.
            </p>
            <div class="benefit-metrics">
              <div class="metric">
                <span class="metric-value">+40%</span>
                <span class="metric-label">Ventas promedio</span>
              </div>
            </div>
            <div class="benefit-icon-bg"></div>
          </div>

          <!-- Benefit Card 4 -->
          <div class="benefit-card animate-on-scroll">
            <div class="benefit-icon-container">
              <i class="fa-solid fa-clock"></i>
            </div>
            <h3 class="benefit-title">Publicación Simple y Rápida</h3>
            <p class="benefit-description">
              Crea y publica tu anuncio en menos de 5 minutos, desde cualquier
              dispositivo y a cualquier hora.
            </p>
            <div class="benefit-metrics">
              <div class="metric">
                <span class="metric-value">5 min</span>
                <span class="metric-label">Tiempo promedio</span>
              </div>
            </div>
            <div class="benefit-icon-bg"></div>
          </div>

          <!-- Benefit Card 5 -->
          <div class="benefit-card animate-on-scroll">
            <div class="benefit-icon-container">
              <i class="fa-solid fa-hand-pointer"></i>
            </div>
            <h3 class="benefit-title">Control Total de tus Anuncios</h3>
            <p class="benefit-description">
              Gestiona, edita o actualiza tus anuncios cuando quieras. Tú
              tienes el control total.
            </p>
            <div class="benefit-metrics">
              <div class="metric">
                <span class="metric-value">100%</span>
                <span class="metric-label">Control</span>
              </div>
            </div>
            <div class="benefit-icon-bg"></div>
          </div>

          <!-- Benefit Card 6 -->
          <div class="benefit-card animate-on-scroll">
            <div class="benefit-icon-container">
              <i class="fa-solid fa-comments-dollar"></i>
            </div>
            <h3 class="benefit-title">Retorno de Inversión Superior</h3>
            <p class="benefit-description">
              El mejor ROI del mercado publicitario local. Inversión mínima,
              resultados máximos.
            </p>
            <div class="benefit-metrics">
              <div class="metric">
                <span class="metric-value">3.5x</span>
                <span class="metric-label">ROI promedio</span>
              </div>
            </div>
            <div class="benefit-icon-bg"></div>
          </div>
        </div>

        <div class="benefits-cta animate-on-scroll">
          <a href="https://wa.me/937054328" class="btn-cta">
            Comienza a Anunciar Ahora
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="benefits-testimonials">
          <h3 class="testimonials-title animate-on-scroll">Lo que dicen nuestros usuarios</h3>
          
          <div class="testimonials-slider">
            <div class="testimonial-card animate-on-scroll">
              <div class="testimonial-content">
                <div class="testimonial-quote">
                  <i class="fa-solid fa-quote-left"></i>
                </div>
                <p class="testimonial-text">
                  Desde que empecé a publicar mis propiedades en PublicAdis, logré alquilar dos departamentos en menos de una semana. El alcance es impresionante.
                </p>
                <div class="testimonial-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <div class="testimonial-author">
                <div class="testimonial-author-image">
                  <img src="./src/assets/images/testimonials/user1.jpg" alt="Carlos Mendoza" onerror="this.src='https://ui-avatars.com/api/?name=C+M&background=0D8ABC&color=fff'">
                </div>
                <div class="testimonial-author-info">
                  <h4 class="testimonial-author-name">Carlos Mendoza</h4>
                  <p class="testimonial-author-title">Agente Inmobiliario</p>
                </div>
              </div>
            </div>
            
            <div class="testimonial-card animate-on-scroll">
              <div class="testimonial-content">
                <div class="testimonial-quote">
                  <i class="fa-solid fa-quote-left"></i>
                </div>
                <p class="testimonial-text">
                  Encontré a mi equipo de trabajo gracias a los anuncios de empleo. La plataforma es muy fácil de usar y los resultados son rápidos.
                </p>
                <div class="testimonial-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-alt"></i>
                </div>
              </div>
              <div class="testimonial-author">
                <div class="testimonial-author-image">
                  <img src="./src/assets/images/testimonials/user2.jpg" alt="María Flores" onerror="this.src='https://ui-avatars.com/api/?name=M+F&background=FF7A00&color=fff'">
                </div>
                <div class="testimonial-author-info">
                  <h4 class="testimonial-author-name">María Flores</h4>
                  <p class="testimonial-author-title">Dueña de Restaurante</p>
                </div>
              </div>
            </div>
            
            <div class="testimonial-card animate-on-scroll">
              <div class="testimonial-content">
                <div class="testimonial-quote">
                  <i class="fa-solid fa-quote-left"></i>
                </div>
                <p class="testimonial-text">
                  Vendí mi auto en 3 días gracias a PublicAdis. Lo mejor es que pude publicarlo en todos los canales con un solo clic. Muy recomendado.
                </p>
                <div class="testimonial-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <div class="testimonial-author">
                <div class="testimonial-author-image">
                  <img src="./src/assets/images/testimonials/user3.jpg" alt="Juan Perez" onerror="this.src='https://ui-avatars.com/api/?name=J+P&background=104891&color=fff'">
                </div>
                <div class="testimonial-author-info">
                  <h4 class="testimonial-author-name">Juan Perez</h4>
                  <p class="testimonial-author-title">Ingeniero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="benefits-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="white" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  `;

  document.getElementById("benefitsContainer").innerHTML = benefits;

  initBenefitsAnimations();
}

function initBenefitsAnimations() {
  // Initialize animations when they enter viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");

          // If we're observing the metrics sections, start counter animations
          if (entry.target.classList.contains("benefit-card")) {
            const metricValue = entry.target.querySelector(".metric-value");
            if (metricValue) {
              animateCounter(metricValue);
            }
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Simple testimonial slider
  initTestimonialSlider();
}

function animateCounter(element) {
  const value = element.textContent;
  let prefix = "";
  let targetValue = 0;
  let suffix = "";

  // Parse the value
  if (value.includes("+")) {
    prefix = "+";
    targetValue = parseInt(value.replace("+", ""));
  } else if (value.includes("x")) {
    suffix = "x";
    targetValue = parseInt(value.replace("x", ""));
  } else if (value.includes("%")) {
    suffix = "%";
    targetValue = parseInt(value.replace("%", ""));
  } else {
    targetValue = parseInt(value);
  }

  // If we couldn't parse it or it's 0, just return
  if (isNaN(targetValue) || targetValue === 0) return;

  // Animate the counter
  let currentValue = 0;
  const duration = 1500; // ms
  const interval = 20; // ms
  const increment = targetValue / (duration / interval);

  const counter = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(counter);
    }

    element.textContent = prefix + Math.floor(currentValue) + suffix;
  }, interval);
}

function initTestimonialSlider() {
  const slider = document.querySelector(".testimonials-slider");
  if (!slider) return;

  const cards = slider.querySelectorAll(".testimonial-card");
  if (cards.length <= 1) return;

  let currentIndex = 0;

  // Add navigation if we have multiple cards
  const navigation = document.createElement("div");
  navigation.className = "testimonial-navigation";

  const prevButton = document.createElement("button");
  prevButton.className = "nav-button prev-button";
  prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

  const nextButton = document.createElement("button");
  nextButton.className = "nav-button next-button";
  nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

  navigation.appendChild(prevButton);
  navigation.appendChild(nextButton);

  slider.parentNode.appendChild(navigation);

  // Initialize indicators
  const indicators = document.createElement("div");
  indicators.className = "testimonial-indicators";

  for (let i = 0; i < cards.length; i++) {
    const indicator = document.createElement("span");
    indicator.className = i === 0 ? "indicator active" : "indicator";
    indicator.setAttribute("data-index", i);
    indicators.appendChild(indicator);

    // Add click event to indicators
    indicator.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  slider.parentNode.appendChild(indicators);

  // Add click events to navigation buttons
  prevButton.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });

  // Setup initial state
  updateSlider();

  // Auto-slide every 5 seconds
  let slideInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);

  // Pause auto-slide on hover
  slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  });

  // Function to go to a specific slide
  function goToSlide(index) {
    // Handle wrapping
    if (index < 0) {
      index = cards.length - 1;
    } else if (index >= cards.length) {
      index = 0;
    }

    currentIndex = index;
    updateSlider();
  }

  // Update slider display
  function updateSlider() {
    // Update cards
    cards.forEach((card, i) => {
      card.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
      card.classList.toggle("active", i === currentIndex);
    });

    // Update indicators
    document
      .querySelectorAll(".testimonial-indicators .indicator")
      .forEach((indicator, i) => {
        indicator.classList.toggle("active", i === currentIndex);
      });
  }
}
