document.addEventListener('DOMContentLoaded', function() {
    const introSection = document.querySelector('.intro-section');
    const sections = document.querySelectorAll('section');
    const sliderContainer = document.querySelector('.slider-container');
    let currentSlide = 0;
    let slideInterval;

    function checkVisibility() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                section.classList.add('visible');
                section.classList.remove('hidden');
            } else {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }
        });

        if (scrollTop > windowHeight) {
            introSection.classList.add('hidden');
        } else {
            introSection.classList.remove('hidden');
        }
    }

    function showSlide(index) {
        currentSlide = index;
        sliderContainer.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % 3;
            showSlide(currentSlide);
        }, 3000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
    showSlide(currentSlide); // Initial slide
    startSlideShow(); // Start slide show
});
