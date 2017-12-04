import { mountComponents } from 'react-rails-ujs'
import ElectionPrograms from './components/ElectionPrograms'

require('bootstrap')
require('fullpage.js')

const mountFullpage = () => {
  $('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: true,
    // anchors: ['page1', 'page2', 'page3', 'page4'],
    // navigationTooltips: ['page1', 'page2', 'page3', 'page4'],
    normalScrollElements: '.main-menu',
    showActiveTooltip: true,
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    lazyLoading: true
  })
}
// const menuIsOpened = () => {
//   if ($('.main-menu').hasClass('open')) {
//     return true
//   } else {
//     return false
//   }
// }

const viewNotMobile = () => {
  if (window.innerWidth > 570) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}
const mountToolitp = () => {
  $('[data-toggle="tooltip"]').tooltip()
}

const menuToggler = () => {
  $('.main-menu-open').click(() => {
    $('.main-menu').addClass('open')
  })
  $('.main-menu-close').click(() => {
    $('.main-menu').removeClass('open')
  })
}
document.addEventListener('DOMContentLoaded', () => {
  if (viewNotMobile()) { mountFullpage() }
  mountToolitp()
  menuToggler()
  mountComponents({
    ElectionPrograms
  })
  // mountComponents is needed since there is an issue with jquery3 onReady method
  // https://github.com/reactjs/react-rails/issues/742
})
