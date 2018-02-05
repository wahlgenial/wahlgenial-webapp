import React from 'react'
import constants from '../utils/constants'

const ghostImage = require('../images/ghost.svg')
const CallToActionGhost = ({
  text = 'Noch nicht sicher, wen du wählen sollst?',
  buttonText = 'Mehr Wahl-Apps',
  link = constants.electionsAppsPath}) => {
  return (
    <div className="call-to-action-ghost">
      <div className="text-center">
        <img src={ ghostImage } />
        <p>{text}</p>
      </div>
      {(link !== false) && (
        <a className='btn btn-default' href={ link }>{ buttonText }</a>
      )}
    </div>
  )
}

CallToActionGhost.defaultProps = {}

CallToActionGhost.propTypes = {}

export default CallToActionGhost
