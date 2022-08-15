document.querySelector('.filter').addEventListener('click', e => {
  const list = document.querySelector('.card');
  const selectedBtn = document.querySelector('.filter__button.active');

  if (e.target.innerText === 'Все') {
    toggleClassActive(selectedBtn, e.target);
    list.innerHTML = all;
  } else if (e.target.innerText === 'Веб-сайты') {
    toggleClassActive(selectedBtn, e.target);
    list.innerHTML = website;
  } else if (e.target.innerText === 'Приложения') {
    toggleClassActive(selectedBtn, e.target);
    list.innerHTML = apps;
  } else if (e.target.innerText === 'Дизайн') {
    toggleClassActive(selectedBtn, e.target);
    list.innerHTML = design;
  } else if (e.target.innerText === 'Маркетинг') {
    toggleClassActive(selectedBtn, e.target);
    list.innerHTML = marketing;
  }
});

function toggleClassActive(beforeBtn, newBtn) {
  if (beforeBtn) {
    beforeBtn.classList.remove('active');
    newBtn.classList.add('active');
  } else {
    newBtn.classList.add('active');
  }
}

var all = `<ul class="card__list list">
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://zhuk.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Технокряк это современная площадка продажи современной
                        техники. Компания используют эту платформу для
                        предоставления каталога товаров для клиентов.
                      </p>

                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop1.webp    1x,
                            ./images/portfolio/desktop/img-desktop1@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop1.jpg    1x,
                            ./images/portfolio/desktop/img-desktop1@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet1.webp    1x,
                            ./images/portfolio/tablet/img-tablet1@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet1.jpg    1x,
                            ./images/portfolio/tablet/img-tablet1@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile1.webp    1x,
                            ./images/portfolio/mobile/img-mobile1@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile1.jpg    1x,
                            ./images/portfolio/mobile/img-mobile1@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="компьютер" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">Технокряк</h2>
                      <h3 class="product__content-subtitle">Веб-сайт</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://cool-poster.com/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Современый дизайн созданый под индивидуальные
                        потребности клиента. Сочитание цветов и линий идеально
                        гармонирует меж собою и привлекает внимание клиента.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop2.webp    1x,
                            ./images/portfolio/desktop/img-desktop2@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop2.jpg    1x,
                            ./images/portfolio/desktop/img-desktop2@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet2.webp    1x,
                            ./images/portfolio/tablet/img-tablet2@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet2.jpg    1x,
                            ./images/portfolio/tablet/img-tablet2@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile2.webp    1x,
                            ./images/portfolio/mobile/img-mobile2@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile2.jpg    1x,
                            ./images/portfolio/mobile/img-mobile2@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="баскетболисты" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Постер <span lang="en"> New Orlean vs Golden Star</span>
                      </h2>
                      <h3 class="product__content-subtitle">Дизайн</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="http://famiglia.com.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Заказ на дизайн сайта созданый под индивидуальные
                        подтебности клиента. Логотип привлекает и удерживает
                        внимание клиентаю. Приложение созданое по всем критериям
                        UI/UX
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop3.webp    1x,
                            ./images/portfolio/desktop/img-desktop3@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop3.jpg    1x,
                            ./images/portfolio/desktop/img-desktop3@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet3.webp    1x,
                            ./images/portfolio/tablet/img-tablet3@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet3.jpg    1x,
                            ./images/portfolio/tablet/img-tablet3@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile3.webp    1x,
                            ./images/portfolio/mobile/img-mobile3@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile3.jpg    1x,
                            ./images/portfolio/mobile/img-mobile3@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="постер" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Ресторан <span lang="en">Seafood</span>
                      </h2>
                      <h3 class="product__content-subtitle">Приложение</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://ek.ua/ua/JBL-TUNE-510BT.htm"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Проект созданный для формирования спроса и
                        удовлетворение потребностей потребителя. Простое и
                        елегантное решение.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop4.webp    1x,
                            ./images/portfolio/desktop/img-desktop4@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop4.jpg    1x,
                            ./images/portfolio/desktop/img-desktop4@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet4.webp    1x,
                            ./images/portfolio/tablet/img-tablet4@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet4.jpg    1x,
                            ./images/portfolio/tablet/img-tablet4@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile4.webp    1x,
                            ./images/portfolio/mobile/img-mobile4@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile4.jpg    1x,
                            ./images/portfolio/mobile/img-mobile4@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="наушники" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Проект <span lang="en">Prime</span>
                      </h2>
                      <h3 class="product__content-subtitle">Маркетинг</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://ukrsich.kiev.ua/ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Приложение созданое для продажи полиграфии. Удобное в
                        использовании преложение для лучшего подбора товара и
                        удобного заказа товараю
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop5.webp    1x,
                            ./images/portfolio/desktop/img-desktop5@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop5.jpg    1x,
                            ./images/portfolio/desktop/img-desktop5@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet5.webp    1x,
                            ./images/portfolio/tablet/img-tablet5@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet5.jpg    1x,
                            ./images/portfolio/tablet/img-tablet5@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile5.webp    1x,
                            ./images/portfolio/mobile/img-mobile5@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile5.jpg    1x,
                            ./images/portfolio/mobile/img-mobile5@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="две коробки" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Проект <span lang="en">Boxes</span>
                      </h2>
                      <h3 class="product__content-subtitle">Приложение</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://monpacie.com.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Небольшой сайт, основной целью которого стоит знакомство
                        посетителей с компанией, демонстрация ее деятельности.
                        Персональный сайт-визитка показывает очень высокую
                        эффективность продаж.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop6.webp    1x,
                            ./images/portfolio/desktop/img-desktop6@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop6.jpg    1x,
                            ./images/portfolio/desktop/img-desktop6@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet6.webp    1x,
                            ./images/portfolio/tablet/img-tablet6@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet6.jpg    1x,
                            ./images/portfolio/tablet/img-tablet6@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile6.webp    1x,
                            ./images/portfolio/mobile/img-mobile6@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile6.jpg    1x,
                            ./images/portfolio/mobile/img-mobile6@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="монитор" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title" lang="en">
                        Inspiration has no Borders
                      </h2>
                      <h3 class="product__content-subtitle">Веб-сайт</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://www.cosmo.com.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Дизайн журнала - это пакет документов, который детально
                        отражает концепцию будущего стиля: цветовые решения,
                        композицию, расположение статей и света.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop7.webp    1x,
                            ./images/portfolio/desktop/img-desktop7@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop7.jpg    1x,
                            ./images/portfolio/desktop/img-desktop7@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet7.webp    1x,
                            ./images/portfolio/tablet/img-tablet7@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet7.jpg    1x,
                            ./images/portfolio/tablet/img-tablet7@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile7.webp    1x,
                            ./images/portfolio/mobile/img-mobile7@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile7.jpg    1x,
                            ./images/portfolio/mobile/img-mobile7@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="книга" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Издание <span lang="en">Limited Edition</span>
                      </h2>
                      <h3 class="product__content-subtitle">Дизайн</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://showroom.kiev.ua/ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Целью проекта является определение качеств изделий, в
                        том числе: внешних черт изделия; и особенно -
                        структурных и функциональных взаимосвязей, которые
                        превращают изделие в единое целое с точки зрения
                        потребителя и с точки зрения изготовителя.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop8.webp    1x,
                            ./images/portfolio/desktop/img-desktop8@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop8.jpg    1x,
                            ./images/portfolio/desktop/img-desktop8@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet8.webp    1x,
                            ./images/portfolio/tablet/img-tablet8@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet8.jpg    1x,
                            ./images/portfolio/tablet/img-tablet8@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile8.webp    1x,
                            ./images/portfolio/mobile/img-mobile8@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile8.jpg    1x,
                            ./images/portfolio/mobile/img-mobile8@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="лейбл" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Проект <span lang="en">LAB </span>
                      </h2>
                      <h3 class="product__content-subtitle">Маркетинг</h3>
                    </div>
                  </a>
                </article>
              </li>
              <li class="card__item">
                <article class="product">
                  <a
                    href="https://denika.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Работа над проектов включает в себя работу над дизайном,
                        юзабилити, текстом, логотипом, навигацией и многим
                        другим. Здесь учли и интересы целевой аудитории, и
                        актуальность информационного наполнения, и даже
                        особенности цветового оформления.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop9.webp    1x,
                            ./images/portfolio/desktop/img-desktop9@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop9.jpg    1x,
                            ./images/portfolio/desktop/img-desktop9@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet9.webp    1x,
                            ./images/portfolio/tablet/img-tablet9@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet9.jpg    1x,
                            ./images/portfolio/tablet/img-tablet9@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile9.webp    1x,
                            ./images/portfolio/mobile/img-mobile9@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile9.jpg    1x,
                            ./images/portfolio/mobile/img-mobile9@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="ноубук" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title" lang="en">
                        Growing Business
                      </h2>
                      <h3 class="product__content-subtitle">Приложение</h3>
                    </div>
                  </a>
                </article>
              </li>
            </ul>`;

