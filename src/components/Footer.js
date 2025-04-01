// Footer Component
function loadFooter() {
  const footer = `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="./src/assets/images/i01_download-1.png" alt="PublicAdis Logo" class="footer-logo-img" />
            <h2 class="footer-logo-text">PublicAdis</h2>
          </div>
          
          <div class="footer-slogan">
            La plataforma publicitaria líder en Cusco
          </div>
          
          <div class="footer-social">
            <a href="https://wa.me/937054328" class="social-link" title="WhatsApp" rel="noopener" target="_blank">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/publicadis" class="social-link" title="Facebook" rel="noopener" target="_blank">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/publicadis" class="social-link" title="Instagram" rel="noopener" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@publicadis" class="social-link" title="TikTok" rel="noopener" target="_blank">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-middle">
          <div class="footer-nav">
            <h3 class="footer-heading">Navegación</h3>
            <ul class="footer-links">
              <li><a href="#mainSection">Inicio</a></li>
              <li><a href="#benefitsSection">Beneficios</a></li>
              <li><a href="#servicesSection">Servicios</a></li>
              <li><a href="#featuresSection">Características</a></li>
              <li><a href="#applicationSection">Aplicación</a></li>
              <li><a href="#contactsSection">Contáctanos</a></li>
            </ul>
          </div>
          
          <div class="footer-services">
            <h3 class="footer-heading">Servicios</h3>
            <ul class="footer-links">
              <li><a href="#servicesSection" data-target="inmuebles">Inmuebles</a></li>
              <li><a href="#servicesSection" data-target="vehiculos">Vehículos</a></li>
              <li><a href="#servicesSection" data-target="empleos">Empleos</a></li>
              <li><a href="#servicesSection" data-target="servicios">Servicios Profesionales</a></li>
              <li><a href="#servicesSection" data-target="productos">Productos</a></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h3 class="footer-heading">Contacto</h3>
            <ul class="footer-contact-info">
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span>Local físico en San Sebastián, Cusco</span>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span><a href="tel:+51937054328">+51 937 054 328</a></span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span><a href="mailto:publicadis@gmail.com">publicadis@gmail.com</a></span>
              </li>
            </ul>
          </div>
          
          <div class="footer-download">
            <h3 class="footer-heading">Descarga la App</h3>
            <p class="footer-app-description">
              Disponible para dispositivos Android
            </p>
            <a href="https://play.google.com/store/apps/details?id=buscadis.publicadis&pli=1" class="footer-app-button" target="_blank" rel="noopener">
              <i class="fa-brands fa-google-play"></i>
              <span>Descargar App</span>
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-copyright">
            &copy; 2024 PublicAdis - BuscAdis. Todos los derechos reservados.
          </div>
          
          <div class="footer-links-bottom">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.getElementById("footerContainer").innerHTML = footer;

  initFooterFunctionality();
}

function initFooterFunctionality() {
  // Scroll to section functionality for service links
  const serviceLinks = document.querySelectorAll(".footer-services a");
  serviceLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        // Scroll to section
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Select the corresponding tab after a delay
        setTimeout(() => {
          const targetTab = this.getAttribute("data-target");
          if (targetTab) {
            const tab = document.querySelector(
              `.service-tab[data-target="${targetTab}"]`
            );
            if (tab) {
              tab.click();
            }
          }
        }, 800);
      }
    });
  });

  // Add year to copyright text
  const copyrightElement = document.querySelector(".footer-copyright");
  if (copyrightElement) {
    const year = new Date().getFullYear();
    copyrightElement.innerHTML = copyrightElement.innerHTML.replace(
      "2024",
      year
    );
  }
}
