import { mountComponents } from 'react-rails-ujs'
import ElectionPrograms from './components/ElectionPrograms'
import Glossary from './components/Glossary'
import ElectionApps from './components/ElectionApps'

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
    return true
  } else {
    return false
  }
}
const mountToolitp = () => {
  $('[data-toggle="tooltip"]').tooltip()
}

const menuToggler = () => {
  $('.main-menu-open').click(() => {
    $('.main-menu').addClass('open')
    $('body').addClass('main-menu-open')
  })
  $('.main-menu-close').click(() => {
    $('.main-menu').removeClass('open')
    $('body').removeClass('main-menu-open')
  })
}
document.addEventListener('DOMContentLoaded', () => {
  if (viewNotMobile()) { mountFullpage() }
  mountToolitp()
  menuToggler()
  mountComponents({
    ElectionPrograms,
    Glossary,
    ElectionApps
  })
  // mountComponents is needed since there is an issue with jquery3 onReady method
  // https://github.com/reactjs/react-rails/issues/742
})
