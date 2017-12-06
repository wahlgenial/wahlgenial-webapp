import React from 'react'

const TermItem = ({title, description, image, imageThumb, onClick, selected}) => {
  return (
    <div
      className={ 'term-item text-left p-3 m-3' + (selected ? ' selected' : '') }
      onClick={ onClick }>
      <p className='term-title'>{title}</p>
      {selected && (
        <div className='term-details clearfix'>
          <a href={ image } target='_blank'>
            <img className='px-1' src={ imageThumb } />
          </a>
          {description}
        </div>)}
    </div>
  )
}

TermItem.defaultProps = {}
TermItem.propTypes = {}
export default TermItem
