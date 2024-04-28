let swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 70,
    modifier: 2.5,
    slideShadows: "boolean",
  },
});

// slick slider

$(".single-item").slick({
  centerMode: true,
  slidesToShow: 3,
  prevArrow: $(".s-prev"),
  nextArrow: $(".s-next"),
});
