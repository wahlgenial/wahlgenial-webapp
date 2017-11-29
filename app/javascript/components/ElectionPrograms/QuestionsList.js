import React from 'react'
import OpinionButton from './OpinionButton'
const QuestionItem = ({text, onClick, opinions = null}) => {
  return (
    <div
      className='question-block px-5 py-4'
      onClick= { () => { onClick() } }>
      <div className='question-block-wrapper'>
        <p className={ (opinions !== null) ? 'active' : '' }>{text}</p>
      </div>
      <div className='p-2'>
        {(opinions !== null) && (
          <OpinionBoard opinions={ opinions } />
        )}
      </div>
    </div>
  )
}

const OpinionBoard = ({opinions}) => {
  return (
    <div className='opinionsContainer'>
      { opinions.map((opinion, index) => (
        <OpinionButton
          opinion = { opinion }
          onClick = { () => { alert('click') } }
          key={ index }
          active={ false } />
      ))}
    </div>
  )
}

class QuestionsList extends React.Component {
  state = {selectedQuestionIndex: 0}

  selectedQuestion () {
    const {selectedQuestionIndex} = this.state
    const {questions} = this.props
    if (this.isQuestionSelected()) {
      return questions[selectedQuestionIndex]
    }
  }

  handleSelectQuestion (topicIndex) {
    if (this.state.selectedQuestionIndex === topicIndex) return
    this.setState({selectedQuestionIndex: topicIndex})
  }

  componentWillReceiveProps (props) {
    this.setState({selectedQuestionIndex: null})
  }

  isQuestionSelected () {
    return (this.state.selectedQuestionIndex !== null)
  }

  handleOpinionData (index) {
    if (this.state.selectedQuestionIndex === index) {
      return this.selectedQuestion().opinions
    }
  }
  render () {
    const {questions} = this.props
    return (
      <div className='questionsListContainer col-lg-12'>
        {questions.map((question, index) => (
          <QuestionItem
            opinions={ this.handleOpinionData(index) }
            onClick= { () => { this.handleSelectQuestion(index) } }
            text={ question.text }
            key={ index } />
        ))}
      </div>
    )
  }
}

QuestionsList.defaultProps = {}

QuestionsList.propTypes = {}

export default QuestionsList
