(() => {
  const langButtons = document.querySelectorAll('[data-set-lang]');
  const langBlocks = document.querySelectorAll('[data-lang]');
  const inlineLangs = document.querySelectorAll('.inline-lang');
  const setLang = (lang) => {
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.setLang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.setLang === lang ? 'true' : 'false');
    });
    langBlocks.forEach(el => el.classList.toggle('is-visible', el.dataset.lang === lang));
    inlineLangs.forEach(el => el.classList.toggle('is-visible', el.dataset.lang === lang));
    try { localStorage.setItem('llm-guider-lang', lang); } catch {}
  };
  langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.setLang)));
  let preferred = 'en';
  try { preferred = localStorage.getItem('llm-guider-lang') || preferred; } catch {}
  if (!['en','es'].includes(preferred)) preferred = 'en';
  setLang(preferred);
})();
