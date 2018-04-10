import React from 'react'
import {Positive, Negative, Neutral} from './AssentIcons'

const OpinionButton = ({opinion, onPress, active, opinionIndex, topicsCount, onClick}) => {
  const partyOpinionIcon = () => {
    if (opinion.opinion === 'positive') {
      return (<Positive />)
    } else if (opinion.opinion === 'negative') {
      return (<Negative />)
    } else {
      return (<Neutral />)
    }
  }
  return (
    <div className="btn-container">
      <div className={ 'btn btn-yellow' + (active ? ' active' : '') } onClick={ () => { onClick(opinionIndex) } }>
        <div className="party-name">
          {opinion.party}
        </div>
        <div className="party-opinion-icon">
          { partyOpinionIcon() }
        </div>
      </div>
    </div>
  )
}

OpinionButton.defaultProps = {}

OpinionButton.propTypes = {}

export default OpinionButton
