import React from 'react'
import {isDeviceMobile} from '../../utils/functions'
import icons from '../../images/icons'

const AppDescription = ({name, image, logo, description, link}) => {
  const appName = _ => {
    return `Zum ${name.substring(0, 16) + (name.length > 17 ? '...' : '')}`
  }
  return (
    <div id="AppDescription" className="row col-12 no-gutters">
      <a name="app-description"></a>
      <div className="col-lg-6 col-sm-12 order-lg-2 order-sm-1 text-center">
        <img className={ 'mt-5 pt-2 mb-3 ' + (isDeviceMobile() ? 'w-50 px-4' : 'w-75') } src={ isDeviceMobile() ? logo : image } />
      </div>
      <div className="d-flex flex-column col-lg-6 col-sm-12 order-lg-1 order-sm-2 text-left pb-5 px-1 no-gutters">
        <div className="px-4">
          <h2 className="app-title text-center text-lg-left">{name}</h2>
          <p className="app-description pt-2">
            {description}
          </p>
        </div>
        <div className="container row btn-container m-auto text-lg-left text-sm-center ">
          <div className="col-lg-6 col-sm-12">
            <a className="btn-cta btn btn-md btn-default" href={ !link ? '#' : link } target="_blank">
              <div className="icon">
                &#x1F680;
              </div>
              <div className="text">
                {appName()}
              </div>

            </a>
          </div>
          <div className="col-lg-6 col-sm-12">
            <a className="btn btn-md btn-default" href="#">
              <div className="icon">
                <img className="icon pr-3" src={ icons.share } />
              </div>
              <div className="text">
                weiter empfehlen
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDescription
