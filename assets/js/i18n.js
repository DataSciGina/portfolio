function getPreferredLanguage() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;

  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('es')) return 'es';

  return 'en';
}
