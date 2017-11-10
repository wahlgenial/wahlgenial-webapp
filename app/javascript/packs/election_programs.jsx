import React from 'react'
import ReactDOM from 'react-dom'

import ElectionPrograms from '../components/ElectionPrograms'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ElectionPrograms />,
    document.getElementById('election_programs').appendChild(document.createElement('div')),
  )
})
