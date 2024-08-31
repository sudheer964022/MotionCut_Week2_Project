const swiper = new Swiper('.frame', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true, 
  autoplay: {
      delay: 1000, 
      disableOnInteraction: false, 
  },
});
