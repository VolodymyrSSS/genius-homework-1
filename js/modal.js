// версія відкриття модального вікна для усіх кнопок де присутній клас modal-btn-open
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const btnOpenList = document.querySelectorAll('.modal-btn-open');
const btnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  backdrop.classList.toggle('is-hidden');
};

// навішування слухача на усі елементи, які мають клас modal-btn-open
btnOpenList.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

// клік по кнопці "X" для закриття модального вікна
btnClose.addEventListener('click', toggleModal);

// клік по будь-якому місцю поля backdrop для закриття модального вікна
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    toggleModal();
  }
});

// натискання на кнопку ESC для закриття модального вікна
document.addEventListener('keydown', e => {
  const isOpen = !backdrop.classList.contains('is-hidden');
  if (e.key === 'Escape' && isOpen) {
    toggleModal();
  }
});
