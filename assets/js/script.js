// Get references to the button and container elements
const toggle = document.getElementById('mode-toggle');
const container = document.getElementById('cover-page');

// Function to toggle mode and change background image
function toggleMode() {
    container.classList.toggle("dark-mode");
    toggle.classList.toggle("dark");
}

// Add click event listener to the button
toggle.addEventListener('click', toggleMode);

// Set initial background image
container.style.backgroundImage = lightModeImage;