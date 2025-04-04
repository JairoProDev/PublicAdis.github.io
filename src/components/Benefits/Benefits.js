export class Benefits {
  constructor() {
    this.benefits = [
      {
        icon: 'fa-bullseye',
        title: 'Segmentación Precisa',
        description:
          'Llegue exactamente a su público objetivo con nuestro sistema de segmentación avanzado basado en intereses, ubicación y comportamiento.',
        color: 'blue',
      },
      {
        icon: 'fa-chart-line',
        title: 'ROI Maximizado',
        description:
          'Obtenga el máximo retorno de su inversión publicitaria con campañas optimizadas que generan conversiones reales y medibles.',
        color: 'green',
      },
      {
        icon: 'fa-globe',
        title: 'Alcance Multicanal',
        description:
          'Su mensaje llegará a través de web, aplicación móvil, revista digital, redes sociales, grupos de WhatsApp y puntos físicos.',
        color: 'orange',
      },
      {
        icon: 'fa-bolt',
        title: 'Resultados Inmediatos',
        description:
          'Comience a ver resultados desde el primer día gracias a nuestra red establecida de usuarios activos en busca de sus productos y servicios.',
        color: 'purple',
      },
      {
        icon: 'fa-cogs',
        title: 'Automatización Total',
        description:
          'Nuestros sistemas automatizados gestionan sus campañas 24/7, optimizando presupuesto y rendimiento sin intervención manual constante.',
        color: 'teal',
      },
      {
        icon: 'fa-chart-pie',
        title: 'Análisis Avanzado',
        description:
          'Acceda a métricas detalladas y análisis en tiempo real para entender el desempeño de sus campañas y tomar decisiones informadas.',
        color: 'red',
      },
      {
        icon: 'fa-users',
        title: 'Comunidad Activa',
        description:
          'Aproveche nuestra comunidad de más de 50,000 usuarios activos mensuales en Cusco, todos ellos buscando activamente productos y servicios.',
        color: 'amber',
      },
      {
        icon: 'fa-shield-alt',
        title: 'Protección Antifrauide',
        description:
          'Nuestro sistema de detección de fraude garantiza que su presupuesto publicitario se invierta exclusivamente en interacciones legítimas.',
        color: 'indigo',
      },
    ];
  }

  init() {
    this.render();
    this.addAnimations();
  }

  render() {
    const container =
      document.getElementById('benefitsContainer') || document.querySelector('#benefits');
    if (!container) return;

    container.innerHTML = `
      <section id="benefits" class="benefits-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Ventajas de Publicitar con Nosotros</h2>
            <p class="section-subtitle">Descubra por qué cientos de negocios eligen PublicAdis para sus estrategias publicitarias</p>
          </div>
          
          <div class="benefits-grid">
            ${this.benefits
              .map(
                (benefit, index) => `
              <div class="benefit-card benefit-${benefit.color}" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="benefit-icon">
                  <i class="fas ${benefit.icon}"></i>
                </div>
                <h3 class="benefit-title">${benefit.title}</h3>
                <p class="benefit-description">${benefit.description}</p>
              </div>
            `
              )
              .join('')}
          </div>
          
          <div class="benefits-stats">
            <div class="stat-item">
              <span class="stat-value">+380%</span>
              <span class="stat-label">ROI promedio</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">50K+</span>
              <span class="stat-label">Usuarios activos</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">+200%</span>
              <span class="stat-label">Incremento en ventas</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">7</span>
              <span class="stat-label">Canales integrados</span>
            </div>
          </div>
          
          <div class="benefits-cta">
            <h3>Potencie su negocio con nuestra plataforma publicitaria</h3>
            <a href="#contacto" class="btn btn-primary">Solicitar Demostración</a>
          </div>
        </div>
        
        <div class="benefits-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f8f9fa" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
    `;
  }

  addAnimations() {
    // Implementar animaciones en scroll para los benefit cards
    const cards = document.querySelectorAll('.benefit-card');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card, index) => {
      // Añadir delay progresivo para animar en secuencia
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Animar las estadísticas con contador
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateStats();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.benefits-stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

  animateStats() {
    const statValues = document.querySelectorAll('.stat-value');

    statValues.forEach(statValue => {
      const value = statValue.textContent;
      let finalValue = value;
      let startValue = 0;
      let duration = 2000; // 2 segundos

      // Manejar valores con + o K
      let isPlus = false;
      let isK = false;
      let targetValue = finalValue;

      if (finalValue.includes('+')) {
        isPlus = true;
        targetValue = finalValue.replace('+', '');
      }

      if (finalValue.includes('K')) {
        isK = true;
        targetValue = parseFloat(targetValue.replace('K', '')) * 1000;
      }

      // Eliminar comas para cálculos
      targetValue = parseFloat(targetValue.replace(/,/g, ''));

      const increment = targetValue / (duration / 16);
      let currentValue = 0;

      const counterTimer = setInterval(() => {
        currentValue += increment;

        if (currentValue >= targetValue) {
          clearInterval(counterTimer);
          statValue.textContent = finalValue;
        } else {
          let displayValue = Math.floor(currentValue);

          if (isK) {
            displayValue = (displayValue / 1000).toFixed(0) + 'K';
          }

          if (isPlus) {
            displayValue = '+' + displayValue;
          }

          statValue.textContent = displayValue;
        }
      }, 16);
    });
  }
}
