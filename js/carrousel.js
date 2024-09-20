let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const totalImages = images.length;

// Clona a primeira e última imagem para criar o efeito de loop infinito
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 1].cloneNode(true);

carouselImages.appendChild(firstClone);
carouselImages.insertBefore(lastClone, images[0]);

let isTransitioning = false;
const imageWidth = images[0].clientWidth + 20; // Largura da imagem + margem
carouselImages.style.transform = `translateX(${-imageWidth}px)`;

function moveCarousel(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex += direction;

    carouselImages.style.transition = "transform 0.5s ease-in-out";
    carouselImages.style.transform = `translateX(${-(currentIndex + 1) * imageWidth}px)`;

    carouselImages.addEventListener("transitionend", () => {
        if (currentIndex === -1) {
            carouselImages.style.transition = "none";
            currentIndex = totalImages - 1;
            carouselImages.style.transform = `translateX(${-(currentIndex + 1) * imageWidth}px)`;
        } else if (currentIndex === totalImages) {
            carouselImages.style.transition = "none";
            currentIndex = 0;
            carouselImages.style.transform = `translateX(${-(currentIndex + 1) * imageWidth}px)`;
        }
        isTransitioning = false;
    });
}