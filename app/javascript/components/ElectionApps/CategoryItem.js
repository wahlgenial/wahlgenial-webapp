import React from 'react'
import {ElectionAppsCategoriesIcons} from '../../images/icons'
import AppItemDesktop from './AppItemDesktop'

const CategoryItem = ({iconName, title, categoryIndex, apps, onClick, handleAppSelected}) => {
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
    <div className="m-auto">
      <div className="category-title">
        <img className="category-title-icon" src={ handleIcon(iconName) } title={ title } />
        <h2 className="category-title-text">{title}</h2>
      </div>
      <div className="apps-container d-flex">
        {apps.map((app, index) => (
          <AppItemDesktop
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
export default CategoryItem
