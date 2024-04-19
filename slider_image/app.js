const slides = document.querySelectorAll('.slides img');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);