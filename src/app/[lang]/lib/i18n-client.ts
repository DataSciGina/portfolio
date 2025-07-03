export async function fetchDictionary(lang: 'en' | 'es') {
  const res = await fetch(`../../i18n/dictionary/${lang}.json`);

  if (!res.ok) {
    throw new Error(`Failed to load dictionary for lang: ${lang}`);
  }

  const data = await res.json();
  return data;
}
