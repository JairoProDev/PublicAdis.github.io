// Business Tools Component
function loadBusinessTools() {
  const businessTools = `
    <section id="businessToolsSection" class="pageSection business-tools-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title fade-in-up">
            Herramientas <span class="section-title-highlight">Gratuitas</span> para tu Negocio
          </h2>
          <p class="section-subtitle fade-in-up">
            Utiliza estas calculadoras y herramientas especializadas para tomar mejores decisiones
          </p>
        </div>

        <div class="tools-container">
          <!-- Tool Tabs -->
          <div class="tools-tabs">
            <button class="tool-tab active" data-tool="propertyValue">
              <i class="fa-solid fa-home"></i>
              <span>Valoración de Inmuebles</span>
            </button>
            <button class="tool-tab" data-tool="roiCalculator">
              <i class="fa-solid fa-chart-line"></i>
              <span>Calculadora de ROI</span>
            </button>
            <button class="tool-tab" data-tool="vehiclePrice">
              <i class="fa-solid fa-car"></i>
              <span>Precio Justo Vehículos</span>
            </button>
            <button class="tool-tab" data-tool="salaryCompare">
              <i class="fa-solid fa-briefcase"></i>
              <span>Comparador de Salarios</span>
            </button>
            <button class="tool-tab" data-tool="socialMediaReach">
              <i class="fa-solid fa-bullhorn"></i>
              <span>Alcance en Redes</span>
            </button>
            <button class="tool-tab" data-tool="eventPlanner">
              <i class="fa-solid fa-calendar"></i>
              <span>Planificador de Eventos</span>
            </button>
          </div>

          <!-- Tool Content Area -->
          <div class="tools-content">
            <!-- Property Value Tool -->
            <div class="tool-content active" id="propertyValue">
              <div class="tool-header">
                <h3><i class="fa-solid fa-home"></i> Calculadora de Valoración de Propiedades</h3>
                <p>Estima el valor de mercado de tu propiedad en base a sus características y ubicación</p>
              </div>
              
              <div class="tool-form">
                <div class="tool-form-group">
                  <label for="property-type">Tipo de Propiedad</label>
                  <select id="property-type" class="tool-input">
                    <option value="">Seleccionar...</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                    <option value="terreno">Terreno</option>
                    <option value="local">Local Comercial</option>
                    <option value="oficina">Oficina</option>
                  </select>
                </div>
                
                <div class="tool-form-row">
                  <div class="tool-form-group">
                    <label for="property-area">Área (m²)</label>
                    <input type="number" id="property-area" class="tool-input" placeholder="100">
                  </div>
                  
                  <div class="tool-form-group">
                    <label for="property-location">Zona</label>
                    <select id="property-location" class="tool-input">
                      <option value="">Seleccionar...</option>
                      <option value="centro">Centro Histórico</option>
                      <option value="residencial">Zona Residencial</option>
                      <option value="comercial">Zona Comercial</option>
                      <option value="periferica">Zona Periférica</option>
                      <option value="rural">Zona Rural</option>
                    </select>
                  </div>
                </div>
                
                <div class="tool-form-row">
                  <div class="tool-form-group">
                    <label for="property-bedrooms">N° Habitaciones</label>
                    <input type="number" id="property-bedrooms" class="tool-input" placeholder="3">
                  </div>
                  
                  <div class="tool-form-group">
                    <label for="property-bathrooms">N° Baños</label>
                    <input type="number" id="property-bathrooms" class="tool-input" placeholder="2">
                  </div>
                  
                  <div class="tool-form-group">
                    <label for="property-age">Antigüedad (años)</label>
                    <input type="number" id="property-age" class="tool-input" placeholder="5">
                  </div>
                </div>
                
                <div class="tool-form-group">
                  <label>Características Adicionales</label>
                  <div class="tool-checkbox-row">
                    <div class="tool-checkbox-group">
                      <input type="checkbox" id="property-parking">
                      <label for="property-parking">Estacionamiento</label>
                    </div>
                    
                    <div class="tool-checkbox-group">
                      <input type="checkbox" id="property-garden">
                      <label for="property-garden">Jardín/Terraza</label>
                    </div>
                    
                    <div class="tool-checkbox-group">
                      <input type="checkbox" id="property-security">
                      <label for="property-security">Seguridad 24h</label>
                    </div>
                  </div>
                </div>
                
                <div class="tool-actions">
                  <button id="calculate-property-value" class="tool-button">
                    Calcular Valoración <i class="fa-solid fa-calculator"></i>
                  </button>
                </div>
              </div>
              
              <div class="tool-result" id="property-value-result">
                <div class="result-header">
                  <h4>Valoración Estimada</h4>
                  <p>Basada en propiedades similares en la zona seleccionada</p>
                </div>
                
                <div class="result-value">
                  <span id="property-value-amount">S/ 0.00</span>
                  <span class="result-range" id="property-value-range">Rango: S/ 0 - S/ 0</span>
                </div>
                
                <div class="result-advice">
                  <h5>Recomendaciones:</h5>
                  <ul id="property-value-tips"></ul>
                </div>
                
                <div class="tool-disclaimer">
                  <p><i class="fa-solid fa-info-circle"></i> Esta valoración es una estimación general. Para un avalúo profesional completo, contacta con nuestros expertos.</p>
                </div>
                
                <div class="tool-cta">
                  <a href="https://wa.me/937054328" class="tool-cta-button" target="_blank" rel="noopener">
                    Publicar tu Propiedad <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- ROI Calculator Tool -->
            <div class="tool-content" id="roiCalculator">
              <div class="tool-header">
                <h3><i class="fa-solid fa-chart-line"></i> Calculadora de ROI Publicitario</h3>
                <p>Calcula el retorno de inversión de tus campañas publicitarias</p>
              </div>
              
              <div class="tool-form">
                <div class="tool-form-row">
                  <div class="tool-form-group">
                    <label for="roi-investment">Inversión Total (S/)</label>
                    <input type="number" id="roi-investment" class="tool-input" placeholder="1000">
                  </div>
                  
                  <div class="tool-form-group">
                    <label for="roi-revenue">Ingresos Generados (S/)</label>
                    <input type="number" id="roi-revenue" class="tool-input" placeholder="3000">
                  </div>
                </div>
                
                <div class="tool-form-group">
                  <label for="roi-channel">Canal Publicitario Principal</label>
                  <select id="roi-channel" class="tool-input">
                    <option value="">Seleccionar...</option>
                    <option value="digital">Marketing Digital</option>
                    <option value="social">Redes Sociales</option>
                    <option value="tradicional">Medios Tradicionales</option>
                    <option value="clasificados">Anuncios Clasificados</option>
                    <option value="email">Email Marketing</option>
                  </select>
                </div>
                
                <div class="tool-form-row">
                  <div class="tool-form-group">
                    <label for="roi-customers">Clientes Captados</label>
                    <input type="number" id="roi-customers" class="tool-input" placeholder="20">
                  </div>
                  
                  <div class="tool-form-group">
                    <label for="roi-period">Período (meses)</label>
                    <input type="number" id="roi-period" class="tool-input" placeholder="3">
                  </div>
                </div>
                
                <div class="tool-actions">
                  <button id="calculate-roi" class="tool-button">
                    Calcular ROI <i class="fa-solid fa-calculator"></i>
                  </button>
                </div>
              </div>
              
              <div class="tool-result" id="roi-result">
                <div class="result-metrics">
                  <div class="metric-card">
                    <h4>ROI</h4>
                    <div class="metric-value" id="roi-percentage">0%</div>
                    <p class="metric-label">Retorno sobre inversión</p>
                  </div>
                  
                  <div class="metric-card">
                    <h4>Beneficio Neto</h4>
                    <div class="metric-value" id="roi-profit">S/ 0</div>
                    <p class="metric-label">Ingresos - Inversión</p>
                  </div>
                  
                  <div class="metric-card">
                    <h4>CAC</h4>
                    <div class="metric-value" id="roi-cac">S/ 0</div>
                    <p class="metric-label">Coste adquisición cliente</p>
                  </div>
                </div>
                
                <div class="result-chart">
                  <div class="chart-container">
                    <div class="chart-bar investment-bar">
                      <div class="chart-label">Inversión</div>
                      <div class="chart-value" id="chart-investment">S/ 0</div>
                    </div>
                    <div class="chart-bar revenue-bar">
                      <div class="chart-label">Ingresos</div>
                      <div class="chart-value" id="chart-revenue">S/ 0</div>
                    </div>
                  </div>
                </div>
                
                <div class="result-advice">
                  <h5>Análisis de Resultados:</h5>
                  <p id="roi-analysis">Completa el formulario para ver un análisis detallado de tu ROI.</p>
                </div>
                
                <div class="tool-cta">
                  <a href="https://wa.me/937054328" class="tool-cta-button" target="_blank" rel="noopener">
                    Optimiza tu Publicidad <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Vehicle Price Tool (placeholder) -->
            <div class="tool-content" id="vehiclePrice">
              <div class="tool-header">
                <h3><i class="fa-solid fa-car"></i> Calculadora de Precio Justo para Vehículos</h3>
                <p>Determina el valor óptimo para vender o comprar tu vehículo en el mercado actual</p>
              </div>
              
              <div class="tool-content-placeholder">
                <i class="fa-solid fa-tools"></i>
                <p>Herramienta en desarrollo. ¡Muy pronto disponible!</p>
                <button class="tool-notify-button">Recibir aviso cuando esté lista</button>
              </div>
            </div>
            
            <!-- Salary Compare Tool (placeholder) -->
            <div class="tool-content" id="salaryCompare">
              <div class="tool-header">
                <h3><i class="fa-solid fa-briefcase"></i> Comparador de Salarios por Sector</h3>
                <p>Compara tu salario con la media del mercado según tu sector y experiencia</p>
              </div>
              
              <div class="tool-content-placeholder">
                <i class="fa-solid fa-tools"></i>
                <p>Herramienta en desarrollo. ¡Muy pronto disponible!</p>
                <button class="tool-notify-button">Recibir aviso cuando esté lista</button>
              </div>
            </div>
            
            <!-- Social Media Reach Tool (placeholder) -->
            <div class="tool-content" id="socialMediaReach">
              <div class="tool-header">
                <h3><i class="fa-solid fa-bullhorn"></i> Calculadora de Alcance en Redes Sociales</h3>
                <p>Estima el alcance potencial de tus publicaciones en diferentes plataformas</p>
              </div>
              
              <div class="tool-content-placeholder">
                <i class="fa-solid fa-tools"></i>
                <p>Herramienta en desarrollo. ¡Muy pronto disponible!</p>
                <button class="tool-notify-button">Recibir aviso cuando esté lista</button>
              </div>
            </div>
            
            <!-- Event Planner Tool (placeholder) -->
            <div class="tool-content" id="eventPlanner">
              <div class="tool-header">
                <h3><i class="fa-solid fa-calendar"></i> Planificador de Eventos y Presupuesto</h3>
                <p>Organiza tu evento y calcula el presupuesto necesario según asistentes y servicios</p>
              </div>
              
              <div class="tool-content-placeholder">
                <i class="fa-solid fa-tools"></i>
                <p>Herramienta en desarrollo. ¡Muy pronto disponible!</p>
                <button class="tool-notify-button">Recibir aviso cuando esté lista</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tools-info">
          <div class="tools-icon">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <h3>¿Necesitas una herramienta específica para tu negocio?</h3>
          <p>Estamos constantemente desarrollando nuevas herramientas para ayudarte a tomar mejores decisiones en tu negocio.</p>
          <a href="https://wa.me/937054328" class="tools-info-btn" target="_blank" rel="noopener">
            Sugerir Nueva Herramienta <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `;

  document.getElementById("businessToolsContainer").innerHTML = businessTools;

  initBusinessTools();
}

