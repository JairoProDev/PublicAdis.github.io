// Hero Component
function loadHero() {
  const hero = `
    <section id="mainSection" class="pageSection hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title animated-text">
            Haz Crecer Tu Negocio con
            <span class="hero-title-highlight">PublicAdis</span>
          </h1>
          <p class="hero-subtitle fade-in-up">
            La plataforma publicitaria más completa de Cusco que impulsa tus
            ventas en 7 canales diferentes
          </p>

          <div class="hero-features fade-in-up delay-1">
            <div class="hero-feature">
              <i class="fa-solid fa-check-circle"></i>
              <span>Multiplica tus clientes potenciales</span>
            </div>
            <div class="hero-feature">
              <i class="fa-solid fa-check-circle"></i>
              <span>Llega a más personas interesadas</span>
            </div>
            <div class="hero-feature">
              <i class="fa-solid fa-check-circle"></i>
              <span>Aumenta tus ventas rápidamente</span>
            </div>
          </div>

          <div id="buttonsContainer" class="fade-in-up delay-2">
            <button type="submit" class="appButton primary-btn pulse-animation">
              <a href="https://wa.me/937054328" class="appButtonLink">
                Publicar Anuncio
              </a>
              <i class="fa-solid fa-arrow-right"></i>
            </button>

            <button class="appButton secondary-btn">
              <a
                href="https://play.google.com/store/apps/details?id=buscadis.publicadis&pli=1"
                class="appButtonLink"
              >
                Descargar App
              </a>
              <i class="fa-brands fa-google-play"></i>
            </button>
          </div>
        </div>

        <div class="hero-image fade-in-right">
          <div class="floating-elements">
            <span class="floating-element" style="--delay: 0s; --x: -20px; --y: -10px">
              <i class="fa-solid fa-bullhorn"></i>
            </span>
            <span class="floating-element" style="--delay: 2s; --x: 25px; --y: 15px">
              <i class="fa-solid fa-chart-line"></i>
            </span>
            <span class="floating-element" style="--delay: 4s; --x: -15px; --y: 20px">
              <i class="fa-solid fa-mobile-screen"></i>
            </span>
            <span class="floating-element" style="--delay: 1s; --x: 20px; --y: -15px">
              <i class="fa-solid fa-users"></i>
            </span>
          </div>
          
          <div class="device-mockup">
            <img
              src="./src/assets/images/PublicAdis_web_app.png"
              alt="PublicAdis Web Platform"
              class="device-screen main-device"
            />
            <img
              src="./src/assets/images/phone_application.png"
              alt="PublicAdis Mobile App"
              class="device-screen mobile-device"
            />
          </div>
          
          <div class="hero-platforms">
            <span class="platform-badge" data-tooltip="Publicación en nuestra página web">Web</span>
            <span class="platform-badge" data-tooltip="Disponible en Google Play">Android</span>
            <span class="platform-badge" data-tooltip="Exposición en local físico">Local</span>
            <span class="platform-badge" data-tooltip="Publicación en Facebook">Facebook</span>
            <span class="platform-badge" data-tooltip="Videos promocionales en TikTok">TikTok</span>
            <span class="platform-badge" data-tooltip="Difusión en grupos de WhatsApp">WhatsApp</span>
            <span class="platform-badge" data-tooltip="Aparición en revista digital">Revista</span>
          </div>
          
          <div class="scroll-indicator">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <p>Desliza para ver más</p>
          </div>
        </div>
      </div>
      
      <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,224C672,235,768,245,864,240C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  `;

  document.getElementById("heroContainer").innerHTML = hero;

  initHeroAnimations();
}

function initHeroAnimations() {
  // Add scroll-triggered animations
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

  // Platform badges tooltip functionality
  const platformBadges = document.querySelectorAll(".platform-badge");
  platformBadges.forEach((badge) => {
    badge.addEventListener("mouseover", () => {
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = badge.getAttribute("data-tooltip");
      badge.appendChild(tooltip);
    });

    badge.addEventListener("mouseout", () => {
      const tooltip = badge.querySelector(".tooltip");
      if (tooltip) {
        badge.removeChild(tooltip);
      }
    });
  });

  // Scroll indicator click event
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const servicesSection = document.getElementById("servicesSection");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
