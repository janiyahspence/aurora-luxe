// Accessibility utilities

export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusableElement = focusableElements[0] as HTMLElement;
  const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  
  // Focus the first element
  firstFocusableElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const handleEscapeKey = (callback: () => void) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};

export const setFocusToElement = (selector: string, delay = 0) => {
  setTimeout(() => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
    }
  }, delay);
};

export const addSkipLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-500 focus:text-black-primary focus:px-4 focus:py-2';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
};

export const enhanceFormAccessibility = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll('input, select, textarea');
  
  inputs.forEach((input) => {
    const label = form.querySelector(`label[for="${input.id}"]`);
    if (!label && !input.getAttribute('aria-label')) {
      console.warn('Input missing label:', input);
    }
    
    // Add required indicator
    if (input.hasAttribute('required')) {
      input.setAttribute('aria-required', 'true');
    }
    
    // Add error handling
    input.addEventListener('invalid', (e) => {
      const target = e.target as HTMLInputElement;
      target.setAttribute('aria-invalid', 'true');
      announceToScreenReader(`Error in ${target.name || 'field'}: ${target.validationMessage}`);
    });
    
    input.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.validity.valid) {
        target.removeAttribute('aria-invalid');
      }
    });
  });
};

export const addLandmarkRoles = () => {
  // Add main landmark if not present
  const main = document.querySelector('main');
  if (!main) {
    const mainContent = document.querySelector('#main-content');
    if (mainContent) {
      mainContent.setAttribute('role', 'main');
    }
  }
  
  // Ensure navigation has proper role
  const nav = document.querySelector('nav');
  if (nav && !nav.getAttribute('role')) {
    nav.setAttribute('role', 'navigation');
  }
};