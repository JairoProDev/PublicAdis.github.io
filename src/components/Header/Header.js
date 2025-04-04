export class Header {
  constructor() {
    this.isMenuOpen = false;
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    header.innerHTML = `
      <div class="header-container">
        <a href="/" class="logo">
          <img src="/assets/images/logo.png" alt="PublicAdis Logo">
        </a>

        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#herramientas">Herramientas</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <a href="https://app.publicadis.com/login" class="btn btn-secondary">Iniciar Sesión</a>
          <a href="https://app.publicadis.com/register" class="btn btn-primary">Registrarse</a>
          <button class="menu-toggle" aria-label="Toggle menu">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div class="mobile-menu">
          <nav class="mobile-nav">
            <ul class="mobile-nav-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#herramientas">Herramientas</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          <div class="mobile-actions">
            <a href="https://app.publicadis.com/login" class="btn btn-secondary">Iniciar Sesión</a>
            <a href="https://app.publicadis.com/register" class="btn btn-primary">Registrarse</a>
          </div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const header = document.querySelector(".site-header");

    if (!menuToggle || !mobileMenu || !header) return;

    menuToggle.addEventListener("click", () => {
      this.isMenuOpen = !this.isMenuOpen;
      mobileMenu.classList.toggle("active", this.isMenuOpen);
      menuToggle
        .querySelector("i")
        .classList.toggle("fa-bars", !this.isMenuOpen);
      menuToggle
        .querySelector("i")
        .classList.toggle("fa-times", this.isMenuOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (this.isMenuOpen && !header.contains(e.target)) {
        this.isMenuOpen = false;
        mobileMenu.classList.remove("active");
        menuToggle.querySelector("i").classList.add("fa-bars");
        menuToggle.querySelector("i").classList.remove("fa-times");
      }
    });

    // Handle scroll
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
      }

      lastScroll = currentScroll;
    });
  }
}