var website = `<ul class="card__list list">
             <li class="card__item">
                <article class="product">
                  <a
                    href="https://zhuk.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Технокряк это современная площадка продажи современной
                        техники. Компания используют эту платформу для
                        предоставления каталога товаров для клиентов.
                      </p>

                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop1.webp    1x,
                            ./images/portfolio/desktop/img-desktop1@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop1.jpg    1x,
                            ./images/portfolio/desktop/img-desktop1@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet1.webp    1x,
                            ./images/portfolio/tablet/img-tablet1@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet1.jpg    1x,
                            ./images/portfolio/tablet/img-tablet1@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile1.webp    1x,
                            ./images/portfolio/mobile/img-mobile1@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile1.jpg    1x,
                            ./images/portfolio/mobile/img-mobile1@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="компьютер" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">Технокряк</h2>
                      <h3 class="product__content-subtitle">Веб-сайт</h3>
                    </div>
                  </a>
                </article>
              </li>

  <li class="card__item">
                <article class="product">
                  <a
                    href="https://monpacie.com.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Небольшой сайт, основной целью которого стоит знакомство
                        посетителей с компанией, демонстрация ее деятельности.
                        Персональный сайт-визитка показывает очень высокую
                        эффективность продаж.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop6.webp    1x,
                            ./images/portfolio/desktop/img-desktop6@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop6.jpg    1x,
                            ./images/portfolio/desktop/img-desktop6@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet6.webp    1x,
                            ./images/portfolio/tablet/img-tablet6@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet6.jpg    1x,
                            ./images/portfolio/tablet/img-tablet6@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile6.webp    1x,
                            ./images/portfolio/mobile/img-mobile6@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile6.jpg    1x,
                            ./images/portfolio/mobile/img-mobile6@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="монитор" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title" lang="en">
                        Inspiration has no Borders
                      </h2>
                      <h3 class="product__content-subtitle">Веб-сайт</h3>
                    </div>
                  </a>
                </article>
              </li>


            </ul>`;

