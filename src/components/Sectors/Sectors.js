// Sectors Component
function loadSectors() {
  const sectors = `
      <section id="sectorsSection" class="pageSection sectors-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title fade-in-up">
              Soluciones para <span class="section-title-highlight">Todos los Sectores</span>
            </h2>
            <p class="section-subtitle fade-in-up">
              Ofrecemos herramientas y servicios especializados para cada tipo de industria
            </p>
          </div>
          
          <div class="sectors-grid">
            <!-- Mascotas Sector -->
            <div class="sector-card fade-in-up">
              <div class="sector-icon">
                <i class="fa-solid fa-paw"></i>
              </div>
              <h3 class="sector-title">Mascotas</h3>
              <p class="sector-description">
                Impulsa tu negocio veterinario, tienda de mascotas o servicios para animales con soluciones publicitarias efectivas.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+210% incremento en ventas</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+8K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Educación Sector -->
            <div class="sector-card fade-in-up delay-1">
              <div class="sector-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 class="sector-title">Educación</h3>
              <p class="sector-description">
                Aumenta la visibilidad de tu instituto, academia o servicios educativos con estrategias digitales efectivas.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+175% incremento en matrículas</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+12K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Turismo Sector -->
            <div class="sector-card fade-in-up delay-2">
              <div class="sector-icon">
                <i class="fa-solid fa-mountain-sun"></i>
              </div>
              <h3 class="sector-title">Turismo</h3>
              <p class="sector-description">
                Promociona tus tours, hoteles o servicios turísticos llegando al público adecuado en el momento preciso.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+230% incremento en reservas</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+15K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Gastronomía Sector -->
            <div class="sector-card fade-in-up delay-3">
              <div class="sector-icon">
                <i class="fa-solid fa-utensils"></i>
              </div>
              <h3 class="sector-title">Gastronomía</h3>
              <p class="sector-description">
                Llena tu restaurante, cafetería o servicio de catering con campañas publicitarias atractivas y efectivas.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+195% incremento en clientes</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+10K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Belleza Sector -->
            <div class="sector-card fade-in-up">
              <div class="sector-icon">
                <i class="fa-solid fa-spa"></i>
              </div>
              <h3 class="sector-title">Belleza</h3>
              <p class="sector-description">
                Destaca tu salón de belleza, spa o servicios estéticos con anuncios que atraigan a tu público ideal.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+185% incremento en citas</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+9K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Salud Sector -->
            <div class="sector-card fade-in-up delay-1">
              <div class="sector-icon">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 class="sector-title">Salud</h3>
              <p class="sector-description">
                Promociona tus servicios médicos, clínicas o consultorios con estrategias que generen confianza y visibilidad.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+165% incremento en pacientes</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+11K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Moda Sector -->
            <div class="sector-card fade-in-up delay-2">
              <div class="sector-icon">
                <i class="fa-solid fa-shirt"></i>
              </div>
              <h3 class="sector-title">Moda</h3>
              <p class="sector-description">
                Impulsa tu tienda de ropa, boutique o marca de moda con publicidad que conecte con los amantes de la moda.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+205% incremento en ventas</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+13K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            
            <!-- Tecnología Sector -->
            <div class="sector-card fade-in-up delay-3">
              <div class="sector-icon">
                <i class="fa-solid fa-microchip"></i>
              </div>
              <h3 class="sector-title">Tecnología</h3>
              <p class="sector-description">
                Aumenta la visibilidad de tu tienda de tecnología, servicio técnico o soluciones digitales con publicidad efectiva.
              </p>
              <div class="sector-metrics">
                <div class="sector-metric">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>+220% incremento en ventas</span>
                </div>
                <div class="sector-metric">
                  <i class="fa-solid fa-users"></i>
                  <span>+14K alcance mensual</span>
                </div>
              </div>
              <a href="#servicesSection" class="sector-button">
                Ver Soluciones <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          
          <div class="sectors-cta">
            <div class="cta-container">
              <div class="cta-content">
                <h3>¿Tu sector no está en la lista?</h3>
                <p>Sin importar a qué tipo de industria pertenezcas, tenemos soluciones específicas para ti.</p>
              </div>
              <a href="https://wa.me/937054328" class="cta-button" target="_blank" rel="noopener">
                <i class="fa-solid fa-message"></i> Consulta Personalizada
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

  document.getElementById('sectorsContainer').innerHTML = sectors;

  initSectorsInteractions();
}

function initSectorsInteractions() {
  // Scroll-triggered animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all animatable elements
  document.querySelectorAll('.fade-in-up, .fade-in-right').forEach(el => {
    observer.observe(el);
  });

  // Add hover effects
  const sectorCards = document.querySelectorAll('.sector-card');

  sectorCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover');
    });
  });
}
