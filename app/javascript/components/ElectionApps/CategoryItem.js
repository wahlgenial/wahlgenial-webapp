import React from 'react'
import {ElectionAppsCategoriesIcons} from '../../images/icons'
import AppItemDesktop from './AppItemDesktop'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const CategoryItem = ({iconName, title, categorySlug, apps, onClick}) => {
  const handleOnClick = (appSlug) => {
    onClick(categorySlug, appSlug)
  }

  const handleIcon = (iconString) => {
    if (!iconString || iconString === ' ') {
      return (ElectionAppsCategoriesIcons.unknown)
    } else {
      return (ElectionAppsCategoriesIcons[iconName])
    }
  }
  return (
    <ReactCSSTransitionGroup
      transitionAppear={ true }
      transitionAppearTimeout={ 600 }
      transitionEnterTimeout={ 600 }
      transitionLeaveTimeout={ 200 }
      transitionName="category" >
      <div className="m-auto">
        <div className="category-title">
          <img className="category-title-icon" src={ handleIcon(iconName) } title={ title } />
          <h2 className="category-title-text">{title}</h2>
        </div>
        <div className="apps-container d-flex">
          {apps.map((app, index) => (
            <AppItemDesktop
              key={ index }
              onClick={ () => { handleOnClick(app.slug) } }
              name={ app.name }
              description={ app.description }
              link={ app.link } />
          ))}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  )
}
export default CategoryItem
