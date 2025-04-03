export class Header {
  constructor() {
    this.isMenuOpen = false;
    this.lastScrollTop = 0;
    this.isHeaderVisible = true;
  }

  init() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const headerContainer = document.getElementById("headerContainer");
    if (!headerContainer) return;

    headerContainer.innerHTML = `
      <header class="site-header">
        <div class="header-container">
          <a href="/" class="logo">
            <img src="/src/assets/images/logo.png" alt="PublicAdis Logo" />
          </a>

          <nav class="main-nav">
            <ul class="nav-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#caracteristicas">Características</a></li>
              <li><a href="#aplicacion">Aplicación</a></li>
              <li><a href="#contactanos">Contáctanos</a></li>
            </ul>
          </nav>

          <div class="header-actions">
            <a href="#" class="login-btn">Iniciar Sesión</a>
            <a href="#" class="cta-btn">Publicar Ahora</a>
            <button class="menu-toggle" aria-label="Toggle menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <div class="mobile-menu">
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#aplicacion">Aplicación</a></li>
            <li><a href="#contactanos">Contáctanos</a></li>
          </ul>
        </nav>
        <div class="mobile-actions">
          <a href="#" class="login-btn">Iniciar Sesión</a>
          <a href="#" class="cta-btn">Publicar Ahora</a>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const header = document.querySelector(".site-header");

    if (menuToggle && mobileMenu) {
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
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        this.isMenuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-toggle")
      ) {
        this.isMenuOpen = false;
        mobileMenu?.classList.remove("active");
        menuToggle?.querySelector("i").classList.add("fa-bars");
        menuToggle?.querySelector("i").classList.remove("fa-times");
      }
    });

    // Header scroll behavior
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      const scrollDelta = currentScroll - this.lastScrollTop;
      const minScroll = 100;

      if (currentScroll <= minScroll) {
        header?.classList.remove("header-hidden", "header-condensed");
        this.isHeaderVisible = true;
      } else {
        header?.classList.add("header-condensed");

        if (Math.abs(scrollDelta) > 10) {
          if (scrollDelta > 0 && this.isHeaderVisible) {
            header?.classList.add("header-hidden");
            this.isHeaderVisible = false;
          } else if (scrollDelta < 0 && !this.isHeaderVisible) {
            header?.classList.remove("header-hidden");
            this.isHeaderVisible = true;
          }
        }
      }

      this.lastScrollTop = currentScroll;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Close mobile menu if open
          if (this.isMenuOpen) {
            this.isMenuOpen = false;
            mobileMenu?.classList.remove("active");
            menuToggle?.querySelector("i").classList.add("fa-bars");
            menuToggle?.querySelector("i").classList.remove("fa-times");
          }
        }
      });
    });
  }
}
