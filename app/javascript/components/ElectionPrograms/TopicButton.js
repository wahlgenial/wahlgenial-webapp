import React from 'react'

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
    <div className="btn-container">
      <a
        style={ { position: 'relative', top: `${positionPrecentage()}%` } }
        className={ 'btn btn-primary btn-fat m-1 px-4 py-1' + (active ? ' active' : '') }
        href='#'
        onClick={ (e) => { onPress(); e.preventDefault() } }>
        {title}
      </a>
    </div>
  )
}

TopicsButton.defaultProps = {}

TopicsButton.propTypes = {}

export default TopicsButton
