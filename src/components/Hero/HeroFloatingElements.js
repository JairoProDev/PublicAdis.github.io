class HeroFloatingElements {
  constructor() {
    this.elements = [
      {
        icon: "fa-star",
        color: "var(--premium-gold)",
        size: "2rem",
        animation: "float-1",
      },
      {
        icon: "fa-circle",
        color: "var(--primary-blue)",
        size: "1.5rem",
        animation: "float-2",
      },
      {
        icon: "fa-square",
        color: "var(--primary-orange)",
        size: "1.8rem",
        animation: "float-3",
      },
      {
        icon: "fa-diamond",
        color: "var(--premium-gold)",
        size: "1.2rem",
        animation: "float-4",
      },
      {
        icon: "fa-circle",
        color: "var(--primary-blue)",
        size: "1rem",
        animation: "float-5",
      },
    ];
  }

  init() {
    this.render();
    this.setupParallaxEffect();
  }

  render() {
    const container = document.querySelector(".floating-elements");
    if (!container) return;

    container.innerHTML = this.elements
      .map(
        (element, index) => `
        <div class="floating-element ${element.animation}"
             style="--element-color: ${element.color}; --element-size: ${element.size};"
             data-index="${index}">
          <i class="fa-solid ${element.icon}"></i>
        </div>
      `
      )
      .join("");
  }

  setupParallaxEffect() {
    const container = document.querySelector(".hero-section");
    const elements = document.querySelectorAll(".floating-element");
    if (!container || !elements.length) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = container.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;

      elements.forEach((element, index) => {
        const depth = 0.05 + (index % 3) * 0.02;
        const moveX = (clientX - centerX) * depth;
        const moveY = (clientY - centerY) * depth;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
  }
}

export default HeroFloatingElements;
