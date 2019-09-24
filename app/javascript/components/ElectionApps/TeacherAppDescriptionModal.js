import React from 'react'
import icons from '../../images/icons'
import ShareButton from './ShareButton'
import Modal from 'react-bootstrap4-modal'

const AppDescriptionModal = ({isOpen, toggleModal, selectedAppDetails}) => {
  const name = () => {
    return (!selectedAppDetails ? '' : selectedAppDetails.name)
  }
  const logo = () => {
    return (!selectedAppDetails ? '' : selectedAppDetails.logo)
  }
  const description = () => {
    return (!selectedAppDetails ? '' : selectedAppDetails.description)
  }
  const link = () => {
    return (!selectedAppDetails ? '#' : selectedAppDetails.link)
  }
  return (
    <div className="app-description-modal gradient-modal">
      <Modal visible={ isOpen } onClickBackdrop={ () => { toggleModal() } }>
        <div className="modal-heading">
          <div className="modal-close-icon-container" onClick={ () => { toggleModal() } }>
            <img src={ icons.back } />
          </div>
        </div>
        <div className="row col-12 no-gutters">
          <div className="description-img col-lg-6 col-sm-12 order-lg-2 order-sm-1 text-center">
            <img src={ logo() } />
          </div>
          <div className="d-flex flex-column no-gutters">
            <h2 className="app-title text-center text-lg-left">{ name() }</h2>
            <p className="app-description pt-2">
              { description() }
            </p>
          </div>
          <div className="container row btn-container text-lg-left text-sm-center ml-auto col-lg-10 px-4 mb-5 pb-5 no-gutters">
            <div className="col-lg-6 mt-2 col-12">
              <a className="btn-cta btn btn-md btn-default" href={ link() } target="_blank">
                <div className="icon"> &#x1F680; </div>
                <div className="text"> Zur App </div>
              </a>
            </div>
            <div className="col-lg-6 mt-2 col-12">
              <ShareButton />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AppDescriptionModal
