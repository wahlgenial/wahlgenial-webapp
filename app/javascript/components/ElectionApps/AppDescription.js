import React from 'react'
import {isDeviceMobile} from '../../utils/functions'

const AppDescription = ({name, image, logo, description, link}) => {
  return (
    <div className='row col-12 no-gutters'>
      <a name='app-description'></a>
      <div className='col-lg-6 col-sm-12 order-lg-2 order-sm-1 text-center'>
        <img className={ isDeviceMobile() ? 'w-50' : 'w-75' } src={ isDeviceMobile() ? logo : image } />
      </div>
      <div className='col-lg-6 col-sm-12 order-lg-1 order-sm-2 text-lg-left text-center pb-5 px-5 d-flex flex-column'>
        <h1 className='app-title'>{name}</h1>
        <p className='app-description'>
          {description}
        </p>
        <div className='btn-container mt-auto text-lg-left text-sm-center'>
          <a className='btn btn-lg btn-default px-5 my-3 mx-0' href={ !link ? '#' : link }>
            {`Zum ${name}`}
          </a>
          <a className='btn btn-lg btn-default px-5 mx-3' href='#'>
            weiter empfehlen
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppDescription
