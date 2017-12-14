import React from 'react'
import {isDeviceMobile} from '../../utils/functions'
const AppItem = ({name, description, link, onClick}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 82) + ' ...'
  }
  const handleClick = (e) => {
    if (isDeviceMobile()) {
      console.log('work on it later')
    } else {
      onClick()
    }
  }
  return (
    <div className='app-block card d-inline-block mx-1'>
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
