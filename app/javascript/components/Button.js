import React from 'react'

const Button = ({title = 'Button', href = '#', onClick}) => (
  <a className="bg-warning m-1 px-4 py-2 text-center"
    href={ href }
    onClick={ (e) => { onClick(); e.preventDefault() } }>
    {title}
  </a>
)

Button.defaultProps = {}

Button.propTypes = {}

export default Button
