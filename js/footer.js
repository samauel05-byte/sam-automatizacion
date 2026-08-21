document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="assets/logo.png" alt="Sam Automatización" width="34" height="34"> SAM AUTOMATIZACIÓN</div>
        <p>Soluciones tecnológicas para digitalizar y automatizar la operación de tu negocio.</p>
        <div class="social-row">
          <a href="https://www.facebook.com/share/18bCMAy1KV/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener">f</a>
          <a href="https://www.instagram.com/aut._.sam" aria-label="Instagram" target="_blank" rel="noopener">ig</a>
          <a href="https://www.linkedin.com/in/samroa" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
        </div>
      </div>
      <div>
        <h4>Enlaces</h4>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="servicios.html">Servicios</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="preguntas-frecuentes.html">Preguntas Frecuentes</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4>Servicios</h4>
        <ul>
          <li><a href="servicios.html#facturador">Facturador Electrónico</a></li>
          <li><a href="servicios.html#dominio">Servidor de Dominio</a></li>
          <li><a href="servicios.html#correo">Servidor de Correo</a></li>
          <li><a href="servicios.html#web">Páginas Web</a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul>
          <li><a href="https://wa.me/18099863977" target="_blank" rel="noopener">+1 (809) 986-3977</a></li>
          <li><a href="https://www.instagram.com/aut._.sam" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://www.facebook.com/share/18bCMAy1KV/?mibextid=wwXIfr" target="_blank" rel="noopener">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Sam Automatización. Todos los derechos reservados.</span>
      <span>Sam Automatización</span>
    </div>
  </div>`;
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
