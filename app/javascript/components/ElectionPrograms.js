import React from 'react'

import TopicButton from './ElectionPrograms/TopicButton'
import QuestionsList from './ElectionPrograms/QuestionsList'

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
    return (
      <div>
        <div className="topicsButtonsContainer row">
          <span className="topicsButtonsWrapper d-flex justify-content-center">
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
        <div className="QuestionsListContainer h-100 no-gutters">
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
