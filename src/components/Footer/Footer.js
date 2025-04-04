export class Footer {
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  init() {
    this.render();
  }

  render() {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;

    footer.innerHTML = `
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="/assets/images/logo-white.png" alt="PublicAdis Logo">
            <p>Revolucionando la publicidad digital con tecnología disruptiva y soluciones innovadoras.</p>
          </div>
          
          <div class="footer-social">
            <h4>Síguenos</h4>
            <div class="social-links">
              <a href="https://facebook.com/publicadis" target="_blank" rel="noopener">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/publicadis" target="_blank" rel="noopener">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/publicadis" target="_blank" rel="noopener">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/publicadis" target="_blank" rel="noopener">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-middle">
          <div class="footer-section">
            <h4>Empresa</h4>
            <ul class="footer-links">
              <li><a href="/nosotros"><i class="fas fa-chevron-right"></i>Sobre Nosotros</a></li>
              <li><a href="/equipo"><i class="fas fa-chevron-right"></i>Nuestro Equipo</a></li>
              <li><a href="/carreras"><i class="fas fa-chevron-right"></i>Trabaja con Nosotros</a></li>
              <li><a href="/blog"><i class="fas fa-chevron-right"></i>Blog</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Servicios</h4>
            <ul class="footer-links">
              <li><a href="/servicios/publicidad"><i class="fas fa-chevron-right"></i>Publicidad Digital</a></li>
              <li><a href="/servicios/analitica"><i class="fas fa-chevron-right"></i>Analítica Avanzada</a></li>
              <li><a href="/servicios/automatizacion"><i class="fas fa-chevron-right"></i>Automatización</a></li>
              <li><a href="/servicios/consultoria"><i class="fas fa-chevron-right"></i>Consultoría</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Recursos</h4>
            <ul class="footer-links">
              <li><a href="/recursos/guias"><i class="fas fa-chevron-right"></i>Guías y Tutoriales</a></li>
              <li><a href="/recursos/webinars"><i class="fas fa-chevron-right"></i>Webinars</a></li>
              <li><a href="/recursos/casos"><i class="fas fa-chevron-right"></i>Casos de Éxito</a></li>
              <li><a href="/recursos/documentacion"><i class="fas fa-chevron-right"></i>Documentación API</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Soporte</h4>
            <ul class="footer-links">
              <li><a href="/soporte"><i class="fas fa-chevron-right"></i>Centro de Ayuda</a></li>
              <li><a href="/contacto"><i class="fas fa-chevron-right"></i>Contáctanos</a></li>
              <li><a href="/faq"><i class="fas fa-chevron-right"></i>Preguntas Frecuentes</a></li>
              <li><a href="/estado"><i class="fas fa-chevron-right"></i>Estado del Sistema</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Legal</h4>
            <ul class="footer-links">
              <li><a href="/legal/terminos"><i class="fas fa-chevron-right"></i>Términos de Servicio</a></li>
              <li><a href="/legal/privacidad"><i class="fas fa-chevron-right"></i>Política de Privacidad</a></li>
              <li><a href="/legal/cookies"><i class="fas fa-chevron-right"></i>Política de Cookies</a></li>
              <li><a href="/legal/seguridad"><i class="fas fa-chevron-right"></i>Seguridad</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${this.currentYear} PublicAdis. Todos los derechos reservados.</p>
          
          <div class="footer-badges">
            <img src="/assets/images/badges/ssl-secure.png" alt="SSL Secure">
            <img src="/assets/images/badges/gdpr-compliant.png" alt="GDPR Compliant">
            <img src="/assets/images/badges/iso-certified.png" alt="ISO Certified">
          </div>
        </div>
      </div>
    `;
  }
}
