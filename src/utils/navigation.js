export function clickToOtherPage () {
  $('.navbar-collapse').collapse('hide')
  window.scrollTo(0, 0)
  $('body').data({'enableScroll': false})
  $('#mainNav').addClass('navbar-shrink')
}

export function clickToMainPage () {
  $('.navbar-collapse').collapse('hide')
  window.scrollTo(0, 0)
  $('body').data({'enableScroll': true})
  $('#mainNav').removeClass('navbar-shrink')
}
