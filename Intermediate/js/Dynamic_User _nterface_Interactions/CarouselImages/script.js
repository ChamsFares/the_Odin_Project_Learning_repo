class Carousel {
    constructor(element) {
        this.carousel = element;
        this.track = this.carousel.querySelector('.carousel-track');
        this.slides = this.track ? Array.from(this.track.children) : [];
        this.nextButton = this.carousel.querySelector('.carousel-button-right');
        this.prevButton = this.carousel.querySelector('.carousel-button-left');
        this.nav = this.carousel.querySelector('.carousel-nav');      
        this.currentSlide = 0;
        this.indicators = [];

        this.createNav();
        this.setEventListeners();
        this.updateSlidePosition(true);
        this.startAutoPlay();
    }

    createNav() {
        this.nav.innerHTML = ''; 
        this.slides.forEach((_, i) => {
            const button = document.createElement('button');
            button.classList.add('carousel-indicator');
            if (i === 0) button.classList.add('active');
            this.nav.appendChild(button);
        });
        this.indicators = Array.from(this.nav.children);
    }

    setEventListeners() {
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.moveToSlide(this.currentSlide + 1));
        }
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.moveToSlide(this.currentSlide - 1));
        }
        if (this.indicators.length > 0) {
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.moveToSlide(index));
            });
        }
    }

    moveToSlide(index) {
        this.currentSlide = (index + this.slides.length) % this.slides.length;
        this.updateSlidePosition();
        this.updateIndicators();
        this.resetAutoPlay();
    }

    updateSlidePosition(initialize = false) {
        if (this.track) {
            const slideWidth = this.carousel.clientWidth;
            if (initialize) {
                this.slides.forEach((slide, index) => {
                    slide.style.left = `${index * 100}%`;
                });
            }
            this.track.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;
        }
    }

    updateIndicators() {
        if (this.indicators && this.indicators.length > 0) {
            this.indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentSlide);
            });
        }
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.moveToSlide(this.currentSlide + 1), 3000);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.querySelector('.carousel-container'));
        });