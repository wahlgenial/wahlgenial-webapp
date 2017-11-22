import React from 'react'

import TopicButton from './ElectionPrograms/TopicButton'
import QuestionsList from './ElectionPrograms/QuestionsList'

class ElectionPrograms extends React.Component {
  constructor (props) {
    super(props)
    this.handleSelectTopic = this.handleSelectTopic.bind(this)
  }
  state = { selectedTopicIndex: null }
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
    return (
      <div className="container bg-primary p-3">
        {topics.map((topic, index) => (
          <TopicButton
            key={ index }
            title={ topic.title }
            onPress={ () => { this.handleSelectTopic(index) } } />
        ))}
        {this.topicSelected() && (
          <QuestionsList questions={ this.selectedTopic().questions } />
        )}
      </div>
    )
  }
}

ElectionPrograms.defaultProps = {}

ElectionPrograms.propTypes = {}

export default ElectionPrograms
