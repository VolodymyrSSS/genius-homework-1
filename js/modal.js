document.addEventListener('DOMContentLoaded', () => {
  // версія відкриття модального вікна для усіх кнопок де присутній клас modal-btn-open
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const btnOpenList = document.querySelectorAll('.modal-btn-open');
  const btnClose = document.querySelector('.modal-btn-close');

  const toggleModal = () => {
    backdrop.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll'); // коли модВікно відкрито, щоб не було скрола
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

  const focusableSelectors =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  document.addEventListener('keydown', e => {
    const isOpen = !backdrop.classList.contains('is-hidden');
    if (!isOpen) return;

    // натискання на кнопку ESC для закриття модального вікна
    if (e.key === 'Escape' && isOpen) {
      toggleModal();
      return;
    }

    // натискання на кнопку Tab для фіксації фокуса всередині модального вікна, коли воно відкрите
    if (e.key === 'Tab') {
      const focusables = modal.querySelectorAll(focusableSelectors);
      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  });
});
