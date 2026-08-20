document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><span class="mark" style="width:34px;height:34px;font-size:.85rem">PS</span> PAULINO SOSA</div>
        <p>Más que asesores, somos tus aliados. Soluciones integrales en contabilidad, finanzas, fiscalidad y administración en toda República Dominicana.</p>
        <div class="social-row">
          <a href="#" aria-label="Facebook" target="_blank" rel="noopener">f</a>
          <a href="#" aria-label="Instagram" target="_blank" rel="noopener">ig</a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
        </div>
      </div>
      <div>
        <h4>Enlaces</h4>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="servicios.html">Servicios</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="preguntas-frecuentes.html">Preguntas Frecuentes</a></li>
          <li><a href="referidos.html">Programa de Referidos</a></li>
        </ul>
      </div>
      <div>
        <h4>Servicios</h4>
        <ul>
          <li><a href="servicios.html#constitucion">Constitución de Empresas</a></li>
          <li><a href="servicios.html#outsourcing">Outsourcing Contable y Fiscal</a></li>
          <li><a href="servicios.html#auditoria">Auditoría</a></li>
          <li><a href="servicios.html#diseno">Diseño Gráfico</a></li>
          <li><a href="servicios.html#salud">Habilitación de Centros de Salud</a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul>
          <li><a href="https://wa.me/18496079129" target="_blank" rel="noopener">+1 (849) 607-9129</a></li>
          <li><a href="mailto:info@psasesoresconsultores.com">info@psasesoresconsultores.com</a></li>
          <li>Santo Domingo, República Dominicana</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> Paulino Sosa Asesores &amp; Consultores. Todos los derechos reservados.</span>
      <span>PS Asesores &amp; Consultores</span>
    </div>
  </div>`;
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
