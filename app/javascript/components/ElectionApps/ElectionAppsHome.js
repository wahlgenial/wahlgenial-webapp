import React from 'react'
import CategoryItem from './CategoryItem'
import HeaderLogo from '../HeaderLogo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ElectionAppsHome = ({appsCategories, handleAppSelect, history}) => {
  const handleAppSelectParent = (a, b) => {
    handleAppSelect(a, b, history)
  }
  return (
    <div>
      <HeaderLogo />
      <ReactCSSTransitionGroup
        transitionAppear={ true }
        transitionAppearTimeout={ 600 }
        transitionEnterTimeout={ 600 }
        transitionLeaveTimeout={ 200 }
        transitionName="electionsapps" >
        <div className="election-apps">
          <div className="text-center mb-5">
            <h1 className="main-title">
              WAHL-APPS
            </h1>
            <p className="w-50 mx-auto text-center">Noch nicht klar, wen du wählen kannst? Schluss mit dem Suchen und Fragen. <br /> Diese Apps und Websites helfen dir, dich zu entscheiden.</p>
          </div>
          <div className="election-apps-desktop">
            {appsCategories.map((category, index) => {
              return (category.apps && category.apps.length !== 0) && (
                <div key={ index } className="category-container mx-auto my-3">
                  <CategoryItem
                    key={ index }
                    categorySlug = { category.slug }
                    categoryIndex={ index }
                    iconName={ category.icon_name }
                    title={ category.title }
                    apps={ category.apps }
                    onClick = { handleAppSelectParent } />
                </div>
              )
            })}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
}

ElectionAppsHome.defadivtProps = {}

ElectionAppsHome.propTypes = {}

export default ElectionAppsHome
