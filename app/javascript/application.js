import { mountComponents } from 'react-rails-ujs'
import ElectionPrograms from './components/ElectionPrograms'
import CallToActionGhost from './components/CallToActionGhost'
import CalendarFooter from './components/CalendarFooter'
import Glossary from './components/Glossary'
import ElectionApps from './components/ElectionApps'
import WhySectionVideo from './components/WhySectionVideo'
import HowSectionVideo from './components/HowSectionVideo'

require('./_dependencies')
const mountFullpage = () => {
  $('#fullpage').fullpage({
    menu: '#menu',
    lockAnchors: false,
    anchors: ['why-section', 'who-section', 'how-section', 'what-section'],
    // navigationTooltips: ['WARUM', 'WEN', 'WIE', 'WAS'],
    normalScrollElements: '.main-menu',
    showActiveTooltip: true,
    navigation: true,
    navigationPosition: 'right',
    css3: true,
    lazyLoading: true
  })
}
const menuIsOpened = () => {
  if ($('.main-menu').hasClass('open')) {
    return true
  } else {
    return false
  }
}

const viewNotMediumDevice = () => {
  if (window.innerWidth > 768) {
    return true
  } else {
    return false
  }
}
const mountToolitp = () => {
  $('[data-toggle="tooltip"]').tooltip()
}

const menuToggleOpen = (e) => {
  $('.main-menu').addClass('open')
  $('body').addClass('main-menu-open')
  e.preventDefault()
}

const menuToggleClose = (e) => {
  $('.main-menu').removeClass('open')
  $('body').removeClass('main-menu-open')
  e.preventDefault()
}

const menuLinksNavigator = () => {
  $('a[class^="navigation-link"]').click((link) => {
    if (menuIsOpened()) { menuToggleClose() }
  })
}

const menuTogglerEventListener = () => {
  $('.main-menu-open').click((e) => { menuToggleOpen(e) })
  $('.main-menu-close').click((e) => { menuToggleClose(e) })
}

document.addEventListener('DOMContentLoaded', () => {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
  if (viewNotMediumDevice()) {
    $('.anchor-tag').remove()
    mountFullpage()
  }
  mountToolitp()
  menuTogglerEventListener()
  menuLinksNavigator()
  mountComponents({
    ElectionPrograms,
    CallToActionGhost,
    CalendarFooter,
    Glossary,
    ElectionApps,
    WhySectionVideo,
    HowSectionVideo
  })
  // mountComponents is needed since there is an issue with jquery3 onReady method
  // https://github.com/reactjs/react-rails/issues/742
})
