import React from 'react'
import OpinionButton from './OpinionButton'
const QuestionItem = ({text, onClick, opinions = null}) => {
  return (
    <div
      className="question-block px-5 py-4"
      onClick= { () => { onClick() } }>
      <div className="question-block-wrapper">
        <p className={ (opinions !== null) ? 'active' : '' }>{text}</p>
      </div>
      <div className="p-2">
        {(opinions !== null) && (
          <OpinionBoard opinions={ opinions } />
        )}
      </div>
    </div>
  )
}

class OpinionBoard extends React.Component {
  state = {
    selectedOpinionIndex: null
  }
  constructor (props) {
    super(props)
    this.handleStatementShow = this.handleStatementShow.bind(this)
  }

  handleStatementShow (opinionIndex) {
    if (this.state.selectedOpinionIndex !== opinionIndex) {
      this.setState({selectedOpinionIndex: opinionIndex})
    }
  }

  isOpinionIsSelected (opinionIndex) {
    if (this.state.selectedOpinionIndex === opinionIndex) {
      return true
    } else {
      return false
    }
  }
  currentOpinionStatement () {
    const {selectedOpinionIndex} = this.state
    const {opinions} = this.props
    if (selectedOpinionIndex === null) return ''
    return opinions[selectedOpinionIndex].statement
  }

  render () {
    const {opinions} = this.props
    const {selectedOpinionIndex} = this.state
    return (
      <div className="opinionsContainer">
        { opinions.map((opinion, index) => (
          <OpinionButton
            opinion = { opinion }
            onClick = { this.handleStatementShow }
            key={ index }
            opinionIndex={ index }
            active={ this.isOpinionIsSelected(index) } />
        ))}
        {(selectedOpinionIndex !== null) && (
          <div className="col p-3">
            {this.currentOpinionStatement()}
          </div>
        )}
      </div>
    )
  }
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
      <div className="questionsListContainer col-lg-12">
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
