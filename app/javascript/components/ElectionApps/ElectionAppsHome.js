import React from 'react'
import CategoryItem from './CategoryItem'
const logoImage = require('../../images/wahl-daten-helfer-logo.svg')

class ElectionAppsHome extends React.Component {
  constructors (props) {
    // super(props)
    this.toggleAppModal = this.toggleAppModal.bind(this)
    this.isAppSelected = this.isAppSelected.bind(this)
    this.state = {
      selectedCategoryIndex: null,
      selectedAppIndex: null,
      // copy categories keys into array
      categoryIndexOrder: Object.keys(this.props.appsCategories),
      appModalIsOpen: false
    }
  }

  toggleAppModal () {
    const {appModalIsOpen} = this.state
    this.setState({appModalIsOpen: !appModalIsOpen})
  }

  handleAppSelect (categoryIndex, appIndex) {
    this.setState({
      selectedCategoryIndex: categoryIndex,
      selectedAppIndex: appIndex
    })
  }

  isAnyAppSelected () {
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    return (selectedCategoryIndex !== null && selectedAppIndex !== null)
  }

  isAppSelected (appIndex, categoryIndex) {
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    if (appIndex === selectedAppIndex && categoryIndex === selectedCategoryIndex) {
      return true
    } else {
      return false
    }
  }

  selectedApp () {
    if (!this.isAnyAppSelected()) return null
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    const {appsCategories} = this.props
    return appsCategories[selectedCategoryIndex].apps[selectedAppIndex]
  }

  render () {
    const {appsCategories} = this.props
    return (
      <div className="election-apps">
        <div className="logo-container p-2 d-none d-lg-block d-md-block">
          <a href="/">
            <img src={ logoImage } title='' />
          </a>
        </div>
        <div className="text-center mb-5">
          <h1 className="main-title">
            WAHL-APPS
          </h1>
          <p className="w-50 mx-auto text-center">Was steckt eigentlich hinter den ganzen politischen Wörtern? <br /> Schau selbst nach!</p>
        </div>
        <div className="election-apps-desktop">
          {appsCategories.map((category, index) => {
            return (category.apps && category.apps.length !== 0) && (
              <div key={ index } className="category-container mx-auto my-3">
                <CategoryItem
                  key={ index }
                  categoryIndex={ index }
                  iconName={ category.icon_name }
                  title={ category.title }
                  apps={ category.apps }
                  handleAppSelected={ this.isAppSelected }
                  onClick = { () => { console.log('cliked!') } } />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

ElectionAppsHome.defadivtProps = {}

ElectionAppsHome.propTypes = {}

export default ElectionAppsHome
