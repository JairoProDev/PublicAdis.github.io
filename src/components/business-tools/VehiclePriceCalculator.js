// VehiclePriceCalculator.js - Calculadora de Precios de Vehículos
class VehiclePriceCalculator {
  constructor() {
    this.initialized = false;
    this.baseValues = {
      auto: {
        sedan: { base: 35000, yearFactor: 2000 },
        suv: { base: 45000, yearFactor: 2500 },
        hatchback: { base: 30000, yearFactor: 1800 },
        pickup: { base: 50000, yearFactor: 2800 },
        deportivo: { base: 70000, yearFactor: 4000 },
      },
      moto: {
        deportiva: { base: 15000, yearFactor: 1000 },
        scooter: { base: 8000, yearFactor: 600 },
        touring: { base: 18000, yearFactor: 1200 },
        offroad: { base: 12000, yearFactor: 800 },
      },
      camion: {
        ligero: { base: 80000, yearFactor: 4000 },
        mediano: { base: 120000, yearFactor: 5000 },
        pesado: { base: 180000, yearFactor: 7000 },
      },
    };

    this.brandFactors = {
      auto: {
        toyota: 1.1,
        nissan: 1.0,
        hyundai: 0.95,
        kia: 0.9,
        honda: 1.05,
        volkswagen: 1.0,
        bmw: 1.4,
        mercedes: 1.45,
        audi: 1.35,
        ford: 0.95,
        chevrolet: 0.9,
        suzuki: 0.85,
        subaru: 1.1,
      },
      moto: {
        honda: 1.1,
        yamaha: 1.05,
        suzuki: 1.0,
        kawasaki: 1.1,
        ktm: 1.15,
        bmw: 1.3,
        ducati: 1.4,
        harley: 1.25,
        bajaj: 0.8,
        royal: 1.1,
      },
      camion: {
        volvo: 1.2,
        mercedes: 1.25,
        scania: 1.15,
        iveco: 1.0,
        man: 1.1,
        hino: 1.05,
        isuzu: 0.95,
        faw: 0.85,
        kenworth: 1.15,
        mack: 1.1,
      },
    };

    this.conditionFactors = {
      excelente: 1.1,
      bueno: 1.0,
      regular: 0.85,
      "necesita-reparacion": 0.7,
    };

    this.cityFactors = {
      lima: 1.1,
      arequipa: 1.0,
      cusco: 0.95,
      trujillo: 0.98,
      piura: 0.9,
      chiclayo: 0.92,
      iquitos: 0.85,
      puno: 0.88,
      tacna: 0.9,
      huancayo: 0.9,
    };
  }

  init() {
    if (this.initialized) return;

    // Aquí iría la inicialización del formulario de cálculo
    this.initialized = true;

    // Ya que este es un placeholder, mostramos una notificación
    const notifyButton = document.querySelector(
      "#vehiclePrice .tool-notify-button"
    );
    if (notifyButton) {
      notifyButton.addEventListener("click", () => {
        showAlert(
          "Te avisaremos cuando esta herramienta esté disponible",
          "info"
        );
      });
    }
  }

  calculateVehiclePrice(
    vehicleType,
    vehicleSubtype,
    brand,
    year,
    mileage,
    condition,
    city,
    extras
  ) {
    // Verificar si tenemos los datos necesarios para el tipo y subtipo
    if (
      !this.baseValues[vehicleType] ||
      !this.baseValues[vehicleType][vehicleSubtype]
    ) {
      return {
        success: false,
        message: "Tipo o subtipo de vehículo no reconocido",
      };
    }

    // Obtener valores base
    const baseInfo = this.baseValues[vehicleType][vehicleSubtype];
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    // Calcular valor base ajustado por año
    let price = baseInfo.base - age * baseInfo.yearFactor;

    // Aplicar factor de marca
    if (
      this.brandFactors[vehicleType] &&
      this.brandFactors[vehicleType][brand]
    ) {
      price *= this.brandFactors[vehicleType][brand];
    }

    // Ajustar por kilometraje (mayor impacto en vehículos más nuevos)
    const mileageImpact = Math.min(0.3, (mileage / 10000) * 0.03);
    price *= 1 - mileageImpact;

    // Ajustar por condición
    if (this.conditionFactors[condition]) {
      price *= this.conditionFactors[condition];
    }

    // Ajustar por ciudad
    if (this.cityFactors[city]) {
      price *= this.cityFactors[city];
    }

    // Ajustar por extras
    if (extras && extras.length > 0) {
      const extraFactors = {
        cuero: 0.05,
        sunroof: 0.07,
        alarma: 0.02,
        sensores: 0.03,
        camara: 0.04,
        gps: 0.03,
        bluetooth: 0.01,
        airbags: 0.05,
        turbo: 0.08,
        awd: 0.1,
      };

      extras.forEach((extra) => {
        if (extraFactors[extra]) {
          price *= 1 + extraFactors[extra];
        }
      });
    }

    // Redondear el precio
    price = Math.round(price / 100) * 100;

    // Calcular rango
    const minPrice = Math.round((price * 0.9) / 100) * 100;
    const maxPrice = Math.round((price * 1.1) / 100) * 100;

    return {
      success: true,
      basePrice: price,
      minPrice: minPrice,
      maxPrice: maxPrice,
      priceRange: `${minPrice} - ${maxPrice}`,
    };
  }
}

// Exportar constructor
window.VehiclePriceCalculator = VehiclePriceCalculator;
