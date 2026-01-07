const darkMode = document.querySelector('.dark-mode-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (!savedTheme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
    }

    localStorage.setItem('theme', 'dark');
} else if (savedTheme === 'dark') {
    body.classList.add('dark');
}

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});