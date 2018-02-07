import React from 'react'

const TermItem = ({title, description, image, imageThumb, onClick, selected}) => {
  return (
    <div
      className={ 'term-item text-left p-0 my-4' + (selected ? ' selected' : '') }
      onClick={ onClick }>
      {!selected && (
        <p className="term-title unselectable font-weight-bold px-4 py-3">{title}</p>
      )}
      {selected && (
        <div className="p-0 m-0">
          {imageThumb && (<img className="card-img-top" src={ imageThumb } alt={ title } />)}
          <div className="card-block px-4 pt-3 pb-4">
            <p className="card-title font-weight-bold unselectable pt-3">{title}</p>
            <p className="card-text font-weight-light">{description}</p>
          </div>
        </div>)}
    </div>
  )
}

TermItem.defaultProps = {}
TermItem.propTypes = {}
export default TermItem
