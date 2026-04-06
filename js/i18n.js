// Language translations
const translations = {
    en: {
        tagline: "Data Analyst & Problem Solver",
        about_me: "About Me",
        language: "Language",
        // Add more translations as needed
    },
    es: {
        tagline: "Analista de Datos y Solucionador de Problemas",
        about_me: "Sobre Mí",
        language: "Idioma",
    },
    fr: {
        tagline: "Analyste de Données et Résolveur de Problèmes",
        about_me: "À Propos de Moi",
        language: "Langue",
    }
};

// Set default language
let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    updateLanguage(currentLanguage);
    
    // Set up language toggle
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const isExpanded = languageToggle.getAttribute('aria-expanded') === 'true';
            languageToggle.setAttribute('aria-expanded', !isExpanded);
            languageDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageToggle.setAttribute('aria-expanded', 'false');
                languageDropdown.classList.add('hidden');
            }
        });
    }
    
    // Handle language selection
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateLanguage(lang);
            languageDropdown.classList.add('hidden');
            languageToggle.setAttribute('aria-expanded', 'false');
            
            // Update current language indicator
            const currentLangElement = languageToggle.querySelector('.current-lang');
            if (currentLangElement) {
                currentLangElement.textContent = lang.toUpperCase();
            }
        });
    });
});

// Update page content based on selected language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update current language indicator
    const currentLangElement = document.querySelector('.current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Dispatch event for any components that need to update based on language
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}
