// Services Component
function loadServices() {
  const services = `
    <section id="servicesSection" class="pageSection services-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title fade-in-up">
            Soluciones Completas para
            <span class="section-title-highlight">Tu Negocio</span>
          </h2>
          <p class="section-subtitle fade-in-up">
            Ofrecemos servicios especializados para diferentes sectores y
            necesidades
          </p>
        </div>

        <div class="services-wrapper">
          <div class="services-tabs">
            <button
              class="service-tab active"
              data-target="inmuebles"
              title="Servicios de Inmuebles"
            >
              <i class="fa-solid fa-building"></i>
              <span>Inmuebles</span>
            </button>
            <button
              class="service-tab"
              data-target="vehiculos"
              title="Servicios de Vehículos"
            >
              <i class="fa-solid fa-car"></i>
              <span>Vehículos</span>
            </button>
            <button
              class="service-tab"
              data-target="empleos"
              title="Servicios de Empleos"
            >
              <i class="fa-solid fa-briefcase"></i>
              <span>Empleos</span>
            </button>
            <button
              class="service-tab"
              data-target="servicios"
              title="Servicios Profesionales"
            >
              <i class="fa-solid fa-tools"></i>
              <span>Servicios</span>
            </button>
            <button
              class="service-tab"
              data-target="productos"
              title="Venta de Productos"
            >
              <i class="fa-solid fa-tags"></i>
              <span>Productos</span>
            </button>
            <button
              class="service-tab"
              data-target="comunidad"
              title="Comunidad y Redes"
            >
              <i class="fa-solid fa-users"></i>
              <span>Comunidad</span>
            </button>
            <button
              class="service-tab"
              data-target="negocios"
              title="Negocios y Empresas"
            >
              <i class="fa-solid fa-store"></i>
              <span>Negocios</span>
            </button>
            <button
              class="service-tab"
              data-target="eventos"
              title="Eventos y Actividades"
            >
              <i class="fa-solid fa-calendar-alt"></i>
              <span>Eventos</span>
            </button>
          </div>

          <div class="services-content">
            <!-- Inmuebles Content -->
            <div class="service-content active" id="inmuebles">
              <div class="service-info">
                <h3 class="service-content-title">
                  Vende, Alquila o Pon en Anticresis tus Inmuebles
                </h3>
                <p class="service-content-description">
                  Conecta con clientes interesados en comprar, alquilar o
                  tomar en anticresis tu propiedad. Publica todo tipo de
                  inmuebles: departamentos, casas, terrenos, locales
                  comerciales, oficinas y habitaciones.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Fotos de alta calidad en
                    todos los canales
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Ubicación exacta con
                    mapa interactivo
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Detalles completos de la
                    propiedad
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Contacto directo con
                    interesados
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Destacados en nuestro
                    local físico
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Inmueble
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/inmuebles.jpg"
                  alt="Servicios de Inmuebles"
                  onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-building"></i></span>
                  <span class="badge-text">Inmuebles</span>
                </div>
              </div>
            </div>

            <!-- Vehículos Content -->
            <div class="service-content" id="vehiculos">
              <div class="service-info">
                <h3 class="service-content-title">
                  Vende o Alquila tus Vehículos Rápidamente
                </h3>
                <p class="service-content-description">
                  Muestra tus autos, motos, camiones, maquinaria y otros
                  vehículos a compradores potenciales interesados. Alcanza un
                  público amplio en todas nuestras plataformas.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Galería de imágenes
                    detalladas
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Información técnica
                    completa
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Videos promocionales en
                    TikTok
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Historial y
                    documentación
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Destacados en nuestras
                    redes sociales
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Vehículo
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/vehiculos.jpg"
                  alt="Servicios de Vehículos"
                  onerror="this.src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-car"></i></span>
                  <span class="badge-text">Vehículos</span>
                </div>
              </div>
            </div>

            <!-- Empleos Content -->
            <div class="service-content" id="empleos">
              <div class="service-info">
                <h3 class="service-content-title">
                  Encuentra Personal Calificado o un Mejor Empleo
                </h3>
                <p class="service-content-description">
                  Conecta con profesionales cualificados o encuentra tu próxima oportunidad 
                  laboral. Publica ofertas de trabajo o tu CV para destacar tus habilidades 
                  en el mercado laboral de Cusco.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Perfiles verificados de candidatos
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Filtros por experiencia y sector
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Gestión de aplicaciones sencilla
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Publicación en múltiples canales
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Notificaciones en tiempo real
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Empleo
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/empleos.jpg"
                  alt="Servicios de Empleos"
                  onerror="this.src='https://images.unsplash.com/photo-1568598035424-7070b67317d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-briefcase"></i></span>
                  <span class="badge-text">Empleos</span>
                </div>
              </div>
            </div>

            <!-- Servicios Profesionales -->
            <div class="service-content" id="servicios">
              <div class="service-info">
                <h3 class="service-content-title">
                  Promociona tus Servicios Profesionales
                </h3>
                <p class="service-content-description">
                  Ofrece tus servicios profesionales y llega a clientes potenciales en toda la 
                  región. Ideal para profesionales independientes, especialistas técnicos y 
                  proveedores de todo tipo de servicios.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Portafolio de trabajos realizados
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Sistema de valoraciones y reseñas
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Detalles de certificaciones profesionales
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Horarios de disponibilidad
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Presencia en redes especializadas
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Servicio
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/servicios.jpg"
                  alt="Servicios Profesionales"
                  onerror="this.src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-tools"></i></span>
                  <span class="badge-text">Servicios</span>
                </div>
              </div>
            </div>

            <!-- Productos -->
            <div class="service-content" id="productos">
              <div class="service-info">
                <h3 class="service-content-title">
                  Vende tus Productos a un Público más Amplio
                </h3>
                <p class="service-content-description">
                  Comercializa tus productos nuevos o usados de forma rápida y efectiva. 
                  Ideal para tiendas, microempresarios o personas que desean vender 
                  artículos específicos.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Fotografías profesionales de productos
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Descripción detallada de artículos
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Categorización avanzada para mejor visibilidad
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Exposición en múltiples canales de venta
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Opciones de entrega y pago seguras
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Producto
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/productos.jpg"
                  alt="Venta de Productos"
                  onerror="this.src='https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-tags"></i></span>
                  <span class="badge-text">Productos</span>
                </div>
              </div>
            </div>

            <!-- Comunidad -->
            <div class="service-content" id="comunidad">
              <div class="service-info">
                <h3 class="service-content-title">
                  Conecta con tu Comunidad y Haz Crecer tu Red
                </h3>
                <p class="service-content-description">
                  Establece conexiones comunitarias, crea grupos de interés o promueve 
                  actividades vecinales. Perfecto para asociaciones, grupos, cooperativas 
                  y organizaciones comunitarias.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Creación de grupos temáticos
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Calendario de actividades comunitarias
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Foros de discusión interactivos
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Anuncios dirigidos a tu comunidad
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Difusión en canales locales y regionales
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Crear Comunidad
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/comunidad.jpg"
                  alt="Comunidad y Redes"
                  onerror="this.src='https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-users"></i></span>
                  <span class="badge-text">Comunidad</span>
                </div>
              </div>
            </div>

            <!-- Negocios -->
            <div class="service-content" id="negocios">
              <div class="service-info">
                <h3 class="service-content-title">
                  Impulsa tu Empresa o Negocio Local
                </h3>
                <p class="service-content-description">
                  Da visibilidad a tu negocio, tienda, restaurante o empresa de servicios. 
                  Alcanza a nuevos clientes y consolida tu presencia digital y física en 
                  la región de Cusco.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Perfil comercial completo y profesional
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Catálogo de productos/servicios personalizado
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Horarios y ubicación exacta con mapa
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Promociones especiales destacadas
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Presencia en nuestra guía comercial
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Negocio
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/negocios.jpg"
                  alt="Negocios y Empresas"
                  onerror="this.src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-store"></i></span>
                  <span class="badge-text">Negocios</span>
                </div>
              </div>
            </div>

            <!-- Eventos -->
            <div class="service-content" id="eventos">
              <div class="service-info">
                <h3 class="service-content-title">
                  Promociona y Organiza Eventos Exitosos
                </h3>
                <p class="service-content-description">
                  Anuncia y gestiona todo tipo de eventos: culturales, empresariales, 
                  educativos, festivos o deportivos. Maximiza la asistencia y el 
                  impacto de tus eventos en la región.
                </p>

                <ul class="service-features">
                  <li>
                    <i class="fa-solid fa-check"></i> Página detallada del evento con toda la información
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Sistema de registro de asistentes
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Recordatorios automáticos para participantes
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Difusión en múltiples canales promocionales
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i> Reportes post-evento de asistencia
                  </li>
                </ul>

                <div class="service-action">
                  <a
                    href="https://wa.me/937054328"
                    class="btn-service"
                    target="_blank"
                    rel="noopener"
                  >
                    Publicar Evento
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="service-image">
                <div class="image-overlay"></div>
                <img
                  src="./src/assets/images/services/eventos.jpg"
                  alt="Eventos y Actividades"
                  onerror="this.src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'"
                />
                <div class="service-badge">
                  <span class="badge-icon"><i class="fa-solid fa-calendar-alt"></i></span>
                  <span class="badge-text">Eventos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="services-cta">
          <div class="cta-card">
            <div class="cta-icon">
              <i class="fa-solid fa-rocket"></i>
            </div>
            <h3>¿Listo para impulsar tu negocio?</h3>
            <p>Comienza a publicar tus anuncios hoy mismo</p>
            <a href="https://wa.me/937054328" target="_blank" rel="noopener" class="cta-button">
              Publicar Ahora <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="services-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  `;

  document.getElementById("servicesContainer").innerHTML = services;

  initServicesInteraction();
}

