if (module.hot) {
  module.hot.accept()
}


$(window).on('load', function(e) {
  

  $('.item__actions').on('click', function(e) {
    let num = +$(this).find('.item__quantity-text').text()
    
    if ($(e.target).hasClass('item__btn--minus') && num > 1) {
      $(this).find('.item__quantity-text').text(num - 1)
    }
    
    if ($(e.target).hasClass('item__btn--plus')) {
      $(this).find('.item__quantity-text').text(num + 1)
    }
    
    if ($(e.target).hasClass('btn')) {
      e.preventDefault()
      $(this).find('.item__quantity-text').text(1)
    }

  })
})