function initBusinessTools() {
  // Tool tabs functionality
  const toolTabs = document.querySelectorAll(".tool-tab");
  const toolContents = document.querySelectorAll(".tool-content");

  toolTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      toolTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all tool contents
      toolContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Show corresponding tool content
      const targetId = tab.getAttribute("data-tool");
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });

  // Property Value Calculator
  const calculatePropertyBtn = document.getElementById(
    "calculate-property-value"
  );
  if (calculatePropertyBtn) {
    calculatePropertyBtn.addEventListener("click", calculatePropertyValue);
  }

  // ROI Calculator
  const calculateRoiBtn = document.getElementById("calculate-roi");
  if (calculateRoiBtn) {
    calculateRoiBtn.addEventListener("click", calculateRoi);
  }

  // Notification buttons for upcoming tools
  const notifyButtons = document.querySelectorAll(".tool-notify-button");
  notifyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showAlert(
        "¡Gracias por tu interés! Te notificaremos cuando esta herramienta esté disponible.",
        "success"
      );
    });
  });

  // Add scroll-triggered animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".section-title, .section-subtitle")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Property Valuation Function
function calculatePropertyValue() {
  // Get input values
  const propertyType = document.getElementById("property-type").value;
  const area = parseFloat(document.getElementById("property-area").value) || 0;
  const location = document.getElementById("property-location").value;
  const bedrooms =
    parseInt(document.getElementById("property-bedrooms").value) || 0;
  const bathrooms =
    parseInt(document.getElementById("property-bathrooms").value) || 0;
  const age = parseInt(document.getElementById("property-age").value) || 0;

  const hasParking = document.getElementById("property-parking").checked;
  const hasGarden = document.getElementById("property-garden").checked;
  const hasSecurity = document.getElementById("property-security").checked;

  // Validate inputs
  if (!propertyType || !area || !location) {
    showAlert(
      "Por favor completa los campos obligatorios: tipo de propiedad, área y zona.",
      "error"
    );
    return;
  }

  // Base prices per m² in Soles by location
  const basePrices = {
    centro: 3500,
    residencial: 2800,
    comercial: 4200,
    periferica: 2000,
    rural: 1200,
  };

  // Multipliers by property type
  const typeMultipliers = {
    casa: 1.0,
    departamento: 1.1,
    terreno: 0.8,
    local: 1.3,
    oficina: 1.2,
  };

  // Calculate base value
  let baseValue = area * basePrices[location] * typeMultipliers[propertyType];

  // Adjustments based on features
  let adjustments = 0;

  if (propertyType !== "terreno") {
    // Age adjustment (decrease value by 0.5% per year, max 25%)
    const ageAdjustment = Math.min(age * 0.005, 0.25);

    // Rooms adjustment
    const roomsAdjustment = bedrooms * 0.05 + bathrooms * 0.03;

    // Additional features
    const featuresAdjustment =
      (hasParking ? 0.05 : 0) +
      (hasGarden ? 0.04 : 0) +
      (hasSecurity ? 0.03 : 0);

    adjustments = roomsAdjustment + featuresAdjustment - ageAdjustment;
  } else {
    // For land, only security matters
    adjustments = hasSecurity ? 0.03 : 0;
  }

  // Calculate final value with adjustments
  const finalValue = baseValue * (1 + adjustments);

  // Add 10% range
  const minValue = finalValue * 0.9;
  const maxValue = finalValue * 1.1;

  // Format the values
  const formatter = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  });

  // Update the results
  document.getElementById("property-value-amount").textContent =
    formatter.format(finalValue);
  document.getElementById(
    "property-value-range"
  ).textContent = `Rango: ${formatter.format(minValue)} - ${formatter.format(
    maxValue
  )}`;

  // Show the results section
  document.getElementById("property-value-result").style.display = "block";

  // Generate recommendations
  const tips = document.getElementById("property-value-tips");
  tips.innerHTML = "";

  // Add tips based on property characteristics
  const addTip = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    tips.appendChild(li);
  };

  if (age > 15) {
    addTip(
      "Considera renovar aspectos clave para aumentar el valor hasta un 20%."
    );
  }

  if (
    !hasParking &&
    (propertyType === "casa" || propertyType === "departamento")
  ) {
    addTip("Añadir estacionamiento podría incrementar el valor hasta un 5%.");
  }

  if (location === "centro" || location === "comercial") {
    addTip(
      "Las propiedades en esta zona tienen alta demanda, un buen momento para vender."
    );
  }

  if (propertyType === "terreno") {
    addTip(
      "Consulta sobre los parámetros urbanísticos para maximizar el valor del terreno."
    );
  }

  // Always add this tip
  addTip(
    "Resalta las características únicas de tu propiedad en tu anuncio para atraer más interesados."
  );

  // Scroll to results
  document
    .getElementById("property-value-result")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ROI Calculator Function
