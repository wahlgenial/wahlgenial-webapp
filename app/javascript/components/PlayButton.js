import React from 'react'

export default ({title = 'Button', href = '#', onClick = () => {}, active = false}) => (
  <div
    className='play-button'
    href={ href }
    onClick={ (e) => { onClick(); e.preventDefault() } }>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 78.8 78.2">
      <path d="M39,9.1c16.6,0,30,13.4,30,30s-13.4,30-30,30S9,55.6,9,39.1S22.4,9.1,39,9.1 M39,4.1c-19.3,0-35,15.7-35,35 s15.7,35,35,35s35-15.7,35-35S58.3,4.1,39,4.1L39,4.1z" />
      <polygon points="55.8,39.1 31.3,52 31.3,26.1 "/>
    </svg>
  </div>
)
