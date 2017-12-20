import React from 'react'
import CategoryItem from './ElectionApps/CategoryItem'
import AppDescription from './ElectionApps/AppDescription'
import AppDescriptionModal from './ElectionApps/AppDescriptionModal'
import { isDeviceMobile } from '../utils/functions'
class ElectionApps extends React.Component {
  constructor (props) {
    super(props)
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
      selectedAppIndex: appIndex,
      appModalIsOpen: isDeviceMobile()
    })
  }

  orderedAppsCategories () {
    // this function rearranges the selected category to the top
    const {categoryIndexOrder, selectedCategoryIndex} = this.state
    if (this.isAnyAppSelected()) {
      if (isDeviceMobile()) return categoryIndexOrder // keep the orginal order for mobile
      categoryIndexOrder.unshift(
        categoryIndexOrder.splice(
          categoryIndexOrder.indexOf(selectedCategoryIndex),
          1
        )[0])
    }
    return categoryIndexOrder
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
    const {appModalIsOpen} = this.state
    const {appsCategories} = this.props
    const selectedAppDetails = this.selectedApp()
    return (
      <div id='election-apps' className='d-flex flex-wrap'>
        <div className='col-lg-12'>
          {this.isAnyAppSelected() && (
            <div className='row col-12 no-gutters'>
              {isDeviceMobile()
                ? (<AppDescriptionModal
                  isOpen={ appModalIsOpen }
                  toggleModal = { this.toggleAppModal }
                  name={ selectedAppDetails.name }
                  logo={ selectedAppDetails.logo }
                  image={ selectedAppDetails.image }
                  description={ selectedAppDetails.description }
                  link={ selectedAppDetails.link } />)
                : (
                  <div className='app-details row col-12 no-gutters'>
                    <AppDescription
                      name={ selectedAppDetails.name }
                      logo={ selectedAppDetails.logo }
                      image={ selectedAppDetails.image }
                      description={ selectedAppDetails.description }
                      link={ selectedAppDetails.link } />
                  </div>)
              }
            </div>)
          }
        </div>
        <div id='app-description' className='m-auto category-container'></div>
        {this.orderedAppsCategories().map((orderedIndex, index) => {
          let category = appsCategories[orderedIndex]
          return (category.apps && category.apps.length !== 0) && (
            <CategoryItem
              key={ index }
              categoryIndex={ orderedIndex }
              iconName={ category.icon_name }
              title={ category.title }
              apps={ category.apps }
              handleAppSelected={ this.isAppSelected }
              onClick = { (categoryIndex, appIndex) => { this.handleAppSelect(categoryIndex, appIndex) } } />)
        })}
      </div>
    )
  }
}

ElectionApps.defadivtProps = {}

ElectionApps.propTypes = {}

export default ElectionApps
