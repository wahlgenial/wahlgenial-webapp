import React from 'react'
import Button from '../Button'

const TopicsButton = ({title, onPress, active, index, topicsCount}) => {
  const positionPrecentage = () => {
    // this method calculates the position of an element around half-circle
    // depended on elements count and its index
    const theRatio = (index / topicsCount)
    const shitPrecentage = 1 / topicsCount
    let sum = (theRatio > 0.5) ? (1.00 - theRatio) : (theRatio + shitPrecentage)
    if (sum >= 0.5) { sum = 0.46 } // middle child
    return Math.ceil(sum * 100)
  }

  return (
    <div className="btn-container d-inline-block">
      <Button
        style={ { position: 'relative', top: `${positionPrecentage()}%` } }
        title={ title }
        onClick={ () => { onPress() } }
        active={ active } />
    </div>
  )
}

TopicsButton.defaultProps = {}

TopicsButton.propTypes = {}

export default TopicsButton
