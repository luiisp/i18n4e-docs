

const init = async () => {
    const langSelect = document.getElementById("langs-ss");

    try {
        const langs = await i18n4e.getLangs(); 

        for (const [langCode, langName] of Object.entries(langs)) {
            const langOption = document.createElement('option');
            langOption.value = langCode; 
            langOption.textContent = langName;
            langSelect.appendChild(langOption);
        }

        langSelect.addEventListener('change', async () => {
            const selectedLang = langSelect.value;
            await i18n4e.setLang(selectedLang); 
        });
  
    } catch (error) {
        console.error(error);
    }
};
document.addEventListener('DOMContentLoaded', init);