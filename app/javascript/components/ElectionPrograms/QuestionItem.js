import React from 'react'
import OpinionsBoard from './OpinionsBoard'
import icons from '../../images/icons'
const QuestionItem = ({text, onClick, opinions = null}) => {
  const activeClass = opinions !== null ? 'active' : ''
  return (
    <div className={ `question-block-wrapper ${activeClass}` }>
      <div className="question-block container row" onClick= { () => { onClick() } }>
        <div className='icon-container col-2 d-flex p-0 m-0'>
          <img className="m-auto" src={ icons.question } />
        </div>
        <div className="col-10 d-flex p-0 m-0">
          <div className="question-text w-100 my-auto">{text}</div>
        </div>
      </div>
      {(opinions !== null) && (
        <OpinionsBoard opinions={ opinions } />
      )}
    </div>
  )
}
export default QuestionItem
