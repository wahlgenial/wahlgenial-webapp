import React from 'react'
import OpinionsBoard from './OpinionsBoard'
import icons from '../../images/icons'
const QuestionItem = ({text, onClick, opinions = null}) => {
  const activeClass = opinions !== null ? 'active' : ''
  return (
    <div className={ `question-block-wrapper ${activeClass}` }>
      <div className="question-block container row col-12 m-0 px-2 py-5" onClick= { () => { onClick() } }>
        <div className='icon-container col-2 text-center'>
          <img src={ icons.question } />
        </div>
        <div className="col-10 p-0 m-0">
          <div className="question-text">{text}</div>
        </div>
      </div>
      {(opinions !== null) && (
        <OpinionsBoard opinions={ opinions } />
      )}
    </div>
  )
}
export default QuestionItem
