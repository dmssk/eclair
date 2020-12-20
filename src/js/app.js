import $ from 'jquery';
import 'slick-carousel';

if (module.hot) {
  module.hot.accept();
}


// eslint-disable-next-line no-undef
$(window).on('load', () => {
  function scrollHandler() {
    // eslint-disable-next-line no-undef
    if ($(window).scrollTop() > 400) {
      $('.header__bottom.fixed').addClass('active');
    } else {
      $('.header__bottom.fixed').removeClass('active');
    }
  }
  scrollHandler();
  // eslint-disable-next-line no-undef
  $(window).on('scroll', () => {
    scrollHandler();
  });

  $('.burger').on('click', (e) => {
    e.preventDefault();
    $('.header__wrap').toggleClass('active');
  });

  $('.carousel').slick({
    infinite: true,
    prevArrow: $('.buttons .prev'),
    nextArrow: $('.buttons .next'),
  });

  $('.carousel-recommended').slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.items-switch__top').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    asNavFor: $('.items-switch__bottom'),
  });

  $('.items-switch__bottom').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    focusOnSelect: true,
    asNavFor: $('.items-switch__top'),
  });

  $('.item__actions').on('click', function actionItemsClickHandler(e) {
    const num = +$(this).find('.item__quantity-text').text();

    if ($(e.target).hasClass('item__btn--minus') && num > 1) {
      $(this).find('.item__quantity-text').text(num - 1);
    }

    if ($(e.target).hasClass('item__btn--plus')) {
      $(this).find('.item__quantity-text').text(num + 1);
    }

    if ($(e.target).hasClass('btn')) {
      e.preventDefault();
      $(this).find('.item__quantity-text').text(1);
    }
  });

  $('.cake-form .item').on('click', function cakeFormClickHandler() {
    $('.cake-form .item').removeClass('active');
    $(this).addClass('active');
  });
  $('.add-address').on('click', function addAddressHandler(e) {
    e.preventDefault();
    $('.address-field').first().clone().appendTo('.fields');
  });
});
