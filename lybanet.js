
//codigo seccion proceso 
const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observar todos los steps
        document.querySelectorAll('.process-step, .mobile-step').forEach(step => {
            observer.observe(step);
        });

        // Asegurar que los steps aparezcan en orden con pequeño delay
        document.addEventListener('DOMContentLoaded', () => {
            const steps = document.querySelectorAll('.process-step, .mobile-step');
            steps.forEach((step, index) => {
                step.style.transitionDelay = `${index * 0.1}s`;
            });
        });


//Codigo acordeon FAQ
document.addEventListener('DOMContentLoaded', () => {
    const toggles = Array.from(document.querySelectorAll('.faq-toggle'));
    const contents = Array.from(document.querySelectorAll('.faq-content'));

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');

        // Si está abierto, ciérralo
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';

        // Cerrar todos
        toggles.forEach((t, idx) => {
          t.setAttribute('aria-expanded', 'false');
          t.querySelector('svg').classList.remove('rotate-180');
          contents[idx].style.maxHeight = null;
        });

        // Si estaba cerrado, abrir este
        if (!isOpen) {
          toggle.setAttribute('aria-expanded', 'true');
          icon.classList.add('rotate-180');
          // fuerza cálculo de scrollHeight para transición suave
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    // opcional: ajustar max-heights al redimensionar para mantener coherencia
    window.addEventListener('resize', () => {
      contents.forEach((c, i) => {
        const t = toggles[i];
        if (t.getAttribute('aria-expanded') === 'true') {
          c.style.maxHeight = c.scrollHeight + 'px';
        }
      });
    });
  });
