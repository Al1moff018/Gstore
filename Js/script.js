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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });