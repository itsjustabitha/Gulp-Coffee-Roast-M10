// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("alertButton");
    button.addEventListener("click", () => {
        alert("Button Clicked!");
    });
});

      

   
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlide(position) {
    slides.style.transform = `translateX(-${position * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === position);
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    updateSlide(currentIndex);
}

prev.addEventListener('click', showPrevSlide);
next.addEventListener('click', showNextSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);

// Initialize dots
updateSlide(currentIndex);
