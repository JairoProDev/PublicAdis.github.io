// Main.js - Application entry point

// Manejador global de errores para facilitar la depuración
window.addEventListener("error", function (event) {
  console.error("Global error caught:", event.error || event.message);
  // Evitar que el loader se quede visible si hay errores
  hideLoader();
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded - Initializing application");

  // Ocultar el loader
  hideLoader();

  // Cargar componentes principales
  try {
    console.log("Loading components...");

    // Componentes básicos
    if (typeof loadHeader === "function") {
      console.log("Loading Header...");
      loadHeader();
    } else {
      console.error("Header loading function not found");
    }

    if (typeof loadHero === "function") {
      console.log("Loading Hero...");
      loadHero();
    } else {
      console.error("Hero loading function not found");
    }

    if (typeof loadServices === "function") {
      console.log("Loading Services...");
      loadServices();
    } else {
      console.error("Services loading function not found");
    }

    if (typeof loadSectors === "function") {
      console.log("Loading Sectors...");
      loadSectors();
    } else {
      console.error("Sectors loading function not found");
    }

    if (typeof loadBenefits === "function") {
      console.log("Loading Benefits...");
      loadBenefits();
    } else {
      console.error("Benefits loading function not found");
    }

    if (typeof loadTestimonials === "function") {
      console.log("Loading Testimonials...");
      loadTestimonials();
    } else {
      console.error("Testimonials loading function not found");
    }

    if (typeof loadBusinessTools === "function") {
      console.log("Loading Business Tools...");
      loadBusinessTools();
    } else {
      console.error("Business Tools loading function not found");
    }

    if (typeof loadFooter === "function") {
      console.log("Loading Footer...");
      loadFooter();
    } else {
      console.error("Footer loading function not found");
    }

    // Inicializar animaciones y menú móvil
    console.log("Initializing animations and interactions...");
    initGlobalAnimations();
    initMobileMenu();

    // Inicializar tools si la función existe
    if (typeof initBusinessTools === "function") {
      console.log("Initializing business tools...");
      initBusinessTools();
    }

    console.log("All components loaded successfully");
  } catch (error) {
    console.error("Error loading components:", error);
  }

  // Register service worker for PWA functionality if needed
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }
});

function hideLoader() {
  try {
    const loader = document.getElementById("loader");
    if (loader) {
      console.log("Ocultando loader...");

      // Ocultar el loader inmediatamente
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
        console.log("Loader oculto correctamente");
      }, 300);

      // Asegurarse que el loader se oculte después de un tiempo máximo
      setTimeout(() => {
        if (loader.style.display !== "none") {
          console.warn("Forzando ocultamiento del loader");
          loader.style.opacity = "0";
          loader.style.display = "none";
        }
      }, 3000);
    }
  } catch (error) {
    console.error("Error al ocultar el loader:", error);
    try {
      document.getElementById("loader").style.display = "none";
    } catch (e) {
      // Ignorar si falla
    }
  }
}

function initGlobalAnimations() {
  // Initialize AOS (Animate On Scroll) library if available
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        history.pushState(null, null, targetId);
      }
    });
  });

  // Add scroll-triggered animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navOptions = document.getElementById("navOptionsList");

  if (mobileMenuBtn && navOptions) {
    mobileMenuBtn.addEventListener("click", () => {
      navOptions.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navOptions.contains(e.target) &&
        !mobileMenuBtn.contains(e.target) &&
        navOptions.classList.contains("active")
      ) {
        navOptions.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = navOptions.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navOptions.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      });
    });
  }
}

function initBusinessTools() {
  // Asegurar que solo se ejecute esta función si el contenedor existe
  const businessToolsContainer = document.getElementById(
    "businessToolsContainer"
  );
  if (!businessToolsContainer) {
    console.warn("El contenedor de herramientas de negocio no existe");
    return;
  }

  // Inicializar pestañas de herramientas
  const toolTabs = document.querySelectorAll(".tool-tab");
  const toolContents = document.querySelectorAll(".tool-content");

  if (toolTabs.length && toolContents.length) {
    // Manejar clic en pestañas
    toolTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const toolId = tab.dataset.tool;

        // Actualizar pestañas activas
        toolTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Mostrar contenido seleccionado
        toolContents.forEach((content) => {
          content.classList.remove("active");
          if (content.id === toolId) {
            content.classList.add("active");
          }
        });
      });
    });
  }

  // Inicializar calculadora de valor de propiedades
  const calculatePropertyValueBtn = document.getElementById(
    "calculate-property-value"
  );
  if (calculatePropertyValueBtn) {
    calculatePropertyValueBtn.addEventListener("click", calculatePropertyValue);
  }

  // Inicializar calculadora de ROI
  const calculateRoiBtn = document.getElementById("calculate-roi");
  if (calculateRoiBtn) {
    calculateRoiBtn.addEventListener("click", calculateRoi);
  }

  // Inicializar botones de notificación para herramientas en desarrollo
  const notifyButtons = document.querySelectorAll(".tool-notify-button");
  notifyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showAlert(
        "Te notificaremos cuando esta herramienta esté disponible",
        "info"
      );
    });
  });
}

// Smooth scroll function for navigation links
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
}

// Create a reusable showAlert function
function showAlert(message, type = "info", duration = 5000) {
  // Create alert container if it doesn't exist
  if (!document.querySelector(".alert-container")) {
    const alertContainer = document.createElement("div");
    alertContainer.className = "alert-container";
    document.body.appendChild(alertContainer);
  }

  const alertContainer = document.querySelector(".alert-container");

  // Create the alert element
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;

  // Set the icon based on type
  const iconClass =
    type === "success"
      ? "fa-check-circle"
      : type === "error"
      ? "fa-exclamation-circle"
      : type === "warning"
      ? "fa-exclamation-triangle"
      : "fa-info-circle";

  alert.innerHTML = `
    <div class="alert-icon">
      <i class="fa-solid ${iconClass}"></i>
    </div>
    <div class="alert-message">${message}</div>
    <button class="alert-close">
      <i class="fa-solid fa-times"></i>
    </button>
  `;

  // Add to the container
  alertContainer.appendChild(alert);

  // Add the show class after a small delay (for animation)
  setTimeout(() => {
    alert.classList.add("alert-show");
  }, 10);

  // Add close button functionality
  const closeBtn = alert.querySelector(".alert-close");
  closeBtn.addEventListener("click", () => {
    alert.classList.remove("alert-show");
    alert.classList.add("alert-hide");

    // Remove from DOM after animation
    setTimeout(() => {
      if (alert.parentNode === alertContainer) {
        alertContainer.removeChild(alert);
      }
    }, 300);
  });

  // Auto-remove after duration
  setTimeout(() => {
    if (alert.parentNode === alertContainer) {
      alert.classList.remove("alert-show");
      alert.classList.add("alert-hide");

      setTimeout(() => {
        if (alert.parentNode === alertContainer) {
          alertContainer.removeChild(alert);
        }
      }, 300);
    }
  }, duration);

  return alert;
}
