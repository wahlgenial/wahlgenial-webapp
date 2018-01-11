import React from 'react'
import OpinionButton from './OpinionButton'
import icons from '../../images/icons'

class OpinionsBoard extends React.Component {
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
      <div className="opinionsContainer no-gutters">
        { opinions.map((opinion, index) => (
          <OpinionButton
            opinion = { opinion }
            onClick = { this.handleStatementShow }
            key={ index }
            opinionIndex={ index }
            active={ this.isOpinionIsSelected(index) } />
        ))}
        {(selectedOpinionIndex !== null) && (
          <div className="row container no-gutters px-3 pt-5">
            <div className="col-2">
              <img src={ icons.question } />
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
