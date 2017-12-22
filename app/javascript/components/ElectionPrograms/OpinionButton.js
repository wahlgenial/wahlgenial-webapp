import React from 'react'
import icons from '../../images/icons'
const OpinionButton = ({opinion, onPress, active, opinionIndex, topicsCount, onClick}) => {
  const partyOpinionIcon = () => {
    if (opinion.opinion === 'positive') {
      return (<img src={ icons.smilePositive } />)
    } else if (opinion.opinion === 'negative') {
      return (<img src={ icons.smileNegative } />)
    } else {
      return (<img src={ icons.smileNeutral } />)
    }
  }
  return (
    <div className="btn-container mx-2 w-25 d-inline-block no-gutters">
      <div className={ 'btn btn-yellow w-100' + (active ? ' active' : '') } onClick={ () => { onClick(opinionIndex) } }>
        <div className="party-name align-self-start">
          {opinion.party}
        </div>
        <div className="party-opinion align-self-end">
          { partyOpinionIcon() }
        </div>
      </div>
    </div>
  )
}

OpinionButton.defaultProps = {}

OpinionButton.propTypes = {}

export default OpinionButton
