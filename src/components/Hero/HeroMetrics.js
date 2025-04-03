class HeroMetrics {
  constructor() {
    this.metrics = [
      {
        icon: "fa-chart-line",
        value: 300,
        suffix: "%",
        label: "Multiplicación de Clientes",
        color: "var(--primary-blue)",
      },
      {
        icon: "fa-users",
        value: 5000,
        suffix: "+",
        label: "Interesados Mensuales",
        color: "var(--primary-orange)",
      },
      {
        icon: "fa-arrow-trend-up",
        value: 200,
        suffix: "%",
        label: "Aumento en Ventas",
        color: "var(--premium-gold)",
      },
    ];
    this.animationDuration = 2000;
    this.animationStarted = false;
  }

  init() {
    this.render();
    this.setupIntersectionObserver();
  }

  render() {
    const metricsContainer = document.querySelector(".hero-metrics");
    if (!metricsContainer) return;

    metricsContainer.innerHTML = `
      <div class="metrics-grid">
        ${this.metrics
          .map(
            (metric) => `
          <div class="hero-metric" data-value="${metric.value}">
            <div class="metric-icon" style="color: ${metric.color}">
              <i class="fa-solid ${metric.icon}"></i>
            </div>
            <div class="metric-value" style="color: ${metric.color}">
              <span class="counter">0</span>${metric.suffix}
            </div>
            <div class="metric-label">${metric.label}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animationStarted) {
            this.animationStarted = true;
            this.animateMetrics();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const metricsContainer = document.querySelector(".metrics-grid");
    if (metricsContainer) {
      observer.observe(metricsContainer);
    }
  }

  animateMetrics() {
    const metrics = document.querySelectorAll(".hero-metric");

    metrics.forEach((metric) => {
      const counter = metric.querySelector(".counter");
      const targetValue = parseInt(metric.dataset.value);
      const increment = targetValue / (this.animationDuration / 16);
      let currentValue = 0;

      const updateCounter = () => {
        currentValue = Math.min(currentValue + increment, targetValue);
        counter.textContent = Math.round(currentValue);

        if (currentValue < targetValue) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  }
}

export default HeroMetrics;