function calculateRoi() {
  // Get input values
  const investment =
    parseFloat(document.getElementById("roi-investment").value) || 0;
  const revenue = parseFloat(document.getElementById("roi-revenue").value) || 0;
  const customers =
    parseInt(document.getElementById("roi-customers").value) || 0;
  const period = parseInt(document.getElementById("roi-period").value) || 1;
  const channel = document.getElementById("roi-channel").value;

  // Validate inputs
  if (!investment || !revenue) {
    showAlert(
      "Por favor ingresa tanto la inversión como los ingresos generados.",
      "error"
    );
    return;
  }

  // Calculate metrics
  const profit = revenue - investment;
  const roi = (profit / investment) * 100;
  const cac = customers > 0 ? investment / customers : 0;

  // Format values
  const currencyFormatter = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  });

  const percentFormatter = new Intl.NumberFormat("es-PE", {
    style: "percent",
    maximumFractionDigits: 1,
  });

  // Update the results
  document.getElementById("roi-percentage").textContent =
    percentFormatter.format(roi / 100);
  document.getElementById("roi-profit").textContent =
    currencyFormatter.format(profit);
  document.getElementById("roi-cac").textContent =
    currencyFormatter.format(cac);

  document.getElementById("chart-investment").textContent =
    currencyFormatter.format(investment);
  document.getElementById("chart-revenue").textContent =
    currencyFormatter.format(revenue);

  // Set chart bar heights proportionally
  const maxValue = Math.max(investment, revenue);
  const investmentBar = document.querySelector(".investment-bar");
  const revenueBar = document.querySelector(".revenue-bar");

  investmentBar.style.height = `${(investment / maxValue) * 100}%`;
  revenueBar.style.height = `${(revenue / maxValue) * 100}%`;

  // Generate analysis
  let analysis = "";

  if (roi < 0) {
    analysis = `Tu campaña publicitaria está generando pérdidas. Por cada sol invertido, estás perdiendo ${percentFormatter.format(
      Math.abs(roi) / 100
    )}. Considera reajustar tu estrategia.`;
  } else if (roi < 50) {
    analysis = `Tu ROI es positivo pero bajo. Por cada sol invertido, obtienes ${percentFormatter.format(
      roi / 100
    )} de retorno. Recomendamos revisar tu estrategia para mejorar la eficiencia.`;
  } else if (roi < 200) {
    analysis = `¡Buen trabajo! Tu ROI es saludable. Por cada sol invertido, obtienes ${percentFormatter.format(
      roi / 100
    )} de retorno. Tu estrategia publicitaria está funcionando bien.`;
  } else {
    analysis = `¡Excelente! Tu ROI es excepcional. Por cada sol invertido, obtienes ${percentFormatter.format(
      roi / 100
    )} de retorno. Tu estrategia publicitaria está siendo muy efectiva.`;
  }

  // Add channel-specific advice
  if (channel) {
    const channelAdvice = {
      digital:
        "Optimiza tus palabras clave y segmentación para mejorar aún más tu rendimiento.",
      social:
        "Analiza qué tipos de contenido generan más engagement para focalizar tus esfuerzos.",
      tradicional:
        "Considera complementar con canales digitales para aumentar el alcance.",
      clasificados:
        "Destaca más tus anuncios con fotos profesionales y descripciones detalladas.",
      email:
        "Prueba diferentes asuntos y horarios de envío para mejorar la tasa de apertura.",
    };

    analysis += ` ${channelAdvice[channel]}`;
  }

  // Add period advice
  if (period > 1) {
    const monthlyRoi = roi / period;
    analysis += ` Tu ROI mensual promedio es de ${percentFormatter.format(
      monthlyRoi / 100
    )}.`;
  }

  document.getElementById("roi-analysis").textContent = analysis;

  // Show the results section
  document.getElementById("roi-result").style.display = "block";

  // Scroll to results
  document
    .getElementById("roi-result")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Alert function (assumes the presence of a showAlert function)
function showAlert(message, type) {
  // Create alert if it doesn't exist
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
      alertContainer.removeChild(alert);
    }, 300);
  });

  // Auto-remove after 5 seconds
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
  }, 5000);
}
