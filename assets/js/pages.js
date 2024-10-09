
// Get references to the toggle and container elements
const toggle = document.getElementById('mode-toggle');
const container = document.getElementById('main-page');

const carouselImages = document.getElementById('carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const selectedObject = "torch";
const images = [
    { src: "assets/img/frame_1.jpg", alt: "Frame 1" },
    { src: "assets/img/frame_2.jpg", alt: "Frame 2" },
    { src: "assets/img/frame_3.jpg", alt: "Frame 3" },
    { src: "assets/img/torch.png", alt: "Mathces" },
    { src: "assets/img/matches.png", alt: "Torch" },
];

if (selectedObject === "matches") {
    images.push(
        { src: "assets/img/frame_4.1.jpg", alt: "Frame 4" },
        { src: "assets/img/frame_5.1.jpg", alt: "Frame 5" },
        { src: "assets/img/frame_6.1.jpg", alt: "Frame 6" },
        { src: "assets/img/frame_7.1.jpg", alt: "Frame 7" },
    );
} else {
    images.push(
        { src: "assets/img/frame_4.2.jpg", alt: "Frame 4" },
        { src: "assets/img/frame_5.2.jpg", alt: "Frame 5" },
        { src: "assets/img/frame_6.2.jpg", alt: "Frame 6" },
        { src: "assets/img/frame_7.2.jpg", alt: "Frame 7" },
    );
}

images.push(
    { src: "assets/img/frame_8.jpg", alt: "Frame 8" },
    { src: "assets/img/frame_9.jpg", alt: "Frame 9" },
    { src: "assets/img/frame_10.jpg", alt: "Frame 10" },
    { src: "assets/img/frame_11.jpg", alt: "Frame 11" },
    { src: "assets/img/frame_12.jpg", alt: "Frame 12" },
)




let currentIndex = 0;

function loadImages() {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = index === 0 ? 'carousel-image active' : 'carousel-image';
        carouselImages.appendChild(img);
    });
}

function showImage(index) {
    const imgs = carouselImages.querySelectorAll('img');
    imgs[currentIndex].classList.remove('active');
    imgs[index].classList.add('active');
    currentIndex = index;
}

function nextImage() {
    let index = (currentIndex + 1) % images.length;
    showImage(index);
}

function prevImage() {
    let index = currentIndex - 1;
    if (index < 0) index = images.length - 1;
    showImage(index);
}

// Load images when the page loads
document.addEventListener('DOMContentLoaded', loadImages);

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nextImage();
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    prevImage();
});

// Click event listener for the button
toggle.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.toggle("dark-mode");
    toggle.classList.toggle("dark");

});