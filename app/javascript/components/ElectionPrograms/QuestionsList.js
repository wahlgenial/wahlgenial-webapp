import React from 'react'
const QuestionItem = ({text, onClick, opinions = null}) => {
  return (
    <div
      className='question-block px-5 py-4'
      onClick= { () => { onClick() } }>
      <div className='question-block-wrapper'>
        <p className={ (opinions !== null) ? 'active' : '' }>{text}</p>
      </div>
      <div className='p-2 bg-primary'>
        {(opinions !== null) && (
          <OpinionBoard opinions={ opinions } />
        )}
      </div>
    </div>
  )
}

const OpinionItem = ({opinion}) => {
  return (
    <div>{opinion.party} - {opinion.opinion}</div>
  )
}

const OpinionBoard = ({opinions}) => {
  return (
    <div>
      { opinions.map((opinion, index) => (
        <OpinionItem
          key={ index }
          opinion={ opinion } />
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
