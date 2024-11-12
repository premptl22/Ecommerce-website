document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('mode-toggle-btn');

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    updateButtonText(currentTheme);

    toggleBtn.addEventListener('click', function () {
        // Toggle between light and dark mode
        const newTheme = document.body.classList.toggle('dark-mode') ? 'dark' : 'light';
        // Save the preference in localStorage
        localStorage.setItem('theme', newTheme);
        // Update the button text
        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        toggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
});
