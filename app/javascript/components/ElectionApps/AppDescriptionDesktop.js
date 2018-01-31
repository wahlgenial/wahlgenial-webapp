import React from 'react'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ShareButton from './ShareButton'
import HeaderLogo from '../HeaderLogo'
import icons from '../../images/icons'
const AppDescriptionDesktop = (props) => {
  console.log(props)
  return (
    <div>
      <HeaderLogo />
      <ReactCSSTransitionGroup
        transitionAppear={ true }
        transitionAppearTimeout={ 600 }
        transitionEnterTimeout={ 600 }
        transitionLeaveTimeout={ 200 }
        transitionName="app-description" >

        <div className="container app-description bg-danger">
          <div className="back-icon container py-5">
            <Link to='/wahl_apps'>
              <img className="back-icon" src={ icons.dropeDown } />
              zurück zur Übersicht
            </Link>
          </div>
          <div className="container bg-warning">


            <div id="AppDescription" className="row col-12 no-gutters">
              <a name="app-description"></a>
              <div className="description-img col-lg-6 col-sm-12 order-lg-2 order-sm-1 text-center">
                <img className='mt-5 pt-2 mb-3.1' src='' />
              </div>
              <div className="d-flex flex-column col-lg-6 col-sm-12 order-lg-1 order-sm-2 text-left pb-5 px-1 no-gutters">
                <div className="px-4 ml-auto col-lg-10 px-4">
                  <h2 className="app-title text-center text-lg-left">name</h2>
                  <p className="app-description pt-2">
                    description
                  </p>
                </div>
                <div className="container row btn-container text-lg-left text-sm-center ml-auto col-lg-10 px-4 no-gutters">
                  <div className="col-lg-6 col-sm-12">
                    <a className="btn-cta btn btn-md btn-default" href='#' target="_blank">
                      <div className="icon">
                        &#x1F680;
                      </div>
                      <div className="text">
                        Zur App
                      </div>

                    </a>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ShareButton AppName='NAME' url='#' />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default AppDescriptionDesktop
