const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const header = document.querySelector('.header');

// mobile navigation toggle the menu
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    primaryNav.setAttribute('data-visible', visibility === 'true' ? 'false' : 'true');
    navToggle.setAttribute('aria-expanded', visibility === 'true' ? 'false' : 'true');
});

// Add 'scrolled' class to header on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Indicate when the UI is fully loaded
window.addEventListener('load', () => {
  document.body.classList.add('ui-loaded');
});

