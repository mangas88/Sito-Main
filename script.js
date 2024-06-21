/* prendo il valore index, e lo assegno ad una varibile, cosi da poter spostare le immagini */
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
let currentIndex = 0;

/* creo una funzioneche controlla il valore di index */
function showSlide(index) {
    const offset = -currentIndex * 100;
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${offset}%)`;
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

}

const prevSlide= document.querySelector('#prevSlide');
const nextSlide = document.querySelector('#nextSlide');

prevSlide.addEventListener('click', function prevSlide() {
  showSlide(currentIndex - 1);
})

nextSlide.addEventListener('click', function nextSlide() {
  showSlide(currentIndex + 1);
})

