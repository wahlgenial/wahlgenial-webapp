import React from 'react'
import icons from '../../images/icons'
import {ShareButtons, generateShareIcon} from 'react-share'
const {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton
} = ShareButtons
const EmailIcon = generateShareIcon('email')
const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const WhatsappIcon = generateShareIcon('whatsapp')

class ShareButton extends React.Component {
  state = { shareToggled: false }
  handleShareToggle (event) {
    this.setState({shareToggled: !this.state.shareToggled})
    event.preventDefault()
  }
  render () {
    const {shareToggled} = this.state
    return (
      <div style={ styles.buttonsWrapper }>
        <div className="share-button-container" style={ { ...styles.buttonsContainer, top: shareToggled ? '-50px' : '0' } } >
          <div className="btn btn-md btn-default" style={ styles.buttonWrapper } onClick={ (e) => { this.handleShareToggle(e) } }>
            <div className="icon">
              <img className="icon pr-3" src={ icons.share } />
            </div>
            <div className="text">
              weiter empfehlen
            </div>
          </div>
          <SocialButtons url={ this.props.url } />
        </div>
      </div>
    )
  }
}

const SocialButtons = ({url}) => {
  return (
    <div className='d-flex justify-content-between px-3'style={ styles.buttonWrapper }>
      <FacebookShareButton
        url={ url }
        quote='Facebook share'>
        <FacebookIcon size={ 50 } round />
      </FacebookShareButton>
      <WhatsappShareButton url={ url } title='WhatsApp share' separator=":: ">
        <WhatsappIcon size={ 50 } round />
      </WhatsappShareButton>
      <TwitterShareButton url={ url } title='Tiwtter share' >
        <TwitterIcon size={ 50 } round />
      </TwitterShareButton>
      <EmailShareButton subject='Probier mal diese Wahl-app aus' body={ `${url}` } >
        <EmailIcon size={ 50 } round />
      </EmailShareButton>
    </div>
  )
}
const styles = {
  buttonsWrapper: { height: '50px', overflow: 'hidden' },
  buttonWrapper: { height: '40px' },
  buttonsContainer: { position: 'relative' }
}
export default ShareButton
