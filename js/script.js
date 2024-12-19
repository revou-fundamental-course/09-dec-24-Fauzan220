// JavaScript for Banner Slider
let slides = document.querySelectorAll('.banner .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// JavaScript for Form Validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const interest = document.getElementById('interest');

    if (!name.value.trim()) {
        alert('Name is required');
        isValid = false;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Valid email is required');
        isValid = false;
    }

    if (!interest.value) {
        alert('Please select an interest');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});