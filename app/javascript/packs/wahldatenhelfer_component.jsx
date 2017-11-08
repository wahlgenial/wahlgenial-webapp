import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Wahldatenhelfer = props => (
  <div className="container bg-primary p-3">
    <div className="blockquote mx-auto  my-2 w-50 text-white text-center">This is a react component</div>
  </div>
)

Wahldatenhelfer.defaultProps = {}

Wahldatenhelfer.propTypes = {}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Wahldatenhelfer />,
    document.getElementById('wahldatenhelfer_component').appendChild(document.createElement('div')),
  )
})
