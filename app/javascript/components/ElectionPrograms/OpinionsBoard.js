import React from 'react'
import OpinionButton from './OpinionButton'

class OpinionsBoard extends React.Component {
  constructor (props) {
    super(props)
    this.handleStatementShow = this.handleStatementShow.bind(this)
  }

  state = { selectedOpinionIndex: 0 }

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

  currentOpinionDescriptionText () {
    const {selectedOpinionIndex} = this.state
    if (selectedOpinionIndex === null) return 'neutral'
    const {opinions} = this.props
    if (opinions[selectedOpinionIndex].opinion === 'positive') {
      return 'Ja!'
    } else if (opinions[selectedOpinionIndex].opinion === 'negative') {
      return 'Nein!'
    } else {
      return 'Enthalten'
    }
  }

  render () {
    const {opinions} = this.props
    const {selectedOpinionIndex} = this.state
    return (
      <div className="opinionsContainer col-12 no-gutters mt-3 py-3">
        <div className="col-md-8 lg-sm-12 mx-auto">
          <p>Das sagen die Parteien</p>
          <div className="d-flex align-content-stretch flex-wrap justify-content-center">
            { opinions.map((opinion, index) => (
              <OpinionButton
                opinion = { opinion }
                onClick = { this.handleStatementShow }
                key={ index }
                opinionIndex={ index }
                active={ this.isOpinionIsSelected(index) } />
            ))}
          </div>
        </div>
        {(selectedOpinionIndex !== null) && (
          <div className="row container no-gutters px-3 pt-2">
            <div className="col-2 text-opinion">
              {this.currentOpinionDescriptionText()}
            </div>
            <div className="col-10">
              {this.currentOpinionStatement()}
            </div>
          </div>
        )}
      </div>
    )
  }
}

OpinionsBoard.defaultProps = {}

OpinionsBoard.propTypes = {}

export default OpinionsBoard
