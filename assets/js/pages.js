
// Get references to the toggle and container elements
const toggle = document.getElementById('mode-toggle');
const audioToggle = document.getElementById('audio-toggle');
const container = document.getElementById('main-page');
const moral = document.getElementById('moral');

const carouselImages = document.getElementById('carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let selectedObject = "";
const images = [
    { src: "assets/img/frame_1.jpg", alt: "Frame 1" },
    { src: "assets/img/frame_2.jpg", alt: "Frame 2" },
    { src: "assets/img/frame_3.jpg", alt: "Frame 3" },

    { src: "assets/img/frame_8.jpg", alt: "Frame 8" },
    { src: "assets/img/frame_9.jpg", alt: "Frame 9" },
    { src: "assets/img/frame_10.jpg", alt: "Frame 10" },
    { src: "assets/img/frame_11.jpg", alt: "Frame 11" },
    { src: "assets/img/frame_12.jpg", alt: "Frame 12" },
];

const matchesFrames = [
    { src: "assets/img/frame_4.1.jpg", alt: "Frame 4" },
    { src: "assets/img/frame_5.1.jpg", alt: "Frame 5" },
    { src: "assets/img/frame_6.1.jpg", alt: "Frame 6" },
    { src: "assets/img/frame_7.1.jpg", alt: "Frame 7" },
]

const torchFrames = [
    { src: "assets/img/frame_4.2.jpg", alt: "Frame 4" },
    { src: "assets/img/frame_5.2.jpg", alt: "Frame 5" },
    { src: "assets/img/frame_6.2.jpg", alt: "Frame 6" },
    { src: "assets/img/frame_7.2.jpg", alt: "Frame 7" },
]

let currentIndex = 0;

const brushingTeeth = document.getElementById('brushing-teeth');
const flowingWater = document.getElementById('flowing-water');
const magicWand = document.getElementById('magic-wand');
const matchStrike = document.getElementById('match-strike');

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
            torch.src = "assets/img/torch-2.png";
            torch.alt = "Torch";
            torch.className = 'overlay torch';
            const matches = document.createElement('img');
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
        if (index === 0) brushingTeeth.play();
        img.className = index === 0 ? 'carousel-image active' : 'carousel-image';
        carouselImages.appendChild(img);
    });
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
}

function showImage(index) {
    const imgs = carouselImages.querySelectorAll('img.carousel-image');
    imgs[currentIndex].classList.remove('active');
    imgs[index].classList.add('active');
    currentIndex = index;

    console.log(selectedObject, currentIndex)


    if (selectedObject === "matches") {
        if (currentIndex === 3) {
            matchStrike.play();
        } else if (currentIndex === 6) {
            flowingWater.play();
        }
    } else if (selectedObject === "torch") {
        if (currentIndex === 4) {
            flowingWater.play();
        } else if (currentIndex === 5) {
            matchStrike.play();
        }
    }

    if (currentIndex === 10 || currentIndex === 11) {
        magicWand.play();
    }

    moral.style.display = currentIndex === (images.length + 4) - 1 ? 'block' : 'none';
    nextBtn.style.display = currentIndex === (images.length + 4) - 1 || currentIndex === 2 ? 'none' : 'block';
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';

    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.style.display = index === 2 ? 'block' : 'none';
    });
}

function nextImage() {
    let index = (currentIndex + 1)
    brushingTeeth.pause();
    flowingWater.pause();
    magicWand.pause();
    matchStrike.pause();
    showImage(index);
}

function prevImage() {
    let index = currentIndex - 1;
    brushingTeeth.pause();
    flowingWater.pause();
    magicWand.pause();
    matchStrike.pause();
    showImage(index);
}

// Load images when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    const torch = document.querySelector('.torch');
    const matches = document.querySelector('.matches');
    const selection = document.querySelector('.selection');

    torch.addEventListener('click', (e) => {
        e.preventDefault();
        torchFrames.reverse().forEach((frame, index) => {
            const img = document.createElement('img');
            img.src = frame.src;
            img.alt = frame.alt;
            img.className = 'carousel-image';
            selection.insertAdjacentElement('afterend', img);
        });
        nextBtn.style.display = 'block';
        selectedObject = "torch";
    });
    matches.addEventListener('click', (e) => {
        e.preventDefault();
        matchesFrames.reverse().forEach((frame, index) => {
            const img = document.createElement('img');
            img.src = frame.src;
            img.alt = frame.alt;
            img.className = 'carousel-image';
            selection.insertAdjacentElement('afterend', img);
        });
        nextBtn.style.display = 'block';
        selectedObject = "matches";
    });
});

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
    moral.classList.toggle("dark-button");
    audioToggle.classList.toggle("dark");

});

moral.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "moral.html";
});

audioToggle.addEventListener('click', (e) => {
    e.preventDefault();
    let muted = null;
    const audio = document.querySelectorAll('audio').forEach(audio => {
        muted = audio.muted;
        audio.muted = !audio.muted;
    });
    if (muted) {
        audioToggle.innerHTML = '<path d="M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.6602 6.71997C22.1593 8.22011 23.0015 10.2542 23.0015 12.375C23.0015 14.4958 22.1593 16.5299 20.6602 18.03" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5391 15.95C19.4764 15.0123 20.003 13.7407 20.003 12.4149C20.003 11.0891 19.4764 9.81764 18.5391 8.88" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
        audio.muted = false;
    } else {
        audioToggle.innerHTML = '<path d="M12.5493 4.50005C11.3193 4.04005 8.70926 5.49996 6.54926 7.40996H4.94922C3.88835 7.40996 2.87093 7.83145 2.12079 8.58159C1.37064 9.33174 0.949219 10.3491 0.949219 11.41V13.41C0.949219 14.4708 1.37064 15.4883 2.12079 16.2385C2.87093 16.9886 3.88835 17.41 4.94922 17.41H6.54926C8.65926 19.35 11.2693 20.78 12.5493 20.33C14.6493 19.55 14.9992 15.33 14.9992 12.41C14.9992 9.48996 14.6493 5.28005 12.5493 4.50005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />'
        audio.muted = true;
    }
});