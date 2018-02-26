import React from 'react'
import OpinionsBoard from './OpinionsBoard'
import icons from '../../images/icons'
const QuestionItem = ({text, onClick, opinions = null}) => {
  const activeClass = opinions !== null ? 'active' : ''
  return (
    <div className={ `question-block-wrapper ${activeClass}` }>
      <div className="question-block row container p-0 m-0" onClick= { () => { onClick() } }>
        <div className='icon-container col-md-2 d-none d-lg-flex p-0 m-0'>
          <img className="m-auto" src={ icons.question } />
        </div>
        <div className="question-text-container col-10 d-flex p-0 m-auto">
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
