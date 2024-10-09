// Get references to the toggle and container elements
const toggle = document.getElementById('mode-toggle');
const container = document.getElementById('moral-page');
const readNow = document.getElementById('read-now');
const quote = document.getElementById('quote');

// Function to toggle mode and change background image
function toggleMode() {
    container.classList.toggle("dark-mode");
    toggle.classList.toggle("dark");
    readNow.classList.toggle("dark-button");
    quote.classList.toggle("dark-quote");
}

// Click event listener for the button
toggle.addEventListener('click', toggleMode);
readNow.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "pages.html";
})

