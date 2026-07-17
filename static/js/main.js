/* ============================================
   BROKIER — Main JavaScript
   Navbar scroll, particle animation, fade-in
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar Scroll Effect ---------- */
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* ---------- Mobile Navbar Toggle ---------- */
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarMain');
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', (e) => {
      e.stopPropagation();
      navbarCollapse.classList.toggle('show');
      navbarToggler.setAttribute('aria-expanded',
        navbarCollapse.classList.contains('show') ? 'true' : 'false'
      );
    });

    // Close menu when a nav link is clicked (mobile)
    navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove('show');
          navbarToggler.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 992 &&
          navbarCollapse.classList.contains('show') &&
          !navbarCollapse.contains(e.target) &&
          !navbarToggler.contains(e.target)) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Intersection Observer: Fade-in Sections ---------- */
  const fadeEls = document.querySelectorAll('.fade-in-section');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ---------- Floating Particle Canvas ---------- */
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(Math.floor((w * h) / 18000), 80);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 0.6,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.35 + 0.1,
        // Warm palette: golds, oranges, light browns
        color: ['201,169,89', '212,132,90', '139,111,94', '245,240,232'][Math.floor(Math.random() * 4)]
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      // Wrap around edges
      if (p.x < -5) p.x = w + 5;
      if (p.x > w + 5) p.x = -5;
      if (p.y < -5) p.y = h + 5;
      if (p.y > h + 5) p.y = -5;
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
});