var apps = `<ul class="card__list list">
 <li class="card__item">
                <article class="product">
                  <a
                    href="http://famiglia.com.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Заказ на дизайн сайта созданый под индивидуальные
                        подтебности клиента. Логотип привлекает и удерживает
                        внимание клиентаю. Приложение созданое по всем критериям
                        UI/UX
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop3.webp    1x,
                            ./images/portfolio/desktop/img-desktop3@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop3.jpg    1x,
                            ./images/portfolio/desktop/img-desktop3@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet3.webp    1x,
                            ./images/portfolio/tablet/img-tablet3@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet3.jpg    1x,
                            ./images/portfolio/tablet/img-tablet3@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile3.webp    1x,
                            ./images/portfolio/mobile/img-mobile3@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile3.jpg    1x,
                            ./images/portfolio/mobile/img-mobile3@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="постер" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Ресторан <span lang="en">Seafood</span>
                      </h2>
                      <h3 class="product__content-subtitle">Приложение</h3>
                    </div>
                  </a>
                </article>
              </li>

                 <li class="card__item">
                <article class="product">
                  <a
                    href="https://ukrsich.kiev.ua/ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Приложение созданое для продажи полиграфии. Удобное в
                        использовании преложение для лучшего подбора товара и
                        удобного заказа товараю
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop5.webp    1x,
                            ./images/portfolio/desktop/img-desktop5@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop5.jpg    1x,
                            ./images/portfolio/desktop/img-desktop5@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet5.webp    1x,
                            ./images/portfolio/tablet/img-tablet5@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet5.jpg    1x,
                            ./images/portfolio/tablet/img-tablet5@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile5.webp    1x,
                            ./images/portfolio/mobile/img-mobile5@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile5.jpg    1x,
                            ./images/portfolio/mobile/img-mobile5@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="две коробки" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Проект <span lang="en">Boxes</span>
                      </h2>
                      <h3 class="product__content-subtitle">Приложение</h3>
                    </div>
                  </a>
                </article>
              </li>

                <li class="card__item">
                <article class="product">
                  <a
                    href="https://denika.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Работа над проектов включает в себя работу над дизайном,
                        юзабилити, текстом, логотипом, навигацией и многим
                        другим. Здесь учли и интересы целевой аудитории, и
                        актуальность информационного наполнения, и даже
                        особенности цветового оформления.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop9.webp    1x,
                            ./images/portfolio/desktop/img-desktop9@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop9.jpg    1x,
                            ./images/portfolio/desktop/img-desktop9@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet9.webp    1x,
                            ./images/portfolio/tablet/img-tablet9@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet9.jpg    1x,
                            ./images/portfolio/tablet/img-tablet9@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile9.webp    1x,
                            ./images/portfolio/mobile/img-mobile9@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile9.jpg    1x,
                            ./images/portfolio/mobile/img-mobile9@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="ноубук" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title" lang="en">
                        Growing Business
                      </h2>
                      <h3 class="product__content-subtitle">Приложение</h3>
                    </div>
                  </a>
                </article>
              </li>

</ul>`;

