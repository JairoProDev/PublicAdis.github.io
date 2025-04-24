import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, sectionId, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.click();
          }
        }
      }, 800);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/assets/images/logo-white.png" alt="PublicAdis Logo" className="footer-logo-img" />
            <h2 className="footer-logo-text">PublicAdis</h2>
          </div>

          <div className="footer-slogan">
            La plataforma publicitaria líder en Cusco
          </div>

          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://wa.me/937054328" className="social-link" title="WhatsApp" rel="noopener" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/publicadis" className="social-link" title="Facebook" rel="noopener" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/publicadis" className="social-link" title="Instagram" rel="noopener" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@publicadis" className="social-link" title="TikTok" rel="noopener" target="_blank">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://linkedin.com/company/publicadis" target="_blank" rel="noopener">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-section">
            <h3 className="footer-heading">Empresa</h3>
            <ul className="footer-links">
              <li><Link to="/nosotros"><i className="fas fa-chevron-right"></i>Sobre Nosotros</Link></li>
              <li><Link to="/equipo"><i className="fas fa-chevron-right"></i>Nuestro Equipo</Link></li>
              <li><Link to="/carreras"><i className="fas fa-chevron-right"></i>Trabaja con Nosotros</Link></li>
              <li><Link to="/blog"><i className="fas fa-chevron-right"></i>Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Servicios</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => scrollToSection(e, '#servicesSection', '.service-tab[data-target="inmuebles"]')}><i className="fas fa-chevron-right"></i>Inmuebles</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, '#servicesSection', '.service-tab[data-target="vehiculos"]')}><i className="fas fa-chevron-right"></i>Vehículos</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, '#servicesSection', '.service-tab[data-target="empleos"]')}><i className="fas fa-chevron-right"></i>Empleos</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, '#servicesSection', '.service-tab[data-target="servicios"]')}><i className="fas fa-chevron-right"></i>Servicios Profesionales</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, '#servicesSection', '.service-tab[data-target="productos"]')}><i className="fas fa-chevron-right"></i>Productos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Recursos</h3>
            <ul className="footer-links">
              <li><Link to="/recursos/guias"><i className="fas fa-chevron-right"></i>Guías y Tutoriales</Link></li>
              <li><Link to="/recursos/webinars"><i className="fas fa-chevron-right"></i>Webinars</Link></li>
              <li><Link to="/recursos/casos"><i className="fas fa-chevron-right"></i>Casos de Éxito</Link></li>
              <li><Link to="/recursos/documentacion"><i className="fas fa-chevron-right"></i>Documentación API</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Herramientas</h3>
            <ul className="footer-links">
              <li>
                <a href="#" onClick={(e) => scrollToSection(e, '#businessToolsSection', '.tool-tab[data-tool="property-valuation"]')}>
                  <i className="fa-solid fa-home"></i> Calculadora Inmobiliaria
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => scrollToSection(e, '#businessToolsSection', '.tool-tab[data-tool="roi-calculator"]')}>
                  <i className="fa-solid fa-chart-line"></i> Calculadora ROI
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => scrollToSection(e, '#businessToolsSection', '.tool-tab[data-tool="vehicle-price"]')}>
                  <i className="fa-solid fa-car"></i> Precio de Vehículos
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => scrollToSection(e, '#businessToolsSection', '.tool-tab[data-tool="salary-compare"]')}>
                  <i className="fa-solid fa-sack-dollar"></i> Comparador Salarial
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => scrollToSection(e, '#businessToolsSection', '.tool-tab[data-tool="social-media"]')}>
                  <i className="fa-solid fa-share-nodes"></i> Alcance en Redes
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contacto</h3>
            <ul className="footer-contact-info">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Local físico en San Sebastián, Cusco</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span><a href="tel:+51937054328">+51 937 054 328</a></span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span><a href="mailto:publicadis@gmail.com">publicadis@gmail.com</a></span>
              </li>
            </ul>
            <div className="footer-app-download">
              <h5>Descarga nuestra app:</h5>
              <a href="https://play.google.com/store/apps/details?id=buscadis.publicadis&pli=1" className="app-download-btn" target="_blank" rel="noopener">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} PublicAdis - BuscAdis. Todos los derechos reservados.</p>

          <div className="footer-badges">
            <Link to="/terminos">Términos y Condiciones</Link>
            <Link to="/privacidad">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 