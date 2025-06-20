document.addEventListener('DOMContentLoaded', function () {

    const slider = document.querySelector('.rewards-slider');
    const slides = document.querySelectorAll('.reward-slide');
    const prevButton = document.getElementById('slider-prev');
    const nextButton = document.getElementById('slider-next');
    let currentIndex = 0;
    let intervalId;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
        resetInterval(); 
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
        resetInterval(); 
    }

    function startInterval() {
        intervalId = setInterval(goToNextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);

    startInterval(); 

   
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }


    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

 
    window.addEventListener('scroll', function () {
        const hero = document.getElementById('hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `-${scrollPosition * 0.2}px`; 
    });
});
