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

const interactivePanels = document.querySelectorAll('[data-interactive]');

interactivePanels.forEach((panel) => {
  const buttons = panel.querySelectorAll('[data-panel-content]');
  const display = panel.querySelector('.interactive-display');
  // Support for multiple visual containers
  const visualsContainers = [
    display ? display.querySelector('.platform-map-visuals') : null,
    display ? display.querySelector('.timeline-scrubber-visuals') : null,
    display ? display.querySelector('.attention-lab-visuals') : null,
    display ? display.querySelector('.remix-wall-visuals') : null
  ];
  const textElements = [
    display ? display.querySelector('.platform-map-text') : null,
    display ? display.querySelector('.timeline-scrubber-text') : null,
    display ? display.querySelector('.attention-lab-text') : null,
    display ? display.querySelector('.remix-wall-text') : null
  ];

  if (!buttons.length || !display) return;

  const setActive = (activeButton) => {
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    // Find which visual container is present
    let handled = false;
    visualsContainers.forEach((container, idx) => {
      if (container && textElements[idx]) {
        const year = activeButton.getAttribute('data-year');
        container.querySelectorAll('[data-year]').forEach((vis) => {
          vis.style.display = vis.getAttribute('data-year') === year ? '' : 'none';
        });
        textElements[idx].textContent = activeButton.dataset.panelContent || '';
        handled = true;
      }
    });
    if (!handled) {
      display.textContent = activeButton.dataset.panelContent || '';
    }
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

const setupImageLightbox = () => {
  const images = Array.from(document.querySelectorAll('main img'));
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');

  overlay.innerHTML = `
    <div class="lightbox-dialog" role="document">
      <button class="lightbox-close" type="button" aria-label="Close image">Close</button>
      <img class="lightbox-image" alt="" />
      <div class="lightbox-caption" aria-live="polite"></div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeButton = overlay.querySelector('.lightbox-close');
  const lightboxImage = overlay.querySelector('.lightbox-image');
  const caption = overlay.querySelector('.lightbox-caption');
  let lastFocused = null;

  const closeLightbox = () => {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastFocused) lastFocused.focus();
  };

  const openLightbox = (img) => {
    lastFocused = document.activeElement;
    const source = img.currentSrc || img.src;
    const alt = img.getAttribute('alt') || '';
    const figure = img.closest('figure');
    const figCaption = figure ? figure.querySelector('figcaption') : null;
    const captionText = figCaption ? figCaption.textContent.trim() : alt;

    lightboxImage.src = source;
    lightboxImage.alt = alt;

    if (captionText) {
      caption.textContent = captionText;
      caption.hidden = false;
    } else {
      caption.textContent = '';
      caption.hidden = true;
    }

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  };

  closeButton.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
      event.preventDefault();
      closeLightbox();
    }
  });

  images.forEach((img) => {
    if (img.closest('[data-no-lightbox]')) return;
    if (img.getAttribute('aria-hidden') === 'true') return;
    if (img.closest('.y2k-decor')) return;
    if (!img.src) return;

    img.classList.add('expandable-image');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-haspopup', 'dialog');

    img.addEventListener('click', () => openLightbox(img));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });
};

setupImageLightbox();
