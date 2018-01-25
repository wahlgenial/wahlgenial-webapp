import React from 'react'
import icons from '../../images/icons'
import AppDescription from './AppDescription'
import Modal from 'react-bootstrap4-modal'

const AppDescriptionModal = ({isOpen, toggleModal, name, logo, image, description, link}) => {
  return (
    <div className="app-description-modal gradient-modal">
      <Modal visible={ isOpen } onClickBackdrop={ () => { toggleModal() } }>
        <div id="heading">
          <div className="modal-close-icon-container" onClick={ () => { toggleModal() } }>
            <img src={ icons.back } />
          </div>
        </div>
        <AppDescription
          name={ name }
          logo={ logo }
          image={ image }
          description={ description }
          link={ link } />
      </Modal>
    </div>
  )
}

export default AppDescriptionModal
