async function loadSection(id, file) {
    const container = document.getElementById(id);
    try {
        const response = await fetch(file);
        if (response.ok) {
            const htmlContent = await response.text();
            container.innerHTML = htmlContent;
        } else {
            console.error(`Failed to load ${file}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// Load content into placeholders
loadSection('experience-section', 'experience.html');
loadSection('project-cards', 'project_cards.html');
loadSection('project-modals', 'modals.html');
