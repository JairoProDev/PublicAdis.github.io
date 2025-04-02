// PropertyValueCalculator.js - Calculadora de Valoración de Propiedades
class PropertyValueCalculator {
  constructor() {
    this.initialized = false;
    this.pricePerSqMeter = {
      apartment: {
        centro: 2500,
        moderna: 1800,
        residencial: 2200,
        periferia: 1200
      },
      house: {
        centro: 2800,
        moderna: 2000,
        residencial: 2400,
        periferia: 1400
      },
      commercial: {
        centro: 3000,
        moderna: 1600,
        residencial: 2600,
        periferia: 1200
      },
      land: {
        centro: 1800,
        moderna: 1200,
        residencial: 1600,
        periferia: 800
      }
    };

    this.multipliers = {
      bedrooms: 0.05, // Cada habitación suma 5% al valor
      bathrooms: 0.07, // Cada baño suma 7% al valor
      age: -0.01, // Cada año de antigüedad resta 1% (max 30%)
      parking: 0.12, // Estacionamiento suma 12%
      garden: 0.08, // Jardín suma 8%
      security: 0.1, // Seguridad 24h suma 10%
    };
  }

  init() {
    if (this.initialized) return;
    console.log('Initializing PropertyValueCalculator');

    const calculateBtn = document.getElementById("calculate-property-value");
    if (calculateBtn) {
      calculateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.calculatePropertyValue();
      });
      this.initialized = true;
      console.log('PropertyValueCalculator initialized successfully');
    } else {
      console.error('Button calculate-property-value not found');
    }
  }

  calculatePropertyValue() {
    console.log('Calculating property value...');
    
    // Obtener valores del formulario
    const propertyType = document.getElementById("property-type").value;
    const propertyArea = parseFloat(
      document.getElementById("property-area").value
    );
    const propertyLocation = document.getElementById("property-location").value;
    const bedrooms =
      parseInt(document.getElementById("property-bedrooms").value) || 0;
    const bathrooms =
      parseInt(document.getElementById("property-bathrooms").value) || 0;
    const age = parseInt(document.getElementById("property-age").value) || 0;

    // Características adicionales
    const hasParking = document.getElementById("has-parking").checked;
    const hasGarden = document.getElementById("has-garden").checked;
    const hasSecurity = document.getElementById("has-security").checked;

    console.log('Form values:', {
      propertyType, propertyArea, propertyLocation, 
      bedrooms, bathrooms, age, 
      hasParking, hasGarden, hasSecurity
    });

    // Validar entrada
    if (
      !propertyType ||
      !propertyLocation ||
      isNaN(propertyArea) ||
      propertyArea <= 0
    ) {
      this.showAlert(
        "Por favor completa los campos requeridos correctamente",
        "error"
      );
      return;
    }

    // Calcular precio base por metro cuadrado
    let basePricePerSqMeter = this.pricePerSqMeter[propertyType][propertyLocation];

    // Calcular multiplicadores
    let multiplier = 1;
    multiplier += bedrooms * this.multipliers.bedrooms;
    multiplier += bathrooms * this.multipliers.bathrooms;
    multiplier += Math.max(-0.3, age * this.multipliers.age); // Máximo 30% de devaluación por antigüedad

    if (hasParking) multiplier += this.multipliers.parking;
    if (hasGarden) multiplier += this.multipliers.garden;
    if (hasSecurity) multiplier += this.multipliers.security;

    // Calcular valor final
    const propertyValue = basePricePerSqMeter * propertyArea * multiplier;

    // Calcular rango (±10%)
    const minValue = propertyValue * 0.9;
    const maxValue = propertyValue * 1.1;

    // Formato de moneda
    const formatter = new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    // Preparar resultados HTML
    const resultsHTML = `
      <div class="result-summary">
        <h4>Valor Estimado de la Propiedad:</h4>
        <div class="value-amount">${formatter.format(propertyValue)}</div>
        <div class="value-range">Rango: ${formatter.format(minValue)} - ${formatter.format(maxValue)}</div>
      </div>
      <div class="result-details">
        <h4>Recomendaciones:</h4>
        <ul class="value-tips">
          ${this.generatePropertyRecommendations(
            propertyType,
            propertyLocation,
            propertyArea,
            bedrooms,
            bathrooms,
            age,
            hasParking,
            hasGarden,
            hasSecurity
          ).map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    `;

    // Mostrar resultados
    const resultsContainer = document.getElementById("property-value-results");
    if (resultsContainer) {
      resultsContainer.innerHTML = resultsHTML;
      resultsContainer.style.display = "block";
    } else {
      console.error('Results container not found');
    }

    // Mostrar alerta de éxito
    this.showAlert("Valoración de propiedad calculada con éxito", "success");
  }

  generatePropertyRecommendations(
    type,
    location,
    area,
    bedrooms,
    bathrooms,
    age,
    hasParking,
    hasGarden,
    hasSecurity
  ) {
    const tips = [];

    // Recomendaciones basadas en el tipo de propiedad
    switch (type) {
      case "house":
        if (!hasGarden)
          tips.push(
            "Añadir un jardín o área verde podría incrementar el valor hasta un 8%."
          );
        break;
      case "apartment":
        if (!hasParking)
          tips.push(
            "Un estacionamiento puede incrementar el valor de un departamento hasta un 12%."
          );
        break;
      case "land":
        tips.push(
          "Obtener permisos de construcción previos puede aumentar significativamente el valor del terreno."
        );
        break;
      case "commercial":
        tips.push(
          "Los locales en esquina suelen tener un valor 15-20% mayor por su mayor visibilidad."
        );
        break;
    }

    // Recomendaciones basadas en la ubicación
    if (location === "centro" || location === "moderna") {
      tips.push(
        "Las propiedades en esta ubicación tienen alta demanda. Considera destacar sus características únicas en tu anuncio."
      );
    }

    // Recomendaciones basadas en el área
    if (area < 60 && (type === "house" || type === "apartment")) {
      tips.push(
        "Los espacios pequeños pueden optimizarse con diseño multifuncional para aumentar su atractivo."
      );
    } else if (area > 150) {
      tips.push(
        "Las propiedades grandes pueden segmentarse para diferentes usos, aumentando su potencial comercial."
      );
    }

    // Recomendaciones basadas en antigüedad
    if (age > 15) {
      tips.push(
        "Una renovación de instalaciones eléctricas y sanitarias puede reducir el impacto negativo de la antigüedad."
      );
    }

    // Recomendaciones generales
    if (bedrooms > 0 && bathrooms > 0 && bedrooms / bathrooms > 2) {
      tips.push(
        "La proporción ideal es de máximo 2 habitaciones por baño. Añadir un baño adicional podría aumentar el valor."
      );
    }

    // Retornar recomendaciones
    if (tips.length === 0) {
      tips.push(
        "Su propiedad tiene buenas características para el mercado actual."
      );
    }

    return tips;
  }
  
  // Método para mostrar alertas
  showAlert(message, type) {
    console.log(`Alert: ${message} (${type})`);
    alert(message);
  }
}

// Exportar constructor
window.PropertyValueCalculator = PropertyValueCalculator;
