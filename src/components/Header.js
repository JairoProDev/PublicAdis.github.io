// Header component
function loadHeader() {
  const header = `
    <nav class="navbar" id="navBar">
      <a href="https://buscadis.com/" class="logo" id="logoContainer">
        <img
          src="./src/assets/images/i01_download-1.png"
          alt="PublicAdis Logo"
          class="accessIcon"
          id="logoIcon"
        />
        <h1 class="mainTitle" id="logoTitle">
          Public<span id="pageLogoSpan" class="mainTitle">Adis</span>
        </h1>
      </a>

      <!-- Desktop Navigation Menu -->
      <div id="navOptionsList" class="nav-options">
        <a href="#mainSection" class="navOption" data-section="mainSection">INICIO</a>
        <a href="#benefitsSection" class="navOption" data-section="benefitsSection">BENEFICIOS</a>
        <a href="#servicesSection" class="navOption" data-section="servicesSection">SERVICIOS</a>
        <a href="#featuresSection" class="navOption" data-section="featuresSection">CARACTERÍSTICAS</a>
        <a href="#applicationSection" class="navOption" data-section="applicationSection">APLICACIÓN</a>
        <a href="#contactsSection" class="navOption" data-section="contactsSection">CONTÁCTANOS</a>
        <a href="https://buscadis.com/" class="navOption highlight-btn">PUBLICAR AHORA</a>
      </div>

      <button
        class="mobile-menu-btn"
        id="mobileMenuBtn"
        title="Menú de navegación"
        aria-label="Abrir menú de navegación"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>

    <!-- Mobile Bottom Navigation -->
    <div class="mobile-bottom-nav" id="mobileBottomNav">
      <a href="#mainSection" class="mobile-nav-item" data-section="mainSection">
        <i class="fa-solid fa-home"></i>
        <span>Inicio</span>
      </a>
      <a href="#benefitsSection" class="mobile-nav-item" data-section="benefitsSection">
        <i class="fa-solid fa-gem"></i>
        <span>Beneficios</span>
      </a>
      <a href="#servicesSection" class="mobile-nav-item" data-section="servicesSection">
        <i class="fa-solid fa-briefcase"></i>
        <span>Servicios</span>
      </a>
      <a href="https://wa.me/937054328" class="mobile-nav-item mobile-nav-cta">
        <i class="fa-solid fa-plus-circle"></i>
        <span>Publicar</span>
      </a>
      <a href="#applicationSection" class="mobile-nav-item" data-section="applicationSection">
        <i class="fa-solid fa-mobile-screen"></i>
        <span>App</span>
      </a>
      <a href="#contactsSection" class="mobile-nav-item" data-section="contactsSection">
        <i class="fa-solid fa-envelope"></i>
        <span>Contacto</span>
      </a>
    </div>
  `;

  document.getElementById("headerContainer").innerHTML = header;

  initHeaderFunctionality();
}

function initHeaderFunctionality() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navOptionsList = document.getElementById("navOptionsList");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navOptionsList.classList.toggle("active");

      // Change icon based on menu state
      const icon = mobileMenuBtn.querySelector("i");
      if (navOptionsList.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".navOption");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navOptionsList.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // Highlight active section in mobile bottom nav
  const sections = document.querySelectorAll(".pageSection");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  const highlightActiveSection = () => {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        mobileNavItems.forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("data-section") === sectionId) {
            item.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightActiveSection);

  // Logo hover effect
  const logoContainer = document.getElementById("logoContainer");
  const pageLogoSpan = document.getElementById("pageLogoSpan");

  if (logoContainer && pageLogoSpan) {
    logoContainer.addEventListener("mouseover", () => {
      pageLogoSpan.style.color = "#079cff";
    });

    logoContainer.addEventListener("mouseout", () => {
      pageLogoSpan.style.color = "#ffffff";
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById("navBar");
  const mobileBottomNav = document.getElementById("mobileBottomNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Show/hide mobile bottom nav based on scroll direction
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 300) {
      // Scrolling down, hide the nav
      mobileBottomNav.classList.add("nav-hidden");
    } else {
      // Scrolling up, show the nav
      mobileBottomNav.classList.remove("nav-hidden");
    }
    lastScroll = currentScroll;
  });

  let lastScroll = 0;
}
