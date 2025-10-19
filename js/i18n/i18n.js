// Sistema simple de traducción - 
class SimpleTranslator {
    constructor() {
        this.currentLang = 'es';
        this.translations = {};
    }

    // Cargar traducciones
    async loadTranslations(lang) {
        try {
            const response = await fetch(`js/i18n/${lang}.json`);
            this.translations[lang] = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    // Traduciendo texto
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            value = value ? value[k] : null;
        }
        
        return value || key; // Si no encuentra, devuelve la clave
    }

    // Cambiando el  idioma
    async changeLanguage(lang) {
        if (!this.translations[lang]) {
            await this.loadTranslations(lang);
        }
        this.currentLang = lang;
        this.updatePage();
        this.savePreference();
    }

    // Actualizando toda la página
    updatePage() {
        // Elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Placeholders con data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Atributos con data-i18n-attr
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const [attr, key] = element.getAttribute('data-i18n-attr').split(':');
            element.setAttribute(attr, this.t(key));
        });
    }

    // Guardando preferencia
    savePreference() {
        localStorage.setItem('preferred-language', this.currentLang);
    }

    // Cargando preferencia guardadas
    loadPreference() {
        return localStorage.getItem('preferred-language') || 'es';
    }

    // Iniciando
    async init() {
        const savedLang = this.loadPreference();
        await this.loadTranslations('es');
        await this.loadTranslations('en');
        await this.changeLanguage(savedLang);
    }
}

// Crear instancia global
const i18n = new SimpleTranslator();