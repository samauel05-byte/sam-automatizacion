document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    const setMenu = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      document.body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  document.querySelectorAll('.faq-item .faq-q').forEach((btn, index) => {
    const answer = btn.nextElementSibling;
    const answerId = `faq-answer-${index + 1}`;
    answer.id = answerId;
    btn.setAttribute('aria-controls', answerId);
    btn.setAttribute('aria-expanded', String(btn.closest('.faq-item').classList.contains('open')));
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) item.classList.add('open');
      btn.setAttribute('aria-expanded', String(!wasOpen));
    });
  });

  const whatsappButton = document.querySelector('.wa-float');
  if (whatsappButton) {
    whatsappButton.setAttribute('aria-label', 'Conversar por WhatsApp');
    whatsappButton.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.2 24l6.5-1.7A11.8 11.8 0 0 0 24 11.8a11.7 11.7 0 0 0-3.5-8.3ZM12.1 21a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4A9.8 9.8 0 1 1 12.1 21Zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.7-.8-2.8-1.5-4-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6l-.9-2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.4-.3-.7-.4Z"/></svg>';
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.querySelector('header.site');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const robotScene = document.querySelector('.robot-scene');
  const robotHero = robotScene?.closest('.hero');
  const robotReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (robotScene && robotHero && !robotReducedMotion) {
    let robotFrame = 0;
    const moveRobot = (clientX, clientY) => {
      const rect = robotHero.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width - 0.5) * 2));
      const y = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height - 0.5) * 2));
      cancelAnimationFrame(robotFrame);
      robotFrame = requestAnimationFrame(() => {
        robotScene.style.setProperty('--robot-x', `${x * 24}px`);
        robotScene.style.setProperty('--robot-y', `${y * 15}px`);
        robotScene.style.setProperty('--eye-x', `${x * 4}px`);
        robotScene.style.setProperty('--eye-y', `${y * 3}px`);
        robotScene.style.setProperty('--robot-turn', `${x * 4}deg`);
      });
    };
    robotHero.addEventListener('pointermove', (event) => moveRobot(event.clientX, event.clientY), { passive: true });
    robotHero.addEventListener('pointerdown', (event) => {
      moveRobot(event.clientX, event.clientY);
      robotScene.classList.remove('robot-react');
      void robotScene.offsetWidth;
      robotScene.classList.add('robot-react');
    }, { passive: true });
    robotHero.addEventListener('pointerleave', () => {
      robotScene.style.setProperty('--robot-x', '0px');
      robotScene.style.setProperty('--robot-y', '0px');
      robotScene.style.setProperty('--eye-x', '0px');
      robotScene.style.setProperty('--eye-y', '0px');
      robotScene.style.setProperty('--robot-turn', '0deg');
    });
  }

  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  const heroCard = document.querySelector('.hero-card');
  const prefersReducedMotionTilt = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroCard && window.matchMedia('(pointer: fine)').matches && !prefersReducedMotionTilt) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroCard.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = '';
    });
  }

  const revealSelectors = '.card, .mv-card, .plan-card, .team-card, .faq-item, .contact-info-item, .section-head, .cta-band, .example-box';
  const revealEls = document.querySelectorAll(revealSelectors);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (revealEls.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
    revealEls.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => field.setAttribute('aria-invalid', String(!field.validity.valid)));
      if (!form.checkValidity()) {
        form.reportValidity();
        form.querySelector(':invalid')?.focus();
        return;
      }
      const data = new FormData(form);
      const nombre = String(data.get('nombre') || '').trim();
      const telefono = String(data.get('telefono') || '').trim();
      const servicio = String(data.get('servicio') || '').trim();
      const mensaje = String(data.get('mensaje') || '').trim();
      const text = `Hola, soy ${nombre}.\nServicio de interés: ${servicio}\nTeléfono: ${telefono}${mensaje ? `\nMensaje: ${mensaje}` : ''}`;
      const url = new URL('https://wa.me/18099863977');
      url.searchParams.set('text', text);
      window.open(url.toString(), '_blank', 'noopener,noreferrer');
    });
    form.querySelectorAll('[required]').forEach(field => {
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
      field.addEventListener('change', () => field.removeAttribute('aria-invalid'));
    });
  }
});
