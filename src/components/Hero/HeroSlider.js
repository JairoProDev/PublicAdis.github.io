class HeroSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = [
      {
        image: "/assets/images/hero/device-mockup-1.png",
        title: "Presencia Digital Completa",
        description:
          "Gestiona tu negocio en todas las plataformas desde un solo lugar",
      },
      {
        image: "/assets/images/hero/device-mockup-2.png",
        title: "Analítica Avanzada",
        description:
          "Toma decisiones basadas en datos reales y métricas precisas",
      },
      {
        image: "/assets/images/hero/device-mockup-3.png",
        title: "Automatización Inteligente",
        description:
          "Optimiza tus procesos y ahorra tiempo con nuestras herramientas",
      },
    ];
    this.isAnimating = false;
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  init() {
    this.render();
    this.setupEventListeners();
    this.startAutoSlide();
  }

  render() {
    const sliderContainer = document.querySelector(".hero-slider");
    if (!sliderContainer) return;

    sliderContainer.innerHTML = `
      <div class="slider-container">
        ${this.slides
          .map(
            (slide, index) => `
          <div class="slide ${
            index === 0 ? "active" : ""
          }" data-index="${index}">
            <img src="${slide.image}" alt="${
              slide.title
            }" class="slide-image" loading="lazy">
            <div class="slide-overlay">
              <h3>${slide.title}</h3>
              <p>${slide.description}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
      
      <div class="slider-navigation">
        <button class="slider-arrow prev" aria-label="Previous slide">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        
        <div class="slider-dots">
          ${this.slides
            .map(
              (_, index) => `
            <button class="slider-dot ${index === 0 ? "active" : ""}" 
                    data-index="${index}" 
                    aria-label="Go to slide ${index + 1}">
            </button>
          `
            )
            .join("")}
        </div>
        
        <button class="slider-arrow next" aria-label="Next slide">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    `;
  }

  setupEventListeners() {
    const container = document.querySelector(".hero-slider");
    if (!container) return;

    // Arrow navigation
    container
      .querySelector(".prev")
      .addEventListener("click", () => this.prevSlide());
    container
      .querySelector(".next")
      .addEventListener("click", () => this.nextSlide());

    // Dot navigation
    container.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);
        this.goToSlide(index);
      });
    });

    // Touch events for mobile
    container.addEventListener("touchstart", (e) => {
      this.touchStartX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleSwipe();
    });

    // Pause auto-slide on hover
    container.addEventListener("mouseenter", () => this.pauseAutoSlide());
    container.addEventListener("mouseleave", () => this.startAutoSlide());
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentSlide) return;
    this.isAnimating = true;

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dot");

    const direction = index > this.currentSlide ? "right" : "left";

    // Remove current active classes
    slides[this.currentSlide].classList.remove("active");
    dots[this.currentSlide].classList.remove("active");

    // Add animation classes
    slides[this.currentSlide].classList.add(`slide-out-${direction}`);
    slides[index].classList.add(`slide-in-${direction}`);

    // Update active slide
    setTimeout(() => {
      slides[this.currentSlide].classList.remove(`slide-out-${direction}`);
      slides[index].classList.remove(`slide-in-${direction}`);
      slides[index].classList.add("active");
      dots[index].classList.add("active");

      this.currentSlide = index;
      this.isAnimating = false;
    }, 600);
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  pauseAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}

export default HeroSlider;
