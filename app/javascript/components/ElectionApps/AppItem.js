import React from 'react'
import $ from 'jquery'
import {isDeviceMobile} from '../../utils/functions'
import icons from '../../images/icons'
const AppItem = ({name, description, link, selected, onClick}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 98) + '...'
  }
  const handleClick = (e) => {
    if (!isDeviceMobile()) { $('html, body').animate({ scrollTop: 0 }, 300) }
    onClick()
    e.preventDefault()
  }
  return (
    <div className="app-item mx-1">
      <div className={ !selected ? '' : ' selected' }>
        <div className="app-block card">
          <div className="app-description" onClick={ (e) => { handleClick(e) } }>
            <div className="card-body text-left clearfix">
              <div className="card-title-wrapper">
                <h4 className="card-title">{name}</h4>
              </div>
              <p className="card-text">{descriptionTurncate()}</p>
              <h5 className="more-text">
                mehr
              </h5>
              <div className="more-icon">
                <img src={ icons.info } />
              </div>
            </div>
          </div>
          <div className="footer-link" href={ !link ? '#' : link }>
            <a href={ !link ? '#' : link }>
              <div className="card-footer py-2">
                 Los geht's
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppItem
