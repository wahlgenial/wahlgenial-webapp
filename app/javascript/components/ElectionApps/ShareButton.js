import React from 'react'
import icons from '../../images/icons'
import {ShareButtons, generateShareIcon} from 'react-share'
import constants from '../../utils/constants'

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

  componentWillReceiveProps () {
    this.setState({shareToggled: null})
  }

  render () {
    const url = window.location.href
    const {shareToggled} = this.state
    return (
      <div style={ styles.buttonsWrapper }>
        <div className="share-button-container" style={ { ...styles.buttonsContainer, top: shareToggled ? '-48px' : '0' } } >
          <div className="btn btn-md btn-default" style={ styles.buttonWrapper } onClick={ (e) => { this.handleShareToggle(e) } }>
            <div className="icon">
              <img className="icon pr-3" src={ icons.share } />
            </div>
            <div className="text">
              teilen
            </div>
          </div>
          <SocialButtons url={ url } />
        </div>
      </div>
    )
  }
}

const SocialButtons = ({url}) => {
  return (
    <div className='d-flex justify-content-between px-3' style={ styles.buttonWrapper }>
      <FacebookShareButton url={ url } appId='782288638629205' quote={ constants.share.facebookMessage }>
        <FacebookIcon size={ 38 } round />
      </FacebookShareButton>
      <WhatsappShareButton url={ url } title={ constants.share.whatsappMessage } separator=":: ">
        <WhatsappIcon size={ 38 } round />
      </WhatsappShareButton>
      <TwitterShareButton url={ url } title={ constants.share.twitterMessage } >
        <TwitterIcon size={ 38 } round />
      </TwitterShareButton>
      <EmailShareButton url={ url } subject={ constants.share.emailSubject } body={ constants.share.emailBody.replace('%url', url) } >
        <EmailIcon size={ 38 } round />
      </EmailShareButton>
    </div>
  )
}
const styles = {
  buttonsWrapper: { height: '48px', overflow: 'hidden' },
  buttonWrapper: { height: '40px' },
  buttonsContainer: { position: 'relative' }
}
export default ShareButton
