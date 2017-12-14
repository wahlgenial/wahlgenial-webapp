import React from 'react'
import CategoryItem from './ElectionApps/CategoryItem'
import AppDescription from './ElectionApps/AppDescription'
class ElectionApps extends React.Component {
  constructor (props) {
    super(props)
    this.isAppSelected = this.isAppSelected.bind(this)
    this.state = {
      selectedCategoryIndex: null,
      selectedAppIndex: null,
      // copy categories keys into array
      categoryIndexOrder: Object.keys(this.props.appsCategories)
    }
  }

  handleAppSelect (categoryIndex, appIndex) {
    this.setState({
      selectedCategoryIndex: categoryIndex,
      selectedAppIndex: appIndex
    })
  }

  orderedAppsCategories () {
    // this function rearranges the selected category to the top
    const {categoryIndexOrder, selectedCategoryIndex} = this.state
    if (this.isAnyAppSelected()) {
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

  selectedApp () {
    if (!this.isAnyAppSelected()) return null
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    const {appsCategories} = this.props
    return appsCategories[selectedCategoryIndex].apps[selectedAppIndex]
  }
  isAppSelected (appIndex, categoryIndex) {
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    if (appIndex === selectedAppIndex && categoryIndex === selectedCategoryIndex) {
      return true
    } else {
      return false
    }
  }
  render () {
    const {appsCategories} = this.props
    const selectedAppDetails = this.selectedApp()
    return (
      <div id='election-apps' className='d-flex flex-wrap'>
        <div className='row col-12 no-gutters'>
          {this.isAnyAppSelected() && (
            <div className='app-details row col-12 no-gutters'>
              <AppDescription
                name={ selectedAppDetails.name }
                logo={ selectedAppDetails.logo }
                image={ selectedAppDetails.image }
                description={ selectedAppDetails.description }
                link={ selectedAppDetails.link } />
            </div>)
          }
        </div>
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
