import React from 'react'

import TopicButton from './ElectionPrograms/TopicButton'
import QuestionsList from './ElectionPrograms/QuestionsList'
import { isDeviceMobile } from '../utils/functions'

import icons from '../images/icons'
class ElectionPrograms extends React.Component {
  constructor (props) {
    super(props)
    this.handleSelectTopic = this.handleSelectTopic.bind(this)
  }
  state = { selectedTopicIndex: 0 }
  selectedTopic () {
    const {selectedTopicIndex} = this.state
    const {topics} = this.props
    if (this.topicSelected()) {
      return topics[selectedTopicIndex]
    }
  }
  handleSelectTopic (topicIndex) {
    this.setState({selectedTopicIndex: topicIndex})
  }
  topicSelected () {
    return (this.state.selectedTopicIndex !== null)
  }
  render () {
    const {topics} = this.props
    const {selectedTopicIndex} = this.state
    const topicsButtonsContainerClass = isDeviceMobile() ? 'justify-content-center' : 'flex-row'
    return (
      <div className="col-12 p-0 m-0">
        <div className="call-to-action text-center">
          <img className="" src={ icons.glossaryCallToAction } />
          Wähle ein Thema aus
        </div>
        <div className="topicsButtonsContainer row pb-2">
          <span className={ `topicsButtonsWrapper d-flex ${topicsButtonsContainerClass}` }>
            {topics.map((topic, index) => (
              <TopicButton
                key={ index }
                index={ index }
                topicsCount={ topics.length }
                title={ topic.title }
                active= { index === selectedTopicIndex }
                onPress={ () => { this.handleSelectTopic(index) } } />
            ))}
          </span>
        </div>
        <div className="QuestionsListContainer no-gutters col-lg-12 p-0">
          {this.topicSelected() && (
            <QuestionsList questions={ this.selectedTopic().questions } />
          )}
        </div>
      </div>
    )
  }
}

ElectionPrograms.defaultProps = {}

ElectionPrograms.propTypes = {}

export default ElectionPrograms
