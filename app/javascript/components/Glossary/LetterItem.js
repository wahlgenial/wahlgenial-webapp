import React from 'react'

const LetterItem = ({letter, count, active, onClick}) => {
  const prepareItemClass = () => {
    let itemClass = ' '
    itemClass = (count !== 0) ? 'not-empty' : 'empty'
    if (active) { itemClass += ' active' }
    return itemClass
  }
  const prepareItemClick = (e) => {
    e.preventDefault()
    if (count !== 0) { onClick() }
  }
  return (
    <a
      className={ prepareItemClass() }
      onClick={ (e) => { prepareItemClick(e) } }
      href="#">
      {letter}
    </a>
  )
}

LetterItem.defaultProps = {}

LetterItem.propTypes = {}

export default LetterItem