var design = `<ul class="card__list list">   
   <li class="card__item">
                <article class="product">
                  <a
                    href="https://cool-poster.com/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Современый дизайн созданый под индивидуальные
                        потребности клиента. Сочитание цветов и линий идеально
                        гармонирует меж собою и привлекает внимание клиента.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop2.webp    1x,
                            ./images/portfolio/desktop/img-desktop2@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop2.jpg    1x,
                            ./images/portfolio/desktop/img-desktop2@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet2.webp    1x,
                            ./images/portfolio/tablet/img-tablet2@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet2.jpg    1x,
                            ./images/portfolio/tablet/img-tablet2@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile2.webp    1x,
                            ./images/portfolio/mobile/img-mobile2@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile2.jpg    1x,
                            ./images/portfolio/mobile/img-mobile2@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="баскетболисты" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Постер <span lang="en"> New Orlean vs Golden Star</span>
                      </h2>
                      <h3 class="product__content-subtitle">Дизайн</h3>
                    </div>
                  </a>
                </article>
              </li>

              <li class="card__item">
                <article class="product">
                  <a
                    href="https://www.cosmo.com.ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Дизайн журнала - это пакет документов, который детально
                        отражает концепцию будущего стиля: цветовые решения,
                        композицию, расположение статей и света.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop7.webp    1x,
                            ./images/portfolio/desktop/img-desktop7@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop7.jpg    1x,
                            ./images/portfolio/desktop/img-desktop7@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet7.webp    1x,
                            ./images/portfolio/tablet/img-tablet7@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet7.jpg    1x,
                            ./images/portfolio/tablet/img-tablet7@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile7.webp    1x,
                            ./images/portfolio/mobile/img-mobile7@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile7.jpg    1x,
                            ./images/portfolio/mobile/img-mobile7@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="книга" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Издание <span lang="en">Limited Edition</span>
                      </h2>
                      <h3 class="product__content-subtitle">Дизайн</h3>
                    </div>
                  </a>
                </article>
              </li>
</ul>`;

var marketing = `<ul class="card__list list">
<li class="card__item">
                <article class="product">
                  <a
                    href="https://ek.ua/ua/JBL-TUNE-510BT.htm"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Проект созданный для формирования спроса и
                        удовлетворение потребностей потребителя. Простое и
                        елегантное решение.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop4.webp    1x,
                            ./images/portfolio/desktop/img-desktop4@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop4.jpg    1x,
                            ./images/portfolio/desktop/img-desktop4@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet4.webp    1x,
                            ./images/portfolio/tablet/img-tablet4@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet4.jpg    1x,
                            ./images/portfolio/tablet/img-tablet4@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile4.webp    1x,
                            ./images/portfolio/mobile/img-mobile4@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile4.jpg    1x,
                            ./images/portfolio/mobile/img-mobile4@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="наушники" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Проект <span lang="en">Prime</span>
                      </h2>
                      <h3 class="product__content-subtitle">Маркетинг</h3>
                    </div>
                  </a>
                </article>
              </li>

               <li class="card__item">
                <article class="product">
                  <a
                    href="https://showroom.kiev.ua/ua/"
                    target="_blank"
                    class="product__link link"
                  >
                    <div class="product__image-wrap">
                      <p class="product__description">
                        Целью проекта является определение качеств изделий, в
                        том числе: внешних черт изделия; и особенно -
                        структурных и функциональных взаимосвязей, которые
                        превращают изделие в единое целое с точки зрения
                        потребителя и с точки зрения изготовителя.
                      </p>
                      <picture class="picture">
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop8.webp    1x,
                            ./images/portfolio/desktop/img-desktop8@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:1200px)"
                          srcset="
                            ./images/portfolio/desktop/img-desktop8.jpg    1x,
                            ./images/portfolio/desktop/img-desktop8@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet8.webp    1x,
                            ./images/portfolio/tablet/img-tablet8@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:768px)"
                          srcset="
                            ./images/portfolio/tablet/img-tablet8.jpg    1x,
                            ./images/portfolio/tablet/img-tablet8@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile8.webp    1x,
                            ./images/portfolio/mobile/img-mobile8@2x.webp 2x
                          "
                          type="image/webp"
                        />
                        <source
                          media="(min-width:280px)"
                          srcset="
                            ./images/portfolio/mobile/img-mobile8.jpg    1x,
                            ./images/portfolio/mobile/img-mobile8@2x.jpg 2x
                          "
                          type="image/jpeg"
                        />

                        <img src="#" alt="лейбл" class="product__img" />
                      </picture>
                    </div>
                    <div class="product__content">
                      <h2 class="product__content-title">
                        Проект <span lang="en">LAB </span>
                      </h2>
                      <h3 class="product__content-subtitle">Маркетинг</h3>
                    </div>
                  </a>
                </article>
              </li>
</ul>`;
