const moralNow = document.getElementById('moral');

// Click event listener to go to the moral page
moralNow.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "moral.html";
})