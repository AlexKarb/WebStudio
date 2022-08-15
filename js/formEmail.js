document.querySelector('.footer__mail-form').addEventListener('submit', e => {
  e.preventDefault();

  document.querySelector('[data-modal]').classList.toggle('is-hidden');

  document.body.classList.toggle('modal-is-open');

  document.querySelector(
    '.modal-window__content',
  ).innerHTML = `<div class="call-form__recall">
            Вы успешно подписались на рассылку!

            <svg class="call-form__recall_icon">
              <use href="./images/smile.svg#smile" />
            </svg>
          </div>`;

  setTimeout(() => {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');
    document.body.classList.toggle('modal-is-open');
  }, 2000);
});
