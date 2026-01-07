const header = document.querySelector('.header');

// Add 'scrolled' class to header on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});
