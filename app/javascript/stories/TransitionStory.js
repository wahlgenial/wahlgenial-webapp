import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import { CSSTransition } from 'react-transition-group'
class Transition extends React.Component {
  state = { showBox: true }
  toggleBox () {
    this.setState({showBox: !this.state.showBox})
  }
  render () {
    const { showBox } = this.state
    return (
      <div className="container col-lg-10 mx-auto">
        <div className="row col-8 my-5 mx-auto">
          <button onClick = { () => { this.toggleBox() } }>Toggle</button>
          <div className="px-3 py-1">{ showBox ? 'visible' : 'hidden' }</div>
        </div>
        <ReactCSSTransitionGroup transitionName="video-cover">
          {showBox && (<TransitionView />)}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

const TransitionView = () => {
  return (
    <div className="col-lg-12">
      <div>Here is something!</div>
    </div>
  )
}

export default Transition
