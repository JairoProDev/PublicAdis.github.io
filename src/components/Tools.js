// Business Tools Component
function loadBusinessTools() {
  // This component is directly in index.html for better performance
  // Initialize the business tools functionality
  initBusinessTools();
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
          showAlert("Por favor, ingresa valores numéricos válidos", "error");
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

        // Add animation
        document.getElementById("calculationResults").classList.add("animated");

        // Show success message
        showAlert("Cálculo completado correctamente", "success");
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
          showAlert(
            "Por favor, completa todos los campos correctamente",
            "error"
          );
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
          case "commercial":
            basePrice = 1500;
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

        // Add animation
        document.getElementById("valuationResults").classList.add("animated");

        // Show success message
        showAlert("Valoración estimada calculada", "success");
      });
    }
  }

  // Add scroll animation to business tools section
  const toolsSection = document.getElementById("businessToolsSection");
  if (toolsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelector(".section-title")
              .classList.add("visible");
            entry.target
              .querySelector(".section-subtitle")
              .classList.add("visible");

            // Animate tool cards with delay
            const toolCards = entry.target.querySelectorAll(".tool-card");
            toolCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(toolsSection);
  }
}

// Helper function to show alert messages
function showAlert(message, type = "info") {
  // Check if alert container exists, create if not
  let alertContainer = document.querySelector(".alert-container");

  if (!alertContainer) {
    alertContainer = document.createElement("div");
    alertContainer.className = "alert-container";
    document.body.appendChild(alertContainer);
  }

  // Create alert element
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;

  // Add icon based on alert type
  let icon = "";
  switch (type) {
    case "success":
      icon = '<i class="fa-solid fa-check-circle"></i>';
      break;
    case "error":
      icon = '<i class="fa-solid fa-exclamation-circle"></i>';
      break;
    case "warning":
      icon = '<i class="fa-solid fa-exclamation-triangle"></i>';
      break;
    default:
      icon = '<i class="fa-solid fa-info-circle"></i>';
  }

  // Set alert content
  alert.innerHTML = `
    <div class="alert-icon">${icon}</div>
    <div class="alert-message">${message}</div>
    <button class="alert-close"><i class="fa-solid fa-times"></i></button>
  `;

  // Add to container
  alertContainer.appendChild(alert);

  // Show with animation
  setTimeout(() => {
    alert.classList.add("alert-show");
  }, 10);

  // Auto close after 3 seconds
  setTimeout(() => {
    closeAlert(alert);
  }, 3000);

  // Add close button functionality
  alert.querySelector(".alert-close").addEventListener("click", () => {
    closeAlert(alert);
  });
}

function closeAlert(alert) {
  alert.classList.remove("alert-show");
  alert.classList.add("alert-hide");

  // Remove from DOM after animation completes
  setTimeout(() => {
    if (alert.parentElement) {
      alert.parentElement.removeChild(alert);
    }
  }, 300);
}
