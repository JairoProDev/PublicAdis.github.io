// Main.js - Application entry point
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the website components
  initializeWebsite();

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

function initializeWebsite() {
  // Load each component
  loadHeader();
  loadHero();
  loadServices();
  loadBenefits();
  loadFeatures();
  loadApplication();
  loadContact();
  loadFooter();

  // Initialize global animations and interactions
  initGlobalAnimations();

  // Initialize tools section
  initBusinessTools();
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
        // Smooth scroll to element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without page reload
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

function initBusinessTools() {
  // Initialize calculator tool
  const calculatorTool = document.getElementById("calculatorTool");
  if (calculatorTool) {
    const calculatorForm = calculatorTool.querySelector("form");
    if (calculatorForm) {
      calculatorForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const investmentAmount = parseFloat(
          document.getElementById("investmentAmount").value
        );
        const investmentPeriod = parseInt(
          document.getElementById("investmentPeriod").value
        );
        const expectedROI = parseFloat(
          document.getElementById("expectedROI").value
        );

        if (
          isNaN(investmentAmount) ||
          isNaN(investmentPeriod) ||
          isNaN(expectedROI)
        ) {
          alert("Por favor, ingresa valores numéricos válidos");
          return;
        }

        const totalReturn =
          investmentAmount * (1 + (expectedROI / 100) * investmentPeriod);
        const profit = totalReturn - investmentAmount;

        document.getElementById("calculatedProfit").textContent =
          profit.toFixed(2);
        document.getElementById("calculatedReturn").textContent =
          totalReturn.toFixed(2);
        document
          .getElementById("calculationResults")
          .classList.remove("hidden");
      });
    }
  }

  // Initialize property valuation tool
  const valuationTool = document.getElementById("propertyValuationTool");
  if (valuationTool) {
    const valuationForm = valuationTool.querySelector("form");
    if (valuationForm) {
      valuationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const propertyType = document.getElementById("propertyType").value;
        const propertySize = parseFloat(
          document.getElementById("propertySize").value
        );
        const propertyLocation =
          document.getElementById("propertyLocation").value;

        if (!propertyType || isNaN(propertySize) || !propertyLocation) {
          alert("Por favor, completa todos los campos correctamente");
          return;
        }

        // Simple sample calculation - in reality would be more complex
        let basePrice = 0;

        switch (propertyType) {
          case "apartment":
            basePrice = 1200;
            break;
          case "house":
            basePrice = 1000;
            break;
          case "land":
            basePrice = 500;
            break;
          default:
            basePrice = 800;
        }

        let locationMultiplier = 1;

        switch (propertyLocation) {
          case "center":
            locationMultiplier = 1.5;
            break;
          case "residential":
            locationMultiplier = 1.3;
            break;
          case "outskirts":
            locationMultiplier = 0.8;
            break;
          default:
            locationMultiplier = 1;
        }

        const estimatedValue = propertySize * basePrice * locationMultiplier;

        document.getElementById("estimatedValue").textContent =
          estimatedValue.toFixed(2);
        document.getElementById("valuationResults").classList.remove("hidden");
      });
    }
  }
}
