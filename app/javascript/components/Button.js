import React from 'react'

const Button = ({title = 'Button', href = '#', onClick, active = false, style = {}}) => (
  <a
    className={ 'btn btn-primary m-1 px-4 py-1' + (active ? ' active' : '') }
    href={ href }
    style={ style }
    onClick={ (e) => { onClick(); e.preventDefault() } }>
    {title}
  </a>
)

Button.defaultProps = {}

Button.propTypes = {}

export default Button
