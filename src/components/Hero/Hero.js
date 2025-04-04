import { HeroSlider } from "./HeroSlider.js";
import { HeroMetrics } from "./HeroMetrics.js";
import { HeroFloatingElements } from "./HeroFloatingElements.js";

export class Hero {
  constructor() {
    this.slider = new HeroSlider();
    this.metrics = new HeroMetrics();
    this.floatingElements = new HeroFloatingElements();
  }

  init() {
    this.render();
    this.slider.init();
    this.metrics.init();
    this.floatingElements.init();
  }

  render() {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    heroSection.innerHTML = `
      <div class="hero-content">
        <div class="hero-text">
          <h1>La Plataforma Publicitaria más Efectiva</h1>
          <p>Multiplica tus ventas con nuestra tecnología disruptiva que supera a Google Ads y Meta Ads</p>
          
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary">
              <i class="fas fa-rocket"></i>
              Explorar Servicios
            </a>
            <a href="#tools" class="btn btn-secondary">
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

        <div class="hero-metrics"></div>
        <div class="floating-elements"></div>
      </div>
    `;
  }
}
