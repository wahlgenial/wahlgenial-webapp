import React from 'react'
import { isDeviceMobile } from '../../utils/functions'
const TopicsButton = ({title, onPress, active, index, topicsCount}) => {
  const positionPrecentage = () => {
    // this method calculates the position of an element around half-circle
    // depended on elements count and its index
    const theRatio = (index / topicsCount)
    const shitPrecentage = 1 / topicsCount
    let sum = (theRatio > 0.5) ? (1.00 - theRatio) : (theRatio + shitPrecentage)
    if (sum >= 0.5) { sum = 0.5 } // middle child
    return Math.ceil(sum * 80) // change this number to adjust
  }

  const mobileButton = _ => (
    <div className="btn-container">
      <a
        className={ 'btn btn-primary btn-fat m-1 px-4 py-1' + (active ? ' active' : '') }
        href='#'
        onClick={ (e) => { onPress(); e.preventDefault() } }>
        {title}
      </a>
    </div>
  )

  const desktopButton = _ => (
    <div className="btn-container">
      <a
        style={ { position: 'relative', top: `${positionPrecentage()}%` } }
        className={ 'btn btn-primary btn-fat m-1 py-1 px-3' + (active ? ' active' : '') }
        href='#'
        onClick={ (e) => { onPress(); e.preventDefault() } }>
        {title}
      </a>
    </div>
  )
  return isDeviceMobile() ? mobileButton() : desktopButton()
}

TopicsButton.defaultProps = {}

TopicsButton.propTypes = {}

export default TopicsButton
