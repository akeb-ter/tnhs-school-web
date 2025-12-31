export function headerMenuToggle() {
  const btn = document.getElementById('nav_toggle');
  const nav = document.querySelector('nav.header_navigation');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('nav-open', !expanded);
    // prevent body scroll when menu is open
    document.body.classList.toggle('nav-menu-open', !expanded);
    // also add to html element to be extra-safe for preventing scroll
    document.documentElement.classList.toggle('nav-menu-open', !expanded);
  });

  // Close mobile menu when resizing to desktop to avoid stale state
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('nav-open')) return;
    if (e.target === btn || nav.contains(e.target)) return;
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-menu-open');
    document.documentElement.classList.remove('nav-menu-open');
  });

  /* Mobile accordion for dropdowns */
  function setupAccordion() {
    const items = document.querySelectorAll('.header_navigation_container .nav_item');

    items.forEach((item) => {
      const trigger = item.querySelector('.dropdown_item');
      const dropdown = item.querySelector('.dropdown');
      if (!trigger || !dropdown) return;

      // ensure aria
      trigger.setAttribute('role', 'button');
      trigger.setAttribute('aria-expanded', 'false');

      trigger.addEventListener('click', (ev) => {
        // only on mobile widths
        if (window.innerWidth > 900) return;
        ev.preventDefault();

        const isOpen = item.classList.contains('open');

        // close all other items (accordion behavior) and reset their styles
        items.forEach((it) => {
          if (it !== item) {
            it.classList.remove('open');
            const tr = it.querySelector('.dropdown_item');
            if (tr) {
              tr.setAttribute('aria-expanded', 'false');
              // reset chevron rotation via the ::after pseudo-element by removing the .open class
              // the CSS will handle reverting the rotation
            }
          }
        });

        // toggle selected
        if (isOpen) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
          // CSS .nav_item.open rule will revert the chevron rotation via ::after
        } else {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
          // CSS .nav_item.open rule rotates the chevron
        }
      });
    });
  }

  // initialize accordion
  setupAccordion();

  // cleanup open states when resizing to desktop or closing nav
  const cleanupOpen = () => {
    const items = document.querySelectorAll('.header_navigation_container .nav_item.open');
    items.forEach((it) => {
      it.classList.remove('open');
      const tr = it.querySelector('.dropdown_item');
      if (tr) tr.setAttribute('aria-expanded', 'false');
    });
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
      cleanupOpen();
      document.body.classList.remove('nav-menu-open');
      document.documentElement.classList.remove('nav-menu-open');
    }
  });
}
