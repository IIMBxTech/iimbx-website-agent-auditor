(function() {
    let translations = null;
    let currentLang = 'en';

    // Configurable base path — pages in variants/ use '../assets/lang/'
    // Can be overridden per-page: window.I18N_BASE = 'path/to/lang/';
    function getLangBase() {
        return window.I18N_BASE || '../assets/lang/';
    }

    window.setLanguage = async function(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update UI dropdown display
        const activeLink = document.querySelector(`.lang-menu a[data-lang="${lang}"]`);
        if (activeLink) {
            const img = activeLink.querySelector('img');
            const currentImg = document.querySelector('.current-lang img');
            const currentText = document.querySelector('.current-lang span');
            if (img && currentImg) currentImg.src = img.src;
            if (currentText) currentText.textContent = activeLink.textContent.trim();
        }

        if (lang === 'en') {
            // For English, just reset to original data-i18n default text by reloading
            // Actually, re-fetch en.json so all keys stay consistent
        }

        try {
            const res = await fetch(`${getLangBase()}${lang}.json`);
            if (res.ok) {
                const data = await res.json();
                // Only apply if the file has actual content (not empty {})
                if (data && Object.keys(data).length > 0) {
                    translations = data;
                    applyTranslations();
                } else {
                    console.warn(`Translation file for '${lang}' is empty, staying on current language.`);
                }
            } else {
                console.warn('No translation found for', lang);
            }
        } catch (e) {
            console.error('Failed to load translations', e);
        }

        // Notify chatbot of language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    };

    function applyTranslations() {
        if (!translations) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key] !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', translations[key]);
                    }
                } else {
                    el.innerHTML = translations[key];
                }
            }
        });
    }

    // Initialize on load
    document.addEventListener('DOMContentLoaded', () => {
        // Setup click listeners for language menu links
        document.querySelectorAll('.lang-menu a[data-lang]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                setLanguage(this.getAttribute('data-lang'));
            });
        });

        // Restore saved language preference
        const savedLang = localStorage.getItem('lang') || 'en';
        if (savedLang !== 'en') {
            setLanguage(savedLang);
        }
    });
})();
