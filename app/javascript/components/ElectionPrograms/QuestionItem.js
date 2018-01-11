import React from 'react'
import OpinionsBoard from './OpinionsBoard'
import icons from '../../images/icons'
const QuestionItem = ({text, onClick, opinions = null}) => {
  const activeClass = opinions !== null ? 'active' : ''
  return (
    <div className="question-block container row px-1 py-4 no-gutters p-0">
      <div className="question-block-wrapper row col-12 m-0 px-2 py-4" onClick= { () => { onClick() } }>
        <div className={ `icon-container col-2 text-center ${activeClass}` }>
          <img src={ icons.question } />
        </div>
        <div className="col-10 p-0 m-0">
          <p className={ (opinions !== null) ? 'active' : '' }>{text}</p>
        </div>
      </div>
      <div className="p-2 col-12">
        {(opinions !== null) && (
          <OpinionsBoard opinions={ opinions } />
        )}
      </div>
    </div>
  )
}
export default QuestionItem
