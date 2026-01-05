const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    primaryNav.setAttribute('data-visible', visibility === 'true' ? 'false' : 'true');
});