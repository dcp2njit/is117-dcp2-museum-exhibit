const toggleButton = document.querySelector('[data-motion-toggle]');

const setMotionLabel = (isReduced) => {
  if (!toggleButton) return;
  toggleButton.textContent = `Reduce Motion: ${isReduced ? 'On' : 'Off'}`;
};

const applyMotionPreference = (isReduced) => {
  document.body.classList.toggle('reduce-motion', isReduced);
  setMotionLabel(isReduced);
  localStorage.setItem('reduceMotion', String(isReduced));
};

const storedPreference = localStorage.getItem('reduceMotion');
if (storedPreference !== null) {
  applyMotionPreference(storedPreference === 'true');
} else {
  setMotionLabel(false);
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isReduced = document.body.classList.toggle('reduce-motion');
    applyMotionPreference(isReduced);
  });
}

const transitionOverlay = document.querySelector('.page-transition');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

const handleTransition = (event, link) => {
  if (!transitionOverlay) return;
  if (document.body.classList.contains('reduce-motion') || prefersReduced.matches) {
    return;
  }

  event.preventDefault();
  document.body.classList.add('is-transitioning');

  window.setTimeout(() => {
    window.location.href = link.href;
  }, 280);
};

document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  const isHash = href && href.startsWith('#');
  const isExternal = href && /^(https?:)?\/\//i.test(href);

  link.addEventListener('click', (event) => {
    if (event.defaultPrevented) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target === '_blank' || isHash || isExternal) return;

    handleTransition(event, link);
  });
});

const interactivePanels = document.querySelectorAll('[data-interactive]');

interactivePanels.forEach((panel) => {
  const buttons = panel.querySelectorAll('[data-panel-content]');
  const display = panel.querySelector('.interactive-text') || panel.querySelector('.interactive-display');

  if (!buttons.length || !display) return;

  const setActive = (activeButton) => {
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    display.textContent = activeButton.dataset.panelContent || '';
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setActive(button);
    });
  });

  const initial = panel.querySelector('.tab-btn.is-active') || buttons[0];
  if (initial) {
    setActive(initial);
  }
});
