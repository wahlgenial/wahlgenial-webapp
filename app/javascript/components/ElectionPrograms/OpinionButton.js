import React from 'react'

const OpinionButton = ({opinion, onPress, active, opinionIndex, topicsCount, onClick}) => {
  const partyOpinionIcon = () => {
    if (opinion.opinion === 'positive') {
      return (<img src="/positive.png" />)
    } else if (opinion.opinion === 'negative') {
      return (<img src="/negative.png" />)
    } else {
      return (<img src="/neutral.png" />)
    }
  }
  return (
    <div className="btn-container mx-2 w-25 d-inline-block">
      <div className={ 'btn btn-yellow w-100' + (active ? ' active' : '') } onClick={ () => { onClick(opinionIndex) } }>
        <div className='party-name align-self-start'>
          {opinion.party}
        </div>
        <div className='party-opinion align-self-end'>
          { partyOpinionIcon() }
        </div>
      </div>
    </div>
  )
}

OpinionButton.defaultProps = {}

OpinionButton.propTypes = {}

export default OpinionButton
