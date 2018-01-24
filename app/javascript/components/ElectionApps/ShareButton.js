import React from 'react'
import icons from '../../images/icons'
class ShareButton extends React.Component {
  state = { shareToggled: false }
  handleShareToggle (event) {
    this.setState({shareToggled: !this.state.shareToggled})
    event.preventDefault()
  }
  render () {
    const {shareToggled} = this.state
    return (
      <div className="btn btn-md btn-default" style={ styles.buttonsWrapper }>
        <div className="share-button-container" style={ { ...styles.buttonsContainer, top: shareToggled ? '-40px' : '0' } } >
          <div style={ styles.buttonWrapper } onClick={ (e) => { this.handleShareToggle(e) } }>
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
    <div style={ styles.buttonWrapper }>
      <a href={ `https://www.facebook.com/sharer/sharer.php?u=${url}` } target="_blank">
        Share on Facebook
      </a>
    </div>
  )
}
const styles = {
  buttonsWrapper: {
    height: '40px',
    overflow: 'hidden'
  },
  buttonWrapper: {
    height: '40px'
  },
  buttonsContainer: {
    position: 'relative'
  }
}
export default ShareButton
