//slider gallery
"use strict";
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides function
slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 100}%)`;
});

// next button function
const nextSlide = document.querySelector(".btn-next");

// slide counter and max
let currentSlide = 0;
let maxSlide = slides.length - 1;

// navigation functionality for forward
nextSlide.addEventListener("click", function () {
    // check and reset current slide
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    //   slide over to the left
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
});

// previous button function
const prevSlide = document.querySelector(".btn-prev");

// navigation functionality for back
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    // slide over to the right
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
});