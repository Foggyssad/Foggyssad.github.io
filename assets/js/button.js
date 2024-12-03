document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const logoImg = document.querySelector('#header .logo img');

    // Function to update the logo dynamically
    const updateLogo = () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        logoImg.src = isDarkMode
            ? 'assets/img/logo-dark.png' // Path for the dark mode logo
            : 'assets/img/logo-light.png'; // Path for the light mode logo
    };

    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        console.log('Dark mode loaded from localStorage');
    } else {
        console.log('Light mode loaded from localStorage');
    }

    // Update logo based on the initial theme
    updateLogo();

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkModeActive = document.body.classList.contains('dark-mode');
        console.log('Button clicked. Dark mode active:', isDarkModeActive);

        // Save the current theme to localStorage
        localStorage.setItem('theme', isDarkModeActive ? 'dark' : 'light');
        console.log(isDarkModeActive ? 'Dark mode saved to localStorage' : 'Light mode saved to localStorage');

        // Update logo when the theme changes
        updateLogo();

        // Debug current CSS variable values (optional, for developers)
        const computedStyle = getComputedStyle(document.body);
        console.log('Background color:', computedStyle.getPropertyValue('--background-color'));
        console.log('Text color:', computedStyle.getPropertyValue('--text-color'));
        console.log('Background image:', computedStyle.getPropertyValue('--background-image'));
    });
});
