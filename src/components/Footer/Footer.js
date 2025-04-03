export class Footer {
  init() {
    this.render();
  }

  render() {
    const footerContainer = document.getElementById("footerContainer");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-top">
            <div class="footer-logo">
              <img src="/src/assets/images/logo-white.png" alt="PublicAdis Logo" />
              <p>La plataforma publicitaria más completa de Cusco</p>
            </div>
            
            <div class="footer-social">
              <h4>Síguenos</h4>
              <div class="social-links">
                <a href="https://facebook.com/publicadis" target="_blank" rel="noopener">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/publicadis" target="_blank" rel="noopener">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://tiktok.com/@publicadis" target="_blank" rel="noopener">
                  <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://wa.me/937054328" target="_blank" rel="noopener">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-middle">
            <div class="footer-section">
              <h4>Servicios</h4>
              <ul class="footer-links">
                <li><a href="#publicidad">Publicidad Digital</a></li>
                <li><a href="#marketing">Marketing Digital</a></li>
                <li><a href="#diseno">Diseño Gráfico</a></li>
                <li><a href="#web">Desarrollo Web</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Categorías</h4>
              <ul class="footer-links">
                <li><a href="#inmuebles">Inmuebles</a></li>
                <li><a href="#vehiculos">Vehículos</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#productos">Productos</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Empresa</h4>
              <ul class="footer-links">
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#prensa">Sala de Prensa</a></li>
                <li><a href="#empleos">Empleos</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Legal</h4>
              <ul class="footer-links">
                <li><a href="#privacidad">Privacidad</a></li>
                <li><a href="#terminos">Términos</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#licencias">Licencias</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Herramientas</h4>
              <ul class="footer-links">
                <li>
                  <a href="#calculadora-roi">
                    <i class="fas fa-calculator"></i>
                    Calculadora ROI
                  </a>
                </li>
                <li>
                  <a href="#analisis-mercado">
                    <i class="fas fa-chart-line"></i>
                    Análisis de Mercado
                  </a>
                </li>
                <li>
                  <a href="#planificador">
                    <i class="fas fa-tasks"></i>
                    Planificador
                  </a>
                </li>
                <li>
                  <a href="#recursos">
                    <i class="fas fa-download"></i>
                    Recursos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} PublicAdis. Todos los derechos reservados.</p>
            <div class="footer-badges">
              <img src="/src/assets/images/payment-methods.png" alt="Métodos de pago" />
              <img src="/src/assets/images/security-badges.png" alt="Certificados de seguridad" />
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