function initServicesInteraction() {
  // Tab switching functionality
  const serviceTabs = document.querySelectorAll(".service-tab");
  const serviceContents = document.querySelectorAll(".service-content");

  serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      serviceTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all content
      serviceContents.forEach((content) => {
        content.classList.remove("active");
        content.classList.remove("slide-in");
      });

      // Show targeted content with animation
      const targetId = tab.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.add("active");
        setTimeout(() => {
          targetContent.classList.add("slide-in");
        }, 50);
      }
    });
  });

  // Add animation on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            entry.target.classList.contains("section-title") ||
            entry.target.classList.contains("section-subtitle")
          ) {
            entry.target.classList.add("visible");
          }

          if (entry.target.classList.contains("services-wrapper")) {
            entry.target.classList.add("fade-in");

            // Animate each tab with delay
            const tabs = entry.target.querySelectorAll(".service-tab");
            tabs.forEach((tab, index) => {
              setTimeout(() => {
                tab.classList.add("fade-in");
              }, index * 100);
            });

            // Show active content
            setTimeout(() => {
              const activeContent = entry.target.querySelector(
                ".service-content.active"
              );
              if (activeContent) {
                activeContent.classList.add("slide-in");
              }
            }, 300);
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(document.querySelector(".section-title"));
  observer.observe(document.querySelector(".section-subtitle"));
  observer.observe(document.querySelector(".services-wrapper"));
}
