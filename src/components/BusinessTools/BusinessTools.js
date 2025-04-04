export class BusinessTools {
  constructor() {
    this.activeTool = 'property-valuation';
    this.tools = {
      'property-valuation': {
        icon: 'fa-home',
        title: 'Calculadora Inmobiliaria',
        description:
          'Estima el valor de mercado de un inmueble basado en sus características y ubicación.',
      },
      'roi-calculator': {
        icon: 'fa-chart-line',
        title: 'Calculadora ROI',
        description:
          'Calcula el retorno de inversión de tus campañas publicitarias y optimiza tu presupuesto.',
      },
      'vehicle-price': {
        icon: 'fa-car',
        title: 'Precio de Vehículos',
        description:
          'Determina el precio justo de mercado para tu vehículo según modelo, año y condición.',
      },
      'salary-compare': {
        icon: 'fa-sack-dollar',
        title: 'Comparador Salarial',
        description:
          'Compara los rangos salariales por puesto y sector para negociar mejor tus condiciones.',
      },
      'social-media': {
        icon: 'fa-share-nodes',
        title: 'Alcance en Redes',
        description:
          'Estima el alcance potencial de tus publicaciones según plataforma, hora y contenido.',
      },
    };
  }

  init() {
    this.render();
    this.setupTools();
  }

  render() {
    const container =
      document.getElementById('businessToolsContainer') || document.querySelector('#businessTools');
    if (!container) return;

    container.innerHTML = `
      <section id="businessTools" class="business-tools-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Herramientas Gratuitas para tu Negocio</h2>
            <p class="section-subtitle">Potencia tu estrategia con nuestras calculadoras y estimadores</p>
          </div>
          
          <div class="tools-container">
            <div class="tools-navigation">
              ${Object.entries(this.tools)
                .map(
                  ([key, tool]) => `
                <button class="tool-tab ${key === this.activeTool ? 'active' : ''}" data-tool="${key}">
                  <i class="fas ${tool.icon}"></i>
                  <span>${tool.title}</span>
                </button>
              `
                )
                .join('')}
            </div>
            
            <div class="tools-content">
              <!-- Calculadora Inmobiliaria -->
              <div class="tool-panel ${this.activeTool === 'property-valuation' ? 'active' : ''}" id="property-valuation-panel">
                <div class="tool-header">
                  <h3><i class="fas fa-home"></i> Calculadora Inmobiliaria</h3>
                  <p>Estima el valor de mercado de cualquier propiedad en Cusco</p>
                </div>
                
                <form class="tool-form" id="propertyForm">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="property-type">Tipo de Propiedad</label>
                      <select id="property-type" required>
                        <option value="">Seleccionar...</option>
                        <option value="apartment">Apartamento</option>
                        <option value="house">Casa</option>
                        <option value="land">Terreno</option>
                        <option value="commercial">Local Comercial</option>
                      </select>
                    </div>
                    
                    <div class="form-group">
                      <label for="property-district">Distrito</label>
                      <select id="property-district" required>
                        <option value="">Seleccionar...</option>
                        <option value="cusco">Cusco</option>
                        <option value="wanchaq">Wanchaq</option>
                        <option value="santiago">Santiago</option>
                        <option value="san-sebastian">San Sebastián</option>
                        <option value="san-jeronimo">San Jerónimo</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="property-area">Área (m²)</label>
                      <input type="number" id="property-area" min="1" required>
                    </div>
                    
                    <div class="form-group">
                      <label for="property-age">Antigüedad (años)</label>
                      <input type="number" id="property-age" min="0" required>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="property-rooms">Habitaciones</label>
                      <input type="number" id="property-rooms" min="0">
                    </div>
                    
                    <div class="form-group">
                      <label for="property-bathrooms">Baños</label>
                      <input type="number" id="property-bathrooms" min="0">
                    </div>
                  </div>
                  
                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Calcular Valor</button>
                    <button type="reset" class="btn btn-outline">Limpiar</button>
                  </div>
                </form>
                
                <div class="tool-result" id="property-result">
                  <div class="result-card">
                    <div class="result-header">
                      <h4>Valor Estimado</h4>
                    </div>
                    
                    <div class="result-content">
                      <div class="result-value">S/. <span id="property-value">0</span></div>
                      <div class="result-range">
                        <span>Rango: S/. <span id="property-min">0</span> - S/. <span id="property-max">0</span></span>
                      </div>
                    </div>
                    
                    <div class="result-footer">
                      <p>* Esta estimación tiene un margen de error de ±10% y debe considerarse como referencial.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Otros paneles de herramientas se agregarían aquí -->
              
              <div class="tool-panel ${this.activeTool === 'roi-calculator' ? 'active' : ''}" id="roi-calculator-panel">
                <div class="tool-header">
                  <h3><i class="fas fa-chart-line"></i> Calculadora de ROI</h3>
                  <p>Calcula el retorno de inversión de tus campañas publicitarias</p>
                </div>
                
                <!-- Contenido de ROI Calculator -->
              </div>
              
              <div class="tool-panel ${this.activeTool === 'vehicle-price' ? 'active' : ''}" id="vehicle-price-panel">
                <div class="tool-header">
                  <h3><i class="fas fa-car"></i> Estimador de Precio de Vehículos</h3>
                  <p>Conoce el valor de mercado de tu vehículo en Cusco</p>
                </div>
                
                <!-- Contenido de Vehicle Price -->
              </div>
              
              <div class="tool-panel ${this.activeTool === 'salary-compare' ? 'active' : ''}" id="salary-compare-panel">
                <div class="tool-header">
                  <h3><i class="fas fa-sack-dollar"></i> Comparador Salarial</h3>
                  <p>Compara tu salario con el promedio del mercado</p>
                </div>
                
                <!-- Contenido de Salary Compare -->
              </div>
              
              <div class="tool-panel ${this.activeTool === 'social-media' ? 'active' : ''}" id="social-media-panel">
                <div class="tool-header">
                  <h3><i class="fas fa-share-nodes"></i> Calculadora de Alcance en Redes</h3>
                  <p>Estima el alcance potencial de tus publicaciones</p>
                </div>
                
                <!-- Contenido de Social Media -->
              </div>
            </div>
          </div>
          
          <div class="tools-info">
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="info-content">
                <h4>100% Seguro y Privado</h4>
                <p>Tus datos no se almacenan ni comparten con terceros.</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-chart-pie"></i>
              </div>
              <div class="info-content">
                <h4>Datos Actualizados</h4>
                <p>Usamos información de mercado actualizada mensualmente.</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-icon">
                <i class="fas fa-code"></i>
              </div>
              <div class="info-content">
                <h4>Algoritmos Avanzados</h4>
                <p>Tecnología de IA para cálculos precisos y personalizados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupTools() {
    // Configurar las pestañas de herramientas
    const tabs = document.querySelectorAll('.tool-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const toolId = tab.getAttribute('data-tool');
        this.setActiveTool(toolId);
      });
    });

    // Configurar formulario de propiedades
    const propertyForm = document.getElementById('propertyForm');
    if (propertyForm) {
      propertyForm.addEventListener('submit', e => {
        e.preventDefault();
        this.calculatePropertyValue();
      });
    }
  }

  setActiveTool(toolId) {
    // Actualizar el estado interno
    this.activeTool = toolId;

    // Actualizar la UI
    const tabs = document.querySelectorAll('.tool-tab');
    const panels = document.querySelectorAll('.tool-panel');

    // Desactivar todas las pestañas y paneles
    tabs.forEach(tab => tab.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    // Activar la pestaña y panel seleccionados
    const selectedTab = document.querySelector(`.tool-tab[data-tool="${toolId}"]`);
    const selectedPanel = document.getElementById(`${toolId}-panel`);

    if (selectedTab) selectedTab.classList.add('active');
    if (selectedPanel) selectedPanel.classList.add('active');
  }

  calculatePropertyValue() {
    // Obtener valores del formulario
    const type = document.getElementById('property-type').value;
    const district = document.getElementById('property-district').value;
    const area = parseFloat(document.getElementById('property-area').value);
    const age = parseInt(document.getElementById('property-age').value);
    const rooms = parseInt(document.getElementById('property-rooms').value || 0);
    const bathrooms = parseInt(document.getElementById('property-bathrooms').value || 0);

    // Precios base por m² según distrito (valores simulados)
    const basePrice = {
      cusco: 3500,
      wanchaq: 3200,
      santiago: 2800,
      'san-sebastian': 2600,
      'san-jeronimo': 2400,
    };

    // Factores según tipo de propiedad
    const typeFactor = {
      apartment: 1.1,
      house: 1.0,
      land: 0.8,
      commercial: 1.3,
    };

    // Cálculo del valor
    let price = basePrice[district] * area * typeFactor[type];

    // Ajuste por antigüedad (depreciar 0.5% por año, máximo 20%)
    const ageFactor = Math.max(0.8, 1 - age * 0.005);
    price = price * ageFactor;

    // Añadir valor por habitaciones y baños si aplica (no para terrenos)
    if (type !== 'land') {
      price += rooms * 10000; // Cada habitación suma 10,000 soles
      price += bathrooms * 15000; // Cada baño suma 15,000 soles
    }

    // Actualizar resultado
    document.getElementById('property-value').textContent =
      Math.round(price).toLocaleString('es-PE');
    document.getElementById('property-min').textContent = Math.round(price * 0.9).toLocaleString(
      'es-PE'
    );
    document.getElementById('property-max').textContent = Math.round(price * 1.1).toLocaleString(
      'es-PE'
    );

    // Mostrar resultado
    document.getElementById('property-result').style.display = 'block';
  }
}
