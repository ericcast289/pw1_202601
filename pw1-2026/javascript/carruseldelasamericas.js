const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel(){
    track.style.transform = `translateX(-${index * 300}px)`;
}

nextBtn.addEventListener("click", () => {
    index++;

    if(index >= slides.length){
        index = 0; // vuelve al primero
    }

    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index--;

    if(index < 0){
        index = slides.length - 1; // va al último
    }

    updateCarousel();
});