export function initModals() {
  // Store modal elements
  const modals = document.getElementsByClassName('js-modal');
  const modalTriggers = document.querySelectorAll('[aria-controls]');
  const modalCloseButtons = document.getElementsByClassName('js-modal__close');

  function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }
    });
  }

  // Show modal
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('is-visible');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      trapFocus(modal); // Add focus trap
      const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) firstFocusable.focus();
    }
  }

  // Hide modal
  function hideModal(modal) {
    modal.classList.remove('is-visible');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Close with escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const visibleModal = document.querySelector('.js-modal.is-visible');
      if (visibleModal) hideModal(visibleModal);
    }
  });

  // Add click listeners to triggers
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('aria-controls');
      showModal(modalId);
    });
  });

  // Add click listeners to close buttons
  Array.from(modalCloseButtons).forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.js-modal');
      if (modal) hideModal(modal);
    });
  });

  // Close when clicking outside modal content
  Array.from(modals).forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) hideModal(modal);
    });
  });
} 