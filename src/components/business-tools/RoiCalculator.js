// RoiCalculator.js - Calculadora de ROI Publicitario
class RoiCalculator {
  constructor() {
    this.initialized = false;
    this.benchmarks = {
      digital: {
        low: 150,
        average: 300,
        high: 500,
      },
      social: {
        low: 200,
        average: 350,
        high: 600,
      },
      traditional: {
        low: 80,
        average: 150,
        high: 250,
      },
      classified: {
        low: 220,
        average: 400,
        high: 650,
      },
      email: {
        low: 250,
        average: 500,
        high: 800,
      },
    };
  }

  init() {
    if (this.initialized) return;
    console.log('Initializing RoiCalculator');

    const calculateBtn = document.getElementById("calculate-roi");
    if (calculateBtn) {
      calculateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.calculateRoi();
      });
      this.initialized = true;
      console.log('RoiCalculator initialized successfully');
    } else {
      console.error('Button calculate-roi not found');
    }
  }

  calculateRoi() {
    console.log('Calculating ROI...');
    
    // Obtener valores del formulario
    const investment = parseFloat(
      document.getElementById("total-investment").value
    );
    const revenue = parseFloat(document.getElementById("revenue-generated").value);
    const channel = document.getElementById("advertising-channel").value;
    const customers =
      parseInt(document.getElementById("customers-acquired").value) || 0;
    const period = parseInt(document.getElementById("period").value) || 1;

    console.log('Form values:', {
      investment, revenue, channel, customers, period
    });

    // Validar entrada
    if (isNaN(investment) || isNaN(revenue) || investment <= 0) {
      this.showAlert(
        "Por favor completa los campos de inversión e ingresos correctamente",
        "error"
      );
      return;
    }

    // Calcular métricas básicas
    const profit = revenue - investment;
    const roi = (profit / investment) * 100;
    const cac = customers > 0 ? investment / customers : 0;

    // Formatear números
    const currencyFormatter = new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    const percentFormatter = new Intl.NumberFormat("es-PE", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    // Generar análisis
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

    // Añadir consejo específico por canal
    if (channel) {
      const channelAdvice = {
        digital:
          "Optimiza tus palabras clave y segmentación para mejorar aún más tu rendimiento.",
        social:
          "Analiza qué tipos de contenido generan más engagement para focalizar tus esfuerzos.",
        traditional:
          "Considera complementar con canales digitales para aumentar el alcance.",
        classified:
          "Destaca más tus anuncios con fotos profesionales y descripciones detalladas.",
        email:
          "Prueba diferentes asuntos y horarios de envío para mejorar la tasa de apertura.",
      };

      analysis += ` ${channelAdvice[channel]}`;
    }

    // Añadir consejo de CAC
    if (customers > 0 && channel) {
      const benchmark = this.benchmarks[channel];
      if (benchmark) {
        if (cac < benchmark.low) {
          analysis += ` Tu costo de adquisición de cliente es excelente, significativamente mejor que el promedio del sector.`;
        } else if (cac < benchmark.average) {
          analysis += ` Tu costo de adquisición de cliente es bueno, mejor que el promedio del sector.`;
        } else if (cac < benchmark.high) {
          analysis += ` Tu costo de adquisición de cliente está dentro del promedio del sector.`;
        } else {
          analysis += ` Tu costo de adquisición de cliente es alto. Considera ajustar tu segmentación o mensaje para atraer clientes de forma más eficiente.`;
        }
      }
    }

    // Añadir consejo de período
    if (period > 1) {
      const monthlyRoi = roi / period;
      analysis += ` Tu ROI mensual promedio es de ${monthlyRoi.toFixed(1)}%.`;
    }

    // Preparar el HTML de resultados
    const resultsHTML = `
      <div class="result-summary">
        <div class="chart-container">
          <div class="chart-bar">
            <div class="chart-label">Inversión</div>
            <div class="chart-value investment-bar" style="height: ${investment > revenue ? '100%' : (investment/revenue*100) + '%'}">
              <span>${currencyFormatter.format(investment)}</span>
            </div>
          </div>
          <div class="chart-bar">
            <div class="chart-label">Ingresos</div>
            <div class="chart-value revenue-bar" style="height: ${revenue > investment ? '100%' : (revenue/investment*100) + '%'}">
              <span>${currencyFormatter.format(revenue)}</span>
            </div>
          </div>
        </div>
        
        <div class="metrics">
          <div class="metric">
            <div class="metric-label">ROI</div>
            <div class="metric-value">${roi.toFixed(1)}%</div>
          </div>
          <div class="metric">
            <div class="metric-label">Ganancia</div>
            <div class="metric-value">${currencyFormatter.format(profit)}</div>
          </div>
          <div class="metric">
            <div class="metric-label">CAC</div>
            <div class="metric-value">${customers > 0 ? currencyFormatter.format(cac) : "N/A"}</div>
          </div>
        </div>
      </div>
      
      <div class="result-analysis">
        <h4>Análisis:</h4>
        <p>${analysis}</p>
      </div>
    `;

    // Mostrar resultados
    const resultsContainer = document.getElementById("roi-results");
    if (resultsContainer) {
      resultsContainer.innerHTML = resultsHTML;
      resultsContainer.style.display = "block";
    } else {
      console.error('Results container not found');
    }

    // Mostrar alerta de éxito
    this.showAlert("Análisis de ROI calculado con éxito", "success");
  }
  
  // Método para mostrar alertas
  showAlert(message, type) {
    console.log(`Alert: ${message} (${type})`);
    alert(message);
  }
}

// Exportar constructor
window.RoiCalculator = RoiCalculator;
