export class Header {
  constructor() {
    this.scrollY = 0;
    this.isMenuOpen = false;
  }

  init() {
    this.render();
    this.initHeaderInteractions();
  }

  render() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    header.innerHTML = `
      <div class="header-container">
        <div class="header-logo">
          <a href="/" title="PublicAdis - Inicio">
            <img src="/assets/images/logo.png" alt="PublicAdis Logo" class="logo-img" />
            <span class="logo-text">PublicAdis</span>
          </a>
        </div>
        
        <nav class="header-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#services" class="nav-link">Servicios</a>
            </li>
            <li class="nav-item">
              <a href="#sectors" class="nav-link">Sectores</a>
            </li>
            <li class="nav-item">
              <a href="#benefits" class="nav-link">Beneficios</a>
            </li>
            <li class="nav-item">
              <a href="#businessTools" class="nav-link">Herramientas</a>
            </li>
            <li class="nav-item">
              <a href="#testimonials" class="nav-link">Testimonios</a>
            </li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <a href="https://buscadis.com" class="btn btn-outline" target="_blank" rel="noopener">
            <i class="fas fa-search"></i>
            Ir a Buscadis
          </a>
          <a href="#contacto" class="btn btn-primary">
            <i class="fas fa-envelope"></i>
            Contáctanos
          </a>
        </div>
        
        <button class="mobile-menu-toggle" aria-label="Abrir menú">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      
      <div class="mobile-menu">
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li class="mobile-nav-item">
              <a href="#services" class="mobile-nav-link">Servicios</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#sectors" class="mobile-nav-link">Sectores</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#benefits" class="mobile-nav-link">Beneficios</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#businessTools" class="mobile-nav-link">Herramientas</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#testimonials" class="mobile-nav-link">Testimonios</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#contacto" class="mobile-nav-link">Contáctanos</a>
            </li>
          </ul>
        </nav>
        
        <div class="mobile-social">
          <a href="https://wa.me/937054328" class="mobile-social-link" target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/publicadis" class="mobile-social-link" target="_blank" rel="noopener">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/publicadis" class="mobile-social-link" target="_blank" rel="noopener">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    `;
  }

  initHeaderInteractions() {
    // Manejar scroll para cambiar el estilo del header
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      const header = document.querySelector('.site-header');

      if (header) {
        if (this.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // Manejar el menú móvil
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        menuToggle.classList.toggle('active', this.isMenuOpen);
        mobileMenu.classList.toggle('active', this.isMenuOpen);
        body.classList.toggle('menu-open', this.isMenuOpen);
      });
    }

    // Cerrar menú móvil al hacer clic en un enlace
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.isMenuOpen = false;
        if (menuToggle && mobileMenu) {
          menuToggle.classList.remove('active');
          mobileMenu.classList.remove('active');
          body.classList.remove('menu-open');
        }
      });
    });

    // Smooth scroll para los links de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
          const headerHeight = document.querySelector('.site-header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  }
}
