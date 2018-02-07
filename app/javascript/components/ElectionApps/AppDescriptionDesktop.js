import React from 'react'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CallToActionGhost from '../CallToActionGhost'
import ShareButton from './ShareButton'
import HeaderLogo from '../HeaderLogo'
import icons from '../../images/icons'
import constants from '../../utils/constants'
const AppDescriptionDesktop = ({data}) => {
  const {description, image, /* image_thumb, logo, logo_thumb, slug */ link, name} = data
  return (
    <div>
      <HeaderLogo />
      <ReactCSSTransitionGroup
        transitionAppear={ true }
        transitionAppearTimeout={ 600 }
        transitionEnterTimeout={ 600 }
        transitionLeaveTimeout={ 200 }
        transitionName="app-description" >

        <div className="container app-description">
          <div className="back-icon container py-5 ml-4">
            <Link to={ constants.electionsAppsPath }>
              <img src={ icons.dropeDown } />
              zurück zur Übersicht
            </Link>
          </div>
          <div className="container">
            <div id="AppDescription" className="row col-12 no-gutters">
              <a name="app-description"></a>
              <div className="d-flex flex-column col-lg-6 text-left pb-5 px-1 no-gutters">
                <div className="container">
                  <h2 className="app-title text-center text-lg-left">{name}</h2>
                  <p className="app-description pt-2">
                    {description}
                  </p>
                </div>
                <div className="container row btn-container">
                  <div className="col-lg-6 col-sm-12">
                    <a className="btn-cta btn btn-md btn-default" href={ link } target="_blank">
                      <div className="icon">
                        &#x1F680;
                      </div>
                      <div className="text">
                        Zur App
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ShareButton />
                  </div>
                </div>
              </div>
              <div className="description-img col-lg-6 text-center">
                <img className='mt-5 pt-2 mb-3.1' src={ image } />
              </div>
            </div>
          </div>
          <div className="contaienr">
            <CallToActionGhost text='Beliebte Wahl-Apps' link={ false } />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default AppDescriptionDesktop
