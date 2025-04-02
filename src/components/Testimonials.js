// Testimonials Component
function loadTestimonials() {
  const testimonials = `
    <section id="testimonialsSection" class="pageSection testimonials-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title fade-in-up">
            Lo que dicen nuestros <span class="section-title-highlight">Usuarios</span>
          </h2>
          <p class="section-subtitle fade-in-up">
            Historias de éxito de quienes han impulsado su negocio con PublicAdis
          </p>
        </div>
        
        <div class="testimonials-container">
          <button class="testimonial-nav testimonial-prev" aria-label="Anterior testimonio">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          
          <div class="testimonials-slider">
            <div class="testimonials-track">
              <!-- Testimonial 1 -->
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="testimonial-avatar">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Carlos Mendoza" />
                  </div>
                  <div class="testimonial-info">
                    <h3 class="testimonial-name">Carlos Mendoza</h3>
                    <p class="testimonial-role">Agente Inmobiliario</p>
                  </div>
                  <div class="testimonial-rating">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <span>5.0</span>
                  </div>
                </div>
                <div class="testimonial-content">
                  <p>"Desde que empecé a publicar mis propiedades en PublicAdis, logré alquilar dos departamentos en menos de una semana. El alcance es impresionante y la plataforma es extremadamente fácil de usar."</p>
                </div>
                <div class="testimonial-results">
                  <div class="result-item">
                    <span class="result-value">+320%</span>
                    <span class="result-label">Incremento en consultas</span>
                  </div>
                  <div class="result-item">
                    <span class="result-value">-40%</span>
                    <span class="result-label">Tiempo de cierre</span>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 2 -->
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="testimonial-avatar">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="María Rodríguez" />
                  </div>
                  <div class="testimonial-info">
                    <h3 class="testimonial-name">María Rodríguez</h3>
                    <p class="testimonial-role">Dueña de Restaurante</p>
                  </div>
                  <div class="testimonial-rating">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span>4.5</span>
                  </div>
                </div>
                <div class="testimonial-content">
                  <p>"Gracias a la campaña publicitaria que hice con PublicAdis, mi restaurante aumentó sus ventas en un 60% en solo dos meses. Su equipo me guió en todo el proceso y los resultados fueron inmediatos."</p>
                </div>
                <div class="testimonial-results">
                  <div class="result-item">
                    <span class="result-value">+60%</span>
                    <span class="result-label">Aumento en ventas</span>
                  </div>
                  <div class="result-item">
                    <span class="result-value">+250</span>
                    <span class="result-label">Nuevos clientes</span>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 3 -->
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="testimonial-avatar">
                    <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Javier Gutiérrez" />
                  </div>
                  <div class="testimonial-info">
                    <h3 class="testimonial-name">Javier Gutiérrez</h3>
                    <p class="testimonial-role">Concesionario de Vehículos</p>
                  </div>
                  <div class="testimonial-rating">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <span>5.0</span>
                  </div>
                </div>
                <div class="testimonial-content">
                  <p>"Publiqué mi inventario completo de vehículos en PublicAdis y en un mes vendí el doble de lo habitual. La calidad de los clientes potenciales es excepcional, realmente llegan personas interesadas en comprar."</p>
                </div>
                <div class="testimonial-results">
                  <div class="result-item">
                    <span class="result-value">+120%</span>
                    <span class="result-label">Aumento en ventas</span>
                  </div>
                  <div class="result-item">
                    <span class="result-value">+45%</span>
                    <span class="result-label">Tasa de conversión</span>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 4 -->
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="testimonial-avatar">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Lucía Torres" />
                  </div>
                  <div class="testimonial-info">
                    <h3 class="testimonial-name">Lucía Torres</h3>
                    <p class="testimonial-role">Academia de Idiomas</p>
                  </div>
                  <div class="testimonial-rating">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <span>4.0</span>
                  </div>
                </div>
                <div class="testimonial-content">
                  <p>"Después de meses intentando aumentar nuestras matrículas, PublicAdis nos ayudó a alcanzar nuestra meta en solo dos semanas. Su estrategia publicitaria nos permitió llegar exactamente a nuestro público objetivo."</p>
                </div>
                <div class="testimonial-results">
                  <div class="result-item">
                    <span class="result-value">+80%</span>
                    <span class="result-label">Incremento en matrículas</span>
                  </div>
                  <div class="result-item">
                    <span class="result-value">-30%</span>
                    <span class="result-label">Costo por adquisición</span>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 5 -->
              <div class="testimonial-card">
                <div class="testimonial-header">
                  <div class="testimonial-avatar">
                    <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Daniel Arteaga" />
                  </div>
                  <div class="testimonial-info">
                    <h3 class="testimonial-name">Daniel Arteaga</h3>
                    <p class="testimonial-role">Veterinaria</p>
                  </div>
                  <div class="testimonial-rating">
                    <div class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span>4.5</span>
                  </div>
                </div>
                <div class="testimonial-content">
                  <p>"La cantidad de clientes en nuestra veterinaria se triplicó desde que empezamos a anunciarnos en PublicAdis. Es impresionante cómo nos ayudaron a posicionarnos en el mercado local."</p>
                </div>
                <div class="testimonial-results">
                  <div class="result-item">
                    <span class="result-value">+200%</span>
                    <span class="result-label">Más clientes</span>
                  </div>
                  <div class="result-item">
                    <span class="result-value">+160%</span>
                    <span class="result-label">Incremento en ingresos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button class="testimonial-nav testimonial-next" aria-label="Siguiente testimonio">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="testimonials-dots"></div>
        
        <div class="testimonial-cta fade-in-up">
          <p>Más de 3,000 empresas confían en nosotros para impulsar su crecimiento</p>
          <a href="https://wa.me/937054328" class="testimonial-cta-button" target="_blank" rel="noopener">
            Únete a ellos ahora <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `;

  document.getElementById("testimonialsContainer").innerHTML = testimonials;

  // Wait for DOM to be fully updated before initializing
  setTimeout(() => {
    initTestimonialsSlider();
    initTestimonialAnimations();
  }, 100);
}

