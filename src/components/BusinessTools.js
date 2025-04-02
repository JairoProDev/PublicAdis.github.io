/**
 * Business Tools Component
 * Proporciona calculadoras y herramientas interactivas para diferentes categorías de servicios
 */

function loadBusinessTools() {
  console.log("Loading Business Tools component...");

  const businessToolsContainer = document.getElementById(
    "businessToolsContainer"
  );

  if (!businessToolsContainer) {
    console.error("Business Tools container not found");
    return;
  }

  businessToolsContainer.innerHTML = `
        <section class="business-tools-section">
            <div class="section-header">
                <h2>Herramientas Gratuitas</h2>
                <p>Calculadoras y herramientas exclusivas para impulsar tu negocio</p>
            </div>
            
            <div class="tools-container">
                <div class="tool-tabs">
                    <button class="tool-tab active" data-tool="property-valuation">Calculadora de Valor Inmobiliario</button>
                    <button class="tool-tab" data-tool="roi-calculator">Calculadora de ROI</button>
                    <button class="tool-tab" data-tool="vehicle-price">Calculadora de Precio Vehicular</button>
                    <button class="tool-tab" data-tool="salary-compare">Comparador de Salarios</button>
                    <button class="tool-tab" data-tool="social-media">Alcance en Redes</button>
                    <button class="tool-tab" data-tool="event-planner">Planificador de Eventos</button>
                </div>
                
                <div class="tool-content-container">
                    <!-- Property Valuation Calculator -->
                    <div class="tool-content active" id="property-valuation">
                        <h3>Calculadora de Valor Inmobiliario</h3>
                        <p>Estima el valor de mercado de tu propiedad basado en sus características</p>
                        
                        <div class="tool-form">
                            <div class="form-group">
                                <label for="property-type">Tipo de Propiedad</label>
                                <select id="property-type">
                                    <option value="apartment">Departamento</option>
                                    <option value="house">Casa</option>
                                    <option value="commercial">Local Comercial</option>
                                    <option value="land">Terreno</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="property-area">Área (m²)</label>
                                <input type="number" id="property-area" placeholder="Ej: 120">
                            </div>
                            
                            <div class="form-group">
                                <label for="property-location">Ubicación</label>
                                <select id="property-location">
                                    <option value="centro">Centro Histórico</option>
                                    <option value="moderna">Cusco Moderno</option>
                                    <option value="residencial">Zona Residencial</option>
                                    <option value="periferia">Periferia</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="property-bedrooms">Dormitorios</label>
                                <select id="property-bedrooms">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4+</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="property-bathrooms">Baños</label>
                                <select id="property-bathrooms">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3+</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="property-age">Antigüedad (años)</label>
                                <input type="number" id="property-age" placeholder="Ej: 5">
                            </div>
                            
                            <div class="form-group checkbox-group">
                                <label>Características Adicionales</label>
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" id="has-parking">
                                    <label for="has-parking">Estacionamiento</label>
                                </div>
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" id="has-garden">
                                    <label for="has-garden">Jardín/Terraza</label>
                                </div>
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" id="has-security">
                                    <label for="has-security">Seguridad 24hrs</label>
                                </div>
                            </div>
                            
                            <button id="calculate-property-value" class="calculate-button">Calcular Valor</button>
                        </div>
                        
                        <div class="tool-results" id="property-value-results">
                            <!-- Results will be displayed here -->
                        </div>
                    </div>
                    
                    <!-- ROI Calculator -->
                    <div class="tool-content" id="roi-calculator">
                        <h3>Calculadora de ROI Publicitario</h3>
                        <p>Analiza el retorno de inversión de tus campañas publicitarias</p>
                        
                        <div class="tool-form">
                            <div class="form-group">
                                <label for="total-investment">Inversión Total (S/.)</label>
                                <input type="number" id="total-investment" placeholder="Ej: 1000">
                            </div>
                            
                            <div class="form-group">
                                <label for="revenue-generated">Ingresos Generados (S/.)</label>
                                <input type="number" id="revenue-generated" placeholder="Ej: 3000">
                            </div>
                            
                            <div class="form-group">
                                <label for="advertising-channel">Principal Canal de Publicidad</label>
                                <select id="advertising-channel">
                                    <option value="digital">Marketing Digital</option>
                                    <option value="social">Redes Sociales</option>
                                    <option value="traditional">Publicidad Tradicional</option>
                                    <option value="classified">Anuncios Clasificados</option>
                                    <option value="email">Email Marketing</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="customers-acquired">Clientes Adquiridos</label>
                                <input type="number" id="customers-acquired" placeholder="Ej: 50">
                            </div>
                            
                            <div class="form-group">
                                <label for="period">Período (meses)</label>
                                <select id="period">
                                    <option value="1">1 mes</option>
                                    <option value="3">3 meses</option>
                                    <option value="6">6 meses</option>
                                    <option value="12">12 meses</option>
                                </select>
                            </div>
                            
                            <button id="calculate-roi" class="calculate-button">Calcular ROI</button>
                        </div>
                        
                        <div class="tool-results" id="roi-results">
                            <!-- Results will be displayed here -->
                        </div>
                    </div>
                    
                    <!-- Vehicle Price Calculator -->
                    <div class="tool-content" id="vehicle-price">
                        <h3>Calculadora de Precio Vehicular</h3>
                        <p>Estima el valor de mercado de tu vehículo según sus características</p>
                        
                        <div class="tool-form">
                            <div class="soon-overlay">
                                <div class="soon-message">
                                    <h4>¡Próximamente!</h4>
                                    <p>Estamos trabajando en esta herramienta. Recibe una notificación cuando esté disponible:</p>
                                    <input type="email" placeholder="Tu correo electrónico">
                                    <button id="vehicle-notify" class="notify-button">Notificarme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Salary Compare Tool -->
                    <div class="tool-content" id="salary-compare">
                        <h3>Comparador de Salarios</h3>
                        <p>Compara tu salario con el promedio del mercado</p>
                        
                        <div class="tool-form">
                            <div class="soon-overlay">
                                <div class="soon-message">
                                    <h4>¡Próximamente!</h4>
                                    <p>Estamos trabajando en esta herramienta. Recibe una notificación cuando esté disponible:</p>
                                    <input type="email" placeholder="Tu correo electrónico">
                                    <button id="salary-notify" class="notify-button">Notificarme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Media Reach Tool -->
                    <div class="tool-content" id="social-media">
                        <h3>Calculadora de Alcance en Redes Sociales</h3>
                        <p>Estima el alcance y engagement de tus publicaciones en redes sociales</p>
                        
                        <div class="tool-form">
                            <div class="soon-overlay">
                                <div class="soon-message">
                                    <h4>¡Próximamente!</h4>
                                    <p>Estamos trabajando en esta herramienta. Recibe una notificación cuando esté disponible:</p>
                                    <input type="email" placeholder="Tu correo electrónico">
                                    <button id="social-notify" class="notify-button">Notificarme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Event Planner Tool -->
                    <div class="tool-content" id="event-planner">
                        <h3>Planificador de Eventos</h3>
                        <p>Calcula presupuestos y recursos necesarios para tu evento</p>
                        
                        <div class="tool-form">
                            <div class="soon-overlay">
                                <div class="soon-message">
                                    <h4>¡Próximamente!</h4>
                                    <p>Estamos trabajando en esta herramienta. Recibe una notificación cuando esté disponible:</p>
                                    <input type="email" placeholder="Tu correo electrónico">
                                    <button id="event-notify" class="notify-button">Notificarme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

  // Cargar componentes individuales
  loadBusinessToolComponents();

  // Inicializar interacciones después de cargar el HTML
  setTimeout(() => {
    initBusinessTools();
  }, 100);
}

// Cargar los componentes individuales de herramientas
function loadBusinessToolComponents() {
  // Array de rutas a los componentes individuales
  const toolComponentPaths = [
    "./src/components/business-tools/PropertyValueCalculator.js",
    "./src/components/business-tools/RoiCalculator.js",
    "./src/components/business-tools/VehiclePriceCalculator.js",
    "./src/components/business-tools/SalaryCompareCalculator.js",
  ];

  // Cargar cada componente de forma dinámica
  toolComponentPaths.forEach((path) => {
    const script = document.createElement("script");
    script.src = path;
    script.async = true;
    script.onerror = () => console.error(`Error loading component: ${path}`);
    document.head.appendChild(script);
  });

  console.log("Business tool components loading...");
}

// Inicializar las interacciones de las herramientas
function initBusinessTools() {
  // Activar tabs de herramientas
  const toolTabs = document.querySelectorAll(".tool-tab");
  const toolContents = document.querySelectorAll(".tool-content");

  toolTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remover clase activa de todos los tabs
      toolTabs.forEach((t) => t.classList.remove("active"));
      // Añadir clase activa al tab clickeado
      tab.classList.add("active");

      // Ocultar todos los contenidos
      toolContents.forEach((content) => content.classList.remove("active"));
      // Mostrar el contenido correspondiente
      const toolId = tab.getAttribute("data-tool");
      document.getElementById(toolId).classList.add("active");
    });
  });

  // Inicializar calculadora de valor inmobiliario si existe la clase
  if (typeof PropertyValueCalculator === "function") {
    try {
      const propertyCalculator = new PropertyValueCalculator();
      propertyCalculator.init();
      console.log("Property Value Calculator initialized");
    } catch (error) {
      console.error("Error initializing Property Value Calculator:", error);
    }
  } else {
    console.log("Property Value Calculator class not loaded yet");
    // Añadir evento al botón de cálculo para manejar la funcionalidad mientras se carga el componente
    const calculateButton = document.getElementById("calculate-property-value");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => {
        alert(
          "Cargando calculadora. Por favor, inténtalo de nuevo en unos segundos."
        );
      });
    }
  }

  // Inicializar calculadora ROI si existe la clase
  if (typeof RoiCalculator === "function") {
    try {
      const roiCalculator = new RoiCalculator();
      roiCalculator.init();
      console.log("ROI Calculator initialized");
    } catch (error) {
      console.error("Error initializing ROI Calculator:", error);
    }
  } else {
    console.log("ROI Calculator class not loaded yet");
    // Añadir evento al botón de cálculo para manejar la funcionalidad mientras se carga el componente
    const calculateButton = document.getElementById("calculate-roi");
    if (calculateButton) {
      calculateButton.addEventListener("click", () => {
        alert(
          "Cargando calculadora. Por favor, inténtalo de nuevo en unos segundos."
        );
      });
    }
  }

  // Configurar botones de notificación para herramientas próximamente
  const notifyButtons = document.querySelectorAll(".notify-button");
  notifyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const email = this.previousElementSibling.value;
      if (email && validateEmail(email)) {
        alert(
          `Te notificaremos a ${email} cuando esta herramienta esté disponible.`
        );
        this.previousElementSibling.value = "";
      } else {
        alert("Por favor, ingresa un correo electrónico válido.");
      }
    });
  });

  console.log("Business Tools initialized successfully");
}

// Validar formato de email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
