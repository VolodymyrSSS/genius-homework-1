const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnClose = document.querySelector('.menu-btn-close');
const shade = document.querySelector('.mobile-menu-shade');

// burger.addEventListener('click', () => {
//   mobileMenu.classList.toggle('is-open');
// });

if (burger && mobileMenu && shade) {
  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    shade.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

if (menuBtnClose && mobileMenu && shade) {
  menuBtnClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    shade.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
}

// закрити мобільне меню по кліку будь-де на затемненні
shade.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  shade.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
});

// Close on Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    shade.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});
