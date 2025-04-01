// Hero Component
function loadHero() {
  const hero = `
    <section id="heroSection" class="pageSection hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title fade-in-up">
            Haz Crecer<br>
            Tu Negocio<br>
            con <span class="hero-title-highlight">PublicAdis</span>
          </h1>
          
          <p class="hero-subtitle fade-in-up delay-1">
            La plataforma publicitaria más completa de Cusco que impulsa tus ventas en 7 canales diferentes
          </p>
          
          <div class="hero-features fade-in-up delay-2">
            <div class="hero-feature">
              <i class="fa-solid fa-users-viewfinder"></i>
              <span>Multiplica tus clientes potenciales</span>
            </div>
            <div class="hero-feature">
              <i class="fa-solid fa-bullseye"></i>
              <span>Llega a más personas interesadas</span>
            </div>
            <div class="hero-feature">
              <i class="fa-solid fa-chart-line"></i>
              <span>Aumenta tus ventas rápidamente</span>
            </div>
          </div>
          
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
          </div>
          
          <div class="hero-platforms">
            <div class="platform-badge">Web</div>
            <div class="platform-badge">Android</div>
            <div class="platform-badge">iOS</div>
            <div class="platform-badge">Redes Sociales</div>
            <div class="platform-badge">Local Físico</div>
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
    </section>
  `;

  document.getElementById("heroContainer").innerHTML = hero;

  initHeroInteractions();
}

function initHeroInteractions() {
  // Animate elements when they enter the viewport
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

  // Platform badges tooltip functionality
  const platformBadges = document.querySelectorAll(".platform-badge");

  platformBadges.forEach((badge) => {
    badge.addEventListener("mouseenter", () => {
      const tooltipText = getTooltipText(badge.textContent.trim());

      // Remove any existing tooltips
      const existingTooltip = document.querySelector(".tooltip");
      if (existingTooltip) {
        existingTooltip.remove();
      }

      // Create new tooltip
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = tooltipText;

      // Append tooltip to badge
      badge.appendChild(tooltip);
    });

    badge.addEventListener("mouseleave", () => {
      const tooltip = badge.querySelector(".tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll indicator functionality
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });

    // Hide scroll indicator when scrolling down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = "0";
      } else {
        scrollIndicator.style.opacity = "0.8";
      }
    });
  }
}

function getTooltipText(platform) {
  switch (platform) {
    case "Web":
      return "Publicación en nuestra plataforma web";
    case "Android":
      return "Disponible en app para Android";
    case "iOS":
      return "Disponible en app para iPhone";
    case "Redes Sociales":
      return "Promoción en Facebook, Instagram y TikTok";
    case "Local Físico":
      return "Anuncios en nuestro local físico en Cusco";
    default:
      return "Plataforma publicitaria integral";
  }
}
