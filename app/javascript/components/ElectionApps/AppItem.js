import React from 'react'
import {isDeviceMobile} from '../../utils/functions'
import $ from 'jquery'
const AppItem = ({name, description, link, selected, onClick}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 98) + ' ...'
  }
  const handleClick = (e) => {
    if (isDeviceMobile()) {
      console.log('work on it later')
    } else {
      onClick()
    }
    e.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, 300)
  }
  return (
    <div className={ 'app-block card d-inline-block mx-1' + (!selected ? '' : ' selected') }>
      <a href='#app-description'>
        <div className="card-body text-left py-4" onClick={ (e) => { handleClick(e) } }>
          <h4 className="card-title pt-2">{name}</h4>
          <p className="card-text">{descriptionTurncate()}</p>
          <h5 className='more'>
            mehr
          </h5>
        </div>
      </a>
      <a className='footer-link' href={ !link ? '#' : link }>
        <div className="card-footer text-center py-2">
           Los geht's
        </div>
      </a>
    </div>
  )
}

export default AppItem
