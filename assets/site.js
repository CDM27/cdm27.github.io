/* Shared navigation, fixed-frame sizing, and inner-page section indexes. */
(() => {
  const header = document.querySelector('.site-header');
  const footer = document.querySelector('.site-footer');
  const root = document.documentElement;
  const headerHeight = () => header ? Math.ceil(header.getBoundingClientRect().height) : 0;
  const syncFrame = () => {
    root.style.setProperty('--header-height', `${headerHeight()}px`);
    root.style.setProperty('--footer-height', `${footer ? Math.ceil(footer.getBoundingClientRect().height) : 0}px`);
  };
  const menuButton = header?.querySelector('.menu-toggle');
  if (menuButton) {
    root.classList.add('js');
    const compact = window.matchMedia('(max-width: 1020px)');
    const setMenu = open => {
      const expanded = compact.matches && open;
      header.classList.toggle('menu-open', expanded);
      menuButton.setAttribute('aria-expanded', String(expanded));
      menuButton.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
    };
    setMenu(false);
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    compact.addEventListener('change', () => setMenu(false));
    header.addEventListener('click', event => {
      if (event.target.closest('.nav-links a')) setMenu(false);
    });
    document.addEventListener('click', event => {
      if (!header.contains(event.target)) setMenu(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuButton.focus();
      }
    });
  }
  syncFrame();
  if ('ResizeObserver' in window) {
    const frameObserver = new ResizeObserver(syncFrame);
    if (header) frameObserver.observe(header);
    if (footer) frameObserver.observe(footer);
  }
  window.addEventListener('resize', syncFrame, { passive: true });

  const toc = document.querySelector('.page-toc');
  if (!toc) return;
  const disclosure = toc.querySelector('details');
  const narrow = window.matchMedia('(max-width: 880px)');
  const tocOffset = () => narrow.matches ? Math.ceil(disclosure.querySelector('summary').getBoundingClientRect().height) + 12 : 0;
  const syncDisclosure = () => {
    disclosure.open = !narrow.matches;
    disclosure.querySelector('summary').tabIndex = narrow.matches ? 0 : -1;
    root.style.setProperty('--toc-offset', `${tocOffset()}px`);
  };
  syncDisclosure();
  narrow.addEventListener('change', syncDisclosure);
  disclosure.addEventListener('toggle', () => {
    if (!narrow.matches && !disclosure.open) disclosure.open = true;
  });
  toc.addEventListener('click', event => {
    if (narrow.matches && event.target.closest('a[href^="#"]')) disclosure.open = false;
  });

  const items = Array.from(toc.querySelectorAll('a[href^="#"]')).map(link => ({
    link,
    section: document.getElementById(decodeURIComponent(link.hash.slice(1)))
  })).filter(item => item.section);
  if (!items.length) return;
  const updateCurrent = () => {
    const threshold = headerHeight() + tocOffset() + 32;
    let current = items[0];
    for (const item of items) {
      if (item.section.getBoundingClientRect().top <= threshold) current = item;
    }
    if (window.scrollY + window.innerHeight >= root.scrollHeight - 4) current = items[items.length - 1];
    for (const item of items) {
      if (item === current) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
  };
  let queued = false;
  const queueUpdate = () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(() => {
      queued = false;
      updateCurrent();
    });
  };
  window.addEventListener('scroll', queueUpdate, { passive: true });
  window.addEventListener('resize', queueUpdate, { passive: true });
  updateCurrent();
})();
