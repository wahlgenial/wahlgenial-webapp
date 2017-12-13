import React from 'react'
import {ElectionAppsCategoriesIcons} from '../../images/icons'

const CategoryItem = ({iconName, title, categoryIndex, apps, onClick}) => {
  const handleClick = (appId) => {
    onClick(categoryIndex, appId)
  }
  const handleIcon = (iconString) => {
    if (!iconString || iconString === ' ') {
      return (ElectionAppsCategoriesIcons.unknown)
    } else {
      return (ElectionAppsCategoriesIcons[iconName])
    }
  }
  return (
    <div className='px-4 col-12 text-center'>
      <div className='m-auto category-container'>
        <div className='category-title text-left'>
          <div className='category-title-icon pr-1'>
            <img src={ handleIcon(iconName) } title={ title } />
          </div>
          <h2>{title}</h2>
        </div>
        {apps.map((app, index) => (
          <AppItem
            key={ index }
            onClick={ () => { handleClick(index) } }
            name={ app.name }
            description={ app.description }
            link={ app.link } />
        ))}
      </div>
    </div>
  )
}

const AppItem = ({name, description, link, onClick}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 82) + ' ...'
  }
  const handleClick = (e) => {
    onClick()
    e.preventDefault()
  }
  return (
    <div className='app-block card d-inline-block mx-1'>
      <div className="card-body text-left py-4" onClick={ () => { handleClick() } }>
        <h4 className="card-title pt-2">{name}</h4>
        <p className="card-text">{descriptionTurncate()}</p>
        <a href='#' onClick={ (e) => { handleClick(e) } }>
          mehr
        </a>
      </div>
      <div className="card-footer text-center py-2">
        <a href={ !link ? '#' : link }> Los geht's </a>
      </div>
    </div>
  )
}

export default CategoryItem