function initTestimonialsSlider() {
  try {
    const track = document.querySelector(".testimonials-track");
    const cards = document.querySelectorAll(".testimonial-card");
    const dotsContainer = document.querySelector(".testimonials-dots");
    const prevButton = document.querySelector(".testimonial-prev");
    const nextButton = document.querySelector(".testimonial-next");

    if (
      !track ||
      !cards.length ||
      !prevButton ||
      !nextButton ||
      !dotsContainer
    ) {
      console.error("Faltan elementos del slider de testimonios");
      return;
    }

    let currentSlide = 0;
    const totalSlides = cards.length;

    // Establecer el ancho correcto del track basado en el número de tarjetas
    track.style.width = `${totalSlides * 100}%`;
    cards.forEach((card) => {
      card.style.width = `${100 / totalSlides}%`;
    });

    // Añadir clase visible al primer testimonio
    cards[0].classList.add("active");

    // Crear puntos para la paginación
    dotsContainer.innerHTML = ""; // Limpiar cualquier punto existente
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("button");
      dot.classList.add("testimonial-dot");
      if (i === 0) dot.classList.add("active");
      dot.setAttribute("aria-label", `Ir al testimonio ${i + 1}`);

      dot.addEventListener("click", () => {
        goToSlide(i);
      });

      dotsContainer.appendChild(dot);
    }

    // Configurar navegación
    prevButton.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
    });

    // Manejar navegación con teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        goToSlide(currentSlide - 1);
      } else if (e.key === "ArrowRight") {
        goToSlide(currentSlide + 1);
      }
    });

    // Configurar eventos táctiles
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;

      // Manejar deslizamiento
      if (touchStartX - touchEndX > 50) {
        // Deslizar a la izquierda, ir al siguiente
        goToSlide(currentSlide + 1);
      } else if (touchEndX - touchStartX > 50) {
        // Deslizar a la derecha, ir al anterior
        goToSlide(currentSlide - 1);
      }
    });

    // Avance automático (opcional)
    let autoplayInterval;

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000); // Cambiar cada 5 segundos
    };

    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    // Iniciar autoplay
    startAutoplay();

    // Detener autoplay al pasar el ratón o tocar
    track.addEventListener("mouseenter", stopAutoplay);
    track.addEventListener("touchstart", stopAutoplay);

    // Reanudar autoplay al quitar el ratón o finalizar el toque
    track.addEventListener("mouseleave", startAutoplay);
    track.addEventListener("touchend", startAutoplay);

    function goToSlide(index) {
      // Manejar límites
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }

      // Actualizar slide actual
      currentSlide = index;

      // Mover el track
      const translateX = -currentSlide * (100 / totalSlides);
      track.style.transform = `translateX(${translateX}%)`;

      // Actualizar dots
      document.querySelectorAll(".testimonial-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
      });

      // Actualizar cards activos
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === currentSlide);
      });
    }
  } catch (error) {
    console.error("Error al inicializar el slider de testimonios:", error);
  }
}

function initTestimonialAnimations() {
  // Add animation to testimonials section elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe all fade-in-up elements
  document
    .querySelectorAll(
      "#testimonialsSection .fade-in-up, #testimonialsSection .fade-in"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Additional animations for testimonial cards when they're in view
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Stagger animations of child elements
          const children = entry.target.querySelectorAll(
            ".testimonial-avatar, .testimonial-info, .testimonial-content, .testimonial-results"
          );
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = "1";
              child.style.transform = "translateY(0)";
            }, 100 * index);
          });

          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe testimonial cards
  document.querySelectorAll(".testimonial-card").forEach((card) => {
    // Set initial styles for staggered animation
    const children = card.querySelectorAll(
      ".testimonial-avatar, .testimonial-info, .testimonial-content, .testimonial-results"
    );
    children.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(20px)";
      child.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    cardObserver.observe(card);
  });
}
