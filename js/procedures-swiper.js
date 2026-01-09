const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletClass: 'pagination-bullet',
    bulletActiveClass: 'pagination-bullet-active',
    clickable: true,
  },
  navigation: {
    nextEl: '.procedures-button.next',
    prevEl: '.procedures-button.prev',
  },
});
