
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const navbar = document.querySelector('nav');

    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100; // Décale de 100% par slide
      carouselTrack.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides; // Slide suivant
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Slide précédent
      updateCarousel();
    });

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
 