



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
