document.querySelector('.footer__mail-form').addEventListener('submit', e => {
  e.preventDefault();

  document.querySelector('[data-modal]').classList.toggle('visually-hidden');

  document.body.classList.toggle('modal-is-open');

  document.querySelector(
    '.modal-window__content',
  ).innerHTML = `<div class="call-form__recall">
            Вы успешно подписались на рассылку!

            <svg class="call-form__recall_icon">
              <use href="./images/smile.svg#smile" />
            </svg>
          </div>`;

  const idSetTimeuot = setTimeout(() => {
    document.querySelector('[data-modal]').classList.toggle('visually-hidden');
    document.body.classList.toggle('modal-is-open');
    document.querySelector(
      '.modal-window__content',
    ).innerHTML = `<p class="modal-window__title">
            Оставьте свои данные, мы вам перезвоним
          </p>

          <form action="" class="call-form">
            <div class="call-form__user-inform">
              <div class="call-form__container">
                <label for="user-name" class="call-form__textlabel">Имя</label>
                <div class="call-form__wrap">
                  <input
                    class="call-form__input"
                    type="text"
                    id="user-name"
                    name="user-name"
                    required
                    minlength="2"
                    pattern="^[A-Za-zА-Яа-яЁё]+$"
                    title="Пример: Александра"
                  />
                  <svg class="call-form__icon" width="18" height="18">
                    <use href="./images/icons.svg#icon-person"></use>
                  </svg>
                </div>
              </div>

              <div class="call-form__container">
                <label for="user-phone" class="call-form__textlabel"
                  >Телефон</label
                >
                <div class="call-form__wrap">
                  <input
                    class="call-form__input"
                    type="tel"
                    name="user-phone"
                    id="user-phone"
                    required
                    pattern="[0-9]{10}"
                    title="0931112233"
                  />
                  <svg class="call-form__icon" width="18" height="18">
                    <use href="./images/icons.svg#icon-phone"></use>
                  </svg>
                </div>
              </div>

              <div class="call-form__container">
                <label for="user-email" class="call-form__textlabel"
                  >Почта</label
                >
                <div class="call-form__wrap">
                  <input
                    class="call-form__input"
                    type="email"
                    name="user-email"
                    id="user-email"
                  />
                  <svg class="call-form__icon" width="18" height="18">
                    <use href="./images/icons.svg#icon-email"></use>
                  </svg>
                </div>
              </div>

              <div class="call-form__container">
                <label for="user-comment" class="call-form__textlabel"
                  >Комментарии</label
                >
                <textarea
                  class="call-form__comment"
                  name="user-comment"
                  id="user-comment"
                  placeholder="Введите текст"
                ></textarea>
              </div>
            </div>

            <div class="agree-form">
              <input
                type="checkbox"
                id="agree-form-check"
                class="agree-form__checkbox visually-hidden"
                required
              />
              <label for="agree-form-check" class="agree-form__text">
                <div class="agree-form__text-wrap">
                  Соглашаюсь с рассылкой и принимаю&nbsp;
                  <a
                    href="./contract.html"
                    target="_blank"
                    class="agree-form__link"
                    >Условия договора</a
                  >
                </div>
              </label>
            </div>

            <button type="submit" class="button call-form__btn">
              Отправить
            </button>
          </form>`;
    document.querySelector('.call-form').addEventListener('submit', lisnerForm);
  }, 2000);

  localStorage.setItem('idSetTimeuot', idSetTimeuot);
});

function lisnerForm(e) {
  e.preventDefault();

  document.querySelector(
    '.modal-window__content',
  ).innerHTML = `<div class="call-form__recall">
            Ожидайте, с вами свяжется наш менеджер!

            <svg class="call-form__recall_icon">
              <use href="./images/smile.svg#smile" />
            </svg>
          </div>`;

  const idSetTimeuotForm = setTimeout(() => {
    document.querySelector('[data-modal]').classList.toggle('visually-hidden');
    document.body.classList.toggle('modal-is-open');
    document.querySelector(
      '.modal-window__content',
    ).innerHTML = `<p class="modal-window__title">
            Оставьте свои данные, мы вам перезвоним
          </p>

          <form action="" class="call-form">
            <div class="call-form__user-inform">
              <div class="call-form__container">
                <label for="user-name" class="call-form__textlabel">Имя</label>
                <div class="call-form__wrap">
                  <input
                    class="call-form__input"
                    type="text"
                    id="user-name"
                    name="user-name"
                    required
                    minlength="2"
                    pattern="^[A-Za-zА-Яа-яЁё]+$"
                    title="Пример: Александра"
                  />
                  <svg class="call-form__icon" width="18" height="18">
                    <use href="./images/icons.svg#icon-person"></use>
                  </svg>
                </div>
              </div>

              <div class="call-form__container">
                <label for="user-phone" class="call-form__textlabel"
                  >Телефон</label
                >
                <div class="call-form__wrap">
                  <input
                    class="call-form__input"
                    type="tel"
                    name="user-phone"
                    id="user-phone"
                    required
                    pattern="[0-9]{10}"
                    title="0931112233"
                  />
                  <svg class="call-form__icon" width="18" height="18">
                    <use href="./images/icons.svg#icon-phone"></use>
                  </svg>
                </div>
              </div>

              <div class="call-form__container">
                <label for="user-email" class="call-form__textlabel"
                  >Почта</label
                >
                <div class="call-form__wrap">
                  <input
                    class="call-form__input"
                    type="email"
                    name="user-email"
                    id="user-email"
                  />
                  <svg class="call-form__icon" width="18" height="18">
                    <use href="./images/icons.svg#icon-email"></use>
                  </svg>
                </div>
              </div>

              <div class="call-form__container">
                <label for="user-comment" class="call-form__textlabel"
                  >Комментарии</label
                >
                <textarea
                  class="call-form__comment"
                  name="user-comment"
                  id="user-comment"
                  placeholder="Введите текст"
                ></textarea>
              </div>
            </div>

            <div class="agree-form">
              <input
                type="checkbox"
                id="agree-form-check"
                class="agree-form__checkbox visually-hidden"
                required
              />
              <label for="agree-form-check" class="agree-form__text">
                <div class="agree-form__text-wrap">
                  Соглашаюсь с рассылкой и принимаю&nbsp;
                  <a
                    href="./contract.html"
                    target="_blank"
                    class="agree-form__link"
                    >Условия договора</a
                  >
                </div>
              </label>
            </div>

            <button type="submit" class="button call-form__btn">
              Отправить
            </button>
          </form>`;
  }, 2000);

  localStorage.setItem('idSetTimeuot', idSetTimeuotForm);
}
