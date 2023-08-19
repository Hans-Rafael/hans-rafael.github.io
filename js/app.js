"use strict";

///carousel 
// Select all slides
const slides = document.querySelectorAll(".slide");
// current slide counter
let curSlide = 0;
// select next slide button right
const nextSlide = document.querySelector(".btn-next");
// select prev slide button left
const prevSlide = document.querySelector(".btn-prev");

// maximum number of slides
let maxSlide = slides.length - 1;
//console.log(maxSlide);

// add event listener and next slide functionality to right
nextSlide.addEventListener("click", function () {
  //curSlide++;
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
// add event listener and navigation functionality to left
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
