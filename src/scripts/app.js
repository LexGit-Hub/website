document.getElementById('mode-switch').addEventListener('click', function() {
    const darkModeStyle = document.getElementById('dark-mode-style');
    if (darkModeStyle.disabled) {
        darkModeStyle.disabled = false;
        this.textContent = 'Dark Mode';
    } else {
        darkModeStyle.disabled = true;
        this.textContent = 'Light Mode';
    }
});