document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggleBtn = document.getElementById('mode-toggle-btn');
    const body = document.body;

    // Check localStorage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        modeToggleBtn.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        modeToggleBtn.textContent = 'Dark Mode';
    }

    modeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            modeToggleBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            modeToggleBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
