document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        console.log('Dark mode loaded from localStorage');
    } else {
        console.log('Light mode loaded from localStorage');
    }

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        console.log('Button clicked. Dark mode active:', document.body.classList.contains('dark-mode'));

        // Save the current theme to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            console.log('Dark mode saved to localStorage');
        } else {
            localStorage.setItem('theme', 'light');
            console.log('Light mode saved to localStorage');
        }

        // Debug current CSS variable values
        const computedStyle = getComputedStyle(document.body);
        console.log('Background color:', computedStyle.getPropertyValue('--bg-color'));
        console.log('Text color:', computedStyle.getPropertyValue('--text-color'));
        console.log('Background image:', computedStyle.getPropertyValue('--bg-image'));
    });
});
