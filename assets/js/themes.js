const darkMode = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
});