    var swiper = new Swiper(".first-swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
        var swiper = new Swiper(".second-swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper = new Swiper(".center-swiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper = new Swiper(".bottom-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        navigation: {
        nextEl: ".swiper-next-btn",
        prevEl: ".swiper-prev-btn",
      },
    });
document.addEventListener('DOMContentLoaded', function() {
  const centerSwiper = new Swiper('.center-swiper', {
    // Default settings
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Responsive breakpoints
    breakpoints: {
      // When window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // When window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // When window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      // When window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // When window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 35
      },
      // When window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
        centeredSlides: false
      },
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const centerSwiper = new Swiper('.bottom-swiper', {
    // Default settings
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Responsive breakpoints
    breakpoints: {
      // When window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // When window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // When window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      // When window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // When window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 35
      },
      // When window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false
      }
    }
  });
});