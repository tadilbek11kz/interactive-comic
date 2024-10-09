
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

    { src: "assets/img/frame_4.1.jpg", alt: "Frame 4", id: "matches-frame" },
    { src: "assets/img/frame_5.1.jpg", alt: "Frame 5", id: "matches-frame" },
    { src: "assets/img/frame_6.1.jpg", alt: "Frame 6", id: "matches-frame" },
    { src: "assets/img/frame_7.1.jpg", alt: "Frame 7", id: "matches-frame" },

    { src: "assets/img/frame_4.2.jpg", alt: "Frame 4", id: "torch-frame" },
    { src: "assets/img/frame_5.2.jpg", alt: "Frame 5", id: "torch-frame" },
    { src: "assets/img/frame_6.2.jpg", alt: "Frame 6", id: "torch-frame" },
    { src: "assets/img/frame_7.2.jpg", alt: "Frame 7", id: "torch-frame" },

    { src: "assets/img/frame_8.jpg", alt: "Frame 8" },
    { src: "assets/img/frame_9.jpg", alt: "Frame 9" },
    { src: "assets/img/frame_10.jpg", alt: "Frame 10" },
    { src: "assets/img/frame_11.jpg", alt: "Frame 11" },
    { src: "assets/img/frame_12.jpg", alt: "Frame 12" },
];

if (selectedObject === "matches") {
    images.push(

    );
} else {
    images.push(

    );
}

images.push(

)




let currentIndex = 0;

function loadImages() {
    images.forEach((image, index) => {
        if (index === 2) {
            const div = document.createElement('div');
            div.className = 'selection';
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.className = 'carousel-image';
            const torch = document.createElement('img');
            torch.addEventListener('click', (e) => {
                e.preventDefault();
                const matchesImg = document.querySelectorAll('.matches-frame');
                matchesImg.forEach(img => {
                    img.className = '';
                });
                nextBtn.style.display = 'block';
            });
            torch.src = "assets/img/torch-2.png";
            torch.alt = "Torch";
            torch.className = 'overlay torch';
            const matches = document.createElement('img');
            matches.addEventListener('click', (e) => {
                e.preventDefault();
                const torchImg = document.querySelectorAll('.torch-frame');
                torchImg.forEach(img => {
                    img.className = '';
                });
                nextBtn.style.display = 'block';
            });
            matches.src = "assets/img/matches-2.png";
            matches.alt = "Matches";
            matches.className = 'overlay matches';
            div.appendChild(img);
            div.appendChild(torch);
            div.appendChild(matches);
            carouselImages.appendChild(div);
            return;
        }

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.id = image.id;
        img.className = index === 0 ? 'carousel-image active' : 'carousel-image';
        carouselImages.appendChild(img);
    });
    nextBtn.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
}

function showImage(index) {
    const imgs = carouselImages.querySelectorAll('img.carousel-image');
    imgs[currentIndex].classList.remove('active');
    imgs[index].classList.add('active');
    currentIndex = index;

    nextBtn.style.display = currentIndex === images.length - 1 || currentIndex === 2 ? 'none' : 'block';
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';

    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.style.display = index === 2 ? 'block' : 'none';
    });
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